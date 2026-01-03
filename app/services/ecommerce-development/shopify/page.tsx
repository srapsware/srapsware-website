import { Metadata } from 'next'
import { PageHero } from '@/components/sections/page-hero'
import { ProcessSteps } from '@/components/sections/process-steps'
import { TestimonialsCarousel } from '@/components/sections/testimonials-carousel'
import { PortfolioSlider } from '@/components/sections/portfolio-slider'
import { CTASection } from '@/components/sections/cta-section'
import TechShowcase from '@/components/animations/tech-showcase'
import { getFeaturedPortfolio, getTechnologies, getFeaturedTestimonials } from '@/lib/content'
import { ShoppingBag, Palette, Zap, TrendingUp, CreditCard, Package, Building2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Shopify Development & Customization | E-commerce Experts | Srapsware',
  description: 'Expert Shopify development services. Custom theme development, app integration, store optimization, and e-commerce solutions that drive sales.',
  openGraph: {
    title: 'Shopify Development & E-commerce Services',
    description: 'Build powerful Shopify stores that convert visitors into customers',
    type: 'website',
  }
}

export default function ShopifyDevelopmentPage() {
  const portfolioProjects = getFeaturedPortfolio()
  const technologies = getTechnologies()
  const testimonials = getFeaturedTestimonials()

  const processSteps = [
    {
      number: 1,
      title: 'Discovery & Planning',
      description: 'Understand your brand, products, target audience, and business goals. Define store structure, features, and integrations.',
      duration: '1-2 weeks',
      icon: 'Search'
    },
    {
      number: 2,
      title: 'Design & Prototyping',
      description: 'Create custom designs aligned with your brand. Design product pages, collections, checkout flow, and user experience.',
      duration: '2-3 weeks',
      icon: 'Palette'
    },
    {
      number: 3,
      title: 'Theme Development',
      description: 'Build custom Shopify theme using Liquid, JavaScript, and CSS. Responsive design, optimized performance, and SEO best practices.',
      duration: '4-6 weeks',
      icon: 'Code'
    },
    {
      number: 4,
      title: 'App Integration',
      description: 'Integrate payment gateways, shipping providers, marketing tools, and third-party apps. Custom app development if needed.',
      duration: '2-3 weeks',
      icon: 'Package'
    },
    {
      number: 5,
      title: 'Testing & Optimization',
      description: 'Cross-browser testing, mobile optimization, checkout testing, page speed optimization, and conversion rate improvements.',
      duration: '1-2 weeks',
      icon: 'CheckCircle'
    },
    {
      number: 6,
      title: 'Launch & Support',
      description: 'Store launch, training, documentation, ongoing maintenance, updates, and continuous optimization.',
      duration: 'Ongoing',
      icon: 'Rocket'
    }
  ]

  return (
    <main>
      {/* Hero Section */}
      <PageHero
        badge="Shopify E-commerce"
        title="Shopify Development & Customization"
        description="Build high-converting Shopify stores that drive sales. Custom theme development, app integration, performance optimization, and e-commerce solutions tailored to your brand."
        ctaPrimary={{
          text: 'Start Shopify Project',
          href: '/contact'
        }}
        ctaSecondary={{
          text: 'View Shopify Stores',
          href: '/portfolio'
        }}
      />

      {/* Overview Section - Creative Magazine Layout */}
      <section className="relative py-32 border-t border-border overflow-hidden">
        {/* Floating Background Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4">
          {/* Dynamic Title */}
          <div className="relative mb-20">
            <div className="absolute -top-10 -right-10 w-32 h-32 border-4 border-green-500/20 rounded-full hidden lg:block"></div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="block text-foreground">Stores That Sell,</span>
              <span className="block mt-2 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 bg-clip-text text-transparent">
                Brands That Scale
              </span>
            </h2>
          </div>

          {/* First Section - Diagonal Split */}
          <div className="relative mb-32">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              {/* Large Image - Diagonal Cut */}
              <div className="lg:col-span-7 relative">
                <div className="relative h-[400px] lg:h-[500px] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20 opacity-50" 
                       style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)' }}></div>
                  <img 
                    src="https://picsum.photos/seed/shopify-ecommerce/900/600" 
                    alt="Shopify E-commerce Development"
                    className="w-full h-full object-cover"
                    style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)' }}
                  />
                  {/* Floating Badge */}
                  <div className="absolute top-8 right-8 bg-background/90 backdrop-blur-md border border-green-500/30 rounded-full px-6 py-3 shadow-xl">
                    <span className="text-sm font-bold text-green-500">Shopify Experts</span>
                  </div>
                </div>
              </div>
              
              {/* Text Content - Overlapping */}
              <div className="lg:col-span-5 lg:-ml-20 relative z-10">
                <div className="bg-background/95 backdrop-blur-xl border border-border rounded-3xl p-8 lg:p-10 shadow-2xl">
                  <div className="w-12 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mb-6"></div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground">Built For Conversion</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Every Shopify store we build is optimized for one thing: converting visitors into customers. Custom designs, lightning-fast performance, intuitive checkout flows, and mobile-first experiences that maximize sales.
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
                  <div className="absolute -top-6 -left-6 w-24 h-24 bg-emerald-500/10 rounded-lg -z-10"></div>
                  <div className="bg-gradient-to-br from-background via-background to-emerald-900/5 backdrop-blur-xl border border-border rounded-3xl p-8 lg:p-10 shadow-2xl">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                      <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse delay-100"></div>
                      <div className="w-3 h-3 rounded-full bg-teal-500 animate-pulse delay-200"></div>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-foreground">Custom Everything</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      From custom Liquid themes to Shopify app development, we extend Shopify's capabilities to match your unique needs. No templates, no limitations - just powerful e-commerce tailored to your brand.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Image Grid - Right Side */}
              <div className="lg:col-span-7 lg:-mr-20 relative order-1 lg:order-2">
                <div className="grid grid-cols-2 gap-4 h-[500px]">
                  <div className="row-span-2 rounded-2xl overflow-hidden relative group">
                    <img 
                      src="https://picsum.photos/seed/shopify-themes/400/650" 
                      alt="Custom Shopify Themes"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-green-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="rounded-2xl overflow-hidden relative group">
                    <img 
                      src="https://picsum.photos/seed/product-pages/400/320" 
                      alt="Product Pages"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/80 to-transparent"></div>
                  </div>
                  <div className="rounded-2xl overflow-hidden relative group">
                    <img 
                      src="https://picsum.photos/seed/mobile-commerce/400/320" 
                      alt="Mobile Commerce"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tl from-teal-500/80 to-transparent"></div>
                    <div className="absolute bottom-4 right-4 bg-white text-black text-xs font-bold px-3 py-1 rounded-full">
                      Mobile First
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Third Section - Full Width Stats */}
          <div className="relative">
            <div className="bg-gradient-to-br from-background via-green-500/5 to-emerald-900/10 rounded-[3rem] overflow-hidden border border-border shadow-2xl">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Left - Text with Stats */}
                <div className="p-12 lg:p-16 flex flex-col justify-center relative">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500"></div>
                  
                  <h3 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight">
                    Performance That{' '}
                    <span className="text-green-500">Converts</span>
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                    Fast stores sell more. We optimize every aspect of your Shopify store for blazing speed, seamless mobile experience, and frictionless checkout. Watch your conversion rates soar.
                  </p>
                  
                  {/* Stats Grid */}
                  <div className="grid grid-cols-3 gap-6 mb-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-500 mb-2">90+</div>
                      <div className="text-sm text-muted-foreground">PageSpeed Score</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-emerald-500 mb-2">&lt;2s</div>
                      <div className="text-sm text-muted-foreground">Page Load</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-teal-500 mb-2">4x</div>
                      <div className="text-sm text-muted-foreground">Better Conversion</div>
                    </div>
                  </div>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-sm font-medium">
                      Liquid
                    </span>
                    <span className="px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-sm font-medium">
                      React
                    </span>
                    <span className="px-4 py-2 bg-teal-500/10 border border-teal-500/20 rounded-full text-sm font-medium">
                      Shopify Plus
                    </span>
                  </div>
                </div>
                
                {/* Right - Large Hero Image */}
                <div className="relative h-[400px] lg:h-auto min-h-[500px]">
                  <img 
                    src="https://picsum.photos/seed/shopify-performance/700/700" 
                    alt="Shopify Performance"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-background via-transparent to-transparent lg:from-background/50"></div>
                  
                  {/* Floating Card */}
                  <div className="absolute bottom-8 right-8 bg-background/95 backdrop-blur-xl border border-border rounded-2xl p-6 shadow-2xl max-w-xs hidden lg:block">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-white font-bold">
                        <ShoppingBag className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="font-bold text-foreground mb-1">Sales Optimized</div>
                        <div className="text-sm text-muted-foreground">Built to maximize revenue</div>
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(34,197,94,0.05),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(16,185,129,0.05),transparent_50%)]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <div className="max-w-3xl mb-16">
            <div className="inline-block px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-sm font-semibold text-green-500 mb-6">
              Shopify Capabilities
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              What We Build On
              <span className="block text-transparent bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text">
                Shopify Platform
              </span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Complete e-commerce solutions from theme to checkout
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid lg:grid-cols-12 gap-6">
            {/* Custom Theme Development - Large Featured */}
            <div className="lg:col-span-8 relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              <div className="relative h-full bg-gradient-to-br from-green-950/40 to-emerald-950/40 backdrop-blur-xl border border-green-500/20 rounded-3xl p-8 lg:p-12 overflow-hidden group-hover:border-green-500/40 transition-all duration-300">
                <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 rounded-full blur-3xl"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Palette className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4 text-foreground">Custom Theme Development</h3>
                  <p className="text-lg text-muted-foreground mb-8">
                    Build unique Shopify themes from scratch using Liquid, JavaScript, and modern CSS. Fully responsive, SEO-optimized, and conversion-focused designs.
                  </p>
                  <div className="relative h-48 rounded-2xl overflow-hidden">
                    <img 
                      src="https://picsum.photos/seed/custom-themes/700/300" 
                      alt="Custom Theme Development"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-green-950/80 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 flex items-center gap-4">
                      <div className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">Liquid Templates</div>
                      <div className="bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full">Custom Sections</div>
                      <div className="bg-white/10 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full">Mobile First</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* App Integration - Tall Card */}
            <div className="lg:col-span-4 lg:row-span-2 relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              <div className="relative h-full bg-gradient-to-br from-blue-950/40 to-cyan-950/40 backdrop-blur-xl border border-blue-500/20 rounded-3xl p-8 overflow-hidden group-hover:border-blue-500/40 transition-all duration-300">
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl"></div>
                <div className="relative z-10 h-full flex flex-col">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
                    <Package className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground">App Integration</h3>
                  <p className="text-base text-muted-foreground mb-6">
                    Seamlessly integrate Shopify apps, payment gateways, shipping providers, and marketing tools. Custom app development for unique needs.
                  </p>
                  <div className="mt-auto space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-blue-500/5 rounded-lg border border-blue-500/10">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-sm">Payment Gateways</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-blue-500/5 rounded-lg border border-blue-500/10">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                      <span className="text-sm">Marketing Tools</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-blue-500/5 rounded-lg border border-blue-500/10">
                      <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                      <span className="text-sm">Custom Apps</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Performance Optimization */}
            <div className="lg:col-span-4 relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-amber-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative h-full bg-gradient-to-br from-orange-950/40 to-amber-950/40 backdrop-blur-xl border border-orange-500/20 rounded-3xl p-6 overflow-hidden group-hover:border-orange-500/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Performance Optimization</h3>
                <p className="text-sm text-muted-foreground">
                  Lightning-fast load times with lazy loading, image optimization, code minification, and CDN integration. Achieve 90+ PageSpeed scores.
                </p>
              </div>
            </div>

            {/* Conversion Rate Optimization */}
            <div className="lg:col-span-4 relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative h-full bg-gradient-to-br from-purple-950/40 to-pink-950/40 backdrop-blur-xl border border-purple-500/20 rounded-3xl p-6 overflow-hidden group-hover:border-purple-500/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">CRO & Analytics</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  A/B testing, heatmaps, funnel analysis, and data-driven optimization to maximize conversions and revenue per visitor.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-purple-500/10 border border-purple-500/30 rounded text-xs">A/B Testing</span>
                  <span className="px-2 py-1 bg-purple-500/10 border border-purple-500/30 rounded text-xs">Heatmaps</span>
                  <span className="px-2 py-1 bg-purple-500/10 border border-purple-500/30 rounded text-xs">Analytics</span>
                </div>
              </div>
            </div>

            {/* Checkout Customization & Payment Integration - Wide Card */}
            <div className="lg:col-span-8 relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 via-indigo-500/20 to-blue-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              <div className="relative h-full bg-gradient-to-r from-violet-950/40 via-indigo-950/40 to-blue-950/40 backdrop-blur-xl border border-violet-500/20 rounded-3xl overflow-hidden group-hover:border-violet-500/40 transition-all duration-300">
                <div className="grid md:grid-cols-2 gap-0 h-full">
                  {/* Checkout Side */}
                  <div className="p-8 flex flex-col justify-center border-r border-violet-500/10">
                    <div className="w-14 h-14 bg-gradient-to-br from-violet-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-6">
                      <ShoppingBag className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-foreground">Checkout Optimization</h3>
                    <p className="text-base text-muted-foreground">
                      Streamlined checkout flows, one-page checkout, trust badges, and abandoned cart recovery to minimize cart abandonment.
                    </p>
                  </div>
                  
                  {/* Payment Side */}
                  <div className="relative p-8 flex flex-col justify-center">
                    <div className="absolute inset-0">
                      <img 
                        src="https://picsum.photos/seed/payment-gateway/500/400" 
                        alt="Payment Integration"
                        className="w-full h-full object-cover opacity-20"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-950/80 to-blue-950/40"></div>
                    </div>
                    <div className="relative z-10">
                      <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
                        <CreditCard className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold mb-3 text-foreground">Payment Gateways</h3>
                      <p className="text-base text-muted-foreground">
                        Integrate Stripe, PayPal, Shop Pay, Apple Pay, Google Pay, and any payment method your customers prefer.
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
        title="Shopify Development Stack"
        subtitle="Modern tools for powerful e-commerce stores"
        filterSlugs={[
          // Frontend
          'react', 'nextjs', 'typescript', 'javascript',
          // Styling
          'tailwind-css', 'sass',
          // Backend/API
          'nodejs', 'graphql',
          // Tools
          'vite', 'webpack'
        ]}
        showStats={true}
      />

      {/* Process */}
      <ProcessSteps
        title="Our Shopify Development Process"
        description="From concept to launch and beyond"
        steps={processSteps}
      />

      {/* Use Cases - Card Deck Layout */}
      <section className="relative py-32 border-t border-border overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/5 to-transparent"></div>
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <div className="max-w-3xl mb-20">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-green-500 to-transparent"></div>
              <span className="px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-sm font-semibold text-green-500">
                Shopify Solutions
              </span>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent via-green-500 to-transparent"></div>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Shopify Stores{' '}
              <span className="relative inline-block">
                <span className="relative z-10 text-transparent bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 bg-clip-text">
                  We Build
                </span>
                <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 200 12" fill="none">
                  <path d="M0 6C50 0 150 12 200 6" stroke="url(#gradient-shopify)" strokeWidth="2"/>
                  <defs>
                    <linearGradient id="gradient-shopify" x1="0" y1="0" x2="200" y2="0">
                      <stop offset="0%" stopColor="rgb(34, 197, 94)" />
                      <stop offset="50%" stopColor="rgb(16, 185, 129)" />
                      <stop offset="100%" stopColor="rgb(20, 184, 166)" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              From fashion to electronics, B2B to DTC
            </p>
          </div>

          {/* Card Deck */}
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Fashion & Apparel */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-rose-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              <div className="relative h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-rose-500/5 backdrop-blur-sm border border-pink-500/10 rounded-3xl transform translate-x-2 translate-y-2"></div>
                
                <div className="relative bg-background/95 backdrop-blur-xl border border-pink-500/20 rounded-3xl p-8 lg:p-10 overflow-hidden group-hover:border-pink-500/40 transition-all duration-300">
                  <div className="absolute top-4 right-4 w-32 h-32 bg-pink-500/5 rounded-full blur-2xl"></div>
                  
                  <div className="relative z-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                      </svg>
                    </div>
                    
                    <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-foreground">Fashion & Apparel</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                      Beautiful product galleries, size guides, wishlist functionality, and seamless checkout for fashion brands. Instagram integration and lookbook features.
                    </p>
                    
                    <div className="relative h-40 rounded-xl overflow-hidden mb-6">
                      <img 
                        src="https://picsum.photos/seed/fashion-ecommerce/600/300" 
                        alt="Fashion E-commerce"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-pink-500/80 to-transparent"></div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1.5 bg-pink-500/10 border border-pink-500/30 rounded-full text-xs font-medium text-pink-400">
                        Lookbooks
                      </span>
                      <span className="px-3 py-1.5 bg-pink-500/10 border border-pink-500/30 rounded-full text-xs font-medium text-pink-400">
                        Size Guides
                      </span>
                      <span className="px-3 py-1.5 bg-pink-500/10 border border-pink-500/30 rounded-full text-xs font-medium text-pink-400">
                        Wishlist
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Electronics & Tech */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              <div className="relative h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 backdrop-blur-sm border border-blue-500/10 rounded-3xl transform translate-x-2 translate-y-2"></div>
                
                <div className="relative bg-background/95 backdrop-blur-xl border border-blue-500/20 rounded-3xl p-8 lg:p-10 overflow-hidden group-hover:border-blue-500/40 transition-all duration-300">
                  <div className="absolute bottom-4 left-4 w-40 h-40 bg-blue-500/5 rounded-full blur-2xl"></div>
                  
                  <div className="relative z-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                    
                    <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-foreground">Electronics & Tech</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                      Advanced filtering, spec comparisons, warranty information, and review systems for tech products. High-performance with detailed product data.
                    </p>
                    
                    <div className="grid grid-cols-2 gap-2 mb-6">
                      <div className="relative h-20 rounded-lg overflow-hidden bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                        <span className="text-xs font-bold text-blue-400">Product Compare</span>
                      </div>
                      <div className="relative h-20 rounded-lg overflow-hidden bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                        <span className="text-xs font-bold text-blue-400">Reviews</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1.5 bg-blue-500/10 border border-blue-500/30 rounded-full text-xs font-medium text-blue-400">
                        Filters
                      </span>
                      <span className="px-3 py-1.5 bg-blue-500/10 border border-blue-500/30 rounded-full text-xs font-medium text-blue-400">
                        Specs
                      </span>
                      <span className="px-3 py-1.5 bg-blue-500/10 border border-blue-500/30 rounded-full text-xs font-medium text-blue-400">
                        Warranty
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Food & Beverage */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              <div className="relative h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 backdrop-blur-sm border border-orange-500/10 rounded-3xl transform translate-x-2 translate-y-2"></div>
                
                <div className="relative bg-background/95 backdrop-blur-xl border border-orange-500/20 rounded-3xl p-8 lg:p-10 overflow-hidden group-hover:border-orange-500/40 transition-all duration-300">
                  <div className="absolute top-4 left-4 w-32 h-32 bg-orange-500/5 rounded-full blur-2xl"></div>
                  
                  <div className="relative z-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    
                    <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-foreground">Food & Beverage</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                      Subscription models, recipe integration, nutritional information, and recurring orders for food and beverage brands.
                    </p>
                    
                    <div className="relative h-32 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-xl p-4 mb-6 border border-orange-500/20">
                      <div className="space-y-2">
                        <div className="h-4 bg-orange-500/20 rounded w-3/4"></div>
                        <div className="h-4 bg-orange-500/20 rounded w-full"></div>
                        <div className="h-4 bg-orange-500/20 rounded w-5/6"></div>
                        <div className="h-4 bg-orange-500/20 rounded w-2/3"></div>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1.5 bg-orange-500/10 border border-orange-500/30 rounded-full text-xs font-medium text-orange-400">
                        Subscriptions
                      </span>
                      <span className="px-3 py-1.5 bg-orange-500/10 border border-orange-500/30 rounded-full text-xs font-medium text-orange-400">
                        Recipes
                      </span>
                      <span className="px-3 py-1.5 bg-orange-500/10 border border-orange-500/30 rounded-full text-xs font-medium text-orange-400">
                        Recurring Orders
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* B2B Wholesale */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-violet-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              <div className="relative h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-violet-500/5 backdrop-blur-sm border border-purple-500/10 rounded-3xl transform translate-x-2 translate-y-2"></div>
                
                <div className="relative bg-background/95 backdrop-blur-xl border border-purple-500/20 rounded-3xl p-8 lg:p-10 overflow-hidden group-hover:border-purple-500/40 transition-all duration-300">
                  <div className="absolute bottom-4 right-4 w-40 h-40 bg-purple-500/5 rounded-full blur-2xl"></div>
                  
                  <div className="relative z-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Building2 className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-foreground">B2B Wholesale</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                      Custom pricing, bulk ordering, quote requests, and customer-specific catalogs for B2B wholesale businesses on Shopify Plus.
                    </p>
                    
                    <div className="grid grid-cols-3 gap-3 mb-6">
                      <div className="aspect-square bg-gradient-to-br from-purple-500/10 to-violet-500/10 rounded-xl border border-purple-500/20 flex items-center justify-center">
                        <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="aspect-square bg-gradient-to-br from-purple-500/10 to-violet-500/10 rounded-xl border border-purple-500/20 flex items-center justify-center">
                        <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <div className="aspect-square bg-gradient-to-br from-purple-500/10 to-violet-500/10 rounded-xl border border-purple-500/20 flex items-center justify-center">
                        <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1.5 bg-purple-500/10 border border-purple-500/30 rounded-full text-xs font-medium text-purple-400">
                        Custom Pricing
                      </span>
                      <span className="px-3 py-1.5 bg-purple-500/10 border border-purple-500/30 rounded-full text-xs font-medium text-purple-400">
                        Bulk Orders
                      </span>
                      <span className="px-3 py-1.5 bg-purple-500/10 border border-purple-500/30 rounded-full text-xs font-medium text-purple-400">
                        Quotes
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
                Shopify Stores We've Built
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                See our high-converting e-commerce stores in action
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
                Trusted by e-commerce brands for high-converting stores
              </p>
            </div>
            
            <TestimonialsCarousel testimonials={testimonials} />
          </div>
        </section>
      )}

      {/* Final CTA */}
      <CTASection 
        title="Ready to Launch Your Shopify Store?"
        description="Build a high-converting e-commerce store that drives sales. Get started with a free consultation and discover how we can transform your online business."
        primaryButtonText="Start Shopify Project"
        primaryButtonLink="/contact"
        secondaryButtonText="Get Free Consultation"
        secondaryButtonLink="/contact"
        showContactInfo={true}
      />
    </main>
  )
}
