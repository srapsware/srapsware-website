import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { 
  Network, 
  Plug, 
  Database, 
  Workflow,
  ArrowRight,
  CheckCircle2,
  Zap,
  Server,
  GitBranch,
  Shield,
  BarChart3,
  Clock
} from 'lucide-react'
import { cn } from '@/lib/utils'
import TechShowcase from '@/components/animations/tech-showcase'
import { PortfolioSlider } from '@/components/sections/portfolio-slider'
import { TestimonialsCarousel } from '@/components/sections/testimonials-carousel'
import { CTASection } from '@/components/sections/cta-section'
import { getFeaturedPortfolio, getTechnologies, getFeaturedTestimonials } from '@/lib/content'

export const metadata: Metadata = {
  title: 'System Integration Services | Enterprise Application Integration',
  description: 'Connect disparate systems with custom integration solutions. ERP, CRM, e-commerce, payment gateway, third-party API integration. Real-time data sync across platforms.',
  keywords: 'system integration, enterprise integration, API integration, data synchronization, middleware, ESB, iPaaS, legacy system integration, application integration',
  openGraph: {
    title: 'Enterprise System Integration Services | Connect Everything',
    description: 'Seamless integration between all your business systems. Real-time data sync, automated workflows, and unified data access.',
    type: 'website',
  }
}

