import fs from 'node:fs'
import path from 'node:path'
import ts from 'typescript'
import yaml from 'js-yaml'

const walk = directory => fs.readdirSync(directory, { withFileTypes: true }).flatMap(entry => entry.isDirectory() ? walk(`${directory}/${entry.name}`) : [`${directory}/${entry.name}`])
const pages = walk('app').filter(file => file.endsWith('/page.tsx'))
const staticRoutes = new Set(pages.filter(file => !file.includes('[')).map(file => file.replace(/^app/, '').replace(/\/page.tsx$/, '') || '/'))
const known = new Set([...staticRoutes, '/sitemap.xml', '/robots.txt', '/opengraph-image'])
const failures = []
let checks = 0
// CMS offering routes are rendered by the catch-all templates, not individual TSX files.
for (const folder of ['services', 'solutions']) {
  for (const file of walk(`content/${folder}`).filter(file => file.endsWith('.md'))) {
    const raw = fs.readFileSync(file, 'utf8').replace(/^\uFEFF/, '')
    const header = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/)
    const data = header ? yaml.load(header[1]) : null
    if (data?.route && !data.draft && data.active !== false) known.add('/' + data.route)
  }
}
for (const [folder, prefix] of [['posts', '/blog/'], ['portfolios', '/portfolio/']]) {
  for (const file of walk(`content/${folder}`).filter(file => file.endsWith('.md'))) {
    try {
      const raw = fs.readFileSync(file, 'utf8').replace(/^\uFEFF/, '')
      const frontmatter = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/)
      if (!frontmatter) throw new Error('Missing frontmatter')
      const data = yaml.load(frontmatter[1])
      if (!data.title) failures.push(`${file}: missing title`)
      if (typeof data.image === 'string' && data.image.startsWith('/assets/') && !fs.existsSync(`public${data.image}`)) failures.push(`${file}: missing local image ${data.image}`)
      if (data.date && isNaN(new Date(data.date).getTime())) failures.push(`${file}: invalid date`)
      if (!data.draft) known.add(prefix + path.basename(file, '.md'))
    } catch { failures.push(`${file}: invalid frontmatter`) }
  }
}
const techData = yaml.load(fs.readFileSync('content/data/technologies.yml', 'utf8'))
const technologies = Array.isArray(techData) ? techData : techData.technologies
for (const technology of technologies || []) known.add(`/technologies/${technology.slug}`)
const genericPatterns = pages.filter(file => file.includes('[')).map(file => new RegExp('^' + file.replace(/^app/, '').replace(/\/page.tsx$/, '').replace(/\[[^\]]+\]/g, '[^/]+') + '$'))
function check(href, file) {
  if (typeof href !== 'string' || (!href.startsWith('/') && href !== '#')) return
  checks++
  const route = href.split(/[?#]/)[0] || (href === '#' ? '#' : '/')
  if (route === '#') { failures.push(`${file}: placeholder link`); return }
  if (known.has(route) || fs.existsSync(`public${route}`)) return
  // Blog and portfolio slugs must exist, not merely match a dynamic route.
  if (!/^\/(blog|portfolio)\/[^/]+$/.test(route) && genericPatterns.some(pattern => pattern.test(route))) return
  failures.push(`${file}: ${href}`)
}
for (const file of [...walk('app'), ...walk('components'), ...walk('config'), ...walk('content/data')].filter(file => /\.(tsx?|json)$/.test(file))) {
  const text = fs.readFileSync(file, 'utf8')
  if (file.endsWith('.json')) {
    const visit = value => {
      if (Array.isArray(value)) return value.forEach(visit)
      if (value && typeof value === 'object') for (const [key, field] of Object.entries(value)) {
        if (['href', 'link'].includes(key)) check(field, file)
        else visit(field)
      }
    }
    visit(JSON.parse(text)); continue
  }
  const source = ts.createSourceFile(file, text, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX)
  function visit(node) {
    if (ts.isJsxAttribute(node) && node.name.getText(source) === 'href' && node.initializer && ts.isStringLiteral(node.initializer)) check(node.initializer.text, file)
    if (ts.isPropertyAssignment(node) && ['href','link','ctaPrimaryLink','ctaSecondaryLink'].includes(node.name.getText(source).replace(/['"]/g, '')) && ts.isStringLiteral(node.initializer)) check(node.initializer.text, file)
    ts.forEachChild(node, visit)
  }
  visit(source)
}
const duplicates = [...new Set(failures)]
console.log(`Checked ${checks} literal internal links and content records.`)
if (duplicates.length) { console.error(duplicates.join('\n')); process.exitCode = 1 }
else console.log('No broken literal internal links or malformed content found. Dynamic links are covered separately by browser smoke tests.')

