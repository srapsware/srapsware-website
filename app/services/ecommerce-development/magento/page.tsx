import { Metadata } from 'next'
import Image from 'next/image'
import { 
  ShoppingBag, 
  Rocket, 
  Globe, 
  TrendingUp, 
  Zap,
  ArrowRight,
  CheckCircle2,
  Building2,
  Users,
  Shield,
  Database,
  Settings
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { PageHero } from '@/components/sections/page-hero'
import TechShowcase from '@/components/animations/tech-showcase'
import { PortfolioSlider } from '@/components/sections/portfolio-slider'
import { TestimonialsCarousel } from '@/components/sections/testimonials-carousel'
import { CTASection } from '@/components/sections/cta-section'
import { getFeaturedPortfolio, getTechnologies, getFeaturedTestimonials } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Magento Development Services | Enterprise E-commerce Solutions',
  description: 'Professional Magento (Adobe Commerce) development for enterprise e-commerce. Custom modules, B2B features, multi-store management, and high-performance optimization for large catalogs.',
  keywords: 'Magento development, Adobe Commerce, Magento 2, enterprise ecommerce, Magento custom development, B2B ecommerce, multi-store, Magento optimization, Magento integration',
  openGraph: {
    title: 'Magento Development Services | Enterprise Adobe Commerce Solutions',
    description: 'Build scalable enterprise e-commerce with Magento. Custom development, integrations, and optimization for 10,000+ SKUs.',
    type: 'website',
  }
}

