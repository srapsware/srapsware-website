import { chromium } from 'playwright'
import AxeBuilder from '@axe-core/playwright'
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'

const base = process.env.TEST_BASE_URL || 'http://127.0.0.1:3100'
const browser = await chromium.launch({ headless: true, ...(process.env.PLAYWRIGHT_CHANNEL ? { channel: process.env.PLAYWRIGHT_CHANNEL } : {}) })
const context = await browser.newContext({ viewport: { width: 1440, height: 1000 }, reducedMotion: 'reduce' })
const page = await context.newPage()
const report = []
try {
  for (const theme of ['dark', 'light']) {
    await page.goto(base, { waitUntil: 'domcontentloaded' })
    await page.evaluate(value => localStorage.setItem('theme', value), theme)
    for (const route of ['/', '/about', '/contact', '/services/web-development/frontend', '/portfolio', '/portfolio/bionic-reading', '/technologies/react', '/blog/wordpress-at-18', '/resources', '/testimonials']) {
      await page.goto(base + route, { waitUntil: 'domcontentloaded' })
      await page.locator('h1').waitFor()
      await page.getByRole('button', { name: theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode' }).waitFor()
      if (route === '/' || route === '/about') await page.screenshot({ path: path.join(os.tmpdir(), `srapsware-${route === '/' ? 'home' : 'about'}-${theme}.png`), fullPage: true })
      const result = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze()
      report.push({ route, theme, violations: result.violations.map(item => ({ id: item.id, impact: item.impact, nodes: item.nodes.map(node => ({ target: node.target, summary: node.failureSummary })) })) })
      if (route === '/') {
        for (const name of ['Commerce', 'Cloud & delivery', 'Connected systems']) {
          await page.getByRole('tab', { name }).click()
          const state = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze()
          report.push({ route: `/ (${name})`, theme, violations: state.violations.map(item => ({ id: item.id, impact: item.impact, nodes: item.nodes.map(node => ({ target: node.target, summary: node.failureSummary })) })) })
        }
        await page.getByRole('tab', { name: 'Digital products' }).click()
        await page.getByRole('tabpanel').screenshot({ path: path.join(os.tmpdir(), `srapsware-capabilities-${theme}.png`) })
      }
    }
  }
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto(base + '/about', { waitUntil: 'domcontentloaded' })
  await page.screenshot({ path: path.join(os.tmpdir(), 'srapsware-about-mobile.png'), fullPage: true })
  await page.getByRole('button', { name: 'Open navigation' }).click()
  await page.getByRole('dialog').waitFor()
  const mobile = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze()
  report.push({ route: '/about (mobile drawer)', theme: 'light', violations: mobile.violations.map(item => ({ id: item.id, impact: item.impact, nodes: item.nodes.map(node => ({ target: node.target, summary: node.failureSummary })) })) })
  fs.writeFileSync('docs/accessibility-results.json', JSON.stringify(report, null, 2) + '\n')
  console.log(JSON.stringify(report.filter(item => item.violations.length), null, 2))
  const count = report.reduce((total, item) => total + item.violations.length, 0)
  console.log(`${report.length} page/theme states checked; ${count} rule violations.`)
  if (count) process.exitCode = 1
} finally { await browser.close() }
