import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { 
  Boxes, 
  GitBranch, 
  Zap, 
  Shield, 
  Database, 
  Network,
  ArrowRight,
  CheckCircle2,
  Clock,
  TrendingUp,
  Server,
  Workflow,
  Code,
  LayoutGrid
} from 'lucide-react'
import { cn } from '@/lib/utils'
import TechShowcase from '@/components/animations/tech-showcase'
import { PortfolioSlider } from '@/components/sections/portfolio-slider'
import { TestimonialsCarousel } from '@/components/sections/testimonials-carousel'
import { CTASection } from '@/components/sections/cta-section'
import { getFeaturedPortfolio, getTechnologies, getFeaturedTestimonials } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Microservices Architecture Development | Scalable Distributed Systems',
  description: 'Expert microservices architecture design and development. Build scalable, maintainable, and resilient distributed systems with modern service-oriented architecture.',
  keywords: 'microservices architecture, distributed systems, service-oriented architecture, SOA, API gateway, service mesh, event-driven architecture, microservices consulting',
  openGraph: {
    title: 'Microservices Architecture Development | Scalable Systems',
    description: 'Transform monoliths into scalable microservices. Expert architecture design, implementation, and migration services.',
    type: 'website',
  }
}

export default function MicroservicesPage() {
  const projects = getFeaturedPortfolio(6)
  const technologies = getTechnologies()
  const testimonials = getFeaturedTestimonials(6)

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <section className="border-b border-border bg-muted/30">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-foreground transition-colors">Services</Link>
            <span>/</span>
            <Link href="/services/cloud" className="hover:text-foreground transition-colors">Cloud</Link>
            <span>/</span>
            <span className="text-foreground font-medium">Microservices Architecture</span>
          </nav>
        </div>
      </section>

      {/* Hero Section - Modern Gradient Design */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 dark:from-purple-950/20 dark:via-pink-950/20 dark:to-orange-950/20" />
        <div className="absolute inset-0 bg-grid-slate-900/[0.04] dark:bg-grid-slate-400/[0.05] bg-[size:32px_32px]" />
        
        {/* Floating Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-400/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-400/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-4 px-4 py-1.5 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium">
                ☁️ Cloud Architecture Services
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
                Microservices Architecture
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                Build scalable, maintainable distributed systems that adapt to your business needs. Break free from monolithic constraints.
              </p>

              {/* Key Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center p-4 rounded-lg bg-white/50 dark:bg-black/20 backdrop-blur-sm border border-white/20">
                  <div className="text-3xl font-bold text-purple-600">5x</div>
                  <div className="text-sm text-muted-foreground">Deploy Speed</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-white/50 dark:bg-black/20 backdrop-blur-sm border border-white/20">
                  <div className="text-3xl font-bold text-pink-600">99.99%</div>
                  <div className="text-sm text-muted-foreground">Availability</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-white/50 dark:bg-black/20 backdrop-blur-sm border border-white/20">
                  <div className="text-3xl font-bold text-orange-600">∞</div>
                  <div className="text-sm text-muted-foreground">Scalability</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200"
                >
                  Start Microservices Journey
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link 
                  href="#architecture-patterns"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-purple-600 text-purple-600 dark:text-purple-400 rounded-lg font-semibold hover:bg-purple-50 dark:hover:bg-purple-950/30 transition-all duration-200"
                >
                  Explore Patterns
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 backdrop-blur-sm">
                <Image
                  src="https://picsum.photos/800/600?random=microservices"
                  alt="Microservices Architecture Diagram"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                  priority
                />
                {/* Floating Badge */}
                <div className="absolute top-6 right-6 bg-white/90 dark:bg-black/90 backdrop-blur-md px-4 py-2 rounded-lg shadow-lg border border-white/20">
                  <div className="flex items-center space-x-2">
                    <Boxes className="w-5 h-5 text-purple-500 animate-pulse" />
                    <span className="font-semibold text-sm">Distributed System</span>
                  </div>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex items-center space-x-4 bg-white dark:bg-gray-900 px-6 py-3 rounded-full shadow-xl border border-gray-200 dark:border-gray-800">
                <Boxes className="w-6 h-6 text-purple-600" />
                <Network className="w-6 h-6 text-pink-600" />
                <Server className="w-6 h-6 text-orange-600" />
                <Workflow className="w-6 h-6 text-red-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section - Magazine Layout */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-4">
          {/* Layout 1: Diagonal Split */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://picsum.photos/600/400?random=microservices-diagram"
                  alt="Microservices Communication Pattern"
                  width={600}
                  height={400}
                  className="w-full h-auto transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm font-medium">Service Mesh Architecture</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 lg:pl-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Break Free from Monolithic Limitations</h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                Microservices architecture decomposes applications into small, independent services that communicate through well-defined APIs. Each service owns its data, can be deployed independently, and scales based on demand.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We help enterprises transition from monolithic systems to microservices, enabling faster feature delivery, better fault isolation, technology flexibility, and true horizontal scaling. Your teams can work independently without stepping on each other's toes.
              </p>
            </div>
          </div>

          {/* Layout 2: Reverse Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16 items-center">
            <div className="lg:pr-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Event-Driven Architecture Excellence</h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                Modern microservices communicate asynchronously through events, enabling loose coupling and better scalability. We implement event-driven patterns using Apache Kafka, RabbitMQ, AWS SNS/SQS, and Azure Service Bus.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Your services become reactive and resilient, handling millions of events per second while maintaining data consistency across distributed transactions with saga patterns and event sourcing.
              </p>
            </div>
            <div>
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://picsum.photos/600/400?random=event-driven"
                  alt="Event-Driven Architecture"
                  width={600}
                  height={400}
                  className="w-full h-auto transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm font-medium">Event Stream Processing</p>
                </div>
              </div>
            </div>
          </div>

          {/* Layout 3: Full-Width Stats */}
          <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 rounded-2xl p-8 text-white">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">150+</div>
                <div className="text-purple-100">Microservices Built</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">40%</div>
                <div className="text-purple-100">Reduced Development Time</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">99.99%</div>
                <div className="text-purple-100">Service Availability</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">10x</div>
                <div className="text-purple-100">Faster Feature Releases</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features - Asymmetric Bento Grid */}
      <section className="py-20 border-t border-border bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Microservices Capabilities That Scale</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Complete microservices solutions from architecture design to production deployment
            </p>
          </div>

          <div className="grid md:grid-cols-12 gap-6">
            {/* Large Feature - Spans 8 columns */}
            <div className="md:col-span-8 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-500 to-purple-700 p-8 text-white hover:shadow-2xl transition-all duration-300">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform translate-x-32 -translate-y-32 group-hover:scale-150 transition-transform duration-500" />
              <div className="relative z-10">
                <LayoutGrid className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold mb-3">API Gateway & Service Mesh</h3>
                <p className="text-purple-100 mb-4 text-lg leading-relaxed">
                  Implement Kong, NGINX, or AWS API Gateway for unified API management. Deploy Istio or Linkerd service mesh for traffic management, security, and observability across all microservices with zero code changes.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="text-sm">Rate Limiting & Auth</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="text-sm">Circuit Breakers</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="text-sm">mTLS Encryption</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Tall Feature - 4 columns, 2 rows */}
            <div className="md:col-span-4 md:row-span-2 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-pink-500 to-pink-700 p-8 text-white hover:shadow-2xl transition-all duration-300">
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl transform -translate-x-24 translate-y-24 group-hover:scale-150 transition-transform duration-500" />
              <div className="relative z-10 h-full flex flex-col">
                <Database className="w-12 h-12 mb-4 group-hover:rotate-12 transition-transform" />
                <h3 className="text-2xl font-bold mb-3">Database Per Service Pattern</h3>
                <p className="text-pink-100 mb-4 leading-relaxed flex-grow">
                  Each microservice owns its database, ensuring loose coupling and independent scaling. We implement polyglot persistence - PostgreSQL for transactional data, MongoDB for documents, Redis for caching, Elasticsearch for search.
                </p>
                <div className="space-y-2 mt-auto">
                  <div className="flex items-center justify-between bg-white/10 rounded-lg p-2">
                    <span className="text-sm">Data Isolation</span>
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div className="flex items-center justify-between bg-white/10 rounded-lg p-2">
                    <span className="text-sm">Event Sourcing</span>
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div className="flex items-center justify-between bg-white/10 rounded-lg p-2">
                    <span className="text-sm">CQRS Pattern</span>
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>

            {/* Medium Feature - 4 columns */}
            <div className="md:col-span-4 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-orange-500 to-orange-700 p-6 text-white hover:shadow-2xl transition-all duration-300">
              <Workflow className="w-10 h-10 mb-3 group-hover:rotate-180 transition-transform duration-500" />
              <h3 className="text-xl font-bold mb-2">Saga Pattern Implementation</h3>
              <p className="text-orange-100 text-sm leading-relaxed">
                Distributed transactions with choreography and orchestration patterns
              </p>
            </div>

            {/* Medium Feature - 4 columns */}
            <div className="md:col-span-4 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-red-500 to-red-700 p-6 text-white hover:shadow-2xl transition-all duration-300">
              <Shield className="w-10 h-10 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2">Security & Authentication</h3>
              <p className="text-red-100 text-sm leading-relaxed">
                OAuth2, JWT tokens, mutual TLS, and zero-trust security model
              </p>
            </div>

            {/* Large Feature - Spans 8 columns */}
            <div className="md:col-span-8 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 p-8 text-white hover:shadow-2xl transition-all duration-300">
              <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform -translate-x-32 -translate-y-32 group-hover:scale-150 transition-transform duration-500" />
              <div className="relative z-10">
                <Network className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold mb-3">Event-Driven Communication</h3>
                <p className="text-blue-100 mb-4 text-lg leading-relaxed">
                  Build reactive systems with Apache Kafka, RabbitMQ, AWS SNS/SQS, or Azure Service Bus. Handle millions of events per second with guaranteed delivery, ordering, and exactly-once processing semantics.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="text-sm">Event Sourcing</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="text-sm">Stream Processing</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="text-sm">Dead Letter Queues</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Medium Feature - 4 columns */}
            <div className="md:col-span-4 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-green-500 to-green-700 p-6 text-white hover:shadow-2xl transition-all duration-300">
              <TrendingUp className="w-10 h-10 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2">Auto-Scaling & Load Balancing</h3>
              <p className="text-green-100 text-sm leading-relaxed">
                Horizontal scaling based on metrics with intelligent traffic distribution
              </p>
            </div>

            {/* Medium Feature - 4 columns */}
            <div className="md:col-span-4 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-cyan-500 to-cyan-700 p-6 text-white hover:shadow-2xl transition-all duration-300">
              <Server className="w-10 h-10 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2">Service Discovery & Registry</h3>
              <p className="text-cyan-100 text-sm leading-relaxed">
                Consul, Eureka, or Kubernetes DNS for dynamic service location
              </p>
            </div>

            {/* Medium Feature - 4 columns */}
            <div className="md:col-span-4 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-500 to-indigo-700 p-6 text-white hover:shadow-2xl transition-all duration-300">
              <Code className="w-10 h-10 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2">Distributed Tracing & Logging</h3>
              <p className="text-indigo-100 text-sm leading-relaxed">
                Jaeger, Zipkin, and ELK stack for complete observability
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-4">
          <TechShowcase 
            technologies={technologies}
            title="Microservices Technology Ecosystem"
            subtitle="Modern frameworks, message brokers, and orchestration tools for building distributed systems"
            filterSlugs={[
              'nodejs', 'golang', 'java', 'python', 'docker', 'kubernetes',
              'kafka', 'rabbitmq', 'redis', 'mongodb', 'postgresql',
              'graphql', 'grpc', 'nginx', 'istio', 'consul'
            ]}
            showStats={true}
          />
        </div>
      </section>

      {/* Architecture Patterns - Card Deck Style */}
      <section id="architecture-patterns" className="py-20 border-t border-border bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Microservices Architecture Patterns We Implement</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Proven patterns for building resilient, scalable distributed systems
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform opacity-20" />
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl transform rotate-1 group-hover:rotate-3 transition-transform opacity-40" />
              <div className="relative bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all duration-300">
                <LayoutGrid className="w-10 h-10 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">API Gateway Pattern</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Single entry point for all clients, handling routing, authentication, rate limiting, and aggregation of multiple services.
                </p>
                <div className="flex items-center text-sm text-purple-600 font-semibold">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-600 to-orange-600 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform opacity-20" />
              <div className="absolute inset-0 bg-gradient-to-br from-pink-600 to-orange-600 rounded-2xl transform rotate-1 group-hover:rotate-3 transition-transform opacity-40" />
              <div className="relative bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all duration-300">
                <Workflow className="w-10 h-10 text-pink-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Saga Pattern</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Manage distributed transactions across services with choreography or orchestration for data consistency.
                </p>
                <div className="flex items-center text-sm text-pink-600 font-semibold">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-600 to-red-600 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform opacity-20" />
              <div className="absolute inset-0 bg-gradient-to-br from-orange-600 to-red-600 rounded-2xl transform rotate-1 group-hover:rotate-3 transition-transform opacity-40" />
              <div className="relative bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all duration-300">
                <Database className="w-10 h-10 text-orange-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">CQRS Pattern</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Separate read and write operations for better performance, scalability, and flexibility in data modeling.
                </p>
                <div className="flex items-center text-sm text-orange-600 font-semibold">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-red-600 to-pink-600 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform opacity-20" />
              <div className="absolute inset-0 bg-gradient-to-br from-red-600 to-pink-600 rounded-2xl transform rotate-1 group-hover:rotate-3 transition-transform opacity-40" />
              <div className="relative bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all duration-300">
                <Network className="w-10 h-10 text-red-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Event Sourcing Pattern</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Store all state changes as events, enabling audit trails, time travel debugging, and event replay capabilities.
                </p>
                <div className="flex items-center text-sm text-red-600 font-semibold">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Migration Process Timeline */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Monolith to Microservices Migration Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A strategic approach to decomposing monolithic applications without disrupting business operations
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {[
              {
                step: '01',
                title: 'Architecture Assessment & Planning',
                description: 'Analyze existing monolith, identify service boundaries, define bounded contexts using Domain-Driven Design, and create migration roadmap with priorities.',
                duration: '2-4 weeks',
                icon: LayoutGrid
              },
              {
                step: '02',
                title: 'Strangler Fig Pattern Implementation',
                description: 'Incrementally extract functionality from monolith by routing traffic to new microservices while keeping monolith running. No big-bang rewrites.',
                duration: '4-8 weeks',
                icon: GitBranch
              },
              {
                step: '03',
                title: 'Database Decomposition',
                description: 'Split shared database into service-specific databases. Implement data synchronization patterns and handle distributed transactions with sagas.',
                duration: '3-6 weeks',
                icon: Database
              },
              {
                step: '04',
                title: 'API Gateway & Service Mesh Setup',
                description: 'Deploy API gateway for unified entry point. Implement service mesh for observability, security, and traffic management between services.',
                duration: '2-3 weeks',
                icon: Network
              },
              {
                step: '05',
                title: 'Monitoring & Observability',
                description: 'Implement distributed tracing, centralized logging, and metrics collection. Set up alerts for service health and performance degradation.',
                duration: '2-3 weeks',
                icon: TrendingUp
              },
              {
                step: '06',
                title: 'Production Deployment & Optimization',
                description: 'Deploy microservices to production with blue-green or canary deployments. Monitor performance, optimize, and decommission monolith components.',
                duration: 'Ongoing',
                icon: Zap
              }
            ].map((item, index) => (
              <div key={index} className="relative pl-8 pb-12 border-l-2 border-purple-600 last:border-0 last:pb-0">
                <div className="absolute left-0 top-0 w-4 h-4 bg-purple-600 rounded-full -translate-x-[9px]" />
                <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow ml-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="text-3xl font-bold text-purple-600">{item.step}</div>
                      <div>
                        <h3 className="text-xl font-bold">{item.title}</h3>
                        <p className="text-sm text-muted-foreground flex items-center mt-1">
                          <Clock className="w-4 h-4 mr-1" />
                          {item.duration}
                        </p>
                      </div>
                    </div>
                    <item.icon className="w-8 h-8 text-purple-600" />
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Slider */}
      <section className="py-20 border-t border-border bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Microservices Projects We've Built
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See how we've transformed monoliths into scalable distributed systems
            </p>
          </div>
          
          <PortfolioSlider 
            projects={projects}
            technologies={technologies}
            autoplay={true}
            showNavigation={true}
          />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our Microservices Clients Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real results from companies that scaled with our microservices expertise
            </p>
          </div>
          
          <TestimonialsCarousel testimonials={testimonials} />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 border-t border-border bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-4">
              {[
                {
                  question: 'When should I use microservices instead of a monolith?',
                  answer: 'Microservices make sense when you have multiple teams, need independent scaling, require technology flexibility, or face frequent deployments. Monoliths work better for small teams, simple domains, or early-stage startups. We help you assess if microservices are right for your use case.'
                },
                {
                  question: 'How long does it take to migrate from monolith to microservices?',
                  answer: 'A complete migration typically takes 6-18 months depending on monolith size and complexity. We use the Strangler Fig pattern for incremental migration, allowing you to deliver value throughout the process without big-bang rewrites.'
                },
                {
                  question: 'What are the main challenges in microservices architecture?',
                  answer: 'Key challenges include distributed transactions, data consistency, network latency, debugging complexity, and deployment orchestration. We solve these with proven patterns like sagas, event sourcing, service mesh, distributed tracing, and CI/CD automation.'
                },
                {
                  question: 'How do you handle data consistency across microservices?',
                  answer: 'We implement saga patterns (choreography or orchestration) for distributed transactions, event sourcing for audit trails, and CQRS for read/write separation. Each service owns its data, communicating through events or APIs with eventual consistency guarantees.'
                },
                {
                  question: 'What tools do you use for microservices orchestration?',
                  answer: 'We use Kubernetes for container orchestration, Istio/Linkerd for service mesh, API gateways (Kong, NGINX, AWS API Gateway), message brokers (Kafka, RabbitMQ), and observability tools (Prometheus, Grafana, Jaeger, ELK stack).'
                },
                {
                  question: 'How much does microservices implementation cost?',
                  answer: 'Costs range from $40,000 for basic setups to $150,000+ for complete enterprise migrations. Pricing depends on the number of services, infrastructure complexity, and migration scope. We provide transparent quotes after architecture assessment.'
                }
              ].map((faq, index) => (
                <details key={index} className="group bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 overflow-hidden">
                  <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-muted/50 transition-colors">
                    <span className="font-semibold text-lg">{faq.question}</span>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-open:rotate-90 transition-transform" />
                  </summary>
                  <div className="px-6 pb-6 text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection 
        title="Ready to Scale with Microservices?"
        description="Let's decompose your monolith into scalable, maintainable microservices that enable independent deployments and true business agility."
        primaryButtonText="Schedule Architecture Review"
        primaryButtonLink="/contact"
        secondaryButtonText="View Migration Case Studies"
        secondaryButtonLink="/resources/case-studies"
        showContactInfo={true}
      />
    </div>
  )
}
