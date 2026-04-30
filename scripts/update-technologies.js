/**
 * update-technologies.js
 *
 * Scans each portfolio site with a headed Playwright browser using the existing
 * detect-tech.js module and updates the `target_technologies` field in
 * portfolio-data.json to reflect what is actually detected on the live site.
 *
 * Strategy:
 *  - Detected technologies REPLACE `target_technologies` if ≥2 are found.
 *  - If <2 detected (blocked/SPA with no signals), the existing value is KEPT.
 *  - Results are saved to tech-detection-results.json for review.
 *
 * Usage:
 *   node scripts/update-technologies.js          → dry-run: show what would change
 *   node scripts/update-technologies.js --apply  → write changes to portfolio-data.json
 *   node scripts/update-technologies.js --slug <slug> --apply  → single entry
 *   node scripts/update-technologies.js --resume → skip slugs already in results file
 */

import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { detectTech } from './detect-tech.js';

const __dirname   = path.dirname(fileURLToPath(import.meta.url));
const DATA_FILE   = path.join(__dirname, 'portfolio-data.json');
const RESULT_FILE = path.join(__dirname, 'tech-detection-results.json');

const NAV_TIMEOUT          = 40_000;
const CLOUDFLARE_WAIT      = 12_000;
const SLOW_SERVER_WAIT     =  8_000;
const NETWORK_IDLE_TIMEOUT =  8_000;

// Minimum detected technologies needed to trust the result and overwrite existing
const MIN_DETECTED_TO_REPLACE = 2;

// ---------------------------------------------------------------------------
// Visit a page and return detected technologies
// ---------------------------------------------------------------------------
async function scanSite(page, url) {
  const href = url.startsWith('http') ? url : 'https://' + url;
  let response = null;
  try {
    response = await page.goto(href, { waitUntil: 'load', timeout: NAV_TIMEOUT });
  } catch (e) {
    const msg = String(e?.message || e);
    if (/ERR_NAME_NOT_RESOLVED|ERR_ADDRESS_UNREACHABLE|ERR_CONNECTION_REFUSED/.test(msg)) {
      return { ok: false, reason: 'DEAD', detected: [] };
    }
    if (/timeout|Timeout/.test(msg)) {
      console.log(`  ⚠  Timeout on navigation — continuing with partial page`);
    } else {
      return { ok: false, reason: msg.slice(0, 80), detected: [] };
    }
  }

  const httpCode = response?.status() ?? 0;
  if (httpCode === 404 || httpCode >= 500) {
    return { ok: false, reason: `HTTP ${httpCode}`, detected: [] };
  }

  // Cloudflare detection
  const title   = await page.title().catch(() => '');
  const content = await page.content().catch(() => '');
  const isChallenge =
    /just a moment|cloudflare|ddos.guard|checking your browser/i.test(title) ||
    /cf-browser-verification|cf_chl_prog|ddos-guard/i.test(content);

  if (isChallenge) {
    console.log(`  ⏳ Cloudflare challenge — waiting ${CLOUDFLARE_WAIT / 1000}s…`);
    await page.waitForTimeout(CLOUDFLARE_WAIT);
    try {
      await page.waitForFunction(
        () => !/just a moment|checking your browser/i.test(document.title),
        { timeout: 15_000 }
      );
    } catch {}
  }

  try { await page.waitForLoadState('networkidle', { timeout: NETWORK_IDLE_TIMEOUT }); } catch {}
  await page.waitForTimeout(SLOW_SERVER_WAIT);

  const detected = await detectTech(page, response);
  return { ok: true, httpCode, detected };
}

