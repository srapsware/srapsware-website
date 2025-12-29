import { FeaturedServices } from '@/components/sections/featured-services'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
            <span className="text-sm font-medium">15+ Years of Code Baking ❤️</span>
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
              className="inline-flex h-11 px-8 py-2 bg-brand text-white rounded-lg font-medium hover:bg-brand-light transition-colors"
            >
              Get Your Free Quote
            </a>
            <a
              href="/portfolio"
              className="inline-flex h-11 px-8 py-2 border border-border rounded-lg font-medium hover:bg-accent transition-colors"
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

      {/* Temporary Status Section */}
      <section className="container mx-auto px-4 py-16 border-t border-border">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">✅ Setup Complete!</h2>
          <div className="text-left space-y-2 text-sm text-muted-foreground">
            <p>✅ Next.js 15 + TypeScript + Tailwind CSS</p>
            <p>✅ Dark mode with theme toggle (try the button in header!)</p>
            <p>✅ Your brand colors (#1C5489) configured</p>
            <p>✅ Responsive header with navigation</p>
            <p>✅ Hero section with stats counters</p>
            <p>⏳ Next: Mega menu, animations, portfolio grid...</p>
          </div>
        </div>
      </section>
    </main>
  );
}
