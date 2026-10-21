import { chromium } from 'playwright'
import AxeBuilder from '@axe-core/playwright'
import assert from 'node:assert/strict'
import fs from 'node:fs'

const browser = await chromium.launch()
const base = process.env.TEST_BASE_URL || 'http://127.0.0.1:3100'
const errors = []
const results = []
fs.mkdirSync('docs/previews', { recursive: true })
try {
  const context = await browser.newContext({ viewport: { width: 1440, height: 1000 } })
  const page = await context.newPage()
  page.on('pageerror', error => errors.push(error.message))
  await page.goto(base, { waitUntil: 'domcontentloaded' })
  await page.getByRole('button', { name: /Switch to .* mode/ }).waitFor()
  const footer = page.getByRole('contentinfo', { name: 'Srapsware footer' })
  await footer.getByRole('heading', { name: 'Have an idea? Let’s bake it.' }).scrollIntoViewIfNeeded()
  assert.equal(await footer.getByRole('button', { name: /replay/i }).count(), 0)
  await page.waitForTimeout(150)
  assert.equal(await page.locator('.workshop-check').evaluate(element => getComputedStyle(element).opacity), '1')
  const start = await page.locator('.workshop-check').getAttribute('transform')
  await page.waitForTimeout(3400)
  const end = await page.locator('.workshop-check').getAttribute('transform')
  assert.notEqual(start, end, 'Entering the viewport should animate the product checkmark')
  assert.equal(await footer.getByRole('img', { name: 'India flag' }).count(), 1)
  assert.equal(await footer.getByRole('img', { name: 'with heart', exact: true }).count(), 1)
  assert.equal(await footer.getByRole('link', { name: 'Tell us what you’re imagining' }).getAttribute('href'), '/contact?type=quote')
  for (const theme of ['dark', 'light']) {
    if (await page.evaluate(() => document.documentElement.classList.contains('dark')) !== (theme === 'dark')) {
      await page.getByRole('button', { name: `Switch to ${theme} mode` }).click()
    }
    for (const width of [1440, 1024, 768, 390, 320]) {
      await page.setViewportSize({ width, height: 1000 })
      const overflowing = await footer.evaluate(element => [...element.querySelectorAll('*')].filter(child => {
        if (child.closest('svg')) return false
        const box = child.getBoundingClientRect()
        return box.width && (box.right > innerWidth + 1 || box.left < -1)
      }).map(child => child.className))
      assert.deepEqual(overflowing, [], `${theme} footer overflow at ${width}px`)
      const audit = await new AxeBuilder({ page }).include('.studio-footer').withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze()
      results.push({ theme, width, violations: audit.violations.map(item => ({ id: item.id, nodes: item.nodes.map(node => ({ target: node.target, summary: node.failureSummary })) })) })
    }
  }
  await page.emulateMedia({ reducedMotion: 'reduce' })
  await page.reload({ waitUntil: 'domcontentloaded' })
  await page.getByRole('button', { name: /Switch to .* mode/ }).waitFor()
  assert.equal(await footer.getByRole('button', { name: 'Replay the story' }).isVisible(), false)
  assert.equal(await page.locator('.workshop-check').getAttribute('transform'), null, 'Reduced motion must show the complete illustration without animation')
  const hrefs = await footer.locator('a[href^="/"]').evaluateAll(links => [...new Set(links.map(link => link.getAttribute('href')))])
  const badLinks = []
  for (const href of hrefs) {
    const response = await page.request.get(base + href)
    if (!response.ok()) badLinks.push({ href, status: response.status() })
  }
  assert.deepEqual(badLinks, [], 'All footer destinations should resolve')
  // Exercise the provider-error UI without submitting any real subscription.
  if (await footer.getByRole('button', { name: 'Subscribe', exact: true }).count()) {
    const failurePage = await context.newPage()
    await failurePage.route('https://challenges.cloudflare.com/turnstile/v0/api.js*', async route => {
      const onload = new URL(route.request().url()).searchParams.get('onload')
      await route.fulfill({ contentType: 'application/javascript', body: `window.__captchaAttempts = 0; window.turnstile = { render(element, options) { window.__captchaAttempts++; setTimeout(() => options['error-callback']('test-provider-unavailable'), 0); return 'test-widget'; }, remove() {} }; window[${JSON.stringify(onload)}]();` })
    })
    await failurePage.goto(base, { waitUntil: 'domcontentloaded' })
    const retry = failurePage.getByRole('button', { name: 'Retry verification' })
    await retry.waitFor()
    assert.equal(await failurePage.getByRole('button', { name: 'Subscribe', exact: true }).isDisabled(), true)
    await retry.click()
    await failurePage.waitForFunction(() => window.__captchaAttempts === 2)
    await retry.waitFor()
    await failurePage.close()
  }
  assert.deepEqual(errors, [], 'No browser exceptions')
  fs.writeFileSync('docs/footer-review-results.json', JSON.stringify({ results, checkedDestinations: hrefs.length, errors }, null, 2) + '\n')
  console.log(JSON.stringify({ results, checkedDestinations: hrefs.length, errors }, null, 2))
  assert.equal(results.flatMap(result => result.violations).length, 0, 'Footer accessibility issues')
} finally { await browser.close() }
