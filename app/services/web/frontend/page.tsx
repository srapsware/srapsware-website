import { Metadata } from 'next'
import { PageHero } from '@/components/sections/page-hero'
import { ProcessSteps } from '@/components/sections/process-steps'
import { TestimonialsCarousel } from '@/components/sections/testimonials-carousel'
import { PortfolioSlider } from '@/components/sections/portfolio-slider'
import { CTASection } from '@/components/sections/cta-section'
import TechShowcase from '@/components/animations/tech-showcase'
import { getFeaturedPortfolio, getTechnologies, getFeaturedTestimonials } from '@/lib/content'
import { Zap, Smartphone, Users, Palette, Search, Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Frontend Development Services | React, Next.js, Vue.js | Srapsware',
  description: 'Expert frontend development with React, Next.js, Vue.js, and modern frameworks. Build fast, responsive, and beautiful user interfaces.',
  openGraph: {
    title: 'Frontend Development Services',
    description: 'Modern frontend development for exceptional user experiences',
    type: 'website',
  }
}

export default function FrontendDevelopmentPage() {
  const portfolioProjects = getFeaturedPortfolio()
  const technologies = getTechnologies()
  const testimonials = getFeaturedTestimonials()

  const processSteps = [
    {
      number: 1,
      title: 'UI/UX Design Review',
      description: 'Analyze designs, create component library, establish design system and responsive breakpoints.',
      duration: '1 week',
      icon: 'Palette'
    },
    {
      number: 2,
      title: 'Component Development',
      description: 'Build reusable React components with TypeScript, implement state management and routing.',
      duration: '2-4 weeks',
      icon: 'Code2'
    },
    {
      number: 3,
      title: 'API Integration',
      description: 'Connect to backend services, implement data fetching, caching, and error handling.',
      duration: '1-2 weeks',
      icon: 'Plug'
    },
    {
      number: 4,
      title: 'Performance Optimization',
      description: 'Code splitting, lazy loading, bundle optimization, and achieving 95+ Lighthouse scores.',
      duration: '1 week',
      icon: 'Gauge'
    },
    {
      number: 5,
      title: 'Testing & QA',
      description: 'Unit tests with Jest, integration tests, E2E tests with Playwright, accessibility audits.',
      duration: '1 week',
      icon: 'TestTube'
    },
    {
      number: 6,
      title: 'Deployment & Monitoring',
      description: 'CI/CD setup, performance monitoring, error tracking, and analytics integration.',
      duration: '3-5 days',
      icon: 'Rocket'
    }
  ]

  return (
    <main>
      {/* Hero Section */}
      <PageHero
        badge="Frontend Development"
        title="Modern Frontend Development Services"
        description="Build fast, responsive, and beautiful user interfaces with React, Next.js, Vue.js, and cutting-edge frontend technologies."
        ctaPrimary={{
          text: 'Start Your Project',
          href: '/contact'
        }}
        ctaSecondary={{
          text: 'View Our Work',
          href: '/portfolio'
        }}
      />

      {/* Overview Section - Creative Magazine Layout */}
      <section className="relative py-32 border-t border-border overflow-hidden">
        {/* Floating Background Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4">
          {/* Dynamic Title */}
          <div className="relative mb-20">
            <div className="absolute -top-10 -right-10 w-32 h-32 border-4 border-blue-500/20 rounded-full hidden lg:block"></div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="block text-foreground">Exceptional User Interfaces,</span>
              <span className="block mt-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Lightning Fast Performance
              </span>
            </h2>
          </div>

          {/* First Section - Diagonal Split */}
          <div className="relative mb-32">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              {/* Large Image - Diagonal Cut */}
              <div className="lg:col-span-7 relative">
                <div className="relative h-[400px] lg:h-[500px] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-50" 
                       style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)' }}></div>
                  <img 
                    src="https://picsum.photos/seed/frontend-workspace/900/600" 
                    alt="Frontend Development"
                    className="w-full h-full object-cover"
                    style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)' }}
                  />
                  {/* Floating Badge */}
                  <div className="absolute top-8 right-8 bg-background/90 backdrop-blur-md border border-blue-500/30 rounded-full px-6 py-3 shadow-xl">
                    <span className="text-sm font-bold text-blue-500">React & Next.js Experts</span>
                  </div>
                </div>
              </div>
              
              {/* Text Content - Overlapping */}
              <div className="lg:col-span-5 lg:-ml-20 relative z-10">
                <div className="bg-background/95 backdrop-blur-xl border border-border rounded-3xl p-8 lg:p-10 shadow-2xl">
                  <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mb-6"></div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground">Pixel-Perfect Interfaces</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Frontend development is where design meets functionality. We transform beautiful designs into responsive, accessible, and performant web applications that users love. Our expertise in React, Next.js, and Vue.js ensures your application is built with industry best practices.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Second Section - Reverse Layout */}
          <div className="relative mb-32">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              {/* Text Content - Left Side */}
              <div className="lg:col-span-5 relative z-10 order-2 lg:order-1">
                <div className="relative">
                  <div className="absolute -top-6 -left-6 w-24 h-24 bg-purple-500/10 rounded-lg -z-10"></div>
                  <div className="bg-gradient-to-br from-background via-background to-purple-900/5 backdrop-blur-xl border border-border rounded-3xl p-8 lg:p-10 shadow-2xl">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse"></div>
                      <div className="w-3 h-3 rounded-full bg-purple-500 animate-pulse delay-100"></div>
                      <div className="w-3 h-3 rounded-full bg-pink-500 animate-pulse delay-200"></div>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-foreground">Modern Framework Mastery</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      We specialize in React 18+, Next.js 14+ with App Router, Vue.js 3 with Composition API, and TypeScript for type-safe development. Our component-driven approach ensures maintainable, scalable, and reusable code that stands the test of time.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Image Grid - Right Side */}
              <div className="lg:col-span-7 lg:-mr-20 relative order-1 lg:order-2">
                <div className="grid grid-cols-2 gap-4 h-[500px]">
                  <div className="row-span-2 rounded-2xl overflow-hidden relative group">
                    <img 
                      src="https://picsum.photos/seed/react-code/400/650" 
                      alt="React Development"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="rounded-2xl overflow-hidden relative group">
                    <img 
                      src="https://picsum.photos/seed/responsive-design/400/320" 
                      alt="Responsive Design"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/80 to-transparent"></div>
                  </div>
                  <div className="rounded-2xl overflow-hidden relative group">
                    <img 
                      src="https://picsum.photos/seed/ui-components/400/320" 
                      alt="UI Components"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tl from-pink-500/80 to-transparent"></div>
                    <div className="absolute bottom-4 right-4 bg-white text-black text-xs font-bold px-3 py-1 rounded-full">
                      Component Library
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Third Section - Full Width Stats */}
          <div className="relative">
            <div className="bg-gradient-to-br from-background via-blue-500/5 to-purple-900/10 rounded-[3rem] overflow-hidden border border-border shadow-2xl">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Left - Text with Stats */}
                <div className="p-12 lg:p-16 flex flex-col justify-center relative">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
                  
                  <h3 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight">
                    Performance That{' '}
                    <span className="text-blue-500">Converts Visitors</span>
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                    Speed matters. Every 100ms delay costs conversions. We optimize every aspect—from bundle sizes to rendering strategies—to deliver sub-second load times and buttery smooth interactions.
                  </p>
                  
                  {/* Stats Grid */}
                  <div className="grid grid-cols-3 gap-6 mb-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-500 mb-2">95+</div>
                      <div className="text-sm text-muted-foreground">Lighthouse Score</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-500 mb-2">&lt;1s</div>
                      <div className="text-sm text-muted-foreground">Load Time</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-pink-500 mb-2">60fps</div>
                      <div className="text-sm text-muted-foreground">Animations</div>
                    </div>
                  </div>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-sm font-medium">
                      Code Splitting
                    </span>
                    <span className="px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-sm font-medium">
                      Lazy Loading
                    </span>
                    <span className="px-4 py-2 bg-pink-500/10 border border-pink-500/20 rounded-full text-sm font-medium">
                      Image Optimization
                    </span>
                  </div>
                </div>
                
                {/* Right - Large Hero Image */}
                <div className="relative h-[400px] lg:h-auto min-h-[500px]">
                  <img 
                    src="https://picsum.photos/seed/performance-metrics/700/700" 
                    alt="Performance Optimization"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-background via-transparent to-transparent lg:from-background/50"></div>
                  
                  {/* Floating Card */}
                  <div className="absolute bottom-8 right-8 bg-background/95 backdrop-blur-xl border border-border rounded-2xl p-6 shadow-2xl max-w-xs hidden lg:block">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-white font-bold">
                        ✓
                      </div>
                      <div>
                        <div className="font-bold text-foreground mb-1">Web Vitals Optimized</div>
                        <div className="text-sm text-muted-foreground">LCP, FID, CLS all green</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features - Bento Grid Layout */}
      <section className="relative py-28 border-t border-border overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.05),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(147,51,234,0.05),transparent_50%)]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <div className="max-w-3xl mb-16">
            <div className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-sm font-semibold text-blue-500 mb-6">
              Frontend Excellence
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Why Choose Our
              <span className="block text-transparent bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text">
                Frontend Development
              </span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Modern frameworks, best practices, and a commitment to excellence
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid lg:grid-cols-12 gap-6">
            {/* Lightning Fast - Large Featured */}
            <div className="lg:col-span-8 relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              <div className="relative h-full bg-gradient-to-br from-blue-950/40 to-cyan-950/40 backdrop-blur-xl border border-blue-500/20 rounded-3xl p-8 lg:p-12 overflow-hidden group-hover:border-blue-500/40 transition-all duration-300">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4 text-foreground">Lightning Fast Performance</h3>
                  <p className="text-lg text-muted-foreground mb-8">
                    Achieve 95+ Lighthouse scores with optimized bundles, code splitting, lazy loading, and server-side rendering. Your users will feel the difference.
                  </p>
                  <div className="relative h-48 rounded-2xl overflow-hidden">
                    <img 
                      src="https://picsum.photos/seed/performance-graph/700/300" 
                      alt="Performance Metrics"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 flex items-center gap-4">
                      <div className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">Optimized</div>
                      <div className="bg-white/10 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full">Sub-second Load</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Responsive Design - Tall Card */}
            <div className="lg:col-span-4 lg:row-span-2 relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              <div className="relative h-full bg-gradient-to-br from-purple-950/40 to-pink-950/40 backdrop-blur-xl border border-purple-500/20 rounded-3xl p-8 overflow-hidden group-hover:border-purple-500/40 transition-all duration-300">
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl"></div>
                <div className="relative z-10 h-full flex flex-col">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
                    <Smartphone className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground">Responsive Design</h3>
                  <p className="text-base text-muted-foreground mb-6">
                    Mobile-first approach ensuring pixel-perfect experiences across all devices from 320px to 4K displays.
                  </p>
                  <div className="mt-auto">
                    <div className="relative h-72 rounded-2xl overflow-hidden">
                      <img 
                        src="https://picsum.photos/seed/responsive-devices/400/500" 
                        alt="Responsive Design"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-purple-950/90 via-purple-950/40 to-transparent"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Accessibility */}
            <div className="lg:col-span-4 relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-teal-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative h-full bg-gradient-to-br from-cyan-950/40 to-teal-950/40 backdrop-blur-xl border border-cyan-500/20 rounded-3xl p-6 overflow-hidden group-hover:border-cyan-500/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-xl flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Accessibility First</h3>
                <p className="text-sm text-muted-foreground">
                  WCAG 2.1 AA compliant with keyboard navigation, screen reader support, and semantic HTML.
                </p>
              </div>
            </div>

            {/* Modern UI/UX */}
            <div className="lg:col-span-4 relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-rose-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative h-full bg-gradient-to-br from-pink-950/40 to-rose-950/40 backdrop-blur-xl border border-pink-500/20 rounded-3xl p-6 overflow-hidden group-hover:border-pink-500/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-500 rounded-xl flex items-center justify-center mb-4">
                  <Palette className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Modern UI/UX</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Beautiful interfaces with smooth animations, micro-interactions, and delightful user experiences.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-pink-500/10 border border-pink-500/30 rounded text-xs">GSAP</span>
                  <span className="px-2 py-1 bg-pink-500/10 border border-pink-500/30 rounded text-xs">Framer Motion</span>
                  <span className="px-2 py-1 bg-pink-500/10 border border-pink-500/30 rounded text-xs">Tailwind</span>
                </div>
              </div>
            </div>

            {/* SEO & Security - Wide Card */}
            <div className="lg:col-span-8 relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 via-amber-500/20 to-yellow-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              <div className="relative h-full bg-gradient-to-r from-orange-950/40 via-amber-950/40 to-yellow-950/40 backdrop-blur-xl border border-orange-500/20 rounded-3xl overflow-hidden group-hover:border-orange-500/40 transition-all duration-300">
                <div className="grid md:grid-cols-2 gap-0 h-full">
                  {/* SEO Side */}
                  <div className="p-8 flex flex-col justify-center border-r border-orange-500/10">
                    <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center mb-6">
                      <Search className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-foreground">SEO Optimized</h3>
                    <p className="text-base text-muted-foreground">
                      Server-side rendering with Next.js, meta tags, schema markup, and sitemap generation for maximum visibility.
                    </p>
                  </div>
                  
                  {/* Security Side */}
                  <div className="relative p-8 flex flex-col justify-center">
                    <div className="absolute inset-0">
                      <img 
                        src="https://picsum.photos/seed/security/500/400" 
                        alt="Security"
                        className="w-full h-full object-cover opacity-20"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-yellow-950/80 to-yellow-950/40"></div>
                    </div>
                    <div className="relative z-10">
                      <div className="w-14 h-14 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6">
                        <Shield className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold mb-3 text-foreground">Secure by Design</h3>
                      <p className="text-base text-muted-foreground">
                        XSS protection, CSRF tokens, content security policy, and secure authentication patterns.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <TechShowcase 
        technologies={technologies}
        title="Frontend Technology Stack"
        subtitle="Modern frameworks and tools we use to build exceptional user interfaces"
        filterSlugs={[
          // Frameworks & Libraries
          'react', 'nextjs', 'vuejs', 'svelte', 'angular',
          // Languages & Styling
          'typescript', 'javascript', 'tailwind-css', 'sass',
          // State & Data
          'redux', 'zustand', 'react-query',
          // Build & Tools
          'vite', 'webpack', 'turbo',
          // Testing
          'jest', 'playwright', 'cypress'
        ]}
        showStats={true}
      />

      {/* Process */}
      <ProcessSteps
        title="Our Frontend Development Process"
        description="A systematic approach that delivers beautiful, performant interfaces"
        steps={processSteps}
      />

      {/* Use Cases - Card Deck Layout */}
      <section className="relative py-32 border-t border-border overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent"></div>
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <div className="max-w-3xl mb-20">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
              <span className="px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-sm font-semibold text-blue-500">
                What We Build
              </span>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent via-blue-500 to-transparent"></div>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Frontend Solutions For{' '}
              <span className="relative inline-block">
                <span className="relative z-10 text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text">
                  Every Need
                </span>
                <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 200 12" fill="none">
                  <path d="M0 6C50 0 150 12 200 6" stroke="url(#gradient)" strokeWidth="2"/>
                  <defs>
                    <linearGradient id="gradient" x1="0" y1="0" x2="200" y2="0">
                      <stop offset="0%" stopColor="rgb(59, 130, 246)" />
                      <stop offset="50%" stopColor="rgb(147, 51, 234)" />
                      <stop offset="100%" stopColor="rgb(236, 72, 153)" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              From simple landing pages to complex web applications
            </p>
          </div>

          {/* Card Deck */}
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Single Page Applications */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              <div className="relative h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 backdrop-blur-sm border border-blue-500/10 rounded-3xl transform translate-x-2 translate-y-2"></div>
                
                <div className="relative bg-background/95 backdrop-blur-xl border border-blue-500/20 rounded-3xl p-8 lg:p-10 overflow-hidden group-hover:border-blue-500/40 transition-all duration-300">
                  <div className="absolute top-4 right-4 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl"></div>
                  
                  <div className="relative z-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    
                    <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-foreground">Single Page Applications</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                      Fast, dynamic SPAs with React or Vue.js. Smooth page transitions, client-side routing, and instant interactions.
                    </p>
                    
                    <div className="relative h-40 rounded-xl overflow-hidden mb-6">
                      <img 
                        src="https://picsum.photos/seed/spa-app/600/300" 
                        alt="Single Page Application"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-500/80 to-transparent"></div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1.5 bg-blue-500/10 border border-blue-500/30 rounded-full text-xs font-medium text-blue-400">
                        React Router
                      </span>
                      <span className="px-3 py-1.5 bg-blue-500/10 border border-blue-500/30 rounded-full text-xs font-medium text-blue-400">
                        State Management
                      </span>
                      <span className="px-3 py-1.5 bg-blue-500/10 border border-blue-500/30 rounded-full text-xs font-medium text-blue-400">
                        API Integration
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Landing Pages & Marketing Sites */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              <div className="relative h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 backdrop-blur-sm border border-purple-500/10 rounded-3xl transform translate-x-2 translate-y-2"></div>
                
                <div className="relative bg-background/95 backdrop-blur-xl border border-purple-500/20 rounded-3xl p-8 lg:p-10 overflow-hidden group-hover:border-purple-500/40 transition-all duration-300">
                  <div className="absolute bottom-4 left-4 w-40 h-40 bg-purple-500/5 rounded-full blur-2xl"></div>
                  
                  <div className="relative z-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                      </svg>
                    </div>
                    
                    <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-foreground">Landing Pages & Marketing</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                      Conversion-optimized landing pages with Next.js. SEO-friendly, blazing fast, and designed to convert.
                    </p>
                    
                    <div className="grid grid-cols-2 gap-2 mb-6">
                      <div className="relative h-20 rounded-lg overflow-hidden">
                        <img 
                          src="https://picsum.photos/seed/landing-1/300/200" 
                          alt="Landing Page"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="relative h-20 rounded-lg overflow-hidden">
                        <img 
                          src="https://picsum.photos/seed/landing-2/300/200" 
                          alt="Marketing Site"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1.5 bg-purple-500/10 border border-purple-500/30 rounded-full text-xs font-medium text-purple-400">
                        Next.js
                      </span>
                      <span className="px-3 py-1.5 bg-purple-500/10 border border-purple-500/30 rounded-full text-xs font-medium text-purple-400">
                        SEO Optimized
                      </span>
                      <span className="px-3 py-1.5 bg-purple-500/10 border border-purple-500/30 rounded-full text-xs font-medium text-purple-400">
                        Animations
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Admin Dashboards */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-teal-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              <div className="relative h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-teal-500/5 backdrop-blur-sm border border-cyan-500/10 rounded-3xl transform translate-x-2 translate-y-2"></div>
                
                <div className="relative bg-background/95 backdrop-blur-xl border border-cyan-500/20 rounded-3xl p-8 lg:p-10 overflow-hidden group-hover:border-cyan-500/40 transition-all duration-300">
                  <div className="absolute top-4 left-4 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl"></div>
                  
                  <div className="relative z-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    
                    <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-foreground">Admin Dashboards</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                      Data-rich dashboards with charts, tables, and real-time updates. Built for complex workflows and data visualization.
                    </p>
                    
                    <div className="relative h-32 bg-gradient-to-br from-cyan-500/10 to-teal-500/10 rounded-xl p-4 mb-6 border border-cyan-500/20">
                      <div className="flex items-end justify-between h-full gap-2">
                        <div className="w-full bg-cyan-500/30 rounded-t" style={{height: '60%'}}></div>
                        <div className="w-full bg-cyan-500/50 rounded-t" style={{height: '85%'}}></div>
                        <div className="w-full bg-cyan-500/40 rounded-t" style={{height: '70%'}}></div>
                        <div className="w-full bg-cyan-500/60 rounded-t" style={{height: '95%'}}></div>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1.5 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-xs font-medium text-cyan-400">
                        Charts & Graphs
                      </span>
                      <span className="px-3 py-1.5 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-xs font-medium text-cyan-400">
                        Data Tables
                      </span>
                      <span className="px-3 py-1.5 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-xs font-medium text-cyan-400">
                        Real-time
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Design Systems */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-amber-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              <div className="relative h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-amber-500/5 backdrop-blur-sm border border-orange-500/10 rounded-3xl transform translate-x-2 translate-y-2"></div>
                
                <div className="relative bg-background/95 backdrop-blur-xl border border-orange-500/20 rounded-3xl p-8 lg:p-10 overflow-hidden group-hover:border-orange-500/40 transition-all duration-300">
                  <div className="absolute bottom-4 right-4 w-40 h-40 bg-orange-500/5 rounded-full blur-2xl"></div>
                  
                  <div className="relative z-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                      </svg>
                    </div>
                    
                    <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-foreground">Component Libraries</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                      Reusable component libraries and design systems. Consistent UI across all your products with Storybook documentation.
                    </p>
                    
                    <div className="grid grid-cols-3 gap-3 mb-6">
                      <div className="aspect-square bg-gradient-to-br from-orange-500/10 to-amber-500/10 rounded-xl border border-orange-500/20 flex items-center justify-center">
                        <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                        </svg>
                      </div>
                      <div className="aspect-square bg-gradient-to-br from-orange-500/10 to-amber-500/10 rounded-xl border border-orange-500/20 flex items-center justify-center">
                        <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                        </svg>
                      </div>
                      <div className="aspect-square bg-gradient-to-br from-orange-500/10 to-amber-500/10 rounded-xl border border-orange-500/20 flex items-center justify-center">
                        <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                        </svg>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1.5 bg-orange-500/10 border border-orange-500/30 rounded-full text-xs font-medium text-orange-400">
                        Storybook
                      </span>
                      <span className="px-3 py-1.5 bg-orange-500/10 border border-orange-500/30 rounded-full text-xs font-medium text-orange-400">
                        Design Tokens
                      </span>
                      <span className="px-3 py-1.5 bg-orange-500/10 border border-orange-500/30 rounded-full text-xs font-medium text-orange-400">
                        Reusable
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      {portfolioProjects.length > 0 && (
        <section className="py-20 border-t border-border bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Frontend Projects We've Built
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                See our latest React, Next.js, and Vue.js projects in action
              </p>
            </div>
            
            <div className="px-8">
              <PortfolioSlider 
                projects={portfolioProjects.slice(0, 6)}
                technologies={technologies}
                autoplay={true}
                showNavigation={true}
              />
            </div>
          </div>
        </section>
      )}

      {/* Testimonials */}
      {testimonials.length > 0 && (
        <section className="relative py-28 border-t border-border overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                What Our Clients Say
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Trusted by businesses for exceptional frontend development
              </p>
            </div>
            
            <TestimonialsCarousel testimonials={testimonials} />
          </div>
        </section>
      )}

      {/* Final CTA */}
      <CTASection 
        title="Ready to Build Beautiful Interfaces?"
        description="Let's create a frontend experience that delights your users and drives results. Get a free consultation and project estimate."
        primaryButtonText="Start Your Project"
        primaryButtonLink="/contact"
        secondaryButtonText="Schedule Free Consultation"
        secondaryButtonLink="/contact"
        showContactInfo={true}
      />
    </main>
  )
}
