import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { 
  ShoppingCart, 
  Package, 
  CreditCard, 
  TrendingUp, 
  Zap,
  ArrowRight,
  CheckCircle2,
  Truck,
  BarChart3,
  Shield,
  Globe,
  Settings
} from 'lucide-react'
import { cn } from '@/lib/utils'
import TechShowcase from '@/components/animations/tech-showcase'
import { PortfolioSlider } from '@/components/sections/portfolio-slider'
import { TestimonialsCarousel } from '@/components/sections/testimonials-carousel'
import { CTASection } from '@/components/sections/cta-section'
import { getFeaturedPortfolio, getTechnologies, getFeaturedTestimonials } from '@/lib/content'

export const metadata: Metadata = {
  title: 'WooCommerce Development Services | Custom WordPress E-commerce',
  description: 'Professional WooCommerce development for WordPress e-commerce stores. Custom themes, payment gateways, shipping integrations, and performance optimization for online retail success.',
  keywords: 'WooCommerce development, WordPress e-commerce, WooCommerce store, custom WooCommerce, online store development, WooCommerce themes, payment gateway integration, WooCommerce plugins',
  openGraph: {
    title: 'WooCommerce Development Services | WordPress E-commerce Solutions',
    description: 'Build powerful online stores with WooCommerce. Custom development, integrations, and optimization for high-converting e-commerce.',
    type: 'website',
  }
}

