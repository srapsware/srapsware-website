import fs from 'node:fs'
import assert from 'node:assert/strict'
const base=process.env.REVIEW_URL||'http://127.0.0.1:3100'
const manifest=JSON.parse(fs.readFileSync('.next-inner/prerender-manifest.json','utf8'))
const paths=Object.keys(manifest.routes).filter(p=>!p.includes('.')&&!p.startsWith('/api/')&&!p.includes('/downloads/')&&!p.endsWith('opengraph-image')&&p!=='/_not-found')
const results=[]
for(let i=0;i<paths.length;i+=8)await Promise.all(paths.slice(i,i+8).map(async route=>{
 const response=await fetch(base+route);const html=await response.text();const result={route,status:response.status,h1:(html.match(/<h1(?:\s|>)/g)||[]).length,main:(html.match(/<main(?:\s|>)/g)||[]).length,title:!!html.match(/<title>[^<]+<\/title>/),canonical:/rel="canonical"/.test(html)};results.push(result)
}))
fs.writeFileSync('docs/inner-route-crawl.json',JSON.stringify(results,null,2))
const failures=results.filter(r=>r.status!==200||r.h1!==1||r.main!==1||!r.title||!r.canonical)
console.log(`Crawled ${results.length} rendered pages. ${failures.length} failures.`);console.log(JSON.stringify(failures.slice(0,20)))
assert.equal(failures.length,0)
