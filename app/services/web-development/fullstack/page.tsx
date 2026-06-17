import { Metadata } from 'next'
import { PageHero } from '@/components/sections/page-hero'
import { ServiceFeatures } from '@/components/sections/service-features'
import { ProcessSteps } from '@/components/sections/process-steps'
import { TestimonialsCarousel } from '@/components/sections/testimonials-carousel'
import { PortfolioSlider } from '@/components/sections/portfolio-slider'
import { CTASection } from '@/components/sections/cta-section'
import TechShowcase from '@/components/animations/tech-showcase'
import { getFeaturedPortfolio, getTechnologies, getFeaturedTestimonials } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Full Stack Web Development Services | Srapsware',
  description: 'End-to-end full stack web development with React, Next.js, Node.js, and modern frameworks. Build scalable, high-performance web applications.',
  openGraph: {
    title: 'Full Stack Web Development Services',
    description: 'Expert full stack development for modern web applications',
    type: 'website',
  }
}

export default function FullStackDevelopmentPage() {
  // Get portfolio and testimonial data
  const portfolioProjects = getFeaturedPortfolio()
  const technologies = getTechnologies()
  const testimonials = getFeaturedTestimonials()

  const features = [
    {
      icon: 'Zap',
      title: 'Lightning Fast Performance',
      description: 'Optimized bundles with code splitting, lazy loading, and CDN delivery. Achieve Lighthouse scores of 95+ consistently.',
      color: 'blue' as const
    },
    {
      icon: 'Smartphone',
      title: 'Responsive Design',
      description: 'Mobile-first approach ensuring pixel-perfect experiences across all devices from 320px to 4K displays.',
      color: 'purple' as const
    },
    {
      icon: 'Users',
      title: 'Accessibility First',
      description: 'WCAG 2.1 AA compliant with keyboard navigation, screen reader support, and proper semantic HTML.',
      color: 'cyan' as const
    },
    {
      icon: 'Code2',
      title: 'Modern Tech Stack',
      description: 'Built with React, Next.js, TypeScript, Node.js, and cutting-edge frameworks for maintainable code.',
      color: 'green' as const
    },
    {
      icon: 'Search',
      title: 'SEO Optimized',
      description: 'Server-side rendering, meta tags, schema markup, and sitemap generation for maximum search visibility.',
      color: 'orange' as const
    },
    {
      icon: 'TestTube',
      title: 'Tested & Reliable',
      description: 'Comprehensive testing with Jest, React Testing Library, and Playwright for 99.9% uptime.',
      color: 'pink' as const
    }
  ]

  const processSteps = [
    {
      number: 1,
      title: 'Discovery & Planning',
      description: 'We analyze your requirements, define project scope, create wireframes, and plan the technical architecture.',
      duration: '1-2 weeks',
      icon: 'Lightbulb'
    },
    {
      number: 2,
      title: 'Design & Prototyping',
      description: 'Create high-fidelity designs, interactive prototypes, and establish design system with your brand guidelines.',
      duration: '2-3 weeks',
      icon: 'FileCode'
    },
    {
      number: 3,
      title: 'Development',
      description: 'Agile sprints with frontend and backend development, API integration, database design, and regular demos.',
      duration: '4-8 weeks',
      icon: 'GitBranch'
    },
    {
      number: 4,
      title: 'Testing & QA',
      description: 'Rigorous testing including unit tests, integration tests, E2E tests, performance audits, and security checks.',
      duration: '1-2 weeks',
      icon: 'TestTube'
    },
    {
      number: 5,
      title: 'Deployment',
      description: 'Deploy to production with CI/CD pipelines, monitoring setup, analytics integration, and final performance optimization.',
      duration: '1 week',
      icon: 'Rocket'
    },
    {
      number: 6,
      title: 'Support & Maintenance',
      description: 'Ongoing support with bug fixes, feature updates, performance monitoring, and security patches.',
      duration: 'Ongoing',
      icon: 'CheckCircle'
    }
  ]

  return (
    <main>
      {/* Hero Section */}
      <PageHero
        badge="Full Stack Development"
        title="Build Powerful Full Stack Web Applications"
        description="End-to-end web development with React, Next.js, Node.js, and modern frameworks. From concept to deployment, we handle everything."
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
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4">
          {/* Dynamic Title with Floating Element */}
          <div className="relative mb-20">
            <div className="absolute -top-10 -right-10 w-32 h-32 border-4 border-brand/20 rounded-full hidden lg:block"></div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="block text-foreground">Complete Web Solutions,</span>
              <span className="block mt-2 bg-gradient-to-r from-brand via-purple-500 to-pink-500 bg-clip-text text-transparent">
                One Expert Team
              </span>
            </h2>
          </div>

          {/* First Section - Diagonal Split with Overlapping Image */}
          <div className="relative mb-32">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              {/* Large Image - Diagonal Cut */}
              <div className="lg:col-span-7 relative">
                <div className="relative h-[400px] lg:h-[500px] overflow-hidden">
                  {/* Diagonal shape using clip-path */}
                  <div className="absolute inset-0 bg-gradient-to-br from-brand/20 to-purple-500/20 opacity-50" 
                       style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)' }}></div>
                  <img 
                    src="https://picsum.photos/seed/fullstack-workspace/900/600" 
                    alt="Full Stack Development"
                    className="w-full h-full object-cover"
                    style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)' }}
                  />
                  {/* Floating Badge */}
                  <div className="absolute top-8 right-8 bg-background/90 backdrop-blur-md border border-brand/30 rounded-full px-6 py-3 shadow-xl">
                    <span className="text-sm font-bold text-brand">Unified Development</span>
                  </div>
                </div>
              </div>
              
              {/* Text Content - Overlapping */}
              <div className="lg:col-span-5 lg:-ml-20 relative z-10">
                <div className="bg-background/95 backdrop-blur-xl border border-border rounded-3xl p-8 lg:p-10 shadow-2xl">
                  <div className="w-12 h-1 bg-gradient-to-r from-brand to-purple-500 mb-6"></div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground">Seamless Integration</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Full stack development means having a single team handle every aspect of your web application-from the user interface that customers interact with to the server logic and databases that power it all. This integrated approach ensures faster development, better communication, and a cohesive product.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Second Section - Reverse Layout with Floating Elements */}
          <div className="relative mb-32">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              {/* Text Content - Left Side */}
              <div className="lg:col-span-5 relative z-10 order-2 lg:order-1">
                <div className="relative">
                  {/* Decorative Element */}
                  <div className="absolute -top-6 -left-6 w-24 h-24 bg-purple-500/10 rounded-lg -z-10"></div>
                  <div className="bg-gradient-to-br from-background via-background to-purple-900/5 backdrop-blur-xl border border-border rounded-3xl p-8 lg:p-10 shadow-2xl">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-3 h-3 rounded-full bg-brand animate-pulse"></div>
                      <div className="w-3 h-3 rounded-full bg-purple-500 animate-pulse delay-100"></div>
                      <div className="w-3 h-3 rounded-full bg-pink-500 animate-pulse delay-200"></div>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-foreground">Modern Technology Stack</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      We specialize in modern JavaScript frameworks like React and Next.js for the frontend, paired with Node.js, Python, or PHP for robust backend services. Our developers are fluent in both worlds, eliminating the friction and delays that come from coordinating separate teams.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Image Grid - Right Side */}
              <div className="lg:col-span-7 lg:-mr-20 relative order-1 lg:order-2">
                <div className="grid grid-cols-2 gap-4 h-[500px]">
                  {/* Tall Image */}
                  <div className="row-span-2 rounded-2xl overflow-hidden relative group">
                    <img 
                      src="https://picsum.photos/seed/code-editor/400/650" 
                      alt="Modern Development"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  {/* Top Right */}
                  <div className="rounded-2xl overflow-hidden relative group">
                    <img 
                      src="https://picsum.photos/seed/tech-stack/400/320" 
                      alt="Technology"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-brand/80 to-transparent"></div>
                  </div>
                  {/* Bottom Right with Badge */}
                  <div className="rounded-2xl overflow-hidden relative group">
                    <img 
                      src="https://picsum.photos/seed/framework/400/320" 
                      alt="Frameworks"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tl from-pink-500/80 to-transparent"></div>
                    <div className="absolute bottom-4 right-4 bg-white text-black text-xs font-bold px-3 py-1 rounded-full">
                      React • Node • Python
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Third Section - Full Width Magazine Style */}
          <div className="relative">
            <div className="bg-gradient-to-br from-background via-brand/5 to-purple-900/10 rounded-[3rem] overflow-hidden border border-border shadow-2xl">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Left - Text with Stats */}
                <div className="p-12 lg:p-16 flex flex-col justify-center relative">
                  {/* Decorative Line */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand via-purple-500 to-pink-500"></div>
                  
                  <h3 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight">
                    Scalable Solutions for{' '}
                    <span className="text-brand">Every Business</span>
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                    Whether you're building a SaaS platform, e-commerce store, or enterprise application, our full stack expertise delivers scalable solutions that grow with your business.
                  </p>
                  
                  {/* Stats Grid */}
                  <div className="grid grid-cols-3 gap-6 mb-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-brand mb-2">500+</div>
                      <div className="text-sm text-muted-foreground">Projects</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-500 mb-2">99%</div>
                      <div className="text-sm text-muted-foreground">Uptime</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-pink-500 mb-2">24/7</div>
                      <div className="text-sm text-muted-foreground">Support</div>
                    </div>
                  </div>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-brand/10 border border-brand/20 rounded-full text-sm font-medium">
                      SaaS Platforms
                    </span>
                    <span className="px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-sm font-medium">
                      E-Commerce
                    </span>
                    <span className="px-4 py-2 bg-pink-500/10 border border-pink-500/20 rounded-full text-sm font-medium">
                      Enterprise Apps
                    </span>
                  </div>
                </div>
                
                {/* Right - Large Hero Image with Overlay */}
                <div className="relative h-[400px] lg:h-auto min-h-[500px]">
                  <img 
                    src="https://picsum.photos/seed/scalable-business/700/700" 
                    alt="Scalable Applications"
                    className="w-full h-full object-cover"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-background via-transparent to-transparent lg:from-background/50"></div>
                  
                  {/* Floating Card */}
                  <div className="absolute bottom-8 right-8 bg-background/95 backdrop-blur-xl border border-border rounded-2xl p-6 shadow-2xl max-w-xs hidden lg:block">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand to-purple-500 flex items-center justify-center text-white font-bold">
                        ✓
                      </div>
                      <div>
                        <div className="font-bold text-foreground mb-1">Production Ready</div>
                        <div className="text-sm text-muted-foreground">Built for scale & performance</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features - Creative Bento Grid Layout */}
      <section className="relative py-28 border-t border-border overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(var(--brand-rgb),0.05),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(147,51,234,0.05),transparent_50%)]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <div className="max-w-3xl mb-16">
            <div className="inline-block px-4 py-2 bg-brand/10 border border-brand/20 rounded-full text-sm font-semibold text-brand mb-6">
              Why Choose Us
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Full Stack Development
              <span className="block text-transparent bg-gradient-to-r from-brand to-purple-500 bg-clip-text">
                That Delivers Results
              </span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We combine cutting-edge technology with best practices to deliver exceptional results
            </p>
          </div>

          {/* Bento Grid Layout */}
          <div className="grid lg:grid-cols-12 gap-6">
            {/* Large Featured Card - Lightning Fast */}
            <div className="lg:col-span-8 relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              <div className="relative h-full bg-gradient-to-br from-blue-950/40 to-cyan-950/40 backdrop-blur-xl border border-blue-500/20 rounded-3xl p-8 lg:p-12 overflow-hidden group-hover:border-blue-500/40 transition-all duration-300">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold mb-4 text-foreground">Lightning Fast Performance</h3>
                  <p className="text-lg text-muted-foreground mb-8">
                    Optimized bundles with code splitting, lazy loading, and CDN delivery. Achieve Lighthouse scores of 95+ consistently.
                  </p>
                  <div className="relative h-48 rounded-2xl overflow-hidden">
                    <img 
                      src="https://picsum.photos/seed/performance/700/300" 
                      alt="Performance"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 flex items-center gap-4">
                      <div className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">95+ Score</div>
                      <div className="bg-white/10 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full">Optimized</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tall Card - Responsive Design */}
            <div className="lg:col-span-4 lg:row-span-2 relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              <div className="relative h-full bg-gradient-to-br from-purple-950/40 to-pink-950/40 backdrop-blur-xl border border-purple-500/20 rounded-3xl p-8 overflow-hidden group-hover:border-purple-500/40 transition-all duration-300">
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl"></div>
                <div className="relative z-10 h-full flex flex-col">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground">Responsive Design</h3>
                  <p className="text-base text-muted-foreground mb-6">
                    Mobile-first approach ensuring pixel-perfect experiences across all devices from 320px to 4K displays.
                  </p>
                  <div className="mt-auto">
                    <div className="relative h-72 rounded-2xl overflow-hidden">
                      <img 
                        src="https://picsum.photos/seed/responsive/400/500" 
                        alt="Responsive"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-purple-950/90 via-purple-950/40 to-transparent"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Medium Card - Accessibility */}
            <div className="lg:col-span-4 relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-teal-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative h-full bg-gradient-to-br from-cyan-950/40 to-teal-950/40 backdrop-blur-xl border border-cyan-500/20 rounded-3xl p-6 overflow-hidden group-hover:border-cyan-500/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Accessibility First</h3>
                <p className="text-sm text-muted-foreground">
                  WCAG 2.1 AA compliant with keyboard navigation, screen reader support, and proper semantic HTML.
                </p>
              </div>
            </div>

            {/* Medium Card - Modern Tech Stack */}
            <div className="lg:col-span-4 relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative h-full bg-gradient-to-br from-green-950/40 to-emerald-950/40 backdrop-blur-xl border border-green-500/20 rounded-3xl p-6 overflow-hidden group-hover:border-green-500/40 transition-all duration-300">
                <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full blur-2xl"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">Modern Tech Stack</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Built with React, Next.js, TypeScript, Node.js, and cutting-edge frameworks for maintainable code.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-green-500/10 border border-green-500/30 rounded text-xs">React</span>
                    <span className="px-2 py-1 bg-green-500/10 border border-green-500/30 rounded text-xs">Next.js</span>
                    <span className="px-2 py-1 bg-green-500/10 border border-green-500/30 rounded text-xs">Node.js</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Wide Card - SEO & Testing */}
            <div className="lg:col-span-8 relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 via-pink-500/20 to-rose-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              <div className="relative h-full bg-gradient-to-r from-orange-950/40 via-pink-950/40 to-rose-950/40 backdrop-blur-xl border border-orange-500/20 rounded-3xl overflow-hidden group-hover:border-orange-500/40 transition-all duration-300">
                <div className="grid md:grid-cols-2 gap-0 h-full">
                  {/* SEO Side */}
                  <div className="p-8 flex flex-col justify-center border-r border-orange-500/10">
                    <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center mb-6">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-foreground">SEO Optimized</h3>
                    <p className="text-base text-muted-foreground">
                      Server-side rendering, meta tags, schema markup, and sitemap generation for maximum search visibility.
                    </p>
                  </div>
                  
                  {/* Testing Side with Image */}
                  <div className="relative p-8 flex flex-col justify-center">
                    <div className="absolute inset-0">
                      <img 
                        src="https://picsum.photos/seed/testing/500/400" 
                        alt="Testing"
                        className="w-full h-full object-cover opacity-20"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-rose-950/80 to-rose-950/40"></div>
                    </div>
                    <div className="relative z-10">
                      <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center mb-6">
                        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold mb-3 text-foreground">Tested & Reliable</h3>
                      <p className="text-base text-muted-foreground">
                        Comprehensive testing with Jest, React Testing Library, and Playwright for 99.9% uptime.
                      </p>
                      <div className="mt-4 flex items-center gap-2">
                        <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-sm font-medium text-green-400">99.9% Uptime</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies - Using TechShowcase with filtered technologies */}
      <TechShowcase 
        technologies={technologies}
        title="Full Stack Technology Arsenal"
        subtitle="Modern frameworks and tools we use to build scalable, high-performance applications"
        filterSlugs={[
          // Frontend
          'react', 'nextjs', 'typescript', 'javascript', 'tailwind-css', 'redux',
          // Backend
          'nodejs', 'expressjs', 'python', 'django', 'php', 'laravel',
          // Database
          'postgresql', 'mongodb', 'mysql', 'redis', 'firebase',
          // API
          'graphql',
          // DevOps
          'docker', 'aws', 'vercel', 'git'
        ]}
        showStats={true}
      />

      {/* Process */}
      <ProcessSteps
        title="Our Development Process"
        description="A proven methodology that delivers results on time and within budget"
        steps={processSteps}
      />

      {/* Use Cases - Creative Card Deck Layout */}
      <section className="relative py-32 border-t border-border overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand/5 to-transparent"></div>
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <div className="max-w-3xl mb-20">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-brand to-transparent"></div>
              <span className="px-4 py-2 bg-brand/10 border border-brand/20 rounded-full text-sm font-semibold text-brand">
                Industries We Serve
              </span>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent via-brand to-transparent"></div>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Perfect For{' '}
              <span className="relative inline-block">
                <span className="relative z-10 text-transparent bg-gradient-to-r from-brand via-purple-500 to-pink-500 bg-clip-text">
                  Your Industry
                </span>
                <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 200 12" fill="none">
                  <path d="M0 6C50 0 150 12 200 6" stroke="url(#gradient)" strokeWidth="2"/>
                  <defs>
                    <linearGradient id="gradient" x1="0" y1="0" x2="200" y2="0">
                      <stop offset="0%" stopColor="rgb(var(--brand-rgb))" />
                      <stop offset="50%" stopColor="rgb(147, 51, 234)" />
                      <stop offset="100%" stopColor="rgb(236, 72, 153)" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Industries and applications we excel at building
            </p>
          </div>

          {/* Card Deck Layout */}
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* SaaS Platforms - With Stacked Image Effect */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-brand/20 to-purple-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              <div className="relative h-full">
                {/* Background Card (stacked effect) */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand/5 to-purple-500/5 backdrop-blur-sm border border-brand/10 rounded-3xl transform translate-x-2 translate-y-2"></div>
                
                {/* Main Card */}
                <div className="relative bg-background/95 backdrop-blur-xl border border-brand/20 rounded-3xl p-8 lg:p-10 overflow-hidden group-hover:border-brand/40 transition-all duration-300">
                  {/* Floating Elements */}
                  <div className="absolute top-4 right-4 w-32 h-32 bg-brand/5 rounded-full blur-2xl"></div>
                  
                  <div className="relative z-10">
                    {/* Icon Badge */}
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-brand to-purple-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                      </svg>
                    </div>
                    
                    <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-foreground">SaaS Platforms</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                      Multi-tenant applications with subscription billing, user management, and real-time features.
                    </p>
                    
                    {/* Image Preview */}
                    <div className="relative h-40 rounded-xl overflow-hidden mb-6">
                      <img 
                        src="https://picsum.photos/seed/saas-platform/600/300" 
                        alt="SaaS Platform"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand/80 to-transparent"></div>
                    </div>
                    
                    {/* Examples */}
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1.5 bg-brand/10 border border-brand/30 rounded-full text-xs font-medium text-brand">
                        CRM
                      </span>
                      <span className="px-3 py-1.5 bg-brand/10 border border-brand/30 rounded-full text-xs font-medium text-brand">
                        Project Management
                      </span>
                      <span className="px-3 py-1.5 bg-brand/10 border border-brand/30 rounded-full text-xs font-medium text-brand">
                        Analytics Dashboards
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* E-Commerce Stores - With Image Collage */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              <div className="relative h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 backdrop-blur-sm border border-purple-500/10 rounded-3xl transform translate-x-2 translate-y-2"></div>
                
                <div className="relative bg-background/95 backdrop-blur-xl border border-purple-500/20 rounded-3xl p-8 lg:p-10 overflow-hidden group-hover:border-purple-500/40 transition-all duration-300">
                  <div className="absolute bottom-4 left-4 w-40 h-40 bg-purple-500/5 rounded-full blur-2xl"></div>
                  
                  <div className="relative z-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                      </svg>
                    </div>
                    
                    <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-foreground">E-Commerce Stores</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                      Fast product browsing, secure checkout, payment integration, and inventory management.
                    </p>
                    
                    {/* Image Collage */}
                    <div className="grid grid-cols-2 gap-2 mb-6">
                      <div className="relative h-20 rounded-lg overflow-hidden">
                        <img 
                          src="https://picsum.photos/seed/ecommerce-1/300/200" 
                          alt="E-commerce"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="relative h-20 rounded-lg overflow-hidden">
                        <img 
                          src="https://picsum.photos/seed/ecommerce-2/300/200" 
                          alt="E-commerce"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1.5 bg-purple-500/10 border border-purple-500/30 rounded-full text-xs font-medium text-purple-400">
                        Online Stores
                      </span>
                      <span className="px-3 py-1.5 bg-purple-500/10 border border-purple-500/30 rounded-full text-xs font-medium text-purple-400">
                        Marketplaces
                      </span>
                      <span className="px-3 py-1.5 bg-purple-500/10 border border-purple-500/30 rounded-full text-xs font-medium text-purple-400">
                        B2B Portals
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enterprise Applications - With Data Visualization */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              <div className="relative h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 backdrop-blur-sm border border-cyan-500/10 rounded-3xl transform translate-x-2 translate-y-2"></div>
                
                <div className="relative bg-background/95 backdrop-blur-xl border border-cyan-500/20 rounded-3xl p-8 lg:p-10 overflow-hidden group-hover:border-cyan-500/40 transition-all duration-300">
                  <div className="absolute top-4 left-4 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl"></div>
                  
                  <div className="relative z-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    
                    <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-foreground">Enterprise Applications</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                      Large-scale business software with complex workflows, integrations, and security requirements.
                    </p>
                    
                    {/* Visualization */}
                    <div className="relative h-32 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-xl p-4 mb-6 border border-cyan-500/20">
                      <div className="flex items-end justify-between h-full gap-2">
                        <div className="w-full bg-cyan-500/30 rounded-t" style={{height: '60%'}}></div>
                        <div className="w-full bg-cyan-500/50 rounded-t" style={{height: '85%'}}></div>
                        <div className="w-full bg-cyan-500/40 rounded-t" style={{height: '70%'}}></div>
                        <div className="w-full bg-cyan-500/60 rounded-t" style={{height: '95%'}}></div>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1.5 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-xs font-medium text-cyan-400">
                        ERP
                      </span>
                      <span className="px-3 py-1.5 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-xs font-medium text-cyan-400">
                        Supply Chain
                      </span>
                      <span className="px-3 py-1.5 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-xs font-medium text-cyan-400">
                        Employee Portals
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Custom Web Apps - With Tool Icons */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-rose-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              <div className="relative h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-rose-500/5 backdrop-blur-sm border border-pink-500/10 rounded-3xl transform translate-x-2 translate-y-2"></div>
                
                <div className="relative bg-background/95 backdrop-blur-xl border border-pink-500/20 rounded-3xl p-8 lg:p-10 overflow-hidden group-hover:border-pink-500/40 transition-all duration-300">
                  <div className="absolute bottom-4 right-4 w-40 h-40 bg-pink-500/5 rounded-full blur-2xl"></div>
                  
                  <div className="relative z-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                      </svg>
                    </div>
                    
                    <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-foreground">Custom Web Apps</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                      Tailored solutions for unique business needs with custom features and integrations.
                    </p>
                    
                    {/* Icon Grid */}
                    <div className="grid grid-cols-3 gap-3 mb-6">
                      <div className="aspect-square bg-gradient-to-br from-pink-500/10 to-rose-500/10 rounded-xl border border-pink-500/20 flex items-center justify-center">
                        <svg className="w-6 h-6 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div className="aspect-square bg-gradient-to-br from-pink-500/10 to-rose-500/10 rounded-xl border border-pink-500/20 flex items-center justify-center">
                        <svg className="w-6 h-6 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div className="aspect-square bg-gradient-to-br from-pink-500/10 to-rose-500/10 rounded-xl border border-pink-500/20 flex items-center justify-center">
                        <svg className="w-6 h-6 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1.5 bg-pink-500/10 border border-pink-500/30 rounded-full text-xs font-medium text-pink-400">
                        Booking Systems
                      </span>
                      <span className="px-3 py-1.5 bg-pink-500/10 border border-pink-500/30 rounded-full text-xs font-medium text-pink-400">
                        Calculators
                      </span>
                      <span className="px-3 py-1.5 bg-pink-500/10 border border-pink-500/30 rounded-full text-xs font-medium text-pink-400">
                        Internal Tools
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio - Using Same Component as Homepage */}
      {portfolioProjects.length > 0 && (
        <section className="py-20 border-t border-border bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Full Stack Projects We've Built
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                See our latest React, Next.js, and Node.js projects in action with real results
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

      {/* Testimonials - Same Component as Homepage */}
      {testimonials.length > 0 && (
        <section className="relative py-28 border-t border-border overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                What Our Clients Say
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                See why businesses trust us with their full stack development projects
              </p>
            </div>
            
            <TestimonialsCarousel testimonials={testimonials} />
          </div>
        </section>
      )}

      {/* Final CTA Section - Same as Home Page */}
      <CTASection 
        title="Ready to Build Something Amazing?"
        description="Let's discuss your full stack web development project and create a custom solution that drives results. Get a free consultation and detailed project estimate."
        primaryButtonText="Start Your Project"
        primaryButtonLink="/contact"
        secondaryButtonText="Schedule Free Consultation"
        secondaryButtonLink="/contact"
        showContactInfo={true}
      />
    </main>
  )
}
