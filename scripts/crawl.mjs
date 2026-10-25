import assert from 'node:assert/strict'
import fs from 'node:fs'
fs.mkdirSync('reports',{recursive:true})

const base = process.env.TEST_BASE_URL || 'http://127.0.0.1:3100'
const manifest = JSON.parse(fs.readFileSync(`${process.env.SRAPSWARE_BUILD_DIR||'.next'}/prerender-manifest.json`, 'utf8'))
const routes = Object.keys(manifest.routes).filter(route => !route.startsWith('/api/') && !route.startsWith('/_'))
const failures = []
let cursor = 0
await Promise.all(Array.from({ length: 4 }, async () => {
  while (cursor < routes.length) {
    const route = routes[cursor++]
    try {
      const result = await fetch(base + route, { signal: AbortSignal.timeout(20_000) })
      if (!result.ok) failures.push({ route, status: result.status })
      await result.arrayBuffer()
    } catch (error) { failures.push({ route, error: error.message }) }
  }
}))
fs.writeFileSync('reports/route-results.json', JSON.stringify({ checked: routes.length, failures }, null, 2) + '\n')
assert.deepEqual(failures, [])
console.log(`PASS: ${routes.length} prerendered routes served successfully.`)
