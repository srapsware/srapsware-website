import { chromium } from 'playwright'
import fs from 'node:fs'

// Fresh pages keep accessibility-audit DOM probes out of visual captures.
const browser = await chromium.launch()
fs.mkdirSync('docs/previews', { recursive: true })
try {
  for (const theme of ['dark', 'light']) for (const width of [1440, 390]) {
    const context = await browser.newContext({ viewport: { width, height: 1000 } })
    await context.addInitScript(theme => localStorage.setItem('theme', theme), theme)
    const page = await context.newPage()
    await page.goto(process.env.TEST_BASE_URL || 'http://127.0.0.1:3100', { waitUntil: 'domcontentloaded' })
    await page.getByRole('button', { name: /Switch to .* mode/ }).waitFor()
    const footer = page.getByRole('contentinfo', { name: 'Srapsware footer' })
    await footer.getByRole('heading', { name: 'Have an idea? Let’s bake it.' }).scrollIntoViewIfNeeded()
    await page.waitForTimeout(4000)
    await footer.screenshot({ path: `docs/previews/footer-${theme}-${width}.png` })
    await context.close()
  }
} finally { await browser.close() }
