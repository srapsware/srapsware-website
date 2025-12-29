# Srapsware Website Migration Plan
## Jekyll + NetlifyCMS → Next.js 14+ + DecapCMS

**Project Goal:** Modernize 15+ year old Srapsware website with Next.js 14, DecapCMS, GSAP animations, and contemporary software company design while preserving all existing content (604+ projects, 400+ clients, blog posts, testimonials).

---

## ⚡ Quick Reference

📚 **Related Documents:**
- **[MEGA-MENU-STRUCTURE.md](MEGA-MENU-STRUCTURE.md)** - Complete 6-column mega menu with 48+ services
- **[DESIGN-SYSTEM.md](DESIGN-SYSTEM.md)** - Colors (CSS variables), typography, GSAP animations, component patterns
- **[README-MIGRATION.md](README-MIGRATION.md)** - Quick start guide & documentation index

---

## 🎨 Design Approach (Official shadcn/ui Method)

✅ **Colors:** ALL in `app/globals.css` as CSS variables (HSL format)
✅ **Tailwind:** Only maps variables → utilities (minimal config)
✅ **Components:** Use semantic classes (`bg-brand`, `text-primary`, etc.)
✅ **Dark Mode:** Auto-adjusts via CSS variables (logo: Blue → White)
✅ **Reusability:** Maximum component reuse with shadcn/ui

See [DESIGN-SYSTEM.md](DESIGN-SYSTEM.md) for complete implementation.

---

## 📋 PHASE 1: PLANNING & ANALYSIS (Current Phase)

### ✅ 1.1 Current Stack Analysis
- [x] Jekyll static site generator
- [x] NetlifyCMS for content management
- [x] Markdown files for content (_posts, _portfolio, _testimonial, _author)
- [x] YAML data files (_data/categories.yml, technologies.yml, etc.)
- [x] Git-gateway backend with GitHub repo
- [x] Netlify hosting & deployment
- [x] Jekyll plugins: feed, sitemap, seo-tag, paginate-v2, tagging, archives
- [x] Current collections: Blog, Portfolio, Testimonials, Authors

### 1.2 Design Research & Inspiration
- [ ] Research modern software company websites (Vercel, Linear, Stripe, Railway)
- [ ] Identify GSAP animation patterns and micro-interactions
- [ ] Create mood board for design direction
- [ ] Define color palette, typography, spacing system
- [ ] Sketch wireframes for key pages (Home, Portfolio, Blog, Services, Contact)

### 1.3 Technical Architecture Planning
- [ ] Document Next.js 14 App Router structure
- [ ] Plan API routes for dynamic content
- [ ] Define component architecture (atomic design)
- [ ] Plan state management approach (Context/Zustand)
- [ ] Design markdown rendering pipeline
- [ ] Plan image optimization strategy (next/image)

---

## 📋 PHASE 2: PROJECT SETUP & INFRASTRUCTURE

### 2.1 Next.js Project Initialization
- [ ] Create new Next.js 14 project with TypeScript
- [ ] Configure ESLint, Prettier, Husky
- [ ] Setup folder structure:
  ```
  /src
    /app            # App router pages
    /components     # React components
    /lib            # Utilities, helpers
    /styles         # Global styles, theme
    /types          # TypeScript types
    /hooks          # Custom React hooks
  /content
    /posts          # Markdown blog posts
    /portfolio      # Portfolio projects
    /testimonials   # Client testimonials
    /authors        # Author profiles
  /public
    /assets         # Images, fonts, static files
  ```
- [ ] Install core dependencies:
  - next@latest
  - react@latest
  - typescript
  - tailwindcss
  - @types/node, @types/react

### 2.2 Content Migration Strategy
- [ ] Keep existing markdown structure (_posts, _portfolio, etc.)
- [ ] Create content parser utilities:
  - [ ] YAML frontmatter parser
  - [ ] Markdown to HTML converter (remark/rehype)
  - [ ] Image path resolver
  - [ ] Category/tag relationship mapper
- [ ] Setup content validation schemas (Zod)
- [ ] Create build-time content indexing
- [ ] Preserve existing permalinks/URL structure

### 2.3 DecapCMS Setup
- [ ] Install decap-cms-app (successor to netlify-cms)
- [ ] Create `/public/admin/config.yml` with DecapCMS config
- [ ] Migrate NetlifyCMS config to DecapCMS format:
  - [ ] Blog collection
  - [ ] Portfolio collection
  - [ ] Testimonial collection
  - [ ] Author collection
  - [ ] Data files (categories, tags, technologies)
- [ ] Configure OAuth for GitHub authentication
- [ ] Test CMS functionality in development
- [ ] Setup preview templates for CMS

### 2.4 Development Environment
- [ ] Configure environment variables (.env.local)
- [ ] Setup Git repository structure
- [ ] Create development scripts (package.json)
- [ ] Configure path aliases (@/, ~/)
- [ ] Setup VS Code workspace settings

