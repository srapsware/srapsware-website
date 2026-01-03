import { Metadata } from 'next'
import { PageHero } from '@/components/sections/page-hero'
import { ProcessSteps } from '@/components/sections/process-steps'
import { TestimonialsCarousel } from '@/components/sections/testimonials-carousel'
import { PortfolioSlider } from '@/components/sections/portfolio-slider'
import { CTASection } from '@/components/sections/cta-section'
import TechShowcase from '@/components/animations/tech-showcase'
import { getFeaturedPortfolio, getTechnologies, getFeaturedTestimonials } from '@/lib/content'
import { Zap, RefreshCw, GitBranch, Clock, TrendingUp, Bot } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Business Process Automation | Workflow Automation Services | Srapsware',
  description: 'Expert business process automation services. Automate workflows, integrate systems, eliminate manual tasks, and boost productivity with custom automation solutions.',
  openGraph: {
    title: 'Business Process Automation Services',
    description: 'Automate repetitive tasks and streamline your business operations',
    type: 'website',
  }
}

export default function AutomationSolutionsPage() {
  const portfolioProjects = getFeaturedPortfolio()
  const technologies = getTechnologies()
  const testimonials = getFeaturedTestimonials()

  const processSteps = [
    {
      number: 1,
      title: 'Process Discovery',
      description: 'Analyze current workflows, identify bottlenecks, manual tasks, and automation opportunities for maximum ROI.',
      duration: '1-2 weeks',
      icon: 'Search'
    },
    {
      number: 2,
      title: 'Automation Design',
      description: 'Design automated workflows, system integrations, data mapping, error handling, and notification strategies.',
      duration: '2-3 weeks',
      icon: 'Layout'
    },
    {
      number: 3,
      title: 'Development & Integration',
      description: 'Build automation workflows, integrate APIs, create custom connectors, and implement business logic.',
      duration: '4-8 weeks',
      icon: 'Code'
    },
    {
      number: 4,
      title: 'Testing & Validation',
      description: 'Test automation flows, validate data accuracy, stress test under load, and ensure error handling works.',
      duration: '1-2 weeks',
      icon: 'CheckCircle'
    },
    {
      number: 5,
      title: 'Deployment & Training',
      description: 'Deploy to production, train team members, create documentation, and establish monitoring alerts.',
      duration: '1 week',
      icon: 'Rocket'
    },
    {
      number: 6,
      title: 'Optimization & Support',
      description: 'Monitor performance, optimize workflows, add new automations, and provide ongoing support.',
      duration: 'Ongoing',
      icon: 'TrendingUp'
    }
  ]

  return (
    <main>
      {/* Hero Section */}
      <PageHero
        badge="Business Automation"
        title="Automate Your Business Processes"
        description="Eliminate manual tasks, integrate systems, and streamline operations with intelligent automation. Save time, reduce errors, and focus on what matters most - growing your business."
        ctaPrimary={{
          text: 'Start Automation Project',
          href: '/contact'
        }}
        ctaSecondary={{
          text: 'See Automation Examples',
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
              <span className="block text-foreground">Work Smarter,</span>
              <span className="block mt-2 bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500 bg-clip-text text-transparent">
                Not Harder
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
                    src="https://picsum.photos/seed/automation-workflows/900/600" 
                    alt="Business Process Automation"
                    className="w-full h-full object-cover"
                    style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)' }}
                  />
                  {/* Floating Badge */}
                  <div className="absolute top-8 right-8 bg-background/90 backdrop-blur-md border border-violet-500/30 rounded-full px-6 py-3 shadow-xl">
                    <span className="text-sm font-bold text-violet-500">Automation Experts</span>
                  </div>
                </div>
              </div>
              
              {/* Text Content - Overlapping */}
              <div className="lg:col-span-5 lg:-ml-20 relative z-10">
                <div className="bg-background/95 backdrop-blur-xl border border-border rounded-3xl p-8 lg:p-10 shadow-2xl">
                  <div className="w-12 h-1 bg-gradient-to-r from-violet-500 to-purple-500 mb-6"></div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground">Automation That Actually Works</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Stop wasting hours on repetitive tasks. We automate data entry, report generation, email workflows, system integrations, and business processes - saving you 20+ hours per week per employee.
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
                    <h3 className="text-2xl font-bold mb-4 text-foreground">Connect Everything</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Integrate Salesforce with Slack, sync Shopify with QuickBooks, connect Gmail to your CRM - we make your tools talk to each other so data flows seamlessly across your business.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Image Grid - Right Side */}
              <div className="lg:col-span-7 lg:-mr-20 relative order-1 lg:order-2">
                <div className="grid grid-cols-2 gap-4 h-[500px]">
                  <div className="row-span-2 rounded-2xl overflow-hidden relative group">
                    <img 
                      src="https://picsum.photos/seed/workflow-automation/400/650" 
                      alt="Workflow Automation"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-violet-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="rounded-2xl overflow-hidden relative group">
                    <img 
                      src="https://picsum.photos/seed/api-integration/400/320" 
                      alt="API Integration"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/80 to-transparent"></div>
                  </div>
                  <div className="rounded-2xl overflow-hidden relative group">
                    <img 
                      src="https://picsum.photos/seed/data-sync/400/320" 
                      alt="Data Synchronization"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tl from-fuchsia-500/80 to-transparent"></div>
                    <div className="absolute bottom-4 right-4 bg-white text-black text-xs font-bold px-3 py-1 rounded-full">
                      Real-time Sync
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
                    Time Saved,{' '}
                    <span className="text-violet-500">Revenue Gained</span>
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                    Our automation solutions save an average of 25 hours per week per team. That's 1,300 hours per year - time your team can spend on revenue-generating activities instead of manual data entry.
                  </p>
                  
                  {/* Stats Grid */}
                  <div className="grid grid-cols-3 gap-6 mb-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-violet-500 mb-2">80%</div>
                      <div className="text-sm text-muted-foreground">Time Saved</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-500 mb-2">24/7</div>
                      <div className="text-sm text-muted-foreground">Automated</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-fuchsia-500 mb-2">99.9%</div>
                      <div className="text-sm text-muted-foreground">Accuracy</div>
                    </div>
                  </div>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-violet-500/10 border border-violet-500/20 rounded-full text-sm font-medium">
                      Zapier
                    </span>
                    <span className="px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-sm font-medium">
                      Make
                    </span>
                    <span className="px-4 py-2 bg-fuchsia-500/10 border border-fuchsia-500/20 rounded-full text-sm font-medium">
                      Custom APIs
                    </span>
                  </div>
                </div>
                
                {/* Right - Large Hero Image */}
                <div className="relative h-[400px] lg:h-auto min-h-[500px]">
                  <img 
                    src="https://picsum.photos/seed/automation-dashboard/700/700" 
                    alt="Automation Dashboard"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-background via-transparent to-transparent lg:from-background/50"></div>
                  
                  {/* Floating Card */}
                  <div className="absolute bottom-8 right-8 bg-background/95 backdrop-blur-xl border border-border rounded-2xl p-6 shadow-2xl max-w-xs hidden lg:block">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center text-white font-bold">
                        <Zap className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="font-bold text-foreground mb-1">Always Running</div>
                        <div className="text-sm text-muted-foreground">24/7 automation workflows</div>
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
              Automation Capabilities
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              What We Can
              <span className="block text-transparent bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text">
                Automate For You
              </span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              From simple workflows to complex integrations
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid lg:grid-cols-12 gap-6">
            {/* Workflow Automation - Large Featured */}
            <div className="lg:col-span-8 relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 to-purple-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              <div className="relative h-full bg-gradient-to-br from-violet-950/40 to-purple-950/40 backdrop-blur-xl border border-violet-500/20 rounded-3xl p-8 lg:p-12 overflow-hidden group-hover:border-violet-500/40 transition-all duration-300">
                <div className="absolute top-0 right-0 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <GitBranch className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4 text-foreground">Workflow Automation</h3>
                  <p className="text-lg text-muted-foreground mb-8">
                    Automate multi-step business processes with conditional logic, approvals, notifications, and error handling. From lead nurturing to invoice processing.
                  </p>
                  <div className="relative h-48 rounded-2xl overflow-hidden">
                    <img 
                      src="https://picsum.photos/seed/workflow-builder/700/300" 
                      alt="Workflow Automation"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-violet-950/80 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 flex items-center gap-4">
                      <div className="bg-violet-500 text-white text-xs font-bold px-3 py-1 rounded-full">Visual Builder</div>
                      <div className="bg-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full">If/Then Logic</div>
                      <div className="bg-white/10 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full">Multi-Step</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* API Integration - Tall Card */}
            <div className="lg:col-span-4 lg:row-span-2 relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              <div className="relative h-full bg-gradient-to-br from-blue-950/40 to-cyan-950/40 backdrop-blur-xl border border-blue-500/20 rounded-3xl p-8 overflow-hidden group-hover:border-blue-500/40 transition-all duration-300">
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl"></div>
                <div className="relative z-10 h-full flex flex-col">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
                    <RefreshCw className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground">System Integration</h3>
                  <p className="text-base text-muted-foreground mb-6">
                    Connect disparate systems via REST APIs, webhooks, and custom integrations. Real-time data sync across your tech stack.
                  </p>
                  <div className="mt-auto space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-blue-500/5 rounded-lg border border-blue-500/10">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-sm">REST APIs</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-blue-500/5 rounded-lg border border-blue-500/10">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                      <span className="text-sm">Webhooks</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-blue-500/5 rounded-lg border border-blue-500/10">
                      <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                      <span className="text-sm">Data Sync</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Email Automation */}
            <div className="lg:col-span-4 relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative h-full bg-gradient-to-br from-green-950/40 to-emerald-950/40 backdrop-blur-xl border border-green-500/20 rounded-3xl p-6 overflow-hidden group-hover:border-green-500/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Email Automation</h3>
                <p className="text-sm text-muted-foreground">
                  Automated email sequences, triggered campaigns, personalized messages, and follow-up workflows based on user behavior.
                </p>
              </div>
            </div>

            {/* Data Processing */}
            <div className="lg:col-span-4 relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-amber-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative h-full bg-gradient-to-br from-orange-950/40 to-amber-950/40 backdrop-blur-xl border border-orange-500/20 rounded-3xl p-6 overflow-hidden group-hover:border-orange-500/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Data Processing</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Extract, transform, and load data. Automated data cleaning, validation, enrichment, and report generation on schedule.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-orange-500/10 border border-orange-500/30 rounded text-xs">ETL</span>
                  <span className="px-2 py-1 bg-orange-500/10 border border-orange-500/30 rounded text-xs">Validation</span>
                  <span className="px-2 py-1 bg-orange-500/10 border border-orange-500/30 rounded text-xs">Reports</span>
                </div>
              </div>
            </div>

            {/* Scheduled Tasks & AI-Powered - Wide Card */}
            <div className="lg:col-span-8 relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 via-rose-500/20 to-red-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              <div className="relative h-full bg-gradient-to-r from-pink-950/40 via-rose-950/40 to-red-950/40 backdrop-blur-xl border border-pink-500/20 rounded-3xl overflow-hidden group-hover:border-pink-500/40 transition-all duration-300">
                <div className="grid md:grid-cols-2 gap-0 h-full">
                  {/* Scheduled Tasks Side */}
                  <div className="p-8 flex flex-col justify-center border-r border-pink-500/10">
                    <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center mb-6">
                      <Clock className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-foreground">Scheduled Automation</h3>
                    <p className="text-base text-muted-foreground">
                      Run tasks on schedule: daily reports, weekly backups, monthly invoicing. Cron jobs and time-based triggers for any frequency.
                    </p>
                  </div>
                  
                  {/* AI-Powered Side */}
                  <div className="relative p-8 flex flex-col justify-center">
                    <div className="absolute inset-0">
                      <img 
                        src="https://picsum.photos/seed/ai-automation/500/400" 
                        alt="AI-Powered Automation"
                        className="w-full h-full object-cover opacity-20"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-red-950/80 to-red-950/40"></div>
                    </div>
                    <div className="relative z-10">
                      <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6">
                        <Bot className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold mb-3 text-foreground">AI-Powered Automation</h3>
                      <p className="text-base text-muted-foreground">
                        Intelligent automation with AI: document classification, sentiment analysis, smart routing, and predictive workflows.
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
        title="Automation Technology Stack"
        subtitle="Modern tools for powerful automation workflows"
        filterSlugs={[
          // Backend for automation
          'nodejs', 'python',
          // Frontend for dashboards
          'react', 'nextjs', 'typescript',
          // Database
          'postgresql', 'mongodb', 'redis',
          // Cloud & APIs
          'aws', 'docker'
        ]}
        showStats={true}
      />

      {/* Process */}
      <ProcessSteps
        title="Our Automation Process"
        description="From discovery to deployment"
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
                Automation Examples
              </span>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent via-violet-500 to-transparent"></div>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Processes We{' '}
              <span className="relative inline-block">
                <span className="relative z-10 text-transparent bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500 bg-clip-text">
                  Automate
                </span>
                <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 200 12" fill="none">
                  <path d="M0 6C50 0 150 12 200 6" stroke="url(#gradient-automation)" strokeWidth="2"/>
                  <defs>
                    <linearGradient id="gradient-automation" x1="0" y1="0" x2="200" y2="0">
                      <stop offset="0%" stopColor="rgb(139, 92, 246)" />
                      <stop offset="50%" stopColor="rgb(168, 85, 247)" />
                      <stop offset="100%" stopColor="rgb(217, 70, 239)" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Real-world automation scenarios for every business
            </p>
          </div>

          {/* Card Deck */}
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Lead Management */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              <div className="relative h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 backdrop-blur-sm border border-blue-500/10 rounded-3xl transform translate-x-2 translate-y-2"></div>
                
                <div className="relative bg-background/95 backdrop-blur-xl border border-blue-500/20 rounded-3xl p-8 lg:p-10 overflow-hidden group-hover:border-blue-500/40 transition-all duration-300">
                  <div className="absolute top-4 right-4 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl"></div>
                  
                  <div className="relative z-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                      <TrendingUp className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-foreground">Lead Management Automation</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                      Automatically capture leads from forms, qualify them, assign to sales reps, send follow-up emails, and track in CRM. Never lose a lead again.
                    </p>
                    
                    <div className="relative h-40 rounded-xl overflow-hidden mb-6">
                      <img 
                        src="https://picsum.photos/seed/lead-automation/600/300" 
                        alt="Lead Management"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-500/80 to-transparent"></div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1.5 bg-blue-500/10 border border-blue-500/30 rounded-full text-xs font-medium text-blue-400">
                        Lead Capture
                      </span>
                      <span className="px-3 py-1.5 bg-blue-500/10 border border-blue-500/30 rounded-full text-xs font-medium text-blue-400">
                        CRM Sync
                      </span>
                      <span className="px-3 py-1.5 bg-blue-500/10 border border-blue-500/30 rounded-full text-xs font-medium text-blue-400">
                        Follow-ups
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Invoice Processing */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              <div className="relative h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 backdrop-blur-sm border border-green-500/10 rounded-3xl transform translate-x-2 translate-y-2"></div>
                
                <div className="relative bg-background/95 backdrop-blur-xl border border-green-500/20 rounded-3xl p-8 lg:p-10 overflow-hidden group-hover:border-green-500/40 transition-all duration-300">
                  <div className="absolute bottom-4 left-4 w-40 h-40 bg-green-500/5 rounded-full blur-2xl"></div>
                  
                  <div className="relative z-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    
                    <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-foreground">Invoice Processing</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                      Extract data from invoices via OCR, validate against purchase orders, route for approval, sync with accounting software, and schedule payments automatically.
                    </p>
                    
                    <div className="grid grid-cols-2 gap-2 mb-6">
                      <div className="relative h-20 rounded-lg overflow-hidden bg-green-500/10 border border-green-500/20 flex items-center justify-center">
                        <span className="text-xs font-bold text-green-400">OCR Extract</span>
                      </div>
                      <div className="relative h-20 rounded-lg overflow-hidden bg-green-500/10 border border-green-500/20 flex items-center justify-center">
                        <span className="text-xs font-bold text-green-400">Auto Approve</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1.5 bg-green-500/10 border border-green-500/30 rounded-full text-xs font-medium text-green-400">
                        OCR
                      </span>
                      <span className="px-3 py-1.5 bg-green-500/10 border border-green-500/30 rounded-full text-xs font-medium text-green-400">
                        Validation
                      </span>
                      <span className="px-3 py-1.5 bg-green-500/10 border border-green-500/30 rounded-full text-xs font-medium text-green-400">
                        Accounting Sync
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Customer Onboarding */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              <div className="relative h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 backdrop-blur-sm border border-purple-500/10 rounded-3xl transform translate-x-2 translate-y-2"></div>
                
                <div className="relative bg-background/95 backdrop-blur-xl border border-purple-500/20 rounded-3xl p-8 lg:p-10 overflow-hidden group-hover:border-purple-500/40 transition-all duration-300">
                  <div className="absolute top-4 left-4 w-32 h-32 bg-purple-500/5 rounded-full blur-2xl"></div>
                  
                  <div className="relative z-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                      </svg>
                    </div>
                    
                    <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-foreground">Customer Onboarding</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                      Automate welcome emails, account setup, training resources, progress tracking, and team notifications for seamless customer onboarding.
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
                        Welcome Series
                      </span>
                      <span className="px-3 py-1.5 bg-purple-500/10 border border-purple-500/30 rounded-full text-xs font-medium text-purple-400">
                        Progress Tracking
                      </span>
                      <span className="px-3 py-1.5 bg-purple-500/10 border border-purple-500/30 rounded-full text-xs font-medium text-purple-400">
                        Team Alerts
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Report Generation */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-amber-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              <div className="relative h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-amber-500/5 backdrop-blur-sm border border-orange-500/10 rounded-3xl transform translate-x-2 translate-y-2"></div>
                
                <div className="relative bg-background/95 backdrop-blur-xl border border-orange-500/20 rounded-3xl p-8 lg:p-10 overflow-hidden group-hover:border-orange-500/40 transition-all duration-300">
                  <div className="absolute bottom-4 right-4 w-40 h-40 bg-orange-500/5 rounded-full blur-2xl"></div>
                  
                  <div className="relative z-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    
                    <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-foreground">Automated Reporting</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                      Generate daily, weekly, or monthly reports automatically. Pull data from multiple sources, create visualizations, and email to stakeholders on schedule.
                    </p>
                    
                    <div className="grid grid-cols-3 gap-3 mb-6">
                      <div className="aspect-square bg-gradient-to-br from-orange-500/10 to-amber-500/10 rounded-xl border border-orange-500/20 flex items-center justify-center">
                        <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                      <div className="aspect-square bg-gradient-to-br from-orange-500/10 to-amber-500/10 rounded-xl border border-orange-500/20 flex items-center justify-center">
                        <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div className="aspect-square bg-gradient-to-br from-orange-500/10 to-amber-500/10 rounded-xl border border-orange-500/20 flex items-center justify-center">
                        <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1.5 bg-orange-500/10 border border-orange-500/30 rounded-full text-xs font-medium text-orange-400">
                        Scheduled
                      </span>
                      <span className="px-3 py-1.5 bg-orange-500/10 border border-orange-500/30 rounded-full text-xs font-medium text-orange-400">
                        Multi-Source
                      </span>
                      <span className="px-3 py-1.5 bg-orange-500/10 border border-orange-500/30 rounded-full text-xs font-medium text-orange-400">
                        Auto-Email
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
                Automation Solutions We've Built
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                See our automation workflows in action
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
                Trusted by businesses for time-saving automation
              </p>
            </div>
            
            <TestimonialsCarousel testimonials={testimonials} />
          </div>
        </section>
      )}

      {/* Final CTA */}
      <CTASection 
        title="Ready to Automate Your Business?"
        description="Stop wasting time on repetitive tasks. Get started with a free automation consultation and discover how much time and money you can save."
        primaryButtonText="Start Automation Project"
        primaryButtonLink="/contact"
        secondaryButtonText="Get Free Consultation"
        secondaryButtonLink="/contact"
        showContactInfo={true}
      />
    </main>
  )
}
