import fs from 'node:fs'
const walk = directory => fs.readdirSync(directory, { withFileTypes: true }).flatMap(entry => entry.isDirectory() ? walk(`${directory}/${entry.name}`) : [`${directory}/${entry.name}`])
const routes = walk('app').filter(file => file.endsWith('/page.tsx') && !file.includes('[')).map(file => file.replace(/^app/, '').replace(/\/page.tsx$/, '') || '/').sort()
fs.writeFileSync('config/routes.json', JSON.stringify(routes, null, 2) + '\n')
console.log(`Registered ${routes.length} static routes.`)
