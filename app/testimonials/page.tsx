import { Metadata } from 'next'
import { PageHero } from '@/components/sections/page-hero'
import { CTASection } from '@/components/sections/cta-section'
import { Star, Quote } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Client Testimonials | Reviews & Success Stories | Srapsware',
  description: 'Read what our clients say about working with Srapsware. Real reviews from satisfied customers across industries.',
  openGraph: {
    title: 'Client Testimonials - Real Reviews from Happy Clients',
    description: 'See why businesses trust Srapsware for their development needs',
    type: 'website',
  }
}

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CEO',
    company: 'TechStart Inc.',
    image: null,
    rating: 5,
    text: 'Srapsware delivered an exceptional mobile app that exceeded our expectations. Their team was professional, responsive, and truly understood our vision. Our user engagement increased by 300% after launch!',
    project: 'Mobile App Development',
    industry: 'Technology'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'CTO',
    company: 'E-Shop Global',
    image: null,
    rating: 5,
    text: 'The e-commerce platform they built for us is incredibly fast and scalable. We handle 10,000+ daily orders without any issues. The ROI was visible within the first month. Highly recommended!',
    project: 'E-Commerce Platform',
    industry: 'Retail'
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Founder',
    company: 'HealthCare Plus',
    image: null,
    rating: 5,
    text: 'Building a HIPAA-compliant healthcare platform seemed daunting, but Srapsware made it seamless. Their expertise in security and compliance gave us peace of mind. The patient portal is now used by 50,000+ patients.',
    project: 'Healthcare Portal',
    industry: 'Healthcare'
  },
  {
    id: 4,
    name: 'David Park',
    role: 'VP of Engineering',
    company: 'FinTech Solutions',
    image: null,
    rating: 5,
    text: 'Migrating our legacy system to a modern cloud architecture was complex, but Srapsware handled it flawlessly. Zero downtime during migration and a 60% reduction in operational costs. Outstanding work!',
    project: 'Cloud Migration',
    industry: 'Finance'
  },
  {
    id: 5,
    name: 'Lisa Thompson',
    role: 'Marketing Director',
    company: 'Fashion Forward',
    image: null,
    rating: 5,
    text: 'Our website redesign with Srapsware transformed our online presence. The modern UI/UX design and lightning-fast performance resulted in a 250% increase in conversions. Worth every penny!',
    project: 'Website Redesign',
    industry: 'Fashion'
  },
  {
    id: 6,
    name: 'James Wilson',
    role: 'Product Manager',
    company: 'EdTech Academy',
    image: null,
    rating: 5,
    text: 'The learning management system they developed has been a game-changer for our online education platform. Students love the interface and teachers appreciate the comprehensive analytics. 10,000+ active users and growing!',
    project: 'LMS Development',
    industry: 'Education'
  },
  {
    id: 7,
    name: 'Amanda Martinez',
    role: 'Operations Head',
    company: 'Logistics Pro',
    image: null,
    rating: 5,
    text: 'The custom ERP system streamlined our entire operation. Real-time tracking, automated workflows, and insightful reports have improved our efficiency by 40%. Srapsware\'s support team is always there when we need them.',
    project: 'ERP Implementation',
    industry: 'Logistics'
  },
  {
    id: 8,
    name: 'Robert Kim',
    role: 'Founder & CEO',
    company: 'PropTech Ventures',
    image: null,
    rating: 5,
    text: 'Building our real estate SaaS platform with Srapsware was the best decision we made. Their technical expertise and business acumen helped us launch on time and under budget. We now serve 5,000+ properties!',
    project: 'SaaS Platform',
    industry: 'Real Estate'
  },
  {
    id: 9,
    name: 'Jennifer Lee',
    role: 'Digital Director',
    company: 'Restaurant Chain Co.',
    image: null,
    rating: 5,
    text: 'The mobile ordering app with integrated payment system has revolutionized our customer experience. Order accuracy improved by 95% and customer satisfaction scores are at an all-time high. Excellent partnership!',
    project: 'Mobile App & POS Integration',
    industry: 'Hospitality'
  }
]

export default function TestimonialsPage() {
  const averageRating = 5.0
  const totalReviews = testimonials.length

  return (
    <main>
      {/* Hero Section */}
      <PageHero
        badge="Testimonials"
        title="What Our Clients Say About Us"
        description="Don't just take our word for it. Hear directly from businesses that have transformed their digital presence with our solutions."
      />

      {/* Stats Section */}
      <section className="relative py-20 border-t border-border bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="flex items-center justify-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
                <div className="text-3xl font-bold text-primary mb-1">{averageRating.toFixed(1)}/5.0</div>
                <div className="text-muted-foreground">Average Rating</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-primary mb-2">350+</div>
                <div className="text-muted-foreground">Happy Clients</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-primary mb-2">98%</div>
                <div className="text-muted-foreground">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="relative py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Client Success Stories
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real feedback from real clients across diverse industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="group relative p-8 rounded-2xl border border-border bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 opacity-10">
                  <Quote className="w-12 h-12 text-primary" />
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-foreground mb-6 relative z-10">
                  "{testimonial.text}"
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center gap-4 pt-6 border-t border-border">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold text-lg">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-foreground truncate">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground truncate">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </div>

                {/* Project Tag */}
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary">
                    {testimonial.project}
                  </span>
                  <span className="text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground">
                    {testimonial.industry}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section className="relative py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Video Testimonials
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Hear directly from our clients about their experience working with us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="relative aspect-video rounded-xl overflow-hidden border border-border bg-card group cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                    <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-primary border-b-8 border-b-transparent ml-1"></div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                  <div className="text-white font-medium">Client Success Story #{i}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="relative py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Trusted by Leading Brands
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 max-w-6xl mx-auto">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="flex items-center justify-center p-6 rounded-xl border border-border bg-card opacity-60 hover:opacity-100 transition-opacity"
              >
                <div className="text-sm font-medium text-muted-foreground">
                  Client Logo
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Join Our Success Stories?"
        description="Let's discuss how we can help you achieve similar results for your business."
        primaryButtonText="Start Your Project"
        primaryButtonLink="/contact"
        secondaryButtonText="View Portfolio"
        secondaryButtonLink="/portfolio"
      />
    </main>
  )
}
