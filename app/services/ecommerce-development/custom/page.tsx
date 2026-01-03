import { Metadata } from 'next'
import Image from 'next/image'
import { 
  Code2, 
  Sparkles, 
  Rocket, 
  TrendingUp, 
  Zap,
  ArrowRight,
  CheckCircle2,
  ShoppingCart,
  Database,
  Shield,
  Layers,
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
  title: 'Custom E-commerce Development | Build from Scratch | Tailored Solutions',
  description: 'Custom e-commerce platform development built from the ground up. Unique features, complete flexibility, and scalable architecture for businesses with specialized requirements.',
  keywords: 'custom ecommerce development, build ecommerce from scratch, custom shopping cart, bespoke ecommerce, headless commerce, custom online store, ecommerce platform development',
  openGraph: {
    title: 'Custom E-commerce Development | Build Your Dream Store from Scratch',
    description: 'No templates, no limitations. Build a completely custom e-commerce platform tailored to your exact business needs.',
    type: 'website',
  }
}

export default function CustomEcommercePage() {
  const projects = getFeaturedPortfolio(6)
  const technologies = getTechnologies()
  const testimonials = getFeaturedTestimonials(6)

  return (
    <main>
      <PageHero
        badge="Bespoke Solutions"
        title="Custom E-commerce Platforms"
        description="Break free from platform limitations. Build a completely custom e-commerce solution with unique features, unlimited flexibility, and your exact workflow - no compromises."
        ctaPrimary={{
          text: "Build Your Vision",
          href: "/contact"
        }}
        ctaSecondary={{
          text: "Why Custom?",
          href: "#why-custom"
        }}
        breadcrumbItems={[
          { label: 'Services', href: '/services' },
          { label: 'E-commerce Development' },
          { label: 'Custom E-commerce' }
        ]}
      />

      {/* Why Custom Section */}
      <section id="why-custom" className="py-20 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">When to Choose Custom E-commerce</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Off-the-shelf platforms work for most businesses - but some need complete flexibility
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Sparkles,
                title: 'Unique Business Model',
                description: 'Marketplace, subscription boxes, rental platform, auction site, B2B portal, or hybrid model that doesn\'t fit standard templates.',
                color: 'cyan'
              },
              {
                icon: Code2,
                title: 'Complex Workflows',
                description: 'Multi-step approval processes, custom pricing logic, dynamic product configuration, or specialized inventory management.',
                color: 'blue'
              },
              {
                icon: Database,
                title: 'Legacy System Integration',
                description: 'Need deep integration with custom ERP, proprietary warehouse system, or legacy databases that platforms can\'t handle.',
                color: 'indigo'
              },
              {
                icon: Shield,
                title: 'Data Security Requirements',
                description: 'Healthcare, finance, government, or industries with strict compliance (HIPAA, PCI, SOC 2) needing custom security.',
                color: 'purple'
              },
              {
                icon: TrendingUp,
                title: 'Competitive Advantage',
                description: 'Proprietary features, unique UX innovations, or custom algorithms that differentiate your business from competitors.',
                color: 'pink'
              },
              {
                icon: Layers,
                title: 'Platform Limitations',
                description: 'Outgrown Shopify/WooCommerce limits, need 100% control over frontend/backend, or require specific performance optimizations.',
                color: 'rose'
              }
            ].map((item, index) => (
              <div key={index} className="group relative">
                <div className={`absolute inset-0 bg-gradient-to-br from-${item.color}-600 to-${item.color}-800 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform opacity-20`} />
                <div className={`absolute inset-0 bg-gradient-to-br from-${item.color}-600 to-${item.color}-800 rounded-2xl transform rotate-1 group-hover:rotate-3 transition-transform opacity-40`} />
                <div className="relative bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all duration-300">
                  <item.icon className={`w-10 h-10 text-${item.color}-600 mb-4`} />
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features - Asymmetric Bento Grid */}
      <section className="py-20 border-t border-border bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What You Get with Custom E-commerce</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Complete control from database to UI - built exactly how you want it
            </p>
          </div>

          <div className="grid md:grid-cols-12 gap-6">
            {/* Large Feature - Spans 8 columns */}
            <div className="md:col-span-8 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-cyan-500 to-cyan-700 p-8 text-white hover:shadow-2xl transition-all duration-300">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform translate-x-32 -translate-y-32 group-hover:scale-150 transition-transform duration-500" />
              <div className="relative z-10">
                <Code2 className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold mb-3">Complete Flexibility & Customization</h3>
                <p className="text-cyan-100 mb-4 text-lg leading-relaxed">
                  No limitations. Build any feature imaginable - custom product types, unique checkout flows, proprietary algorithms, specialized admin panels, or innovative customer experiences. Your business logic, implemented exactly as you envision it.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="text-sm">Unlimited Features</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="text-sm">Custom Workflows</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="text-sm">Zero Constraints</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Tall Feature - 4 columns, 2 rows */}
            <div className="md:col-span-4 md:row-span-2 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 p-8 text-white hover:shadow-2xl transition-all duration-300">
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl transform -translate-x-24 translate-y-24 group-hover:scale-150 transition-transform duration-500" />
              <div className="relative z-10 h-full flex flex-col">
                <Rocket className="w-12 h-12 mb-4 group-hover:rotate-12 transition-transform" />
                <h3 className="text-2xl font-bold mb-3">Modern Tech Stack</h3>
                <p className="text-blue-100 mb-4 leading-relaxed flex-grow">
                  Built with latest technologies - React/Next.js frontend, Node.js/Python backend, PostgreSQL/MongoDB database, Redis caching, AWS/GCP cloud infrastructure, microservices architecture for scalability.
                </p>
                <div className="space-y-2 mt-auto">
                  <div className="flex items-center justify-between bg-white/10 rounded-lg p-2">
                    <span className="text-sm">React/Next.js</span>
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div className="flex items-center justify-between bg-white/10 rounded-lg p-2">
                    <span className="text-sm">Node.js API</span>
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div className="flex items-center justify-between bg-white/10 rounded-lg p-2">
                    <span className="text-sm">Cloud Native</span>
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>

            {/* Medium Feature - 4 columns */}
            <div className="md:col-span-4 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-500 to-indigo-700 p-6 text-white hover:shadow-2xl transition-all duration-300">
              <Database className="w-10 h-10 mb-3 group-hover:rotate-180 transition-transform duration-500" />
              <h3 className="text-xl font-bold mb-2">Full Data Ownership</h3>
              <p className="text-indigo-100 text-sm leading-relaxed">
                Your database, your servers, your data - complete control and portability
              </p>
            </div>

            {/* Medium Feature - 4 columns */}
            <div className="md:col-span-4 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-500 to-purple-700 p-6 text-white hover:shadow-2xl transition-all duration-300">
              <Zap className="w-10 h-10 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2">Optimized Performance</h3>
              <p className="text-purple-100 text-sm leading-relaxed">
                Custom caching strategies, CDN, lazy loading - built for speed
              </p>
            </div>

            {/* Large Feature - Spans 8 columns */}
            <div className="md:col-span-8 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-pink-500 to-pink-700 p-8 text-white hover:shadow-2xl transition-all duration-300">
              <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform -translate-x-32 -translate-y-32 group-hover:scale-150 transition-transform duration-500" />
              <div className="relative z-10">
                <Settings className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold mb-3">Seamless Integrations</h3>
                <p className="text-pink-100 mb-4 text-lg leading-relaxed">
                  Connect to any system - legacy ERP, custom warehouse management, proprietary CRM, specialized payment processors, or niche shipping providers. Build custom APIs and webhooks for real-time data sync. No plugin limitations.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="text-sm">Custom APIs</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="text-sm">Legacy Systems</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="text-sm">Real-Time Sync</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Medium Feature - 4 columns */}
            <div className="md:col-span-4 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-rose-500 to-rose-700 p-6 text-white hover:shadow-2xl transition-all duration-300">
              <Shield className="w-10 h-10 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2">Enterprise Security</h3>
              <p className="text-rose-100 text-sm leading-relaxed">
                Custom security policies, compliance controls, and audit trails
              </p>
            </div>

            {/* Medium Feature - 4 columns */}
            <div className="md:col-span-4 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-red-500 to-red-700 p-6 text-white hover:shadow-2xl transition-all duration-300">
              <Layers className="w-10 h-10 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2">Scalable Architecture</h3>
              <p className="text-red-100 text-sm leading-relaxed">
                Microservices, auto-scaling, load balancing for millions of users
              </p>
            </div>

            {/* Medium Feature - 4 columns */}
            <div className="md:col-span-4 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-orange-500 to-orange-700 p-6 text-white hover:shadow-2xl transition-all duration-300">
              <ShoppingCart className="w-10 h-10 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2">Unique UX/UI</h3>
              <p className="text-orange-100 text-sm leading-relaxed">
                Custom design system, brand-aligned experience, no templates
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
            title="Custom E-commerce Tech Stack"
            subtitle="Modern technologies for building scalable, high-performance e-commerce"
            filterSlugs={[
              'react', 'nextjs', 'nodejs', 'python', 'postgresql',
              'mongodb', 'redis', 'aws', 'docker', 'kubernetes'
            ]}
            showStats={true}
          />
        </div>
      </section>

      {/* Custom vs Platform Comparison */}
      <section className="py-20 border-t border-border bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Custom vs Off-the-Shelf Platforms</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Understand the trade-offs between custom development and existing platforms
            </p>
          </div>

          <div className="max-w-5xl mx-auto overflow-x-auto">
            <table className="w-full border-collapse bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg">
              <thead className="bg-cyan-600 text-white">
                <tr>
                  <th className="p-4 text-left font-semibold">Feature</th>
                  <th className="p-4 text-center font-semibold">Custom Built</th>
                  <th className="p-4 text-center font-semibold">Shopify/WooCommerce</th>
                  <th className="p-4 text-center font-semibold">Magento</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                <tr className="hover:bg-muted/50 transition-colors">
                  <td className="p-4 font-medium">Customization</td>
                  <td className="p-4 text-center text-green-600 font-semibold">Unlimited (100%)</td>
                  <td className="p-4 text-center">Limited by plugins</td>
                  <td className="p-4 text-center">High (but complex)</td>
                </tr>
                <tr className="hover:bg-muted/50 transition-colors">
                  <td className="p-4 font-medium">Initial Cost</td>
                  <td className="p-4 text-center">$75K-500K+</td>
                  <td className="p-4 text-center text-green-600 font-semibold">$5K-50K</td>
                  <td className="p-4 text-center">$50K-200K</td>
                </tr>
                <tr className="hover:bg-muted/50 transition-colors">
                  <td className="p-4 font-medium">Monthly Costs</td>
                  <td className="p-4 text-center">$500-5K (hosting/maintenance)</td>
                  <td className="p-4 text-center">$29-299 + hosting</td>
                  <td className="p-4 text-center">$2K-10K (Adobe Commerce)</td>
                </tr>
                <tr className="hover:bg-muted/50 transition-colors">
                  <td className="p-4 font-medium">Development Time</td>
                  <td className="p-4 text-center">4-9 months</td>
                  <td className="p-4 text-center text-green-600 font-semibold">1-3 months</td>
                  <td className="p-4 text-center">3-6 months</td>
                </tr>
                <tr className="hover:bg-muted/50 transition-colors">
                  <td className="p-4 font-medium">Scalability</td>
                  <td className="p-4 text-center text-green-600 font-semibold">Unlimited (custom infra)</td>
                  <td className="p-4 text-center">Good (with limits)</td>
                  <td className="p-4 text-center">Excellent</td>
                </tr>
                <tr className="hover:bg-muted/50 transition-colors">
                  <td className="p-4 font-medium">Data Ownership</td>
                  <td className="p-4 text-center text-green-600 font-semibold">100% yours</td>
                  <td className="p-4 text-center">Platform-dependent</td>
                  <td className="p-4 text-center">100% yours</td>
                </tr>
                <tr className="hover:bg-muted/50 transition-colors">
                  <td className="p-4 font-medium">Performance</td>
                  <td className="p-4 text-center text-green-600 font-semibold">Optimized for your needs</td>
                  <td className="p-4 text-center">Good (with optimization)</td>
                  <td className="p-4 text-center">Good (requires tuning)</td>
                </tr>
                <tr className="hover:bg-muted/50 transition-colors">
                  <td className="p-4 font-medium">Best For</td>
                  <td className="p-4 text-center text-green-600 font-semibold">Unique requirements</td>
                  <td className="p-4 text-center">Standard stores</td>
                  <td className="p-4 text-center">Enterprise B2B</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 max-w-3xl mx-auto bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
            <p className="text-center text-lg font-semibold text-blue-900 dark:text-blue-100">
              💡 Rule of Thumb: Choose custom if your unique features will drive $500K+ additional revenue, or if platform limitations actively block your business model.
            </p>
          </div>
        </div>
      </section>

      {/* Implementation Process Timeline */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Custom E-commerce Development Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From concept to launch in 4-9 months (depends on complexity)
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {[
              {
                step: '01',
                title: 'Discovery & Requirements',
                description: 'In-depth workshops to understand your business model, unique workflows, integrations needed, and competitive advantages. Create detailed technical requirements document and project roadmap.',
                duration: '2-4 weeks',
                icon: Sparkles
              },
              {
                step: '02',
                title: 'Architecture & Design',
                description: 'Design system architecture (microservices vs monolith), database schema, API contracts, and integration patterns. Create UX wireframes and high-fidelity UI mockups aligned with your brand.',
                duration: '3-6 weeks',
                icon: Code2
              },
              {
                step: '03',
                title: 'Backend Development',
                description: 'Build custom API with authentication, product catalog, shopping cart, order management, payment processing, inventory tracking, and admin panel. Implement business logic and integrations.',
                duration: '8-16 weeks',
                icon: Database
              },
              {
                step: '04',
                title: 'Frontend Development',
                description: 'Build responsive React/Next.js storefront with product browsing, search/filters, cart/checkout, user accounts, and order tracking. Optimize for Core Web Vitals and accessibility.',
                duration: '6-12 weeks',
                icon: ShoppingCart
              },
              {
                step: '05',
                title: 'Testing & Quality Assurance',
                description: 'Comprehensive testing: unit tests, integration tests, load testing (10K concurrent users), security audits (OWASP), payment testing, and UAT with real users.',
                duration: '3-5 weeks',
                icon: Shield
              },
              {
                step: '06',
                title: 'Launch & Optimization',
                description: 'Deploy to production with CI/CD pipeline, set up monitoring (error tracking, performance), train your team, and provide 3-month post-launch support with iterative improvements.',
                duration: '2-3 weeks',
                icon: Rocket
              }
            ].map((item, index) => (
              <div key={index} className="relative pl-8 pb-12 border-l-2 border-cyan-600 last:border-0 last:pb-0">
                <div className="absolute left-0 top-0 w-4 h-4 bg-cyan-600 rounded-full -translate-x-[9px]" />
                <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow ml-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="text-3xl font-bold text-cyan-600">{item.step}</div>
                      <div>
                        <h3 className="text-xl font-bold">{item.title}</h3>
                        <p className="text-sm text-muted-foreground flex items-center mt-1">
                          <Zap className="w-4 h-4 mr-1" />
                          {item.duration}
                        </p>
                      </div>
                    </div>
                    <item.icon className="w-8 h-8 text-cyan-600" />
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
              Custom E-commerce Platforms We've Built
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Unique solutions for businesses with specialized requirements
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
              What Our Custom E-commerce Clients Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Success stories from businesses that built custom solutions
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
                  question: 'When should I choose custom e-commerce over Shopify/WooCommerce?',
                  answer: 'Choose custom when: 1) Your business model doesn\'t fit standard templates (marketplace, rentals, subscriptions with unique rules), 2) Platform limitations actively block features you need, 3) You require deep integration with proprietary systems, 4) Your unique features will generate $500K+ additional revenue, 5) You need enterprise-grade scalability (millions of SKUs, 100K+ concurrent users).'
                },
                {
                  question: 'How much does custom e-commerce development cost?',
                  answer: 'MVP (basic e-commerce): $75K-150K. Full-featured platform: $150K-300K. Enterprise solution with complex integrations: $300K-1M+. Costs include discovery, design, development, testing, deployment, and 3-month support. Monthly costs: $500-5,000 for hosting, maintenance, and monitoring. ROI typically achieved in 12-24 months.'
                },
                {
                  question: 'What technologies do you use for custom e-commerce?',
                  answer: 'Frontend: React, Next.js, TypeScript, Tailwind CSS. Backend: Node.js (Express/NestJS) or Python (Django/FastAPI). Database: PostgreSQL or MongoDB. Caching: Redis. Search: Elasticsearch. Cloud: AWS or Google Cloud. Payment: Stripe, PayPal, custom gateways. Infrastructure: Docker, Kubernetes, CI/CD pipelines.'
                },
                {
                  question: 'Can you migrate from Shopify/WooCommerce to custom?',
                  answer: 'Yes! We migrate products, customers, orders, and historical data from existing platforms. Process: 1) Build new custom platform, 2) Migrate data with ETL scripts, 3) Run parallel (old + new) during testing, 4) Cutover with DNS change. Zero downtime migration possible. Timeline: 1-2 weeks for data migration after platform is built.'
                },
                {
                  question: 'How do you ensure security and PCI compliance?',
                  answer: 'Security measures: SSL/TLS encryption, tokenized payments (PCI-DSS Level 1 gateways handle card data), input validation, SQL injection prevention, CSRF/XSS protection, WAF (Web Application Firewall), regular security audits, penetration testing, and SOC 2 compliance for enterprise. All code follows OWASP security guidelines.'
                },
                {
                  question: 'What ongoing maintenance and support do you provide?',
                  answer: 'We offer: 1) Bug fixes and security patches, 2) Infrastructure monitoring (uptime, performance, errors), 3) Dependency updates, 4) Feature enhancements and new functionality, 5) Scalability adjustments as traffic grows, 6) 24/7 incident response for critical issues. Typical cost: $2K-10K/month depending on complexity and SLA requirements.'
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
        title="Ready to Build Your Custom E-commerce Platform?"
        description="Break free from platform limitations. Build a completely custom solution with unique features, unlimited flexibility, and your exact workflow. Own your data, control your destiny."
        primaryButtonText="Build Your Vision"
        primaryButtonLink="/contact"
        secondaryButtonText="Why Custom?"
        secondaryButtonLink="#why-custom"
        showContactInfo={true}
      />
    </main>
  )
}
