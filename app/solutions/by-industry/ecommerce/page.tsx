import { Metadata } from 'next'
import { PageHero } from '@/components/sections/page-hero'
import { ProcessSteps } from '@/components/sections/process-steps'
import { TestimonialsCarousel } from '@/components/sections/testimonials-carousel'
import { PortfolioSlider } from '@/components/sections/portfolio-slider'
import { CTASection } from '@/components/sections/cta-section'
import TechShowcase from '@/components/animations/tech-showcase'
import { getFeaturedPortfolio, getTechnologies, getFeaturedTestimonials } from '@/lib/content'
import { ShoppingCart, CreditCard, Package, TrendingUp, Users, BarChart } from 'lucide-react'

export const metadata: Metadata = {
  title: 'E-Commerce Solutions | Online Store Development | Srapsware',
  description: 'Complete e-commerce solutions for online retailers. Build scalable, secure online stores with advanced features.',
  openGraph: {
    title: 'E-Commerce Solutions',
    description: 'Powerful e-commerce platforms for online retail success',
    type: 'website',
  }
}

export default function EcommerceSolutionsPage() {
  const portfolioProjects = getFeaturedPortfolio()
  const technologies = getTechnologies()
  const testimonials = getFeaturedTestimonials()

  const processSteps = [
    {
      number: 1,
      title: 'Business Analysis',
      description: 'Understand your products, target audience, business model, and growth goals.',
      duration: '1 week',
      icon: 'Target'
    },
    {
      number: 2,
      title: 'Platform Development',
      description: 'Build custom e-commerce platform with product catalog, cart, and checkout.',
      duration: '4-8 weeks',
      icon: 'Code2'
    },
    {
      number: 3,
      title: 'Payment Integration',
      description: 'Integrate payment gateways, shipping providers, and inventory management.',
      duration: '1-2 weeks',
      icon: 'CreditCard'
    },
    {
      number: 4,
      title: 'Launch & Scale',
      description: 'Testing, security audit, launch, and ongoing optimization for growth.',
      duration: '1-2 weeks',
      icon: 'Rocket'
    },
  ]

  const features = [
    {
      icon: ShoppingCart,
      title: 'Custom Online Stores',
      description: 'Tailored e-commerce platforms built to match your unique business requirements.'
    },
    {
      icon: CreditCard,
      title: 'Payment Processing',
      description: 'Secure payment gateway integration with multiple payment options.'
    },
    {
      icon: Package,
      title: 'Inventory Management',
      description: 'Real-time inventory tracking, order management, and fulfillment automation.'
    },
    {
      icon: TrendingUp,
      title: 'Sales Optimization',
      description: 'Conversion optimization, abandoned cart recovery, and upselling features.'
    },
    {
      icon: Users,
      title: 'Customer Accounts',
      description: 'User accounts, order history, wishlists, and personalized experiences.'
    },
    {
      icon: BarChart,
      title: 'Analytics & Reporting',
      description: 'Comprehensive sales analytics, customer insights, and business intelligence.'
    },
  ]

  return (
    <div className="min-h-screen">
      <PageHero
        title="E-Commerce Solutions"
        description="Build powerful online stores that drive sales and growth. Complete e-commerce solutions from catalog to checkout."
        breadcrumbItems={[
          { label: 'Solutions', href: '/solutions' },
          { label: 'By Industry' },
          { label: 'E-Commerce Solutions' }
        ]}
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">E-Commerce Platform Features</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to launch and grow your online retail business.
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
