import { FeaturedServices } from '@/components/sections/featured-services'
import { PortfolioShowcase } from '@/components/sections/portfolio-showcase'
import { TestimonialsCarousel } from '@/components/sections/testimonials-carousel'
import { LatestBlogPosts } from '@/components/sections/latest-blog-posts'
import { ClientLogos } from '@/components/sections/client-logos'
import { VideoSection } from '@/components/sections/video-section'
import { CTASection } from '@/components/sections/cta-section'
import { HomepageAnimations } from '@/components/animations/homepage-animations'
import { HomeHero } from '@/components/sections/home-hero'
import { CapabilityExplorer } from '@/components/sections/capability-explorer'

import TechShowcase from '@/components/animations/tech-showcase'
import { getAllPortfolio, getFeaturedTestimonials, getFeaturedBlogPosts, getSiteSettings, getFeaturedServices, getTechnologies } from '@/lib/content'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

// This page is statically generated at build time
export const metadata = { title: 'Srapsware - Build Software That Drives Results', alternates: { canonical: '/' } }
export const dynamic = 'force-static'
export const revalidate = false

export default function HomePage() {
  // Fetch data at build time
  const settings = getSiteSettings()
  const featuredServices = getFeaturedServices()
  const featuredProjects = getAllPortfolio().slice(0, 14)
  const featuredTestimonials = getFeaturedTestimonials(6)
  const latestPosts = getFeaturedBlogPosts(3)
  const technologies = getTechnologies()
  
  // Fallback values if settings not found
  const stats = settings?.stats || { projects: '604', clients: '400', team: '30', years: '15' }
  const hero = settings?.hero || {
    badge: '15+ Years of Code Baking ❤️',
    headline: 'Build Software That',
    headlineHighlight: 'Drives Results',
    subheadline: 'We create cutting-edge web and mobile applications with AI, cloud, and modern frameworks for ambitious businesses.',
    ctaPrimary: 'Get Your Free Quote',
    ctaPrimaryLink: '/contact',
    ctaSecondary: 'View Our Work',
    ctaSecondaryLink: '/portfolio'
  }
  const sections = settings?.sections || {
    portfolioTitle: 'Our Customers as Well as Our Work',
    portfolioDescription: 'Showcasing our finest projects that drive business growth',
    testimonialsTitle: 'What Our Clients Say',
    testimonialsDescription: "Don't just take our word for it. See what our customers are saying about us.",
    blogTitle: 'We Write About',
    blogDescription: 'Latest insights, tutorials, and industry news from our tech experts',
    servicesTitle: 'Our Core Services',
    servicesDescription: 'Comprehensive software development services to transform your business'
  }

  return (
    <div id="brand-home" className="min-h-screen w-full max-w-[100vw] overflow-x-hidden">
      {/* GSAP Animations */}
      <HomepageAnimations />


      <HomeHero content={hero} stats={stats} />

      {/* Client Logos - MOVED UP for trust building */}
      {settings?.clients && settings.clients.logos.length > 0 && (
        <ClientLogos 
          title={settings.clients.title}
          subtitle={settings.clients.subtitle}
          description={settings.clients.description}
          logos={settings.clients.logos}
          columns={4}
          grayscale={false}
          animated={true}
        />
      )}

      {/* Featured Services */}
      <FeaturedServices 
        services={featuredServices}
        title={sections.servicesTitle}
        description={sections.servicesDescription}
      />

      <PortfolioShowcase
        projects={featuredProjects}
        technologies={technologies}
        title={sections.portfolioTitle}
        description={sections.portfolioDescription}
      />

      {/* Video Section - MOVED UP for engagement */}
      {settings?.video && (
        <VideoSection
          title={settings.video.title}
          description={settings.video.description}
          videoUrl={settings.video.videoUrl}
          thumbnail={settings.video.thumbnail}
          thumbnailAlt={settings.video.thumbnailAlt}
        />
      )}

      <CapabilityExplorer />

      {/* Technology Showcase - Marquee + Grid */}
      {technologies && technologies.length > 0 && (
        <TechShowcase technologies={technologies} />
      )}

      {/* Testimonials - MOVED DOWN closer to conversion */}
      {featuredTestimonials.length > 0 && (
        <section className="relative w-full py-28 border-t border-border testimonials-section overflow-hidden">
          {/* Radial gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50 dark:from-purple-950/20 dark:via-blue-950/20 dark:to-cyan-950/20" />
          
          {/* Subtle dots pattern */}
          <div 
            className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
            style={{
              backgroundImage: `radial-gradient(circle, rgba(71, 128, 199, 0.4) 1px, transparent 1px)`,
              backgroundSize: '24px 24px'
            }}
          />
          
          {/* Floating quote decorations */}
          <div className="absolute top-20 left-10 text-brand/10 text-9xl font-serif pointer-events-none">"</div>
          <div className="absolute bottom-20 right-10 text-accent-primary/10 text-9xl font-serif pointer-events-none rotate-180">"</div>
          
          <div className="container mx-auto px-3 sm:px-4 max-w-[1400px] relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 testimonials-title">
              {sections.testimonialsTitle}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {sections.testimonialsDescription}
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <TestimonialsCarousel testimonials={featuredTestimonials} />
          </div>

          <div className="flex justify-center mt-12">
            <Link
              href="/testimonials"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-lg border-2 border-brand text-brand font-medium hover:bg-brand hover:text-white transition-all"
            >
              View All Testimonials
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          </div>
        </section>
      )}

      {/* Latest Blog Posts */}
      {latestPosts.length > 0 && (
        <section className="relative w-full py-20 border-t border-border blog-section overflow-hidden">
          {/* Subtle gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-slate-950 dark:via-background dark:to-blue-950/30" />
          
          {/* Decorative elements */}
          <div className="absolute top-20 right-20 w-64 h-64 bg-brand/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-accent-primary/5 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-3 sm:px-4 max-w-[1400px] relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 blog-title">
              {sections.blogTitle}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {sections.blogDescription}
            </p>
          </div>
          
          <LatestBlogPosts posts={latestPosts} showReadMore={true} />
          </div>
        </section>
      )}

      {/* CTA Section - NEW! Final conversion push */}
      <CTASection />
    </div>
  );
}
