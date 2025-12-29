import { FeaturedServices } from '@/components/sections/featured-services'
import { PortfolioGrid } from '@/components/sections/portfolio-grid'
import { TestimonialsCarousel } from '@/components/sections/testimonials-carousel'
import { LatestBlogPosts } from '@/components/sections/latest-blog-posts'
import { getFeaturedPortfolio, getFeaturedTestimonials, getFeaturedBlogPosts } from '@/lib/content'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

// This page is statically generated at build time
export const dynamic = 'force-static'
export const revalidate = false

export default function HomePage() {
  // Fetch data at build time
  const featuredProjects = getFeaturedPortfolio(6)
  const featuredTestimonials = getFeaturedTestimonials(6)
  const latestPosts = getFeaturedBlogPosts(3)

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-soft border border-brand/20 mb-8">
            <span className="text-sm font-medium text-brand-dark">15+ Years of Code Baking ❤️</span>
          </div>
          
          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Build Software That
            <span className="block text-brand">Drives Results</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            We create cutting-edge web and mobile applications with AI, cloud, 
            and modern frameworks for ambitious businesses.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center mb-16">
            <Link
              href="/contact"
              className="inline-flex h-11 px-8 py-2 bg-accent-primary text-white rounded-lg font-medium hover:bg-accent-hover transition-colors shadow-lg shadow-accent-primary/20"
            >
              Get Your Free Quote
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex h-11 px-8 py-2 border-2 border-accent-primary bg-transparent text-accent-primary rounded-lg font-medium hover:bg-accent-primary hover:text-white transition-colors"
            >
              View Our Work
            </Link>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="p-6 rounded-2xl bg-card border border-border hover:border-brand/50 hover:shadow-lg hover:shadow-brand/5 transition-all">
              <div className="text-5xl font-bold text-brand mb-2">604+</div>
              <div className="text-sm text-muted-foreground font-medium">Projects Delivered</div>
            </div>
            <div className="p-6 rounded-2xl bg-card border border-border hover:border-brand/50 hover:shadow-lg hover:shadow-brand/5 transition-all">
              <div className="text-5xl font-bold text-brand mb-2">400+</div>
              <div className="text-sm text-muted-foreground font-medium">Happy Clients</div>
            </div>
            <div className="p-6 rounded-2xl bg-card border border-border hover:border-brand/50 hover:shadow-lg hover:shadow-brand/5 transition-all">
              <div className="text-5xl font-bold text-brand mb-2">30+</div>
              <div className="text-sm text-muted-foreground font-medium">Expert Team</div>
            </div>
            <div className="p-6 rounded-2xl bg-card border border-border hover:border-brand/50 hover:shadow-lg hover:shadow-brand/5 transition-all">
              <div className="text-5xl font-bold text-brand mb-2">15+</div>
              <div className="text-sm text-muted-foreground font-medium">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <FeaturedServices />

      {/* Featured Portfolio */}
      {featuredProjects.length > 0 && (
        <section className="container mx-auto px-4 py-24 bg-muted/30">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our Customers as Well as Our Work
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Showcasing our finest projects that drive business growth
            </p>
          </div>
          
          <PortfolioGrid projects={featuredProjects} showFilters={false} columns={3} />
          
          <div className="flex justify-center mt-12">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 px-8 py-3 bg-brand text-white rounded-lg font-medium hover:bg-brand-light transition-colors"
            >
              View All Projects
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      )}

      {/* Testimonials */}
      {featuredTestimonials.length > 0 && (
        <section className="container mx-auto px-4 py-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it. See what our customers are saying about us.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <TestimonialsCarousel testimonials={featuredTestimonials} />
          </div>
        </section>
      )}

      {/* Latest Blog Posts */}
      {latestPosts.length > 0 && (
        <section className="container mx-auto px-4 py-24 bg-muted/30">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              We Write About
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Latest insights, tutorials, and industry news from our tech experts
            </p>
          </div>
          
          <LatestBlogPosts posts={latestPosts} showReadMore={true} />
        </section>
      )}
    </main>
  );
}
