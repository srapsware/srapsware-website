import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { 
  GitBranch, 
  Server, 
  Gauge, 
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  Rocket,
  Shield,
  Zap,
  Clock,
  Settings,
  Activity
} from 'lucide-react'
import { cn } from '@/lib/utils'
import TechShowcase from '@/components/animations/tech-showcase'
import { PortfolioSlider } from '@/components/sections/portfolio-slider'
import { TestimonialsCarousel } from '@/components/sections/testimonials-carousel'
import { CTASection } from '@/components/sections/cta-section'
import { getFeaturedPortfolio, getTechnologies, getFeaturedTestimonials } from '@/lib/content'

export const metadata: Metadata = {
  title: 'DevOps Support & Infrastructure Management Services',
  description: '24/7 DevOps support for CI/CD pipelines, infrastructure management, monitoring, incident response. Keep your systems running smoothly.',
  keywords: 'DevOps support, infrastructure management, CI/CD pipeline, server monitoring, incident response, cloud infrastructure, deployment automation',
  openGraph: {
    title: 'DevOps Support & Infrastructure Management | 24/7 Monitoring',
    description: 'Expert DevOps support to keep your infrastructure optimized, secure, and highly available.',
    type: 'website',
  }
}

export default function DevOpsSupportPage() {
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
            <span className="text-foreground font-medium">DevOps Support</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-sky-50 to-blue-50 dark:from-cyan-950/20 dark:via-sky-950/20 dark:to-blue-950/20" />
        <div className="absolute inset-0 bg-grid-slate-900/[0.04] dark:bg-grid-slate-400/[0.05] bg-[size:32px_32px]" />
        
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-400/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-4 px-4 py-1.5 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 rounded-full text-sm font-medium">
                🚀 DevOps Support
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-600 via-sky-600 to-blue-600 bg-clip-text text-transparent">
                DevOps Support & Infrastructure Management
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                24/7 DevOps support to keep your infrastructure running smoothly. CI/CD pipeline management, monitoring, incident response, and optimization.
              </p>

              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center p-4 rounded-lg bg-white/50 dark:bg-black/20 backdrop-blur-sm border border-white/20">
                  <div className="text-3xl font-bold text-cyan-600">24/7</div>
                  <div className="text-sm text-muted-foreground">Support</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-white/50 dark:bg-black/20 backdrop-blur-sm border border-white/20">
                  <div className="text-3xl font-bold text-sky-600">99.9%</div>
                  <div className="text-sm text-muted-foreground">Uptime</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-white/50 dark:bg-black/20 backdrop-blur-sm border border-white/20">
                  <div className="text-3xl font-bold text-blue-600">15min</div>
                  <div className="text-sm text-muted-foreground">Response</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200"
                >
                  Get DevOps Support
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link 
                  href="#services"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-cyan-600 text-cyan-600 dark:text-cyan-400 rounded-lg font-semibold hover:bg-cyan-50 dark:hover:bg-cyan-950/30 transition-all duration-200"
                >
                  View Services
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 backdrop-blur-sm">
                <Image
                  src="https://picsum.photos/800/600?random=devops"
                  alt="DevOps Infrastructure Monitoring Dashboard"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                  priority
                />
                <div className="absolute top-6 right-6 bg-white/90 dark:bg-black/90 backdrop-blur-md px-4 py-2 rounded-lg shadow-lg border border-white/20">
                  <div className="flex items-center space-x-2">
                    <Activity className="w-5 h-5 text-cyan-500 animate-pulse" />
                    <span className="font-semibold text-sm">Monitoring</span>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex items-center space-x-4 bg-white dark:bg-gray-900 px-6 py-3 rounded-full shadow-xl border border-gray-200 dark:border-gray-800">
                <GitBranch className="w-6 h-6 text-cyan-600" />
                <Server className="w-6 h-6 text-sky-600" />
                <Gauge className="w-6 h-6 text-blue-600" />
                <AlertCircle className="w-6 h-6 text-indigo-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DevOps Services */}
      <section id="services" className="py-20 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">DevOps Support Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Complete infrastructure and deployment support
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border-2 border-cyan-200 dark:border-cyan-800 hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-cyan-100 dark:bg-cyan-900/30 rounded-lg flex items-center justify-center mb-4">
                <GitBranch className="w-6 h-6 text-cyan-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">CI/CD Pipeline Management</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                Maintain and optimize your deployment pipelines. Jenkins, GitLab CI, GitHub Actions, CircleCI, Travis CI support. Automated testing, builds, deployments.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-600 flex-shrink-0" />
                  <span>Pipeline optimization</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-600 flex-shrink-0" />
                  <span>Automated deployments</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-600 flex-shrink-0" />
                  <span>Rollback capabilities</span>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border-2 border-sky-200 dark:border-sky-800 hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-sky-100 dark:bg-sky-900/30 rounded-lg flex items-center justify-center mb-4">
                <Server className="w-6 h-6 text-sky-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Infrastructure Management</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                Manage cloud infrastructure on AWS, Azure, GCP. Infrastructure as Code with Terraform, CloudFormation, Ansible. Server provisioning and configuration.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-600 flex-shrink-0" />
                  <span>Infrastructure as Code</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-600 flex-shrink-0" />
                  <span>Auto-scaling setup</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-600 flex-shrink-0" />
                  <span>Cost optimization</span>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border-2 border-blue-200 dark:border-blue-800 hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                <Activity className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Monitoring & Alerting</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                24/7 infrastructure monitoring with Datadog, New Relic, Prometheus, Grafana. Custom dashboards, real-time alerts, performance metrics tracking.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span>Real-time monitoring</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span>Custom alerts (Slack, PagerDuty)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span>Performance dashboards</span>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border-2 border-indigo-200 dark:border-indigo-800 hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center mb-4">
                <AlertCircle className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Incident Response</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                Rapid response to production issues. 15-minute response time for critical incidents. Root cause analysis, hotfixes, post-mortem reports.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600 flex-shrink-0" />
                  <span>15-minute response time</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600 flex-shrink-0" />
                  <span>On-call engineer 24/7</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600 flex-shrink-0" />
                  <span>Post-mortem analysis</span>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border-2 border-violet-200 dark:border-violet-800 hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-violet-100 dark:bg-violet-900/30 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-violet-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Security & Compliance</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                Security hardening, vulnerability patching, compliance audits. SSL certificate management, firewall configuration, backup strategies.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-violet-600 flex-shrink-0" />
                  <span>Security patching</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-violet-600 flex-shrink-0" />
                  <span>Backup and disaster recovery</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-violet-600 flex-shrink-0" />
                  <span>Compliance audits</span>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border-2 border-purple-200 dark:border-purple-800 hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Performance Optimization</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                Optimize application and infrastructure performance. Database query tuning, caching strategies, load balancing, CDN configuration.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 flex-shrink-0" />
                  <span>Performance profiling</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 flex-shrink-0" />
                  <span>Database optimization</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 flex-shrink-0" />
                  <span>Caching implementation</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-cyan-600 via-sky-600 to-blue-600 rounded-2xl p-8 text-white">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">24/7</div>
                <div className="text-cyan-100">Support Available</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">99.9%</div>
                <div className="text-cyan-100">Uptime Guarantee</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">15min</div>
                <div className="text-cyan-100">Response Time</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">200+</div>
                <div className="text-cyan-100">Clients Supported</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Plans */}
      <section className="py-20 border-t border-border bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">DevOps Support Plans</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Flexible support plans to match your needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 border-2 border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">Essential</h3>
                <div className="text-4xl font-bold text-cyan-600 mb-2">$2K-5K</div>
                <div className="text-muted-foreground">per month</div>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Business hours support (9-5 MT)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">4-hour response time</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Basic monitoring and alerts</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Up to 40 hours/month support</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Email and Slack support</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Monthly performance reports</span>
                </li>
              </ul>
              <p className="text-sm text-muted-foreground mb-6">
                <strong>Best for:</strong> Startups and small teams with predictable workloads
              </p>
              <Link 
                href="/contact"
                className="block w-full text-center px-6 py-3 border-2 border-cyan-600 text-cyan-600 rounded-lg font-semibold hover:bg-cyan-50 dark:hover:bg-cyan-950/30 transition-all"
              >
                Get Started
              </Link>
            </div>

            <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl p-8 text-white relative overflow-hidden hover:shadow-2xl transition-all scale-105 border-4 border-cyan-300">
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold">
                POPULAR
              </div>
              <div className="text-center mb-6 relative z-10">
                <h3 className="text-2xl font-bold mb-2">Professional</h3>
                <div className="text-4xl font-bold mb-2">$5K-10K</div>
                <div className="text-cyan-100">per month</div>
              </div>
              <ul className="space-y-3 mb-6 relative z-10">
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">24/7 support coverage</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">1-hour response time</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Advanced monitoring + PagerDuty</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Up to 80 hours/month support</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Dedicated DevOps engineer</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">CI/CD pipeline optimization</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Infrastructure as Code management</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Quarterly infrastructure audits</span>
                </li>
              </ul>
              <p className="text-sm text-cyan-100 mb-6 relative z-10">
                <strong>Best for:</strong> Growing businesses with mission-critical applications
              </p>
              <Link 
                href="/contact"
                className="block w-full text-center px-6 py-3 bg-white text-cyan-600 rounded-lg font-semibold hover:bg-cyan-50 transition-all relative z-10"
              >
                Get Started
              </Link>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 border-2 border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
                <div className="text-4xl font-bold text-cyan-600 mb-2">$10K+</div>
                <div className="text-muted-foreground">per month</div>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">24/7 dedicated support team</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">15-minute response time</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Enterprise monitoring + SOC</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Unlimited support hours</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Multi-cloud infrastructure</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Custom SLA (99.9% uptime guarantee)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Disaster recovery planning</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Compliance audits (SOC 2, ISO)</span>
                </li>
              </ul>
              <p className="text-sm text-muted-foreground mb-6">
                <strong>Best for:</strong> Large enterprises with complex infrastructure
              </p>
              <Link 
                href="/contact"
                className="block w-full text-center px-6 py-3 border-2 border-cyan-600 text-cyan-600 rounded-lg font-semibold hover:bg-cyan-50 dark:hover:bg-cyan-950/30 transition-all"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-4">
          <TechShowcase 
            technologies={technologies}
            title="DevOps Technology Stack"
            subtitle="Industry-standard tools for infrastructure and deployment"
            filterSlugs={[
              'docker', 'kubernetes', 'aws', 'terraform', 'jenkins',
              'gitlab', 'github', 'ansible', 'prometheus', 'grafana'
            ]}
            showStats={true}
          />
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-20 border-t border-border bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Infrastructure We Manage
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              DevOps support across diverse platforms
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
              What Our DevOps Clients Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Reliable support for growing businesses
            </p>
          </div>
          
          <TestimonialsCarousel testimonials={testimonials} />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 border-t border-border bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-4">
              {[
                {
                  question: 'What is included in DevOps support?',
                  answer: 'DevOps support includes: 1) Infrastructure management (AWS/Azure/GCP), 2) CI/CD pipeline maintenance and optimization, 3) 24/7 monitoring with alerts, 4) Incident response and troubleshooting, 5) Performance optimization, 6) Security patching and compliance, 7) Backup and disaster recovery, 8) Cost optimization recommendations, 9) Monthly reports and infrastructure reviews. We handle everything from deployments to scaling to security.'
                },
                {
                  question: 'What is your response time for incidents?',
                  answer: 'Response times by plan: Essential: 4 hours (business hours only). Professional: 1 hour (24/7 coverage). Enterprise: 15 minutes (dedicated team). Critical incidents (site down, data breach) get prioritized across all plans. We use PagerDuty for on-call rotations. Average resolution time: Minor issues: 2-4 hours, Major incidents: 4-8 hours, Critical outages: Same-day resolution with post-mortem.'
                },
                {
                  question: 'Do you support multiple cloud providers?',
                  answer: 'Yes, we support: AWS (most common) - EC2, RDS, Lambda, ECS, EKS, S3. Azure - VMs, App Service, AKS, SQL Database, Functions. Google Cloud - Compute Engine, GKE, Cloud Run, Cloud SQL. Also: DigitalOcean, Linode, Heroku, Vercel, Netlify. Multi-cloud: Manage infrastructure across multiple providers with unified monitoring and deployments. Hybrid cloud: On-premise + cloud integration.'
                },
                {
                  question: 'Can you help migrate to new infrastructure?',
                  answer: 'Yes, migration services included in support plans: Assessment: Audit current infrastructure, identify improvements. Planning: Migration strategy (rehost/replatform/refactor). Execution: Phased migration with zero-downtime cutover. Validation: Performance testing and smoke tests. Optimization: Right-sizing instances, cost optimization. Typical migrations: Legacy servers to AWS/Azure, Monolith to microservices, Self-managed to managed services. Timeline: 4-12 weeks depending on complexity.'
                },
                {
                  question: 'What monitoring tools do you use?',
                  answer: 'Our monitoring stack: Infrastructure: Datadog, New Relic, Prometheus + Grafana. Application: APM tools (trace requests, find bottlenecks). Logs: ELK Stack (Elasticsearch, Logstash, Kibana) or Splunk. Uptime: Pingdom, UptimeRobot for endpoint monitoring. Alerts: PagerDuty, Slack, email integration. Custom Dashboards: Real-time metrics for CPU, memory, disk, network, application errors, response times. We set up dashboards specific to your application.'
                },
                {
                  question: 'How do you ensure 99.9% uptime?',
                  answer: 'Our uptime strategy: 1) Redundancy - Multi-AZ deployments, load balancers, auto-scaling. 2) Monitoring - 24/7 monitoring with instant alerts. 3) Automation - Auto-healing, automated backups, failover procedures. 4) Proactive - Performance optimization before issues occur, security patching, capacity planning. 5) Incident Response - On-call engineer, documented runbooks, rapid troubleshooting. 6) Testing - Regular disaster recovery drills. SLA: 99.9% uptime = maximum 43 minutes downtime/month. Enterprise plans include custom SLAs.'
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
        title="Need Reliable DevOps Support?"
        description="24/7 infrastructure management, monitoring, and incident response. Keep your systems running smoothly with expert DevOps support."
        primaryButtonText="Get DevOps Support"
        primaryButtonLink="/contact"
        secondaryButtonText="View Plans"
        secondaryButtonLink="#services"
        showContactInfo={true}
      />
    </div>
  )
}
