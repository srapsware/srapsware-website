import { Metadata } from 'next'
import { PageHero } from '@/components/sections/page-hero'
import { CTASection } from '@/components/sections/cta-section'
import { ExternalLink, Github, Globe, Calendar } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Portfolio | Our Projects & Success Stories | Srapsware',
  description: 'Explore our portfolio of successful web, mobile, and enterprise applications. See how we\'ve helped businesses achieve their digital goals.',
  openGraph: {
    title: 'Portfolio - Srapsware Success Stories',
    description: 'Real projects, real results from our development team',
    type: 'website',
  }
}

// Mock portfolio data - replace with actual data from CMS
const portfolioProjects = [
  {
    id: 1,
    title: 'E-Commerce Fashion Platform',
    category: 'E-Commerce',
    description: 'A modern multi-vendor marketplace built with Next.js and WooCommerce, handling 10,000+ daily transactions.',
    image: '/placeholder-project.jpg',
    technologies: ['Next.js', 'WooCommerce', 'React', 'TailwindCSS', 'AWS'],
    results: ['250% increase in sales', '40% faster load time', '99.9% uptime'],
    liveUrl: '#',
    caseStudyUrl: '/resources/case-studies'
  },
  {
    id: 2,
    title: 'Healthcare Patient Portal',
    category: 'Enterprise',
    description: 'HIPAA-compliant patient management system with telemedicine capabilities serving 50,000+ patients.',
    image: '/placeholder-project.jpg',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Socket.io'],
    results: ['50,000+ active users', 'HIPAA compliant', '24/7 availability'],
    liveUrl: '#',
    caseStudyUrl: '/resources/case-studies'
  },
  {
    id: 3,
    title: 'Real Estate CRM & Listing Platform',
    category: 'SaaS',
    description: 'Comprehensive CRM solution for real estate agents with property management and lead tracking.',
    image: '/placeholder-project.jpg',
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Stripe'],
    results: ['5,000+ properties listed', '95% user satisfaction', 'Multi-tenant architecture'],
    liveUrl: '#',
    caseStudyUrl: '/resources/case-studies'
  },
  {
    id: 4,
    title: 'FinTech Mobile Banking App',
    category: 'Mobile',
    description: 'Secure mobile banking application for iOS and Android with biometric authentication.',
    image: '/placeholder-project.jpg',
    technologies: ['React Native', 'Node.js', 'MongoDB', 'Firebase', 'Plaid API'],
    results: ['100,000+ downloads', 'Bank-grade security', '4.8★ rating'],
    liveUrl: '#',
    caseStudyUrl: '/resources/case-studies'
  },
  {
    id: 5,
    title: 'AI-Powered Analytics Dashboard',
    category: 'AI/ML',
    description: 'Business intelligence platform with AI-driven insights and predictive analytics.',
    image: '/placeholder-project.jpg',
    technologies: ['React', 'Python', 'TensorFlow', 'FastAPI', 'PostgreSQL'],
    results: ['Real-time analytics', 'ML predictions', 'Custom reports'],
    liveUrl: '#',
    caseStudyUrl: '/resources/case-studies'
  },
  {
    id: 6,
    title: 'Education Learning Management System',
    category: 'Education',
    description: 'Comprehensive LMS with video streaming, assignments, and progress tracking for 10,000+ students.',
    image: '/placeholder-project.jpg',
    technologies: ['Next.js', 'Node.js', 'MySQL', 'AWS S3', 'Zoom API'],
    results: ['10,000+ students', 'Video streaming', 'Real-time collaboration'],
    liveUrl: '#',
    caseStudyUrl: '/resources/case-studies'
  }
]

const categories = ['All', 'E-Commerce', 'Enterprise', 'SaaS', 'Mobile', 'AI/ML', 'Education']

export default function PortfolioPage() {
  return (
    <main>
      {/* Hero Section */}
      <PageHero
        badge="Portfolio"
        title="Our Work Speaks for Itself"
        description="Explore our portfolio of successful projects across industries. From startups to enterprises, we've delivered solutions that drive real business results."
        ctaPrimary={{
          text: 'Start Your Project',
          href: '/contact'
        }}
        ctaSecondary={{
          text: 'View Case Studies',
          href: '/resources/case-studies'
        }}
      />

      {/* Stats Section */}
      <section className="relative py-20 border-t border-border bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">350+</div>
              <div className="text-muted-foreground">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">98%</div>
              <div className="text-muted-foreground">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">10+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="relative py-12 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full border border-border bg-card hover:border-primary hover:bg-primary/5 transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="relative py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioProjects.map((project) => (
              <div
                key={project.id}
                className="group relative rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Project Image */}
                <div className="relative h-64 bg-gradient-to-br from-primary/10 to-primary/5 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Globe className="w-16 h-16 text-primary/20" />
                  </div>
                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    <a
                      href={project.liveUrl}
                      className="p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
                      aria-label="View live project"
                    >
                      <ExternalLink className="w-5 h-5 text-white" />
                    </a>
                    <Link
                      href={project.caseStudyUrl}
                      className="p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
                      aria-label="View case study"
                    >
                      <Calendar className="w-5 h-5 text-white" />
                    </Link>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 text-sm">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 rounded-md bg-muted text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-xs px-2 py-1 rounded-md bg-muted text-muted-foreground">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Results */}
                  <div className="space-y-2">
                    {project.results.map((result, index) => (
                      <div key={index} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500 mr-2"></div>
                        {result}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="relative py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-6xl text-primary mb-6">"</div>
            <blockquote className="text-2xl md:text-3xl font-medium mb-8">
              Srapsware transformed our business with their innovative e-commerce platform. Sales increased by 250% in just 6 months!
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-primary font-bold">JD</span>
              </div>
              <div className="text-left">
                <div className="font-medium">John Doe</div>
                <div className="text-sm text-muted-foreground">CEO, Fashion Brand Inc.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Start Your Project?"
        description="Join hundreds of satisfied clients who have transformed their business with our solutions."
        primaryButtonText="Get Free Consultation"
        primaryButtonLink="/contact"
        secondaryButtonText="View All Case Studies"
        secondaryButtonLink="/resources/case-studies"
      />
    </main>
  )
}
