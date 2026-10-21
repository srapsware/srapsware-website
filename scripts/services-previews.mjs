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
    const section = page.locator('.service-studio')
    await section.locator('.studio-display').scrollIntoViewIfNeeded()
    await page.waitForTimeout(3000)
    const skipIsOffscreen = await page.locator('.skip-link').evaluate(link => link.getBoundingClientRect().bottom < 0 && !link.matches(':focus'))
    const style = skipIsOffscreen ? '.skip-link:not(:focus) { opacity: 0; }' : undefined
    await section.screenshot({ path: `docs/previews/services-${theme}-${width}.png`, style })
    if (width === 1440 && theme === 'dark') {
      for (let index = 1; index < 6; index++) {
        await section.getByRole('tab').nth(index).click()
        await page.waitForTimeout(2900)
        await section.screenshot({ path: `docs/previews/services-scene-${index + 1}.png`, style })
      }
    }
    await context.close()
  }
} finally { await browser.close() }
