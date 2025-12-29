import { FeaturedServices } from '@/components/sections/featured-services'

export default function HomePage() {
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
            <a
              href="/contact"
              className="inline-flex h-11 px-8 py-2 bg-accent-primary text-white rounded-lg font-medium hover:bg-accent-hover transition-colors shadow-lg shadow-accent-primary/20"
            >
              Get Your Free Quote
            </a>
            <a
              href="/portfolio"
              className="inline-flex h-11 px-8 py-2 border-2 border-brand bg-background text-brand rounded-lg font-medium hover:bg-brand hover:text-white transition-colors"
            >
              View Our Work
            </a>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="p-4">
              <div className="text-4xl font-bold text-brand mb-2">604+</div>
              <div className="text-sm text-muted-foreground">Projects Delivered</div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold text-brand mb-2">400+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold text-brand mb-2">30+</div>
              <div className="text-sm text-muted-foreground">Expert Team</div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold text-brand mb-2">18+</div>
              <div className="text-sm text-muted-foreground">Awards Won</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <FeaturedServices />
    </main>
  );
}
