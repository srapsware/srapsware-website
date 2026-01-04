/**
 * Link Checker Script for Next.js Website
 * Checks all internal links and reports 404s
 */

import { execSync } from 'child_process'
import { readFileSync, readdirSync, statSync } from 'fs'
import { join, relative } from 'path'

const BASE_URL = 'http://localhost:3000'
const checkedUrls = new Set()
const brokenLinks = []
const externalLinks = []

// Get all internal routes from app directory
function getAllRoutes(dir = 'app', routes = []) {
  const files = readdirSync(dir)
  
  for (const file of files) {
    const fullPath = join(dir, file)
    const stat = statSync(fullPath)
    
    if (stat.isDirectory() && !file.startsWith('_') && !file.startsWith('.')) {
      // Skip api and special Next.js directories
      if (file === 'api' || file.startsWith('(')) continue
      
      const route = '/' + relative('app', fullPath).replace(/\\/g, '/')
      
      // Check if it has a page.tsx
      try {
        const pageFile = join(fullPath, 'page.tsx')
        statSync(pageFile)
        routes.push(route)
      } catch (e) {
        // No page.tsx, continue searching
      }
      
      // Recursively search subdirectories
      getAllRoutes(fullPath, routes)
    }
  }
  
  return routes
}

// Extract all href links from files
function extractLinks(dir = 'app', links = new Set()) {
  const files = readdirSync(dir)
  
  for (const file of files) {
    const fullPath = join(dir, file)
    const stat = statSync(fullPath)
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      extractLinks(fullPath, links)
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      try {
        const content = readFileSync(fullPath, 'utf-8')
        
        // Extract href links
        const hrefRegex = /href=["']([^"']+)["']/g
        let match
        
        while ((match = hrefRegex.exec(content)) !== null) {
          const link = match[1]
          if (link && !link.startsWith('#') && !link.startsWith('javascript:')) {
            links.add({ link, file: relative(process.cwd(), fullPath) })
          }
        }
      } catch (e) {
        // Ignore read errors
      }
    }
  }
  
  return Array.from(links)
}

// Check if URL is accessible
async function checkUrl(url) {
  try {
    const response = await fetch(url, { method: 'HEAD' })
    return {
      url,
      status: response.status,
      ok: response.ok
    }
  } catch (error) {
    return {
      url,
      status: 'ERROR',
      ok: false,
      error: error.message
    }
  }
}

async function main() {
  console.log('🔍 Starting link checker...\n')
  
  // Check if server is running
  try {
    await fetch(BASE_URL)
  } catch (e) {
    console.error('❌ Error: Development server is not running!')
    console.error('   Please start the server with: pnpm dev')
    console.error('   Then run this script in another terminal.\n')
    process.exit(1)
  }
  
  console.log('✅ Server is running at', BASE_URL)
  console.log('📂 Scanning files for links...\n')
  
  // Get all routes
  const routes = getAllRoutes()
  console.log(`📄 Found ${routes.length} routes in app directory`)
  
  // Extract all links from files
  const allLinks = extractLinks()
  console.log(`🔗 Found ${allLinks.length} href links in source files`)
  
  // Also scan components directory
  const componentLinks = extractLinks('components')
  console.log(`🔗 Found ${componentLinks.length} href links in components\n`)
  
  const allHrefLinks = [...allLinks, ...componentLinks]
  
  console.log('🧪 Testing all routes...\n')
  
  // Test all discovered routes
  for (const route of routes) {
    if (checkedUrls.has(route)) continue
    checkedUrls.add(route)
    
    const fullUrl = BASE_URL + route
    const result = await checkUrl(fullUrl)
    
    if (!result.ok) {
      brokenLinks.push({ ...result, link: route, foundIn: 'app directory' })
      console.log(`❌ [${result.status}] ${route}`)
    } else {
      console.log(`✅ [${result.status}] ${route}`)
    }
  }
  
  console.log('\n🧪 Testing href links...\n')
  
  const internalLinks = allHrefLinks.filter(({ link }) => {
    return link.startsWith('/') && !link.startsWith('//') && !link.includes('api/')
  })
  
  for (const { link, file } of internalLinks) {
    // Remove query params and hash for checking
    const cleanLink = link.split('?')[0].split('#')[0]
    
    if (checkedUrls.has(cleanLink)) continue
    checkedUrls.add(cleanLink)
    
    const fullUrl = BASE_URL + cleanLink
    const result = await checkUrl(fullUrl)
    
    if (!result.ok) {
      brokenLinks.push({ ...result, link: cleanLink, foundIn: file })
      console.log(`❌ [${result.status}] ${cleanLink} (in ${file})`)
    } else {
      console.log(`✅ [${result.status}] ${cleanLink}`)
    }
  }
  
  // Report external links
  console.log('\n📡 External links found:')
  const externalLinksSet = new Set()
  allHrefLinks
    .filter(({ link }) => link.startsWith('http') || link.startsWith('//'))
    .forEach(({ link }) => externalLinksSet.add(link))
  
  externalLinksSet.forEach(link => {
    console.log(`   ${link}`)
  })
  
  // Summary
  console.log('\n' + '='.repeat(60))
  console.log('📊 SUMMARY')
  console.log('='.repeat(60))
  console.log(`Total routes found: ${routes.length}`)
  console.log(`Total links checked: ${checkedUrls.size}`)
  console.log(`Broken links found: ${brokenLinks.length}`)
  console.log(`External links found: ${externalLinksSet.size}`)
  
  if (brokenLinks.length > 0) {
    console.log('\n❌ BROKEN LINKS:')
    brokenLinks.forEach(({ link, status, foundIn, error }) => {
      console.log(`\n   URL: ${link}`)
      console.log(`   Status: ${status}`)
      console.log(`   Found in: ${foundIn}`)
      if (error) console.log(`   Error: ${error}`)
    })
    process.exit(1)
  } else {
    console.log('\n✅ All internal links are working!')
  }
}

main().catch(console.error)
