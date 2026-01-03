import { Metadata } from 'next'
import { PageHero } from '@/components/sections/page-hero'
import { ProcessSteps } from '@/components/sections/process-steps'
import { TestimonialsCarousel } from '@/components/sections/testimonials-carousel'
import { PortfolioSlider } from '@/components/sections/portfolio-slider'
import { CTASection } from '@/components/sections/cta-section'
import TechShowcase from '@/components/animations/tech-showcase'
import { getFeaturedPortfolio, getTechnologies, getFeaturedTestimonials } from '@/lib/content'
import { Activity, Shield, Users, Calendar, Database, Lock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Healthcare Software Solutions | HIPAA Compliant | Srapsware',
  description: 'HIPAA-compliant healthcare software solutions including EHR, patient portals, telemedicine, and medical practice management.',
  openGraph: {
    title: 'Healthcare Software Solutions',
    description: 'Secure, compliant healthcare technology solutions',
    type: 'website',
  }
}

export default function HealthcareSolutionsPage() {
  const portfolioProjects = getFeaturedPortfolio()
  const technologies = getTechnologies()
  const testimonials = getFeaturedTestimonials()

  const processSteps = [
    {
      number: 1,
      title: 'Healthcare Assessment',
      description: 'Understand workflows, compliance requirements, integration needs, and patient care goals.',
      duration: '1-2 weeks',
      icon: 'Stethoscope'
    },
    {
      number: 2,
      title: 'Compliant Development',
      description: 'Build HIPAA-compliant software with security, encryption, and audit trails.',
      duration: '6-12 weeks',
      icon: 'Code2'
    },
    {
      number: 3,
      title: 'Integration & Testing',
      description: 'Integrate with existing systems (EMR/EHR), thorough security testing.',
      duration: '2-3 weeks',
      icon: 'Plug'
    },
    {
      number: 4,
      title: 'Training & Deployment',
      description: 'Staff training, phased rollout, and ongoing compliance monitoring.',
      duration: '2-4 weeks',
      icon: 'Rocket'
    },
  ]

  const features = [
    {
      icon: Activity,
      title: 'EHR/EMR Systems',
      description: 'Electronic health records and medical records management systems.'
    },
    {
      icon: Shield,
      title: 'HIPAA Compliance',
      description: 'Full HIPAA compliance with data encryption, access controls, and audit logs.'
    },
    {
      icon: Users,
      title: 'Patient Portals',
      description: 'Secure patient portals for appointment scheduling, medical records access.'
    },
    {
      icon: Calendar,
      title: 'Telemedicine',
      description: 'Video consultations, remote monitoring, and virtual care platforms.'
    },
    {
      icon: Database,
      title: 'Practice Management',
      description: 'Billing, scheduling, inventory, and administrative workflow automation.'
    },
    {
      icon: Lock,
      title: 'Data Security',
      description: 'Bank-level encryption, secure authentication, and data backup systems.'
    },
  ]

  return (
    <div className="min-h-screen">
      <PageHero
        title="Healthcare Software Solutions"
        description="Build secure, HIPAA-compliant healthcare technology. From patient portals to telemedicine, delivering better patient care through technology."
        breadcrumbItems={[
          { label: 'Home', href: '/' },
          { label: 'Solutions', href: '/solutions' },
          { label: 'By Industry', href: '/solutions' },
          { label: 'Healthcare Solutions' }
        ]}
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Healthcare Technology Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Secure, compliant software for modern healthcare delivery.
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
