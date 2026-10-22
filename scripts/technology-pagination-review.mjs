import { chromium } from 'playwright'
import AxeBuilder from '@axe-core/playwright'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import yaml from 'js-yaml'
const expected = yaml.load(fs.readFileSync('content/data/technologies.yml', 'utf8')).technologies.filter(t => t.active && t.featured)
const browser = await chromium.launch()
const results = []
try {
 for (const width of [1440, 1024, 768, 390, 320]) {
  const context = await browser.newContext({viewport:{width,height:1050}, reducedMotion:width===320?'reduce':'no-preference'})
  const page=await context.newPage(); const errors=[]; page.on('pageerror',e=>errors.push(e.message))
  await page.goto('http://127.0.0.1:3100',{waitUntil:'domcontentloaded'})
  await page.getByRole('button',{name:/Switch to .* mode/}).waitFor()
  const s=page.locator('#technology-atlas');const tiles=s.locator('.atlas-tile');const more=s.getByRole('button',{name:/Show more technologies/})
  const cols=await s.locator('.atlas-catalogue').evaluate(el=>getComputedStyle(el).gridTemplateColumns.split(' ').length)
  assert.equal(await tiles.count(),cols*2)
  assert.equal(await s.getByRole('button',{name:'All',exact:true}).getAttribute('aria-pressed'),'true')
  assert.equal(await s.locator('.atlas-inline-detail').count(),0)
  for(const theme of ['light','dark']) {
   if(await page.evaluate(()=>document.documentElement.classList.contains('dark')) !== (theme==='dark')) await page.getByRole('button',{name:`Switch to ${theme} mode`}).click()
   await s.locator('.atlas-catalogue-heading').evaluate(el => el.scrollIntoView({ block: 'start', behavior: 'instant' }))
   const violations=(await new AxeBuilder({page}).include('#technology-atlas').analyze()).violations
   assert.deepEqual(violations.map(v=>v.id),[])
   assert.equal(await s.evaluate(el=>el.scrollWidth>el.clientWidth),false)
   await page.screenshot({path:`docs/technology-pagination-${theme}-${width}.png`})
   results.push({width,theme,initialCount:cols*2,violations:0})
  }
  await more.click(); await page.waitForTimeout(600);assert.equal(await tiles.count(),cols*4)
  assert.equal(await tiles.nth(cols*2).locator('.atlas-select').evaluate(el=>el===document.activeElement),true)
  while(await more.count()) {await more.click();await page.waitForTimeout(550)}
  assert.deepEqual(await tiles.evaluateAll(nodes=>nodes.map(n=>n.dataset.technology)),expected.map(t=>t.slug))
  await s.getByRole('button',{name:'Backend',exact:true}).click();await page.waitForTimeout(600)
  assert.equal(await tiles.count(),Math.min(cols*2,expected.filter(t=>t.category==='Backend').length))
  await s.getByRole('button',{name:'Clear filters'}).click()
  await s.getByRole('searchbox').fill('postman');await page.waitForTimeout(600)
  assert.equal(await tiles.count(),1);assert.equal(await tiles.first().getAttribute('data-technology'),'postman')
  await s.getByRole('button',{name:'Clear filters'}).click();await page.waitForTimeout(600)
  await tiles.first().locator('.atlas-select').click()
  assert.equal(await s.locator('.atlas-inline-detail').count(),1)
  const box=await s.locator('.atlas-panel-row').evaluate(el=>({top:el.getBoundingClientRect().top,bottom:el.previousElementSibling.getBoundingClientRect().bottom}))
  assert.ok(box.top>=box.bottom)
  await page.setViewportSize({width:width===320?1024:320,height:1050});await page.waitForTimeout(600)
  assert.equal(await s.evaluate(el=>el.scrollWidth>el.clientWidth),false)
  assert.equal(await s.locator('.atlas-inline-detail').count(),1)
  await s.getByRole('button',{name:'Close exploration'}).click()
  assert.deepEqual(errors,[])
  await context.close()
 }
 fs.writeFileSync('docs/technology-pagination-review.json',JSON.stringify(results,null,2))
 console.log('Pagination, full inventory, search, filters, focus, inline detail, resizing and accessibility passed.')
} finally {await browser.close()}