export default function SystemIntegrationPage() {
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
            <Link href="/solutions" className="hover:text-foreground transition-colors">Solutions</Link>
            <span>/</span>
            <span className="text-muted-foreground">Digital Transformation</span>
            <span>/</span>
            <span className="text-foreground font-medium">System Integration</span>
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
                🔗 Enterprise Integration
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                System Integration Services
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                Connect all your business systems for seamless data flow. Break down silos, automate workflows, and unify your enterprise applications.
              </p>

              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center p-4 rounded-lg bg-white/50 dark:bg-black/20 backdrop-blur-sm border border-white/20">
                  <div className="text-3xl font-bold text-blue-600">300+</div>
                  <div className="text-sm text-muted-foreground">Integrations</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-white/50 dark:bg-black/20 backdrop-blur-sm border border-white/20">
                  <div className="text-3xl font-bold text-indigo-600">Real-Time</div>
                  <div className="text-sm text-muted-foreground">Data Sync</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-white/50 dark:bg-black/20 backdrop-blur-sm border border-white/20">
                  <div className="text-3xl font-bold text-purple-600">99.9%</div>
                  <div className="text-sm text-muted-foreground">Uptime</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200"
                >
                  Integrate Your Systems
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link 
                  href="#solutions"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg font-semibold hover:bg-blue-50 dark:hover:bg-blue-950/30 transition-all duration-200"
                >
                  View Solutions
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 backdrop-blur-sm">
                <Image
                  src="https://picsum.photos/800/600?random=integration"
                  alt="System Integration Architecture Diagram"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                  priority
                />
                <div className="absolute top-6 right-6 bg-white/90 dark:bg-black/90 backdrop-blur-md px-4 py-2 rounded-lg shadow-lg border border-white/20">
                  <div className="flex items-center space-x-2">
                    <Network className="w-5 h-5 text-blue-500 animate-pulse" />
                    <span className="font-semibold text-sm">Connected</span>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex items-center space-x-4 bg-white dark:bg-gray-900 px-6 py-3 rounded-full shadow-xl border border-gray-200 dark:border-gray-800">
                <Network className="w-6 h-6 text-blue-600" />
                <Plug className="w-6 h-6 text-indigo-600" />
                <Database className="w-6 h-6 text-purple-600" />
                <Workflow className="w-6 h-6 text-violet-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Solutions */}
      <section id="solutions" className="py-20 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Integration Solutions We Build</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From simple point-to-point connections to complex enterprise integration platforms
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border-2 border-blue-200 dark:border-blue-800 hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                <Database className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">ERP Integration</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                Connect SAP, Oracle, NetSuite, Microsoft Dynamics with your web apps, e-commerce, CRM, and other systems. Real-time inventory, orders, customers sync.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span>Bi-directional data sync</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span>Real-time order processing</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span>Custom field mapping</span>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border-2 border-indigo-200 dark:border-indigo-800 hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center mb-4">
                <Plug className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">CRM Integration</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                Integrate Salesforce, HubSpot, Zoho CRM with your website, marketing tools, support systems. Sync leads, contacts, deals, activities automatically.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600 flex-shrink-0" />
                  <span>Lead capture automation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600 flex-shrink-0" />
                  <span>Contact sync across tools</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600 flex-shrink-0" />
                  <span>Activity logging</span>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border-2 border-purple-200 dark:border-purple-800 hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-4">
                <Network className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">E-commerce Integration</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                Connect Shopify, WooCommerce, Magento with ERP, CRM, shipping, accounting. Sync products, inventory, orders, customers in real-time.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 flex-shrink-0" />
                  <span>Inventory synchronization</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 flex-shrink-0" />
                  <span>Order fulfillment automation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 flex-shrink-0" />
                  <span>Multi-channel selling</span>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border-2 border-violet-200 dark:border-violet-800 hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-violet-100 dark:bg-violet-900/30 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-violet-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Payment Gateway Integration</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                Integrate Stripe, PayPal, Authorize.net, Square with your app. Subscription billing, invoicing, recurring payments, refunds automation.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-violet-600 flex-shrink-0" />
                  <span>Secure payment processing</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-violet-600 flex-shrink-0" />
                  <span>Subscription management</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-violet-600 flex-shrink-0" />
                  <span>PCI DSS compliance</span>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border-2 border-cyan-200 dark:border-cyan-800 hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-cyan-100 dark:bg-cyan-900/30 rounded-lg flex items-center justify-center mb-4">
                <Server className="w-6 h-6 text-cyan-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Legacy System Integration</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                Connect old mainframe, AS/400, COBOL systems with modern apps. Extract data, expose legacy functionality via APIs, maintain backward compatibility.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-600 flex-shrink-0" />
                  <span>Legacy data extraction</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-600 flex-shrink-0" />
                  <span>Modern API wrapper</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-600 flex-shrink-0" />
                  <span>Zero downtime</span>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border-2 border-teal-200 dark:border-teal-800 hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/30 rounded-lg flex items-center justify-center mb-4">
                <GitBranch className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Third-Party API Integration</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                Connect 1000+ third-party services: Google Maps, Twilio SMS, SendGrid email, Slack, social media, analytics, marketing automation tools.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0" />
                  <span>Pre-built connectors</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0" />
                  <span>Custom API clients</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0" />
                  <span>Webhook handlers</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-2xl p-8 text-white">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">300+</div>
                <div className="text-blue-100">Systems Integrated</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">50+</div>
                <div className="text-blue-100">Integration Patterns</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">Real-Time</div>
                <div className="text-blue-100">Data Sync</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">99.9%</div>
                <div className="text-blue-100">Integration Uptime</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Methods */}
      <section className="py-20 border-t border-border bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Integration Approaches</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We use the right integration method for your specific requirements
            </p>
          </div>

          <div className="grid md:grid-cols-12 gap-6">
            <div className="md:col-span-6 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 p-8 text-white hover:shadow-2xl transition-all duration-300">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform translate-x-32 -translate-y-32 group-hover:scale-150 transition-transform duration-500" />
              <div className="relative z-10">
                <Zap className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold mb-3">Real-Time API Integration</h3>
                <p className="text-blue-100 mb-4 text-lg leading-relaxed">
                  <strong>Best for:</strong> Live data synchronization, instant updates, user-facing features.
                </p>
                <p className="text-blue-100 mb-4 leading-relaxed">
                  Direct API calls with REST, GraphQL, or gRPC. Webhooks for event notifications. WebSockets for real-time bidirectional communication. Sub-second latency for critical operations.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="text-sm">Instant Sync</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="text-sm">Live Updates</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="text-sm">Webhooks</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-6 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-500 to-indigo-700 p-8 text-white hover:shadow-2xl transition-all duration-300">
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl transform -translate-x-24 translate-y-24 group-hover:scale-150 transition-transform duration-500" />
              <div className="relative z-10">
                <Clock className="w-12 h-12 mb-4 group-hover:rotate-180 transition-transform duration-500" />
                <h3 className="text-2xl font-bold mb-3">Batch Integration</h3>
                <p className="text-indigo-100 mb-4 text-lg leading-relaxed">
                  <strong>Best for:</strong> Large data volumes, scheduled syncs, non-critical updates.
                </p>
                <p className="text-indigo-100 mb-4 leading-relaxed">
                  Scheduled jobs (hourly, daily, weekly). Bulk data transfer via CSV, XML, or JSON files. ETL processes for data warehousing. Overnight synchronization for reports and analytics.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="text-sm">Scheduled</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="text-sm">Bulk Data</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="text-sm">Cost-Effective</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-4 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-500 to-purple-700 p-6 text-white hover:shadow-2xl transition-all duration-300">
              <Database className="w-10 h-10 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2">Database Integration</h3>
              <p className="text-purple-100 text-sm leading-relaxed">
                <strong>Method:</strong> Direct database access, SQL queries, database triggers, replication
              </p>
            </div>

            <div className="md:col-span-4 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-violet-500 to-violet-700 p-6 text-white hover:shadow-2xl transition-all duration-300">
              <Server className="w-10 h-10 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2">Middleware/ESB</h3>
              <p className="text-violet-100 text-sm leading-relaxed">
                <strong>Method:</strong> Enterprise Service Bus, message queues (RabbitMQ, Kafka), API gateway
              </p>
            </div>

            <div className="md:col-span-4 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-cyan-500 to-cyan-700 p-6 text-white hover:shadow-2xl transition-all duration-300">
              <Workflow className="w-10 h-10 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2">iPaaS Integration</h3>
              <p className="text-cyan-100 text-sm leading-relaxed">
                <strong>Tools:</strong> Zapier, Make.com, Mulesoft, Dell Boomi for no-code/low-code integrations
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
            title="Integration Technology Stack"
            subtitle="Enterprise-grade tools for robust system integration"
            filterSlugs={[
              'nodejs', 'python', 'java', 'rabbitmq', 'kafka',
              'postgresql', 'mongodb', 'redis', 'docker', 'kubernetes'
            ]}
            showStats={true}
          />
        </div>
      </section>

      {/* Integration Process */}
      <section className="py-20 border-t border-border bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Integration Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Systematic approach to connecting your systems in 6-12 weeks
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {[
              {
                step: '01',
                title: 'Discovery & Analysis',
                description: 'Audit existing systems and data models. Identify integration points and data flows. Map business processes and workflows. Define data transformation rules. Assess technical constraints and security requirements.',
                duration: '1-2 weeks',
                icon: Database
              },
              {
                step: '02',
                title: 'Integration Design',
                description: 'Choose integration pattern (real-time API, batch, hybrid). Design data mapping and transformation logic. Define error handling and retry mechanisms. Plan authentication and authorization. Create integration architecture diagram.',
                duration: '1 week',
                icon: Network
              },
              {
                step: '03',
                title: 'Development & Configuration',
                description: 'Build API connectors and middleware. Implement data transformation logic. Set up message queues or ESB if needed. Configure authentication (OAuth, API keys). Add logging and monitoring hooks.',
                duration: '3-6 weeks',
                icon: Plug
              },
              {
                step: '04',
                title: 'Testing & Validation',
                description: 'Test data mapping and transformations. Validate business rules and workflows. Load testing for performance at scale. Error scenario testing (network failures, timeouts). Security and penetration testing.',
                duration: '1-2 weeks',
                icon: Shield
              },
              {
                step: '05',
                title: 'Deployment & Migration',
                description: 'Phased rollout with pilot group. Historical data migration if needed. Parallel run to validate accuracy. Cutover to production with rollback plan. User training and documentation.',
                duration: '1 week',
                icon: Zap
              },
              {
                step: '06',
                title: 'Monitoring & Support',
                description: 'Real-time integration monitoring dashboard. Automated alerts for failures or delays. Performance metrics and SLA tracking. Ongoing maintenance and updates. 24/7 support for critical integrations.',
                duration: 'Ongoing',
                icon: BarChart3
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
                          <Clock className="w-4 h-4 mr-1" />
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
              Integration Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Successful system integrations across industries
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
              What Our Integration Clients Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real results from successful system integrations
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
                  question: 'How much does system integration cost?',
                  answer: 'Simple integration (2 systems, API-based): $10K-25K. Mid-size integration (3-5 systems, data transformation): $25K-60K. Complex integration (enterprise-wide, multiple systems, ESB): $60K-200K. Timeline: 6-16 weeks. Factors affecting cost: Number of systems, data volume, real-time vs batch, custom transformations, legacy system complexity. Ongoing: $500-3K/month for monitoring and maintenance.'
                },
                {
                  question: 'How long does integration take?',
                  answer: 'Simple API integration: 2-4 weeks (connect 2 cloud systems with REST APIs). Standard integration: 6-10 weeks (ERP or CRM integration with custom mapping). Complex integration: 3-6 months (multiple legacy systems, data migration, ESB setup). Enterprise-wide integration: 6-12 months (100+ integration points, governance, phased rollout). Timeline depends on: API availability, data complexity, testing requirements, change management.'
                },
                {
                  question: 'What if systems do not have APIs?',
                  answer: 'We have 4 strategies: 1) Database Integration - Direct SQL access if database is accessible, 2) File-based Integration - Export/import CSV, XML, or JSON files on schedule, 3) Screen Scraping - Automate UI interactions (last resort, fragile), 4) Custom API Wrapper - Build REST API on top of legacy system. We have integrated COBOL mainframes, AS/400, old desktop apps, and proprietary systems without documented APIs.'
                },
                {
                  question: 'How do you handle data conflicts?',
                  answer: 'Conflict resolution strategies: 1) Master System - Designate one system as source of truth, 2) Last Write Wins - Most recent update takes precedence, 3) Business Rules - Custom logic (e.g., approved orders cannot be changed), 4) Manual Review - Flag conflicts for human review. We implement: Data validation before sync, conflict logs with audit trail, rollback capability, duplicate detection. Real-time monitoring alerts you to issues immediately.'
                },
                {
                  question: 'Is real-time integration always better?',
                  answer: 'Not necessarily. Real-time (API, webhooks): Best for user-facing features, inventory/pricing, order processing. Higher cost, more complex. Batch (scheduled sync): Best for reporting, analytics, large data volumes, non-critical updates. Lower cost, simpler. Hybrid: Real-time for critical data (orders, inventory), batch for historical data (reports). We recommend the right mix based on your business requirements and budget.'
                },
                {
                  question: 'What ongoing support do you provide?',
                  answer: 'Included: 3 months post-launch support (bug fixes, monitoring, performance tuning). Ongoing options: Monitoring ($500-1K/month) - Uptime monitoring, error alerts, performance dashboards. Maintenance ($1K-3K/month) - Bug fixes, minor enhancements, API version updates. Managed Service ($3K-10K/month) - 24/7 support, SLA guarantees (99.9% uptime), on-call engineer, proactive optimization. We also handle: System upgrades, new API versions, scaling for growth.'
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
        title="Ready to Connect Your Systems?"
        description="Break down data silos and automate workflows. Seamless integration between all your business applications."
        primaryButtonText="Start Integration Project"
        primaryButtonLink="/contact"
        secondaryButtonText="View Solutions"
        secondaryButtonLink="#solutions"
        showContactInfo={true}
      />
    </div>
  )
}
