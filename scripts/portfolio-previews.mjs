import { chromium } from 'playwright'
import fs from 'node:fs'
const browser = await chromium.launch()
fs.mkdirSync('docs/previews', { recursive: true })
try {
  for (const theme of ['dark', 'light']) for (const width of [1440, 390]) {
    const context = await browser.newContext({ viewport: { width, height: 1100 } })
    await context.addInitScript(theme => localStorage.setItem('theme', theme), theme)
    const page = await context.newPage()
    await page.goto(process.env.TEST_BASE_URL || 'http://127.0.0.1:3100', { waitUntil: 'domcontentloaded' })
    await page.getByRole('button', { name: /Switch to .* mode/ }).waitFor()
    const section = page.locator('.work-gallery')
    await section.scrollIntoViewIfNeeded()
    await page.waitForTimeout(1800)
    const skipIsOffscreen = await page.locator('.skip-link').evaluate(link => link.getBoundingClientRect().bottom < 0 && !link.matches(':focus'))
    await section.screenshot({ path: `docs/previews/portfolio-${theme}-${width}.png`, style: skipIsOffscreen ? '.skip-link:not(:focus) { opacity: 0; }' : undefined })
    if (theme === 'dark' && width === 1440) {
      await section.getByRole('button', { name: 'Next projects' }).click()
      await page.waitForTimeout(1600)
      await section.screenshot({ path: 'docs/previews/portfolio-next-projects.png', style: skipIsOffscreen ? '.skip-link:not(:focus) { opacity: 0; }' : undefined })
    }
    await context.close()
  }
} finally { await browser.close() }
