import assert from 'node:assert/strict'
import fs from 'node:fs'
import yaml from 'js-yaml'
import { getOfferings,getProducts,getProductDocuments,getResources,getFAQs,sceneKeys } from '../lib/page-content'
import { getAllPortfolio,getTechnologies } from '../lib/content'
const projects=new Set(getAllPortfolio().map(p=>p.slug)), technologies=new Set(getTechnologies().map(t=>t.title))
const offerings=getOfferings(), products=getProducts(), documents=getProductDocuments()
const routes=JSON.parse(fs.readFileSync('config/routes.json','utf8')) as string[]
for(const route of routes.filter(route=>/^\/(services|solutions)(\/|$)/.test(route))){
  assert.ok(offerings.some(item=>'/'+item.route===route),`Missing content for static route: ${route}`)
}
for(const item of offerings){
  assert.ok(item.title&&item.description,`Missing offering summary: ${item.slug}`)
  for(const field of ['features','steps','children','questions'] as const)assert.ok(Array.isArray(item[field]),`Invalid ${field}: ${item.slug}`)
}
for(const item of [...offerings,...products]){
  assert.ok(sceneKeys.includes(item.scene),`Unknown illustration: ${item.slug}`)
  for(const project of item.relatedProjects||[])assert.ok(projects.has(project),`Unknown project ${project} on ${item.slug}`)
  for(const technology of item.technologies||[])assert.ok(technologies.has(technology),`Unknown technology ${technology} on ${item.slug}`)
}
const publicPaths=new Set<string>()
for(const product of products){
  assert.match(product.slug,/^[a-z0-9]+(?:-[a-z0-9]+)*$/)
  assert.ok(product.title&&product.description&&product.features.length&&product.content.trim(),`Incomplete product: ${product.slug}`)
  for(const key of ['website','docsUrl','repository','storeUrl'] as const)if(product[key]){assert.ok(product[key]!.startsWith('https://'));assert.ok(!/placeholder|example\.com/i.test(product[key]!))}
  for(const image of product.screenshots||[]){assert.ok(image.alt);if(image.image.startsWith('/'))assert.ok(fs.existsSync('public'+image.image))}
  publicPaths.add(`/product/${product.slug}`)
}
for(const doc of documents){const path=`/product/${doc.product}/${doc.kind}`;assert.ok(!publicPaths.has(path),`Duplicate document ${path}`);publicPaths.add(path);assert.ok(doc.content.trim().length>40,`Empty document ${path}`)}
assert.ok(documents.some(d=>d.product==='gpshunter'&&d.kind==='privacy'))
assert.ok(documents.some(d=>d.product==='gpshunter'&&d.kind==='terms'))
assert.ok(getFAQs().length>=6)
assert.ok(getResources().every(r=>r.sections.length>0))
const cms=yaml.load(fs.readFileSync('public/admin/config.yml','utf8')) as {collections:{name:string;fields?:{name:string}[]}[]}
for(const name of ['services','solutions','products','productDocuments','resources','pages','faq'])assert.ok(cms.collections.some(c=>c.name===name),`Missing CMS collection ${name}`)
for(const collection of cms.collections){const names=collection.fields?.map(f=>f.name)||[];assert.equal(new Set(names).size,names.length,`Duplicate CMS fields in ${collection.name}`)}
console.log(`PASS: ${offerings.length} offerings, static routes, ${products.length} products, ${documents.length} product documents, CMS fields and relationships.`)
