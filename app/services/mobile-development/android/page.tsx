import { Metadata } from 'next'
import { PageHero } from '@/components/sections/page-hero'
import { ProcessSteps } from '@/components/sections/process-steps'
import { TestimonialsCarousel } from '@/components/sections/testimonials-carousel'
import { PortfolioSlider } from '@/components/sections/portfolio-slider'
import { CTASection } from '@/components/sections/cta-section'
import TechShowcase from '@/components/animations/tech-showcase'
import { getFeaturedPortfolio, getTechnologies, getFeaturedTestimonials } from '@/lib/content'
import { Smartphone, Zap, Shield, Cloud, PlayCircle, Layers } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Android App Development Services | Kotlin & Java | Srapsware',
  description: 'Native Android app development with Kotlin and Java. Build powerful, scalable Android applications for smartphones and tablets.',
  openGraph: {
    title: 'Android App Development Services',
    description: 'Professional Android development for mobile devices',
    type: 'website',
  }
}

export default function AndroidDevelopmentPage() {
  const portfolioProjects = getFeaturedPortfolio()
  const technologies = getTechnologies()
  const testimonials = getFeaturedTestimonials()

  const processSteps = [
    {
      number: 1,
      title: 'App Planning & Design',
      description: 'Define requirements, Material Design implementation, user flows and wireframes.',
      duration: '1-2 weeks',
      icon: 'Lightbulb'
    },
    {
      number: 2,
      title: 'Android Development',
      description: 'Build native Android app with Kotlin, implement Jetpack components and Architecture.',
      duration: '4-8 weeks',
      icon: 'Code2'
    },
    {
      number: 3,
      title: 'Testing & QA',
      description: 'Test on multiple Android devices, versions, and screen sizes. Beta testing.',
      duration: '1-2 weeks',
      icon: 'CheckCircle'
    },
    {
      number: 4,
      title: 'Play Store Launch',
      description: 'Google Play Console setup, app submission, and ongoing support.',
      duration: '1 week',
      icon: 'Rocket'
    },
  ]

  const features = [
    {
      icon: Smartphone,
      title: 'Native Android Apps',
      description: 'High-performance apps built with Kotlin and modern Android development tools.'
    },
    {
      icon: Zap,
      title: 'Jetpack Components',
      description: 'Leverage Android Jetpack for robust, maintainable, and efficient applications.'
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Implement Android security best practices and data protection.'
    },
    {
      icon: Cloud,
      title: 'Firebase Integration',
      description: 'Cloud messaging, analytics, authentication, and real-time database.'
    },
    {
      icon: PlayCircle,
      title: 'Play Store Optimization',
      description: 'App Store Optimization (ASO) for better visibility and downloads.'
    },
    {
      icon: Layers,
      title: 'Material Design',
      description: 'Beautiful, modern UI following Google Material Design guidelines.'
    },
  ]

  return (
    <div className="min-h-screen">
      <PageHero
        title="Android App Development Services"
        description="Build powerful native Android applications with Kotlin and Java. Deliver exceptional mobile experiences across all Android devices."
        
        
        
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Android Development Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Native Android apps leveraging the latest platform features and technologies.
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
