import { chromium, firefox, webkit } from 'playwright'
import AxeBuilder from '@axe-core/playwright'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import yaml from 'js-yaml'

const source = fs.readFileSync('content/settings/site-config.md', 'utf8')
const clients = yaml.load(source.match(/^---\r?\n([\s\S]*?)\r?\n---/)[1]).clients
const engine = process.env.PLAYWRIGHT_BROWSER || 'chromium'
const browser = await ({ chromium, firefox, webkit })[engine].launch()
const base = process.env.TEST_BASE_URL || 'http://127.0.0.1:3100'
const errors = [], thirdPartyErrors = [], results = []
try {
  const context = await browser.newContext({ viewport: { width: 1440, height: 1000 } })
  const page = await context.newPage()
  page.on('pageerror', error => (error.message.includes('challenges.cloudflare.com') ? thirdPartyErrors : errors).push(error.message))
  await page.goto(base, { waitUntil: 'domcontentloaded' })
  await page.getByRole('button', { name: /Switch to .* mode/ }).waitFor()
  const section = page.locator('.trust-section')
  await section.locator('.trust-network').scrollIntoViewIfNeeded()
  await page.waitForFunction(() => document.querySelectorAll('.trust-wire').length === 8)
  await page.waitForTimeout(3200)
  assert.equal((await section.getByRole('heading').innerText()).replace(/\s+/g, ' ').trim(), clients.subtitle)
  const names = await section.locator('.trust-node-caption > span').allTextContents()
  assert.deepEqual(names, ['Den Networks', 'W For Woman', 'Aurelia', 'Safqa Q8', 'Awesum Dimsum', 'Naturalike Products', 'Once Upon a Trunk', 'Lava'])
  assert.deepEqual(await section.locator('img').evaluateAll(images => images.map(image => image.getAttribute('src'))), clients.logos.map(logo => logo.logo))
  assert.deepEqual(await section.locator('.trust-node a').evaluateAll(links => links.map(link => ({ href: link.getAttribute('href'), target: link.target, rel: link.rel }))), clients.logos.filter(logo => logo.website).map(logo => ({ href: logo.website, target: '_blank', rel: 'noopener noreferrer' })))
  assert.equal(await section.getByRole('button', { name: /replay/i }).count(), 0)
  assert.equal(await section.locator('.trust-wire').first().evaluate(path => parseFloat(getComputedStyle(path).strokeDashoffset)), 0, 'Connections settle after entering the viewport')
  const clientLink = section.getByRole('link', { name: 'Safqa Q8 website (opens in a new tab)' })
  await clientLink.focus()
  assert.equal(await section.locator('.trust-wire.is-active').count(), 1, 'Keyboard focus must highlight the same connection as hover')
  await page.evaluate(() => document.activeElement?.blur())
  for (const theme of ['dark', 'light']) {
    if (await page.evaluate(() => document.documentElement.classList.contains('dark')) !== (theme === 'dark')) await page.getByRole('button', { name: `Switch to ${theme} mode` }).click()
    for (const width of [1440, 1024, 768, 390, 320]) {
      await page.setViewportSize({ width, height: 1000 })
      // Connectors must still terminate at their actual logo centres after every resize.
      await page.waitForFunction(() => Array.from(document.querySelectorAll('.trust-wire')).every((path, index) => {
        const point = path.getPointAtLength(path.getTotalLength())
        const matrix = path.getScreenCTM()
        const screen = new DOMPoint(point.x, point.y).matrixTransform(matrix)
        const logo = document.querySelectorAll('.trust-logo-surface')[index].getBoundingClientRect()
        return Math.abs(screen.x - logo.left - logo.width / 2) < 2 && Math.abs(screen.y - logo.top - logo.height / 2) < 2
      }))
      const overflow = await section.evaluate(root => [...root.querySelectorAll('*')].filter(node => {
        if (node.closest('svg')) return false
        const bounds = node.getBoundingClientRect()
        return bounds.width && (bounds.left < -1 || bounds.right > innerWidth + 1)
      }).map(node => node.className))
      assert.deepEqual(overflow, [], `${theme}: no overflow at ${width}px`)
      if (engine === 'chromium') {
        const audit = await new AxeBuilder({ page }).include('.trust-section').withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze()
        results.push({ theme, width, violations: audit.violations.map(item => ({ id: item.id, nodes: item.nodes.map(node => node.failureSummary) })) })
      }
    }
  }
  assert.equal(await section.locator('img').evaluateAll(images => images.every(image => image.complete && image.naturalWidth > 0)), true)
  await page.emulateMedia({ reducedMotion: 'reduce' })
  await page.reload({ waitUntil: 'domcontentloaded' })
  await page.getByRole('button', { name: /Switch to .* mode/ }).waitFor()
  await section.getByRole('heading').scrollIntoViewIfNeeded()
  assert.equal(await section.getByRole('button', { name: 'Replay the connections' }).isVisible(), false)
  assert.equal(await section.locator('.trust-node').last().evaluate(node => getComputedStyle(node).opacity), '1')
  await section.getByRole('link', { name: 'Explore our work' }).click()
  await page.waitForURL('**/portfolio')
  const staticContext = await browser.newContext({ javaScriptEnabled: false })
  const staticPage = await staticContext.newPage()
  await staticPage.goto(base, { waitUntil: 'domcontentloaded' })
  await staticPage.locator('.trust-section h2').waitFor({ state: 'visible' })
  assert.equal(await staticPage.locator('.trust-node').count(), 8)
  assert.equal(await staticPage.locator('.trust-replay').isVisible(), false)
  assert.deepEqual(errors, [])
  fs.writeFileSync(`docs/clients-review-${engine}.json`, JSON.stringify({ engine, clients: names, results, errors, thirdPartyErrors }, null, 2) + '\n')
  console.log(JSON.stringify({ engine, results, errors, thirdPartyErrors }, null, 2))
  assert.equal(results.flatMap(result => result.violations).length, 0)
} finally { await browser.close() }
