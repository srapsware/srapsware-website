import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { 
  Database, 
  GitBranch, 
  Server, 
  ShoppingCart,
  ArrowRight,
  CheckCircle2,
  Layers,
  Workflow,
  BarChart3,
  Lock,
  Zap,
  Globe
} from 'lucide-react'
import { cn } from '@/lib/utils'
import TechShowcase from '@/components/animations/tech-showcase'
import { PortfolioSlider } from '@/components/sections/portfolio-slider'
import { TestimonialsCarousel } from '@/components/sections/testimonials-carousel'
import { CTASection } from '@/components/sections/cta-section'
import { getFeaturedPortfolio, getTechnologies, getFeaturedTestimonials } from '@/lib/content'

export const metadata: Metadata = {
  title: 'ERP Integration Services | Connect SAP, Oracle, NetSuite, Dynamics 365',
  description: 'Seamlessly integrate your ERP systems with web applications, e-commerce, CRM, and third-party services. Real-time data sync, automated workflows, bi-directional integration.',
  keywords: 'ERP integration, SAP integration, Oracle ERP, NetSuite integration, Microsoft Dynamics 365, ERP API, enterprise integration, business system integration',
  openGraph: {
    title: 'ERP Integration Services | Connect Your Business Systems',
    description: 'Connect your ERP to web apps, e-commerce, CRM, and other systems. Real-time sync, automated workflows, no data silos.',
    type: 'website',
  }
}

