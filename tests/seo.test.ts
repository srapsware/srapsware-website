import test from 'node:test'
import assert from 'node:assert/strict'
import { completeMetadata,jsonLd,plainDescription } from '../lib/seo'
import { sitemapResponse } from '../lib/sitemap'
import { getAllCategories,getAllTags } from '../lib/content'

test('page social metadata follows the page and keeps article properties',()=>{
  const meta=completeMetadata({title:'A specific article',description:'Read **our** [guide](/guide).',alternates:{canonical:'/blog/article'},openGraph:{type:'article',publishedTime:'2026-10-25',images:['/cover.png']}})
  assert.equal(meta.description,'Read our guide.')
  assert.equal(meta.openGraph?.title,'A specific article')
  assert.equal(meta.twitter?.title,'A specific article')
  assert.deepEqual(meta.twitter?.images,['/cover.png'])
  assert.equal(meta.openGraph?.url,'/blog/article')
  assert.equal('publishedTime' in meta.openGraph! && meta.openGraph.publishedTime,'2026-10-25')
})
test('JSON-LD cannot terminate its script element',()=>{
  const data={name:'</script><script>alert(1)</script>'}
  assert.ok(!jsonLd(data).includes('<'))
  assert.deepEqual(JSON.parse(jsonLd(data)),data)
  assert.equal(plainDescription('## Hello\n\nUseful `code`.'),'Hello Useful code.')
})
test('blog sitemap includes every published category and tag',async()=>{
  const xml=await sitemapResponse('blog').text()
  for(const [kind,values]of [['category',getAllCategories()],['tag',getAllTags()]] as const)
    for(const value of values)assert.ok(xml.includes(`/blog/${kind}/${encodeURIComponent(value.toLowerCase().replace(/\s+/g,'-'))}`))
})
