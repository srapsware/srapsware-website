# Srapsware Next.js + DecapCMS Project Structure

## 📁 New Organization

```
srapsware-website/
├── app/                    # Next.js App Router
├── components/            # React Components
├── content/              # All Markdown Content ✅
│   ├── posts/           # Blog posts
│   ├── portfolio/       # Portfolio projects
│   ├── testimonials/    # Testimonials
│   ├── authors/         # Team members
│   └── data/            # YAML data files
├── lib/                  # Utilities
├── public/              # Static Assets ✅
│   ├── admin/           # DecapCMS
│   └── assets/          # Images, uploads
└── [config files]
```

See full documentation in README.md after next dev server starts successfully.

## ✅ What Was Moved:
- `_posts/` → `content/posts/`
- `_portfolio/` → `content/portfolio/`
- `_testimonial/` → `content/testimonials/`
- `_author/` → `content/authors/`
- `_data/` → `content/data/`
- `admin/` → `public/admin/`
- `assets/` → `public/assets/`

## 🚀 Start Development:
```bash
pnpm dev
```
