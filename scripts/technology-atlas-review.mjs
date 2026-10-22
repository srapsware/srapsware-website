import { chromium } from 'playwright'
import AxeBuilder from '@axe-core/playwright'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import yaml from 'js-yaml'
const technologies = yaml.load(fs.readFileSync('content/data/technologies.yml', 'utf8')).technologies
const expected = technologies.filter(t => t.active && t.featured)
const browser = await chromium.launch()
const report = []
try {
  for (const width of [1440, 1024, 768, 390, 320]) {
    const context = await browser.newContext({ viewport: { width, height: 1100 }, reducedMotion: width === 320 ? 'reduce' : 'no-preference' })
    const page = await context.newPage()
    const errors = []
    page.on('pageerror', error => errors.push(error.message))
    await page.goto(process.env.REVIEW_URL || 'http://127.0.0.1:3100', { waitUntil: 'domcontentloaded' })
    await page.getByRole('button', { name: /Switch to .* mode/ }).waitFor()
    const section = page.locator('#technology-atlas')
    await section.locator('.technology-landscape').scrollIntoViewIfNeeded()
    await page.waitForTimeout(2800)
    assert.equal(await section.locator('.atlas-inline-detail').count(), 0)
    assert.equal(await section.locator('.atlas-select[aria-pressed=true]').count(), 0)
    assert.equal(await section.locator('.landscape-cluster').count(), 6)
    assert.deepEqual(await section.locator('.atlas-tile').evaluateAll(nodes => nodes.map(n => n.dataset.technology)), expected.map(t => t.slug))
    for (const theme of ['light', 'dark']) {
      if (await page.evaluate(() => document.documentElement.classList.contains('dark')) !== (theme === 'dark')) await page.getByRole('button', { name: `Switch to ${theme} mode` }).click()
      await section.locator('.technology-landscape').scrollIntoViewIfNeeded()
      const violations = (await new AxeBuilder({ page }).include('#technology-atlas').analyze()).violations
      assert.deepEqual(violations.map(v => ({ id: v.id, nodes: v.nodes.map(n => n.target) })), [])
      assert.equal(await section.evaluate(el => el.scrollWidth > el.clientWidth), false)
      await section.locator('.technology-landscape').screenshot({ path: `docs/technology-landscape-${theme}-${width}.png` })
      report.push({ width, theme, accessibilityViolations: violations.length })
    }
    await section.locator('.landscape-cluster').filter({ hasText: 'Interfaces & design' }).click()
    await page.waitForTimeout(600)
    assert.equal(await section.locator('.atlas-tile').count(), expected.filter(t => ['Frontend', 'Design'].includes(t.category)).length)
    await section.getByRole('button', { name: 'Clear filters' }).click()
    const react = section.locator('[data-technology=react] .atlas-select')
    await react.focus()
    await page.keyboard.press('Enter')
    assert.equal(await section.locator('.atlas-selected-heading h3').textContent(), 'React')
    const panelPosition = await section.locator('.atlas-panel-row').evaluate(el => ({ top: el.getBoundingClientRect().top, previousBottom: el.previousElementSibling.getBoundingClientRect().bottom }))
    assert.ok(panelPosition.top >= panelPosition.previousBottom)
    await section.locator('.atlas-related button').first().click()
    assert.equal(await section.locator('.atlas-selected-heading h3').textContent(), 'Next.js')
    const openViolations = (await new AxeBuilder({ page }).include('#technology-atlas').analyze()).violations
    assert.deepEqual(openViolations.map(v => v.id), [])
    await section.getByRole('button', { name: 'Close exploration' }).click()
    assert.equal(await react.evaluate(el => el === document.activeElement), true)
    assert.equal(await section.locator('.atlas-inline-detail').count(), 0)
    await section.getByRole('button', { name: 'Backend', exact: true }).click()
    await page.waitForTimeout(600)
    assert.equal(await section.locator('.atlas-tile').count(), expected.filter(t => t.category === 'Backend').length)
    await section.getByRole('button', { name: 'Clear filters' }).click()
    await section.getByRole('searchbox').fill('redis')
    await page.waitForTimeout(600)
    assert.equal(await section.locator('.atlas-tile').count(), 1)
    assert.equal(await section.getByRole('link', { name: 'Redis details', exact: true }).getAttribute('href'), '/technologies/redis')
    await section.locator('[data-technology=redis] .atlas-select').click()
    await page.waitForTimeout(2700)
    assert.equal(await section.locator('.atlas-selected-heading h3').textContent(), 'Redis')
    await section.getByRole('searchbox').fill('nonexistenttechnology')
    assert.equal(await section.locator('.atlas-tile').count(), 0)
    await section.getByRole('button', { name: 'Clear filters' }).click()
    await page.waitForTimeout(600)
    assert.equal(await section.locator('.atlas-tile').count(), expected.length)
    const broken = await section.locator('img').evaluateAll(async imgs => {
      await Promise.all(imgs.map(async img => { img.loading = 'eager'; try { await img.decode() } catch {} }))
      return imgs.filter(i => !i.complete || !i.naturalWidth).map(i => i.src)
    })
    assert.deepEqual(broken, [])
    assert.deepEqual(errors, [])
    await context.close()
  }
  fs.writeFileSync('docs/technology-landscape-review.json', JSON.stringify({ inventory: expected.length, report }, null, 2))
  console.log('Atlas inventory, filters, selection, images, accessibility and responsive checks passed.')
} finally { await browser.close() }
