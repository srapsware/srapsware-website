import { Metadata } from 'next'
import { PageHero } from '@/components/sections/page-hero'
import { ProcessSteps } from '@/components/sections/process-steps'
import { TestimonialsCarousel } from '@/components/sections/testimonials-carousel'
import { PortfolioSlider } from '@/components/sections/portfolio-slider'
import { CTASection } from '@/components/sections/cta-section'
import TechShowcase from '@/components/animations/tech-showcase'
import { getFeaturedPortfolio, getTechnologies, getFeaturedTestimonials } from '@/lib/content'
import { Palette, Figma, Users, Sparkles, Target, BarChart } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Mobile App Design Services | UI/UX Design | Srapsware',
  description: 'Professional mobile app UI/UX design services. Create beautiful, user-friendly interfaces for iOS and Android applications.',
  openGraph: {
    title: 'Mobile App Design Services',
    description: 'Exceptional mobile UI/UX design for iOS and Android',
    type: 'website',
  }
}

export default function MobileAppDesignPage() {
  const portfolioProjects = getFeaturedPortfolio()
  const technologies = getTechnologies()
  const testimonials = getFeaturedTestimonials()

  const processSteps = [
    {
      number: 1,
      title: 'Research & Discovery',
      description: 'User research, competitor analysis, define personas, and establish design goals.',
      duration: '1 week',
      icon: 'Search'
    },
    {
      number: 2,
      title: 'Wireframing',
      description: 'Create low-fidelity wireframes, define user flows, information architecture.',
      duration: '1 week',
      icon: 'Layout'
    },
    {
      number: 3,
      title: 'UI Design',
      description: 'High-fidelity mockups, design system, color palette, typography, and icons.',
      duration: '2-3 weeks',
      icon: 'Palette'
    },
    {
      number: 4,
      title: 'Prototyping & Testing',
      description: 'Interactive prototypes, usability testing, iterate based on feedback.',
      duration: '1-2 weeks',
      icon: 'MousePointer'
    },
  ]

  const features = [
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive interfaces that delight users and drive engagement.'
    },
    {
      icon: Figma,
      title: 'Design Systems',
      description: 'Comprehensive design systems for consistent, scalable mobile experiences.'
    },
    {
      icon: Users,
      title: 'User Research',
      description: 'In-depth user research and testing to inform design decisions.'
    },
    {
      icon: Sparkles,
      title: 'Animations & Interactions',
      description: 'Smooth, meaningful animations that enhance user experience.'
    },
    {
      icon: Target,
      title: 'Platform Guidelines',
      description: 'Adherence to iOS Human Interface Guidelines and Material Design.'
    },
    {
      icon: BarChart,
      title: 'Analytics Integration',
      description: 'Design with analytics in mind for data-driven improvements.'
    },
  ]

  return (
    <div className="min-h-screen">
      <PageHero
        title="Mobile App Design Services"
        description="Transform your app idea into stunning visual designs. Expert UI/UX design for iOS and Android that users love."
        breadcrumbItems={[
          { label: 'Services', href: '/services' },
          { label: 'Mobile Development' },
          { label: 'Mobile App Design' }
        ]}
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Mobile Design Expertise</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              User-centered design that combines aesthetics with functionality.
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

      <section className="overflow-hidden">
        <TechShowcase technologies={technologies} />
      </section>
      <ProcessSteps steps={processSteps} />
      
      {/* Portfolio Section */}
      {portfolioProjects.length > 0 && (
        <section className="py-20 border-t border-border bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Mobile Design Projects We've Built
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                See our latest mobile UI/UX designs with exceptional user experiences
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
                See why businesses trust us with their mobile design projects
              </p>
            </div>
            <TestimonialsCarousel testimonials={testimonials} />
          </div>
        </section>
      )}
      <CTASection />
    </div>
  )
}
