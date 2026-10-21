import { chromium } from 'playwright'
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import assert from 'node:assert/strict'

const base = process.env.TEST_BASE_URL || 'http://127.0.0.1:3100'
const browser = await chromium.launch()
const report = { conditions: 'Local production server; Chromium; no network or CPU throttling; one sample per route. Diagnostic baseline, not field Core Web Vitals or a Lighthouse score.', pages: [] }
try {
  for (const route of ['/', '/about', '/blog/wordpress-at-18']) {
    const context = await browser.newContext({ viewport: { width: 1440, height: 1000 } })
    const page = await context.newPage()
    await page.addInitScript(() => {
      window.__measurements = { lcp: 0, cls: 0 }
      new PerformanceObserver(list => { for (const entry of list.getEntries()) window.__measurements.lcp = entry.startTime }).observe({ type: 'largest-contentful-paint', buffered: true })
      new PerformanceObserver(list => { for (const entry of list.getEntries()) if (!entry.hadRecentInput) window.__measurements.cls += entry.value }).observe({ type: 'layout-shift', buffered: true })
    })
    await page.goto(base + route, { waitUntil: 'load' })
    await page.waitForTimeout(3000)
    const metrics = await page.evaluate(() => ({
      ...window.__measurements,
      fcp: performance.getEntriesByName('first-contentful-paint')[0]?.startTime,
      loadedTransferBytes: performance.getEntriesByType('resource').reduce((sum, entry) => sum + entry.transferSize, 0),
      brokenImages: Array.from(document.images).filter(image => image.complete && image.naturalWidth === 0).map(image => image.getAttribute('src')),
    }))
    report.pages.push({ route, ...metrics })
    if (route === '/') {
      await page.screenshot({ path: path.join(os.tmpdir(), 'srapsware-home-desktop.png') })
      await page.setViewportSize({ width: 390, height: 844 })
      await page.screenshot({ path: path.join(os.tmpdir(), 'srapsware-home-mobile.png') })
      await page.getByRole('tab', { name: 'Commerce' }).click()
      await page.getByRole('tabpanel').scrollIntoViewIfNeeded()
      await page.waitForFunction(() => Array.from(document.querySelectorAll('.system-node')).every(element => Number(getComputedStyle(element).opacity) > .99))
      await page.getByRole('tabpanel').screenshot({ path: path.join(os.tmpdir(), 'srapsware-capabilities-mobile.png') })
    }
    await context.close()
  }
  fs.writeFileSync('docs/performance-results.json', JSON.stringify(report, null, 2) + '\n')
  console.log(JSON.stringify(report, null, 2))
  assert.deepEqual(report.pages.flatMap(page => page.brokenImages), [], 'Broken images in representative pages')
} finally { await browser.close() }
