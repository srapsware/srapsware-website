import { chromium } from 'playwright'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import sharp from 'sharp'

const browser = await chromium.launch()
const report = []
try {
  for (const width of [320, 390, 768, 1440]) {
    const context = await browser.newContext({ viewport: { width, height: 950 } })
    const page = await context.newPage()
    const errors = []
    page.on('pageerror', error => errors.push(error.message))
    await page.goto('http://127.0.0.1:3100', { waitUntil: 'domcontentloaded' })
    await page.getByRole('button', { name: /Switch to .* mode/ }).waitFor()
    for (const theme of ['light', 'dark']) {
      if (await page.evaluate(() => document.documentElement.classList.contains('dark')) !== (theme === 'dark')) await page.getByRole('button', { name: `Switch to ${theme} mode` }).click()
      for (const selector of ['header.site-header', 'footer.studio-footer']) {
        const logo = page.locator(`${selector} img[alt="Srapsware"]`)
        assert.equal(await logo.count(), 1)
        assert.equal(await logo.getAttribute('src'), '/assets/brand/srapsware-wordmark.svg')
        await logo.scrollIntoViewIfNeeded()
        await logo.evaluate(img => img.decode())
        const box = await logo.boundingBox()
        assert.ok(box.width >= 140 && box.x >= 0 && box.x + box.width <= width)
        const ratio = await logo.evaluate(el => { const s = getComputedStyle(el); return (el.clientWidth - parseFloat(s.paddingLeft) - parseFloat(s.paddingRight)) / (el.clientHeight - parseFloat(s.paddingTop) - parseFloat(s.paddingBottom)) }); assert.ok(Math.abs(ratio - 520 / 54) < .5)
      }
      await page.locator('.site-header').screenshot({ path: `docs/brand-header-${theme}-${width}.png` })
      if (width === 390 || width === 1440) await page.locator('.footer-identity').screenshot({ path: `docs/brand-footer-${theme}-${width}.png` })
      report.push({ width, theme, headerAndFooter: 'passed' })
    }
    const icons = await page.locator('link[rel="icon"],link[rel="apple-touch-icon"]').evaluateAll(nodes => nodes.map(node => node.getAttribute('href')))
    assert.ok(icons.includes('/assets/brand/favicon.svg'))
    assert.ok(icons.includes('/favicon.ico'))
    assert.ok(icons.includes('/assets/brand/apple-touch-icon.png'))
    for (const url of icons) assert.equal((await page.request.get(`http://127.0.0.1:3100${url}`)).status(), 200)
    assert.deepEqual(errors, [])
    await context.close()
  }
  for (const size of [16, 32, 48]) {
    const metadata = await sharp(`public/assets/brand/favicon-${size}.png`).metadata()
    assert.equal(metadata.width, size)
    assert.equal(metadata.height, size)
  }
  const ico = fs.readFileSync('public/favicon.ico')
  assert.equal(ico.readUInt16LE(2), 1)
  assert.equal(ico.readUInt16LE(4), 3)
  fs.writeFileSync('docs/brand-assets-review.json', JSON.stringify(report, null, 2))
  console.log('Logo rendering, theme/viewport sizing, favicon metadata and asset routes passed.')
} finally { await browser.close() }
