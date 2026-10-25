import test from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'
import { readCollection,inquiryLink,getOfferings,getProducts,getProductDocuments } from '../lib/page-content'
import { selectRelatedWork } from '../lib/related-work'
import { parseContact } from '../lib/contact-schema'
import type { Portfolio } from '../lib/content'

test('draft and inactive content are excluded, published Markdown round-trips',()=>{
 const directory=fs.mkdtempSync(path.join(process.cwd(),'content','.test-content-'))
 try{
  fs.writeFileSync(path.join(directory,'public.md'),'---\ntitle: Public entry\n---\n\n## A real heading\n')
  fs.writeFileSync(path.join(directory,'draft.md'),'---\ntitle: Draft\ndraft: true\n---\nHidden\n')
  fs.writeFileSync(path.join(directory,'inactive.md'),'---\ntitle: Inactive\nactive: false\n---\nHidden\n')
  const result=readCollection<{title:string;content:string;slug:string}>(path.basename(directory))
  assert.equal(result.length,1);assert.equal(result[0].slug,'public');assert.match(result[0].content,/## A real heading/)
 }finally{for(const file of fs.readdirSync(directory))fs.unlinkSync(path.join(directory,file));fs.rmdirSync(directory)}
})
test('curated project selection wins, excludes current project and stays relevant',()=>{
 const projects=[{slug:'a',technologies:['React']},{slug:'b',technologies:['PHP']},{slug:'c',technologies:['React']} ] as Portfolio[]
 assert.deepEqual(selectRelatedWork(projects,{slugs:['b'],technologies:['React'],exclude:'a'}).map(p=>p.slug),['b','c'])
 assert.deepEqual(selectRelatedWork(projects,{technologies:['Unknown']}),[])
})
test('inquiry context is encoded and validates through the server schema',()=>{
 const url=new URL(inquiryLink({product:'Likha Editor',source:'/product/likha-editor'}),'https://www.srapsware.com')
 assert.equal(url.searchParams.get('product'),'Likha Editor')
 const form=new FormData();form.set('firstName','Client');form.set('email','client@example.com');form.set('message','Please help with our editor integration.');form.set('productContext','Likha Editor');form.set('sourcePage','/product/likha-editor')
 assert.equal(parseContact(form).values.productContext,'Likha Editor');assert.deepEqual(parseContact(form).errors,{})
 form.set('sourcePage','https://example.com');assert.ok(parseContact(form).errors.sourcePage)
})
test('GPS Hunter remains unreleased with working legal records and no fake store URL',()=>{
 const product=getProducts().find(p=>p.slug==='gpshunter')!
 assert.equal(product.storeUrl,'');assert.match(product.status,/not yet publicly released/i)
 assert.deepEqual(getProductDocuments().filter(d=>d.product===product.slug).map(d=>d.kind).sort(),['privacy','terms'])
 assert.ok(getOfferings().every(item=>item.questions.length>0))
})
