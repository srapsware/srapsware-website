import { chromium, firefox, webkit } from 'playwright'
import AxeBuilder from '@axe-core/playwright'
import assert from 'node:assert/strict'
import fs from 'node:fs'

const engine = process.env.PLAYWRIGHT_BROWSER || 'chromium'
const browser = await ({ chromium, firefox, webkit })[engine].launch()
const base = process.env.TEST_BASE_URL || 'http://127.0.0.1:3100'
const errors = []
const thirdPartyErrors = []
const results = []
try {
  const context = await browser.newContext({ viewport: { width: 1440, height: 1000 } })
  const page = await context.newPage()
  page.on('pageerror', error => (error.message.includes('challenges.cloudflare.com') ? thirdPartyErrors : errors).push(error.message))
  await page.goto(base, { waitUntil: 'domcontentloaded' })
  await page.getByRole('button', { name: /Switch to .* mode/ }).waitFor()
  const hero = page.locator('.launch-hero')
  assert.equal((await hero.getByRole('heading', { level: 1 }).innerText()).replace(/\s+/g, ' ').trim(), 'Build Software That Drives Results')
  assert.equal(await hero.getByText('15+ Years of Code Baking ❤️').count(), 1)
  assert.equal(await hero.getByRole('link', { name: 'Get Your Free Quote' }).getAttribute('href'), '/contact')
  assert.equal(await hero.getByRole('link', { name: 'View Our Work' }).getAttribute('href'), '/portfolio')
  assert.equal(await hero.getByRole('img', { name: 'Your next idea, brought to life' }).count(), 1)
  await page.waitForTimeout(3200)
  const floatingPanel = page.locator('.launch-orbit')
  const before = await floatingPanel.getAttribute('transform')
  await page.waitForTimeout(350)
  assert.notEqual(await floatingPanel.getAttribute('transform'), before, 'GSAP must actually animate the scene')
  await hero.getByRole('button', { name: 'Pause hero animation' }).click()
  await page.waitForTimeout(100)
  const paused = await floatingPanel.getAttribute('transform')
  await page.waitForTimeout(450)
  assert.equal(await floatingPanel.getAttribute('transform'), paused, 'Pause must stop ambient movement')
  await hero.getByRole('button', { name: 'Resume hero animation' }).press('Enter')
  await page.waitForTimeout(400)
  assert.notEqual(await floatingPanel.getAttribute('transform'), paused, 'Keyboard resume must restart motion')
  assert.equal(await page.getByRole('button', { name: /replay/i }).count(), 0, 'Decorative sections should not expose replay controls')
  // No background animation work while the hero is outside the viewport.
  await page.getByRole('contentinfo').scrollIntoViewIfNeeded()
  await page.waitForTimeout(300)
  const offscreen = await floatingPanel.getAttribute('transform')
  await page.waitForTimeout(400)
  assert.equal(await floatingPanel.getAttribute('transform'), offscreen, 'Offscreen motion must pause')
  await page.evaluate(() => window.scrollTo(0, 0))
  await page.waitForTimeout(300)
  await hero.getByRole('button', { name: 'Pause hero animation' }).click()
  for (const theme of ['dark', 'light']) {
    if (await page.evaluate(() => document.documentElement.classList.contains('dark')) !== (theme === 'dark')) await page.getByRole('button', { name: `Switch to ${theme} mode` }).click()
    for (const width of [1440, 1024, 768, 390, 320]) {
      await page.setViewportSize({ width, height: 1000 })
      const overflow = await hero.evaluate(root => [...root.querySelectorAll('*')].filter(node => {
        if (node.closest('svg')) return false
        const bounds = node.getBoundingClientRect()
        return bounds.width && (bounds.left < -1 || bounds.right > innerWidth + 1)
      }).map(node => node.className))
      assert.deepEqual(overflow, [], `${theme}: no hero overflow at ${width}px`)
      if (engine === 'chromium') {
        const audit = await new AxeBuilder({ page }).include('.launch-hero').withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze()
        results.push({ theme, width, violations: audit.violations.map(item => ({ id: item.id, nodes: item.nodes.map(node => node.failureSummary) })) })
      }
    }
  }
  await page.emulateMedia({ reducedMotion: 'reduce' })
  await page.reload({ waitUntil: 'domcontentloaded' })
  await page.getByRole('button', { name: /Switch to .* mode/ }).waitFor()
  assert.equal(await hero.getByRole('button', { name: 'Pause hero animation' }).isVisible(), false)
  assert.equal(await floatingPanel.getAttribute('transform'), null)
  assert.equal(await page.locator('.launch-panel').last().evaluate(node => getComputedStyle(node).opacity), '1')
  for (const value of ['604+', '400+', '30+', '15+']) assert.equal(await hero.getByText(value, { exact: true }).count(), 2, 'Keep both visible and accessible stats')
  await hero.getByRole('link', { name: 'View Our Work' }).click()
  await page.waitForURL('**/portfolio')
  await page.goBack({ waitUntil: 'domcontentloaded' })
  await hero.getByRole('link', { name: 'Get Your Free Quote' }).focus()
  await page.keyboard.press('Enter')
  await page.waitForURL('**/contact')
  const noJs = await browser.newContext({ javaScriptEnabled: false })
  const staticPage = await noJs.newPage()
  await staticPage.goto(base, { waitUntil: 'domcontentloaded' })
  await staticPage.locator('.launch-hero h1').waitFor({ state: 'visible' })
  await staticPage.locator('.launch-art').waitFor({ state: 'visible' })
  assert.equal(await staticPage.locator('.launch-hero h1').isVisible(), true)
  assert.equal(await staticPage.locator('.launch-art').isVisible(), true)
  assert.deepEqual(errors, [])
  fs.writeFileSync(`docs/hero-review-${engine}.json`, JSON.stringify({ engine, results, errors, thirdPartyErrors }, null, 2) + '\n')
  console.log(JSON.stringify({ engine, results, errors, thirdPartyErrors }, null, 2))
  assert.equal(results.flatMap(result => result.violations).length, 0)
} finally { await browser.close() }
