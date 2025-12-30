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
      <section className="hero-gradient relative container mx-auto px-4 py-28 md:py-40 overflow-hidden">
        {/* Animated Grid Background - Only in Hero */}
        <GridBackground intensity={0.15} speed={0.5} gridSize={60} />
        <div className="parallax-background absolute inset-0 pointer-events-none" />
        
        {/* Additional subtle dot pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(71, 128, 199, 0.5) 2px, transparent 2px)`,
            backgroundSize: '40px 40px'
          }}
        />
        
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
              className="group relative inline-flex h-12 px-10 py-2 bg-gradient-to-r from-accent-primary to-brand text-white rounded-lg font-semibold hover:shadow-2xl hover:shadow-accent-primary/40 hover:scale-105 transition-all duration-300 overflow-hidden hero-cta-primary"
            >
              <span className="relative z-10 flex items-center gap-2">
                {hero.ctaPrimary}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-brand to-accent-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
            <Link
              href={hero.ctaSecondaryLink}
              className="inline-flex h-12 px-10 py-2 items-center gap-2 border-2 border-brand bg-transparent text-brand rounded-lg font-semibold hover:bg-brand hover:text-white hover:shadow-xl hover:shadow-brand/20 transition-all duration-300 hero-cta-secondary"
            >
              {hero.ctaSecondary}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          
          {/* Stats with Animated Counters */}
          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {/* Connecting lines - hidden on mobile, visible on md+ */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none hidden md:block" style={{ zIndex: 0 }}>
              <line x1="25%" y1="50%" x2="41.67%" y2="50%" stroke="url(#gradient1)" strokeWidth="2" strokeDasharray="5,5" opacity="0.3" />
              <line x1="58.33%" y1="50%" x2="75%" y2="50%" stroke="url(#gradient2)" strokeWidth="2" strokeDasharray="5,5" opacity="0.3" />
              <defs>
                <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="hsl(var(--brand))" />
                  <stop offset="100%" stopColor="hsl(var(--accent-primary))" />
                </linearGradient>
                <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="hsl(var(--accent-primary))" />
                  <stop offset="100%" stopColor="hsl(var(--brand))" />
                </linearGradient>
              </defs>
            </svg>
            
            <div className="group stats-card relative p-6 rounded-2xl bg-card border-2 border-border hover:border-brand/50 hover:shadow-xl hover:shadow-brand/10 hover:-translate-y-1 transition-all duration-300 overflow-hidden" style={{ zIndex: 1 }}>
              <div className="absolute inset-0 bg-gradient-to-br from-brand/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {/* Progress bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-brand to-accent-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <AnimatedCounter 
                value={stats.projects} 
                duration={2.5}
                className="relative z-10 text-5xl font-bold text-brand mb-2" 
              />
              <div className="relative z-10 text-sm text-muted-foreground font-medium">Projects Delivered</div>
            </div>
            <div className="group stats-card relative p-6 rounded-2xl bg-card border-2 border-border hover:border-brand/50 hover:shadow-xl hover:shadow-brand/10 hover:-translate-y-1 transition-all duration-300 overflow-hidden" style={{ zIndex: 1 }}>
              <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {/* Progress bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-primary to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <AnimatedCounter 
                value={stats.clients} 
                duration={2.5}
                className="relative z-10 text-5xl font-bold text-brand mb-2" 
              />
              <div className="relative z-10 text-sm text-muted-foreground font-medium">Happy Clients</div>
            </div>
            <div className="group stats-card relative p-6 rounded-2xl bg-card border-2 border-border hover:border-brand/50 hover:shadow-xl hover:shadow-brand/10 hover:-translate-y-1 transition-all duration-300 overflow-hidden" style={{ zIndex: 1 }}>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {/* Progress bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <AnimatedCounter 
                value={stats.team} 
                duration={2}
                className="relative z-10 text-5xl font-bold text-brand mb-2" 
              />
              <div className="relative z-10 text-sm text-muted-foreground font-medium">Expert Team</div>
            </div>
            <div className="group stats-card relative p-6 rounded-2xl bg-card border-2 border-border hover:border-brand/50 hover:shadow-xl hover:shadow-brand/10 hover:-translate-y-1 transition-all duration-300 overflow-hidden" style={{ zIndex: 1 }}>
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {/* Progress bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-brand opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <AnimatedCounter 
                value={stats.years} 
                duration={2}
                className="relative z-10 text-5xl font-bold text-brand mb-2" 
              />
              <div className="relative z-10 text-sm text-muted-foreground font-medium">Years Experience</div>
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
        <section className="section-gradient-teal py-20 border-t border-border portfolio-section parallax-foreground">
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
        <section className="relative py-28 border-t border-border testimonials-section overflow-hidden">
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
          
          <div className="container mx-auto px-4 relative z-10">
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
        <section className="relative py-20 border-t border-border blog-section overflow-hidden">
          {/* Subtle gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-slate-950 dark:via-background dark:to-blue-950/30" />
          
          {/* Decorative elements */}
          <div className="absolute top-20 right-20 w-64 h-64 bg-brand/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-accent-primary/5 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-4 relative z-10">
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
