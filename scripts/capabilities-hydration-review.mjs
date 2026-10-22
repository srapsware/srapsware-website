import { chromium } from 'playwright'
import assert from 'node:assert/strict'
import fs from 'node:fs'
const browser = await chromium.launch()
const errors = []
try {
  for (const width of [1440, 390]) {
    const context = await browser.newContext({ viewport: { width, height: 1100 } })
    const page = await context.newPage()
    page.on('pageerror', error => errors.push(error.message))
    await page.goto('http://127.0.0.1:3100', { waitUntil: 'domcontentloaded' })
    await page.getByRole('button', { name: /Switch to .* mode/ }).waitFor()
    for (const theme of ['light', 'dark']) {
      if (await page.evaluate(() => document.documentElement.classList.contains('dark')) !== (theme === 'dark')) await page.getByRole('button', { name: `Switch to ${theme} mode` }).click()
      for (let index = 0; index < 4; index++) {
        await page.locator('.capability-tabs [role="tab"]').nth(index).click()
        await page.locator('.system-stage').scrollIntoViewIfNeeded()
        assert.equal(await page.locator('.cap-scene title').textContent().then(text => text.includes(': ')), true)
      }
    }
    await page.waitForTimeout(3400)
    await context.close()
  }
  assert.deepEqual(errors, [])
  fs.writeFileSync('docs/capabilities-hydration-review.json', JSON.stringify({ widths: [1440, 390], themes: ['light', 'dark'], scenes: 4, errors }, null, 2))
  console.log('All four scenes hydrate and switch without browser errors in both themes at desktop/mobile widths.')
} finally { await browser.close() }
