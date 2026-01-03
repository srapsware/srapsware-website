import { Metadata } from 'next'
import { PageHero } from '@/components/sections/page-hero'
import { ProcessSteps } from '@/components/sections/process-steps'
import { TestimonialsCarousel } from '@/components/sections/testimonials-carousel'
import { PortfolioSlider } from '@/components/sections/portfolio-slider'
import { CTASection } from '@/components/sections/cta-section'
import TechShowcase from '@/components/animations/tech-showcase'
import { getFeaturedPortfolio, getTechnologies, getFeaturedTestimonials } from '@/lib/content'
import { Rocket, Users, CreditCard, BarChart3, Shield, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'SaaS Platform Development | Multi-Tenant Applications | Srapsware',
  description: 'Expert SaaS platform development services. Build scalable multi-tenant applications with subscription management, analytics, and enterprise features.',
  openGraph: {
    title: 'SaaS Platform Development Services',
    description: 'Launch your SaaS product with scalable architecture and modern features',
    type: 'website',
  }
}

export default function SaaSDevelopmentPage() {
  const portfolioProjects = getFeaturedPortfolio()
  const technologies = getTechnologies()
  const testimonials = getFeaturedTestimonials()

  const processSteps = [
    {
      number: 1,
      title: 'Product Discovery',
      description: 'Define your SaaS vision, target market, feature set, pricing strategy, and competitive positioning.',
      duration: '2-3 weeks',
      icon: 'Search'
    },
    {
      number: 2,
      title: 'Architecture Design',
      description: 'Design multi-tenant architecture, database schema, API structure, and scalability plan for growth.',
      duration: '3-4 weeks',
      icon: 'Layout'
    },
    {
      number: 3,
      title: 'MVP Development',
      description: 'Build core features, user authentication, subscription management, and essential functionality for launch.',
      duration: '8-12 weeks',
      icon: 'Code'
    },
    {
      number: 4,
      title: 'Integration & Testing',
      description: 'Integrate payment gateways, analytics, email services, and third-party APIs. Comprehensive testing.',
      duration: '3-4 weeks',
      icon: 'GitBranch'
    },
    {
      number: 5,
      title: 'Launch Preparation',
      description: 'Beta testing, onboarding flows, documentation, marketing site, and production deployment setup.',
      duration: '2-3 weeks',
      icon: 'Rocket'
    },
    {
      number: 6,
      title: 'Growth & Scaling',
      description: 'Monitor performance, optimize infrastructure, add features based on feedback, and scale as you grow.',
      duration: 'Ongoing',
      icon: 'TrendingUp'
    }
  ]

  return (
    <main>
      {/* Hero Section */}
      <PageHero
        badge="SaaS Platform Development"
        title="Launch Your SaaS Product"
        description="Build scalable, multi-tenant SaaS platforms that customers love. From MVP to enterprise scale, we handle architecture, subscriptions, analytics, and everything in between."
        ctaPrimary={{
          text: 'Start SaaS Project',
          href: '/contact'
        }}
        ctaSecondary={{
          text: 'View SaaS Portfolio',
          href: '/portfolio'
        }}
      />

      {/* Overview Section - Creative Magazine Layout */}
      <section className="relative py-32 border-t border-border overflow-hidden">
        {/* Floating Background Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4">
          {/* Dynamic Title */}
          <div className="relative mb-20">
            <div className="absolute -top-10 -right-10 w-32 h-32 border-4 border-blue-500/20 rounded-full hidden lg:block"></div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="block text-foreground">Software as a Service,</span>
              <span className="block mt-2 bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 bg-clip-text text-transparent">
                Built to Scale
              </span>
            </h2>
          </div>

          {/* First Section - Diagonal Split */}
          <div className="relative mb-32">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              {/* Large Image - Diagonal Cut */}
              <div className="lg:col-span-7 relative">
                <div className="relative h-[400px] lg:h-[500px] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 opacity-50" 
                       style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)' }}></div>
                  <img 
                    src="https://picsum.photos/seed/saas-platform/900/600" 
                    alt="SaaS Platform Development"
                    className="w-full h-full object-cover"
                    style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)' }}
                  />
                  {/* Floating Badge */}
                  <div className="absolute top-8 right-8 bg-background/90 backdrop-blur-md border border-blue-500/30 rounded-full px-6 py-3 shadow-xl">
                    <span className="text-sm font-bold text-blue-500">SaaS Experts</span>
                  </div>
                </div>
              </div>
              
              {/* Text Content - Overlapping */}
              <div className="lg:col-span-5 lg:-ml-20 relative z-10">
                <div className="bg-background/95 backdrop-blur-xl border border-border rounded-3xl p-8 lg:p-10 shadow-2xl">
                  <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mb-6"></div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground">Multi-Tenant by Design</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    True multi-tenant architecture that scales from 10 to 10,000 customers on the same infrastructure. Isolated data, shared resources, and efficient scaling that keeps costs low and performance high.
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
                  <div className="absolute -top-6 -left-6 w-24 h-24 bg-cyan-500/10 rounded-lg -z-10"></div>
                  <div className="bg-gradient-to-br from-background via-background to-cyan-900/5 backdrop-blur-xl border border-border rounded-3xl p-8 lg:p-10 shadow-2xl">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse"></div>
                      <div className="w-3 h-3 rounded-full bg-cyan-500 animate-pulse delay-100"></div>
                      <div className="w-3 h-3 rounded-full bg-teal-500 animate-pulse delay-200"></div>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-foreground">Revenue from Day One</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Integrated subscription management with Stripe, tiered pricing, trial periods, and automated billing. Your SaaS starts generating revenue the moment you launch.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Image Grid - Right Side */}
              <div className="lg:col-span-7 lg:-mr-20 relative order-1 lg:order-2">
                <div className="grid grid-cols-2 gap-4 h-[500px]">
                  <div className="row-span-2 rounded-2xl overflow-hidden relative group">
                    <img 
                      src="https://picsum.photos/seed/saas-dashboard/400/650" 
                      alt="SaaS Dashboard"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="rounded-2xl overflow-hidden relative group">
                    <img 
                      src="https://picsum.photos/seed/subscription-billing/400/320" 
                      alt="Subscription Billing"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/80 to-transparent"></div>
                  </div>
                  <div className="rounded-2xl overflow-hidden relative group">
                    <img 
                      src="https://picsum.photos/seed/analytics-saas/400/320" 
                      alt="Analytics"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tl from-teal-500/80 to-transparent"></div>
                    <div className="absolute bottom-4 right-4 bg-white text-black text-xs font-bold px-3 py-1 rounded-full">
                      Real-time Analytics
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Third Section - Full Width Stats */}
          <div className="relative">
            <div className="bg-gradient-to-br from-background via-blue-500/5 to-cyan-900/10 rounded-[3rem] overflow-hidden border border-border shadow-2xl">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Left - Text with Stats */}
                <div className="p-12 lg:p-16 flex flex-col justify-center relative">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500"></div>
                  
                  <h3 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight">
                    Built For{' '}
                    <span className="text-blue-500">Hyper-Growth</span>
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                    Auto-scaling infrastructure, optimized database queries, CDN integration, and caching strategies that handle millions of requests. Your SaaS grows without technical bottlenecks.
                  </p>
                  
                  {/* Stats Grid */}
                  <div className="grid grid-cols-3 gap-6 mb-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-500 mb-2">99.9%</div>
                      <div className="text-sm text-muted-foreground">Uptime SLA</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-cyan-500 mb-2">&lt;200ms</div>
                      <div className="text-sm text-muted-foreground">API Response</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-teal-500 mb-2">Auto</div>
                      <div className="text-sm text-muted-foreground">Scaling</div>
                    </div>
                  </div>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-sm font-medium">
                      Multi-Tenant
                    </span>
                    <span className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-sm font-medium">
                      Subscriptions
                    </span>
                    <span className="px-4 py-2 bg-teal-500/10 border border-teal-500/20 rounded-full text-sm font-medium">
                      Analytics
                    </span>
                  </div>
                </div>
                
                {/* Right - Large Hero Image */}
                <div className="relative h-[400px] lg:h-auto min-h-[500px]">
                  <img 
                    src="https://picsum.photos/seed/saas-growth/700/700" 
                    alt="SaaS Growth"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-background via-transparent to-transparent lg:from-background/50"></div>
                  
                  {/* Floating Card */}
                  <div className="absolute bottom-8 right-8 bg-background/95 backdrop-blur-xl border border-border rounded-2xl p-6 shadow-2xl max-w-xs hidden lg:block">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold">
                        <Rocket className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="font-bold text-foreground mb-1">Launch Ready</div>
                        <div className="text-sm text-muted-foreground">MVP to enterprise scale</div>
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(6,182,212,0.05),transparent_50%)]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <div className="max-w-3xl mb-16">
            <div className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-sm font-semibold text-blue-500 mb-6">
              SaaS Features
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Everything Your SaaS
              <span className="block text-transparent bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text">
                Needs to Succeed
              </span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Complete platform from user management to analytics
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid lg:grid-cols-12 gap-6">
            {/* User Management - Large Featured */}
            <div className="lg:col-span-8 relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              <div className="relative h-full bg-gradient-to-br from-blue-950/40 to-cyan-950/40 backdrop-blur-xl border border-blue-500/20 rounded-3xl p-8 lg:p-12 overflow-hidden group-hover:border-blue-500/40 transition-all duration-300">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4 text-foreground">User & Team Management</h3>
                  <p className="text-lg text-muted-foreground mb-8">
                    Complete user authentication, role-based access control, team collaboration, invitations, and user provisioning. SSO and OAuth integration for enterprise customers.
                  </p>
                  <div className="relative h-48 rounded-2xl overflow-hidden">
                    <img 
                      src="https://picsum.photos/seed/user-management/700/300" 
                      alt="User Management"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 flex items-center gap-4">
                      <div className="bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">RBAC</div>
                      <div className="bg-cyan-500 text-white text-xs font-bold px-3 py-1 rounded-full">SSO</div>
                      <div className="bg-white/10 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full">Team Collaboration</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Subscription Management - Tall Card */}
            <div className="lg:col-span-4 lg:row-span-2 relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              <div className="relative h-full bg-gradient-to-br from-green-950/40 to-emerald-950/40 backdrop-blur-xl border border-green-500/20 rounded-3xl p-8 overflow-hidden group-hover:border-green-500/40 transition-all duration-300">
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-green-500/10 rounded-full blur-3xl"></div>
                <div className="relative z-10 h-full flex flex-col">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6">
                    <CreditCard className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground">Subscription Billing</h3>
                  <p className="text-base text-muted-foreground mb-6">
                    Stripe integration for recurring payments, tiered pricing, usage-based billing, trials, coupons, and automated invoicing.
                  </p>
                  <div className="mt-auto space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-green-500/5 rounded-lg border border-green-500/10">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm">Recurring Payments</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-green-500/5 rounded-lg border border-green-500/10">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                      <span className="text-sm">Tiered Plans</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-green-500/5 rounded-lg border border-green-500/10">
                      <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                      <span className="text-sm">Usage Tracking</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Analytics Dashboard */}
            <div className="lg:col-span-4 relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative h-full bg-gradient-to-br from-purple-950/40 to-pink-950/40 backdrop-blur-xl border border-purple-500/20 rounded-3xl p-6 overflow-hidden group-hover:border-purple-500/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Analytics & Insights</h3>
                <p className="text-sm text-muted-foreground">
                  Real-time dashboards, user behavior tracking, revenue metrics, cohort analysis, and business intelligence for data-driven decisions.
                </p>
              </div>
            </div>

            {/* API & Integrations */}
            <div className="lg:col-span-4 relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-amber-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative h-full bg-gradient-to-br from-orange-950/40 to-amber-950/40 backdrop-blur-xl border border-orange-500/20 rounded-3xl p-6 overflow-hidden group-hover:border-orange-500/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">API & Webhooks</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  RESTful APIs, GraphQL endpoints, webhook notifications, and developer documentation for seamless integrations.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-orange-500/10 border border-orange-500/30 rounded text-xs">REST API</span>
                  <span className="px-2 py-1 bg-orange-500/10 border border-orange-500/30 rounded text-xs">GraphQL</span>
                  <span className="px-2 py-1 bg-orange-500/10 border border-orange-500/30 rounded text-xs">Webhooks</span>
                </div>
              </div>
            </div>

            {/* Security & Compliance - Wide Card */}
            <div className="lg:col-span-8 relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 via-rose-500/20 to-pink-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              <div className="relative h-full bg-gradient-to-r from-red-950/40 via-rose-950/40 to-pink-950/40 backdrop-blur-xl border border-red-500/20 rounded-3xl overflow-hidden group-hover:border-red-500/40 transition-all duration-300">
                <div className="grid md:grid-cols-2 gap-0 h-full">
                  {/* Security Side */}
                  <div className="p-8 flex flex-col justify-center border-r border-red-500/10">
                    <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-rose-500 rounded-2xl flex items-center justify-center mb-6">
                      <Shield className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-foreground">Enterprise Security</h3>
                    <p className="text-base text-muted-foreground">
                      End-to-end encryption, data isolation, SOC 2 compliance, GDPR ready, regular security audits, and penetration testing.
                    </p>
                  </div>
                  
                  {/* Compliance Side */}
                  <div className="relative p-8 flex flex-col justify-center">
                    <div className="absolute inset-0">
                      <img 
                        src="https://picsum.photos/seed/security-compliance/500/400" 
                        alt="Security & Compliance"
                        className="w-full h-full object-cover opacity-20"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-pink-950/80 to-pink-950/40"></div>
                    </div>
                    <div className="relative z-10">
                      <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-fuchsia-500 rounded-2xl flex items-center justify-center mb-6">
                        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold mb-3 text-foreground">Data Privacy</h3>
                      <p className="text-base text-muted-foreground">
                        GDPR, CCPA, HIPAA compliance. Data residency options, audit logs, and customer data portability built-in.
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
        title="SaaS Technology Stack"
        subtitle="Modern, scalable technologies for enterprise-grade SaaS"
        filterSlugs={[
          // Frontend
          'react', 'nextjs', 'typescript',
          // Backend
          'nodejs', 'python', 'graphql',
          // Database
          'postgresql', 'mongodb', 'redis',
          // Cloud
          'aws', 'docker', 'kubernetes'
        ]}
        showStats={true}
      />

      {/* Process */}
      <ProcessSteps
        title="Our SaaS Development Process"
        description="From idea to launch and beyond"
        steps={processSteps}
      />

      {/* Use Cases - Card Deck Layout */}
      <section className="relative py-32 border-t border-border overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent"></div>
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <div className="max-w-3xl mb-20">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
              <span className="px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-sm font-semibold text-blue-500">
                SaaS Applications
              </span>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent via-blue-500 to-transparent"></div>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              SaaS Products{' '}
              <span className="relative inline-block">
                <span className="relative z-10 text-transparent bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 bg-clip-text">
                  We Build
                </span>
                <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 200 12" fill="none">
                  <path d="M0 6C50 0 150 12 200 6" stroke="url(#gradient-saas)" strokeWidth="2"/>
                  <defs>
                    <linearGradient id="gradient-saas" x1="0" y1="0" x2="200" y2="0">
                      <stop offset="0%" stopColor="rgb(59, 130, 246)" />
                      <stop offset="50%" stopColor="rgb(6, 182, 212)" />
                      <stop offset="100%" stopColor="rgb(20, 184, 166)" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              From project management to marketing automation
            </p>
          </div>

          {/* Card Deck */}
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Project Management */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              <div className="relative h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 backdrop-blur-sm border border-blue-500/10 rounded-3xl transform translate-x-2 translate-y-2"></div>
                
                <div className="relative bg-background/95 backdrop-blur-xl border border-blue-500/20 rounded-3xl p-8 lg:p-10 overflow-hidden group-hover:border-blue-500/40 transition-all duration-300">
                  <div className="absolute top-4 right-4 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl"></div>
                  
                  <div className="relative z-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                      </svg>
                    </div>
                    
                    <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-foreground">Project Management Tools</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                      Task boards, Gantt charts, time tracking, team collaboration, file sharing, and resource management for modern teams.
                    </p>
                    
                    <div className="relative h-40 rounded-xl overflow-hidden mb-6">
                      <img 
                        src="https://picsum.photos/seed/project-management-saas/600/300" 
                        alt="Project Management"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-500/80 to-transparent"></div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1.5 bg-blue-500/10 border border-blue-500/30 rounded-full text-xs font-medium text-blue-400">
                        Kanban
                      </span>
                      <span className="px-3 py-1.5 bg-blue-500/10 border border-blue-500/30 rounded-full text-xs font-medium text-blue-400">
                        Time Tracking
                      </span>
                      <span className="px-3 py-1.5 bg-blue-500/10 border border-blue-500/30 rounded-full text-xs font-medium text-blue-400">
                        Collaboration
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CRM & Sales */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              <div className="relative h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 backdrop-blur-sm border border-green-500/10 rounded-3xl transform translate-x-2 translate-y-2"></div>
                
                <div className="relative bg-background/95 backdrop-blur-xl border border-green-500/20 rounded-3xl p-8 lg:p-10 overflow-hidden group-hover:border-green-500/40 transition-all duration-300">
                  <div className="absolute bottom-4 left-4 w-40 h-40 bg-green-500/5 rounded-full blur-2xl"></div>
                  
                  <div className="relative z-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-foreground">CRM & Sales Platforms</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                      Lead management, pipeline tracking, email automation, customer insights, and sales analytics in one platform.
                    </p>
                    
                    <div className="grid grid-cols-2 gap-2 mb-6">
                      <div className="relative h-20 rounded-lg overflow-hidden bg-green-500/10 border border-green-500/20 flex items-center justify-center">
                        <span className="text-xs font-bold text-green-400">Pipeline</span>
                      </div>
                      <div className="relative h-20 rounded-lg overflow-hidden bg-green-500/10 border border-green-500/20 flex items-center justify-center">
                        <span className="text-xs font-bold text-green-400">Automation</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1.5 bg-green-500/10 border border-green-500/30 rounded-full text-xs font-medium text-green-400">
                        Lead Scoring
                      </span>
                      <span className="px-3 py-1.5 bg-green-500/10 border border-green-500/30 rounded-full text-xs font-medium text-green-400">
                        Email Tracking
                      </span>
                      <span className="px-3 py-1.5 bg-green-500/10 border border-green-500/30 rounded-full text-xs font-medium text-green-400">
                        Reports
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Marketing Automation */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              <div className="relative h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 backdrop-blur-sm border border-purple-500/10 rounded-3xl transform translate-x-2 translate-y-2"></div>
                
                <div className="relative bg-background/95 backdrop-blur-xl border border-purple-500/20 rounded-3xl p-8 lg:p-10 overflow-hidden group-hover:border-purple-500/40 transition-all duration-300">
                  <div className="absolute top-4 left-4 w-32 h-32 bg-purple-500/5 rounded-full blur-2xl"></div>
                  
                  <div className="relative z-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Zap className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-foreground">Marketing Automation</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                      Email campaigns, drip sequences, A/B testing, landing pages, and analytics to automate your marketing funnel.
                    </p>
                    
                    <div className="relative h-32 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl p-4 mb-6 border border-purple-500/20">
                      <div className="space-y-2">
                        <div className="h-4 bg-purple-500/20 rounded w-3/4"></div>
                        <div className="h-4 bg-purple-500/20 rounded w-full"></div>
                        <div className="h-4 bg-purple-500/20 rounded w-5/6"></div>
                        <div className="h-4 bg-purple-500/20 rounded w-2/3"></div>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1.5 bg-purple-500/10 border border-purple-500/30 rounded-full text-xs font-medium text-purple-400">
                        Campaigns
                      </span>
                      <span className="px-3 py-1.5 bg-purple-500/10 border border-purple-500/30 rounded-full text-xs font-medium text-purple-400">
                        Workflows
                      </span>
                      <span className="px-3 py-1.5 bg-purple-500/10 border border-purple-500/30 rounded-full text-xs font-medium text-purple-400">
                        A/B Testing
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Analytics & BI */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-amber-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              <div className="relative h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-amber-500/5 backdrop-blur-sm border border-orange-500/10 rounded-3xl transform translate-x-2 translate-y-2"></div>
                
                <div className="relative bg-background/95 backdrop-blur-xl border border-orange-500/20 rounded-3xl p-8 lg:p-10 overflow-hidden group-hover:border-orange-500/40 transition-all duration-300">
                  <div className="absolute bottom-4 right-4 w-40 h-40 bg-orange-500/5 rounded-full blur-2xl"></div>
                  
                  <div className="relative z-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                      <BarChart3 className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-foreground">Analytics & BI Tools</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                      Custom dashboards, data visualization, SQL querying, report scheduling, and embedded analytics for your customers.
                    </p>
                    
                    <div className="grid grid-cols-3 gap-3 mb-6">
                      <div className="aspect-square bg-gradient-to-br from-orange-500/10 to-amber-500/10 rounded-xl border border-orange-500/20 flex items-center justify-center">
                        <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                      <div className="aspect-square bg-gradient-to-br from-orange-500/10 to-amber-500/10 rounded-xl border border-orange-500/20 flex items-center justify-center">
                        <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                        </svg>
                      </div>
                      <div className="aspect-square bg-gradient-to-br from-orange-500/10 to-amber-500/10 rounded-xl border border-orange-500/20 flex items-center justify-center">
                        <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                        </svg>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1.5 bg-orange-500/10 border border-orange-500/30 rounded-full text-xs font-medium text-orange-400">
                        Dashboards
                      </span>
                      <span className="px-3 py-1.5 bg-orange-500/10 border border-orange-500/30 rounded-full text-xs font-medium text-orange-400">
                        Reports
                      </span>
                      <span className="px-3 py-1.5 bg-orange-500/10 border border-orange-500/30 rounded-full text-xs font-medium text-orange-400">
                        Visualizations
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
                SaaS Platforms We've Built
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                See our scalable SaaS products in action
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
                Trusted by startups and enterprises for scalable SaaS
              </p>
            </div>
            
            <TestimonialsCarousel testimonials={testimonials} />
          </div>
        </section>
      )}

      {/* Final CTA */}
      <CTASection 
        title="Ready to Launch Your SaaS?"
        description="Build a scalable, profitable SaaS platform that customers love. Get started with a free consultation and bring your SaaS vision to life."
        primaryButtonText="Start SaaS Project"
        primaryButtonLink="/contact"
        secondaryButtonText="Get Free Consultation"
        secondaryButtonLink="/contact"
        showContactInfo={true}
      />
    </main>
  )
}
