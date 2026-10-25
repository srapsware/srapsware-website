import { chromium } from 'playwright'
import AxeBuilder from '@axe-core/playwright'
import fs from 'node:fs'
import assert from 'node:assert/strict'
const base=process.env.REVIEW_URL||'http://127.0.0.1:3100'
const paths=['/services/web-development/frontend','/services/web-development/backend','/services/mobile-development/android','/services/ecommerce-development/shopify','/services/cloud-devops/devops','/solutions/by-technology/ai-ml','/solutions/by-industry/healthcare','/products','/product/likha-editor','/product/devstackbox','/product/gpshunter','/product/gpshunter/privacy','/product/gpshunter/terms','/portfolio/bionic-reading','/technologies/react','/about','/our-process','/careers','/docs','/resources','/resources/guides','/resources/whitepapers','/faq','/blog','/portfolio','/technologies']
const browser=await chromium.launch(),report=[]
try{
 for(const viewport of [{width:390,height:900},{width:1440,height:1000}]){
  const context=await browser.newContext({viewport,reducedMotion:'reduce'}),page=await context.newPage(),theme=viewport.width===390?'dark':'light'
  await page.addInitScript(theme=>localStorage.setItem('theme',theme),theme)
  for(const route of paths){
   const errors=[];const listener=error=>errors.push(error.message);page.on('pageerror',listener)
   const response=await page.goto(base+route,{waitUntil:'networkidle'})
   await page.locator('main').waitFor()
   const overflow=await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth+1)
   const axe=await new AxeBuilder({page}).analyze()
   const entry={route,width:viewport.width,theme,status:response.status(),headings:await page.locator('h1').count(),overflow,violations:axe.violations.map(v=>({id:v.id,impact:v.impact,nodes:v.nodes.map(n=>n.target)})),errors}
   report.push(entry)
   if(['/products','/product/devstackbox','/product/likha-editor','/product/gpshunter','/product/gpshunter/privacy','/services/web-development/frontend','/portfolio/bionic-reading','/about'].includes(route)){
    await page.screenshot({path:`docs/inner-${route.replaceAll('/','-').slice(1)}-${viewport.width}.png`,fullPage:true})
   }
   console.log(JSON.stringify(entry))
   page.off('pageerror',listener)
  }
  await context.close()
 }
}finally{await browser.close();fs.writeFileSync('docs/inner-browser-review.json',JSON.stringify(report,null,2))}
assert.equal(report.filter(r=>r.status!==200||r.headings!==1||r.overflow||r.violations.length||r.errors.length).length,0,'See docs/inner-browser-review.json')
