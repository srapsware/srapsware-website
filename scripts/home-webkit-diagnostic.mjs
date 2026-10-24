import assert from 'node:assert/strict'
import { chromium, firefox, webkit } from 'playwright'

const base = process.env.TEST_BASE_URL || 'http://127.0.0.1:3100'
for (let attempt = 0; attempt < 30; attempt++) {
  try { if ((await fetch(base)).ok) break } catch {}
  if (attempt === 29) throw new Error('Production server did not become ready.')
  await new Promise(resolve => setTimeout(resolve, 1000))
}
const engine = process.env.PLAYWRIGHT_BROWSER || 'chromium'
const browser = await ({ chromium, firefox, webkit }[engine]).launch({ headless: true, ...(engine === 'chromium' && process.env.PLAYWRIGHT_CHANNEL ? { channel: process.env.PLAYWRIGHT_CHANNEL } : {}) })
const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } })
async function visit(url, options = { waitUntil: 'domcontentloaded' }) {
  console.log('VISIT',url); const response = await page.goto(url, options)
  await page.getByRole('button', { name: /Switch to (light|dark) mode/ }).waitFor()
  return response
}
const errors = []
page.on('pageerror', error => {console.log('ERROR AT',page.url(),error.message);errors.push(error.message)});page.on('requestfailed',r=>{if(r.url().includes('_rsc'))console.log('FAIL',pSafe(r.url()),r.failure())}); function pSafe(url){return url.split('?')[0]}
try {
  for (const route of ['/', '/about', '/services/web-development/frontend', '/solutions/by-technology/saas', '/contact', '/our-process', '/resources', '/resources/guides/launch-checklist', '/portfolio', '/blog', '/faq']) {
    const response = await visit(base + route, { waitUntil: 'domcontentloaded' })
    assert.equal(response.status(), 200, route)
    assert.equal(await page.locator('main').count(), 1, `${route}: main landmark`)
    assert.equal(await page.locator('h1').count(), 1, `${route}: main heading`)
    assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false, `${route}: overflow`)
  }
  await visit(base)
  const commerce = page.getByRole('tab', { name: 'Commerce', exact: true })
  await commerce.click()
  await page.getByRole('heading', { name: 'From discovery to delivery.' }).waitFor()
  await page.keyboard.press('ArrowRight')
  await page.getByRole('heading', { name: 'Build. Release. Keep improving.' }).waitFor()
  assert.equal(await page.getByRole('tab', { name: 'Cloud & delivery' }).getAttribute('aria-selected'), 'true')
  await page.keyboard.press('Home')
  await page.getByRole('heading', { name: 'One idea. A connected experience.' }).waitFor()
  assert.equal(await page.getByRole('tab', { name: 'Digital products' }).getAttribute('aria-selected'), 'true')
  const menu = page.getByRole('button', { name: 'Services', exact: true })
  await menu.click()
  await page.getByRole('link', { name: 'Explore all services' }).waitFor({ state: 'visible' })
  await page.keyboard.press('Escape')
  await page.waitForFunction(() => document.querySelector('[aria-controls="navigation-services"]')?.getAttribute('aria-expanded') === 'false')
  assert.equal(await menu.getAttribute('aria-expanded'), 'false')
  assert.equal(await menu.evaluate(element => element === document.activeElement), true)
  await page.getByRole('button', { name: 'Search', exact: true }).click()
  await page.getByRole('combobox').fill('practical software project brief')
  await page.getByRole('option').filter({ hasText: 'A practical software project brief' }).click()
  await page.waitForURL('**/resources/guides/project-discovery')
  await page.getByRole('heading', { name: 'A practical software project brief' }).waitFor()
  await page.getByRole('button', { name: 'Switch to light mode' }).click()
  await page.reload()
  await page.getByRole('button', { name: 'Switch to dark mode' }).waitFor()
  assert.equal(await page.locator('html').getAttribute('class'), 'light')
  for (const width of [360, 390, 768, 1024, 1440]) {
    await page.setViewportSize({ width, height: 900 })
    await visit(`${base}/about`, { waitUntil: 'domcontentloaded' })
    await page.locator('.journey-section').scrollIntoViewIfNeeded()
    assert.equal(await page.locator('.journey-chapter').count(), 4)
    for (const chapter of await page.locator('.journey-copy h3').all()) assert.equal(await chapter.isVisible(), true)
    assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false, `About ${width}`)
  }
  await page.setViewportSize({ width: 390, height: 844 })
  await page.getByRole('button', { name: 'Open navigation' }).click()
  await page.getByRole('dialog').waitFor()
  await page.getByRole('navigation', { name: 'Mobile navigation' }).locator('summary').filter({ hasText: /^Services$/ }).click()
  await page.getByRole('link', { name: 'Explore all services' }).click()
  await page.waitForURL('**/services')
  assert.equal(await page.getByRole('dialog').count(), 0)
  await page.emulateMedia({ reducedMotion: 'reduce' })
  await visit(`${base}/about`)
  for (const chapter of await page.locator('.journey-content').all()) assert.equal(await chapter.evaluate(element => getComputedStyle(element).opacity), '1')
  const download = await fetch(`${base}/resources/downloads/project-discovery`)
  assert.equal(download.status, 200)
  assert.match(download.headers.get('content-disposition'), /attachment/)
  assert.equal((await fetch(`${base}/api/test-mailchimp`)).status, 404)
  const rejected = await fetch(`${base}/api/contact`, { method: 'POST', headers: { Origin: 'https://invalid.example' }, body: 'invalid' })
  assert.equal(rejected.status, 403)
  const invalid = await fetch(`${base}/api/contact`, { method: 'POST', headers: { Origin: base, 'Content-Type': 'application/json' }, body: '{}' })
  assert.equal(invalid.status, 400)
  assert.deepEqual(errors, [], 'Browser runtime errors')
  console.log(`PASS (${engine}): routes, landmarks, capability tabs, desktop/mobile navigation, persisted theme, responsive timeline, reduced motion, downloads and API rejection.`)
} finally { await browser.close() }
