import { chromium } from 'playwright'
import AxeBuilder from '@axe-core/playwright'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import { capabilities } from '../config/capabilities.ts'
const browser = await chromium.launch()
const results = [], errors = []
try {
  const context = await browser.newContext({ viewport: { width: 1440, height: 1100 } })
  const page = await context.newPage()
  page.on('pageerror', error => errors.push(error.message))
  await page.goto(process.env.TEST_BASE_URL || 'http://127.0.0.1:3100', { waitUntil: 'domcontentloaded' })
  await page.getByRole('button', { name: /Switch to .* mode/ }).waitFor()
  const section = page.locator('.capability-explorer')
  const markers = ['.cap-browser', '.cap-package', '.cap-monitor', '.cap-adapter']
  for (const theme of ['light', 'dark']) {
    if (await page.evaluate(() => document.documentElement.classList.contains('dark')) !== (theme === 'dark')) await page.getByRole('button', { name: `Switch to ${theme} mode` }).click()
    for (const width of [1440, 390, 320]) {
      await page.setViewportSize({ width, height: 1100 })
      for (const [index, item] of capabilities.entries()) {
        await section.getByRole('tab').nth(index).click()
        await section.locator('.system-stage').scrollIntoViewIfNeeded()
        await page.waitForTimeout(3400)
        assert.equal(await section.locator('.cap-scene').getAttribute('data-scene'), item.id)
        assert.equal(await section.locator(markers[index]).count(), 1)
        assert.equal(await section.locator('h3').innerText(), item.title)
        assert.equal(await section.getByRole('link', { name: item.link }).getAttribute('href'), item.href)
        for (const label of item.nodes) assert.equal(await section.locator('.cap-label').getByText(label, { exact: true }).count() || await section.locator('.cap-label').filter({ hasText: label }).count(), 1)
        assert.equal(await section.locator(markers[index]).evaluate(node => getComputedStyle(node).opacity), '1')
        assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth + 1), false)
        const audit = await new AxeBuilder({ page }).include('.capability-explorer').withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze()
        results.push({ theme, width, scene: item.id, violations: audit.violations })
        if (width !== 320) await section.screenshot({ path: `docs/previews/capability-${item.id}-${theme}-${width}.png`, style: '.skip-link:not(:focus) { opacity: 0; }' })
      }
    }
  }
  await section.getByRole('tab').last().press('Home')
  assert.equal(await section.getByRole('tab').first().getAttribute('aria-selected'), 'true')
  await section.getByRole('tab').first().press('ArrowRight')
  assert.equal(await section.locator('.cap-scene').getAttribute('data-scene'), 'commerce')
  for (const index of [3, 0, 2, 1, 3]) await section.getByRole('tab').nth(index).click()
  await section.locator('.system-stage').scrollIntoViewIfNeeded()
  await page.waitForTimeout(3300)
  assert.equal(await section.locator('.cap-adapter').evaluate(node => getComputedStyle(node).opacity), '1')
  await section.getByRole('tab').nth(2).click()
  await section.locator('.system-stage').scrollIntoViewIfNeeded()
  await page.waitForTimeout(150)
  assert.ok(await section.locator('.cap-metrics').evaluate(node => parseFloat(getComputedStyle(node).strokeDashoffset)) > .5, 'Cloud chart starts undrawn')
  await page.waitForTimeout(3200)
  assert.equal(await section.locator('.cap-metrics').evaluate(node => parseFloat(getComputedStyle(node).strokeDashoffset)), 0, 'GSAP draws the monitoring trace')
  await page.emulateMedia({ reducedMotion: 'reduce' })
  for (let index = 0; index < 4; index++) {
    await section.getByRole('tab').nth(index).click()
    assert.equal(await section.locator(markers[index]).getAttribute('style'), null)
  }
  assert.equal(await section.getByRole('button', { name: /replay/i }).count(), 0)
  fs.writeFileSync('docs/capabilities-review.json', JSON.stringify({ results, errors }, null, 2))
  assert.deepEqual(errors, [])
  assert.equal(results.flatMap(result => result.violations).length, 0)
  console.log(JSON.stringify({ states: results.length, violations: 0, errors }))
} finally { await browser.close() }
