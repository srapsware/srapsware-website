import { Metadata } from 'next'
import { PageHero } from '@/components/sections/page-hero'
import { ProcessSteps } from '@/components/sections/process-steps'
import { TestimonialsCarousel } from '@/components/sections/testimonials-carousel'
import { PortfolioSlider } from '@/components/sections/portfolio-slider'
import { CTASection } from '@/components/sections/cta-section'
import TechShowcase from '@/components/animations/tech-showcase'
import { getFeaturedPortfolio, getTechnologies, getFeaturedTestimonials } from '@/lib/content'
import { Database, Server, Lock, Zap, GitBranch, Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Backend Development Services | Node.js, Python, PHP | Srapsware',
  description: 'Expert backend development with Node.js, Python, PHP, and modern frameworks. Build scalable, secure, and high-performance server-side applications.',
  openGraph: {
    title: 'Backend Development Services',
    description: 'Robust backend development for scalable applications',
    type: 'website',
  }
}

export default function BackendDevelopmentPage() {
  const portfolioProjects = getFeaturedPortfolio()
  const technologies = getTechnologies()
  const testimonials = getFeaturedTestimonials()

  const processSteps = [
    {
      number: 1,
      title: 'Architecture Design',
      description: 'Design database schema, API structure, microservices architecture, and system integrations.',
      duration: '1-2 weeks',
      icon: 'GitBranch'
    },
    {
      number: 2,
      title: 'Database Setup',
      description: 'Configure databases (SQL/NoSQL), setup replication, backup strategies, and data migrations.',
      duration: '1 week',
      icon: 'Database'
    },
    {
      number: 3,
      title: 'API Development',
      description: 'Build RESTful or GraphQL APIs with authentication, authorization, and rate limiting.',
      duration: '3-5 weeks',
      icon: 'Server'
    },
    {
      number: 4,
      title: 'Integration & Testing',
      description: 'Third-party integrations, unit tests, integration tests, and load testing.',
      duration: '1-2 weeks',
      icon: 'Plug'
    },
    {
      number: 5,
      title: 'Security Hardening',
      description: 'Security audits, encryption, SQL injection prevention, and vulnerability scanning.',
      duration: '1 week',
      icon: 'Shield'
    },
    {
      number: 6,
      title: 'Deployment & Monitoring',
      description: 'CI/CD pipelines, server setup, logging, monitoring, and performance optimization.',
      duration: '1 week',
      icon: 'Rocket'
    }
  ]

  return (
    <main>
      {/* Hero Section */}
      <PageHero
        badge="Backend Development"
        title="Robust Backend Development Services"
        description="Build scalable, secure, and high-performance server-side applications with Node.js, Python, PHP, and cutting-edge backend technologies."
        ctaPrimary={{
          text: 'Start Your Project',
          href: '/contact'
        }}
        ctaSecondary={{
          text: 'View Our Work',
          href: '/portfolio'
        }}
      />

      {/* Overview Section - Creative Magazine Layout */}
      <section className="relative py-32 border-t border-border overflow-hidden">
        {/* Floating Background Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4">
          {/* Dynamic Title */}
          <div className="relative mb-20">
            <div className="absolute -top-10 -right-10 w-32 h-32 border-4 border-green-500/20 rounded-full hidden lg:block"></div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="block text-foreground">Powerful Server Infrastructure,</span>
              <span className="block mt-2 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 bg-clip-text text-transparent">
                Rock-Solid Reliability
              </span>
            </h2>
          </div>

          {/* First Section - Diagonal Split */}
          <div className="relative mb-32">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              {/* Large Image - Diagonal Cut */}
              <div className="lg:col-span-7 relative">
                <div className="relative h-[400px] lg:h-[500px] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20 opacity-50" 
                       style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)' }}></div>
                  <img 
                    src="https://picsum.photos/seed/backend-servers/900/600" 
                    alt="Backend Development"
                    className="w-full h-full object-cover"
                    style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)' }}
                  />
                  {/* Floating Badge */}
                  <div className="absolute top-8 right-8 bg-background/90 backdrop-blur-md border border-green-500/30 rounded-full px-6 py-3 shadow-xl">
                    <span className="text-sm font-bold text-green-500">API & Database Experts</span>
                  </div>
                </div>
              </div>
              
              {/* Text Content - Overlapping */}
              <div className="lg:col-span-5 lg:-ml-20 relative z-10">
                <div className="bg-background/95 backdrop-blur-xl border border-border rounded-3xl p-8 lg:p-10 shadow-2xl">
                  <div className="w-12 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mb-6"></div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground">The Engine Behind Every App</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Backend development powers everything users interact with. We build robust server-side applications, design efficient databases, create secure APIs, and implement complex business logic that scales from startup to enterprise.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Second Section - Reverse Layout */}
          <div className="relative mb-32">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              {/* Text Content - Left Side */}
              <div className="lg:col-span-5 relative z-10 order-2 lg:order-1">
                <div className="relative">
                  <div className="absolute -top-6 -left-6 w-24 h-24 bg-emerald-500/10 rounded-lg -z-10"></div>
                  <div className="bg-gradient-to-br from-background via-background to-emerald-900/5 backdrop-blur-xl border border-border rounded-3xl p-8 lg:p-10 shadow-2xl">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                      <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse delay-100"></div>
                      <div className="w-3 h-3 rounded-full bg-teal-500 animate-pulse delay-200"></div>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-foreground">Multi-Language Expertise</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      We master Node.js with Express/Fastify, Python with Django/Flask, PHP with Laravel, and Go for high-performance services. Choose the right tool for your needs, or let us recommend based on your requirements.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Image Grid - Right Side */}
              <div className="lg:col-span-7 lg:-mr-20 relative order-1 lg:order-2">
                <div className="grid grid-cols-2 gap-4 h-[500px]">
                  <div className="row-span-2 rounded-2xl overflow-hidden relative group">
                    <img 
                      src="https://picsum.photos/seed/api-development/400/650" 
                      alt="API Development"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-green-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="rounded-2xl overflow-hidden relative group">
                    <img 
                      src="https://picsum.photos/seed/database-design/400/320" 
                      alt="Database Design"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/80 to-transparent"></div>
                  </div>
                  <div className="rounded-2xl overflow-hidden relative group">
                    <img 
                      src="https://picsum.photos/seed/microservices/400/320" 
                      alt="Microservices"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tl from-teal-500/80 to-transparent"></div>
                    <div className="absolute bottom-4 right-4 bg-white text-black text-xs font-bold px-3 py-1 rounded-full">
                      Scalable Architecture
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Third Section - Full Width Stats */}
          <div className="relative">
            <div className="bg-gradient-to-br from-background via-green-500/5 to-emerald-900/10 rounded-[3rem] overflow-hidden border border-border shadow-2xl">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Left - Text with Stats */}
                <div className="p-12 lg:p-16 flex flex-col justify-center relative">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500"></div>
                  
                  <h3 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight">
                    Built to Handle{' '}
                    <span className="text-green-500">Millions of Requests</span>
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                    From startups to enterprise, we architect backend systems that scale seamlessly. Handle traffic spikes, process millions of transactions, and maintain 99.9% uptime with our battle-tested infrastructure.
                  </p>
                  
                  {/* Stats Grid */}
                  <div className="grid grid-cols-3 gap-6 mb-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-500 mb-2">10M+</div>
                      <div className="text-sm text-muted-foreground">API Calls/Day</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-emerald-500 mb-2">99.9%</div>
                      <div className="text-sm text-muted-foreground">Uptime</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-teal-500 mb-2">&lt;100ms</div>
                      <div className="text-sm text-muted-foreground">Response Time</div>
                    </div>
                  </div>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-sm font-medium">
                      Horizontal Scaling
                    </span>
                    <span className="px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-sm font-medium">
                      Load Balancing
                    </span>
                    <span className="px-4 py-2 bg-teal-500/10 border border-teal-500/20 rounded-full text-sm font-medium">
                      Auto-Scaling
                    </span>
                  </div>
                </div>
                
                {/* Right - Large Hero Image */}
                <div className="relative h-[400px] lg:h-auto min-h-[500px]">
                  <img 
                    src="https://picsum.photos/seed/server-infrastructure/700/700" 
                    alt="Server Infrastructure"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-background via-transparent to-transparent lg:from-background/50"></div>
                  
                  {/* Floating Card */}
                  <div className="absolute bottom-8 right-8 bg-background/95 backdrop-blur-xl border border-border rounded-2xl p-6 shadow-2xl max-w-xs hidden lg:block">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-white font-bold">
                        ✓
                      </div>
                      <div>
                        <div className="font-bold text-foreground mb-1">Enterprise Ready</div>
                        <div className="text-sm text-muted-foreground">Scales from 100 to 10M users</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features - Bento Grid Layout */}
      <section className="relative py-28 border-t border-border overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(34,197,94,0.05),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(16,185,129,0.05),transparent_50%)]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <div className="max-w-3xl mb-16">
            <div className="inline-block px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-sm font-semibold text-green-500 mb-6">
              Backend Excellence
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Why Choose Our
              <span className="block text-transparent bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text">
                Backend Development
              </span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Scalable architecture, secure APIs, and robust database design
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid lg:grid-cols-12 gap-6">
            {/* Scalable APIs - Large Featured */}
            <div className="lg:col-span-8 relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              <div className="relative h-full bg-gradient-to-br from-green-950/40 to-emerald-950/40 backdrop-blur-xl border border-green-500/20 rounded-3xl p-8 lg:p-12 overflow-hidden group-hover:border-green-500/40 transition-all duration-300">
                <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 rounded-full blur-3xl"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Server className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4 text-foreground">Scalable API Architecture</h3>
                  <p className="text-lg text-muted-foreground mb-8">
                    RESTful and GraphQL APIs designed to handle millions of requests. Rate limiting, caching, versioning, and comprehensive documentation included.
                  </p>
                  <div className="relative h-48 rounded-2xl overflow-hidden">
                    <img 
                      src="https://picsum.photos/seed/api-architecture/700/300" 
                      alt="API Architecture"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-green-950/80 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 flex items-center gap-4">
                      <div className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">REST</div>
                      <div className="bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full">GraphQL</div>
                      <div className="bg-white/10 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full">WebSocket</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Database Design - Tall Card */}
            <div className="lg:col-span-4 lg:row-span-2 relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              <div className="relative h-full bg-gradient-to-br from-blue-950/40 to-cyan-950/40 backdrop-blur-xl border border-blue-500/20 rounded-3xl p-8 overflow-hidden group-hover:border-blue-500/40 transition-all duration-300">
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl"></div>
                <div className="relative z-10 h-full flex flex-col">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
                    <Database className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground">Expert Database Design</h3>
                  <p className="text-base text-muted-foreground mb-6">
                    PostgreSQL, MongoDB, MySQL, Redis - we design efficient schemas, optimize queries, and ensure data integrity.
                  </p>
                  <div className="mt-auto space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-blue-500/5 rounded-lg border border-blue-500/10">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-sm">Schema Optimization</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-blue-500/5 rounded-lg border border-blue-500/10">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                      <span className="text-sm">Query Performance</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-blue-500/5 rounded-lg border border-blue-500/10">
                      <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                      <span className="text-sm">Data Migration</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Security */}
            <div className="lg:col-span-4 relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative h-full bg-gradient-to-br from-red-950/40 to-orange-950/40 backdrop-blur-xl border border-red-500/20 rounded-3xl p-6 overflow-hidden group-hover:border-red-500/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center mb-4">
                  <Lock className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Enterprise Security</h3>
                <p className="text-sm text-muted-foreground">
                  JWT authentication, OAuth2, encryption at rest and in transit, SQL injection prevention, and regular security audits.
                </p>
              </div>
            </div>

            {/* Performance */}
            <div className="lg:col-span-4 relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative h-full bg-gradient-to-br from-purple-950/40 to-pink-950/40 backdrop-blur-xl border border-purple-500/20 rounded-3xl p-6 overflow-hidden group-hover:border-purple-500/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Optimized Performance</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Caching strategies with Redis, database indexing, query optimization, and CDN integration for static assets.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-purple-500/10 border border-purple-500/30 rounded text-xs">Redis</span>
                  <span className="px-2 py-1 bg-purple-500/10 border border-purple-500/30 rounded text-xs">Memcached</span>
                  <span className="px-2 py-1 bg-purple-500/10 border border-purple-500/30 rounded text-xs">CDN</span>
                </div>
              </div>
            </div>

            {/* Microservices & DevOps - Wide Card */}
            <div className="lg:col-span-8 relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 via-violet-500/20 to-purple-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              <div className="relative h-full bg-gradient-to-r from-indigo-950/40 via-violet-950/40 to-purple-950/40 backdrop-blur-xl border border-indigo-500/20 rounded-3xl overflow-hidden group-hover:border-indigo-500/40 transition-all duration-300">
                <div className="grid md:grid-cols-2 gap-0 h-full">
                  {/* Microservices Side */}
                  <div className="p-8 flex flex-col justify-center border-r border-indigo-500/10">
                    <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-violet-500 rounded-2xl flex items-center justify-center mb-6">
                      <GitBranch className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-foreground">Microservices</h3>
                    <p className="text-base text-muted-foreground">
                      Break monoliths into scalable microservices. Event-driven architecture, message queues, and service mesh.
                    </p>
                  </div>
                  
                  {/* DevOps Side */}
                  <div className="relative p-8 flex flex-col justify-center">
                    <div className="absolute inset-0">
                      <img 
                        src="https://picsum.photos/seed/devops/500/400" 
                        alt="DevOps"
                        className="w-full h-full object-cover opacity-20"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-950/80 to-purple-950/40"></div>
                    </div>
                    <div className="relative z-10">
                      <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
                        <Shield className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold mb-3 text-foreground">DevOps Integration</h3>
                      <p className="text-base text-muted-foreground">
                        CI/CD pipelines, Docker containers, Kubernetes orchestration, and infrastructure as code.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <TechShowcase 
        technologies={technologies}
        title="Backend Technology Stack"
        subtitle="Powerful server-side technologies for scalable applications"
        filterSlugs={[
          // Backend Languages & Frameworks
          'nodejs', 'python', 'php', 'go', 'rust',
          'expressjs', 'fastify', 'django', 'flask', 'laravel',
          // Databases
          'postgresql', 'mongodb', 'mysql', 'redis', 'firebase',
          // API & Tools
          'graphql', 'prisma', 'typeorm',
          // DevOps
          'docker', 'kubernetes', 'aws', 'nginx'
        ]}
        showStats={true}
      />

      {/* Process */}
      <ProcessSteps
        title="Our Backend Development Process"
        description="From architecture design to production deployment"
        steps={processSteps}
      />

      {/* Use Cases - Card Deck Layout */}
      <section className="relative py-32 border-t border-border overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/5 to-transparent"></div>
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <div className="max-w-3xl mb-20">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-green-500 to-transparent"></div>
              <span className="px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-sm font-semibold text-green-500">
                What We Build
              </span>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent via-green-500 to-transparent"></div>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Backend Solutions For{' '}
              <span className="relative inline-block">
                <span className="relative z-10 text-transparent bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 bg-clip-text">
                  Every Scale
                </span>
                <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 200 12" fill="none">
                  <path d="M0 6C50 0 150 12 200 6" stroke="url(#gradient-backend)" strokeWidth="2"/>
                  <defs>
                    <linearGradient id="gradient-backend" x1="0" y1="0" x2="200" y2="0">
                      <stop offset="0%" stopColor="rgb(34, 197, 94)" />
                      <stop offset="50%" stopColor="rgb(16, 185, 129)" />
                      <stop offset="100%" stopColor="rgb(20, 184, 166)" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              From simple APIs to complex distributed systems
            </p>
          </div>

          {/* Card Deck */}
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* RESTful APIs */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              <div className="relative h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 backdrop-blur-sm border border-green-500/10 rounded-3xl transform translate-x-2 translate-y-2"></div>
                
                <div className="relative bg-background/95 backdrop-blur-xl border border-green-500/20 rounded-3xl p-8 lg:p-10 overflow-hidden group-hover:border-green-500/40 transition-all duration-300">
                  <div className="absolute top-4 right-4 w-32 h-32 bg-green-500/5 rounded-full blur-2xl"></div>
                  
                  <div className="relative z-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    
                    <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-foreground">RESTful APIs</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                      Clean, documented APIs with proper HTTP methods, status codes, authentication, and rate limiting.
                    </p>
                    
                    <div className="relative h-40 rounded-xl overflow-hidden mb-6">
                      <img 
                        src="https://picsum.photos/seed/rest-api/600/300" 
                        alt="RESTful API"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-green-500/80 to-transparent"></div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1.5 bg-green-500/10 border border-green-500/30 rounded-full text-xs font-medium text-green-400">
                        JWT Auth
                      </span>
                      <span className="px-3 py-1.5 bg-green-500/10 border border-green-500/30 rounded-full text-xs font-medium text-green-400">
                        Swagger Docs
                      </span>
                      <span className="px-3 py-1.5 bg-green-500/10 border border-green-500/30 rounded-full text-xs font-medium text-green-400">
                        Versioning
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* GraphQL APIs */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              <div className="relative h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-purple-500/5 backdrop-blur-sm border border-pink-500/10 rounded-3xl transform translate-x-2 translate-y-2"></div>
                
                <div className="relative bg-background/95 backdrop-blur-xl border border-pink-500/20 rounded-3xl p-8 lg:p-10 overflow-hidden group-hover:border-pink-500/40 transition-all duration-300">
                  <div className="absolute bottom-4 left-4 w-40 h-40 bg-pink-500/5 rounded-full blur-2xl"></div>
                  
                  <div className="relative z-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    
                    <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-foreground">GraphQL APIs</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                      Flexible query language that lets clients request exactly the data they need. Perfect for complex data requirements.
                    </p>
                    
                    <div className="grid grid-cols-2 gap-2 mb-6">
                      <div className="relative h-20 rounded-lg overflow-hidden bg-pink-500/10 border border-pink-500/20 flex items-center justify-center">
                        <span className="text-xs font-mono text-pink-400">query</span>
                      </div>
                      <div className="relative h-20 rounded-lg overflow-hidden bg-pink-500/10 border border-pink-500/20 flex items-center justify-center">
                        <span className="text-xs font-mono text-pink-400">mutation</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1.5 bg-pink-500/10 border border-pink-500/30 rounded-full text-xs font-medium text-pink-400">
                        Apollo Server
                      </span>
                      <span className="px-3 py-1.5 bg-pink-500/10 border border-pink-500/30 rounded-full text-xs font-medium text-pink-400">
                        Subscriptions
                      </span>
                      <span className="px-3 py-1.5 bg-pink-500/10 border border-pink-500/30 rounded-full text-xs font-medium text-pink-400">
                        Type Safety
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Microservices */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              <div className="relative h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 backdrop-blur-sm border border-blue-500/10 rounded-3xl transform translate-x-2 translate-y-2"></div>
                
                <div className="relative bg-background/95 backdrop-blur-xl border border-blue-500/20 rounded-3xl p-8 lg:p-10 overflow-hidden group-hover:border-blue-500/40 transition-all duration-300">
                  <div className="absolute top-4 left-4 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl"></div>
                  
                  <div className="relative z-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                    </div>
                    
                    <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-foreground">Microservices Architecture</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                      Break monolithic applications into independent services. Scale individual components, deploy faster, and maintain easier.
                    </p>
                    
                    <div className="relative h-32 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-xl p-4 mb-6 border border-blue-500/20">
                      <div className="grid grid-cols-3 gap-2 h-full">
                        {[...Array(6)].map((_, i) => (
                          <div key={i} className="bg-blue-500/20 rounded border border-blue-500/30"></div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1.5 bg-blue-500/10 border border-blue-500/30 rounded-full text-xs font-medium text-blue-400">
                        Docker
                      </span>
                      <span className="px-3 py-1.5 bg-blue-500/10 border border-blue-500/30 rounded-full text-xs font-medium text-blue-400">
                        Kubernetes
                      </span>
                      <span className="px-3 py-1.5 bg-blue-500/10 border border-blue-500/30 rounded-full text-xs font-medium text-blue-400">
                        Message Queue
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Real-time Applications */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-amber-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              <div className="relative h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-amber-500/5 backdrop-blur-sm border border-orange-500/10 rounded-3xl transform translate-x-2 translate-y-2"></div>
                
                <div className="relative bg-background/95 backdrop-blur-xl border border-orange-500/20 rounded-3xl p-8 lg:p-10 overflow-hidden group-hover:border-orange-500/40 transition-all duration-300">
                  <div className="absolute bottom-4 right-4 w-40 h-40 bg-orange-500/5 rounded-full blur-2xl"></div>
                  
                  <div className="relative z-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    
                    <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-foreground">Real-time Apps</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                      WebSocket servers for chat applications, live notifications, collaborative tools, and real-time data streaming.
                    </p>
                    
                    <div className="grid grid-cols-3 gap-3 mb-6">
                      <div className="aspect-square bg-gradient-to-br from-orange-500/10 to-amber-500/10 rounded-xl border border-orange-500/20 flex items-center justify-center">
                        <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                      </div>
                      <div className="aspect-square bg-gradient-to-br from-orange-500/10 to-amber-500/10 rounded-xl border border-orange-500/20 flex items-center justify-center">
                        <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                        </svg>
                      </div>
                      <div className="aspect-square bg-gradient-to-br from-orange-500/10 to-amber-500/10 rounded-xl border border-orange-500/20 flex items-center justify-center">
                        <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1.5 bg-orange-500/10 border border-orange-500/30 rounded-full text-xs font-medium text-orange-400">
                        Socket.io
                      </span>
                      <span className="px-3 py-1.5 bg-orange-500/10 border border-orange-500/30 rounded-full text-xs font-medium text-orange-400">
                        WebSocket
                      </span>
                      <span className="px-3 py-1.5 bg-orange-500/10 border border-orange-500/30 rounded-full text-xs font-medium text-orange-400">
                        Pub/Sub
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      {portfolioProjects.length > 0 && (
        <section className="py-20 border-t border-border bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Backend Projects We've Built
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                See our latest API, database, and server-side projects in action
              </p>
            </div>
            
            <div className="px-8">
              <PortfolioSlider 
                projects={portfolioProjects.slice(0, 6)}
                technologies={technologies}
                autoplay={true}
                showNavigation={true}
              />
            </div>
          </div>
        </section>
      )}

      {/* Testimonials */}
      {testimonials.length > 0 && (
        <section className="relative py-28 border-t border-border overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                What Our Clients Say
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Trusted by businesses for reliable backend infrastructure
              </p>
            </div>
            
            <TestimonialsCarousel testimonials={testimonials} />
          </div>
        </section>
      )}

      {/* Final CTA */}
      <CTASection 
        title="Ready to Build Robust Backend Systems?"
        description="Let's create a scalable, secure backend infrastructure that powers your business. Get a free consultation and project estimate."
        primaryButtonText="Start Your Project"
        primaryButtonLink="/contact"
        secondaryButtonText="Schedule Free Consultation"
        secondaryButtonLink="/contact"
        showContactInfo={true}
      />
    </main>
  )
}