export default function MagentoPage() {
  const projects = getFeaturedPortfolio(6)
  const technologies = getTechnologies()
  const testimonials = getFeaturedTestimonials(6)

  return (
    <main>
      <PageHero
        badge="Enterprise E-commerce"
        title="Magento Development"
        description="Build enterprise-grade e-commerce with Magento (Adobe Commerce). Scalable for 100,000+ SKUs, B2B features, multi-store management, and advanced customization for Fortune 500 retailers."
        ctaPrimary={{
          text: "Start Your Project",
          href: "/contact"
        }}
        ctaSecondary={{
          text: "Enterprise Features",
          href: "#enterprise"
        }}
        breadcrumbItems={[
          { label: 'Services', href: '/services' },
          { label: 'E-commerce Development' },
          { label: 'Magento Development' }
        ]}
      />

      {/* Overview Section - Magazine Layout */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-4">
          {/* Layout 1: Diagonal Split */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://picsum.photos/600/400?random=enterprise-ecommerce"
                  alt="Magento Enterprise Dashboard with Advanced Analytics"
                  width={600}
                  height={400}
                  className="w-full h-auto transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm font-medium">Enterprise Scale</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 lg:pl-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Magento for Enterprise E-commerce?</h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                Magento (now Adobe Commerce) is the #1 choice for enterprise retailers with complex requirements. Handles 100,000+ SKUs, processes millions of orders, supports B2B and B2C on one platform, and scales to $100M+ annual revenue with robust architecture.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Used by Fortune 500 brands including Coca-Cola, Ford, Nestle, and HP. Magento offers advanced inventory management, multi-warehouse fulfillment, customer segmentation, pricing rules, and enterprise integrations (ERP, PIM, OMS) out of the box.
              </p>
            </div>
          </div>

          {/* Layout 2: Reverse Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16 items-center">
            <div className="lg:pr-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Custom Magento Development</h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                Every enterprise has unique needs. We build custom Magento 2 modules for specialized features, integrate with ERP systems (SAP, NetSuite, Microsoft Dynamics), PIM (Akeneo, Pimcore), and develop custom checkout flows, product configurators, and B2B portals.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our Magento-certified developers optimize performance for large catalogs (Elasticsearch, Varnish caching, CDN), implement advanced search (facets, autocomplete), and build headless PWA storefronts with PWA Studio or Vue Storefront for lightning-fast experiences.
              </p>
            </div>
            <div>
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://picsum.photos/600/400?random=custom-magento"
                  alt="Custom Magento Module Development and Integration"
                  width={600}
                  height={400}
                  className="w-full h-auto transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm font-medium">Custom Solutions</p>
                </div>
              </div>
            </div>
          </div>

          {/* Layout 3: Full-Width Stats */}
          <div className="bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 rounded-2xl p-8 text-white">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">50+</div>
                <div className="text-orange-100">Magento Projects</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">$155B</div>
                <div className="text-orange-100">Annual GMV</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">100K+</div>
                <div className="text-orange-100">SKUs Managed</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">99.9%</div>
                <div className="text-orange-100">Uptime SLA</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features - Asymmetric Bento Grid */}
      <section className="py-20 border-t border-border bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Enterprise Magento Capabilities</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Advanced features for large-scale B2B and B2C e-commerce operations
            </p>
          </div>

          <div className="grid md:grid-cols-12 gap-6">
            {/* Large Feature - Spans 8 columns */}
            <div className="md:col-span-8 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-orange-500 to-orange-700 p-8 text-white hover:shadow-2xl transition-all duration-300">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform translate-x-32 -translate-y-32 group-hover:scale-150 transition-transform duration-500" />
              <div className="relative z-10">
                <Building2 className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold mb-3">B2B Commerce Features</h3>
                <p className="text-orange-100 mb-4 text-lg leading-relaxed">
                  Company accounts with role-based permissions, purchase order workflows, credit limits, negotiable quotes, contract pricing, bulk ordering, quick order pads, and requisition lists. Perfect for wholesale, distributors, and manufacturers selling to businesses.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="text-sm">Company Accounts</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="text-sm">Quote System</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="text-sm">Custom Pricing</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Tall Feature - 4 columns, 2 rows */}
            <div className="md:col-span-4 md:row-span-2 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-red-500 to-red-700 p-8 text-white hover:shadow-2xl transition-all duration-300">
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl transform -translate-x-24 translate-y-24 group-hover:scale-150 transition-transform duration-500" />
              <div className="relative z-10 h-full flex flex-col">
                <Globe className="w-12 h-12 mb-4 group-hover:rotate-12 transition-transform" />
                <h3 className="text-2xl font-bold mb-3">Multi-Store & Multi-Language</h3>
                <p className="text-red-100 mb-4 leading-relaxed flex-grow">
                  Manage multiple storefronts (brands, regions, B2B/B2C) from one admin. Shared catalog, separate pricing/inventory per store, multi-currency support, and localized content for global expansion.
                </p>
                <div className="space-y-2 mt-auto">
                  <div className="flex items-center justify-between bg-white/10 rounded-lg p-2">
                    <span className="text-sm">Multi-Store</span>
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div className="flex items-center justify-between bg-white/10 rounded-lg p-2">
                    <span className="text-sm">Multi-Currency</span>
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div className="flex items-center justify-between bg-white/10 rounded-lg p-2">
                    <span className="text-sm">Localization</span>
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>

            {/* Medium Feature - 4 columns */}
            <div className="md:col-span-4 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-pink-500 to-pink-700 p-6 text-white hover:shadow-2xl transition-all duration-300">
              <Database className="w-10 h-10 mb-3 group-hover:rotate-180 transition-transform duration-500" />
              <h3 className="text-xl font-bold mb-2">Advanced Inventory Management</h3>
              <p className="text-pink-100 text-sm leading-relaxed">
                Multi-source inventory, backorder handling, and real-time stock updates
              </p>
            </div>

            {/* Medium Feature - 4 columns */}
            <div className="md:col-span-4 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-500 to-purple-700 p-6 text-white hover:shadow-2xl transition-all duration-300">
              <Users className="w-10 h-10 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2">Customer Segmentation</h3>
              <p className="text-purple-100 text-sm leading-relaxed">
                Dynamic customer groups, targeted promotions, and personalized pricing
              </p>
            </div>

            {/* Large Feature - Spans 8 columns */}
            <div className="md:col-span-8 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-500 to-indigo-700 p-8 text-white hover:shadow-2xl transition-all duration-300">
              <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform -translate-x-32 -translate-y-32 group-hover:scale-150 transition-transform duration-500" />
              <div className="relative z-10">
                <Settings className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold mb-3">Enterprise Integrations</h3>
                <p className="text-indigo-100 mb-4 text-lg leading-relaxed">
                  Seamless integration with ERP (SAP, Oracle, NetSuite, Microsoft Dynamics), PIM (Akeneo, Pimcore), OMS (ShipStation, Deposco), CRM (Salesforce), marketing automation (Marketo, HubSpot), and payment gateways. Custom APIs for legacy systems.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="text-sm">ERP/PIM Integration</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="text-sm">Real-Time Sync</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="text-sm">Custom APIs</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Medium Feature - 4 columns */}
            <div className="md:col-span-4 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 p-6 text-white hover:shadow-2xl transition-all duration-300">
              <Zap className="w-10 h-10 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2">Performance Optimization</h3>
              <p className="text-blue-100 text-sm leading-relaxed">
                Elasticsearch, Varnish caching, Redis, CDN for sub-2s page loads
              </p>
            </div>

            {/* Medium Feature - 4 columns */}
            <div className="md:col-span-4 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-cyan-500 to-cyan-700 p-6 text-white hover:shadow-2xl transition-all duration-300">
              <Rocket className="w-10 h-10 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2">Headless PWA Commerce</h3>
              <p className="text-cyan-100 text-sm leading-relaxed">
                PWA Studio or Vue Storefront for app-like mobile experiences
              </p>
            </div>

            {/* Medium Feature - 4 columns */}
            <div className="md:col-span-4 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-teal-500 to-teal-700 p-6 text-white hover:shadow-2xl transition-all duration-300">
              <Shield className="w-10 h-10 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2">Enterprise Security</h3>
              <p className="text-teal-100 text-sm leading-relaxed">
                PCI-DSS compliance, two-factor auth, and security patches
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-4">
          <TechShowcase 
            technologies={technologies}
            title="Magento Technology Stack"
            subtitle="Enterprise e-commerce technologies and integrations"
            filterSlugs={[
              'magento', 'php', 'mysql', 'elasticsearch', 'redis',
              'varnish', 'react', 'vue', 'aws', 'docker'
            ]}
            showStats={true}
          />
        </div>
      </section>

      {/* Magento vs Competitors */}
      <section className="py-20 border-t border-border bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">When to Choose Magento</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Magento excels for enterprise businesses with complex requirements
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border-2 border-green-500">
              <CheckCircle2 className="w-10 h-10 text-green-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Choose Magento If:</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start space-x-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>10,000+ SKUs in catalog</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>$5M+ annual revenue</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>B2B + B2C on one platform</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>Multi-store/multi-region</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>ERP/PIM integration needed</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>Complex pricing rules</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>Advanced inventory management</span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border-2 border-yellow-500">
              <TrendingUp className="w-10 h-10 text-yellow-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Alternatives Consider:</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start space-x-2">
                  <span className="font-bold">Shopify Plus:</span>
                  <span>If you want managed hosting and don't need B2B</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="font-bold">WooCommerce:</span>
                  <span>If budget &lt;$50K and &lt;5,000 SKUs</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="font-bold">BigCommerce:</span>
                  <span>If you want SaaS simplicity with good features</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="font-bold">Salesforce Commerce:</span>
                  <span>If already using Salesforce ecosystem</span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border-2 border-orange-500">
              <Building2 className="w-10 h-10 text-orange-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Magento Strengths:</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start space-x-2">
                  <span className="text-orange-600 mt-1">★</span>
                  <span>Handles 100K+ SKUs efficiently</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-orange-600 mt-1">★</span>
                  <span>B2B features out of the box</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-orange-600 mt-1">★</span>
                  <span>Multi-store architecture</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-orange-600 mt-1">★</span>
                  <span>Enterprise integrations</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-orange-600 mt-1">★</span>
                  <span>Complete customization</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-orange-600 mt-1">★</span>
                  <span>Adobe ecosystem (if using Adobe)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Process Timeline */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Magento Development Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Enterprise e-commerce deployment in 12-20 weeks
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {[
              {
                step: '01',
                title: 'Discovery & Requirements',
                description: 'Define catalog structure, B2B/B2C requirements, integrations (ERP, PIM, OMS), custom features, and performance goals. Create technical architecture and project roadmap.',
                duration: '2-3 weeks',
                icon: ShoppingBag
              },
              {
                step: '02',
                title: 'Design & UX Planning',
                description: 'Design custom theme with enterprise UX patterns, product page templates, checkout optimization, mobile-first approach, and accessibility compliance (WCAG 2.1).',
                duration: '2-3 weeks',
                icon: Globe
              },
              {
                step: '03',
                title: 'Magento Configuration & Development',
                description: 'Install Magento 2, configure multi-store/multi-language, set up products/categories, develop custom modules, integrate payment gateways, and implement B2B features.',
                duration: '4-6 weeks',
                icon: Settings
              },
              {
                step: '04',
                title: 'ERP/PIM Integration',
                description: 'Connect Magento to ERP (SAP, NetSuite), PIM (Akeneo), OMS, and CRM systems. Real-time inventory sync, order management, customer data sync, and automated workflows.',
                duration: '3-4 weeks',
                icon: Database
              },
              {
                step: '05',
                title: 'Performance Optimization & Testing',
                description: 'Configure Varnish caching, Elasticsearch, Redis, CDN (Cloudflare/Fastly). Load testing for 10K concurrent users, security testing, payment testing, and UAT.',
                duration: '2-3 weeks',
                icon: Zap
              },
              {
                step: '06',
                title: 'Launch & Support',
                description: 'Production deployment with zero-downtime migration, DNS cutover, monitoring setup (New Relic, Datadog), admin training, and 90-day post-launch support with SLA.',
                duration: '1-2 weeks',
                icon: Rocket
              }
            ].map((item, index) => (
              <div key={index} className="relative pl-8 pb-12 border-l-2 border-orange-600 last:border-0 last:pb-0">
                <div className="absolute left-0 top-0 w-4 h-4 bg-orange-600 rounded-full -translate-x-[9px]" />
                <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow ml-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="text-3xl font-bold text-orange-600">{item.step}</div>
                      <div>
                        <h3 className="text-xl font-bold">{item.title}</h3>
                        <p className="text-sm text-muted-foreground flex items-center mt-1">
                          <Zap className="w-4 h-4 mr-1" />
                          {item.duration}
                        </p>
                      </div>
                    </div>
                    <item.icon className="w-8 h-8 text-orange-600" />
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Slider */}
      <section className="py-20 border-t border-border bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Magento Projects We've Built
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Enterprise e-commerce solutions for global brands
            </p>
          </div>
          
          <div className="px-8">
            <PortfolioSlider 
              projects={projects}
              technologies={technologies}
              autoplay={true}
              showNavigation={true}
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our Magento Clients Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Success stories from enterprise retailers
            </p>
          </div>
          
          <TestimonialsCarousel testimonials={testimonials} />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 border-t border-border bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-4">
              {[
                {
                  question: 'What\'s the difference between Magento Open Source and Adobe Commerce?',
                  answer: 'Magento Open Source (free) includes core e-commerce features for up to $5M revenue. Adobe Commerce (formerly Magento Commerce, $22K-125K/year) adds B2B features, advanced inventory, customer segmentation, content staging, and enhanced security/support. Adobe Commerce Cloud includes managed hosting on AWS.'
                },
                {
                  question: 'How much does Magento development cost?',
                  answer: 'Magento Open Source implementation: $50,000-150,000. Adobe Commerce implementation: $150,000-500,000+. Includes design, development, integrations, data migration, and testing. Annual costs: Adobe Commerce license ($22K-125K), hosting ($500-5,000/month), support ($2K-10K/month). ROI typically achieved within 12-18 months.'
                },
                {
                  question: 'Can Magento handle millions of products?',
                  answer: 'Yes! With proper architecture (Elasticsearch, Redis, Varnish, CDN), Magento handles 100,000-500,000 SKUs efficiently. We\'ve built stores with 2M+ SKUs using catalog optimization, dynamic category loading, and database sharding. Performance remains sub-2s with the right infrastructure.'
                },
                {
                  question: 'What integrations does Magento support?',
                  answer: 'ERP: SAP, Oracle, NetSuite, Microsoft Dynamics. PIM: Akeneo, Pimcore, Salsify. OMS: ShipStation, Deposco, ShipBob. CRM: Salesforce, Microsoft Dynamics. Marketing: Marketo, HubSpot, Klaviyo. Payment: 100+ gateways. Plus custom APIs for legacy systems using REST/GraphQL.'
                },
                {
                  question: 'Is Magento suitable for B2B e-commerce?',
                  answer: 'Absolutely! Magento\'s B2B features are industry-leading: company accounts with role hierarchies, approval workflows, purchase orders, negotiable quotes, contract pricing, credit limits, quick order forms, requisition lists, and shared catalogs. Perfect for manufacturers, distributors, and wholesalers.'
                },
                {
                  question: 'How long does Magento development take?',
                  answer: 'Standard implementation: 12-16 weeks. Complex enterprise project: 20-30 weeks. Includes discovery, design, development, ERP/PIM integration, data migration (products/customers/orders), testing, and training. We use agile methodology with bi-weekly sprints for flexibility and transparency.'
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

      {/* CTA Section */}
      <CTASection 
        title="Ready to Build Enterprise E-commerce?"
        description="Launch a scalable Magento platform that handles millions of orders, integrates with your ERP/PIM, and grows with your business. From B2B portals to multi-store operations, we deliver enterprise-grade solutions."
        primaryButtonText="Start Your Project"
        primaryButtonLink="/contact"
        secondaryButtonText="Enterprise Features"
        secondaryButtonLink="#enterprise"
        showContactInfo={true}
      />
    </main>
  )
}
