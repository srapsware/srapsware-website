import { Metadata } from 'next'
import { PageHero } from '@/components/sections/page-hero'
import { ProcessSteps } from '@/components/sections/process-steps'
import { TestimonialsCarousel } from '@/components/sections/testimonials-carousel'
import { PortfolioSlider } from '@/components/sections/portfolio-slider'
import { CTASection } from '@/components/sections/cta-section'
import TechShowcase from '@/components/animations/tech-showcase'
import { getFeaturedPortfolio, getTechnologies, getFeaturedTestimonials } from '@/lib/content'
import { Smartphone, Zap, Shield, Cloud, Bell, Layers } from 'lucide-react'

export const metadata: Metadata = {
  title: 'iOS App Development Services | Swift & SwiftUI | Srapsware',
  description: 'Native iOS app development with Swift and SwiftUI. Build fast, secure, and beautiful iPhone and iPad applications.',
  openGraph: {
    title: 'iOS App Development Services',
    description: 'Professional iOS development for iPhone and iPad',
    type: 'website',
  }
}

export default function iOSDevelopmentPage() {
  const portfolioProjects = getFeaturedPortfolio()
  const technologies = getTechnologies()
  const testimonials = getFeaturedTestimonials()

  const processSteps = [
    {
      number: 1,
      title: 'App Concept & Design',
      description: 'Define app features, user flows, wireframes, and iOS-specific design guidelines.',
      duration: '1-2 weeks',
      icon: 'Lightbulb'
    },
    {
      number: 2,
      title: 'iOS Development',
      description: 'Build native iOS app with Swift/SwiftUI, implement features, integrate APIs.',
      duration: '4-8 weeks',
      icon: 'Code2'
    },
    {
      number: 3,
      title: 'Testing & QA',
      description: 'Comprehensive testing on multiple iOS devices, TestFlight beta testing.',
      duration: '1-2 weeks',
      icon: 'CheckCircle'
    },
    {
      number: 4,
      title: 'App Store Launch',
      description: 'App Store submission, review process management, and post-launch support.',
      duration: '1 week',
      icon: 'Rocket'
    },
  ]

  const features = [
    {
      icon: Smartphone,
      title: 'Native iOS Apps',
      description: 'Build high-performance native apps using Swift and SwiftUI for iPhone and iPad.'
    },
    {
      icon: Zap,
      title: 'Fast Performance',
      description: 'Optimized code for smooth animations, quick load times, and responsive interfaces.'
    },
    {
      icon: Shield,
      title: 'Secure Development',
      description: 'Implement iOS security best practices, encryption, and secure data storage.'
    },
    {
      icon: Cloud,
      title: 'Cloud Integration',
      description: 'Seamless integration with iCloud, CloudKit, and backend services.'
    },
    {
      icon: Bell,
      title: 'Push Notifications',
      description: 'Apple Push Notification Service (APNS) integration for user engagement.'
    },
    {
      icon: Layers,
      title: 'App Extensions',
      description: 'Widgets, Today extensions, share extensions, and Siri integration.'
    },
  ]

  return (
    <div className="min-h-screen">
      <PageHero
        title="iOS App Development Services"
        description="Create stunning native iOS applications for iPhone and iPad. Expert Swift and SwiftUI development delivering exceptional user experiences."
        breadcrumbItems={[
          { label: 'Services', href: '/services' },
          { label: 'Mobile Development' },
          { label: 'iOS App Development' }
        ]}
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">iOS Development Expertise</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Native iOS apps that leverage the full power of Apple's ecosystem.
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
