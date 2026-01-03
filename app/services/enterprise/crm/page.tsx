import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { 
  Users, 
  TrendingUp, 
  Mail, 
  Phone, 
  BarChart3,
  ArrowRight,
  CheckCircle2,
  Target,
  Workflow,
  Database,
  Globe,
  Zap
} from 'lucide-react'
import { cn } from '@/lib/utils'
import TechShowcase from '@/components/animations/tech-showcase'
import { PortfolioSlider } from '@/components/sections/portfolio-slider'
import { TestimonialsCarousel } from '@/components/sections/testimonials-carousel'
import { CTASection } from '@/components/sections/cta-section'
import { getFeaturedPortfolio, getTechnologies, getFeaturedTestimonials } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Custom CRM Development Services | Customer Relationship Management',
  description: 'Build custom CRM solutions tailored to your sales process. Lead management, pipeline tracking, automation, integrations, and analytics for growing businesses.',
  keywords: 'custom CRM development, CRM software, customer relationship management, sales CRM, lead management, pipeline tracking, CRM integration, Salesforce alternative',
  openGraph: {
    title: 'Custom CRM Development | Build Your Perfect Sales System',
    description: 'Custom CRM software that fits your exact workflow. No compromises, complete flexibility, better adoption.',
    type: 'website',
  }
}

