# Inner pages and products: editing and release notes

The existing Git-backed Decap CMS at `/admin/` now edits services, solutions, products, product documents, company pages, guides and FAQs. Markdown is the shared source for rendering, search and related content. CMS commits are deployed through the existing GitHub/Vercel workflow.

## Editing

- Services and solutions: keep `route` stable. `pageTitle` and `pageDescription` control detail pages while existing `title` and `description` can retain homepage card copy. Choose a `scene`, edit deliverables, steps and questions, and select existing technologies or portfolio projects. New routes render through the shared templates.
- Products: add a Markdown record under `content/products` or use Products in the CMS. Its filename becomes `/product/{slug}`. Set actual release status, platform, license, pricing text, official links, features and real screenshots. Empty optional URLs hide their buttons. Mark unfinished records as drafts.
- Product documents: select a product and privacy, terms, support or data-deletion. Only existing published documents create navigation and sitemap entries. Write product-specific approved copy; creating a deletion page does not implement a deletion backend.
- Guides: structured sections and Markdown body appear on the page and in the downloadable Markdown file.
- Related work: curated `relatedProjects` take priority. Otherwise existing technology/industry metadata selects relevant projects. Missing outcomes are omitted rather than invented. Improve short existing portfolio stories with verified challenge, approach and results.
- Company pages: edit existing records and retain their route. The CMS preview shows content; the deployed page shows the full SVG/GSAP layout.

## Validation

Run `pnpm check:content`, `pnpm check:links`, `pnpm typecheck`, `pnpm lint`, `pnpm test`, and `pnpm build`. The production build validates content relationships. Browser review scripts accept `REVIEW_URL`; `scripts/crawl-inner-routes.mjs` reads the `.next-inner` build manifest.

Do not rerun the one-time migration script over edited content. Existing URLs are preserved; a later slug change needs an explicit permanent redirect.

## GPS Hunter release checklist

GPS Hunter remains not publicly released. Leave `storeUrl` empty until the real listing is available. The existing privacy and terms content has been preserved, not legally re-certified. Before release, confirm developer identity, permissions, accounts, analytics/ads/crash SDKs, data collection/retention and billing, then reconcile the policies and store disclosures with the actual app. No fake store URL is published.

## Deployment checks

Local verification does not verify Vercel secrets, production SMTP delivery, Turnstile domain configuration or authenticated GitHub CMS publishing. Confirm those on the deployed environment. No deployment, production form submission or CMS commit is performed by the local test suite.
