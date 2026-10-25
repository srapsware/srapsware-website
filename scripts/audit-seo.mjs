import fs from 'node:fs'
import assert from 'node:assert/strict'
const base=process.env.REVIEW_URL||'http://127.0.0.1:3100'
const build=process.env.SRAPSWARE_BUILD_DIR||'.next'
const manifest=JSON.parse(fs.readFileSync(`${build}/prerender-manifest.json`))
const routes=Object.keys(manifest.routes).filter(p=>!(/\.(xml|txt|ico|png|svg)$/.test(p))&&!p.startsWith('/api/')&&!p.includes('/downloads/')&&!p.endsWith('opengraph-image')&&p!=='/_not-found')
const decode=s=>(s||'').replace(/&amp;/g,'&').replace(/&quot;/g,'"').replace(/&#x27;/g,"'")
const normalize=path=>decodeURIComponent(path).replace(/\/$/,'')||'/'
const attr=(tag,key)=>decode(tag.match(new RegExp('(?:^|\\s)'+key+'="([^"]*)"'))?.[1])
const maps=await Promise.all(['static','services','solutions','blog','portfolio','technologies'].map(async k=>{const r=await fetch(base+'/sitemap-'+k+'.xml');assert.equal(r.status,200);return r.text()}))
const mapped=new Set(maps.flatMap(s=>[...s.matchAll(/<loc>(.*?)<\/loc>/g)].map(m=>normalize(new URL(decode(m[1])).pathname))))
const report=[]
for(let i=0;i<routes.length;i+=8)await Promise.all(routes.slice(i,i+8).map(async route=>{
 const r=await fetch(base+route),html=await r.text()
 const metas=[...html.matchAll(/<meta\s[^>]*>/g)].map(m=>m[0])
 const meta=name=>attr(metas.find(t=>attr(t,'name')===name||attr(t,'property')===name)||'','content')
 const links=[...html.matchAll(/<link\s[^>]*>/g)].map(m=>m[0])
 const schemas=[...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(m=>{try{return JSON.parse(m[1])}catch{return {error:true}}})
 const hrefs=[...html.matchAll(/<a\s[^>]*>/g)].map(m=>attr(m[0],'href')).filter(h=>h.startsWith('/')&&!h.startsWith('//')).map(h=>normalize(new URL(h,base).pathname))
 const canonical=attr(links.find(t=>attr(t,'rel')==='canonical')||'','href')
 report.push({route,status:r.status,title:decode(html.match(/<title>(.*?)<\/title>/)?.[1]),description:meta('description'),canonical,robots:meta('robots'),ogTitle:meta('og:title'),ogDescription:meta('og:description'),ogImage:meta('og:image'),twitterTitle:meta('twitter:title'),h1:(html.match(/<h1(?:\s|>)/g)||[]).length,inSitemap:mapped.has(normalize(route)),schemas:schemas.flatMap(s=>s['@type']||s['@graph']?.map(g=>g['@type'])||'invalid'),hrefs})
}))
report.sort((a,b)=>a.route.localeCompare(b.route))
const known=new Set(report.map(r=>normalize(r.route))),incoming=new Set(report.flatMap(r=>r.hrefs))
for(const path of ['/sitemap.xml','/robots.txt']) {
  assert.equal((await fetch(base+path)).status,200,path)
  known.add(path)
}
for(const row of report){row.linkedFromHtml=incoming.has(normalize(row.route));row.errors=[]
 if(row.status!==200)row.errors.push('non-200')
 if(!row.title||!row.description)row.errors.push('missing title/description')
 if(!row.canonical||normalize(new URL(row.canonical,base).pathname)!==normalize(row.route))row.errors.push('canonical mismatch')
 if(row.canonical&&new URL(row.canonical,base).origin!==(process.env.SEO_CANONICAL_ORIGIN||'https://www.srapsware.com'))row.errors.push('canonical origin mismatch')
 if(/noindex/i.test(row.robots))row.errors.push('public page noindex')
 if(row.h1!==1)row.errors.push('H1 count')
 if(!row.inSitemap)row.errors.push('missing sitemap')
 if(!row.ogImage||!row.ogTitle||!row.ogDescription||!row.twitterTitle)row.errors.push('incomplete social metadata')
 if(row.schemas.includes('invalid'))row.errors.push('invalid JSON-LD')
 row.brokenInternalLinks=[...new Set(row.hrefs.filter(h=>!known.has(h)&&!h.startsWith('/api/')&&!h.startsWith('/resources/downloads/')&&!fs.existsSync('public'+h)))]
 if(row.brokenInternalLinks.length)row.errors.push('broken internal link')
 delete row.hrefs
}
const duplicates=key=>Object.entries(Object.groupBy(report,r=>r[key])).filter(([value,rows])=>value&&rows.length>1).map(([value,rows])=>({value,routes:rows.map(r=>r.route)}))
const negative=[]
for(const path of ['/this-page-does-not-exist','/portfolio/not-a-real-project','/services/not-a-real-service','/product/not-a-real-product']){const r=await fetch(base+path);negative.push({path,status:r.status});assert.equal(r.status,404,path)}
const summary={pages:report.length,failures:report.filter(r=>r.errors.length).map(r=>({route:r.route,errors:r.errors,links:r.brokenInternalLinks})),duplicateTitles:duplicates('title'),duplicateDescriptions:duplicates('description'),unlinkedPages:report.filter(r=>!r.linkedFromHtml).map(r=>r.route),negativeChecks:negative}
fs.mkdirSync('reports',{recursive:true})
fs.writeFileSync('reports/seo-pages.json',JSON.stringify(report,null,2))
fs.writeFileSync('reports/seo-summary.json',JSON.stringify(summary,null,2))
const columns=['route','status','title','description','canonical','inSitemap','linkedFromHtml','schemas','errors']
const csv=value=>'"'+String(Array.isArray(value)?value.join('; '):value??'').replaceAll('"','""')+'"'
fs.writeFileSync('reports/seo-pages.csv',[columns.join(','),...report.map(r=>columns.map(k=>csv(r[k])).join(','))].join('\n'))
console.log(JSON.stringify(summary,null,2))
assert.equal(summary.failures.length,0,'See reports/seo-pages.json')
assert.equal(summary.duplicateTitles.length,0,'Duplicate page titles')
assert.equal(summary.duplicateDescriptions.length,0,'Duplicate page descriptions')
assert.equal(summary.unlinkedPages.length,0,'Pages without incoming HTML links')
