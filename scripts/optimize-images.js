#!/usr/bin/env node

import imagemin from 'imagemin'
import imageminMozjpeg from 'imagemin-mozjpeg'
import imageminPngquant from 'imagemin-pngquant'
import imageminWebp from 'imagemin-webp'
import { optimize as svgoOptimize } from 'svgo'
import { glob } from 'glob'
import fs from 'fs/promises'
import path from 'path'
import chalk from 'chalk'

const args = process.argv.slice(2)
const isDryRun = args.includes('--dry-run')
const createBackup = args.includes('--backup')
const targetDir = args.find(arg => !arg.startsWith('--')) || 'public/assets'

console.log(chalk.bold.blue('\n🖼️  Image Optimization Tool\n'))

// Configuration
const config = {
  jpg: {
    quality: 85,
    encoder: 'mozjpeg'
  },
  png: {
    quality: 85,
    encoder: 'oxipng'
  },
  webp: {
    quality: 85,
    encoder: 'webp'
  }
}

// Stats
const stats = {
  processed: 0,
  skipped: 0,
  errors: 0,
  originalSize: 0,
  optimizedSize: 0
}

/**
 * Format bytes to human readable
 */
function formatBytes(bytes) {
  if (bytes === 0) return '0 B'
  const k = 1024
  const sizes = ['B', 'KB', 'MB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
}

/**
 * Optimize SVG files
 */
async function optimizeSVG(filePath) {
  try {
    const content = await fs.readFile(filePath, 'utf8')
    const originalSize = Buffer.byteLength(content)
    
    const result = svgoOptimize(content, {
      path: filePath,
      multipass: true,
      plugins: [
        {
          name: 'preset-default',
          params: {
            overrides: {
              // Don't remove viewBox (important for scaling)
              removeViewBox: false,
              // Don't minify IDs (might break references)
              cleanupIds: false
            }
          }
        },
        'removeComments',
        'removeMetadata',
        'removeXMLNS'
      ]
    })

    const optimizedSize = Buffer.byteLength(result.data)
    const savings = originalSize - optimizedSize
    
    if (savings > 0 && !isDryRun) {
      await fs.writeFile(filePath, result.data)
    }

    return { originalSize, optimizedSize, savings }
  } catch (error) {
    throw new Error(`SVG optimization failed: ${error.message}`)
  }
}

/**
 * Optimize raster images (JPG, PNG, WebP)
 */
async function optimizeRaster(filePath, ext) {
  try {
    const originalBuffer = await fs.readFile(filePath)
    const originalSize = originalBuffer.length
    
    // Determine plugins based on file type
    let plugins = []
    switch (ext) {
      case '.jpg':
      case '.jpeg':
        plugins = [imageminMozjpeg({ quality: config.jpg.quality })]
        break
      case '.png':
        plugins = [imageminPngquant({ quality: [0.8, 0.9] })]
        break
      case '.webp':
        plugins = [imageminWebp({ quality: config.webp.quality })]
        break
      default:
        return null
    }
    
    // Optimize image
    const optimizedBuffer = await imagemin.buffer(originalBuffer, { plugins })
    const optimizedSize = optimizedBuffer.length
    const savings = originalSize - optimizedSize
    
    // Only save if we actually reduced size
    if (savings > 0 && !isDryRun) {
      await fs.writeFile(filePath, optimizedBuffer)
    }

    return { originalSize, optimizedSize, savings }
  } catch (error) {
    throw new Error(`Raster optimization failed: ${error.message}`)
  }
}

/**
 * Create backup of original files
 */
async function createBackupDir(files) {
  const backupDir = path.join(process.cwd(), 'public/assets/original-backup')
  await fs.mkdir(backupDir, { recursive: true })
  
  console.log(chalk.yellow(`📦 Creating backup in ${backupDir}...`))
  
  for (const file of files) {
    const relativePath = path.relative(path.join(process.cwd(), 'public/assets'), file)
    const backupPath = path.join(backupDir, relativePath)
    await fs.mkdir(path.dirname(backupPath), { recursive: true })
    await fs.copyFile(file, backupPath)
  }
  
  console.log(chalk.green('✓ Backup created\n'))
}

/**
 * Main optimization function
 */
async function optimizeImages() {
  // Find all image files (excluding SVG for safety)
  const patterns = [
    `${targetDir}/**/*.{jpg,jpeg,png,webp}`,
    '!**/node_modules/**',
    '!**/original-backup/**'
  ]
  
  console.log(chalk.gray(`Scanning: ${targetDir}\n`))
  
  const files = await glob(patterns, { 
    cwd: process.cwd(),
    absolute: true 
  })
  
  if (files.length === 0) {
    console.log(chalk.yellow('No images found!'))
    return
  }
  
  console.log(chalk.cyan(`Found ${files.length} images\n`))
  
  // Create backup if requested
  if (createBackup && !isDryRun) {
    await createBackupDir(files)
  }
  
  // Process each image
  for (let i = 0; i < files.length; i++) {
    const file = files[i]
    const ext = path.extname(file).toLowerCase()
    const fileName = path.basename(file)
    const progress = `[${i + 1}/${files.length}]`
    
    try {
      let result
      
      // Only optimize raster images
      result = await optimizeRaster(file, ext)
      
      if (result && result.savings > 0) {
        const percent = ((result.savings / result.originalSize) * 100).toFixed(1)
        const savedText = `${formatBytes(result.savings)} (${percent}%)`
        
        console.log(
          chalk.gray(progress),
          chalk.green('✓'),
          fileName,
          chalk.gray('→'),
          chalk.green(savedText)
        )
        
        stats.processed++
        stats.originalSize += result.originalSize
        stats.optimizedSize += result.optimizedSize
      } else {
        console.log(
          chalk.gray(progress),
          chalk.yellow('−'),
          fileName,
          chalk.gray('(already optimized)')
        )
        stats.skipped++
      }
    } catch (error) {
      console.log(
        chalk.gray(progress),
        chalk.red('✗'),
        fileName,
        chalk.red(error.message)
      )
      stats.errors++
    }
  }
  
  // Print summary
  const totalSavings = stats.originalSize - stats.optimizedSize
  const totalPercent = stats.originalSize > 0 
    ? ((totalSavings / stats.originalSize) * 100).toFixed(1)
    : 0
  
  console.log(chalk.bold.blue('\n📊 Summary:\n'))
  console.log(chalk.green(`✓ Optimized: ${stats.processed}`))
  console.log(chalk.yellow(`− Skipped: ${stats.skipped}`))
  console.log(chalk.red(`✗ Errors: ${stats.errors}`))
  console.log(chalk.bold(`\n💾 Total savings: ${formatBytes(totalSavings)} (${totalPercent}%)`))
  console.log(chalk.gray(`   Before: ${formatBytes(stats.originalSize)}`))
  console.log(chalk.gray(`   After:  ${formatBytes(stats.optimizedSize)}`))
  
  if (isDryRun) {
    console.log(chalk.yellow('\n⚠️  DRY RUN - No files were modified'))
  } else {
    console.log(chalk.green('\n✓ Optimization complete!'))
  }
}

// Run optimization
optimizeImages().catch((error) => {
  console.error(chalk.red('\n✗ Error:'), error.message)
  process.exit(1)
})
