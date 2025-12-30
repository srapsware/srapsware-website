import { FeaturedServices } from '@/components/sections/featured-services'
import { PortfolioSlider } from '@/components/sections/portfolio-slider'
import { TestimonialsCarousel } from '@/components/sections/testimonials-carousel'
import { LatestBlogPosts } from '@/components/sections/latest-blog-posts'
import { ClientLogos } from '@/components/sections/client-logos'
import { VideoSection } from '@/components/sections/video-section'
import { CTASection } from '@/components/sections/cta-section'
import { HomepageAnimations } from '@/components/animations/homepage-animations'
import GridBackground from '@/components/animations/grid-background'
import FloatingCode from '@/components/animations/floating-code'
import AnimatedCounter from '@/components/animations/animated-counter'
import ParallaxLayers from '@/components/animations/parallax-layers'
import TechShowcase from '@/components/animations/tech-showcase'
import { getFeaturedPortfolio, getFeaturedTestimonials, getFeaturedBlogPosts, getSiteSettings, getFeaturedServices, getTechnologies } from '@/lib/content'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

// This page is statically generated at build time
export const dynamic = 'force-static'
export const revalidate = false

export default function HomePage() {
  // Fetch data at build time
  const settings = getSiteSettings()
  const featuredServices = getFeaturedServices()
  const featuredProjects = getFeaturedPortfolio(14)
  const featuredTestimonials = getFeaturedTestimonials(6)
  const latestPosts = getFeaturedBlogPosts(3)
  const technologies = getTechnologies()
  
  // Fallback values if settings not found
  const stats = settings?.stats || { projects: '604+', clients: '400+', team: '30+', years: '15+' }
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
    <main className="min-h-screen">
      {/* GSAP Animations */}
      <HomepageAnimations />
      <ParallaxLayers />

      {/* Hero Section with Grid Background */}
      <section className="hero-gradient relative container mx-auto px-4 py-24 md:py-32 overflow-hidden">
        {/* Animated Grid Background - Only in Hero */}
        <GridBackground intensity={0.15} speed={0.5} gridSize={60} />
        <div className="parallax-background absolute inset-0 pointer-events-none" />
        
        {/* Floating Code Snippets */}
        <FloatingCode snippetCount={5} />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-soft border border-brand/20 mb-8 hero-badge">
            <span className="text-sm font-medium text-brand-dark">{hero.badge}</span>
          </div>
          
          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight hero-headline">
            {hero.headline}
            <span className="block text-brand highlight">{hero.headlineHighlight}</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto hero-subheadline">
            {hero.subheadline}
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center mb-16">
            <Link
              href={hero.ctaPrimaryLink}
              className="inline-flex h-11 px-8 py-2 bg-accent-primary text-white rounded-lg font-medium hover:bg-accent-hover transition-colors shadow-lg shadow-accent-primary/20 hero-cta-primary"
            >
              {hero.ctaPrimary}
            </Link>
            <Link
              href={hero.ctaSecondaryLink}
              className="inline-flex h-11 px-8 py-2 border-2 border-accent-primary bg-transparent text-accent-primary rounded-lg font-medium hover:bg-accent-primary hover:text-white transition-colors hero-cta-secondary"
            >
              {hero.ctaSecondary}
            </Link>
          </div>
          
          {/* Stats with Animated Counters */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="stats-card p-6 rounded-2xl bg-card border border-border">
              <AnimatedCounter 
                value={stats.projects} 
                duration={2.5}
                className="text-5xl font-bold text-brand mb-2" 
              />
              <div className="text-sm text-muted-foreground font-medium">Projects Delivered</div>
            </div>
            <div className="stats-card p-6 rounded-2xl bg-card border border-border">
              <AnimatedCounter 
                value={stats.clients} 
                duration={2.5}
                className="text-5xl font-bold text-brand mb-2" 
              />
              <div className="text-sm text-muted-foreground font-medium">Happy Clients</div>
            </div>
            <div className="stats-card p-6 rounded-2xl bg-card border border-border">
              <AnimatedCounter 
                value={stats.team} 
                duration={2}
                className="text-5xl font-bold text-brand mb-2" 
              />
              <div className="text-sm text-muted-foreground font-medium">Expert Team</div>
            </div>
            <div className="stats-card p-6 rounded-2xl bg-card border border-border">
              <AnimatedCounter 
                value={stats.years} 
                duration={2}
                className="text-5xl font-bold text-brand mb-2" 
              />
              <div className="text-sm text-muted-foreground font-medium">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos - MOVED UP for trust building */}
      {settings?.clients && settings.clients.logos.length > 0 && (
        <ClientLogos 
          title={settings.clients.title}
          subtitle={settings.clients.subtitle}
          description={settings.clients.description}
          logos={settings.clients.logos}
          columns={4}
          grayscale={true}
          animated={true}
        />
      )}

      {/* Featured Services */}
      <FeaturedServices 
        services={featuredServices}
        title={sections.servicesTitle}
        description={sections.servicesDescription}
      />

      {/* Featured Portfolio Slider */}
      {featuredProjects.length > 0 && (
        <section className="section-gradient-teal py-24 border-t border-border portfolio-section parallax-foreground">
          <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 portfolio-title">
              {sections.portfolioTitle}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {sections.portfolioDescription}
            </p>
          </div>
          
          <div className="px-8">
            <PortfolioSlider 
              projects={featuredProjects}
              technologies={technologies}
              autoplay={true}
              showNavigation={true}
              showPagination={true}
            />
          </div>
          
          <div className="flex justify-center mt-12">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 px-8 py-3 bg-accent-primary text-white rounded-lg font-medium hover:bg-accent-hover transition-colors shadow-lg shadow-accent-primary/20"
            >
              View All Portfolio
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          </div>
        </section>
      )}

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

      {/* Technology Showcase - Marquee + Grid */}
      {technologies && technologies.length > 0 && (
        <TechShowcase technologies={technologies} />
      )}

      {/* Testimonials - MOVED DOWN closer to conversion */}
      {featuredTestimonials.length > 0 && (
        <section className="py-24 bg-muted/50 border-t border-border testimonials-section">
          <div className="container mx-auto px-4">
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
        <section className="py-24 border-t border-border blog-section">
          <div className="container mx-auto px-4">
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
    </main>
  );
}