---

## 📋 PHASE 3: STYLING & DESIGN SYSTEM

### 3.1 Tailwind CSS + shadcn/ui Configuration
- [ ] Install Tailwind CSS v4
- [ ] Initialize shadcn/ui: `npx shadcn-ui@latest init`
- [ ] **Create `app/globals.css` with CSS variables:**
  - [ ] Base surfaces (background, foreground, card, popover)
  - [ ] Brand colors (--brand: #1C5489, --brand-light)
  - [ ] Semantic colors (primary, secondary, muted, accent, destructive)
  - [ ] Dark mode variants (logo becomes white)
  - [ ] All colors as HSL CSS variables
- [ ] **Configure `tailwind.config.ts` (minimal - only mapping)**
  - [ ] Map CSS variables to Tailwind utilities
  - [ ] ❌ NO raw hex colors
  - [ ] ❌ NO separate dark config
  - [ ] Install `tailwindcss-animate` plugin
- [ ] Setup fonts: Geist Sans + Geist Mono via `next/font`
- [ ] Configure border radius variables

### 3.2 shadcn/ui Component Setup
- [ ] Initialize shadcn/ui: `npx shadcn-ui@latest init`
- [ ] Install essential shadcn/ui components:
  - [ ] Button (with variants: default, outline, ghost, link)
  - [ ] Card (for project, blog, testimonial cards)
  - [ ] Input, Textarea, Select (form components)
  - [ ] Dialog (modals)
  - [ ] DropdownMenu (for mega menu)
  - [ ] NavigationMenu (for header mega menu)
  - [ ] Sheet (mobile sidebar menu)
  - [ ] Tabs (for services section)
  - [ ] Accordion (for FAQs) (with shadcn/ui)
- [ ] Setup next-themes for theme switching (built into shadcn)
- [ ] Add dark mode Switch component to header
- [ ] **All colors auto-adjust via CSS variables in globals.css**
- [ ] Logo switches: Blue (#1C5489) → White (via --brand variable)
- [ ] Test all shadcn components in both themes
- [ ] Persist user preference (localStorage)
- [ ] Add system preference detection
- [ ] Animated sun/moon icon toggle
- [ ] Smooth theme transition (200ms)

---

## 📋 PHASE 4: GSAP ANIMATIONS & INTERACTIONS

### 4.1 GSAP Setup
- [ ] Install GSAP Pro (with ScrollTrigger, SplitText plugins)
- [ ] Create animation utility hooks:
  - [ ] useGSAP hook
  - [ ] useScrollTrigger hook
  - [ ] useParallax hook
- [ ] Setup GSAP defaults and easing curves

### 4.2 Homepage Animations
- [ ] Hero section:
  - [ ] Animated headline with text reveal
  - [ ] Staggered button entrance
  - [ ] Floating background elements
  - [ ] Mouse-follow cursor effects
- [ ] Stats counter animation (604+ projects, 400+ clients)
- [ ] Portfolio grid:
  - [ ] Scroll-triggered card reveals
  - [ ] Hover state animations
  - [ ] Image parallax on scroll
- [ ] Services section:
  - [ ] Tab transitions
  - [ ] Icon animations
  - [ ] Content fade/slide effects
- [ ] Testimonials carousel:
  - [ ] Smooth auto-play
  - [ ] Drag interactions
  - [ ] Quote animations
- [ ] Smooth scroll implementation
- [ ] Page transition animations

### 4.3 Micro-interactions
- [ ] Button hover effects (scale, shine, morph)
- [ ] Link underline animations
- [ ] Input focus states
- [ ] Card hover elevations
- [ ] Navigation menu transitions
- [ ] Loading animations
- [ ] Scroll progress indicator
- [ ] "Back to top" button with progress ring

### 4.4 Page-specific Animations
- [ ] Blog list page scroll animations
- [ ] Portfolio filter transitions
- [ ] Single project page reveals
- [ ] Contact form interactions
- [ ] About page timeline animation
- [ ] 404 page playful animation

---

## 📋 PHASE 5: CORE FEATURES DEVELOPMENT

### 5.1 Content Rendering System
- [ ] Create markdown rendering pipeline:
  - [ ] Install remark, rehype plugins
  - [ ] Syntax highlighting (shiki/prism)
  - [ ] Auto-linking headings
  - [ ] Table of contents generation
  - [ ] Image optimization
  - [ ] Code block copy button
- [ ] Create MDX support (optional for rich content)
- [ ] Implement reading time calculator
- [ ] Add social sharing metadata

### 5.2 Blog System
- [ ] Blog listing page:
  - [ ] Pagination (10 posts per page)
  - [ ] Category filter
  - [ ] Tag filter
  - [ ] Search functionality
  - [ ] Featured posts section
- [ ] Single blog post page:
  - [ ] Post header (title, date, author, reading time)
  - [ ] Author bio card
  - [ ] Related posts
  - [ ] Social share buttons
  - [ ] Table of contents (for long posts)
  - [ ] Previous/Next navigation
- [ ] Category archive pages
- [ ] Tag archive pages
- [ ] Author profile pages
- [ ] RSS feed generation

### 5.3 Portfolio System
- [ ] Portfolio grid page:
  - [ ] Filterable by category
  - [ ] Filterable by technology
  - [ ] Grid/List view toggle
  - [ ] Infinite scroll or pagination
  - [ ] Search functionality
- [ ] Single portfolio page:
  - [ ] Project details (description, URL, technologies)
  - [ ] Image gallery with lightbox
  - [ ] Video embed support
  - [ ] App store badges (Android/iOS)
  - [ ] Related projects
  - [ ] CTA buttons (Visit Site, View Code)
- [ ] Portfolio categories pages
- [ ] Technology stack pages

### 5.4 Testimonials System
- [ ] Testimonials page:
  - [ ] Grid layout with cards
  - [ ] Filter by country/industry
- [ ] Homepage testimonial carousel
- [ ] Single testimonial page (optional)
- [ ] Schema.org markup for SEO

### 5.5 Core Pages
- [ ] **Homepage:**
  - [ ] Hero section with animated headline
  - [ ] Stats counters (projects, clients, employees, awards)
  - [ ] Services/expertise tabs (shadcn Tabs component)
  - [ ] Featured portfolio slider
  - [ ] Client testimonials carousel
  - [ ] Call-to-action sections
  - [ ] Newsletter signup
- [ ] **About page:**
  - [ ] Company history (15+ years)
  - [ ] Team members grid
  - [ ] Mission & values
  - [ ] Timeline of milestones
- [ ] **Services page:**
  - [ ] Service cards with details
  - [ ] Pricing tables (if applicable)
  - [ ] Process/workflow section
  - [ ] FAQ accordion (shadcn Accordion)
- [ ] **Contact page:**
  - [ ] Contact form with validation (React Hook Form + Zod)
  - [ ] Contact details
  - [ ] Map integration (optional)
  - [ ] Social links
- [ ] **404 page:**
  - [ ] Creative error page with animation
  - [ ] Search suggestions
  - [ ] Popular pages links

### 5.6 Header with Mega Menu
- [ ] **Desktop Header:**
  - [ ] Logo (left)
  - [ ] NavigationMenu with Mega Menu (center):
    - **Home** - Link to homepage
    - **Services** - Mega menu dropdown with modern software services:
      
      **Column 1: Web Development** (6-8 items)
      - Full-Stack Web Development
      - Progressive Web Apps (PWA)
      - JAMstack Development
      - Headless CMS Solutions
      - E-Commerce Development
      - WordPress/WooCommerce
      - Custom CMS Development
      - Web3 & Blockchain Apps
      
      **Column 2: Mobile & Cross-Platform** (6-8 items)
      - iOS App Development (Swift/SwiftUI)
      - Android App Development (Kotlin)
      - React Native Development
      - Flutter Development
      - Ionic/Capacitor Apps
      - Mobile App UI/UX Design
      - App Store Optimization (ASO)
      - Mobile App Maintenance
      
      **Column 3: Cloud & DevOps** (6-8 items)
      - Cloud Architecture (AWS/Azure/GCP)
      - DevOps & CI/CD Pipelines
      - Kubernetes & Docker
      - Serverless Architecture
      - Microservices Development
      - Cloud Migration Services
      - Infrastructure as Code
      - Cloud Security & Compliance
      
      **Column 4: AI & Emerging Tech** (6-8 items)
      - AI/ML Integration
      - ChatGPT & LLM Integration
      - Computer Vision Solutions
      - Natural Language Processing
      - Generative AI Applications
      - Data Analytics & BI
      - IoT Development
      - Augmented Reality (AR/VR)
      
      **Column 5: Design & Marketing** (6-8 items)
      - UI/UX Design
      - Brand Identity Design
      - Motion Graphics & Animation
      - SEO & SEM
      - Social Media Marketing
      - Content Marketing
      - Email Marketing Automation
      - Conversion Rate Optimization
      
      **Column 6: Enterprise Solutions** (6-8 items)
      - ERP Development
      - CRM Development
      - SaaS Product Development
      - API Development & Integration
      - Legacy System Modernization
      - Custom Software Solutions
      - Consulting & Strategy
      - Technical Support & Maintenance
      
    - **Portfolio** - Link to portfolio grid
    - **Company** - Dropdown submenu:
      - Our Process
      - About Us
      - Team
      - Testimonials
      - Careers
    - **Blog** - Link to blog
    - **Contact** - Link to contact page
  - [ ] Dark mode Switch (shadcn Switch component) with icon
  - [ ] CTA Button "Get Free Quote" (right)
  
- [ ] **Mobile Header:**
  - [ ] Sheet component (slide-in sidebar)
  - [ ] Hamburger menu icon (animated)
  - [ ] Collapsible menu structure
  - [ ] Dark mode toggle in sidebar
  - [ ] CTA button at bottom
  
- [ ] **Mega Menu Features:**
  - [ ] Smooth open/close animations (GSAP)
  - [ ] Hover effects on items
  - [ ] Icons for each service category
  - [ ] Brief descriptions under each item
  - [ ] Featured service highlight box
  - [ ] Background blur/overlay
  - [ ] Keyboard navigation support

### 5.7 Footer (Keep Existing Design)
- [ ] **Migrate current footer design:**
  - [ ] "Excited? Let's Talk" CTA section
  - [ ] Company info with dynamic "X Years of code baking" (2010-2025 = 15 years)
  - [ ] Social media links (Facebook, Twitter, GitHub, LinkedIn, YouTube)
  - [ ] Netlify deploy status badge
  - [ ] "Made in India" with flag icon
  - [ ] Get in Touch section (address, email, phone)
  - [ ] "Learn More" links (About, Payment, Contact, Policies, Terms, Privacy)
  - [ ] Newsletter signup section
  - [ ] Footer bottom (copyright, sitemap link)
- [ ] Convert to modern shadcn components but keep exact layout
- [ ] Add smooth hover effects
- [ ] Maintain minimal and professional aesthetic

---

## 📋 PHASE 6: ADVANCED FEATURES

### 6.1 Search Functionality
- [ ] Implement client-side search (FlexSearch/Fuse.js)
- [ ] Create search index at build time
- [ ] Search UI component with keyboard shortcuts
- [ ] Search results page
- [ ] Search analytics tracking

### 6.2 Performance Optimization
- [ ] Image optimization:
  - [ ] Convert images to WebP/AVIF
  - [ ] Implement blur placeholder
  - [ ] Lazy loading
  - [ ] Responsive images
- [ ] Font optimization:
  - [ ] Use next/font
  - [ ] Subset fonts
  - [ ] Preload critical fonts
- [ ] Code splitting and lazy loading
- [ ] Bundle size analysis
- [ ] Implement ISR (Incremental Static Regeneration)
- [ ] Optimize GSAP animations (will-change, transform)

### 6.3 SEO Optimization
- [ ] Generate sitemap.xml dynamically
- [ ] robots.txt configuration
- [ ] Meta tags for all pages
- [ ] Open Graph images
- [ ] Twitter Card support
- [ ] JSON-LD structured data:
  - [ ] Organization schema
  - [ ] BlogPosting schema
  - [ ] CreativeWork for portfolio
  - [ ] Review schema for testimonials
- [ ] Canonical URLs
- [ ] 301 redirects from old URLs (if needed)

### 6.4 Analytics & Tracking
- [ ] Google Analytics 4 integration
- [ ] Track custom events:
  - [ ] Portfolio views
  - [ ] Contact form submissions
  - [ ] CTA button clicks
  - [ ] External link clicks
- [ ] Performance monitoring (Vercel Analytics)
- [ ] Error tracking (Sentry - optional)

### 6.5 Accessibility (A11y)
- [ ] ARIA labels and roles
- [ ] Keyboard navigation
- [ ] Focus management
- [ ] Color contrast compliance (WCAG AA)
- [ ] Screen reader testing
- [ ] Alt text for all images
- [ ] Skip to content link

---

## 📋 PHASE 7: DECAP CMS INTEGRATION

### 7.1 CMS Configuration
- [ ] Configure OAuth with GitHub
- [ ] Setup editorial workflow (draft/review/ready)
- [ ] Configure media library (Cloudinary/Netlify Large Media)
- [ ] Custom preview templates:
  - [ ] Blog post preview
  - [ ] Portfolio preview
  - [ ] Testimonial preview
- [ ] Custom widgets (if needed)
- [ ] Setup CMS roles and permissions

### 7.2 Content Editors Training
- [ ] Create CMS documentation
- [ ] Video tutorials for adding:
  - [ ] Blog posts
  - [ ] Portfolio projects
  - [ ] Testimonials
  - [ ] Editing data files
- [ ] Best practices guide

---

## 📋 PHASE 8: DEPLOYMENT & HOSTING

### 8.1 Vercel Deployment Setup
- [ ] Connect GitHub repository
- [ ] Configure build settings
- [ ] Setup environment variables
- [ ] Configure custom domain (www.srapsware.com)
- [ ] SSL certificate setup
- [ ] Configure preview deployments

### 8.2 Alternative: Netlify Setup (if preferred)
- [ ] Connect GitHub repository
- [ ] Configure build command
- [ ] Setup environment variables
- [ ] Enable Netlify Identity for DecapCMS
- [ ] Configure custom domain
- [ ] Setup redirects and headers

### 8.3 CDN & Performance
- [ ] Configure edge caching
- [ ] Setup Cloudflare (if not using Vercel Edge)
- [ ] Image CDN configuration
- [ ] Compression settings (Brotli/Gzip)

---

## 📋 PHASE 9: TESTING & QA

### 9.1 Functionality Testing
- [ ] Test all page routes
- [ ] Test DecapCMS admin panel
- [ ] Test content editing and publishing
- [ ] Test search functionality
- [ ] Test filters and pagination
- [ ] Test forms and validation
- [ ] Test external links

### 9.2 Cross-browser Testing
- [ ] Chrome/Edge
- [ ] Firefox
- [ ] Safari (Mac/iOS)
- [ ] Mobile browsers (iOS/Android)

### 9.3 Responsive Testing
- [ ] Desktop (1920px, 1440px, 1280px)
- [ ] Tablet (768px, 1024px)
- [ ] Mobile (375px, 414px, 390px)
- [ ] Large screens (2560px+)

### 9.4 Performance Testing
- [ ] Lighthouse audit (aim for 90+ scores)
- [ ] PageSpeed Insights
- [ ] WebPageTest
- [ ] Core Web Vitals check
- [ ] Animation performance (60fps)

### 9.5 SEO Audit
- [ ] Meta tags verification
- [ ] Structured data validation
- [ ] Sitemap validation
- [ ] robots.txt verification
- [ ] Broken links check

### 9.6 Accessibility Testing
- [ ] WAVE accessibility tool
- [ ] axe DevTools
- [ ] Screen reader testing (NVDA/VoiceOver)
- [ ] Keyboard navigation test

---

## 📋 PHASE 10: LAUNCH & POST-LAUNCH

### 10.1 Pre-launch Checklist
- [ ] Backup current Jekyll site
- [ ] Final content review
- [ ] Test all forms and submissions
- [ ] Verify analytics tracking
- [ ] Check error tracking setup
- [ ] Test 404 and error pages
- [ ] Verify redirects (if any)
- [ ] SSL/Security headers check

### 10.2 Launch Day
- [ ] DNS cutover (point domain to new hosting)
- [ ] Monitor for errors
- [ ] Check analytics data collection
- [ ] Test critical user flows
- [ ] Announce launch on social media

### 10.3 Post-Launch Monitoring
- [ ] Monitor Core Web Vitals (7 days)
- [ ] Track user feedback
- [ ] Monitor error logs
- [ ] Check search console for crawl issues
- [ ] Monitor performance metrics
- [ ] Collect user behavior analytics

### 10.4 Optimization Round
- [ ] Address any performance issues
- [ ] Fix reported bugs
- [ ] A/B test CTAs
- [ ] Optimize conversion funnels
- [ ] Adjust animations based on feedback

---

## 📋 PHASE 11: DOCUMENTATION

### 11.1 Technical Documentation
- [ ] Architecture overview
- [ ] Component documentation
- [ ] API documentation
- [ ] Deployment guide
- [ ] Environment setup guide
- [ ] Troubleshooting guide

### 11.2 Content Management Documentation
- [ ] CMS user guide
- [ ] Content creation templates
- [ ] Image optimization guide
- [ ] SEO best practices
- [ ] Publishing workflow

### 11.3 Maintenance Guide
- [ ] Dependency update schedule
- [ ] Backup procedures
- [ ] Security update process
- [ ] Performance monitoring guide

---

## 🛠️ TECHNOLOGY STACK

### Frontend
- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 + **shadcn/ui** (component library)
- **Icons:** **Lucide Icons** (1000+ icons, tree-shakeable, React components)
- **Animations:** GSAP Pro (ScrollTrigger, SplitText, Flip)
- **Content:** Markdown + MDX (with gray-matter, remark, rehype)
- **Forms:** React Hook Form + Zod (integrated with shadcn/ui)
- **UI Components:** shadcn/ui (Radix UI primitives)
- **State Management:** Zustand / Jotai (lightweight)
- **Image Optimization:** sharp (next/image backend)

### Content Management
- **CMS:** DecapCMS (formerly NetlifyCMS)
- **Content Format:** Markdown files with YAML frontmatter
- **Media:** Netlify Large Media / Cloudinary
- **Authentication:** GitHub OAuth

### Development Tools
- **Package Manager:** pnpm (faster than npm)
- **Linting:** ESLint + Prettier
- **Git Hooks:** Husky + lint-staged
- **Type Checking:** TypeScript strict mode

### Hosting & Deployment
- **Primary:** Vercel (recommended for Next.js)
- **Alternative:** Netlify
- **Domain:** www.srapsware.com
- **Analytics:** Vercel Analytics / Google Analytics 4

### Performance
- **Image Optimization:** next/image (automatic WebP/AVIF)
- **Font Optimization:** next/font (Geist, Inter, or Space Grotesk)
- **Caching:** ISR (Incremental Static Regeneration)
- **CDN:** Vercel Edge Network / Cloudflare
- **3D Graphics:** Three.js / React Three Fiber (for hero effects - optional)
- **Smooth Scroll:** Lenis (alternative to GSAP ScrollSmoother)

### Additional Modern Tools
- **Search:** Algolia / Pagefind (static search)
- **Comments:** Giscus (GitHub Discussions) - already mentioned in your posts
- **Newsletter:** Resend / ConvertKit API
- **Email:** React Email (for transactional emails)
- **Payments:** Stripe / Razorpay integration
- **Live Chat:** Crisp / Intercom (optional)
- **Package Manager:** pnpm (3x faster than npm)
- **Build Analyzer:** @next/bundle-analyzer
- **Code Quality:** Biome (faster alternative to ESLint+Prettier)

---

## 📊 MIGRATION STRATEGY

### Content Migration
1. **Keep existing structure** - No need to move files
2. **Use existing markdown files** - Portfolio, posts, testimonials stay in _portfolio/, _posts/, _testimonial/
3. **Parse at build time** - Next.js reads markdown files during build
4. **URL preservation** - Match Jekyll permalink structure

### URL Structure Mapping
```
Jekyll                          →  Next.js
/category/YYYY/MM/DD/title/    →  /blog/category/YYYY/MM/DD/title/
/portfolio/YYYY-MM-DD-slug/     →  /portfolio/slug/
/tag/tag-name/                  →  /blog/tag/tag-name/
/category/cat-name/             →  /blog/category/cat-name/
/author/author-name/            →  /blog/author/author-name/
```

### Data Flow
```
Markdown Files → Parser → Type-safe Objects → React Components → HTML
                                          ↓
                                    Search Index
```

---

## 🎨 DESIGN INSPIRATION

### Modern Software Company Websites
- **Vercel** - Clean, dark mode, smooth animations
- **Linear** - Beautiful gradients, minimalist
- **Stripe** - Professional, clear hierarchy
- **Railway** - Bold typography, dark theme
- **Resend** - Simple, effective, modern

### Animation Inspiration
- **Awwwards** winning sites
- **CodePen** GSAP showcases
- **GSAP Showcase** official examples
- Scroll-triggered reveals
- Magnetic buttons
- Text splitting effects
- Smooth page transitions
- Parallax scrolling

### Color Palette Ideas
```css
/* Option 1: Modern Tech */
Primary: #6366f1 (Indigo)
Secondary: #06b6d4 (Cyan)
Dark: #0f172a (Slate 900)
Light: #f8fafc (Slate 50)

/* Option 2: Bold & Professional */
Primary: #3b82f6 (Blue)
Secondary: #8b5cf6 (Purple)
Accent: #f59e0b (Amber)
Dark: #111827 (Gray 900)
```

---

## ⏱️ ESTIMATED TIMELINE

### Week 1-2: Planning & Setup
- Research and planning
- Next.js project setup
- Design system foundation
- Content parsing utilities

### Week 3-4: Core Development
- Component library
- Homepage development
- Blog system
- Portfolio system

### Week 5-6: Advanced Features
- GSAP animations
- Search functionality
- SEO optimization
- Performance tuning

### Week 7: CMS Integration
- DecapCMS setup
- Preview templates
- Testing and refinement

### Week 8: Testing & Launch
- Comprehensive testing
- Bug fixes
- Deployment
- Launch

**Total: 8-10 weeks** (can be compressed with dedicated full-time work)

---

## 📝 NOTES & CONSIDERATIONS

### Advantages of Next.js over Jekyll
- ✅ Better performance (React server components)
- ✅ Modern development experience
- ✅ Built-in image optimization
- ✅ API routes for dynamic features
- ✅ Better animation support (React + GSAP)
- ✅ TypeScript support
- ✅ Hot module replacement
- ✅ Automatic code splitting

### DecapCMS Benefits over NetlifyCMS
- ✅ Active development (NetlifyCMS is deprecated)
- ✅ Better performance
- ✅ Improved UI/UX
- ✅ Better documentation
- ✅ Community support
- ✅ Bug fixes and updates

### Risks & Mitigation
- **Risk:** Breaking existing URLs
  - **Mitigation:** Implement redirects, match permalink structure
- **Risk:** Content loss during migration
  - **Mitigation:** Keep original files, test parser thoroughly
- **Risk:** Performance regression
  - **Mitigation:** Regular Lighthouse audits, optimization rounds
- **Risk:** SEO drop
  - **Mitigation:** Maintain URL structure, proper redirects, meta tags

---

## 🚀 QUICK START COMMANDS

```bash
# Create Next.js project with shadcn/ui
npx create-next-app@latest srapsware-nextjs --typescript --tailwind --app --eslint

# Initialize shadcn/ui
cd srapsware-nextjs
npx shadcn-ui@latest init

# Install additional dependencies
pnpm add gsap @gsap/react decap-cms-app gray-matter remark rehype next-themes zustand

# Install shadcn components
npx shadcn-ui@latest add button card input navigation-menu sheet dropdown-menu tabs accordion badge dialog toast switch

# Development
pnpm dev

# Build
pnpm build

# Start production
pnpm start
```

---

## 📞 STAKEHOLDER COMMUNICATION

### Weekly Progress Reports
- What was completed
- Current blockers
- Next week's goals
- Demos/screenshots

### Key Decision Points
1. Approve final design mockups
2. Approve color palette and branding
3. Review and approve beta site
4. Approve launch date

---

## ✅ SUCCESS METRICS

### Performance Goals
- Lighthouse score: 95+ (all categories)
- First Contentful Paint: <1.5s
- Time to Interactive: <3s
- Cumulative Layout Shift: <0.1

### Business Goals
- Increase visitor engagement (time on site)
- Improve conversion rate (contact form submissions)
- Reduce bounce rate
- Increase page views per session

### Technical Goals
- 100% TypeScript coverage
- 0 console errors
- Accessible (WCAG AA compliance)
- Mobile-first responsive

---

**Last Updated:** 2024-12-29
**Status:** Planning Phase ✏️
**Next Steps:** Begin Phase 2 - Project Setup

---

## 🎯 MODERN ENHANCEMENTS & SUGGESTIONS

### 1. **Interactive Elements to Consider**
- [ ] **3D Hero Background** - Floating geometric shapes with Three.js
- [ ] **Magnetic Cursor Effect** - Buttons attract cursor on hover
- [ ] **Scroll Progress Ring** - Around "back to top" button
- [ ] **Parallax Cards** - Portfolio cards with depth on scroll
- [ ] **Text Scramble Effect** - Cyberpunk-style text reveals
- [ ] **Gradient Mesh Background** - Animated gradient backgrounds
- [ ] **Code Rain Effect** - Matrix-style background for tech sections
- [ ] **Interactive Service Cards** - Tilt effect on hover (react-tilt)
- [ ] **Animated Statistics** - Count-up with particle effects

### 2. **Modern Service Categories for Mega Menu**
I've structured 6 columns with modern services. Here's the recommended layout:

**Recommended Mega Menu Structure:**
- Make it **full-width dropdown** (like Vercel/Stripe)
- **6 columns** on desktop, **stacked on mobile**
- Each service item has **icon + title + short description**
- **Hover effect:** Background highlight + slight scale
- **Featured service card** in one column (rotating)
- **Background blur** with dark overlay
- **GSAP animation:** Stagger items on open

### 3. **Additional Features Worth Adding**
- [ ] **⌘K Command Menu** - Quick navigation (shadcn Command)
- [ ] **Floating Action Button** - Quick contact/WhatsApp
- [ ] **Cookie Consent** - GDPR compliant (shadcn Dialog)
- [ ] **Loading Screen** - Branded loading animation on first visit
- [ ] **Scroll Snap Sections** - Smooth section transitions
- [ ] **Easter Eggs** - Hidden interactions for developers (Konami code)
- [ ] **Live Visitor Counter** - Show active users (Socket.io)
- [ ] **Tech Stack Showcase** - Animated tech logos carousel
- [ ] **GitHub Activity Feed** - Show your latest commits
- [ ] **Typewriter Effect** - In hero section for taglines

### 4. **Performance Optimizations**
- [ ] **Partial Hydration** - Use React Server Components
- [ ] **Edge Functions** - For contact form, search
- [ ] **Image Blur Placeholders** - Base64 blurred images
- [ ] **Font Subsetting** - Include only used characters
- [ ] **Code Splitting** - Per-route chunk optimization
- [ ] **Service Worker** - Offline support (PWA)
- [ ] **Prefetching** - Intelligent link prefetching
- [ ] **Lazy Load Heavy Components** - GSAP, Three.js on demand

### 5. **SEO & Marketing Enhancements**
- [ ] **Case Studies Section** - Detailed project breakdowns
- [ ] **Comparison Pages** - "Why Srapsware vs Others"
- [ ] **Calculator/Tools** - Project cost estimator, ROI calculator
- [ ] **Free Resources** - Downloadable guides, checklists
- [ ] **Webinar/Events Section** - Upcoming tech talks
- [ ] **Tech Blog with Code Snippets** - Syntax highlighting
- [ ] **Video Testimonials** - Client video reviews
- [ ] **Portfolio Filtering** - By industry, technology, year
- [ ] **Related Projects** - AI-powered recommendations
- [ ] **Social Proof** - Live notifications "X just hired us"

### 6. **Modern Color Palette Suggestions**

**Option 1: Tech Noir (Dark & Modern)**
```css
/* Light mode */
--primary: 255 107 0;       /* Orange */
--secondary: 99 102 241;    /* Indigo */
--accent: 236 72 153;       /* Pink */
--background: 255 255 255;  /* White */
--foreground: 15 23 42;     /* Slate 900 */

/* Dark mode */
--primary: 255 137 51;      /* Lighter Orange */
--secondary: 129 140 248;   /* Lighter Indigo */
--accent: 244 114 182;      /* Lighter Pink */
--background: 2 6 23;       /* Almost Black */
--foreground: 248 250 252;  /* Slate 50 */
```

**Option 2: Gradient Tech (Inspired by Vercel)**
```css
/* Light mode */
--primary: 0 0 0;           /* Black */
--secondary: 107 114 128;   /* Gray */
--accent: 59 130 246;       /* Blue */
--background: 255 255 255;  /* White */
--foreground: 17 24 39;     /* Gray 900 */

/* Dark mode */
--primary: 255 255 255;     /* White */
--secondary: 156 163 175;   /* Gray 400 */
--accent: 96 165 250;       /* Blue 400 */
--background: 0 0 0;        /* Black */
--foreground: 249 250 251;  /* Gray 50 */
```

**Option 3: Vibrant Software (Linear-inspired)**
```css
/* Light mode */
--primary: 99 102 241;      /* Indigo */
--secondary: 139 92 246;    /* Purple */
--accent: 6 182 212;        /* Cyan */
--background: 250 250 250;  /* Near White */
--foreground: 9 9 11;       /* Zinc 900 */

/* Dark mode */
--primary: 129 140 248;     /* Indigo 400 */
--secondary: 167 139 250;   /* Purple 400 */
--accent: 34 211 238;       /* Cyan 400 */
--background: 9 9 11;       /* Zinc 900 */
--foreground: 250 250 250;  /* Zinc 50 */
```

### 7. **Animation Patterns to Implement**

**Hero Section:**
- Text reveal with mask (GSAP SplitText)
- Floating particles/nodes in background
- Gradient animation on CTA button
- Scroll indicator with bounce animation

**Portfolio Grid:**
- Stagger reveal on scroll (GSAP ScrollTrigger)
- Hover: Scale + shadow + tilt
- Image parallax inside cards
- Magnetic hover effect

**Service Tabs:**
- Smooth tab indicator animation
- Content fade/slide transitions
- Icon bounce on tab change

**Testimonials:**
- Infinite auto-scroll carousel
- Drag to scroll with momentum
- Fade edge gradients
- Quote mark animation

**Scroll Effects:**
- Horizontal scroll sections
- Text reveal on scroll
- Number counters when in view
- Parallax backgrounds

### 8. **Typography Recommendations**

**Modern Font Pairings:**
1. **Geist Sans + Geist Mono** (Vercel's font - modern, clean)
2. **Inter + JetBrains Mono** (Professional, readable)
3. **Space Grotesk + Fira Code** (Bold, techy)
4. **Manrope + IBM Plex Mono** (Rounded, friendly)
5. **DM Sans + Source Code Pro** (Clean, minimal)

**Usage:**
- Headlines: 700-900 weight
- Body: 400-500 weight
- Captions: 300-400 weight
- Code: Monospace font

### 9. **Mobile-First Considerations**
- [ ] Touch-friendly buttons (min 44px tap target)
- [ ] Swipe gestures for carousels
- [ ] Collapsible sections for long content
- [ ] Sticky header on scroll up
- [ ] Bottom navigation for mobile (optional)
- [ ] Mobile-optimized mega menu (accordion style)
- [ ] Reduce animations on low-power devices
- [ ] Optimize images for mobile networks

### 10. **Developer Experience (DX) Improvements**
- [ ] **Storybook** - Component documentation and testing
- [ ] **Chromatic** - Visual regression testing
- [ ] **Playwright** - E2E testing
- [ ] **Commitlint** - Conventional commits
- [ ] **Changesets** - Version management
- [ ] **GitHub Actions** - Automated workflows
- [ ] **Renovate Bot** - Dependency updates
- [ ] **Bundle Size Monitoring** - Track JS bundle size

---

## 💡 ADDITIONAL IDEAS FOR FUTURE

- [ ] Blog comments system (Giscus/Utterances)
- [ ] Newsletter integration (ConvertKit/Mailchimp)
- [ ] Client portal (password-protected project status)
- [ ] Live chat integration
- [ ] Multi-language support (i18n)
- [ ] Progressive Web App (PWA)
- [ ] Case studies with more in-depth content
- [ ] Video testimonials
- [ ] Interactive service calculator
- [ ] Blog recommendation engine (AI-powered)
