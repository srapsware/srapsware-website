import { chromium } from 'playwright'
import AxeBuilder from '@axe-core/playwright'
import assert from 'node:assert/strict'
import fs from 'node:fs'
const base=process.env.REVIEW_URL||'http://127.0.0.1:3100'
const routes=['/services/ai-ml/chatbot-assistants','/services/ai-ml/mcp-development','/portfolio/whoisextractor-ai-assistant','/portfolio/truemailer-ai-assistant','/portfolio/whoisextractor-mcp']
const browser=await chromium.launch()
try {
 for(const width of [390,1440]) for(const theme of ['light','dark']) {
  const context=await browser.newContext({viewport:{width,height:1000},reducedMotion:'reduce'})
  const page=await context.newPage(),errors=[]
  page.on('pageerror',error=>errors.push(error.message))
  await page.addInitScript(theme=>localStorage.setItem('theme',theme),theme)
  for(const route of routes) {
   assert.equal((await page.goto(base+route,{waitUntil:'networkidle'})).status(),200)
   assert.equal(await page.locator('h1').count(),1)
   assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth+1),false,route)
   const audit=await new AxeBuilder({page}).analyze()
   assert.deepEqual(audit.violations.map(v=>({id:v.id,nodes:v.nodes.map(n=>n.target)})),[],`${route} ${width} ${theme}`)
   for(const image of await page.locator('img[src^="/assets/portfolio/"]').all()) {
    await image.scrollIntoViewIfNeeded()
    await image.evaluate(el=>el.decode())
    assert.ok(await image.evaluate(el=>el.naturalWidth>0))
   }
   if(route.startsWith('/services/')) {
    const href=await page.getByRole('link',{name:'Discuss your project'}).getAttribute('href')
    assert.equal(new URL(href,base).searchParams.get('source'),route)
    await page.evaluate(()=>window.scrollTo(0,0))
    fs.mkdirSync('docs',{recursive:true})
    await page.screenshot({path:`docs/ai-${route.split('/').at(-1)}-${width}-${theme}.png`})
   }
  }
  await page.goto(base,{waitUntil:'domcontentloaded'})
  if(width<1024) {
   await page.getByRole('button',{name:'Open navigation'}).click()
   await page.getByRole('navigation',{name:'Mobile navigation'}).locator('summary').filter({hasText:/^Services$/}).click()
  } else await page.getByRole('button',{name:'Services',exact:true}).click()
  const nav=page.getByRole('navigation',{name:width<1024?'Mobile navigation':'Main navigation'})
  for(const label of ['AI Chatbots & Assistants','MCP Development']) assert.ok(await nav.getByRole('link',{name:label}).isVisible())
  assert.deepEqual(errors,[])
  await context.close()
  console.log(`PASS: five pages, imagery, inquiry links, menu and accessibility at ${width}px / ${theme}`)
 }
 const context=await browser.newContext({viewport:{width:1440,height:1000}}),page=await context.newPage()
 for(const [route,selector] of [[routes[0],'.chat-handoff'],[routes[1],'.mcp-result']]) {
  await page.goto(base+route,{waitUntil:'networkidle'})
  await page.waitForFunction(selector=>Number(getComputedStyle(document.querySelector(selector)).opacity)===1,selector)
  assert.ok(await page.locator(selector).isVisible())
 }
 console.log('PASS: both GSAP sequences finish with visible content')
 await context.close()
} finally { await browser.close() }