export default function CRMPage() {
  const projects = getFeaturedPortfolio(6)
  const technologies = getTechnologies()
  const testimonials = getFeaturedTestimonials(6)

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <section className="border-b border-border bg-muted/30">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-foreground transition-colors">Services</Link>
            <span>/</span>
            <Link href="/services/enterprise" className="hover:text-foreground transition-colors">Enterprise</Link>
            <span>/</span>
            <span className="text-foreground font-medium">CRM Development</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-950/20 dark:via-indigo-950/20 dark:to-purple-950/20" />
        <div className="absolute inset-0 bg-grid-slate-900/[0.04] dark:bg-grid-slate-400/[0.05] bg-[size:32px_32px]" />
        
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-4 px-4 py-1.5 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
                💼 Enterprise Solutions
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Custom CRM Development
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                Build a CRM that matches your exact sales process. Custom workflows, automations, integrations, and analytics - designed around how your team actually works.
              </p>

              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center p-4 rounded-lg bg-white/50 dark:bg-black/20 backdrop-blur-sm border border-white/20">
                  <div className="text-3xl font-bold text-blue-600">95%</div>
                  <div className="text-sm text-muted-foreground">Adoption</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-white/50 dark:bg-black/20 backdrop-blur-sm border border-white/20">
                  <div className="text-3xl font-bold text-indigo-600">40%</div>
                  <div className="text-sm text-muted-foreground">More Sales</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-white/50 dark:bg-black/20 backdrop-blur-sm border border-white/20">
                  <div className="text-3xl font-bold text-purple-600">60%</div>
                  <div className="text-sm text-muted-foreground">Time Saved</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200"
                >
                  Build Your CRM
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link 
                  href="#features"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg font-semibold hover:bg-blue-50 dark:hover:bg-blue-950/30 transition-all duration-200"
                >
                  See Features
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 backdrop-blur-sm">
                <Image
                  src="https://picsum.photos/800/600?random=crm"
                  alt="Custom CRM Dashboard with Sales Pipeline and Analytics"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                  priority
                />
                <div className="absolute top-6 right-6 bg-white/90 dark:bg-black/90 backdrop-blur-md px-4 py-2 rounded-lg shadow-lg border border-white/20">
                  <div className="flex items-center space-x-2">
                    <Users className="w-5 h-5 text-blue-500 animate-pulse" />
                    <span className="font-semibold text-sm">Custom Built</span>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex items-center space-x-4 bg-white dark:bg-gray-900 px-6 py-3 rounded-full shadow-xl border border-gray-200 dark:border-gray-800">
                <Users className="w-6 h-6 text-blue-600" />
                <TrendingUp className="w-6 h-6 text-indigo-600" />
                <BarChart3 className="w-6 h-6 text-purple-600" />
                <Workflow className="w-6 h-6 text-pink-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Custom CRM */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Build a Custom CRM?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Generic CRMs force you to adapt to them. Custom CRMs adapt to you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
            <div className="bg-red-50 dark:bg-red-950/20 border-2 border-red-200 dark:border-red-800 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4 text-red-900 dark:text-red-100">❌ With Generic CRMs (Salesforce, HubSpot)</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start space-x-2">
                  <span className="text-red-600 mt-1">•</span>
                  <span>Pay per user ($50-300/month) even for occasional users</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-red-600 mt-1">•</span>
                  <span>Limited customization - forced to use their fields/layouts</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-red-600 mt-1">•</span>
                  <span>Complex interfaces = low adoption (30-40% typical)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-red-600 mt-1">•</span>
                  <span>Integration costs $$$$ for connecting your tools</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-red-600 mt-1">•</span>
                  <span>Data locked in their ecosystem</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-red-600 mt-1">•</span>
                  <span>Workflows don't match your sales process</span>
                </li>
              </ul>
            </div>

            <div className="bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4 text-green-900 dark:text-green-100">✅ With Custom CRM</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start space-x-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>Fixed cost - unlimited users, no per-seat pricing</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>100% tailored to YOUR sales process</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>Simple UI = 90%+ adoption rates</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>Built-in integrations with your exact tools</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>Full data ownership and portability</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>Workflows designed around your team's habits</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-2xl p-8 text-white">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">150+</div>
                <div className="text-blue-100">Custom CRMs Built</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">95%</div>
                <div className="text-blue-100">User Adoption Rate</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">40%</div>
                <div className="text-blue-100">Sales Increase</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">ROI in 8mo</div>
                <div className="text-blue-100">Average Payback</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section id="features" className="py-20 border-t border-border bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Complete CRM Capabilities</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to manage customer relationships and close more deals
            </p>
          </div>

          <div className="grid md:grid-cols-12 gap-6">
            <div className="md:col-span-8 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 p-8 text-white hover:shadow-2xl transition-all duration-300">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform translate-x-32 -translate-y-32 group-hover:scale-150 transition-transform duration-500" />
              <div className="relative z-10">
                <Target className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold mb-3">Lead & Contact Management</h3>
                <p className="text-blue-100 mb-4 text-lg leading-relaxed">
                  Capture leads from web forms, emails, calls, and events. Automatic lead scoring, duplicate detection, segmentation, and assignment rules. Track every interaction with timeline view. Custom fields for your industry-specific data.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="text-sm">Lead Scoring</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="text-sm">Auto-Assignment</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="text-sm">360° View</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-4 md:row-span-2 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-500 to-indigo-700 p-8 text-white hover:shadow-2xl transition-all duration-300">
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl transform -translate-x-24 translate-y-24 group-hover:scale-150 transition-transform duration-500" />
              <div className="relative z-10 h-full flex flex-col">
                <TrendingUp className="w-12 h-12 mb-4 group-hover:rotate-12 transition-transform" />
                <h3 className="text-2xl font-bold mb-3">Sales Pipeline</h3>
                <p className="text-indigo-100 mb-4 leading-relaxed flex-grow">
                  Visual kanban board or list view of your sales pipeline. Drag-and-drop deals between stages. Custom pipeline stages matching your process. Probability tracking, revenue forecasting, and win/loss analysis.
                </p>
                <div className="space-y-2 mt-auto">
                  <div className="flex items-center justify-between bg-white/10 rounded-lg p-2">
                    <span className="text-sm">Custom Stages</span>
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div className="flex items-center justify-between bg-white/10 rounded-lg p-2">
                    <span className="text-sm">Forecasting</span>
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div className="flex items-center justify-between bg-white/10 rounded-lg p-2">
                    <span className="text-sm">Win/Loss</span>
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-4 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-500 to-purple-700 p-6 text-white hover:shadow-2xl transition-all duration-300">
              <Workflow className="w-10 h-10 mb-3 group-hover:rotate-180 transition-transform duration-500" />
              <h3 className="text-xl font-bold mb-2">Automation & Workflows</h3>
              <p className="text-purple-100 text-sm leading-relaxed">
                Trigger actions based on events - auto-assign leads, send follow-ups, update fields
              </p>
            </div>

            <div className="md:col-span-4 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-pink-500 to-pink-700 p-6 text-white hover:shadow-2xl transition-all duration-300">
              <Mail className="w-10 h-10 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2">Email & Call Tracking</h3>
              <p className="text-pink-100 text-sm leading-relaxed">
                Log emails and calls automatically. Templates, sequences, and open tracking
              </p>
            </div>

            <div className="md:col-span-8 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-rose-500 to-rose-700 p-8 text-white hover:shadow-2xl transition-all duration-300">
              <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform -translate-x-32 -translate-y-32 group-hover:scale-150 transition-transform duration-500" />
              <div className="relative z-10">
                <BarChart3 className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold mb-3">Reports & Analytics</h3>
                <p className="text-rose-100 mb-4 text-lg leading-relaxed">
                  Real-time dashboards with sales metrics, conversion rates, pipeline health, rep performance, revenue forecasts, and custom reports. Drill down into any metric. Export to CSV/PDF for stakeholders.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="text-sm">Live Dashboards</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="text-sm">Custom Reports</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="text-sm">Forecasting</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-4 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-red-500 to-red-700 p-6 text-white hover:shadow-2xl transition-all duration-300">
              <Database className="w-10 h-10 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2">Custom Fields & Objects</h3>
              <p className="text-red-100 text-sm leading-relaxed">
                Add unlimited custom fields and create custom objects for your workflow
              </p>
            </div>

            <div className="md:col-span-4 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-orange-500 to-orange-700 p-6 text-white hover:shadow-2xl transition-all duration-300">
              <Globe className="w-10 h-10 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2">Mobile CRM App</h3>
              <p className="text-orange-100 text-sm leading-relaxed">
                iOS and Android apps for sales reps on the go - full offline support
              </p>
            </div>

            <div className="md:col-span-4 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-yellow-500 to-yellow-700 p-6 text-white hover:shadow-2xl transition-all duration-300">
              <Zap className="w-10 h-10 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2">Third-Party Integrations</h3>
              <p className="text-yellow-100 text-sm leading-relaxed">
                Connect to Gmail, Outlook, Slack, QuickBooks, Mailchimp, and your tools
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-4">
          <TechShowcase 
            technologies={technologies}
            title="CRM Technology Stack"
            subtitle="Modern technologies for building scalable, performant CRM systems"
            filterSlugs={[
              'react', 'nextjs', 'nodejs', 'postgresql', 'mongodb',
              'redis', 'aws', 'typescript', 'tailwind', 'docker'
            ]}
            showStats={true}
          />
        </div>
      </section>

      {/* Development Process */}
      <section className="py-20 border-t border-border bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">CRM Development Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From discovery to deployment in 8-16 weeks
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {[
              {
                step: '01',
                title: 'Discovery & Process Mapping',
                description: 'Deep dive into your sales process, pain points, integrations needed, and success metrics. Map current workflow and design ideal future state.',
                duration: '1-2 weeks',
                icon: Users
              },
              {
                step: '02',
                title: 'UX Design & Prototyping',
                description: 'Create wireframes and interactive prototypes of your CRM. Design intuitive UI that your team will love using. Get feedback and iterate.',
                duration: '2-3 weeks',
                icon: Target
              },
              {
                step: '03',
                title: 'Backend Development',
                description: 'Build database schema, REST/GraphQL APIs, authentication, automation engine, and integrations with your tools (email, calendar, etc.).',
                duration: '4-6 weeks',
                icon: Database
              },
              {
                step: '04',
                title: 'Frontend Development',
                description: 'Build responsive web app with lead management, pipeline view, contact timeline, reports, and mobile-optimized interface.',
                duration: '4-6 weeks',
                icon: Globe
              },
              {
                step: '05',
                title: 'Testing & Training',
                description: 'QA testing, load testing, security audit, data migration from old CRM, and comprehensive team training with documentation.',
                duration: '1-2 weeks',
                icon: TrendingUp
              },
              {
                step: '06',
                title: 'Launch & Support',
                description: 'Production deployment, monitoring setup, and 3-month post-launch support to ensure smooth adoption and address feedback.',
                duration: '1 week',
                icon: Zap
              }
            ].map((item, index) => (
              <div key={index} className="relative pl-8 pb-12 border-l-2 border-blue-600 last:border-0 last:pb-0">
                <div className="absolute left-0 top-0 w-4 h-4 bg-blue-600 rounded-full -translate-x-[9px]" />
                <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow ml-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="text-3xl font-bold text-blue-600">{item.step}</div>
                      <div>
                        <h3 className="text-xl font-bold">{item.title}</h3>
                        <p className="text-sm text-muted-foreground flex items-center mt-1">
                          <Zap className="w-4 h-4 mr-1" />
                          {item.duration}
                        </p>
                      </div>
                    </div>
                    <item.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Custom CRMs We've Built
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Success stories from businesses that built custom CRM solutions
            </p>
          </div>
          
          <PortfolioSlider 
            projects={projects}
            technologies={technologies}
            autoplay={true}
            showNavigation={true}
          />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 border-t border-border bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our CRM Clients Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real results from teams using our custom CRMs
            </p>
          </div>
          
          <TestimonialsCarousel testimonials={testimonials} />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-4">
              {[
                {
                  question: 'How much does custom CRM development cost?',
                  answer: 'Basic CRM (5-10 users): $40K-75K. Mid-size (10-50 users): $75K-150K. Enterprise (50+ users): $150K-300K+. Compare to Salesforce: 20 users × $150/mo × 36 months = $108K in subscription fees alone, plus implementation ($30K-100K) and limited customization. Custom CRM pays for itself in 8-18 months.'
                },
                {
                  question: 'Can you migrate data from our existing CRM?',
                  answer: 'Yes! We migrate contacts, leads, accounts, opportunities, activities, and custom fields from Salesforce, HubSpot, Pipedrive, Zoho, or any CRM with export/API. Process: 1) Map old fields to new schema, 2) Clean/deduplicate data, 3) Test migration in staging, 4) Production migration with validation. Timeline: 1-2 weeks for data migration.'
                },
                {
                  question: 'What integrations do you support?',
                  answer: 'Email: Gmail, Outlook, SMTP. Calendar: Google Calendar, Outlook. Communication: Slack, Microsoft Teams, Twilio (calls/SMS). Marketing: Mailchimp, SendGrid, HubSpot. Accounting: QuickBooks, Xero. Payment: Stripe. Plus custom API integrations for your specific tools. We build all integrations during development.'
                },
                {
                  question: 'How long does CRM development take?',
                  answer: 'MVP (basic features): 8-12 weeks. Full-featured CRM: 12-16 weeks. Complex enterprise CRM: 16-24 weeks. Timeline includes discovery, design, development, testing, data migration, training, and deployment. We use agile methodology with bi-weekly demos for feedback and adjustments.'
                },
                {
                  question: 'Do you provide mobile apps?',
                  answer: 'Yes! We build responsive web apps that work on mobile browsers, plus native iOS/Android apps if needed (adds 4-6 weeks). Mobile features: view/edit leads, log calls/meetings, update pipeline, check reports, offline mode, push notifications. Sales reps can work from anywhere.'
                },
                {
                  question: 'What ongoing support do you offer?',
                  answer: 'Included: 3-month post-launch support (bug fixes, minor adjustments). Optional: Monthly retainer ($2K-10K) for feature additions, integrations, training, priority support, and system administration. We also offer 24/7 monitoring, backups, security updates, and infrastructure management.'
                }
              ].map((faq, index) => (
                <details key={index} className="group bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 overflow-hidden">
                  <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-muted/50 transition-colors">
                    <span className="font-semibold text-lg">{faq.question}</span>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-open:rotate-90 transition-transform" />
                  </summary>
                  <div className="px-6 pb-6 text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection 
        title="Ready to Build Your Perfect CRM?"
        description="Stop forcing your team to adapt to generic CRM software. Build a custom solution that matches your exact sales process, integrates with your tools, and drives real adoption."
        primaryButtonText="Build Your CRM"
        primaryButtonLink="/contact"
        secondaryButtonText="See Features"
        secondaryButtonLink="#features"
        showContactInfo={true}
      />
    </div>
  )
}
