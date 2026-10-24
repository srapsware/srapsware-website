import {chromium} from 'playwright'
import AxeBuilder from '@axe-core/playwright'
import assert from 'node:assert/strict'
import fs from 'node:fs'
const browser=await chromium.launch();const report=[]
try{for(const width of [1440,768,390,320]){
 const context=await browser.newContext({viewport:{width,height:1000},reducedMotion:width===320?'reduce':'no-preference'});const page=await context.newPage();const errors=[];page.on('pageerror',e=>errors.push(e.message))
 await page.goto('http://127.0.0.1:3100',{waitUntil:'domcontentloaded'});await page.getByRole('button',{name:/Switch to .* mode/}).waitFor();const footer=page.locator('.studio-footer')
 assert.equal(await footer.locator('form,input,iframe').count(),0);assert.equal(await footer.getByText('15 Years of code baking',{exact:false}).count(),1);assert.equal(await footer.getByRole('img',{name:'India flag'}).count(),1)
 for(const theme of ['light','dark']){
  if(await page.evaluate(()=>document.documentElement.classList.contains('dark'))!==(theme==='dark'))await page.getByRole('button',{name:`Switch to ${theme} mode`}).click()
  await footer.locator('.footer-finale').scrollIntoViewIfNeeded();await page.waitForTimeout(2100);assert.equal(await page.locator('button[aria-label="Scroll to top"]').getAttribute('aria-hidden'),'true')
  assert.equal(await footer.evaluate(el=>el.scrollWidth>el.clientWidth),false)
  const violations=(await new AxeBuilder({page}).include('.studio-footer').analyze()).violations;assert.deepEqual(violations.map(v=>v.id),[])
  await footer.locator('.footer-finale').screenshot({path:`docs/footer-finale-${theme}-${width}.png`})
  if(width===1440||width===390)await footer.screenshot({style:'.skip-link:not(:focus){opacity:0}',path:`docs/footer-full-${theme}-${width}.png`})
  report.push({width,theme,violations:0})
 }
 assert.equal(await footer.locator('.footer-motion-toggle').count(),0)
 await footer.locator('.brand-signature').scrollIntoViewIfNeeded();await page.waitForTimeout(4000)
 const stopped=await footer.locator('.brand-ecg-signal').evaluate(el=>getComputedStyle(el).strokeDashoffset);await page.waitForTimeout(300);assert.equal(await footer.locator('.brand-ecg-signal').evaluate(el=>getComputedStyle(el).strokeDashoffset),stopped)
 if(width===320)assert.equal(await footer.locator('.brand-heart').evaluate(el=>getComputedStyle(el).transform),'none')
 assert.deepEqual(errors,[]);assert.equal((await page.request.post('http://127.0.0.1:3100/api/newsletter',{data:{}})).status(),404)
 await context.close()
}fs.writeFileSync('docs/footer-finale-review.json',JSON.stringify(report,null,2));console.log('Footer responsive themes, accessibility, finite heartbeat, reduced motion and newsletter removal passed.')}finally{await browser.close()}