// ---------------------------------------------------------------------------
// CLI args
// ---------------------------------------------------------------------------
function parseArgs() {
  const args = process.argv.slice(2);
  const opts = { apply: false, resume: false, slug: null };
  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--apply')              opts.apply  = true;
    if (args[i] === '--resume')             opts.resume = true;
    if (args[i] === '--slug' && args[i+1])  opts.slug   = args[++i];
  }
  return opts;
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------
async function run() {
  const opts    = parseArgs();
  const entries = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));

  // Load existing results for resume support
  let existingResults = [];
  if (fs.existsSync(RESULT_FILE)) {
    try { existingResults = JSON.parse(fs.readFileSync(RESULT_FILE, 'utf8')); } catch {}
  }
  const doneSet = opts.resume
    ? new Set(existingResults.map(r => r.slug))
    : new Set();

  // Filter targets
  let targets = entries;
  if (opts.slug) {
    targets = entries.filter(e => e.slug === opts.slug);
    if (!targets.length) { console.error(`Slug "${opts.slug}" not found.`); process.exit(1); }
  }
  if (opts.resume) {
    targets = targets.filter(e => !doneSet.has(e.slug));
  }

  console.log(`\n╔══════════════════════════════════════════╗`);
  console.log(`║      update-technologies.js              ║`);
  console.log(`╚══════════════════════════════════════════╝`);
  console.log(`  Total entries       : ${entries.length}`);
  console.log(`  Processing now      : ${targets.length}`);
  console.log(`  Min detected needed : ${MIN_DETECTED_TO_REPLACE}`);
  console.log(`  Mode                : ${opts.apply ? 'APPLY' : 'DRY RUN'}`);
  console.log(`  Resume              : ${opts.resume ? `yes (${doneSet.size} already done)` : 'no'}\n`);

  const browser = await chromium.launch({
    headless: false,
    args: ['--start-maximized', '--disable-blink-features=AutomationControlled'],
  });
  const context = await browser.newContext({
    viewport: null,
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
  });
  const page = await context.newPage();

  const results = opts.resume ? [...existingResults] : [];
  let updated = 0;
  let kept    = 0;
  let failed  = 0;

  for (let i = 0; i < targets.length; i++) {
    const entry = targets[i];
    console.log(`\n[${i + 1}/${targets.length}] ${entry.slug} — ${entry.url}`);
    console.log(`  Existing: ${(entry.target_technologies || []).join(', ') || '(none)'}`);

    // Clear cookies between each site visit to prevent cookie accumulation
    // across different domains polluting subsequent detections
    await context.clearCookies();

    const scan = await scanSite(page, entry.url);

    if (!scan.ok) {
      console.log(`  ✗ Scan failed: ${scan.reason} — keeping existing technologies`);
      failed++;
      results.push({
        slug: entry.slug,
        url: entry.url,
        status: 'FAILED',
        reason: scan.reason,
        existing: entry.target_technologies || [],
        detected: [],
        applied: entry.target_technologies || [],
      });
      // Save incremental results
      fs.writeFileSync(RESULT_FILE, JSON.stringify(results, null, 2));
      continue;
    }

    console.log(`  Detected: ${scan.detected.join(', ') || '(none)'}`);

    let applied;
    if (scan.detected.length >= MIN_DETECTED_TO_REPLACE) {
      applied = scan.detected;
      updated++;
      console.log(`  ✓ Will update → ${applied.join(', ')}`);
    } else {
      applied = entry.target_technologies || [];
      kept++;
      console.log(`  → Too few detected (${scan.detected.length}) — keeping existing`);
    }

    results.push({
      slug: entry.slug,
      url: entry.url,
      status: 'OK',
      httpCode: scan.httpCode,
      existing: entry.target_technologies || [],
      detected: scan.detected,
      applied,
      changed: JSON.stringify(applied) !== JSON.stringify(entry.target_technologies || []),
    });

    // Incremental save of results after each entry
    fs.writeFileSync(RESULT_FILE, JSON.stringify(results, null, 2));
  }

  await browser.close();

  // ---------------------------------------------------------------------------
  // Summary
  // ---------------------------------------------------------------------------
  console.log('\n════════════════════════════════════════════════════════════════');
  console.log(`  Processed : ${targets.length}`);
  console.log(`  Updated   : ${updated}  (detected ≥${MIN_DETECTED_TO_REPLACE} techs — will replace)`);
  console.log(`  Kept      : ${kept}  (too few detected — kept existing)`);
  console.log(`  Failed    : ${failed}  (dead/blocked sites)`);

  if (opts.apply) {
    // Build lookup from results
    const resultMap = {};
    for (const r of results) resultMap[r.slug] = r;

    let writeCount = 0;
    for (const entry of entries) {
      const r = resultMap[entry.slug];
      if (r && r.applied && r.status !== 'FAILED') {
        entry.target_technologies = r.applied;
        if (r.changed) writeCount++;
      }
    }

    // Backup
    fs.copyFileSync(DATA_FILE, DATA_FILE.replace('.json', '.backup.json'));
    fs.writeFileSync(DATA_FILE, JSON.stringify(entries, null, 2));
    console.log(`\n  ✓ Applied ${writeCount} technology changes → ${DATA_FILE}`);
  } else {
    console.log('\n  DRY RUN — run with --apply to write changes.');
    // Show what would change
    const wouldChange = results.filter(r => r.changed);
    if (wouldChange.length > 0) {
      console.log(`\n  Would update ${wouldChange.length} entries:`);
      for (const r of wouldChange) {
        console.log(`  [${r.slug}]`);
        console.log(`    Before: ${r.existing.join(', ')}`);
        console.log(`    After : ${r.detected.join(', ')}`);
      }
    }
  }

  console.log(`\n  Results saved → ${RESULT_FILE}`);
}

run().catch(err => { console.error(err); process.exit(1); });
