import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { 
  Code, 
  Webhook, 
  Lock, 
  Zap,
  ArrowRight,
  CheckCircle2,
  Database,
  Shield,
  BarChart3,
  FileText,
  GitBranch,
  Globe
} from 'lucide-react'
import { cn } from '@/lib/utils'
import TechShowcase from '@/components/animations/tech-showcase'
import { PortfolioSlider } from '@/components/sections/portfolio-slider'
import { TestimonialsCarousel } from '@/components/sections/testimonials-carousel'
import { CTASection } from '@/components/sections/cta-section'
import { getFeaturedPortfolio, getTechnologies, getFeaturedTestimonials } from '@/lib/content'

export const metadata: Metadata = {
  title: 'API Development Services | REST, GraphQL, Microservices API Design',
  description: 'Build scalable, secure APIs with REST, GraphQL, or gRPC. API design, development, documentation, testing, and management for web and mobile apps.',
  keywords: 'API development, REST API, GraphQL API, API design, microservices, API gateway, API documentation, webhook development, third-party integration',
  openGraph: {
    title: 'Custom API Development | REST, GraphQL, Microservices',
    description: 'Build robust APIs that power modern applications. Scalable, secure, well-documented APIs with comprehensive testing.',
    type: 'website',
  }
}

export default function APIPage() {
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
            <Link href="/services/enterprise" className="hover:text-foreground transition-colors">Enterprise</Link>
            <span>/</span>
            <span className="text-foreground font-medium">API Development</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 dark:from-green-950/20 dark:via-emerald-950/20 dark:to-teal-950/20" />
        <div className="absolute inset-0 bg-grid-slate-900/[0.04] dark:bg-grid-slate-400/[0.05] bg-[size:32px_32px]" />
        
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-400/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-400/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-4 px-4 py-1.5 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm font-medium">
                🔌 API Development
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Custom API Development
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                Build scalable, secure APIs that power your applications. REST, GraphQL, or gRPC - designed for performance, security, and developer experience.
              </p>

              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center p-4 rounded-lg bg-white/50 dark:bg-black/20 backdrop-blur-sm border border-white/20">
                  <div className="text-3xl font-bold text-green-600">500+</div>
                  <div className="text-sm text-muted-foreground">APIs Built</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-white/50 dark:bg-black/20 backdrop-blur-sm border border-white/20">
                  <div className="text-3xl font-bold text-emerald-600">50ms</div>
                  <div className="text-sm text-muted-foreground">Response</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-white/50 dark:bg-black/20 backdrop-blur-sm border border-white/20">
                  <div className="text-3xl font-bold text-teal-600">99.9%</div>
                  <div className="text-sm text-muted-foreground">Uptime</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200"
                >
                  Build Your API
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link 
                  href="#types"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-green-600 text-green-600 dark:text-green-400 rounded-lg font-semibold hover:bg-green-50 dark:hover:bg-green-950/30 transition-all duration-200"
                >
                  See API Types
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 backdrop-blur-sm">
                <Image
                  src="https://picsum.photos/800/600?random=api"
                  alt="API Development Architecture and Documentation"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                  priority
                />
                <div className="absolute top-6 right-6 bg-white/90 dark:bg-black/90 backdrop-blur-md px-4 py-2 rounded-lg shadow-lg border border-white/20">
                  <div className="flex items-center space-x-2">
                    <Code className="w-5 h-5 text-green-500 animate-pulse" />
                    <span className="font-semibold text-sm">Live API</span>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex items-center space-x-4 bg-white dark:bg-gray-900 px-6 py-3 rounded-full shadow-xl border border-gray-200 dark:border-gray-800">
                <Code className="w-6 h-6 text-green-600" />
                <Webhook className="w-6 h-6 text-emerald-600" />
                <Lock className="w-6 h-6 text-teal-600" />
                <Zap className="w-6 h-6 text-cyan-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* API Types */}
      <section id="types" className="py-20 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">API Technologies We Build</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the right API architecture for your use case
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border-2 border-green-200 dark:border-green-800 hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-4">
                <Code className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">REST API</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                Industry standard for web services. Simple, scalable, stateless architecture with HTTP methods (GET, POST, PUT, DELETE).
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                  <span><strong>Best for:</strong> Public APIs, CRUD operations</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                  <span><strong>Format:</strong> JSON or XML responses</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                  <span><strong>Caching:</strong> Built-in HTTP caching</span>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border-2 border-emerald-200 dark:border-emerald-800 hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center mb-4">
                <GitBranch className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">GraphQL API</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                Query language for APIs. Fetch exactly what you need in one request. Strongly typed schema with introspection.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span><strong>Best for:</strong> Complex data, mobile apps</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span><strong>Benefits:</strong> No over/under-fetching</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span><strong>Tools:</strong> Apollo, Hasura, Prisma</span>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border-2 border-teal-200 dark:border-teal-800 hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/30 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">gRPC API</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                High-performance RPC framework using Protocol Buffers. Binary protocol for fast microservice communication.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0" />
                  <span><strong>Best for:</strong> Microservices, real-time</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0" />
                  <span><strong>Speed:</strong> 10x faster than REST</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0" />
                  <span><strong>Features:</strong> Bidirectional streaming</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 rounded-2xl p-8 text-white">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">500+</div>
                <div className="text-green-100">APIs Developed</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">50ms</div>
                <div className="text-green-100">Avg Response Time</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">10K+</div>
                <div className="text-green-100">Requests/Second</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">99.9%</div>
                <div className="text-green-100">Uptime SLA</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* API Features */}
      <section className="py-20 border-t border-border bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Complete API Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need for production-ready APIs
            </p>
          </div>

          <div className="grid md:grid-cols-12 gap-6">
            <div className="md:col-span-8 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-green-500 to-green-700 p-8 text-white hover:shadow-2xl transition-all duration-300">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform translate-x-32 -translate-y-32 group-hover:scale-150 transition-transform duration-500" />
              <div className="relative z-10">
                <Code className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold mb-3">API Design & Architecture</h3>
                <p className="text-green-100 mb-4 text-lg leading-relaxed">
                  RESTful design following industry best practices. Versioning strategy (URL or header-based). Resource modeling with proper HTTP methods. Pagination, filtering, sorting for large datasets. HATEOAS for discoverability. OpenAPI 3.0 specification.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="text-sm">REST Best Practices</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="text-sm">Versioning</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="text-sm">OpenAPI Spec</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-4 md:row-span-2 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-700 p-8 text-white hover:shadow-2xl transition-all duration-300">
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl transform -translate-x-24 translate-y-24 group-hover:scale-150 transition-transform duration-500" />
              <div className="relative z-10 h-full flex flex-col">
                <Lock className="w-12 h-12 mb-4 group-hover:rotate-12 transition-transform" />
                <h3 className="text-2xl font-bold mb-3">Authentication & Security</h3>
                <p className="text-emerald-100 mb-4 leading-relaxed flex-grow">
                  OAuth 2.0, JWT tokens, API keys. Role-based access control (RBAC). Rate limiting and throttling. Input validation and sanitization. SQL injection protection. HTTPS/TLS encryption.
                </p>
                <div className="space-y-2 mt-auto">
                  <div className="flex items-center justify-between bg-white/10 rounded-lg p-2">
                    <span className="text-sm">OAuth 2.0</span>
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div className="flex items-center justify-between bg-white/10 rounded-lg p-2">
                    <span className="text-sm">Rate Limiting</span>
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div className="flex items-center justify-between bg-white/10 rounded-lg p-2">
                    <span className="text-sm">HTTPS/TLS</span>
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-4 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-teal-500 to-teal-700 p-6 text-white hover:shadow-2xl transition-all duration-300">
              <FileText className="w-10 h-10 mb-3 group-hover:rotate-180 transition-transform duration-500" />
              <h3 className="text-xl font-bold mb-2">Interactive Documentation</h3>
              <p className="text-teal-100 text-sm leading-relaxed">
                Swagger/OpenAPI docs with try-it-out feature. Code examples in multiple languages
              </p>
            </div>

            <div className="md:col-span-4 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-cyan-500 to-cyan-700 p-6 text-white hover:shadow-2xl transition-all duration-300">
              <BarChart3 className="w-10 h-10 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2">Monitoring & Analytics</h3>
              <p className="text-cyan-100 text-sm leading-relaxed">
                Real-time metrics, error tracking, usage analytics, and performance monitoring
              </p>
            </div>

            <div className="md:col-span-8 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 p-8 text-white hover:shadow-2xl transition-all duration-300">
              <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform -translate-x-32 -translate-y-32 group-hover:scale-150 transition-transform duration-500" />
              <div className="relative z-10">
                <Zap className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold mb-3">Performance & Scalability</h3>
                <p className="text-blue-100 mb-4 text-lg leading-relaxed">
                  Redis caching for fast responses. Database query optimization with indexes. Horizontal scaling with load balancers. CDN integration for static assets. Async processing for long-running tasks. Connection pooling and keep-alive.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="text-sm">Redis Caching</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="text-sm">Load Balancing</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="text-sm">Auto-Scaling</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-4 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-500 to-indigo-700 p-6 text-white hover:shadow-2xl transition-all duration-300">
              <Database className="w-10 h-10 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2">Testing & Quality</h3>
              <p className="text-indigo-100 text-sm leading-relaxed">
                Unit tests, integration tests, load testing, and automated API testing
              </p>
            </div>

            <div className="md:col-span-4 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-500 to-purple-700 p-6 text-white hover:shadow-2xl transition-all duration-300">
              <Webhook className="w-10 h-10 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2">Webhooks & Events</h3>
              <p className="text-purple-100 text-sm leading-relaxed">
                Real-time notifications, event-driven architecture, retry logic, webhook management
              </p>
            </div>

            <div className="md:col-span-4 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-violet-500 to-violet-700 p-6 text-white hover:shadow-2xl transition-all duration-300">
              <Globe className="w-10 h-10 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2">API Gateway</h3>
              <p className="text-violet-100 text-sm leading-relaxed">
                Centralized gateway for routing, rate limiting, authentication, transformation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-4">
          <TechShowcase 
            technologies={technologies}
            title="API Development Technology Stack"
            subtitle="Modern frameworks and tools for building robust APIs"
            filterSlugs={[
              'nodejs', 'python', 'java', 'graphql', 'postgresql',
              'mongodb', 'redis', 'docker', 'kubernetes', 'aws'
            ]}
            showStats={true}
          />
        </div>
      </section>

      {/* Development Process */}
      <section className="py-20 border-t border-border bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">API Development Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From design to production deployment in 6-10 weeks
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {[
              {
                step: '01',
                title: 'Requirements & API Design',
                description: 'Understand use cases, data models, and integration requirements. Design API endpoints, request/response schemas, and error codes. Create OpenAPI specification. Define authentication strategy and rate limits.',
                duration: '1 week',
                icon: Code
              },
              {
                step: '02',
                title: 'Backend Development',
                description: 'Build API endpoints with chosen framework (Express, FastAPI, Spring Boot). Implement business logic and data access layer. Add input validation and error handling. Set up database with indexes and constraints.',
                duration: '2-4 weeks',
                icon: Database
              },
              {
                step: '03',
                title: 'Authentication & Security',
                description: 'Implement OAuth 2.0, JWT, or API key authentication. Add rate limiting and request throttling. Input sanitization and SQL injection protection. HTTPS/TLS setup with proper certificates.',
                duration: '1 week',
                icon: Lock
              },
              {
                step: '04',
                title: 'Testing & Quality Assurance',
                description: 'Write unit tests for all endpoints (80%+ coverage). Integration tests for end-to-end workflows. Load testing with Apache JMeter or k6. Security testing and penetration testing.',
                duration: '1-2 weeks',
                icon: Shield
              },
              {
                step: '05',
                title: 'Documentation & Developer Portal',
                description: 'Generate interactive Swagger/OpenAPI documentation. Code examples in multiple languages (cURL, JavaScript, Python). Getting started guides and tutorials. Postman collection for testing.',
                duration: '1 week',
                icon: FileText
              },
              {
                step: '06',
                title: 'Deployment & Monitoring',
                description: 'Deploy to cloud with auto-scaling and load balancing. Set up monitoring (New Relic, Datadog). Error tracking with Sentry. API analytics dashboard. 24/7 uptime monitoring with alerts.',
                duration: '1 week',
                icon: Zap
              }
            ].map((item, index) => (
              <div key={index} className="relative pl-8 pb-12 border-l-2 border-green-600 last:border-0 last:pb-0">
                <div className="absolute left-0 top-0 w-4 h-4 bg-green-600 rounded-full -translate-x-[9px]" />
                <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow ml-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="text-3xl font-bold text-green-600">{item.step}</div>
                      <div>
                        <h3 className="text-xl font-bold">{item.title}</h3>
                        <p className="text-sm text-muted-foreground flex items-center mt-1">
                          <Zap className="w-4 h-4 mr-1" />
                          {item.duration}
                        </p>
                      </div>
                    </div>
                    <item.icon className="w-8 h-8 text-green-600" />
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              APIs We've Built
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Custom API solutions powering applications worldwide
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
      <section className="py-20 border-t border-border bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our API Clients Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Success stories from developers using our APIs
            </p>
          </div>
          
          <TestimonialsCarousel testimonials={testimonials} />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-4">
              {[
                {
                  question: 'How much does API development cost?',
                  answer: 'Simple REST API (5-10 endpoints): $15K-30K. Mid-size API (20-30 endpoints, auth, docs): $30K-60K. Complex API (GraphQL, microservices, real-time): $60K-150K. Enterprise API platform (gateway, management, analytics): $150K+. Timeline: 6-16 weeks. Includes design, development, testing, documentation, and deployment.'
                },
                {
                  question: 'REST vs GraphQL - which should I choose?',
                  answer: 'REST: Best for simple CRUD operations, public APIs, when clients need full control over caching. Easier to implement and debug. GraphQL: Best for mobile apps (reduce data transfer), complex nested data, when you need flexible queries. Avoid over/under-fetching. Our recommendation: Start with REST for simplicity. Switch to GraphQL if you have complex data requirements or mobile bandwidth concerns.'
                },
                {
                  question: 'How do you secure APIs?',
                  answer: 'Security layers: 1) HTTPS/TLS encryption for all traffic, 2) OAuth 2.0 or JWT for authentication, 3) API keys for service-to-service auth, 4) Rate limiting (1000 req/hour typical), 5) Input validation and sanitization, 6) SQL injection protection, 7) CORS policy for web apps, 8) IP whitelisting for sensitive endpoints, 9) Audit logs for compliance. Regular security audits and penetration testing.'
                },
                {
                  question: 'Do you provide API documentation?',
                  answer: 'Yes! We generate: 1) Interactive Swagger/OpenAPI docs with try-it-out feature, 2) Getting started guide with authentication setup, 3) Code examples in 5+ languages (cURL, JavaScript, Python, PHP, Ruby), 4) Postman collection for testing, 5) Error code reference with troubleshooting, 6) Webhook documentation if applicable, 7) Changelog for version updates. Documentation hosted on developer portal with search functionality.'
                },
                {
                  question: 'How do you handle API versioning?',
                  answer: 'Versioning strategies: 1) URL versioning (api.example.com/v1/users - recommended for clarity), 2) Header versioning (Accept: application/vnd.api+json;version=1), 3) Query parameter (?version=1 - not recommended). We maintain 2 versions simultaneously with 6-month deprecation notice. Breaking changes trigger new major version. Backward-compatible changes added to current version. Clear migration guides provided.'
                },
                {
                  question: 'What ongoing support do you provide?',
                  answer: 'Included: 3-month post-launch support (bug fixes, performance tuning, documentation updates). Optional: Monthly retainer ($2K-10K) for: New endpoints, integration help, scaling optimization, security updates, monitoring, 24/7 uptime monitoring, SLA guarantees (99.9% uptime). Also offer: API management tools, developer onboarding, rate limit adjustments, analytics dashboards.'
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

      {/* CTA */}
      <CTASection 
        title="Ready to Build Your API?"
        description="Power your applications with robust, scalable APIs. REST, GraphQL, or gRPC - we build APIs that developers love to use."
        primaryButtonText="Start API Development"
        primaryButtonLink="/contact"
        secondaryButtonText="See API Types"
        secondaryButtonLink="#types"
        showContactInfo={true}
      />
    </div>
  )
}
