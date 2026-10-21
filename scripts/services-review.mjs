import { chromium, firefox, webkit } from 'playwright'
import AxeBuilder from '@axe-core/playwright'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import yaml from 'js-yaml'

const services = fs.readdirSync('content/services').filter(file => file.endsWith('.md')).map(file => yaml.load(fs.readFileSync(`content/services/${file}`, 'utf8').match(/^---\r?\n([\s\S]*?)\r?\n---/)[1])).filter(service => service.featured).sort((a,b) => a.order - b.order)
const engine = process.env.PLAYWRIGHT_BROWSER || 'chromium'
const browser = await ({ chromium, firefox, webkit })[engine].launch()
const base = process.env.TEST_BASE_URL || 'http://127.0.0.1:3100'
const errors = [], thirdPartyErrors = [], results = []
try {
  const context = await browser.newContext({ viewport: { width: 1440, height: 1000 } })
  const page = await context.newPage()
  page.on('pageerror', error => (error.message.includes('challenges.cloudflare.com') ? thirdPartyErrors : errors).push(error.message))
  await page.goto(base, { waitUntil: 'domcontentloaded' })
  await page.getByRole('button', { name: /Switch to .* mode/ }).waitFor()
  const section = page.locator('.service-studio')
  await section.locator('.studio-display').scrollIntoViewIfNeeded()
  await page.waitForTimeout(2900)
  assert.equal(await section.getByRole('tab').count(), services.length)
  for (let index = 0; index < services.length; index++) {
    await section.getByRole('tab').nth(index).click()
    await page.waitForTimeout(2800)
    const panel = section.getByRole('tabpanel')
    assert.equal(await panel.count(), 1)
    assert.equal(await panel.getByRole('heading').innerText(), services[index].title)
    assert.equal(await panel.locator('.studio-copy p').innerText(), services[index].description)
    assert.equal(await panel.getByRole('link').getAttribute('href'), services[index].link)
    assert.equal(await section.getByRole('tab').nth(index).getAttribute('aria-selected'), 'true')
    if (engine === 'chromium') {
      const audit = await new AxeBuilder({ page }).include('.service-studio').withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze()
      results.push({ service: services[index].title, violations: audit.violations })
    }
  }
  const selected = () => section.locator('[role="tab"][aria-selected="true"]')
  await selected().press('Home')
  assert.equal(await selected().innerText().then(text => text.includes(services[0].title)), true)
  await selected().press('ArrowDown')
  assert.equal(await selected().innerText().then(text => text.includes(services[1].title)), true)
  await selected().press('End')
  await selected().press('ArrowRight')
  assert.equal(await selected().innerText().then(text => text.includes(services[0].title)), true)
  assert.equal(await selected().evaluate(node => node === document.activeElement), true)
  await page.waitForTimeout(2800)
  assert.equal(await section.getByRole('button', { name: /replay/i }).count(), 0)
  await section.getByRole('tab').nth(2).click()
  await page.waitForTimeout(100)
  assert.ok(await section.getByRole('tabpanel').locator('.studio-trace').first().evaluate(node => parseFloat(getComputedStyle(node).strokeDashoffset)) > .5, 'Selecting another service draws its illustration')
  await page.waitForTimeout(2800)
  assert.equal(await section.getByRole('tabpanel').locator('.studio-trace').first().evaluate(node => parseFloat(getComputedStyle(node).strokeDashoffset)), 0)
  // Rapid selections must leave the last chosen service visible, without orphaned animation styles.
  for (const index of [4, 1, 5, 2, 0]) await section.getByRole('tab').nth(index).click()
  await page.waitForTimeout(2800)
  assert.equal(await section.getByRole('tabpanel').locator('.studio-copy h3').evaluate(node => getComputedStyle(node).opacity), '1')
  for (const theme of ['dark', 'light']) {
    if (await page.evaluate(() => document.documentElement.classList.contains('dark')) !== (theme === 'dark')) await page.getByRole('button', { name: `Switch to ${theme} mode` }).click()
    for (const width of [1440, 1024, 768, 390, 320]) {
      await page.setViewportSize({ width, height: 1000 })
      const overflow = await section.evaluate(root => [...root.querySelectorAll('*')].filter(node => {
        if (node.closest('svg') || node.closest('[hidden]')) return false
        const bounds = node.getBoundingClientRect()
        return bounds.width && (bounds.left < -1 || bounds.right > innerWidth + 1)
      }).map(node => node.className))
      assert.deepEqual(overflow, [], `${theme}: no overflow at ${width}px`)
      if (engine === 'chromium') {
        const audit = await new AxeBuilder({ page }).include('.service-studio').withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze()
        results.push({ theme, width, violations: audit.violations })
      }
    }
  }
  await page.emulateMedia({ reducedMotion: 'reduce' })
  await page.reload({ waitUntil: 'domcontentloaded' })
  await page.getByRole('button', { name: /Switch to .* mode/ }).waitFor()
  await section.getByRole('tab').nth(4).click()
  assert.equal(await section.getByRole('button', { name: 'Replay service animation' }).isVisible(), false)
  assert.equal(await section.getByRole('tabpanel').locator('.studio-copy').evaluate(node => getComputedStyle(node).opacity), '1')
  await section.getByRole('tab').first().click()
  await section.getByRole('tabpanel').getByRole('link').click()
  await page.waitForURL(`**${services[0].link}`)
  const staticContext = await browser.newContext({ javaScriptEnabled: false })
  const staticPage = await staticContext.newPage()
  await staticPage.goto(base, { waitUntil: 'domcontentloaded' })
  await staticPage.locator('.service-studio h2').waitFor({ state: 'visible' })
  for (const service of services) {
    assert.equal(await staticPage.locator('.studio-copy').getByRole('heading', { name: service.title, exact: true }).isVisible(), true)
    assert.equal(await staticPage.locator('.studio-copy').getByRole('link', { name: `Explore ${service.title}`, exact: true }).getAttribute('href'), service.link)
  }
  assert.equal(await staticPage.locator('.studio-replay').isVisible(), false)
  const pendingContext = await browser.newContext()
  await pendingContext.route('**/*', route => route.request().resourceType() === 'script' ? route.abort() : route.continue())
  const pendingPage = await pendingContext.newPage()
  await pendingPage.goto(base, { waitUntil: 'domcontentloaded' })
  await pendingPage.locator('.service-studio h2').waitFor({ state: 'visible' })
  assert.equal(await pendingPage.locator('.studio-panel:visible').count(), 1, 'The server-rendered layout reserves one panel before hydration')
  assert.deepEqual(errors, [])
  fs.writeFileSync(`docs/services-review-${engine}.json`, JSON.stringify({ engine, services: services.map(service => service.title), results, errors, thirdPartyErrors }, null, 2) + '\n')
  console.log(JSON.stringify({ engine, checks: results.length, violations: results.flatMap(result => result.violations), errors, thirdPartyErrors }, null, 2))
  assert.equal(results.flatMap(result => result.violations).length, 0)
} finally { await browser.close() }
