import {chromium} from 'playwright'
import AxeBuilder from '@axe-core/playwright'
import assert from 'node:assert/strict'
import fs from 'node:fs'
const base=process.env.REVIEW_URL||'http://127.0.0.1:3100';const b=await chromium.launch();const report=[]
try{for(const width of [320,390,768,1024,1440]){
 const c=await b.newContext({viewport:{width,height:1000},reducedMotion:'reduce'});const p=await c.newPage();const errors=[];p.on('pageerror',e=>errors.push(e.message));await p.goto(base,{waitUntil:'domcontentloaded'});await p.getByRole('button',{name:/Switch to .* mode/}).waitFor()
 const sections=p.locator('#brand-home > section');assert.equal(await sections.count(),10)
 for(const theme of ['light','dark']){
  if(await p.evaluate(()=>document.documentElement.classList.contains('dark'))!==(theme==='dark'))await p.getByRole('button',{name:`Switch to ${theme} mode`}).click()
  const measurements=[]
  for(let i=0;i<await sections.count();i++){
   const section=sections.nth(i);await section.scrollIntoViewIfNeeded();await p.waitForTimeout(80)
   measurements.push(await section.evaluate(el=>({heading:el.querySelector('h1,h2')?.textContent,overflow:el.scrollWidth>el.clientWidth+1})))
   assert.ok(Math.abs((await p.locator('.site-header').boundingBox()).y)<1,'Header must remain sticky')
   if(theme==='light'&&[390,1440].includes(width))await section.screenshot({path:`docs/home-review-${width}-${i}.png`,style:'.skip-link:not(:focus){opacity:0}.site-header,button[aria-label="Scroll to top"]{visibility:hidden}'})
  }
  assert.equal(await p.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false)
  assert.deepEqual(measurements.filter(m=>m.overflow),[])
  await p.locator('.footer-finale').scrollIntoViewIfNeeded();assert.equal(await p.locator('footer img[alt="Srapsware"]').count(),1);assert.equal(await p.locator('.footer-motion-toggle').count(),0)
  const violations=(await new AxeBuilder({page:p}).analyze()).violations
  report.push({width,theme,sections:measurements,violations:violations.map(v=>({id:v.id,nodes:v.nodes.map(n=>n.target)}))})
  fs.writeFileSync('docs/home-production-review.json',JSON.stringify(report,null,2))
  assert.deepEqual(violations.map(v=>({id:v.id,nodes:v.nodes.map(n=>n.target)})),[])
  if([390,1440].includes(width))await p.locator('footer').screenshot({path:`docs/footer-restructured-${theme}-${width}.png`,style:'.skip-link:not(:focus){opacity:0}.site-header,button[aria-label="Scroll to top"]{visibility:hidden}'})
 }
 if(width>=1024){await p.getByRole('button',{name:'Services',exact:true}).click();assert.ok(await p.locator('#navigation-services').isVisible());await p.keyboard.press('Escape');assert.equal(await p.getByRole('button',{name:'Services',exact:true}).getAttribute('aria-expanded'),'false')}
 else{await p.getByRole('button',{name:'Open navigation'}).click();await p.getByRole('dialog').waitFor();await p.keyboard.press('Escape');assert.equal(await p.getByRole('dialog').count(),0)}
 await p.locator('.site-header').scrollIntoViewIfNeeded();const broken=await p.locator('main img,footer img').evaluateAll(async imgs=>{await Promise.all(imgs.map(async img=>{img.loading='eager';try{await img.decode()}catch{}}));return imgs.filter(img=>!img.naturalWidth).map(img=>img.src)});assert.deepEqual(broken,[])
 assert.deepEqual(errors,[]);await c.close()
}console.log('All homepage sections, sticky header, navigation, image loading, both themes and accessibility passed at five widths.')}finally{await b.close()}
