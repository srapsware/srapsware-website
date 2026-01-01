import { Metadata } from 'next'
import { PageHero } from '@/components/sections/page-hero'
import { ProcessSteps } from '@/components/sections/process-steps'
import { TestimonialsCarousel } from '@/components/sections/testimonials-carousel'
import { PortfolioSlider } from '@/components/sections/portfolio-slider'
import { CTASection } from '@/components/sections/cta-section'
import TechShowcase from '@/components/animations/tech-showcase'
import { getFeaturedPortfolio, getTechnologies, getFeaturedTestimonials } from '@/lib/content'
import { Wifi, Bell, Download, Zap, Smartphone, Globe } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Progressive Web App Development | PWA Services | Srapsware',
  description: 'Build fast, reliable Progressive Web Apps that work offline, send push notifications, and feel like native apps. Expert PWA development services.',
  openGraph: {
    title: 'Progressive Web App Development Services',
    description: 'Transform your web app into a powerful PWA with offline support',
    type: 'website',
  }
}

export default function PWADevelopmentPage() {
  const portfolioProjects = getFeaturedPortfolio()
  const technologies = getTechnologies()
  const testimonials = getFeaturedTestimonials()

  const processSteps = [
    {
      number: 1,
      title: 'PWA Audit & Strategy',
      description: 'Analyze current web app, define offline strategies, and create PWA roadmap with feature priorities.',
      duration: '1 week',
      icon: 'ClipboardCheck'
    },
    {
      number: 2,
      title: 'Service Worker Setup',
      description: 'Implement service workers for offline caching, background sync, and asset management strategies.',
      duration: '1-2 weeks',
      icon: 'Cog'
    },
    {
      number: 3,
      title: 'Manifest & Icons',
      description: 'Create web app manifest, generate icon sets, configure splash screens and theme colors.',
      duration: '3-5 days',
      icon: 'Image'
    },
    {
      number: 4,
      title: 'Offline Features',
      description: 'Build offline-first functionality, implement IndexedDB storage, and handle sync when online.',
      duration: '2-3 weeks',
      icon: 'Database'
    },
    {
      number: 5,
      title: 'Push Notifications',
      description: 'Set up push notification system with Firebase Cloud Messaging or custom solution.',
      duration: '1-2 weeks',
      icon: 'Bell'
    },
    {
      number: 6,
      title: 'Testing & Optimization',
      description: 'Lighthouse audits, cross-browser testing, performance optimization, and app store submission.',
      duration: '1 week',
      icon: 'CheckCircle'
    }
  ]

  return (
    <main>
      {/* Hero Section */}
      <PageHero
        badge="Progressive Web Apps"
        title="Progressive Web App Development"
        description="Build fast, reliable, and engaging web apps that work offline, send push notifications, and provide an app-like experience on any device."
        ctaPrimary={{
          text: 'Start Your PWA Project',
          href: '/contact'
        }}
        ctaSecondary={{
          text: 'View PWA Examples',
          href: '/portfolio'
        }}
      />

      {/* Overview Section - Creative Magazine Layout */}
      <section className="relative py-32 border-t border-border overflow-hidden">
        {/* Floating Background Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-violet-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4">
          {/* Dynamic Title */}
          <div className="relative mb-20">
            <div className="absolute -top-10 -right-10 w-32 h-32 border-4 border-violet-500/20 rounded-full hidden lg:block"></div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="block text-foreground">The Best of Both Worlds,</span>
              <span className="block mt-2 bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500 bg-clip-text text-transparent">
                Web Meets Native
              </span>
            </h2>
          </div>

          {/* First Section - Diagonal Split */}
          <div className="relative mb-32">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              {/* Large Image - Diagonal Cut */}
              <div className="lg:col-span-7 relative">
                <div className="relative h-[400px] lg:h-[500px] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 to-purple-500/20 opacity-50" 
                       style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)' }}></div>
                  <img 
                    src="https://picsum.photos/seed/pwa-mobile/900/600" 
                    alt="Progressive Web App"
                    className="w-full h-full object-cover"
                    style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)' }}
                  />
                  {/* Floating Badge */}
                  <div className="absolute top-8 right-8 bg-background/90 backdrop-blur-md border border-violet-500/30 rounded-full px-6 py-3 shadow-xl">
                    <span className="text-sm font-bold text-violet-500">Offline-First Experts</span>
                  </div>
                </div>
              </div>
              
              {/* Text Content - Overlapping */}
              <div className="lg:col-span-5 lg:-ml-20 relative z-10">
                <div className="bg-background/95 backdrop-blur-xl border border-border rounded-3xl p-8 lg:p-10 shadow-2xl">
                  <div className="w-12 h-1 bg-gradient-to-r from-violet-500 to-purple-500 mb-6"></div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground">Web Apps That Work Everywhere</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Progressive Web Apps combine the reach of the web with the capabilities of native apps. Work offline, send notifications, install on home screens, and provide instant loading - all without app store approval.
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
                      <div className="w-3 h-3 rounded-full bg-violet-500 animate-pulse"></div>
                      <div className="w-3 h-3 rounded-full bg-purple-500 animate-pulse delay-100"></div>
                      <div className="w-3 h-3 rounded-full bg-fuchsia-500 animate-pulse delay-200"></div>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-foreground">Zero Installation Friction</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Users can install your PWA directly from the browser - no app store, no downloads, no lengthy installation process. Just a simple "Add to Home Screen" and you're done.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Image Grid - Right Side */}
              <div className="lg:col-span-7 lg:-mr-20 relative order-1 lg:order-2">
                <div className="grid grid-cols-2 gap-4 h-[500px]">
                  <div className="row-span-2 rounded-2xl overflow-hidden relative group">
                    <img 
                      src="https://picsum.photos/seed/pwa-offline/400/650" 
                      alt="Offline Support"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-violet-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="rounded-2xl overflow-hidden relative group">
                    <img 
                      src="https://picsum.photos/seed/pwa-notifications/400/320" 
                      alt="Push Notifications"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/80 to-transparent"></div>
                  </div>
                  <div className="rounded-2xl overflow-hidden relative group">
                    <img 
                      src="https://picsum.photos/seed/pwa-install/400/320" 
                      alt="Install Prompt"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tl from-fuchsia-500/80 to-transparent"></div>
                    <div className="absolute bottom-4 right-4 bg-white text-black text-xs font-bold px-3 py-1 rounded-full">
                      One-Tap Install
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Third Section - Full Width Stats */}
          <div className="relative">
            <div className="bg-gradient-to-br from-background via-violet-500/5 to-purple-900/10 rounded-[3rem] overflow-hidden border border-border shadow-2xl">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Left - Text with Stats */}
                <div className="p-12 lg:p-16 flex flex-col justify-center relative">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500"></div>
                  
                  <h3 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight">
                    Lightning Fast,{' '}
                    <span className="text-violet-500">Always Available</span>
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                    PWAs load instantly, work offline, and use less data than traditional apps. Service workers cache assets intelligently, ensuring your app is always ready - even without internet.
                  </p>
                  
                  {/* Stats Grid */}
                  <div className="grid grid-cols-3 gap-6 mb-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-violet-500 mb-2">70%</div>
                      <div className="text-sm text-muted-foreground">Less Data Usage</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-500 mb-2">3x</div>
                      <div className="text-sm text-muted-foreground">Faster Load</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-fuchsia-500 mb-2">100%</div>
                      <div className="text-sm text-muted-foreground">Offline Access</div>
                    </div>
                  </div>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-violet-500/10 border border-violet-500/20 rounded-full text-sm font-medium">
                      Service Workers
                    </span>
                    <span className="px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-sm font-medium">
                      Cache API
                    </span>
                    <span className="px-4 py-2 bg-fuchsia-500/10 border border-fuchsia-500/20 rounded-full text-sm font-medium">
                      IndexedDB
                    </span>
                  </div>
                </div>
                
                {/* Right - Large Hero Image */}
                <div className="relative h-[400px] lg:h-auto min-h-[500px]">
                  <img 
                    src="https://picsum.photos/seed/pwa-performance/700/700" 
                    alt="PWA Performance"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-background via-transparent to-transparent lg:from-background/50"></div>
                  
                  {/* Floating Card */}
                  <div className="absolute bottom-8 right-8 bg-background/95 backdrop-blur-xl border border-border rounded-2xl p-6 shadow-2xl max-w-xs hidden lg:block">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center text-white font-bold">
                        <Wifi className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="font-bold text-foreground mb-1">Works Offline</div>
                        <div className="text-sm text-muted-foreground">Full functionality without internet</div>
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(139,92,246,0.05),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(168,85,247,0.05),transparent_50%)]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <div className="max-w-3xl mb-16">
            <div className="inline-block px-4 py-2 bg-violet-500/10 border border-violet-500/20 rounded-full text-sm font-semibold text-violet-500 mb-6">
              PWA Capabilities
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Native Features in
              <span className="block text-transparent bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text">
                Your Browser
              </span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Everything users expect from a native app, delivered through the web
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid lg:grid-cols-12 gap-6">
            {/* Offline Support - Large Featured */}
            <div className="lg:col-span-8 relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 to-purple-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              <div className="relative h-full bg-gradient-to-br from-violet-950/40 to-purple-950/40 backdrop-blur-xl border border-violet-500/20 rounded-3xl p-8 lg:p-12 overflow-hidden group-hover:border-violet-500/40 transition-all duration-300">
                <div className="absolute top-0 right-0 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Wifi className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4 text-foreground">Full Offline Support</h3>
                  <p className="text-lg text-muted-foreground mb-8">
                    Service workers cache all essential assets, allowing your app to load instantly even without internet. Background sync ensures data is saved and synced when connection returns.
                  </p>
                  <div className="relative h-48 rounded-2xl overflow-hidden">
                    <img 
                      src="https://picsum.photos/seed/offline-first/700/300" 
                      alt="Offline First"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-violet-950/80 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 flex items-center gap-4">
                      <div className="bg-violet-500 text-white text-xs font-bold px-3 py-1 rounded-full">Cache First</div>
                      <div className="bg-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full">Background Sync</div>
                      <div className="bg-white/10 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full">IndexedDB</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Push Notifications - Tall Card */}
            <div className="lg:col-span-4 lg:row-span-2 relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-rose-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              <div className="relative h-full bg-gradient-to-br from-pink-950/40 to-rose-950/40 backdrop-blur-xl border border-pink-500/20 rounded-3xl p-8 overflow-hidden group-hover:border-pink-500/40 transition-all duration-300">
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-pink-500/10 rounded-full blur-3xl"></div>
                <div className="relative z-10 h-full flex flex-col">
                  <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center mb-6">
                    <Bell className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground">Push Notifications</h3>
                  <p className="text-base text-muted-foreground mb-6">
                    Re-engage users with timely push notifications. Works even when the browser is closed.
                  </p>
                  <div className="mt-auto space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-pink-500/5 rounded-lg border border-pink-500/10">
                      <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                      <span className="text-sm">Rich Notifications</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-pink-500/5 rounded-lg border border-pink-500/10">
                      <div className="w-2 h-2 bg-rose-500 rounded-full"></div>
                      <span className="text-sm">Action Buttons</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-pink-500/5 rounded-lg border border-pink-500/10">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span className="text-sm">Silent Updates</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* App Install */}
            <div className="lg:col-span-4 relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative h-full bg-gradient-to-br from-blue-950/40 to-cyan-950/40 backdrop-blur-xl border border-blue-500/20 rounded-3xl p-6 overflow-hidden group-hover:border-blue-500/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4">
                  <Download className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Installable</h3>
                <p className="text-sm text-muted-foreground">
                  Add to home screen with a native app icon. Launch from the home screen without browser UI, just like a native app.
                </p>
              </div>
            </div>

            {/* Fast Performance */}
            <div className="lg:col-span-4 relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-amber-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative h-full bg-gradient-to-br from-orange-950/40 to-amber-950/40 backdrop-blur-xl border border-orange-500/20 rounded-3xl p-6 overflow-hidden group-hover:border-orange-500/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Lightning Fast</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Instant loading with pre-cached assets. Service workers ensure your app loads faster than native apps on slow connections.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-orange-500/10 border border-orange-500/30 rounded text-xs">Instant Load</span>
                  <span className="px-2 py-1 bg-orange-500/10 border border-orange-500/30 rounded text-xs">Pre-cache</span>
                  <span className="px-2 py-1 bg-orange-500/10 border border-orange-500/30 rounded text-xs">90+ Lighthouse</span>
                </div>
              </div>
            </div>

            {/* Native Features & Cross-Platform - Wide Card */}
            <div className="lg:col-span-8 relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-cyan-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              <div className="relative h-full bg-gradient-to-r from-emerald-950/40 via-teal-950/40 to-cyan-950/40 backdrop-blur-xl border border-emerald-500/20 rounded-3xl overflow-hidden group-hover:border-emerald-500/40 transition-all duration-300">
                <div className="grid md:grid-cols-2 gap-0 h-full">
                  {/* Native Features Side */}
                  <div className="p-8 flex flex-col justify-center border-r border-emerald-500/10">
                    <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6">
                      <Smartphone className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-foreground">Native Features</h3>
                    <p className="text-base text-muted-foreground">
                      Access camera, geolocation, sensors, and more. PWAs can use most native device capabilities through web APIs.
                    </p>
                  </div>
                  
                  {/* Cross-Platform Side */}
                  <div className="relative p-8 flex flex-col justify-center">
                    <div className="absolute inset-0">
                      <img 
                        src="https://picsum.photos/seed/cross-platform/500/400" 
                        alt="Cross Platform"
                        className="w-full h-full object-cover opacity-20"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-950/80 to-cyan-950/40"></div>
                    </div>
                    <div className="relative z-10">
                      <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6">
                        <Globe className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold mb-3 text-foreground">True Cross-Platform</h3>
                      <p className="text-base text-muted-foreground">
                        One codebase runs on iOS, Android, desktop, and any device with a modern browser. No separate builds needed.
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
        title="PWA Technology Stack"
        subtitle="Modern tools and APIs for building powerful Progressive Web Apps"
        filterSlugs={[
          // Frontend Frameworks
          'react', 'nextjs', 'vuejs', 'svelte',
          // PWA Tools
          'typescript', 'javascript',
          // Build & PWA Tools
          'vite', 'webpack',
          // Backend for Push
          'nodejs', 'firebase',
          // Storage & Offline
          'redux', 'zustand',
          // Testing
          'jest', 'playwright'
        ]}
        showStats={true}
      />

      {/* Process */}
      <ProcessSteps
        title="Our PWA Development Process"
        description="From audit to app store submission"
        steps={processSteps}
      />

      {/* Use Cases - Card Deck Layout */}
      <section className="relative py-32 border-t border-border overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-500/5 to-transparent"></div>
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-fuchsia-500/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <div className="max-w-3xl mb-20">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-violet-500 to-transparent"></div>
              <span className="px-4 py-2 bg-violet-500/10 border border-violet-500/20 rounded-full text-sm font-semibold text-violet-500">
                PWA Use Cases
              </span>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent via-violet-500 to-transparent"></div>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              PWAs Perfect For{' '}
              <span className="relative inline-block">
                <span className="relative z-10 text-transparent bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500 bg-clip-text">
                  Every Industry
                </span>
                <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 200 12" fill="none">
                  <path d="M0 6C50 0 150 12 200 6" stroke="url(#gradient-pwa)" strokeWidth="2"/>
                  <defs>
                    <linearGradient id="gradient-pwa" x1="0" y1="0" x2="200" y2="0">
                      <stop offset="0%" stopColor="rgb(139, 92, 246)" />
                      <stop offset="50%" stopColor="rgb(168, 85, 247)" />
                      <stop offset="100%" stopColor="rgb(217, 70, 239)" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              From e-commerce to enterprise tools
            </p>
          </div>

          {/* Card Deck */}
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Offline-First Apps */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 to-purple-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              <div className="relative h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-purple-500/5 backdrop-blur-sm border border-violet-500/10 rounded-3xl transform translate-x-2 translate-y-2"></div>
                
                <div className="relative bg-background/95 backdrop-blur-xl border border-violet-500/20 rounded-3xl p-8 lg:p-10 overflow-hidden group-hover:border-violet-500/40 transition-all duration-300">
                  <div className="absolute top-4 right-4 w-32 h-32 bg-violet-500/5 rounded-full blur-2xl"></div>
                  
                  <div className="relative z-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-violet-500 to-purple-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Wifi className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-foreground">Offline-First Apps</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                      Apps that work perfectly without internet. Ideal for field workers, travelers, or areas with poor connectivity.
                    </p>
                    
                    <div className="relative h-40 rounded-xl overflow-hidden mb-6">
                      <img 
                        src="https://picsum.photos/seed/offline-app/600/300" 
                        alt="Offline First App"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-violet-500/80 to-transparent"></div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1.5 bg-violet-500/10 border border-violet-500/30 rounded-full text-xs font-medium text-violet-400">
                        Field Service
                      </span>
                      <span className="px-3 py-1.5 bg-violet-500/10 border border-violet-500/30 rounded-full text-xs font-medium text-violet-400">
                        Inventory
                      </span>
                      <span className="px-3 py-1.5 bg-violet-500/10 border border-violet-500/30 rounded-full text-xs font-medium text-violet-400">
                        Note Taking
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* E-commerce PWAs */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-rose-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              <div className="relative h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-rose-500/5 backdrop-blur-sm border border-pink-500/10 rounded-3xl transform translate-x-2 translate-y-2"></div>
                
                <div className="relative bg-background/95 backdrop-blur-xl border border-pink-500/20 rounded-3xl p-8 lg:p-10 overflow-hidden group-hover:border-pink-500/40 transition-all duration-300">
                  <div className="absolute bottom-4 left-4 w-40 h-40 bg-pink-500/5 rounded-full blur-2xl"></div>
                  
                  <div className="relative z-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    
                    <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-foreground">E-commerce PWAs</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                      Shopping experiences that rival native apps. Push notifications for abandoned carts, sales, and new arrivals.
                    </p>
                    
                    <div className="grid grid-cols-2 gap-2 mb-6">
                      <div className="relative h-20 rounded-lg overflow-hidden bg-pink-500/10 border border-pink-500/20 flex items-center justify-center">
                        <span className="text-xs font-bold text-pink-400">Fast Checkout</span>
                      </div>
                      <div className="relative h-20 rounded-lg overflow-hidden bg-pink-500/10 border border-pink-500/20 flex items-center justify-center">
                        <span className="text-xs font-bold text-pink-400">Push Deals</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1.5 bg-pink-500/10 border border-pink-500/30 rounded-full text-xs font-medium text-pink-400">
                        Wishlist Sync
                      </span>
                      <span className="px-3 py-1.5 bg-pink-500/10 border border-pink-500/30 rounded-full text-xs font-medium text-pink-400">
                        Offline Browse
                      </span>
                      <span className="px-3 py-1.5 bg-pink-500/10 border border-pink-500/30 rounded-full text-xs font-medium text-pink-400">
                        Cart Recovery
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* News & Media */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              <div className="relative h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 backdrop-blur-sm border border-blue-500/10 rounded-3xl transform translate-x-2 translate-y-2"></div>
                
                <div className="relative bg-background/95 backdrop-blur-xl border border-blue-500/20 rounded-3xl p-8 lg:p-10 overflow-hidden group-hover:border-blue-500/40 transition-all duration-300">
                  <div className="absolute top-4 left-4 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl"></div>
                  
                  <div className="relative z-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                      </svg>
                    </div>
                    
                    <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-foreground">News & Media Apps</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                      Pre-cache articles for offline reading. Push breaking news instantly. Save data with smart image compression.
                    </p>
                    
                    <div className="relative h-32 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-xl p-4 mb-6 border border-blue-500/20">
                      <div className="space-y-2">
                        <div className="h-4 bg-blue-500/20 rounded w-3/4"></div>
                        <div className="h-4 bg-blue-500/20 rounded w-full"></div>
                        <div className="h-4 bg-blue-500/20 rounded w-5/6"></div>
                        <div className="h-4 bg-blue-500/20 rounded w-2/3"></div>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1.5 bg-blue-500/10 border border-blue-500/30 rounded-full text-xs font-medium text-blue-400">
                        Offline Reading
                      </span>
                      <span className="px-3 py-1.5 bg-blue-500/10 border border-blue-500/30 rounded-full text-xs font-medium text-blue-400">
                        Breaking News
                      </span>
                      <span className="px-3 py-1.5 bg-blue-500/10 border border-blue-500/30 rounded-full text-xs font-medium text-blue-400">
                        Save Articles
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Tools */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              <div className="relative h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 backdrop-blur-sm border border-emerald-500/10 rounded-3xl transform translate-x-2 translate-y-2"></div>
                
                <div className="relative bg-background/95 backdrop-blur-xl border border-emerald-500/20 rounded-3xl p-8 lg:p-10 overflow-hidden group-hover:border-emerald-500/40 transition-all duration-300">
                  <div className="absolute bottom-4 right-4 w-40 h-40 bg-emerald-500/5 rounded-full blur-2xl"></div>
                  
                  <div className="relative z-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    
                    <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-foreground">Business & Productivity</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                      CRM, project management, and collaboration tools that work offline. Sync data when back online.
                    </p>
                    
                    <div className="grid grid-cols-3 gap-3 mb-6">
                      <div className="aspect-square bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-xl border border-emerald-500/20 flex items-center justify-center">
                        <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <div className="aspect-square bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-xl border border-emerald-500/20 flex items-center justify-center">
                        <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                        </svg>
                      </div>
                      <div className="aspect-square bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-xl border border-emerald-500/20 flex items-center justify-center">
                        <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-xs font-medium text-emerald-400">
                        CRM Systems
                      </span>
                      <span className="px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-xs font-medium text-emerald-400">
                        Task Management
                      </span>
                      <span className="px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-xs font-medium text-emerald-400">
                        Team Collaboration
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
                Progressive Web Apps We've Built
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                See our PWA projects that deliver native app experiences
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
                Trusted by businesses for innovative PWA solutions
              </p>
            </div>
            
            <TestimonialsCarousel testimonials={testimonials} />
          </div>
        </section>
      )}

      {/* Final CTA */}
      <CTASection 
        title="Ready to Build Your Progressive Web App?"
        description="Transform your web app into a powerful PWA that works offline, sends push notifications, and feels native. Get started with a free consultation."
        primaryButtonText="Start Your PWA Project"
        primaryButtonLink="/contact"
        secondaryButtonText="Schedule Free PWA Audit"
        secondaryButtonLink="/contact"
        showContactInfo={true}
      />
    </main>
  )
}
