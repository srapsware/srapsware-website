# Running and maintaining the website

Use the Node version supported by `package.json` and pnpm 10.32.1. `pnpm-lock.yaml` is the dependency lockfile. Keep real environment values in local/Vercel settings; `.env.example` documents the configuration.

## Development and release checks

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Before deploying through the existing GitHub-to-Vercel workflow:

```sh
pnpm lint
pnpm test
pnpm check:links
pnpm check:content
pnpm build
pnpm typecheck
```

Run a production server with `pnpm start --port 3100`, then in a second terminal:

```sh
pnpm test:smoke
node scripts/accessibility.mjs
node scripts/crawl.mjs
pnpm audit:seo
```

Browser checks use `TEST_BASE_URL` (default `http://127.0.0.1:3100`). Install browsers with `pnpm exec playwright install chromium`. The smoke test also supports `PLAYWRIGHT_BROWSER=firefox` or `webkit` when those browsers are installed. `scripts/performance.mjs` provides a local diagnostic, not field Core Web Vitals.

SEO checks use `REVIEW_URL` and `SRAPSWARE_BUILD_DIR` (defaults: `http://127.0.0.1:3100` and `.next`). Run `pnpm audit:seo-content` for editorial review flags. Reports are regenerated into the ignored `reports/` directory. A source-content word count is a review aid, not an SEO rule; add only verified project details and outcomes.

## Content and design sources

- `config/site.ts`: identity, contact details and primary CTA.
- `config/menu.ts`: shared navigation and footer groups.
- `content/`: Markdown and YAML managed by the existing Decap CMS.
- `public/admin/config.yml`: CMS collections and editor fields.
- `lib/page-content.ts`: published page/content loading.
- `lib/seo.ts`, `lib/sitemap.ts`: metadata and sitemap helpers.
- `components/animations/`: reusable SVG/GSAP visuals with reduced-motion support.
- `config/routes.json`: generated static-route inventory; `pnpm prebuild` refreshes it.

See [CONTENT-AUTHORING.md](CONTENT-AUTHORING.md) for CMS editing, products and policy pages. Do not remove Markdown because it lacks a direct import: collections are loaded from their directories.

## Assets and utilities

Use `pnpm optimize:images:dry` to review image optimization first. See [scripts/README.md](scripts/README.md) for image-tool options. `scripts/generate-brand-icons.mjs` regenerates brand icons when the source artwork changes.

Generated reports, temporary build directories and local caches do not belong in commits. Keep the active `.next` directory while a development server is running. The cleanup removed old redesign evidence and migration scripts; it did not alter live content or environment settings.

## Live deployment verification

Confirm production canonical URLs, image delivery, SMTP, Turnstile domains and authenticated CMS publishing after deployment. Verify production is not served with preview noindex headers. Inspect the sitemap and page indexing through Google Search Console and Bing Webmaster Tools; local tests cannot establish live indexing or AI citations.

GPS Hunter remains unreleased until its real store link and app-specific policy facts are confirmed. Several existing project stories still need factual editorial expansion. A successful build does not establish those facts or guarantee search rankings.
