import { Metadata } from 'next'
import { PageHero } from '@/components/sections/page-hero'
import { ProcessSteps } from '@/components/sections/process-steps'
import { TestimonialsCarousel } from '@/components/sections/testimonials-carousel'
import { PortfolioSlider } from '@/components/sections/portfolio-slider'
import { CTASection } from '@/components/sections/cta-section'
import TechShowcase from '@/components/animations/tech-showcase'
import { getFeaturedPortfolio, getTechnologies, getFeaturedTestimonials } from '@/lib/content'
import { Target, TrendingUp, Users, Zap, BarChart, Lightbulb } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Digital Strategy Consulting | Technology Roadmap | Srapsware',
  description: 'Strategic technology consulting to align your digital initiatives with business goals. Create actionable roadmaps for digital transformation.',
  openGraph: {
    title: 'Digital Strategy Consulting',
    description: 'Expert guidance for your digital transformation journey',
    type: 'website',
  }
}

export default function DigitalStrategyPage() {
  const portfolioProjects = getFeaturedPortfolio()
  const technologies = getTechnologies()
  const testimonials = getFeaturedTestimonials()

  const processSteps = [
    {
      number: 1,
      title: 'Discovery & Assessment',
      description: 'Analyze current state, business goals, market position, and competitive landscape.',
      duration: '2-3 weeks',
      icon: 'Search'
    },
    {
      number: 2,
      title: 'Strategy Development',
      description: 'Define digital vision, technology stack, architecture, and implementation roadmap.',
      duration: '2-4 weeks',
      icon: 'Target'
    },
    {
      number: 3,
      title: 'Roadmap Creation',
      description: 'Detailed action plan with priorities, timelines, resources, and success metrics.',
      duration: '1-2 weeks',
      icon: 'Map'
    },
    {
      number: 4,
      title: 'Implementation Support',
      description: 'Ongoing guidance, vendor selection, project oversight, and course correction.',
      duration: 'Ongoing',
      icon: 'Users'
    },
  ]

  const features = [
    {
      icon: Target,
      title: 'Strategic Planning',
      description: 'Align technology initiatives with business objectives and growth goals.'
    },
    {
      icon: TrendingUp,
      title: 'Technology Roadmap',
      description: 'Multi-year technology roadmap with clear milestones and deliverables.'
    },
    {
      icon: Users,
      title: 'Stakeholder Alignment',
      description: 'Ensure buy-in from executives, IT teams, and business units.'
    },
    {
      icon: Zap,
      title: 'Quick Wins',
      description: 'Identify and prioritize initiatives that deliver immediate value.'
    },
    {
      icon: BarChart,
      title: 'ROI Analysis',
      description: 'Calculate expected returns, costs, and business impact of each initiative.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation Advisory',
      description: 'Explore emerging technologies and their applicability to your business.'
    },
  ]

  return (
    <div className="min-h-screen">
      <PageHero
        title="Digital Strategy Consulting"
        description="Transform your business with a clear, actionable digital strategy. Expert guidance to navigate technology decisions and drive growth."
        breadcrumbItems={[
          { label: 'Solutions', href: '/solutions' },
          { label: 'Digital Transformation' },
          { label: 'Digital Strategy' }
        ]}
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Strategic Consulting Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From vision to execution, we help you make the right technology decisions.
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
