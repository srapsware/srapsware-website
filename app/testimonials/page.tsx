import { Metadata } from 'next'
import { PageHero } from '@/components/sections/page-hero'
import { CTASection } from '@/components/sections/cta-section'
import { Star, Quote, BadgeCheck } from 'lucide-react'
import { getAllTestimonials } from '@/lib/content'
import { getCdnUrl } from '@/lib/utils'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Client Testimonials | Reviews & Success Stories | Srapsware',
  description: 'Read what our clients say about working with Srapsware. Real reviews from satisfied customers across industries.',
  openGraph: {
    title: 'Client Testimonials - Real Reviews from Happy Clients',
    description: 'See why businesses trust Srapsware for their development needs',
    type: 'website',
  }
}

export default async function TestimonialsPage() {
  const testimonials = getAllTestimonials()
  const averageRating = testimonials.length > 0 
    ? testimonials.reduce((acc, t) => acc + t.rating, 0) / testimonials.length 
    : 5.0
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
                <div className="text-5xl font-bold text-primary mb-2">400+</div>
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
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Real Stories from Real Clients
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Discover how we've helped businesses achieve their goals with custom software solutions
              </p>
            </div>

            {testimonials.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No testimonials available at the moment.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {testimonials.map((testimonial) => (
                  <div
                    key={testimonial.slug}
                    className="group relative bg-card border border-border rounded-2xl p-8 hover:shadow-xl hover:border-primary/50 transition-all duration-300"
                  >
                    {/* Quote Icon */}
                    <div className="absolute top-6 right-6 text-primary/10 group-hover:text-primary/20 transition-colors">
                      <Quote className="w-12 h-12" />
                    </div>

                    {/* Rating */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < testimonial.rating
                              ? 'fill-yellow-400 text-yellow-400'
                              : 'text-muted-foreground'
                          }`}
                        />
                      ))}
                    </div>

                    {/* Testimonial Content */}
                    <blockquote className="text-foreground mb-6 relative z-10 leading-relaxed">
                      {testimonial.content}
                    </blockquote>

                    {/* Author Info */}
                    <div className="flex items-center gap-4 pt-6 border-t border-border">
                      {testimonial.avatar ? (
                        <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-border">
                          <Image
                            src={getCdnUrl(testimonial.avatar)}
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                            unoptimized
                          />
                        </div>
                      ) : (
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                          {testimonial.name.charAt(0)}
                        </div>
                      )}

                      <div className="flex-1">
                        <div className="font-bold text-foreground flex items-center gap-2">
                          {testimonial.name}
                          {testimonial.verified && (
                            <BadgeCheck className="w-4 h-4 text-blue-500 flex-shrink-0" />
                          )}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {testimonial.position}
                          {testimonial.company && <> at {testimonial.company}</>}
                        </div>
                        {testimonial.country && (
                          <div className="text-xs text-muted-foreground mt-1">
                            {testimonial.country}
                          </div>
                        )}
                      </div>

                      {/* Company Logo */}
                      {testimonial.logo && (
                        <div className="relative w-16 h-16 grayscale hover:grayscale-0 transition-all">
                          <Image
                            src={getCdnUrl(testimonial.logo)}
                            alt={testimonial.company || 'Company'}
                            fill
                            className="object-contain"
                            unoptimized
                          />
                        </div>
                      )}
                    </div>

                    {/* Industry Badge */}
                    {testimonial.industry && (
                      <div className="mt-4">
                        <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
                          {testimonial.industry}
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Join Our Growing List of Happy Clients"
        description="Let's discuss how we can help transform your business with custom software solutions"
        primaryButtonText="Get Your Free Quote"
        primaryButtonLink="/contact"
        secondaryButtonText="View Our Portfolio"
        secondaryButtonLink="/portfolio"
      />
    </main>
  )
}
