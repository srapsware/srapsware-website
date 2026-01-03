import { Metadata } from 'next'
import { PageHero } from '@/components/sections/page-hero'
import { ProcessSteps } from '@/components/sections/process-steps'
import { TestimonialsCarousel } from '@/components/sections/testimonials-carousel'
import { PortfolioSlider } from '@/components/sections/portfolio-slider'
import { CTASection } from '@/components/sections/cta-section'
import TechShowcase from '@/components/animations/tech-showcase'
import { getFeaturedPortfolio, getTechnologies, getFeaturedTestimonials } from '@/lib/content'
import { Smartphone, Zap, Users, Code, Globe, Layers } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Cross-Platform Mobile App Development | React Native & Flutter | Srapsware',
  description: 'Build native mobile apps for iOS and Android from a single codebase. Expert React Native and Flutter development services for cross-platform mobile solutions.',
  openGraph: {
    title: 'Cross-Platform Mobile App Development',
    description: 'Native mobile apps for iOS & Android from one codebase',
    type: 'website',
  }
}

export default function MobileCrossPlatformPage() {
  const portfolioProjects = getFeaturedPortfolio()
  const technologies = getTechnologies()
  const testimonials = getFeaturedTestimonials()

  const processSteps = [
    {
      number: 1,
      title: 'Discovery & Planning',
      description: 'Define app features, target platforms, user personas, and technical requirements. Create wireframes and user flows.',
      duration: '1-2 weeks',
      icon: 'ClipboardList'
    },
    {
      number: 2,
      title: 'UI/UX Design',
      description: 'Design platform-specific interfaces following iOS Human Interface Guidelines and Material Design principles.',
      duration: '2-3 weeks',
      icon: 'Palette'
    },
    {
      number: 3,
      title: 'Development',
      description: 'Build with React Native or Flutter, implement navigation, state management, and API integrations.',
      duration: '6-12 weeks',
      icon: 'Code'
    },
    {
      number: 4,
      title: 'Native Modules',
      description: 'Integrate native features: camera, GPS, push notifications, biometrics, and device sensors.',
      duration: '1-2 weeks',
      icon: 'Smartphone'
    },
    {
      number: 5,
      title: 'Testing & QA',
      description: 'Test on real devices, multiple OS versions, automated testing, and performance optimization.',
      duration: '2-3 weeks',
      icon: 'CheckCircle'
    },
    {
      number: 6,
      title: 'App Store Deployment',
      description: 'Submit to Apple App Store and Google Play Store with store optimization and launch support.',
      duration: '1-2 weeks',
      icon: 'Rocket'
    }
  ]

  return (
    <main>
      {/* Hero Section */}
      <PageHero
        badge="Cross-Platform Mobile Development"
        title="Build Once, Deploy Everywhere"
        description="Create stunning native mobile apps for iOS and Android with React Native and Flutter. Save time and cost with a single codebase while delivering true native performance."
        ctaPrimary={{
          text: 'Start Your Mobile Project',
          href: '/contact'
        }}
        ctaSecondary={{
          text: 'View Mobile Apps',
          href: '/portfolio'
        }}
      />

      {/* Overview Section - Creative Magazine Layout */}
      <section className="relative py-32 border-t border-border overflow-hidden">
        {/* Floating Background Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4">
          {/* Dynamic Title */}
          <div className="relative mb-20">
            <div className="absolute -top-10 -right-10 w-32 h-32 border-4 border-cyan-500/20 rounded-full hidden lg:block"></div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="block text-foreground">One Codebase,</span>
              <span className="block mt-2 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
                Two Native Platforms
              </span>
            </h2>
          </div>

          {/* First Section - Diagonal Split */}
          <div className="relative mb-32">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              {/* Large Image - Diagonal Cut */}
              <div className="lg:col-span-7 relative">
                <div className="relative h-[400px] lg:h-[500px] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 opacity-50" 
                       style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)' }}></div>
                  <img 
                    src="https://picsum.photos/seed/mobile-apps/900/600" 
                    alt="Mobile App Development"
                    className="w-full h-full object-cover"
                    style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)' }}
                  />
                  {/* Floating Badge */}
                  <div className="absolute top-8 right-8 bg-background/90 backdrop-blur-md border border-cyan-500/30 rounded-full px-6 py-3 shadow-xl">
                    <span className="text-sm font-bold text-cyan-500">React Native & Flutter Experts</span>
                  </div>
                </div>
              </div>
              
              {/* Text Content - Overlapping */}
              <div className="lg:col-span-5 lg:-ml-20 relative z-10">
                <div className="bg-background/95 backdrop-blur-xl border border-border rounded-3xl p-8 lg:p-10 shadow-2xl">
                  <div className="w-12 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mb-6"></div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground">Native Performance, Shared Code</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Cross-platform mobile development delivers true native apps for both iOS and Android from a single codebase. Reduce development time by 50%, cut costs dramatically, and maintain consistent features across platforms.
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
                  <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-500/10 rounded-lg -z-10"></div>
                  <div className="bg-gradient-to-br from-background via-background to-blue-900/5 backdrop-blur-xl border border-border rounded-3xl p-8 lg:p-10 shadow-2xl">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-3 h-3 rounded-full bg-cyan-500 animate-pulse"></div>
                      <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse delay-100"></div>
                      <div className="w-3 h-3 rounded-full bg-indigo-500 animate-pulse delay-200"></div>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-foreground">Choose Your Framework</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      React Native leverages your JavaScript/React expertise with a massive ecosystem. Flutter offers blazing-fast performance with beautiful, customizable widgets. We help you choose the right tool for your project.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Image Grid - Right Side */}
              <div className="lg:col-span-7 lg:-mr-20 relative order-1 lg:order-2">
                <div className="grid grid-cols-2 gap-4 h-[500px]">
                  <div className="row-span-2 rounded-2xl overflow-hidden relative group">
                    <img 
                      src="https://picsum.photos/seed/react-native/400/650" 
                      alt="React Native"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="rounded-2xl overflow-hidden relative group">
                    <img 
                      src="https://picsum.photos/seed/flutter-ui/400/320" 
                      alt="Flutter UI"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/80 to-transparent"></div>
                  </div>
                  <div className="rounded-2xl overflow-hidden relative group">
                    <img 
                      src="https://picsum.photos/seed/mobile-design/400/320" 
                      alt="Mobile Design"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tl from-indigo-500/80 to-transparent"></div>
                    <div className="absolute bottom-4 right-4 bg-white text-black text-xs font-bold px-3 py-1 rounded-full">
                      Pixel Perfect
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Third Section - Full Width Stats */}
          <div className="relative">
            <div className="bg-gradient-to-br from-background via-cyan-500/5 to-blue-900/10 rounded-[3rem] overflow-hidden border border-border shadow-2xl">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Left - Text with Stats */}
                <div className="p-12 lg:p-16 flex flex-col justify-center relative">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500"></div>
                  
                  <h3 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight">
                    Reach{' '}
                    <span className="text-cyan-500">Billions of Users</span>
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                    Deploy to both iOS and Android simultaneously. With over 3 billion smartphone users worldwide, cross-platform development ensures maximum reach without double the effort.
                  </p>
                  
                  {/* Stats Grid */}
                  <div className="grid grid-cols-3 gap-6 mb-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-cyan-500 mb-2">50%</div>
                      <div className="text-sm text-muted-foreground">Faster Development</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-500 mb-2">60fps</div>
                      <div className="text-sm text-muted-foreground">Native Performance</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-indigo-500 mb-2">1</div>
                      <div className="text-sm text-muted-foreground">Codebase</div>
                    </div>
                  </div>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-sm font-medium">
                      iOS & Android
                    </span>
                    <span className="px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-sm font-medium">
                      Native APIs
                    </span>
                    <span className="px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-sm font-medium">
                      Hot Reload
                    </span>
                  </div>
                </div>
                
                {/* Right - Large Hero Image */}
                <div className="relative h-[400px] lg:h-auto min-h-[500px]">
                  <img 
                    src="https://picsum.photos/seed/mobile-platforms/700/700" 
                    alt="Mobile Platforms"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-background via-transparent to-transparent lg:from-background/50"></div>
                  
                  {/* Floating Card */}
                  <div className="absolute bottom-8 right-8 bg-background/95 backdrop-blur-xl border border-border rounded-2xl p-6 shadow-2xl max-w-xs hidden lg:block">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white font-bold">
                        <Smartphone className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="font-bold text-foreground mb-1">True Native</div>
                        <div className="text-sm text-muted-foreground">Not a web wrapper - real native code</div>
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(6,182,212,0.05),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(59,130,246,0.05),transparent_50%)]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <div className="max-w-3xl mb-16">
            <div className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-sm font-semibold text-cyan-500 mb-6">
              Cross-Platform Excellence
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Why Choose
              <span className="block text-transparent bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text">
                Cross-Platform Development
              </span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Best of both worlds: native performance with shared codebase
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid lg:grid-cols-12 gap-6">
            {/* Native Performance - Large Featured */}
            <div className="lg:col-span-8 relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              <div className="relative h-full bg-gradient-to-br from-cyan-950/40 to-blue-950/40 backdrop-blur-xl border border-cyan-500/20 rounded-3xl p-8 lg:p-12 overflow-hidden group-hover:border-cyan-500/40 transition-all duration-300">
                <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4 text-foreground">True Native Performance</h3>
                  <p className="text-lg text-muted-foreground mb-8">
                    Not a web wrapper - our apps compile to native code for both iOS and Android. Smooth 60fps animations, instant responsiveness, and full access to device capabilities.
                  </p>
                  <div className="relative h-48 rounded-2xl overflow-hidden">
                    <img 
                      src="https://picsum.photos/seed/native-performance/700/300" 
                      alt="Native Performance"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-cyan-950/80 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 flex items-center gap-4">
                      <div className="bg-cyan-500 text-white text-xs font-bold px-3 py-1 rounded-full">60fps</div>
                      <div className="bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">Native Code</div>
                      <div className="bg-white/10 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full">Fast Startup</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Cost Efficient - Tall Card */}
            <div className="lg:col-span-4 lg:row-span-2 relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              <div className="relative h-full bg-gradient-to-br from-green-950/40 to-emerald-950/40 backdrop-blur-xl border border-green-500/20 rounded-3xl p-8 overflow-hidden group-hover:border-green-500/40 transition-all duration-300">
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-green-500/10 rounded-full blur-3xl"></div>
                <div className="relative z-10 h-full flex flex-col">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground">Cost Efficient</h3>
                  <p className="text-base text-muted-foreground mb-6">
                    Build once, deploy twice. Save 50% on development costs compared to separate native teams.
                  </p>
                  <div className="mt-auto space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-green-500/5 rounded-lg border border-green-500/10">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm">Single Development Team</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-green-500/5 rounded-lg border border-green-500/10">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                      <span className="text-sm">Shared Codebase</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-green-500/5 rounded-lg border border-green-500/10">
                      <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                      <span className="text-sm">Faster Time to Market</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Hot Reload */}
            <div className="lg:col-span-4 relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative h-full bg-gradient-to-br from-orange-950/40 to-red-950/40 backdrop-blur-xl border border-orange-500/20 rounded-3xl p-6 overflow-hidden group-hover:border-orange-500/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Hot Reload</h3>
                <p className="text-sm text-muted-foreground">
                  See changes instantly without rebuilding. React Native and Flutter's hot reload speeds up development dramatically.
                </p>
              </div>
            </div>

            {/* Shared Business Logic */}
            <div className="lg:col-span-4 relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative h-full bg-gradient-to-br from-purple-950/40 to-pink-950/40 backdrop-blur-xl border border-purple-500/20 rounded-3xl p-6 overflow-hidden group-hover:border-purple-500/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Shared Logic</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Write business logic once, use everywhere. State management, API calls, and utilities work on both platforms.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-purple-500/10 border border-purple-500/30 rounded text-xs">Redux</span>
                  <span className="px-2 py-1 bg-purple-500/10 border border-purple-500/30 rounded text-xs">MobX</span>
                  <span className="px-2 py-1 bg-purple-500/10 border border-purple-500/30 rounded text-xs">BLoC</span>
                </div>
              </div>
            </div>

            {/* Native Modules & Platform Specific - Wide Card */}
            <div className="lg:col-span-8 relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 via-blue-500/20 to-cyan-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              <div className="relative h-full bg-gradient-to-r from-indigo-950/40 via-blue-950/40 to-cyan-950/40 backdrop-blur-xl border border-indigo-500/20 rounded-3xl overflow-hidden group-hover:border-indigo-500/40 transition-all duration-300">
                <div className="grid md:grid-cols-2 gap-0 h-full">
                  {/* Native Modules Side */}
                  <div className="p-8 flex flex-col justify-center border-r border-indigo-500/10">
                    <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6">
                      <Layers className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-foreground">Native Modules</h3>
                    <p className="text-base text-muted-foreground">
                      Access all device features: camera, GPS, biometrics, NFC, Bluetooth, and more through native bridge APIs.
                    </p>
                  </div>
                  
                  {/* Platform Specific Side */}
                  <div className="relative p-8 flex flex-col justify-center">
                    <div className="absolute inset-0">
                      <img 
                        src="https://picsum.photos/seed/platform-specific/500/400" 
                        alt="Platform Specific"
                        className="w-full h-full object-cover opacity-20"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-950/80 to-cyan-950/40"></div>
                    </div>
                    <div className="relative z-10">
                      <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6">
                        <Globe className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold mb-3 text-foreground">Platform-Specific Code</h3>
                      <p className="text-base text-muted-foreground">
                        When needed, write platform-specific code for iOS or Android. Optimize for each platform while sharing 95% of code.
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
        title="Cross-Platform Technology Stack"
        subtitle="Modern frameworks and tools for building native mobile apps"
        filterSlugs={[
          // Mobile Frameworks
          'react', 'typescript', 'javascript',
          // State Management
          'redux', 'zustand',
          // Backend/APIs
          'nodejs', 'graphql', 'firebase',
          // Build & Tools
          'webpack',
          // Testing
          'jest'
        ]}
        showStats={true}
      />

      {/* Process */}
      <ProcessSteps
        title="Our Mobile App Development Process"
        description="From concept to app stores"
        steps={processSteps}
      />

      {/* Use Cases - Card Deck Layout */}
      <section className="relative py-32 border-t border-border overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent"></div>
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <div className="max-w-3xl mb-20">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
              <span className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-sm font-semibold text-cyan-500">
                Mobile Solutions
              </span>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent via-cyan-500 to-transparent"></div>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Apps We Build For{' '}
              <span className="relative inline-block">
                <span className="relative z-10 text-transparent bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 bg-clip-text">
                  Every Industry
                </span>
                <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 200 12" fill="none">
                  <path d="M0 6C50 0 150 12 200 6" stroke="url(#gradient-mobile)" strokeWidth="2"/>
                  <defs>
                    <linearGradient id="gradient-mobile" x1="0" y1="0" x2="200" y2="0">
                      <stop offset="0%" stopColor="rgb(6, 182, 212)" />
                      <stop offset="50%" stopColor="rgb(59, 130, 246)" />
                      <stop offset="100%" stopColor="rgb(99, 102, 241)" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              From consumer apps to enterprise solutions
            </p>
          </div>

          {/* Card Deck */}
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Consumer Apps */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              <div className="relative h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 backdrop-blur-sm border border-cyan-500/10 rounded-3xl transform translate-x-2 translate-y-2"></div>
                
                <div className="relative bg-background/95 backdrop-blur-xl border border-cyan-500/20 rounded-3xl p-8 lg:p-10 overflow-hidden group-hover:border-cyan-500/40 transition-all duration-300">
                  <div className="absolute top-4 right-4 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl"></div>
                  
                  <div className="relative z-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-foreground">Consumer Apps</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                      Social networks, lifestyle apps, entertainment platforms. Beautiful UI, smooth animations, and intuitive user experience.
                    </p>
                    
                    <div className="relative h-40 rounded-xl overflow-hidden mb-6">
                      <img 
                        src="https://picsum.photos/seed/consumer-app/600/300" 
                        alt="Consumer App"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/80 to-transparent"></div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1.5 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-xs font-medium text-cyan-400">
                        Social Features
                      </span>
                      <span className="px-3 py-1.5 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-xs font-medium text-cyan-400">
                        Real-time Chat
                      </span>
                      <span className="px-3 py-1.5 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-xs font-medium text-cyan-400">
                        Media Upload
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* E-commerce Apps */}
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
                    
                    <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-foreground">E-commerce & Retail</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                      Shopping apps with product catalogs, cart management, secure payments, order tracking, and push notification deals.
                    </p>
                    
                    <div className="grid grid-cols-2 gap-2 mb-6">
                      <div className="relative h-20 rounded-lg overflow-hidden bg-pink-500/10 border border-pink-500/20 flex items-center justify-center">
                        <span className="text-xs font-bold text-pink-400">Payment Gateway</span>
                      </div>
                      <div className="relative h-20 rounded-lg overflow-hidden bg-pink-500/10 border border-pink-500/20 flex items-center justify-center">
                        <span className="text-xs font-bold text-pink-400">Order Tracking</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1.5 bg-pink-500/10 border border-pink-500/30 rounded-full text-xs font-medium text-pink-400">
                        Stripe/PayPal
                      </span>
                      <span className="px-3 py-1.5 bg-pink-500/10 border border-pink-500/30 rounded-full text-xs font-medium text-pink-400">
                        Wishlist
                      </span>
                      <span className="px-3 py-1.5 bg-pink-500/10 border border-pink-500/30 rounded-full text-xs font-medium text-pink-400">
                        Reviews & Ratings
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enterprise Apps */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-violet-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              <div className="relative h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-violet-500/5 backdrop-blur-sm border border-purple-500/10 rounded-3xl transform translate-x-2 translate-y-2"></div>
                
                <div className="relative bg-background/95 backdrop-blur-xl border border-purple-500/20 rounded-3xl p-8 lg:p-10 overflow-hidden group-hover:border-purple-500/40 transition-all duration-300">
                  <div className="absolute top-4 left-4 w-32 h-32 bg-purple-500/5 rounded-full blur-2xl"></div>
                  
                  <div className="relative z-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    
                    <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-foreground">Enterprise & Business</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                      Internal tools, field service apps, inventory management, CRM, and B2B platforms with offline capabilities.
                    </p>
                    
                    <div className="relative h-32 bg-gradient-to-br from-purple-500/10 to-violet-500/10 rounded-xl p-4 mb-6 border border-purple-500/20">
                      <div className="grid grid-cols-3 gap-2 h-full">
                        {[...Array(6)].map((_, i) => (
                          <div key={i} className="bg-purple-500/20 rounded border border-purple-500/30"></div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1.5 bg-purple-500/10 border border-purple-500/30 rounded-full text-xs font-medium text-purple-400">
                        SSO Integration
                      </span>
                      <span className="px-3 py-1.5 bg-purple-500/10 border border-purple-500/30 rounded-full text-xs font-medium text-purple-400">
                        Offline First
                      </span>
                      <span className="px-3 py-1.5 bg-purple-500/10 border border-purple-500/30 rounded-full text-xs font-medium text-purple-400">
                        Analytics
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* On-Demand Services */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-amber-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              <div className="relative h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-amber-500/5 backdrop-blur-sm border border-orange-500/10 rounded-3xl transform translate-x-2 translate-y-2"></div>
                
                <div className="relative bg-background/95 backdrop-blur-xl border border-orange-500/20 rounded-3xl p-8 lg:p-10 overflow-hidden group-hover:border-orange-500/40 transition-all duration-300">
                  <div className="absolute bottom-4 right-4 w-40 h-40 bg-orange-500/5 rounded-full blur-2xl"></div>
                  
                  <div className="relative z-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    
                    <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-foreground">On-Demand Services</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                      Ride-sharing, food delivery, home services. Real-time GPS tracking, driver matching, and live status updates.
                    </p>
                    
                    <div className="grid grid-cols-3 gap-3 mb-6">
                      <div className="aspect-square bg-gradient-to-br from-orange-500/10 to-amber-500/10 rounded-xl border border-orange-500/20 flex items-center justify-center">
                        <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                        </svg>
                      </div>
                      <div className="aspect-square bg-gradient-to-br from-orange-500/10 to-amber-500/10 rounded-xl border border-orange-500/20 flex items-center justify-center">
                        <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="aspect-square bg-gradient-to-br from-orange-500/10 to-amber-500/10 rounded-xl border border-orange-500/20 flex items-center justify-center">
                        <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                        </svg>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1.5 bg-orange-500/10 border border-orange-500/30 rounded-full text-xs font-medium text-orange-400">
                        GPS Tracking
                      </span>
                      <span className="px-3 py-1.5 bg-orange-500/10 border border-orange-500/30 rounded-full text-xs font-medium text-orange-400">
                        Real-time Updates
                      </span>
                      <span className="px-3 py-1.5 bg-orange-500/10 border border-orange-500/30 rounded-full text-xs font-medium text-orange-400">
                        In-app Chat
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
                Mobile Apps We've Built
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                See our cross-platform mobile applications in action
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
                Trusted by businesses for exceptional mobile app development
              </p>
            </div>
            
            <TestimonialsCarousel testimonials={testimonials} />
          </div>
        </section>
      )}

      {/* Final CTA */}
      <CTASection 
        title="Ready to Build Your Mobile App?"
        description="Let's create a powerful cross-platform mobile app that reaches millions on iOS and Android. Get started with a free consultation and project estimate."
        primaryButtonText="Start Your Mobile Project"
        primaryButtonLink="/contact"
        secondaryButtonText="Schedule Free Consultation"
        secondaryButtonLink="/contact"
        showContactInfo={true}
      />
    </main>
  )
}
