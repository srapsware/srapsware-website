import { Metadata } from 'next'
import { PageHero } from '@/components/sections/page-hero'
import { ProcessSteps } from '@/components/sections/process-steps'
import { TestimonialsCarousel } from '@/components/sections/testimonials-carousel'
import { PortfolioSlider } from '@/components/sections/portfolio-slider'
import { CTASection } from '@/components/sections/cta-section'
import TechShowcase from '@/components/animations/tech-showcase'
import { getFeaturedPortfolio, getTechnologies, getFeaturedTestimonials } from '@/lib/content'
import { Building2, Network, Shield, Zap, Database, RefreshCw } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Enterprise Software Solutions | Custom Business Applications | Srapsware',
  description: 'Enterprise software development services. Custom ERP, CRM integration, legacy modernization, and scalable business applications for large organizations.',
  openGraph: {
    title: 'Enterprise Software Development Services',
    description: 'Scalable, secure enterprise solutions for modern businesses',
    type: 'website',
  }
}

export default function EnterpriseSolutionsPage() {
  const portfolioProjects = getFeaturedPortfolio()
  const technologies = getTechnologies()
  const testimonials = getFeaturedTestimonials()

  const processSteps = [
    {
      number: 1,
      title: 'Discovery & Analysis',
      description: 'Understand business processes, identify pain points, stakeholder interviews, and requirements gathering.',
      duration: '2-3 weeks',
      icon: 'Search'
    },
    {
      number: 2,
      title: 'Architecture Design',
      description: 'Design scalable system architecture, integration patterns, data models, and technology stack selection.',
      duration: '3-4 weeks',
      icon: 'Layout'
    },
    {
      number: 3,
      title: 'Development & Customization',
      description: 'Agile development sprints, custom module creation, API development, and UI/UX implementation.',
      duration: '12-20 weeks',
      icon: 'Code'
    },
    {
      number: 4,
      title: 'System Integration',
      description: 'Integrate with existing systems (ERP, CRM, databases), third-party APIs, and legacy applications.',
      duration: '4-6 weeks',
      icon: 'GitBranch'
    },
    {
      number: 5,
      title: 'Testing & QA',
      description: 'Comprehensive testing, load testing, security audits, user acceptance testing, and performance optimization.',
      duration: '3-4 weeks',
      icon: 'CheckCircle'
    },
    {
      number: 6,
      title: 'Deployment & Support',
      description: 'Production deployment, user training, documentation, ongoing maintenance, and continuous improvement.',
      duration: 'Ongoing',
      icon: 'Rocket'
    }
  ]

  return (
    <main>
      {/* Hero Section */}
      <PageHero
        badge="Enterprise Solutions"
        title="Enterprise-Grade Software Solutions"
        description="Build powerful, scalable business applications that transform operations. Custom ERP systems, CRM integration, legacy modernization, and enterprise software that drives growth."
        ctaPrimary={{
          text: 'Start Enterprise Project',
          href: '/contact'
        }}
        ctaSecondary={{
          text: 'View Enterprise Portfolio',
          href: '/portfolio'
        }}
      />

      {/* Overview Section - Creative Magazine Layout */}
      <section className="relative py-32 border-t border-border overflow-hidden">
        {/* Floating Background Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4">
          {/* Dynamic Title */}
          <div className="relative mb-20">
            <div className="absolute -top-10 -right-10 w-32 h-32 border-4 border-blue-500/20 rounded-full hidden lg:block"></div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="block text-foreground">Software That Scales</span>
              <span className="block mt-2 bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 bg-clip-text text-transparent">
                With Your Business
              </span>
            </h2>
          </div>

          {/* First Section - Diagonal Split */}
          <div className="relative mb-32">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              {/* Large Image - Diagonal Cut */}
              <div className="lg:col-span-7 relative">
                <div className="relative h-[400px] lg:h-[500px] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 opacity-50" 
                       style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)' }}></div>
                  <img 
                    src="https://picsum.photos/seed/enterprise-software/900/600" 
                    alt="Enterprise Software Solutions"
                    className="w-full h-full object-cover"
                    style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)' }}
                  />
                  {/* Floating Badge */}
                  <div className="absolute top-8 right-8 bg-background/90 backdrop-blur-md border border-blue-500/30 rounded-full px-6 py-3 shadow-xl">
                    <span className="text-sm font-bold text-blue-500">Fortune 500 Trusted</span>
                  </div>
                </div>
              </div>
              
              {/* Text Content - Overlapping */}
              <div className="lg:col-span-5 lg:-ml-20 relative z-10">
                <div className="bg-background/95 backdrop-blur-xl border border-border rounded-3xl p-8 lg:p-10 shadow-2xl">
                  <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mb-6"></div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground">Built For Enterprise Scale</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Enterprise applications demand robust architecture, seamless integration, and bulletproof security. We build mission-critical software that handles millions of transactions, integrates with legacy systems, and scales with your organization.
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
                  <div className="absolute -top-6 -left-6 w-24 h-24 bg-indigo-500/10 rounded-lg -z-10"></div>
                  <div className="bg-gradient-to-br from-background via-background to-indigo-900/5 backdrop-blur-xl border border-border rounded-3xl p-8 lg:p-10 shadow-2xl">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse"></div>
                      <div className="w-3 h-3 rounded-full bg-indigo-500 animate-pulse delay-100"></div>
                      <div className="w-3 h-3 rounded-full bg-violet-500 animate-pulse delay-200"></div>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-foreground">Seamless Integration</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Connect your entire technology ecosystem. We integrate with SAP, Salesforce, Oracle, Microsoft Dynamics, legacy databases, and custom APIs - ensuring data flows seamlessly across your organization.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Image Grid - Right Side */}
              <div className="lg:col-span-7 lg:-mr-20 relative order-1 lg:order-2">
                <div className="grid grid-cols-2 gap-4 h-[500px]">
                  <div className="row-span-2 rounded-2xl overflow-hidden relative group">
                    <img 
                      src="https://picsum.photos/seed/erp-systems/400/650" 
                      alt="ERP Systems"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="rounded-2xl overflow-hidden relative group">
                    <img 
                      src="https://picsum.photos/seed/crm-integration/400/320" 
                      alt="CRM Integration"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/80 to-transparent"></div>
                  </div>
                  <div className="rounded-2xl overflow-hidden relative group">
                    <img 
                      src="https://picsum.photos/seed/legacy-systems/400/320" 
                      alt="Legacy Modernization"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tl from-violet-500/80 to-transparent"></div>
                    <div className="absolute bottom-4 right-4 bg-white text-black text-xs font-bold px-3 py-1 rounded-full">
                      Legacy Ready
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Third Section - Full Width Stats */}
          <div className="relative">
            <div className="bg-gradient-to-br from-background via-blue-500/5 to-indigo-900/10 rounded-[3rem] overflow-hidden border border-border shadow-2xl">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Left - Text with Stats */}
                <div className="p-12 lg:p-16 flex flex-col justify-center relative">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500"></div>
                  
                  <h3 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight">
                    Performance At{' '}
                    <span className="text-blue-500">Enterprise Scale</span>
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                    Handle millions of users, billions of records, and complex business logic. Our enterprise solutions are built for high availability, fault tolerance, and peak performance under load.
                  </p>
                  
                  {/* Stats Grid */}
                  <div className="grid grid-cols-3 gap-6 mb-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-500 mb-2">99.99%</div>
                      <div className="text-sm text-muted-foreground">Uptime SLA</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-indigo-500 mb-2">10M+</div>
                      <div className="text-sm text-muted-foreground">Users Served</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-violet-500 mb-2">24/7</div>
                      <div className="text-sm text-muted-foreground">Support</div>
                    </div>
                  </div>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-sm font-medium">
                      Scalable
                    </span>
                    <span className="px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-sm font-medium">
                      Secure
                    </span>
                    <span className="px-4 py-2 bg-violet-500/10 border border-violet-500/20 rounded-full text-sm font-medium">
                      High Availability
                    </span>
                  </div>
                </div>
                
                {/* Right - Large Hero Image */}
                <div className="relative h-[400px] lg:h-auto min-h-[500px]">
                  <img 
                    src="https://picsum.photos/seed/enterprise-scale/700/700" 
                    alt="Enterprise Scale"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-background via-transparent to-transparent lg:from-background/50"></div>
                  
                  {/* Floating Card */}
                  <div className="absolute bottom-8 right-8 bg-background/95 backdrop-blur-xl border border-border rounded-2xl p-6 shadow-2xl max-w-xs hidden lg:block">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center text-white font-bold">
                        <Building2 className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="font-bold text-foreground mb-1">Enterprise Ready</div>
                        <div className="text-sm text-muted-foreground">Built for mission-critical operations</div>
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(99,102,241,0.05),transparent_50%)]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <div className="max-w-3xl mb-16">
            <div className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-sm font-semibold text-blue-500 mb-6">
              Enterprise Capabilities
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              What We Build For
              <span className="block text-transparent bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text">
                Enterprise Organizations
              </span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Mission-critical software for complex business operations
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid lg:grid-cols-12 gap-6">
            {/* Scalable Architecture - Large Featured */}
            <div className="lg:col-span-8 relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              <div className="relative h-full bg-gradient-to-br from-blue-950/40 to-indigo-950/40 backdrop-blur-xl border border-blue-500/20 rounded-3xl p-8 lg:p-12 overflow-hidden group-hover:border-blue-500/40 transition-all duration-300">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Network className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4 text-foreground">Scalable Architecture</h3>
                  <p className="text-lg text-muted-foreground mb-8">
                    Microservices, distributed systems, load balancing, and horizontal scaling. Architecture that grows with your business from 100 to 10 million users.
                  </p>
                  <div className="relative h-48 rounded-2xl overflow-hidden">
                    <img 
                      src="https://picsum.photos/seed/scalable-architecture/700/300" 
                      alt="Scalable Architecture"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 flex items-center gap-4">
                      <div className="bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">Microservices</div>
                      <div className="bg-indigo-500 text-white text-xs font-bold px-3 py-1 rounded-full">Load Balancing</div>
                      <div className="bg-white/10 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full">Auto-Scaling</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Integration Hub - Tall Card */}
            <div className="lg:col-span-4 lg:row-span-2 relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 to-purple-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              <div className="relative h-full bg-gradient-to-br from-violet-950/40 to-purple-950/40 backdrop-blur-xl border border-violet-500/20 rounded-3xl p-8 overflow-hidden group-hover:border-violet-500/40 transition-all duration-300">
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-violet-500/10 rounded-full blur-3xl"></div>
                <div className="relative z-10 h-full flex flex-col">
                  <div className="w-14 h-14 bg-gradient-to-br from-violet-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6">
                    <RefreshCw className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground">Integration Hub</h3>
                  <p className="text-base text-muted-foreground mb-6">
                    Connect all your enterprise systems. SAP, Salesforce, Oracle, Microsoft Dynamics, custom APIs, and legacy applications.
                  </p>
                  <div className="mt-auto space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-violet-500/5 rounded-lg border border-violet-500/10">
                      <div className="w-2 h-2 bg-violet-500 rounded-full"></div>
                      <span className="text-sm">ERP Integration</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-violet-500/5 rounded-lg border border-violet-500/10">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-sm">CRM Connectivity</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-violet-500/5 rounded-lg border border-violet-500/10">
                      <div className="w-2 h-2 bg-fuchsia-500 rounded-full"></div>
                      <span className="text-sm">Legacy Systems</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Security & Compliance */}
            <div className="lg:col-span-4 relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative h-full bg-gradient-to-br from-red-950/40 to-orange-950/40 backdrop-blur-xl border border-red-500/20 rounded-3xl p-6 overflow-hidden group-hover:border-red-500/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Security & Compliance</h3>
                <p className="text-sm text-muted-foreground">
                  Enterprise-grade security with SOC 2, HIPAA, GDPR compliance. Role-based access control, audit logging, encryption at rest and in transit.
                </p>
              </div>
            </div>

            {/* High Availability */}
            <div className="lg:col-span-4 relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative h-full bg-gradient-to-br from-green-950/40 to-emerald-950/40 backdrop-blur-xl border border-green-500/20 rounded-3xl p-6 overflow-hidden group-hover:border-green-500/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">High Availability</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  99.99% uptime SLA with multi-region deployment, automatic failover, and disaster recovery. Your business never stops.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-green-500/10 border border-green-500/30 rounded text-xs">Multi-Region</span>
                  <span className="px-2 py-1 bg-green-500/10 border border-green-500/30 rounded text-xs">Failover</span>
                  <span className="px-2 py-1 bg-green-500/10 border border-green-500/30 rounded text-xs">DR Ready</span>
                </div>
              </div>
            </div>

            {/* Custom Development & Data Management - Wide Card */}
            <div className="lg:col-span-8 relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-indigo-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              <div className="relative h-full bg-gradient-to-r from-cyan-950/40 via-blue-950/40 to-indigo-950/40 backdrop-blur-xl border border-cyan-500/20 rounded-3xl overflow-hidden group-hover:border-cyan-500/40 transition-all duration-300">
                <div className="grid md:grid-cols-2 gap-0 h-full">
                  {/* Custom Development Side */}
                  <div className="p-8 flex flex-col justify-center border-r border-cyan-500/10">
                    <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-foreground">Custom Development</h3>
                    <p className="text-base text-muted-foreground">
                      Tailored solutions for unique business processes. Custom workflows, modules, dashboards, and integrations that match your exact needs.
                    </p>
                  </div>
                  
                  {/* Data Management Side */}
                  <div className="relative p-8 flex flex-col justify-center">
                    <div className="absolute inset-0">
                      <img 
                        src="https://picsum.photos/seed/data-warehouse/500/400" 
                        alt="Data Management"
                        className="w-full h-full object-cover opacity-20"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-indigo-950/80 to-indigo-950/40"></div>
                    </div>
                    <div className="relative z-10">
                      <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-violet-500 rounded-2xl flex items-center justify-center mb-6">
                        <Database className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold mb-3 text-foreground">Data Warehousing</h3>
                      <p className="text-base text-muted-foreground">
                        Centralized data repositories, ETL pipelines, business intelligence, and analytics. Turn data into actionable insights.
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
        title="Enterprise Technology Stack"
        subtitle="Proven technologies for mission-critical applications"
        filterSlugs={[
          // Backend
          'nodejs', 'python', 'php',
          // Databases
          'postgresql', 'mongodb', 'mysql', 'redis',
          // Cloud & Infrastructure
          'aws', 'docker', 'kubernetes',
          // Frontend
          'react', 'nextjs', 'typescript',
          // Integration
          'graphql'
        ]}
        showStats={true}
      />

      {/* Process */}
      <ProcessSteps
        title="Our Enterprise Development Process"
        description="From discovery to deployment and beyond"
        steps={processSteps}
      />

      {/* Use Cases - Card Deck Layout */}
      <section className="relative py-32 border-t border-border overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent"></div>
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <div className="max-w-3xl mb-20">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
              <span className="px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-sm font-semibold text-blue-500">
                Enterprise Use Cases
              </span>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent via-blue-500 to-transparent"></div>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Enterprise Software{' '}
              <span className="relative inline-block">
                <span className="relative z-10 text-transparent bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 bg-clip-text">
                  We Build
                </span>
                <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 200 12" fill="none">
                  <path d="M0 6C50 0 150 12 200 6" stroke="url(#gradient-enterprise)" strokeWidth="2"/>
                  <defs>
                    <linearGradient id="gradient-enterprise" x1="0" y1="0" x2="200" y2="0">
                      <stop offset="0%" stopColor="rgb(59, 130, 246)" />
                      <stop offset="50%" stopColor="rgb(99, 102, 241)" />
                      <stop offset="100%" stopColor="rgb(139, 92, 246)" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Solutions that transform how large organizations operate
            </p>
          </div>

          {/* Card Deck */}
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Custom ERP Systems */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              <div className="relative h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 backdrop-blur-sm border border-blue-500/10 rounded-3xl transform translate-x-2 translate-y-2"></div>
                
                <div className="relative bg-background/95 backdrop-blur-xl border border-blue-500/20 rounded-3xl p-8 lg:p-10 overflow-hidden group-hover:border-blue-500/40 transition-all duration-300">
                  <div className="absolute top-4 right-4 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl"></div>
                  
                  <div className="relative z-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Building2 className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-foreground">Custom ERP Systems</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                      Build ERP systems tailored to your industry. Inventory management, supply chain, finance, HR, and manufacturing modules integrated into one platform.
                    </p>
                    
                    <div className="relative h-40 rounded-xl overflow-hidden mb-6">
                      <img 
                        src="https://picsum.photos/seed/erp-custom/600/300" 
                        alt="Custom ERP Systems"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-500/80 to-transparent"></div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1.5 bg-blue-500/10 border border-blue-500/30 rounded-full text-xs font-medium text-blue-400">
                        Inventory
                      </span>
                      <span className="px-3 py-1.5 bg-blue-500/10 border border-blue-500/30 rounded-full text-xs font-medium text-blue-400">
                        Finance
                      </span>
                      <span className="px-3 py-1.5 bg-blue-500/10 border border-blue-500/30 rounded-full text-xs font-medium text-blue-400">
                        Supply Chain
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CRM Integration */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 to-purple-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              <div className="relative h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-purple-500/5 backdrop-blur-sm border border-violet-500/10 rounded-3xl transform translate-x-2 translate-y-2"></div>
                
                <div className="relative bg-background/95 backdrop-blur-xl border border-violet-500/20 rounded-3xl p-8 lg:p-10 overflow-hidden group-hover:border-violet-500/40 transition-all duration-300">
                  <div className="absolute bottom-4 left-4 w-40 h-40 bg-violet-500/5 rounded-full blur-2xl"></div>
                  
                  <div className="relative z-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-violet-500 to-purple-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                      <RefreshCw className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-foreground">CRM Integration & Enhancement</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                      Integrate and extend Salesforce, HubSpot, Microsoft Dynamics. Custom fields, workflows, automation, and third-party integrations.
                    </p>
                    
                    <div className="grid grid-cols-2 gap-2 mb-6">
                      <div className="relative h-20 rounded-lg overflow-hidden bg-violet-500/10 border border-violet-500/20 flex items-center justify-center">
                        <span className="text-xs font-bold text-violet-400">Salesforce</span>
                      </div>
                      <div className="relative h-20 rounded-lg overflow-hidden bg-violet-500/10 border border-violet-500/20 flex items-center justify-center">
                        <span className="text-xs font-bold text-violet-400">Dynamics</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1.5 bg-violet-500/10 border border-violet-500/30 rounded-full text-xs font-medium text-violet-400">
                        Custom Objects
                      </span>
                      <span className="px-3 py-1.5 bg-violet-500/10 border border-violet-500/30 rounded-full text-xs font-medium text-violet-400">
                        Workflows
                      </span>
                      <span className="px-3 py-1.5 bg-violet-500/10 border border-violet-500/30 rounded-full text-xs font-medium text-violet-400">
                        API Integration
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Legacy Modernization */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-amber-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              <div className="relative h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-amber-500/5 backdrop-blur-sm border border-orange-500/10 rounded-3xl transform translate-x-2 translate-y-2"></div>
                
                <div className="relative bg-background/95 backdrop-blur-xl border border-orange-500/20 rounded-3xl p-8 lg:p-10 overflow-hidden group-hover:border-orange-500/40 transition-all duration-300">
                  <div className="absolute top-4 left-4 w-32 h-32 bg-orange-500/5 rounded-full blur-2xl"></div>
                  
                  <div className="relative z-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                    </div>
                    
                    <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-foreground">Legacy System Modernization</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                      Migrate from mainframes, COBOL, and outdated systems to modern architecture. Phased migration with zero downtime and data integrity.
                    </p>
                    
                    <div className="relative h-32 bg-gradient-to-br from-orange-500/10 to-amber-500/10 rounded-xl p-4 mb-6 border border-orange-500/20">
                      <div className="space-y-2">
                        <div className="h-4 bg-orange-500/20 rounded w-3/4"></div>
                        <div className="h-4 bg-orange-500/20 rounded w-full"></div>
                        <div className="h-4 bg-orange-500/20 rounded w-5/6"></div>
                        <div className="h-4 bg-orange-500/20 rounded w-2/3"></div>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1.5 bg-orange-500/10 border border-orange-500/30 rounded-full text-xs font-medium text-orange-400">
                        Phased Migration
                      </span>
                      <span className="px-3 py-1.5 bg-orange-500/10 border border-orange-500/30 rounded-full text-xs font-medium text-orange-400">
                        Zero Downtime
                      </span>
                      <span className="px-3 py-1.5 bg-orange-500/10 border border-orange-500/30 rounded-full text-xs font-medium text-orange-400">
                        Data Migration
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Intelligence & Analytics */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-teal-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              <div className="relative h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-teal-500/5 backdrop-blur-sm border border-cyan-500/10 rounded-3xl transform translate-x-2 translate-y-2"></div>
                
                <div className="relative bg-background/95 backdrop-blur-xl border border-cyan-500/20 rounded-3xl p-8 lg:p-10 overflow-hidden group-hover:border-cyan-500/40 transition-all duration-300">
                  <div className="absolute bottom-4 right-4 w-40 h-40 bg-cyan-500/5 rounded-full blur-2xl"></div>
                  
                  <div className="relative z-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    
                    <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-foreground">BI & Data Analytics</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                      Data warehouses, ETL pipelines, real-time dashboards, and predictive analytics. Transform data into strategic insights with Power BI, Tableau, and custom solutions.
                    </p>
                    
                    <div className="grid grid-cols-3 gap-3 mb-6">
                      <div className="aspect-square bg-gradient-to-br from-cyan-500/10 to-teal-500/10 rounded-xl border border-cyan-500/20 flex items-center justify-center">
                        <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div className="aspect-square bg-gradient-to-br from-cyan-500/10 to-teal-500/10 rounded-xl border border-cyan-500/20 flex items-center justify-center">
                        <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                        </svg>
                      </div>
                      <div className="aspect-square bg-gradient-to-br from-cyan-500/10 to-teal-500/10 rounded-xl border border-cyan-500/20 flex items-center justify-center">
                        <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1.5 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-xs font-medium text-cyan-400">
                        ETL Pipelines
                      </span>
                      <span className="px-3 py-1.5 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-xs font-medium text-cyan-400">
                        Dashboards
                      </span>
                      <span className="px-3 py-1.5 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-xs font-medium text-cyan-400">
                        Predictive
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
                Enterprise Solutions We've Delivered
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                See our enterprise software in action
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
                Trusted by enterprises for mission-critical software
              </p>
            </div>
            
            <TestimonialsCarousel testimonials={testimonials} />
          </div>
        </section>
      )}

      {/* Final CTA */}
      <CTASection 
        title="Ready to Build Your Enterprise Solution?"
        description="Transform your business operations with custom enterprise software. Get started with a free consultation and discover how we can modernize your systems."
        primaryButtonText="Start Enterprise Project"
        primaryButtonLink="/contact"
        secondaryButtonText="Get Free Consultation"
        secondaryButtonLink="/contact"
        showContactInfo={true}
      />
    </main>
  )
}