export default function WooCommercePage() {
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
            <Link href="/solutions/ecommerce" className="hover:text-foreground transition-colors">E-commerce</Link>
            <span>/</span>
            <span className="text-foreground font-medium">WooCommerce Development</span>
          </nav>
        </div>
      </section>

      {/* Hero Section - Modern Gradient Design */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 dark:from-purple-950/20 dark:via-pink-950/20 dark:to-rose-950/20" />
        <div className="absolute inset-0 bg-grid-slate-900/[0.04] dark:bg-grid-slate-400/[0.05] bg-[size:32px_32px]" />
        
        {/* Floating Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-400/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-rose-400/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-4 px-4 py-1.5 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium">
                🛒 E-commerce Solutions
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 bg-clip-text text-transparent">
                WooCommerce Development
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                Build powerful WordPress e-commerce stores with WooCommerce. Custom themes, payment gateways, shipping integrations, and conversion optimization for online retail success.
              </p>

              {/* Key Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center p-4 rounded-lg bg-white/50 dark:bg-black/20 backdrop-blur-sm border border-white/20">
                  <div className="text-3xl font-bold text-purple-600">200+</div>
                  <div className="text-sm text-muted-foreground">Stores Built</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-white/50 dark:bg-black/20 backdrop-blur-sm border border-white/20">
                  <div className="text-3xl font-bold text-pink-600">30%</div>
                  <div className="text-sm text-muted-foreground">Market Share</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-white/50 dark:bg-black/20 backdrop-blur-sm border border-white/20">
                  <div className="text-3xl font-bold text-rose-600">$10M+</div>
                  <div className="text-sm text-muted-foreground">Sales Enabled</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200"
                >
                  Start Your Store
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link 
                  href="#features"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-purple-600 text-purple-600 dark:text-purple-400 rounded-lg font-semibold hover:bg-purple-50 dark:hover:bg-purple-950/30 transition-all duration-200"
                >
                  View Features
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 backdrop-blur-sm">
                <Image
                  src="https://picsum.photos/800/600?random=woocommerce"
                  alt="WooCommerce Store with Custom Theme and Shopping Cart"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                  priority
                />
                {/* Floating Badge */}
                <div className="absolute top-6 right-6 bg-white/90 dark:bg-black/90 backdrop-blur-md px-4 py-2 rounded-lg shadow-lg border border-white/20">
                  <div className="flex items-center space-x-2">
                    <ShoppingCart className="w-5 h-5 text-purple-500 animate-pulse" />
                    <span className="font-semibold text-sm">Powered by WooCommerce</span>
                  </div>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex items-center space-x-4 bg-white dark:bg-gray-900 px-6 py-3 rounded-full shadow-xl border border-gray-200 dark:border-gray-800">
                <ShoppingCart className="w-6 h-6 text-purple-600" />
                <CreditCard className="w-6 h-6 text-pink-600" />
                <Truck className="w-6 h-6 text-rose-600" />
                <Shield className="w-6 h-6 text-red-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section - Magazine Layout */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-4">
          {/* Layout 1: Diagonal Split */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://picsum.photos/600/400?random=wordpress-ecommerce"
                  alt="Custom WooCommerce Theme Development"
                  width={600}
                  height={400}
                  className="w-full h-auto transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm font-medium">Beautiful E-commerce</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 lg:pl-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why WooCommerce?</h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                WooCommerce powers 30% of all online stores, making it the world's most popular e-commerce platform. Built on WordPress, it offers unmatched flexibility, thousands of plugins, and complete ownership of your store data without monthly platform fees.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We build custom WooCommerce stores that convert browsers into buyers. From product catalog design to checkout optimization, payment gateway integration to shipping automation - we handle every aspect of your online retail success.
              </p>
            </div>
          </div>

          {/* Layout 2: Reverse Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16 items-center">
            <div className="lg:pr-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Custom WooCommerce Development</h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                Every business is unique. We create custom WooCommerce themes tailored to your brand, build custom plugins for specialized features, and integrate third-party systems (CRM, ERP, inventory management) to create a seamless e-commerce ecosystem.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Need B2B features like wholesale pricing, quote requests, or bulk ordering? Want subscription products, bookings, or digital downloads? We extend WooCommerce's capabilities to match your exact business requirements.
              </p>
            </div>
            <div>
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://picsum.photos/600/400?random=custom-woocommerce"
                  alt="Custom WooCommerce Plugin Development"
                  width={600}
                  height={400}
                  className="w-full h-auto transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm font-medium">Tailored Solutions</p>
                </div>
              </div>
            </div>
          </div>

          {/* Layout 3: Full-Width Stats */}
          <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 rounded-2xl p-8 text-white">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">200+</div>
                <div className="text-purple-100">WooCommerce Stores</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">$10M+</div>
                <div className="text-purple-100">Revenue Facilitated</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">98%</div>
                <div className="text-purple-100">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">3.5%</div>
                <div className="text-purple-100">Avg Conversion Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features - Asymmetric Bento Grid */}
      <section className="py-20 border-t border-border bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Complete WooCommerce Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to launch and grow a successful online store
            </p>
          </div>

          <div className="grid md:grid-cols-12 gap-6">
            {/* Large Feature - Spans 8 columns */}
            <div className="md:col-span-8 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-500 to-purple-700 p-8 text-white hover:shadow-2xl transition-all duration-300">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform translate-x-32 -translate-y-32 group-hover:scale-150 transition-transform duration-500" />
              <div className="relative z-10">
                <ShoppingCart className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold mb-3">Custom Theme Development</h3>
                <p className="text-purple-100 mb-4 text-lg leading-relaxed">
                  Unique, mobile-responsive themes built from scratch to match your brand identity. Fast-loading designs optimized for conversions with strategic CTAs, trust signals, and intuitive navigation. Includes homepage, product pages, cart, checkout, and account areas.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="text-sm">Responsive Design</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="text-sm">Brand Aligned</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="text-sm">Conversion Optimized</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Tall Feature - 4 columns, 2 rows */}
            <div className="md:col-span-4 md:row-span-2 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-pink-500 to-pink-700 p-8 text-white hover:shadow-2xl transition-all duration-300">
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl transform -translate-x-24 translate-y-24 group-hover:scale-150 transition-transform duration-500" />
              <div className="relative z-10 h-full flex flex-col">
                <CreditCard className="w-12 h-12 mb-4 group-hover:rotate-12 transition-transform" />
                <h3 className="text-2xl font-bold mb-3">Payment Gateway Integration</h3>
                <p className="text-pink-100 mb-4 leading-relaxed flex-grow">
                  Accept payments via Stripe, PayPal, Square, Authorize.net, and 100+ gateways. Support for credit cards, digital wallets (Apple Pay, Google Pay), BNPL (Klarna, Afterpay), and local payment methods for international sales.
                </p>
                <div className="space-y-2 mt-auto">
                  <div className="flex items-center justify-between bg-white/10 rounded-lg p-2">
                    <span className="text-sm">Stripe & PayPal</span>
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div className="flex items-center justify-between bg-white/10 rounded-lg p-2">
                    <span className="text-sm">Apple/Google Pay</span>
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div className="flex items-center justify-between bg-white/10 rounded-lg p-2">
                    <span className="text-sm">BNPL Options</span>
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>

            {/* Medium Feature - 4 columns */}
            <div className="md:col-span-4 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-rose-500 to-rose-700 p-6 text-white hover:shadow-2xl transition-all duration-300">
              <Truck className="w-10 h-10 mb-3 group-hover:rotate-180 transition-transform duration-500" />
              <h3 className="text-xl font-bold mb-2">Shipping & Tax Automation</h3>
              <p className="text-rose-100 text-sm leading-relaxed">
                Real-time shipping rates, tax calculation, and fulfillment integrations
              </p>
            </div>

            {/* Medium Feature - 4 columns */}
            <div className="md:col-span-4 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-red-500 to-red-700 p-6 text-white hover:shadow-2xl transition-all duration-300">
              <Package className="w-10 h-10 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2">Inventory Management</h3>
              <p className="text-red-100 text-sm leading-relaxed">
                Stock tracking, low stock alerts, and multi-warehouse support
              </p>
            </div>

            {/* Large Feature - Spans 8 columns */}
            <div className="md:col-span-8 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-500 to-indigo-700 p-8 text-white hover:shadow-2xl transition-all duration-300">
              <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform -translate-x-32 -translate-y-32 group-hover:scale-150 transition-transform duration-500" />
              <div className="relative z-10">
                <Settings className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold mb-3">Custom Plugins & Integrations</h3>
                <p className="text-indigo-100 mb-4 text-lg leading-relaxed">
                  Build custom WooCommerce plugins for unique features: wholesale pricing tiers, quote systems, product configurators, booking engines, subscriptions, memberships, and more. Integrate with CRM (Salesforce, HubSpot), ERP, POS systems, and marketing tools.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="text-sm">Custom Features</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="text-sm">Third-Party APIs</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="text-sm">Automation</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Medium Feature - 4 columns */}
            <div className="md:col-span-4 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 p-6 text-white hover:shadow-2xl transition-all duration-300">
              <Zap className="w-10 h-10 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2">Performance Optimization</h3>
              <p className="text-blue-100 text-sm leading-relaxed">
                Speed optimization, caching, CDN setup for sub-2s page loads
              </p>
            </div>

            {/* Medium Feature - 4 columns */}
            <div className="md:col-span-4 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-cyan-500 to-cyan-700 p-6 text-white hover:shadow-2xl transition-all duration-300">
              <BarChart3 className="w-10 h-10 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2">Analytics & Reporting</h3>
              <p className="text-cyan-100 text-sm leading-relaxed">
                Sales reports, customer insights, and Google Analytics integration
              </p>
            </div>

            {/* Medium Feature - 4 columns */}
            <div className="md:col-span-4 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-teal-500 to-teal-700 p-6 text-white hover:shadow-2xl transition-all duration-300">
              <Shield className="w-10 h-10 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2">Security & Compliance</h3>
              <p className="text-teal-100 text-sm leading-relaxed">
                PCI compliance, SSL certificates, fraud prevention, and regular updates
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
            title="WooCommerce Technology Stack"
            subtitle="WordPress, WooCommerce, and e-commerce tools we use"
            filterSlugs={[
              'wordpress', 'php', 'mysql', 'javascript', 'react',
              'woocommerce', 'stripe', 'aws', 'cloudflare', 'git'
            ]}
            showStats={true}
          />
        </div>
      </section>

      {/* WooCommerce vs Alternatives */}
      <section className="py-20 border-t border-border bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">WooCommerce vs Other E-commerce Platforms</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See how WooCommerce compares to Shopify, Magento, and BigCommerce
            </p>
          </div>

          <div className="max-w-5xl mx-auto overflow-x-auto">
            <table className="w-full border-collapse bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg">
              <thead className="bg-purple-600 text-white">
                <tr>
                  <th className="p-4 text-left font-semibold">Feature</th>
                  <th className="p-4 text-center font-semibold">WooCommerce</th>
                  <th className="p-4 text-center font-semibold">Shopify</th>
                  <th className="p-4 text-center font-semibold">Magento</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                <tr className="hover:bg-muted/50 transition-colors">
                  <td className="p-4 font-medium">Monthly Cost</td>
                  <td className="p-4 text-center text-green-600 font-semibold">$0 (hosting only)</td>
                  <td className="p-4 text-center">$29-$299/mo</td>
                  <td className="p-4 text-center">$0 (hosting costs)</td>
                </tr>
                <tr className="hover:bg-muted/50 transition-colors">
                  <td className="p-4 font-medium">Transaction Fees</td>
                  <td className="p-4 text-center text-green-600 font-semibold">None</td>
                  <td className="p-4 text-center">0.5-2% if not using Shopify Payments</td>
                  <td className="p-4 text-center">None</td>
                </tr>
                <tr className="hover:bg-muted/50 transition-colors">
                  <td className="p-4 font-medium">Customization</td>
                  <td className="p-4 text-center text-green-600 font-semibold">Unlimited (open source)</td>
                  <td className="p-4 text-center">Limited (Liquid templating)</td>
                  <td className="p-4 text-center">Unlimited (complex)</td>
                </tr>
                <tr className="hover:bg-muted/50 transition-colors">
                  <td className="p-4 font-medium">Plugins/Extensions</td>
                  <td className="p-4 text-center text-green-600 font-semibold">58,000+</td>
                  <td className="p-4 text-center">8,000+</td>
                  <td className="p-4 text-center">5,000+</td>
                </tr>
                <tr className="hover:bg-muted/50 transition-colors">
                  <td className="p-4 font-medium">SEO Control</td>
                  <td className="p-4 text-center text-green-600 font-semibold">Full control</td>
                  <td className="p-4 text-center">Good (limited)</td>
                  <td className="p-4 text-center">Full control</td>
                </tr>
                <tr className="hover:bg-muted/50 transition-colors">
                  <td className="p-4 font-medium">Data Ownership</td>
                  <td className="p-4 text-center text-green-600 font-semibold">Full ownership</td>
                  <td className="p-4 text-center">Platform-dependent</td>
                  <td className="p-4 text-center">Full ownership</td>
                </tr>
                <tr className="hover:bg-muted/50 transition-colors">
                  <td className="p-4 font-medium">Ease of Use</td>
                  <td className="p-4 text-center">Easy (with support)</td>
                  <td className="p-4 text-center text-green-600 font-semibold">Very Easy</td>
                  <td className="p-4 text-center">Complex</td>
                </tr>
                <tr className="hover:bg-muted/50 transition-colors">
                  <td className="p-4 font-medium">Best For</td>
                  <td className="p-4 text-center text-green-600 font-semibold">All business sizes</td>
                  <td className="p-4 text-center">Small-medium stores</td>
                  <td className="p-4 text-center">Enterprise only</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Implementation Process Timeline */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">WooCommerce Development Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From concept to launch in 4-8 weeks
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {[
              {
                step: '01',
                title: 'Discovery & Planning',
                description: 'Define product catalog structure, payment methods, shipping zones, and required features. Plan custom functionality, third-party integrations, and design mockups.',
                duration: '3-5 days',
                icon: ShoppingCart
              },
              {
                step: '02',
                title: 'Theme Development',
                description: 'Build custom WordPress theme with WooCommerce templates, mobile-responsive design, product page layouts, cart/checkout optimization, and brand integration.',
                duration: '2-3 weeks',
                icon: Globe
              },
              {
                step: '03',
                title: 'WooCommerce Configuration',
                description: 'Set up products, categories, attributes, variations, payment gateways (Stripe, PayPal), shipping methods, tax rules, and email notifications.',
                duration: '1 week',
                icon: Settings
              },
              {
                step: '04',
                title: 'Plugin Development & Integration',
                description: 'Develop custom plugins for specialized features, integrate third-party services (CRM, email marketing, analytics), and configure SEO plugins.',
                duration: '1-2 weeks',
                icon: Package
              },
              {
                step: '05',
                title: 'Testing & Optimization',
                description: 'Test checkout flow, payment processing, shipping calculations, mobile responsiveness, cross-browser compatibility, and page speed optimization.',
                duration: '3-5 days',
                icon: Zap
              },
              {
                step: '06',
                title: 'Launch & Training',
                description: 'Deploy to production, configure SSL, set up backups, provide admin training on managing products/orders, and offer 30-day post-launch support.',
                duration: '2-3 days',
                icon: TrendingUp
              }
            ].map((item, index) => (
              <div key={index} className="relative pl-8 pb-12 border-l-2 border-purple-600 last:border-0 last:pb-0">
                <div className="absolute left-0 top-0 w-4 h-4 bg-purple-600 rounded-full -translate-x-[9px]" />
                <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow ml-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="text-3xl font-bold text-purple-600">{item.step}</div>
                      <div>
                        <h3 className="text-xl font-bold">{item.title}</h3>
                        <p className="text-sm text-muted-foreground flex items-center mt-1">
                          <Zap className="w-4 h-4 mr-1" />
                          {item.duration}
                        </p>
                      </div>
                    </div>
                    <item.icon className="w-8 h-8 text-purple-600" />
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
              WooCommerce Stores We've Built
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore successful online stores powered by our WooCommerce development
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
              What Our WooCommerce Clients Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Success stories from online retailers who chose WooCommerce
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
                  question: 'Why choose WooCommerce over Shopify?',
                  answer: 'WooCommerce has no monthly fees or transaction fees, offers unlimited customization as open-source software, and you own all your data. Shopify is easier for beginners but charges monthly fees ($29-299), transaction fees (0.5-2%), and limits customization. WooCommerce is better for long-term growth and businesses needing custom features.'
                },
                {
                  question: 'What are the costs of running a WooCommerce store?',
                  answer: 'Hosting: $10-100/month (managed WooCommerce hosting). Domain: $15/year. SSL certificate: Free (Let\'s Encrypt). Theme: $0-60 one-time. Plugins: $0-200/year. Payment processing: 2.9% + 30¢ per transaction (Stripe/PayPal). Total: ~$500-2,000/year vs Shopify\'s $348-3,588/year in platform fees alone.'
                },
                {
                  question: 'Can WooCommerce handle large product catalogs?',
                  answer: 'Yes! With proper hosting and optimization, WooCommerce handles 10,000+ products easily. We implement caching (Redis/Memcached), CDN (Cloudflare), database optimization, and lazy loading for fast performance even with massive catalogs. Many enterprise stores run 50,000+ products on WooCommerce.'
                },
                {
                  question: 'What payment gateways does WooCommerce support?',
                  answer: 'WooCommerce supports 100+ payment gateways: Stripe, PayPal, Square, Authorize.net, Braintree, 2Checkout, and more. We can integrate any payment provider with an API. Also supports digital wallets (Apple Pay, Google Pay), BNPL (Klarna, Afterpay), and local payment methods for international sales.'
                },
                {
                  question: 'Is WooCommerce secure for online payments?',
                  answer: 'Yes! WooCommerce is PCI-compliant when properly configured. We implement SSL certificates, secure payment tokenization (PCI-DSS Level 1), regular security updates, WAF (Web Application Firewall), two-factor authentication, and automated backups. All sensitive payment data is handled by payment gateways, not stored on your server.'
                },
                {
                  question: 'How long does WooCommerce development take?',
                  answer: 'Simple store (existing theme, basic setup): 2-4 weeks. Custom theme + integrations: 6-10 weeks. Complex store (custom features, B2B, multi-vendor): 12-16 weeks. Timeline includes design, development, product upload, payment/shipping setup, testing, and launch. We can expedite with dedicated resources.'
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
        title="Ready to Launch Your WooCommerce Store?"
        description="Build a powerful, scalable online store with WooCommerce. Custom themes, payment integrations, and conversion optimization - no monthly platform fees, complete data ownership."
        primaryButtonText="Start Your Store"
        primaryButtonLink="/contact"
        secondaryButtonText="View Features"
        secondaryButtonLink="#features"
        showContactInfo={true}
      />
    </div>
  )
}
