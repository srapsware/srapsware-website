import { Metadata } from 'next'
import { PageHero } from '@/components/sections/page-hero'
import { ProcessSteps } from '@/components/sections/process-steps'
import { TestimonialsCarousel } from '@/components/sections/testimonials-carousel'
import { PortfolioSlider } from '@/components/sections/portfolio-slider'
import { CTASection } from '@/components/sections/cta-section'
import TechShowcase from '@/components/animations/tech-showcase'
import { getFeaturedPortfolio, getTechnologies, getFeaturedTestimonials } from '@/lib/content'
import { LineChart, DollarSign, Shield, CreditCard, TrendingUp, Lock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'FinTech Solutions | Banking & Finance Software | Srapsware',
  description: 'Secure financial technology solutions for banking, payments, trading, and wealth management. PCI DSS compliant development.',
  openGraph: {
    title: 'Finance & Banking Solutions',
    description: 'Enterprise-grade financial technology solutions',
    type: 'website',
  }
}

export default function FinanceSolutionsPage() {
  const portfolioProjects = getFeaturedPortfolio()
  const technologies = getTechnologies()
  const testimonials = getFeaturedTestimonials()

  const processSteps = [
    {
      number: 1,
      title: 'Financial Assessment',
      description: 'Analyze requirements, regulatory compliance needs, security standards.',
      duration: '1-2 weeks',
      icon: 'FileText'
    },
    {
      number: 2,
      title: 'Secure Development',
      description: 'Build with PCI DSS compliance, encryption, secure transactions, fraud detection.',
      duration: '8-16 weeks',
      icon: 'Code2'
    },
    {
      number: 3,
      title: 'Testing & Audit',
      description: 'Security testing, penetration testing, compliance audit, load testing.',
      duration: '2-4 weeks',
      icon: 'Shield'
    },
    {
      number: 4,
      title: 'Launch & Monitor',
      description: 'Phased deployment, continuous monitoring, 24/7 support.',
      duration: '2 weeks',
      icon: 'Rocket'
    },
  ]

  const features = [
    {
      icon: DollarSign,
      title: 'Digital Banking',
      description: 'Online banking platforms, mobile banking apps, account management systems.'
    },
    {
      icon: CreditCard,
      title: 'Payment Processing',
      description: 'Secure payment gateways, digital wallets, and transaction processing.'
    },
    {
      icon: LineChart,
      title: 'Trading Platforms',
      description: 'Stock trading platforms, forex, cryptocurrency exchanges.'
    },
    {
      icon: TrendingUp,
      title: 'Wealth Management',
      description: 'Portfolio management, robo-advisors, investment analytics.'
    },
    {
      icon: Shield,
      title: 'Fraud Detection',
      description: 'AI-powered fraud detection, risk assessment, and compliance monitoring.'
    },
    {
      icon: Lock,
      title: 'Security & Compliance',
      description: 'PCI DSS, SOC 2, multi-factor authentication, end-to-end encryption.'
    },
  ]

  return (
    <div className="min-h-screen">
      <PageHero
        title="Finance & Banking Solutions"
        description="Build secure, compliant financial technology solutions. From digital banking to trading platforms, delivering enterprise-grade FinTech."
        breadcrumbItems={[
          { label: 'Solutions', href: '/solutions' },
          { label: 'By Industry' },
          { label: 'Finance & Banking' }
        ]}
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">FinTech Solutions We Deliver</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Secure, scalable financial technology for the modern digital economy.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="p-6 rounded-xl border border-border bg-card hover:shadow-lg transition-shadow">
                <feature.icon className="w-12 h-12 text-brand mb-4" />
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TechShowcase technologies={technologies} />
      <ProcessSteps steps={processSteps} />
      <PortfolioSlider projects={portfolioProjects} technologies={technologies} />
      <TestimonialsCarousel testimonials={testimonials} />
      <CTASection />
    </div>
  )
}
