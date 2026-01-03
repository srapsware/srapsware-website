import { Metadata } from 'next'
import { PageHero } from '@/components/sections/page-hero'
import { ProcessSteps } from '@/components/sections/process-steps'
import { TestimonialsCarousel } from '@/components/sections/testimonials-carousel'
import { PortfolioSlider } from '@/components/sections/portfolio-slider'
import { CTASection } from '@/components/sections/cta-section'
import TechShowcase from '@/components/animations/tech-showcase'
import { getFeaturedPortfolio, getTechnologies, getFeaturedTestimonials } from '@/lib/content'
import { Home, MapPin, Key, Search, Calendar, DollarSign } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Real Estate Technology Solutions | Property Management Software | Srapsware',
  description: 'Custom real estate software including property listings, CRM, virtual tours, and property management systems.',
  openGraph: {
    title: 'Real Estate Tech Solutions',
    description: 'Modern technology solutions for real estate businesses',
    type: 'website',
  }
}

export default function RealEstateSolutionsPage() {
  const portfolioProjects = getFeaturedPortfolio()
  const technologies = getTechnologies()
  const testimonials = getFeaturedTestimonials()

  const processSteps = [
    {
      number: 1,
      title: 'Real Estate Assessment',
      description: 'Understand property types, target users, features, and integration needs.',
      duration: '1 week',
      icon: 'Home'
    },
    {
      number: 2,
      title: 'Platform Development',
      description: 'Build property portal with listings, search, virtual tours, CRM.',
      duration: '6-10 weeks',
      icon: 'Code2'
    },
    {
      number: 3,
      title: 'Integration & Features',
      description: 'MLS integration, payment gateways, document management, communication tools.',
      duration: '2-3 weeks',
      icon: 'Plug'
    },
    {
      number: 4,
      title: 'Launch & Support',
      description: 'Testing, agent training, property data import, and go-live.',
      duration: '1-2 weeks',
      icon: 'Rocket'
    },
  ]

  const features = [
    {
      icon: Home,
      title: 'Property Listings',
      description: 'Advanced property search with filters, maps, photos, virtual tours.'
    },
    {
      icon: MapPin,
      title: 'Interactive Maps',
      description: 'Location-based search, neighborhood information, nearby amenities.'
    },
    {
      icon: Key,
      title: 'Property Management',
      description: 'Tenant management, lease tracking, maintenance requests, rent collection.'
    },
    {
      icon: Search,
      title: 'Advanced Search',
      description: 'Multi-criteria search, saved searches, property alerts, favorites.'
    },
    {
      icon: Calendar,
      title: 'Appointment Booking',
      description: 'Schedule property viewings, open houses, agent appointments online.'
    },
    {
      icon: DollarSign,
      title: 'Transaction Management',
      description: 'Offers, contracts, e-signatures, escrow tracking, commission calculation.'
    },
  ]

  return (
    <div className="min-h-screen">
      <PageHero
        title="Real Estate Technology Solutions"
        description="Build modern real estate platforms that connect buyers, sellers, and agents. From property portals to management systems."
        breadcrumbItems={[
          { label: 'Solutions', href: '/solutions' },
          { label: 'By Industry' },
          { label: 'Real Estate Tech' }
        ]}
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Real Estate Platform Features</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Complete solutions for real estate agents, brokers, and property managers.
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
