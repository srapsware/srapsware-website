import { Metadata } from 'next'
import { PageHero } from '@/components/sections/page-hero'
import { CTASection } from '@/components/sections/cta-section'
import { ShoppingCart, ShoppingBag, Box, Code } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'E-Commerce Development Services | Shopify, WooCommerce, Magento | Srapsware',
  description: 'Professional e-commerce development services including WooCommerce, Shopify, Magento, and custom online stores.',
  openGraph: {
    title: 'E-Commerce Development Services',
    description: 'Build powerful online stores that drive sales and growth',
    type: 'website',
  }
}

const ecommerceServices = [
  {
    title: 'WooCommerce Development',
    description: 'Custom WordPress WooCommerce stores with advanced functionality and seamless integrations.',
    icon: ShoppingCart,
    href: '/services/ecommerce-development/woocommerce',
    features: ['Custom Themes', 'Plugin Development', 'Payment Gateways', 'Shipping Integration'],
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Shopify Development',
    description: 'Build beautiful Shopify stores with custom themes, apps, and optimized conversion funnels.',
    icon: ShoppingBag,
    href: '/services/ecommerce-development/shopify',
    features: ['Custom Themes', 'Shopify Apps', 'Store Migration', 'Dropshipping Setup'],
    color: 'from-green-500 to-emerald-500'
  },
  {
    title: 'Magento Development',
    description: 'Enterprise-grade Magento e-commerce solutions for large-scale online businesses.',
    icon: Box,
    href: '/services/ecommerce-development/magento',
    features: ['Magento 2', 'Custom Extensions', 'Multi-Store Setup', 'B2B Solutions'],
    color: 'from-orange-500 to-red-500'
  },
  {
    title: 'Custom E-Commerce',
    description: 'Bespoke e-commerce platforms built from scratch with unique features and functionality.',
    icon: Code,
    href: '/services/ecommerce-development/custom',
    features: ['Custom Platform', 'Unique Features', 'Scalable Architecture', 'Full Control'],
    color: 'from-blue-500 to-cyan-500'
  }
]

export default function EcommerceDevelopmentPage() {
  return (
    <main>
      {/* Hero Section */}
      <PageHero
        badge="E-Commerce Development"
        title="E-Commerce Development Services"
        description="Build powerful online stores that drive sales with WooCommerce, Shopify, Magento, and custom e-commerce solutions."
        ctaPrimary={{
          text: 'Start Your Project',
          href: '/contact'
        }}
        ctaSecondary={{
          text: 'View Portfolio',
          href: '/portfolio'
        }}
      />

      {/* Services Grid */}
      <section className="relative py-32 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Our E-Commerce Development Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From ready-made platforms to custom solutions, we build e-commerce experiences that convert.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {ecommerceServices.map((service) => {
              const Icon = service.icon
              return (
                <Link
                  key={service.title}
                  href={service.href}
                  className="group relative p-8 rounded-2xl border border-border bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1"
                >
                  {/* Gradient Accent */}
                  <div className={`absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                  
                  {/* Icon */}
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${service.color} mb-6`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </main>
  )
}
