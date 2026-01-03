import { Metadata } from 'next'
import { PageHero } from '@/components/sections/page-hero'
import { ProcessSteps } from '@/components/sections/process-steps'
import { TestimonialsCarousel } from '@/components/sections/testimonials-carousel'
import { PortfolioSlider } from '@/components/sections/portfolio-slider'
import { CTASection } from '@/components/sections/cta-section'
import TechShowcase from '@/components/animations/tech-showcase'
import { getFeaturedPortfolio, getTechnologies, getFeaturedTestimonials } from '@/lib/content'
import { Zap, Shield, Puzzle, Wrench, TrendingUp, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'WordPress Development Services | Custom Themes & Plugins | Srapsware',
  description: 'Professional WordPress development services including custom themes, plugins, WooCommerce, and enterprise solutions.',
  openGraph: {
    title: 'WordPress Development Services',
    description: 'Custom WordPress solutions for businesses of all sizes',
    type: 'website',
  }
}

export default function WordPressDevelopmentPage() {
  const portfolioProjects = getFeaturedPortfolio()
  const technologies = getTechnologies()
  const testimonials = getFeaturedTestimonials()

  const processSteps = [
    {
      number: 1,
      title: 'Requirements Analysis',
      description: 'Understand your business needs, content structure, and functional requirements for WordPress.',
      duration: '3-5 days',
      icon: 'FileText'
    },
    {
      number: 2,
      title: 'Theme Development',
      description: 'Create custom WordPress themes with modern design, responsive layouts, and block editor support.',
      duration: '2-3 weeks',
      icon: 'Palette'
    },
    {
      number: 3,
      title: 'Plugin Development',
      description: 'Build custom plugins for specific functionality, integrate third-party services and APIs.',
      duration: '1-3 weeks',
      icon: 'Puzzle'
    },
    {
      number: 4,
      title: 'Testing & Launch',
      description: 'Comprehensive testing, performance optimization, security hardening, and deployment.',
      duration: '1 week',
      icon: 'Rocket'
    },
  ]

  const features = [
    {
      icon: Puzzle,
      title: 'Custom Theme Development',
      description: 'Tailored WordPress themes built from scratch to match your brand and requirements.'
    },
    {
      icon: Wrench,
      title: 'Plugin Development',
      description: 'Custom plugins to extend WordPress functionality and integrate with external services.'
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Fast-loading WordPress sites with caching, CDN integration, and code optimization.'
    },
    {
      icon: Shield,
      title: 'Security Hardening',
      description: 'Implement security best practices, regular updates, and vulnerability protection.'
    },
    {
      icon: TrendingUp,
      title: 'SEO Optimization',
      description: 'SEO-friendly URLs, meta tags, schema markup, and performance optimization.'
    },
    {
      icon: Users,
      title: 'Multisite Solutions',
      description: 'WordPress multisite networks for managing multiple websites from one installation.'
    },
  ]

  return (
    <div className="min-h-screen">
      <PageHero
        title="WordPress Development Services"
        description="Build powerful, scalable websites with custom WordPress solutions. From custom themes to complex plugins, we deliver WordPress sites that drive results."
        breadcrumbItems={[
          { label: 'Services', href: '/services' },
          { label: 'Web Development' },
          { label: 'WordPress Development' }
        ]}
      />

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">WordPress Solutions We Deliver</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive WordPress development services for businesses, agencies, and enterprises.
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

      {/* Technologies */}
      <section className="overflow-hidden">
        <TechShowcase technologies={technologies} />
      </section>

      {/* Process Steps */}
      <ProcessSteps steps={processSteps} />

      {/* Portfolio Section */}
      {portfolioProjects.length > 0 && (
        <section className="py-20 border-t border-border bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                WordPress Projects We've Built
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                See our latest WordPress websites with custom themes and functionality
              </p>
            </div>
            <div className="px-8">
              <PortfolioSlider 
                projects={portfolioProjects.slice(0, 6)}
                technologies={technologies}
                autoplay={true}
                showNavigation={true}
              />
            </div>
          </div>
        </section>
      )}

      {/* Testimonials Section */}
      {testimonials.length > 0 && (
        <section className="relative py-28 border-t border-border overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                What Our Clients Say
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                See why businesses trust us with their WordPress development
              </p>
            </div>
            <TestimonialsCarousel testimonials={testimonials} />
          </div>
        </section>
      )}

      {/* CTA */}
      <CTASection />
    </div>
  )
}
