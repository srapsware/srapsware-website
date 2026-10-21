import { chromium } from 'playwright'
import fs from 'node:fs'

const browser = await chromium.launch()
fs.mkdirSync('docs/previews', { recursive: true })
try {
  for (const theme of ['dark', 'light']) for (const width of [1440, 390]) {
    const context = await browser.newContext({ viewport: { width, height: 1000 } })
    await context.addInitScript(theme => localStorage.setItem('theme', theme), theme)
    const page = await context.newPage()
    await page.goto(process.env.TEST_BASE_URL || 'http://127.0.0.1:3100', { waitUntil: 'domcontentloaded' })
    await page.getByRole('button', { name: /Switch to .* mode/ }).waitFor()
    await page.waitForTimeout(3200)
    await page.getByRole('button', { name: 'Pause hero animation' }).click()
    await page.mouse.move(0, 0)
    await page.screenshot({ path: `docs/previews/hero-${theme}-${width}.png` })
    if (width === 390) await page.locator('.launch-hero').screenshot({ path: `docs/previews/hero-${theme}-mobile-full.png` })
    await context.close()
  }
} finally { await browser.close() }