export default function ERPIntegrationPage() {
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
            <span className="text-foreground font-medium">ERP Integration</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 dark:from-emerald-950/20 dark:via-teal-950/20 dark:to-cyan-950/20" />
        <div className="absolute inset-0 bg-grid-slate-900/[0.04] dark:bg-grid-slate-400/[0.05] bg-[size:32px_32px]" />
        
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-400/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-400/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-4 px-4 py-1.5 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-full text-sm font-medium">
                🏢 Enterprise Integration
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
                ERP Integration Services
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                Connect your ERP to web apps, e-commerce, CRM, and other systems. Real-time data synchronization, automated workflows, and unified business processes.
              </p>

              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center p-4 rounded-lg bg-white/50 dark:bg-black/20 backdrop-blur-sm border border-white/20">
                  <div className="text-3xl font-bold text-emerald-600">99.9%</div>
                  <div className="text-sm text-muted-foreground">Uptime</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-white/50 dark:bg-black/20 backdrop-blur-sm border border-white/20">
                  <div className="text-3xl font-bold text-teal-600">Real-time</div>
                  <div className="text-sm text-muted-foreground">Sync</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-white/50 dark:bg-black/20 backdrop-blur-sm border border-white/20">
                  <div className="text-3xl font-bold text-cyan-600">100+</div>
                  <div className="text-sm text-muted-foreground">Projects</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200"
                >
                  Start Integration
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link 
                  href="#systems"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-emerald-600 text-emerald-600 dark:text-emerald-400 rounded-lg font-semibold hover:bg-emerald-50 dark:hover:bg-emerald-950/30 transition-all duration-200"
                >
                  Supported ERPs
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 backdrop-blur-sm">
                <Image
                  src="https://picsum.photos/800/600?random=erp"
                  alt="ERP Integration Architecture Diagram"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                  priority
                />
                <div className="absolute top-6 right-6 bg-white/90 dark:bg-black/90 backdrop-blur-md px-4 py-2 rounded-lg shadow-lg border border-white/20">
                  <div className="flex items-center space-x-2">
                    <Database className="w-5 h-5 text-emerald-500 animate-pulse" />
                    <span className="font-semibold text-sm">Connected</span>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex items-center space-x-4 bg-white dark:bg-gray-900 px-6 py-3 rounded-full shadow-xl border border-gray-200 dark:border-gray-800">
                <Database className="w-6 h-6 text-emerald-600" />
                <GitBranch className="w-6 h-6 text-teal-600" />
                <Server className="w-6 h-6 text-cyan-600" />
                <ShoppingCart className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Supported ERP Systems */}
      <section id="systems" className="py-20 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">We Integrate with All Major ERPs</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Deep expertise in connecting enterprise resource planning systems to modern applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                name: 'SAP',
                logo: '🔷',
                modules: 'S/4HANA, ECC, Business One',
                integrations: '200+ completed',
                color: 'emerald'
              },
              {
                name: 'Oracle ERP',
                logo: '🔴',
                modules: 'Cloud, E-Business Suite, JD Edwards',
                integrations: '150+ completed',
                color: 'red'
              },
              {
                name: 'NetSuite',
                logo: '🟠',
                modules: 'ERP, CRM, E-commerce',
                integrations: '120+ completed',
                color: 'orange'
              },
              {
                name: 'Microsoft Dynamics',
                logo: '🔵',
                modules: '365, NAV, GP, AX',
                integrations: '100+ completed',
                color: 'blue'
              },
              {
                name: 'Infor',
                logo: '🟣',
                modules: 'CloudSuite, LN, M3',
                integrations: '50+ completed',
                color: 'purple'
              },
              {
                name: 'Sage',
                logo: '🟢',
                modules: 'Intacct, X3, 100, 300',
                integrations: '80+ completed',
                color: 'green'
              },
              {
                name: 'Epicor',
                logo: '🔶',
                modules: 'ERP, Prophet 21, Kinetic',
                integrations: '40+ completed',
                color: 'yellow'
              },
              {
                name: 'Odoo',
                logo: '🟣',
                modules: 'Community, Enterprise',
                integrations: '60+ completed',
                color: 'indigo'
              }
            ].map((erp, index) => (
              <div key={index} className={cn(
                "group relative overflow-hidden rounded-xl p-6 border-2 hover:shadow-xl transition-all duration-300",
                `border-${erp.color}-200 dark:border-${erp.color}-800 bg-${erp.color}-50/50 dark:bg-${erp.color}-950/20`
              )}>
                <div className="text-5xl mb-3">{erp.logo}</div>
                <h3 className="text-xl font-bold mb-2">{erp.name}</h3>
                <p className="text-sm text-muted-foreground mb-2">{erp.modules}</p>
                <div className={cn(
                  "flex items-center space-x-1 text-xs font-semibold",
                  `text-${erp.color}-600 dark:text-${erp.color}-400`
                )}>
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{erp.integrations}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Don't see your ERP?</h3>
            <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
              We integrate with any ERP that has REST/SOAP APIs, database access, or file exports (CSV/XML/EDI). Contact us for custom integration requirements.
            </p>
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-emerald-600 rounded-lg font-semibold hover:shadow-lg transition-all"
            >
              Discuss Your ERP
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Integration Capabilities */}
      <section className="py-20 border-t border-border bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Can Integrate</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Bi-directional data sync between your ERP and any system
            </p>
          </div>

          <div className="grid md:grid-cols-12 gap-6">
            <div className="md:col-span-8 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-700 p-8 text-white hover:shadow-2xl transition-all duration-300">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform translate-x-32 -translate-y-32 group-hover:scale-150 transition-transform duration-500" />
              <div className="relative z-10">
                <ShoppingCart className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold mb-3">E-commerce Integration</h3>
                <p className="text-emerald-100 mb-4 text-lg leading-relaxed">
                  Sync orders, inventory, customers, and products between your ERP and e-commerce platform. Real-time stock updates, automated order fulfillment, pricing synchronization, and shipment tracking. Supports Shopify, WooCommerce, Magento, BigCommerce, custom stores.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="text-sm">Real-time Inventory</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="text-sm">Order Automation</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="text-sm">Price Sync</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-4 md:row-span-2 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-teal-500 to-teal-700 p-8 text-white hover:shadow-2xl transition-all duration-300">
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl transform -translate-x-24 translate-y-24 group-hover:scale-150 transition-transform duration-500" />
              <div className="relative z-10 h-full flex flex-col">
                <Database className="w-12 h-12 mb-4 group-hover:rotate-12 transition-transform" />
                <h3 className="text-2xl font-bold mb-3">Custom Web Apps</h3>
                <p className="text-teal-100 mb-4 leading-relaxed flex-grow">
                  Build customer portals, supplier dashboards, inventory management tools, and internal apps that read/write directly to ERP. Display real-time data, submit orders, check stock, view reports.
                </p>
                <div className="space-y-2 mt-auto">
                  <div className="flex items-center justify-between bg-white/10 rounded-lg p-2">
                    <span className="text-sm">Portals</span>
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div className="flex items-center justify-between bg-white/10 rounded-lg p-2">
                    <span className="text-sm">Dashboards</span>
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div className="flex items-center justify-between bg-white/10 rounded-lg p-2">
                    <span className="text-sm">Real-time</span>
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-4 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-cyan-500 to-cyan-700 p-6 text-white hover:shadow-2xl transition-all duration-300">
              <Layers className="w-10 h-10 mb-3 group-hover:rotate-180 transition-transform duration-500" />
              <h3 className="text-xl font-bold mb-2">CRM Integration</h3>
              <p className="text-cyan-100 text-sm leading-relaxed">
                Sync customers, contacts, orders, and invoices with Salesforce, HubSpot, or custom CRM
              </p>
            </div>

            <div className="md:col-span-4 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 p-6 text-white hover:shadow-2xl transition-all duration-300">
              <BarChart3 className="w-10 h-10 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2">BI & Analytics</h3>
              <p className="text-blue-100 text-sm leading-relaxed">
                Extract ERP data for Power BI, Tableau, Looker dashboards and custom reporting
              </p>
            </div>

            <div className="md:col-span-8 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-500 to-indigo-700 p-8 text-white hover:shadow-2xl transition-all duration-300">
              <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform -translate-x-32 -translate-y-32 group-hover:scale-150 transition-transform duration-500" />
              <div className="relative z-10">
                <Workflow className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold mb-3">Workflow Automation</h3>
                <p className="text-indigo-100 mb-4 text-lg leading-relaxed">
                  Automate business processes across systems. Create purchase orders in ERP when e-commerce inventory is low. Email customers when ERP shipment status changes. Update CRM when ERP invoice is paid. Zapier/Make.com-style automation with your ERP data.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="text-sm">Trigger Actions</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="text-sm">Multi-system</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="text-sm">No-code Builder</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-4 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-500 to-purple-700 p-6 text-white hover:shadow-2xl transition-all duration-300">
              <Globe className="w-10 h-10 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2">Third-party Apps</h3>
              <p className="text-purple-100 text-sm leading-relaxed">
                Connect ERP to shipping (UPS, FedEx), payment (Stripe), accounting (QuickBooks)
              </p>
            </div>

            <div className="md:col-span-4 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-pink-500 to-pink-700 p-6 text-white hover:shadow-2xl transition-all duration-300">
              <Server className="w-10 h-10 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2">Legacy System Migration</h3>
              <p className="text-pink-100 text-sm leading-relaxed">
                Migrate data from old ERP to new ERP or sync data between multiple ERPs
              </p>
            </div>

            <div className="md:col-span-4 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-rose-500 to-rose-700 p-6 text-white hover:shadow-2xl transition-all duration-300">
              <Lock className="w-10 h-10 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2">Secure APIs</h3>
              <p className="text-rose-100 text-sm leading-relaxed">
                Build REST APIs on top of your ERP for mobile apps and external partners
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Approaches */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Integration Methods</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We use the best approach for your ERP architecture and requirements
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border-2 border-emerald-200 dark:border-emerald-800 hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">REST/SOAP APIs</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Use native ERP APIs for real-time data exchange. Best for modern ERPs with robust APIs (NetSuite, Dynamics 365, SAP S/4HANA Cloud).
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span>Real-time synchronization</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span>Bi-directional data flow</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span>OAuth security</span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border-2 border-teal-200 dark:border-teal-800 hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/30 rounded-lg flex items-center justify-center mb-4">
                <Database className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Direct Database Access</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Connect directly to ERP database for complex queries and bulk operations. Best for on-premise ERPs or when API limits are restrictive.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                  <span>Fastest data retrieval</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                  <span>Complex aggregations</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                  <span>Read-only or read-write</span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border-2 border-cyan-200 dark:border-cyan-800 hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-cyan-100 dark:bg-cyan-900/30 rounded-lg flex items-center justify-center mb-4">
                <GitBranch className="w-6 h-6 text-cyan-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">File-based (CSV/XML/EDI)</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Schedule batch imports/exports using FTP, SFTP, or cloud storage. Best for legacy ERPs without APIs or for scheduled bulk updates.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-600 mt-0.5 flex-shrink-0" />
                  <span>Works with any ERP</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-600 mt-0.5 flex-shrink-0" />
                  <span>Bulk data transfer</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-600 mt-0.5 flex-shrink-0" />
                  <span>Scheduled or triggered</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 border-t border-border bg-muted/30">
        <div className="container mx-auto px-4">
          <TechShowcase 
            technologies={technologies}
            title="Integration Technology Stack"
            subtitle="Enterprise-grade tools for building secure, scalable ERP integrations"
            filterSlugs={[
              'nodejs', 'python', 'java', 'postgresql', 'redis',
              'rabbitmq', 'kafka', 'aws', 'docker', 'kubernetes'
            ]}
            showStats={true}
          />
        </div>
      </section>

      {/* Development Process */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Integration Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From discovery to production in 6-12 weeks
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {[
              {
                step: '01',
                title: 'Discovery & Requirements',
                description: 'Understand your ERP architecture, data models, integration points, security requirements, and business workflows. Document API/database access, data volumes, and sync frequency needs.',
                duration: '1 week',
                icon: Database
              },
              {
                step: '02',
                title: 'Architecture Design',
                description: 'Design integration architecture (middleware, message queues, caching). Choose integration method (API, database, file-based). Map data fields between systems and design error handling.',
                duration: '1-2 weeks',
                icon: Layers
              },
              {
                step: '03',
                title: 'Development & Testing',
                description: 'Build integration connectors, data transformation logic, authentication, and sync mechanisms. Test with sample data in sandbox environment. Load testing for performance validation.',
                duration: '3-6 weeks',
                icon: Workflow
              },
              {
                step: '04',
                title: 'Data Migration (if needed)',
                description: 'Migrate historical data from old system to new. Clean and deduplicate data. Validate migrated data accuracy. Parallel run to compare old vs new systems.',
                duration: '1-2 weeks',
                icon: Server
              },
              {
                step: '05',
                title: 'UAT & Training',
                description: 'User acceptance testing with your team. Training on new workflows and monitoring tools. Documentation for IT team and end-users. Runbook for troubleshooting.',
                duration: '1 week',
                icon: CheckCircle2
              },
              {
                step: '06',
                title: 'Deployment & Support',
                description: 'Production cutover with rollback plan. Monitor integration for 30 days. 24/7 support for critical issues. Performance optimization and bug fixes included.',
                duration: '1 week',
                icon: Zap
              }
            ].map((item, index) => (
              <div key={index} className="relative pl-8 pb-12 border-l-2 border-emerald-600 last:border-0 last:pb-0">
                <div className="absolute left-0 top-0 w-4 h-4 bg-emerald-600 rounded-full -translate-x-[9px]" />
                <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow ml-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="text-3xl font-bold text-emerald-600">{item.step}</div>
                      <div>
                        <h3 className="text-xl font-bold">{item.title}</h3>
                        <p className="text-sm text-muted-foreground flex items-center mt-1">
                          <Zap className="w-4 h-4 mr-1" />
                          {item.duration}
                        </p>
                      </div>
                    </div>
                    <item.icon className="w-8 h-8 text-emerald-600" />
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-20 border-t border-border bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ERP Integration Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real integrations we've built for enterprise clients
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
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our Integration Clients Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Success stories from businesses that integrated their ERPs
            </p>
          </div>
          
          <TestimonialsCarousel testimonials={testimonials} />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 border-t border-border bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-4">
              {[
                {
                  question: 'How much does ERP integration cost?',
                  answer: 'Simple integration (1-2 modules, read-only): $15K-40K. Standard integration (multiple modules, bi-directional): $40K-100K. Complex integration (multiple ERPs, real-time, custom workflows): $100K-300K. Timeline: 6-16 weeks depending on complexity. Includes design, development, testing, deployment, and 30-day support.'
                },
                {
                  question: 'Will integration impact ERP performance?',
                  answer: 'No if done correctly. We use: 1) Caching to reduce repeated queries, 2) Batch processing for bulk operations during off-peak hours, 3) Read replicas for reporting queries, 4) Rate limiting to respect API quotas, 5) Asynchronous processing for non-critical updates. Monitor ERP load and optimize queries. Typical load increase: <5%.'
                },
                {
                  question: 'What if our ERP doesn\'t have APIs?',
                  answer: 'Multiple options: 1) Direct database access (read/write to ERP database), 2) File-based integration (CSV/XML exports/imports via FTP), 3) Screen scraping (automate UI interactions - last resort), 4) Custom API middleware (build REST API layer on ERP). We support legacy ERPs without modern APIs.'
                },
                {
                  question: 'How do you handle data conflicts?',
                  answer: 'Conflict resolution strategies: 1) Master system (ERP always wins, or external system wins), 2) Last-write wins (most recent update takes precedence), 3) Manual review (flag conflicts for human decision), 4) Custom business rules (context-specific logic). We define conflict resolution rules during discovery based on your workflows.'
                },
                {
                  question: 'Can you migrate data from old ERP to new ERP?',
                  answer: 'Yes! We handle: 1) Data extraction from old ERP (via API, database, or export files), 2) Data transformation (clean, deduplicate, map fields), 3) Data validation (check for errors, missing data), 4) Data import to new ERP (staged loading by module), 5) Reconciliation (verify old vs new counts/totals), 6) Parallel run (test new ERP while old still active). Timeline: 2-8 weeks for migration.'
                },
                {
                  question: 'What ongoing maintenance is required?',
                  answer: 'Monthly maintenance ($1K-5K): Monitor integration health, handle API changes, update authentication tokens, fix bugs, optimize performance, add new fields/modules. We provide 24/7 monitoring, error alerts, logs, and monthly reports. Critical issues (data sync failures) fixed within 4 hours. Optional: 3-6 month retainer for new features.'
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
        title="Ready to Connect Your ERP?"
        description="Stop manual data entry and eliminate data silos. Integrate your ERP with web apps, e-commerce, CRM, and other systems for real-time synchronization."
        primaryButtonText="Start Integration"
        primaryButtonLink="/contact"
        secondaryButtonText="See Integration Methods"
        secondaryButtonLink="#systems"
        showContactInfo={true}
      />
    </div>
  )
}
