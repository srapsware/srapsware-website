import { chromium, firefox, webkit } from 'playwright'
import AxeBuilder from '@axe-core/playwright'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import { getAllPortfolio, getTechnologies, getSiteSettings } from '../lib/content.ts'

const projects = getAllPortfolio().slice(0, 14)
const technologies = new Map(getTechnologies().map(technology => [technology.title, technology]))
const engine = process.env.PLAYWRIGHT_BROWSER || 'chromium'
const browser = await ({ chromium, firefox, webkit })[engine].launch()
const base = process.env.TEST_BASE_URL || 'http://127.0.0.1:3100'
const errors = [], thirdPartyErrors = [], results = []
const normalize = text => text.replace(/\s+/g, ' ').trim()
try {
  const context = await browser.newContext({ viewport: { width: 1440, height: 1100 } })
  const page = await context.newPage()
  page.on('pageerror', error => (error.message.includes('challenges.cloudflare.com') ? thirdPartyErrors : errors).push(error.message))
  await page.goto(base, { waitUntil: 'domcontentloaded' })
  await page.getByRole('button', { name: /Switch to .* mode/ }).waitFor()
  const section = page.locator('.work-gallery')
  const rail = section.locator('.work-reel')
  await section.scrollIntoViewIfNeeded()
  await page.waitForTimeout(1600)
  assert.equal(normalize(await section.getByRole('heading', { level: 2 }).innerText()), getSiteSettings().sections.portfolioTitle)
  assert.equal(await section.locator('.work-introduction p').innerText(), getSiteSettings().sections.portfolioDescription)
  assert.deepEqual(await section.locator('.work-project').evaluateAll(cards => cards.map(card => card.dataset.project)), projects.map(project => project.slug))
  for (const [index, project] of projects.entries()) {
    const card = section.locator('.work-project').nth(index)
    assert.equal(await card.locator('h3').innerText(), project.title)
    assert.equal(await card.locator('.work-description').innerText(), project.description)
    assert.equal(await card.locator('.work-project-link').getAttribute('href'), `/portfolio/${project.slug}`)
    assert.ok((await card.locator('.work-photo').getAttribute('src')).endsWith(project.image.replace(/^\/assets/, '')))
    assert.equal(await card.locator('.work-photo').getAttribute('alt'), project.image_alt || project.title)
    assert.deepEqual(await card.locator('.work-categories > span').allTextContents(), project.categories || [])
    assert.equal(await card.locator('.work-status').innerText().then(text => text.toLowerCase()), project.status.toLowerCase())
    assert.deepEqual(await card.locator('.work-technology').evaluateAll(items => items.map(item => item.title)), project.technologies || [])
    for (const [techIndex, name] of (project.technologies || []).entries()) {
      const technology = technologies.get(name)
      if (technology?.logo) assert.ok((await card.locator('.work-technology').nth(techIndex).locator('img').getAttribute('src')).endsWith(technology.logo.replace(/^\/assets/, '')))
    }
  }
  assert.equal(await section.getByRole('button', { name: /replay/i }).count(), 0)
  const next = section.getByRole('button', { name: 'Next projects' })
  const previous = section.getByRole('button', { name: 'Previous projects' })
  assert.equal(await previous.getAttribute('aria-disabled'), 'true')
  await next.click()
  await page.waitForTimeout(160)
  const moving = await rail.evaluate(node => node.scrollLeft)
  assert.ok(moving > 0, 'GSAP navigation should begin moving the reel')
  await page.waitForTimeout(800)
  assert.ok(await rail.evaluate(node => node.scrollLeft) > moving, 'Navigation should reach the next frame')
  await previous.click()
  await page.waitForTimeout(850)
  assert.ok(await rail.evaluate(node => node.scrollLeft) < 2)
  // Vertical mouse-wheel input moves the gallery, then releases the page at either end.
  await rail.hover()
  const pageTop = await page.evaluate(() => scrollY)
  await page.mouse.wheel(0, 520)
  await page.waitForTimeout(500)
  assert.ok(await rail.evaluate(node => node.scrollLeft) > 400, 'The vertical mouse wheel must move projects horizontally')
  assert.ok(Math.abs(await page.evaluate(() => scrollY) - pageTop) < 2, 'Do not scroll the page while browsing the reel')
  await page.mouse.wheel(0, -220)
  await page.waitForTimeout(500)
  assert.ok(await rail.evaluate(node => node.scrollLeft) < 420, 'Reverse wheel movement should browse backwards')
  await rail.evaluate(node => { node.scrollLeft = node.scrollWidth })
  await page.mouse.wheel(0, 320)
  await page.waitForTimeout(450)
  assert.ok(await page.evaluate(() => scrollY) > pageTop + 50, 'At the last project, scrolling continues down the page')
  await section.scrollIntoViewIfNeeded()
  await rail.evaluate(node => { node.scrollLeft = 0 })
  await rail.focus()
  await rail.press('ArrowRight')
  await page.waitForTimeout(850)
  assert.ok(await rail.evaluate(node => node.scrollLeft) > 100, 'Keyboard users can move the gallery')
  for (let index = 0; index < 3; index++) await next.click()
  await page.waitForTimeout(900)
  assert.equal(await rail.evaluate(node => node.style.scrollSnapType), '', 'Restore native snapping after rapid navigation')
  // Every project can be reached and its original assets load, including the last item.
  for (let index = 0; index < projects.length; index++) {
    await section.locator('.work-project-link').nth(index).focus()
    await page.waitForFunction(index => {
      const item = document.querySelectorAll('.work-project')[index]
      return [...item.querySelectorAll('img')].every(image => image.complete && image.naturalWidth > 0)
    }, index)
  }
  await page.waitForTimeout(1500)
  assert.equal(await next.getAttribute('aria-disabled'), 'true')
  for (const theme of ['dark', 'light']) {
    if (await page.evaluate(() => document.documentElement.classList.contains('dark')) !== (theme === 'dark')) await page.getByRole('button', { name: `Switch to ${theme} mode` }).click()
    for (const width of [1440, 1280, 1100, 1024, 768, 390, 320]) {
      await page.setViewportSize({ width, height: 1100 })
      await rail.evaluate(node => { node.scrollLeft = 0 })
      await page.waitForTimeout(150)
      const visibleCount = await rail.evaluate(node => {
        const bounds = node.getBoundingClientRect()
        return [...node.children].filter(card => {
          const rect = card.getBoundingClientRect()
          return rect.left >= bounds.left - 2 && rect.right <= bounds.right + 2
        }).length
      })
      assert.equal(visibleCount, width >= 1100 ? 3 : width >= 760 ? 2 : 1, `Correct project count at ${width}px`)
      const peekRatio = await rail.evaluate(node => {
        const bounds = node.getBoundingClientRect()
        const partial = [...node.children].find(card => {
          const rect = card.getBoundingClientRect()
          return rect.left > bounds.left && rect.left < bounds.right && rect.right > bounds.right + 2
        })
        if (!partial) return 0
        const rect = partial.getBoundingClientRect()
        return (bounds.right - rect.left) / rect.width
      })
      if (width >= 1100) assert.ok(Math.abs(peekRatio - .5) < .015, 'Desktop shows half of the fourth project')
      else assert.ok(peekRatio > .05 && peekRatio < .5, 'Smaller screens retain a visible next-project cue')
      assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), `No document overflow at ${width}`)
      const clipping = await section.evaluate(root => [...root.querySelectorAll('h2, .work-heading, .work-gallery-footer, .work-controls')].some(node => {
        const rect = node.getBoundingClientRect()
        return rect.left < -1 || rect.right > innerWidth + 1
      }))
      assert.equal(clipping, false, `${theme} controls and heading fit at ${width}`)
      if (engine === 'chromium') {
        const audit = await new AxeBuilder({ page }).include('.work-gallery').withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze()
        results.push({ theme, width, violations: audit.violations })
      }
    }
  }
  await page.emulateMedia({ reducedMotion: 'reduce' })
  await page.reload({ waitUntil: 'domcontentloaded' })
  await page.getByRole('button', { name: /Switch to .* mode/ }).waitFor()
  await section.scrollIntoViewIfNeeded()
  await next.click()
  assert.ok(await rail.evaluate(node => node.scrollLeft) > 100)
  assert.equal(await section.locator('.work-frame').first().evaluate(node => node.style.clipPath), '')
  assert.equal(await section.locator('.work-photo').first().evaluate(node => node.style.transform), '')
  await section.locator('.work-project-link').first().click()
  await page.waitForURL(`**/portfolio/${projects[0].slug}`)
  const noJs = await browser.newContext({ javaScriptEnabled: false })
  const staticPage = await noJs.newPage()
  await staticPage.goto(base, { waitUntil: 'domcontentloaded' })
  await staticPage.locator('.work-gallery h2').waitFor({ state: 'visible' })
  assert.equal(await staticPage.locator('.work-project-link').count(), projects.length)
  assert.equal(await staticPage.locator('.work-controls').isVisible(), false)
  await staticPage.locator('.work-project-link').last().focus()
  assert.ok(await staticPage.locator('.work-reel').evaluate(node => node.scrollLeft) > 100, 'The native gallery remains navigable without JavaScript')
  assert.deepEqual(errors, [])
  fs.writeFileSync(`docs/portfolio-review-${engine}.json`, JSON.stringify({ engine, projects: projects.map(project => project.slug), results, errors, thirdPartyErrors }, null, 2) + '\n')
  console.log(JSON.stringify({ engine, projects: projects.length, accessibilityStates: results.length, violations: results.flatMap(result => result.violations), errors, thirdPartyErrors }, null, 2))
  assert.equal(results.flatMap(result => result.violations).length, 0)
} finally { await browser.close() }
