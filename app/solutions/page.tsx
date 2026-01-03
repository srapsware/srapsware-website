import { Metadata } from 'next'
import { PageHero } from '@/components/sections/page-hero'
import { CTASection } from '@/components/sections/cta-section'
import { ShoppingCart, Building2, TrendingUp, Shield, Wrench, Zap, Workflow, Database } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Business Solutions | E-commerce, Enterprise, SaaS | Srapsware',
  description: 'Comprehensive business solutions including e-commerce platforms, enterprise applications, SaaS development, and digital transformation services.',
  openGraph: {
    title: 'Business Solutions - Transform Your Digital Presence',
    description: 'Custom solutions for modern businesses',
    type: 'website',
  }
}

const solutionCategories = [
  {
    title: 'E-Commerce Solutions',
    description: 'Complete online store solutions with WooCommerce, Shopify, Magento, and custom platforms.',
    icon: ShoppingCart,
    href: '/solutions/ecommerce/custom',
    features: ['Multi-vendor Marketplaces', 'Payment Integration', 'Inventory Management', 'Mobile Commerce'],
    platforms: ['WooCommerce', 'Shopify', 'Magento', 'Custom'],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Enterprise Applications',
    description: 'Scalable enterprise systems including ERP, CRM, and business intelligence solutions.',
    icon: Building2,
    href: '/solutions/saas',
    features: ['ERP Integration', 'CRM Systems', 'Business Intelligence', 'Workflow Automation'],
    platforms: ['Custom ERP', 'Salesforce', 'Microsoft Dynamics', 'SAP'],
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Digital Transformation',
    description: 'Modernize legacy systems and transform your business with cutting-edge technology.',
    icon: TrendingUp,
    href: '/solutions/automation',
    features: ['Legacy Modernization', 'Process Automation', 'Cloud Migration', 'Data Analytics'],
    platforms: ['Cloud Platforms', 'AI/ML', 'RPA', 'IoT'],
    color: 'from-orange-500 to-red-500'
  },
  {
    title: 'SaaS Development',
    description: 'Build scalable multi-tenant SaaS applications with subscription management.',
    icon: Zap,
    href: '/solutions/saas',
    features: ['Multi-tenancy', 'Subscription Billing', 'API Integration', 'Real-time Updates'],
    platforms: ['AWS', 'Azure', 'Google Cloud', 'Custom'],
    color: 'from-cyan-500 to-blue-500'
  },
  {
    title: 'Business Automation',
    description: 'Automate repetitive tasks and streamline workflows to boost productivity.',
    icon: Workflow,
    href: '/solutions/automation',
    features: ['RPA Implementation', 'Workflow Design', 'Integration Hub', 'Analytics Dashboard'],
    platforms: ['Zapier', 'Make', 'n8n', 'Custom'],
    color: 'from-violet-500 to-purple-500'
  },
  {
    title: 'Security & Compliance',
    description: 'Protect your business with comprehensive security audits and compliance solutions.',
    icon: Shield,
    href: '/solutions/security',
    features: ['Security Audits', 'GDPR Compliance', 'Data Protection', 'Disaster Recovery'],
    platforms: ['ISO 27001', 'SOC 2', 'HIPAA', 'PCI DSS'],
    color: 'from-red-500 to-rose-500'
  },
  {
    title: 'Maintenance & Support',
    description: '24/7 monitoring, updates, and technical support to keep your systems running smoothly.',
    icon: Wrench,
    href: '/solutions/maintenance',
    features: ['24/7 Monitoring', 'Regular Updates', 'Bug Fixes', 'Performance Optimization'],
    platforms: ['All Platforms', 'Custom Apps', 'Cloud Services', 'On-Premise'],
    color: 'from-green-500 to-emerald-500'
  },
  {
    title: 'Data & Analytics',
    description: 'Transform data into actionable insights with business intelligence and analytics.',
    icon: Database,
    href: '/solutions/automation',
    features: ['Data Warehousing', 'BI Dashboards', 'Predictive Analytics', 'Real-time Reporting'],
    platforms: ['Power BI', 'Tableau', 'Looker', 'Custom'],
    color: 'from-yellow-500 to-orange-500'
  }
]

export default function SolutionsPage() {
  return (
    <main>
      {/* Hero Section */}
      <PageHero
        badge="Business Solutions"
        title="Transform Your Business with Custom Solutions"
        description="Industry-specific solutions designed to streamline operations, boost efficiency, and accelerate growth."
        ctaPrimary={{
          text: 'Schedule Consultation',
          href: '/contact'
        }}
        ctaSecondary={{
          text: 'View Case Studies',
          href: '/resources/case-studies'
        }}
      />

      {/* Solutions Grid */}
      <section className="relative py-32 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Solutions for Every Business Need
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From e-commerce platforms to enterprise systems, we deliver solutions that solve real business challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutionCategories.map((solution) => {
              const Icon = solution.icon
              return (
                <Link
                  key={solution.title}
                  href={solution.href}
                  className="group relative p-8 rounded-2xl border border-border bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1"
                >
                  {/* Gradient Accent */}
                  <div className={`absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r ${solution.color} opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                  
                  {/* Icon */}
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${solution.color} mb-6`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {solution.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {solution.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <div className="text-sm font-medium text-foreground mb-3">Key Features:</div>
                    <ul className="space-y-2">
                      {solution.features.map((feature) => (
                        <li key={feature} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary/60 mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Platforms */}
                  <div className="mb-6">
                    <div className="text-sm font-medium text-foreground mb-2">Platforms:</div>
                    <div className="flex flex-wrap gap-2">
                      {solution.platforms.slice(0, 3).map((platform) => (
                        <span key={platform} className="text-xs px-2 py-1 rounded-md bg-muted text-muted-foreground">
                          {platform}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="mt-6 flex items-center text-primary font-medium">
                    Explore Solution
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="relative py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Industries We Serve
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Delivering tailored solutions across diverse industries
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {['Retail & E-commerce', 'Healthcare', 'Finance & Banking', 'Education', 'Real Estate', 'Manufacturing', 'Logistics', 'Entertainment'].map((industry) => (
              <div key={industry} className="p-6 rounded-xl bg-card border border-border text-center hover:border-primary/50 transition-colors">
                <div className="font-medium">{industry}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Transform Your Business?"
        description="Let's discuss how our solutions can solve your specific business challenges."
        primaryButtonText="Get Free Consultation"
        primaryButtonLink="/contact"
        secondaryButtonText="View Success Stories"
        secondaryButtonLink="/resources/case-studies"
      />
    </main>
  )
}
