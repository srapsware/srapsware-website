import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { 
  Eye, 
  Bell, 
  Activity, 
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Gauge,
  Clock,
  Shield,
  BarChart3,
  Server,
  Zap
} from 'lucide-react'
import { cn } from '@/lib/utils'
import TechShowcase from '@/components/animations/tech-showcase'
import { PortfolioSlider } from '@/components/sections/portfolio-slider'
import { TestimonialsCarousel } from '@/components/sections/testimonials-carousel'
import { CTASection } from '@/components/sections/cta-section'
import { getFeaturedPortfolio, getTechnologies, getFeaturedTestimonials } from '@/lib/content'

export const metadata: Metadata = {
  title: '24/7 Application Monitoring & Incident Response Services',
  description: 'Round-the-clock monitoring for web and mobile applications. Real-time alerts, performance tracking, uptime monitoring, incident response.',
  keywords: '24/7 monitoring, application monitoring, uptime monitoring, incident response, performance monitoring, real-time alerts, APM, infrastructure monitoring',
  openGraph: {
    title: '24/7 Application Monitoring | Real-Time Incident Response',
    description: 'Proactive monitoring and instant alerts to keep your applications running smoothly.',
    type: 'website',
  }
}

export default function MonitoringPage() {
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
            <Link href="/solutions" className="hover:text-foreground transition-colors">Solutions</Link>
            <span>/</span>
            <span className="text-muted-foreground">Support & Maintenance</span>
            <span>/</span>
            <span className="text-foreground font-medium">24/7 Technical Support</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 dark:from-emerald-950/20 dark:via-teal-950/20 dark:to-cyan-950/20" />
        <div className="absolute inset-0 bg-grid-slate-900/[0.04] dark:bg-grid-slate-400/[0.05] bg-[size:32px_32px]" />
        
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-400/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-400/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-4 px-4 py-1.5 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-full text-sm font-medium">
                👁️ 24/7 Monitoring
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
                24/7 Application Monitoring
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                Proactive monitoring to catch issues before your users do. Real-time alerts, performance tracking, uptime monitoring, and instant incident response.
              </p>

              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center p-4 rounded-lg bg-white/50 dark:bg-black/20 backdrop-blur-sm border border-white/20">
                  <div className="text-3xl font-bold text-emerald-600">24/7</div>
                  <div className="text-sm text-muted-foreground">Monitoring</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-white/50 dark:bg-black/20 backdrop-blur-sm border border-white/20">
                  <div className="text-3xl font-bold text-teal-600">5min</div>
                  <div className="text-sm text-muted-foreground">Detection</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-white/50 dark:bg-black/20 backdrop-blur-sm border border-white/20">
                  <div className="text-3xl font-bold text-cyan-600">99.9%</div>
                  <div className="text-sm text-muted-foreground">Uptime</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200"
                >
                  Start Monitoring
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link 
                  href="#features"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-emerald-600 text-emerald-600 dark:text-emerald-400 rounded-lg font-semibold hover:bg-emerald-50 dark:hover:bg-emerald-950/30 transition-all duration-200"
                >
                  View Features
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 backdrop-blur-sm">
                <Image
                  src="https://picsum.photos/800/600?random=monitoring"
                  alt="Real-Time Monitoring Dashboard"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                  priority
                />
                <div className="absolute top-6 right-6 bg-white/90 dark:bg-black/90 backdrop-blur-md px-4 py-2 rounded-lg shadow-lg border border-white/20">
                  <div className="flex items-center space-x-2">
                    <Activity className="w-5 h-5 text-emerald-500 animate-pulse" />
                    <span className="font-semibold text-sm">Live</span>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex items-center space-x-4 bg-white dark:bg-gray-900 px-6 py-3 rounded-full shadow-xl border border-gray-200 dark:border-gray-800">
                <Eye className="w-6 h-6 text-emerald-600" />
                <Bell className="w-6 h-6 text-teal-600" />
                <Gauge className="w-6 h-6 text-cyan-600" />
                <Activity className="w-6 h-6 text-sky-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Monitoring Features */}
      <section id="features" className="py-20 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Monitoring Features</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive monitoring to keep your applications healthy
            </p>
          </div>

          <div className="grid md:grid-cols-12 gap-6">
            <div className="md:col-span-8 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-700 p-8 text-white hover:shadow-2xl transition-all duration-300">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform translate-x-32 -translate-y-32 group-hover:scale-150 transition-transform duration-500" />
              <div className="relative z-10">
                <Activity className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold mb-3">Real-Time Performance Monitoring</h3>
                <p className="text-emerald-100 mb-4 text-lg leading-relaxed">
                  Track application performance metrics in real-time. Response times, throughput, error rates, database queries. APM with distributed tracing to identify bottlenecks. Memory usage, CPU load, disk I/O monitoring.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="text-sm">Response Time Tracking</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="text-sm">Error Rate Monitoring</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="text-sm">Resource Usage</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-4 md:row-span-2 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-teal-500 to-teal-700 p-8 text-white hover:shadow-2xl transition-all duration-300">
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl transform -translate-x-24 translate-y-24 group-hover:scale-150 transition-transform duration-500" />
              <div className="relative z-10 h-full flex flex-col">
                <Bell className="w-12 h-12 mb-4 group-hover:rotate-12 transition-transform" />
                <h3 className="text-2xl font-bold mb-3">Smart Alerts</h3>
                <p className="text-teal-100 mb-4 leading-relaxed flex-grow">
                  Instant notifications via Slack, PagerDuty, email, SMS. Threshold-based alerts (CPU above 80%, error rate above 5%). Anomaly detection with machine learning. Alert escalation rules for critical issues.
                </p>
                <div className="space-y-2 mt-auto">
                  <div className="flex items-center justify-between bg-white/10 rounded-lg p-2">
                    <span className="text-sm">Slack Integration</span>
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div className="flex items-center justify-between bg-white/10 rounded-lg p-2">
                    <span className="text-sm">PagerDuty</span>
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div className="flex items-center justify-between bg-white/10 rounded-lg p-2">
                    <span className="text-sm">Anomaly Detection</span>
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-4 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-cyan-500 to-cyan-700 p-6 text-white hover:shadow-2xl transition-all duration-300">
              <Eye className="w-10 h-10 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2">Uptime Monitoring</h3>
              <p className="text-cyan-100 text-sm leading-relaxed">
                Check website availability every 1 minute from 10+ global locations. Instant downtime alerts
              </p>
            </div>

            <div className="md:col-span-4 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-sky-500 to-sky-700 p-6 text-white hover:shadow-2xl transition-all duration-300">
              <BarChart3 className="w-10 h-10 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2">Custom Dashboards</h3>
              <p className="text-sky-100 text-sm leading-relaxed">
                Personalized dashboards with key metrics. Share with team, embed in TV displays
              </p>
            </div>

            <div className="md:col-span-8 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 p-8 text-white hover:shadow-2xl transition-all duration-300">
              <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform -translate-x-32 -translate-y-32 group-hover:scale-150 transition-transform duration-500" />
              <div className="relative z-10">
                <Server className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold mb-3">Infrastructure Monitoring</h3>
                <p className="text-blue-100 mb-4 text-lg leading-relaxed">
                  Monitor servers, databases, load balancers, containers. CPU, memory, disk, network metrics. Docker and Kubernetes monitoring. Cloud infrastructure (AWS, Azure, GCP). Database query performance and slow query logs.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="text-sm">Server Metrics</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="text-sm">Database Performance</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="text-sm">Container Monitoring</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-4 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-500 to-indigo-700 p-6 text-white hover:shadow-2xl transition-all duration-300">
              <AlertTriangle className="w-10 h-10 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2">Error Tracking</h3>
              <p className="text-indigo-100 text-sm leading-relaxed">
                Track application errors and exceptions. Stack traces, user context, breadcrumbs
              </p>
            </div>

            <div className="md:col-span-4 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-500 to-purple-700 p-6 text-white hover:shadow-2xl transition-all duration-300">
              <Gauge className="w-10 h-10 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2">User Experience Monitoring</h3>
              <p className="text-purple-100 text-sm leading-relaxed">
                Real user monitoring (RUM). Page load times, user interactions, conversion funnels
              </p>
            </div>

            <div className="md:col-span-4 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-violet-500 to-violet-700 p-6 text-white hover:shadow-2xl transition-all duration-300">
              <Shield className="w-10 h-10 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2">Security Monitoring</h3>
              <p className="text-violet-100 text-sm leading-relaxed">
                Failed login attempts, suspicious activity, DDoS attacks, SSL certificate expiration
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Monitoring Stats */}
      <section className="py-20 border-t border-border bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 rounded-2xl p-12 text-white">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold mb-3">300+</div>
                <div className="text-emerald-100 text-lg">Apps Monitored</div>
                <div className="text-emerald-200 text-sm mt-1">Across all industries</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-3">5min</div>
                <div className="text-emerald-100 text-lg">Issue Detection</div>
                <div className="text-emerald-200 text-sm mt-1">Average response time</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-3">99.9%</div>
                <div className="text-emerald-100 text-lg">Uptime</div>
                <div className="text-emerald-200 text-sm mt-1">Industry-leading SLA</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-3">24/7</div>
                <div className="text-emerald-100 text-lg">Coverage</div>
                <div className="text-emerald-200 text-sm mt-1">Always watching</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Monitoring Plans */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Monitoring Plans</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the right level of monitoring for your needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 border-2 border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">Basic</h3>
                <div className="text-4xl font-bold text-emerald-600 mb-2">$500</div>
                <div className="text-muted-foreground">per month</div>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Uptime monitoring (5 endpoints)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">1-minute checks from 5 locations</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Email and Slack alerts</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Basic performance metrics</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">30-day data retention</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Monthly uptime reports</span>
                </li>
              </ul>
              <p className="text-sm text-muted-foreground mb-6">
                <strong>Best for:</strong> Small websites and basic availability monitoring
              </p>
              <Link 
                href="/contact"
                className="block w-full text-center px-6 py-3 border-2 border-emerald-600 text-emerald-600 rounded-lg font-semibold hover:bg-emerald-50 dark:hover:bg-emerald-950/30 transition-all"
              >
                Get Started
              </Link>
            </div>

            <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl p-8 text-white relative overflow-hidden hover:shadow-2xl transition-all scale-105 border-4 border-emerald-300">
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold">
                POPULAR
              </div>
              <div className="text-center mb-6 relative z-10">
                <h3 className="text-2xl font-bold mb-2">Professional</h3>
                <div className="text-4xl font-bold mb-2">$1.5K</div>
                <div className="text-emerald-100">per month</div>
              </div>
              <ul className="space-y-3 mb-6 relative z-10">
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Everything in Basic, plus:</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">APM with distributed tracing</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Error tracking (Sentry integration)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Infrastructure monitoring (5 servers)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Database performance monitoring</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Custom dashboards</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">PagerDuty integration</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">90-day data retention</span>
                </li>
              </ul>
              <p className="text-sm text-emerald-100 mb-6 relative z-10">
                <strong>Best for:</strong> Production applications with users
              </p>
              <Link 
                href="/contact"
                className="block w-full text-center px-6 py-3 bg-white text-emerald-600 rounded-lg font-semibold hover:bg-emerald-50 transition-all relative z-10"
              >
                Get Started
              </Link>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 border-2 border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
                <div className="text-4xl font-bold text-emerald-600 mb-2">$3K+</div>
                <div className="text-muted-foreground">per month</div>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Everything in Professional, plus:</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Unlimited endpoints and servers</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Real user monitoring (RUM)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Log aggregation and analysis</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Anomaly detection with ML</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">24/7 incident response team</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Dedicated account manager</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">1-year data retention</span>
                </li>
              </ul>
              <p className="text-sm text-muted-foreground mb-6">
                <strong>Best for:</strong> Large-scale applications and critical systems
              </p>
              <Link 
                href="/contact"
                className="block w-full text-center px-6 py-3 border-2 border-emerald-600 text-emerald-600 rounded-lg font-semibold hover:bg-emerald-50 dark:hover:bg-emerald-950/30 transition-all"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 border-t border-border bg-muted/30">
        <div className="container mx-auto px-4">
          <TechShowcase 
            technologies={technologies}
            title="Monitoring Technology Stack"
            subtitle="Industry-leading monitoring and observability tools"
            filterSlugs={[
              'nodejs', 'python', 'docker', 'kubernetes', 'aws',
              'postgresql', 'mongodb', 'redis', 'nginx', 'linux'
            ]}
            showStats={true}
          />
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Applications We Monitor
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              24/7 monitoring across diverse platforms and industries
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
              What Our Monitoring Clients Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Peace of mind from proactive monitoring
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
                  question: 'How quickly will I be notified of an outage?',
                  answer: 'Uptime monitoring: Checks every 1 minute from multiple locations. If your site is down, you receive an alert within 2-3 minutes. Performance issues: Real-time APM detects slow requests immediately. Threshold alerts (response time over 2 seconds) trigger within 5 minutes. Critical errors: Instant notifications via PagerDuty, Slack, SMS, email. We use multiple notification channels to ensure you never miss an alert.'
                },
                {
                  question: 'What tools do you use for monitoring?',
                  answer: 'Our monitoring stack: Uptime: Pingdom, UptimeRobot, custom scripts from 10+ global locations. APM (Application Performance): Datadog APM, New Relic, custom instrumentation. Infrastructure: Prometheus + Grafana, Datadog Infrastructure, CloudWatch. Error Tracking: Sentry, Rollbar for exception monitoring. Logs: ELK Stack (Elasticsearch, Logstash, Kibana), Splunk. RUM: Real User Monitoring with session replay. We can integrate with your existing tools or recommend the best fit.'
                },
                {
                  question: 'Can I monitor APIs and background jobs?',
                  answer: 'Yes! We monitor: APIs: Response time, error rate, throughput for REST/GraphQL endpoints. Synthetic monitoring with scheduled test requests. Background Jobs: Cron jobs, queue workers (Sidekiq, Celery, Bull). Job completion time, failure rate, queue length. Webhooks: Success rate, retry attempts, payload validation. Scheduled Tasks: Database backups, report generation, ETL pipelines. We alert on failures, delays, or abnormal patterns.'
                },
                {
                  question: 'What happens when an issue is detected?',
                  answer: 'Our incident response process: 1) Detection: Monitoring detects issue (downtime, slow response, error spike). 2) Alert: Instant notification via Slack, PagerDuty, email, SMS. 3) Triage: On-call engineer assesses severity and impact. 4) Escalation: Critical issues escalated to senior team. 5) Resolution: Fix applied (restart service, rollback deployment, scale resources). 6) Post-Mortem: Root cause analysis and prevention measures. Enterprise plan: Dedicated 24/7 incident response team. Average response time: 5-15 minutes.'
                },
                {
                  question: 'Do you provide historical data and reports?',
                  answer: 'Yes, comprehensive reporting: Real-Time Dashboards: Live metrics for uptime, response time, error rate, traffic. Historical Data: 30 days (Basic), 90 days (Professional), 1 year (Enterprise). Monthly Reports: Uptime percentage, performance trends, incidents summary, optimization recommendations. Custom Reports: SLA compliance, business-hour availability, peak traffic analysis. Downloadable: CSV, PDF exports for audits and stakeholders. API Access: Programmatic access to monitoring data.'
                },
                {
                  question: 'Can you monitor multiple environments?',
                  answer: 'Yes, we monitor all environments: Production: Primary focus with strictest SLA. Staging: Pre-production validation and load testing. Development: Optional monitoring for development teams. Multi-Region: Track performance across geographic regions. Multi-Cloud: AWS, Azure, GCP, hybrid infrastructure. Separate Dashboards: View each environment independently or combined. Environment-Specific Alerts: Different thresholds and notification channels per environment (critical for prod, informational for staging).'
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
        title="Start Monitoring Your Application"
        description="Catch issues before your users do. 24/7 monitoring with real-time alerts and instant incident response."
        primaryButtonText="Get 24/7 Monitoring"
        primaryButtonLink="/contact"
        secondaryButtonText="View Plans"
        secondaryButtonLink="#features"
        showContactInfo={true}
      />
    </div>
  )
}
