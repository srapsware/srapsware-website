import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { 
  Rocket, 
  GitBranch, 
  Zap, 
  Shield, 
  BarChart3, 
  Settings,
  ArrowRight,
  CheckCircle2,
  Clock,
  TrendingUp,
  Container,
  Workflow,
  Activity,
  Terminal
} from 'lucide-react'
import { cn } from '@/lib/utils'
import TechShowcase from '@/components/animations/tech-showcase'
import { PortfolioSlider } from '@/components/sections/portfolio-slider'
import { TestimonialsCarousel } from '@/components/sections/testimonials-carousel'
import { CTASection } from '@/components/sections/cta-section'
import { getFeaturedPortfolio, getTechnologies, getFeaturedTestimonials } from '@/lib/content'

export const metadata: Metadata = {
  title: 'DevOps & CI/CD Services | Automate Your Software Delivery Pipeline',
  description: 'Professional DevOps consulting and CI/CD implementation services. Accelerate deployments, improve reliability, and scale with confidence using modern DevOps practices.',
  keywords: 'DevOps services, CI/CD pipeline, continuous integration, continuous deployment, GitHub Actions, Jenkins, GitLab CI, automation, infrastructure as code, DevOps consulting',
  openGraph: {
    title: 'DevOps & CI/CD Services | Automate Your Software Delivery',
    description: 'Transform your software delivery with modern DevOps practices. Faster deployments, better reliability, automated workflows.',
    type: 'website',
  }
}

export default function DevOpsPage() {
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
            <span className="text-foreground font-medium">DevOps & CI/CD</span>
          </nav>
        </div>
      </section>

      {/* Hero Section - Modern Gradient Design */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-blue-950/20 dark:via-purple-950/20 dark:to-pink-950/20" />
        <div className="absolute inset-0 bg-grid-slate-900/[0.04] dark:bg-grid-slate-400/[0.05] bg-[size:32px_32px]" />
        
        {/* Floating Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-4 px-4 py-1.5 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
                ☁️ Cloud & DevOps Services
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                DevOps & CI/CD Services
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                Accelerate software delivery with automated pipelines, infrastructure as code, and modern DevOps practices that scale.
              </p>

              {/* Key Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center p-4 rounded-lg bg-white/50 dark:bg-black/20 backdrop-blur-sm border border-white/20">
                  <div className="text-3xl font-bold text-blue-600">10x</div>
                  <div className="text-sm text-muted-foreground">Faster Deploys</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-white/50 dark:bg-black/20 backdrop-blur-sm border border-white/20">
                  <div className="text-3xl font-bold text-purple-600">99.9%</div>
                  <div className="text-sm text-muted-foreground">Uptime</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-white/50 dark:bg-black/20 backdrop-blur-sm border border-white/20">
                  <div className="text-3xl font-bold text-pink-600">75%</div>
                  <div className="text-sm text-muted-foreground">Cost Savings</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200"
                >
                  Start Your DevOps Journey
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link 
                  href="#case-studies"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg font-semibold hover:bg-blue-50 dark:hover:bg-blue-950/30 transition-all duration-200"
                >
                  View Success Stories
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 backdrop-blur-sm">
                <Image
                  src="https://picsum.photos/800/600?random=devops"
                  alt="DevOps and CI/CD Pipeline Visualization"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                  priority
                />
                {/* Floating Badge */}
                <div className="absolute top-6 right-6 bg-white/90 dark:bg-black/90 backdrop-blur-md px-4 py-2 rounded-lg shadow-lg border border-white/20">
                  <div className="flex items-center space-x-2">
                    <Activity className="w-5 h-5 text-green-500 animate-pulse" />
                    <span className="font-semibold text-sm">Live Monitoring</span>
                  </div>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex items-center space-x-4 bg-white dark:bg-gray-900 px-6 py-3 rounded-full shadow-xl border border-gray-200 dark:border-gray-800">
                <Terminal className="w-6 h-6 text-blue-600" />
                <GitBranch className="w-6 h-6 text-purple-600" />
                <Container className="w-6 h-6 text-pink-600" />
                <Workflow className="w-6 h-6 text-orange-600" />
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
                  src="https://picsum.photos/600/400?random=cicd-pipeline"
                  alt="CI/CD Pipeline Automation"
                  width={600}
                  height={400}
                  className="w-full h-auto transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm font-medium">Automated Pipeline</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 lg:pl-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Transform Your Software Delivery</h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                Modern software development demands speed without sacrificing quality. Our DevOps services implement automated CI/CD pipelines that enable your team to deploy code confidently and frequently.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We leverage industry-leading tools like GitHub Actions, GitLab CI, Jenkins, and Docker to create seamless workflows from code commit to production deployment. Your team can focus on building features while we handle the infrastructure complexity.
              </p>
            </div>
          </div>

          {/* Layout 2: Reverse Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16 items-center">
            <div className="lg:pr-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Infrastructure as Code Excellence</h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                Stop managing infrastructure manually. We implement Infrastructure as Code (IaC) using Terraform, AWS CloudFormation, and Ansible to provision and manage your entire infrastructure through version-controlled code.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Every environment becomes reproducible, scalable, and documented. Disaster recovery becomes trivial, and spinning up new environments takes minutes instead of days.
              </p>
            </div>
            <div>
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://picsum.photos/600/400?random=infrastructure"
                  alt="Infrastructure as Code"
                  width={600}
                  height={400}
                  className="w-full h-auto transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm font-medium">IaC Implementation</p>
                </div>
              </div>
            </div>
          </div>

          {/* Layout 3: Full-Width Stats */}
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl p-8 text-white">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">200+</div>
                <div className="text-blue-100">Pipelines Built</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">50%</div>
                <div className="text-blue-100">Faster Time to Market</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">99.9%</div>
                <div className="text-blue-100">Deployment Success Rate</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">24/7</div>
                <div className="text-blue-100">Monitoring & Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features - Asymmetric Bento Grid */}
      <section className="py-20 border-t border-border bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">DevOps Capabilities That Drive Results</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive DevOps services covering the entire software delivery lifecycle
            </p>
          </div>

          <div className="grid md:grid-cols-12 gap-6">
            {/* Large Feature - Spans 8 columns */}
            <div className="md:col-span-8 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 p-8 text-white hover:shadow-2xl transition-all duration-300">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform translate-x-32 -translate-y-32 group-hover:scale-150 transition-transform duration-500" />
              <div className="relative z-10">
                <Rocket className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold mb-3">CI/CD Pipeline Automation</h3>
                <p className="text-blue-100 mb-4 text-lg leading-relaxed">
                  Automate your entire software delivery pipeline from code commit to production. We implement robust CI/CD workflows using GitHub Actions, GitLab CI, Jenkins, and CircleCI with automated testing, security scanning, and deployment strategies.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="text-sm">Automated Testing</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="text-sm">Zero Downtime Deploys</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="text-sm">Rollback Support</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Tall Feature - 4 columns, 2 rows */}
            <div className="md:col-span-4 md:row-span-2 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-500 to-purple-700 p-8 text-white hover:shadow-2xl transition-all duration-300">
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl transform -translate-x-24 translate-y-24 group-hover:scale-150 transition-transform duration-500" />
              <div className="relative z-10 h-full flex flex-col">
                <Container className="w-12 h-12 mb-4 group-hover:rotate-12 transition-transform" />
                <h3 className="text-2xl font-bold mb-3">Container Orchestration</h3>
                <p className="text-purple-100 mb-4 leading-relaxed flex-grow">
                  Master Docker and Kubernetes to containerize applications and orchestrate them at scale. We handle everything from Dockerfile optimization to production-grade K8s cluster management with auto-scaling, service mesh, and monitoring.
                </p>
                <div className="space-y-2 mt-auto">
                  <div className="flex items-center justify-between bg-white/10 rounded-lg p-2">
                    <span className="text-sm">Docker Mastery</span>
                    <span className="text-sm font-bold">Expert</span>
                  </div>
                  <div className="flex items-center justify-between bg-white/10 rounded-lg p-2">
                    <span className="text-sm">Kubernetes</span>
                    <span className="text-sm font-bold">Advanced</span>
                  </div>
                  <div className="flex items-center justify-between bg-white/10 rounded-lg p-2">
                    <span className="text-sm">Helm Charts</span>
                    <span className="text-sm font-bold">Expert</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Medium Feature - 4 columns */}
            <div className="md:col-span-4 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-pink-500 to-pink-700 p-6 text-white hover:shadow-2xl transition-all duration-300">
              <Settings className="w-10 h-10 mb-3 group-hover:rotate-180 transition-transform duration-500" />
              <h3 className="text-xl font-bold mb-2">Infrastructure as Code</h3>
              <p className="text-pink-100 text-sm leading-relaxed">
                Terraform, CloudFormation, and Ansible for reproducible infrastructure
              </p>
            </div>

            {/* Medium Feature - 4 columns */}
            <div className="md:col-span-4 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-orange-500 to-orange-700 p-6 text-white hover:shadow-2xl transition-all duration-300">
              <Activity className="w-10 h-10 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2">24/7 Monitoring & Alerts</h3>
              <p className="text-orange-100 text-sm leading-relaxed">
                Prometheus, Grafana, and ELK stack for complete observability
              </p>
            </div>

            {/* Large Feature - Spans 8 columns */}
            <div className="md:col-span-8 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-green-500 to-green-700 p-8 text-white hover:shadow-2xl transition-all duration-300">
              <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform -translate-x-32 -translate-y-32 group-hover:scale-150 transition-transform duration-500" />
              <div className="relative z-10">
                <Shield className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold mb-3">Security & Compliance Automation</h3>
                <p className="text-green-100 mb-4 text-lg leading-relaxed">
                  Integrate security at every stage with automated vulnerability scanning, secrets management, and compliance checks. We implement DevSecOps practices including SAST, DAST, SCA, and container security scanning.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="text-sm">Automated Security Scans</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="text-sm">Secrets Management</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="text-sm">SOC 2 Compliant</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Medium Feature - 4 columns */}
            <div className="md:col-span-4 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-cyan-500 to-cyan-700 p-6 text-white hover:shadow-2xl transition-all duration-300">
              <BarChart3 className="w-10 h-10 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2">Performance Optimization</h3>
              <p className="text-cyan-100 text-sm leading-relaxed">
                CDN setup, caching strategies, and load balancing for peak performance
              </p>
            </div>

            {/* Medium Feature - 4 columns */}
            <div className="md:col-span-4 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-500 to-indigo-700 p-6 text-white hover:shadow-2xl transition-all duration-300">
              <TrendingUp className="w-10 h-10 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2">Auto-Scaling & Cost Optimization</h3>
              <p className="text-indigo-100 text-sm leading-relaxed">
                Dynamic scaling based on demand, with cost monitoring and optimization
              </p>
            </div>

            {/* Medium Feature - 4 columns */}
            <div className="md:col-span-4 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-teal-500 to-teal-700 p-6 text-white hover:shadow-2xl transition-all duration-300">
              <Workflow className="w-10 h-10 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2">GitOps Workflows</h3>
              <p className="text-teal-100 text-sm leading-relaxed">
                Git-based infrastructure management with ArgoCD and Flux
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
            title="DevOps Technology Stack"
            subtitle="Industry-leading tools and platforms we use to automate your software delivery"
            filterSlugs={[
              'docker', 'kubernetes', 'terraform', 'aws', 'google-cloud', 'azure',
              'jenkins', 'github-actions', 'gitlab-ci', 'ansible', 'prometheus',
              'grafana', 'elasticsearch', 'redis', 'nginx', 'vercel'
            ]}
            showStats={true}
          />
        </div>
      </section>

      {/* Use Cases - Card Deck Style */}
      <section className="py-20 border-t border-border bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">DevOps Use Cases We Excel At</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real-world scenarios where our DevOps expertise delivers measurable results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform opacity-20" />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl transform rotate-1 group-hover:rotate-3 transition-transform opacity-40" />
              <div className="relative bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all duration-300">
                <Zap className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Startup Launch Acceleration</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Get your MVP to market 10x faster with pre-configured CI/CD pipelines, automated testing, and one-click deployments.
                </p>
                <div className="flex items-center text-sm text-blue-600 font-semibold">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform opacity-20" />
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl transform rotate-1 group-hover:rotate-3 transition-transform opacity-40" />
              <div className="relative bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all duration-300">
                <TrendingUp className="w-10 h-10 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Enterprise Legacy Modernization</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Transform monolithic applications into microservices with containerization, orchestration, and automated deployment workflows.
                </p>
                <div className="flex items-center text-sm text-purple-600 font-semibold">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-600 to-orange-600 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform opacity-20" />
              <div className="absolute inset-0 bg-gradient-to-br from-pink-600 to-orange-600 rounded-2xl transform rotate-1 group-hover:rotate-3 transition-transform opacity-40" />
              <div className="relative bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all duration-300">
                <Shield className="w-10 h-10 text-pink-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Compliance & Security Automation</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Achieve SOC 2, HIPAA, or PCI DSS compliance with automated security scanning, audit logging, and policy enforcement.
                </p>
                <div className="flex items-center text-sm text-pink-600 font-semibold">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-600 to-red-600 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform opacity-20" />
              <div className="absolute inset-0 bg-gradient-to-br from-orange-600 to-red-600 rounded-2xl transform rotate-1 group-hover:rotate-3 transition-transform opacity-40" />
              <div className="relative bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all duration-300">
                <BarChart3 className="w-10 h-10 text-orange-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">High-Traffic Platform Scaling</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Handle millions of users with auto-scaling infrastructure, load balancing, CDN integration, and real-time monitoring.
                </p>
                <div className="flex items-center text-sm text-orange-600 font-semibold">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our DevOps Implementation Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A proven 6-step methodology to transform your software delivery pipeline
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {[
              {
                step: '01',
                title: 'Assessment & Planning',
                description: 'We analyze your current infrastructure, development workflow, and identify bottlenecks. Create a detailed DevOps roadmap with prioritized improvements.',
                duration: '1-2 weeks',
                icon: CheckCircle2
              },
              {
                step: '02',
                title: 'CI/CD Pipeline Setup',
                description: 'Implement automated build, test, and deployment pipelines using GitHub Actions, GitLab CI, or Jenkins. Configure staging and production environments.',
                duration: '2-3 weeks',
                icon: GitBranch
              },
              {
                step: '03',
                title: 'Infrastructure as Code',
                description: 'Convert your infrastructure to code using Terraform or CloudFormation. Make all environments reproducible and version-controlled.',
                duration: '2-4 weeks',
                icon: Settings
              },
              {
                step: '04',
                title: 'Containerization & Orchestration',
                description: 'Dockerize applications and set up Kubernetes clusters for container orchestration. Implement auto-scaling and service mesh.',
                duration: '3-4 weeks',
                icon: Container
              },
              {
                step: '05',
                title: 'Monitoring & Observability',
                description: 'Deploy Prometheus, Grafana, and ELK stack for comprehensive monitoring. Set up alerting, logging, and performance tracking.',
                duration: '1-2 weeks',
                icon: Activity
              },
              {
                step: '06',
                title: 'Optimization & Training',
                description: 'Fine-tune performance, costs, and security. Train your team on DevOps best practices and provide ongoing support.',
                duration: 'Ongoing',
                icon: TrendingUp
              }
            ].map((item, index) => (
              <div key={index} className="relative pl-8 pb-12 border-l-2 border-blue-600 last:border-0 last:pb-0">
                <div className="absolute left-0 top-0 w-4 h-4 bg-blue-600 rounded-full -translate-x-[9px]" />
                <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow ml-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="text-3xl font-bold text-blue-600">{item.step}</div>
                      <div>
                        <h3 className="text-xl font-bold">{item.title}</h3>
                        <p className="text-sm text-muted-foreground flex items-center mt-1">
                          <Clock className="w-4 h-4 mr-1" />
                          {item.duration}
                        </p>
                      </div>
                    </div>
                    <item.icon className="w-8 h-8 text-blue-600" />
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
              DevOps Projects We've Delivered
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See how we've transformed software delivery for companies of all sizes
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
              Real results from companies that accelerated their delivery with our DevOps services
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
                  question: 'What is DevOps and why do I need it?',
                  answer: 'DevOps is a set of practices that combines software development (Dev) and IT operations (Ops) to shorten the development lifecycle and deliver high-quality software continuously. You need it to deploy faster, reduce failures, and scale efficiently.'
                },
                {
                  question: 'How long does it take to implement a CI/CD pipeline?',
                  answer: 'A basic CI/CD pipeline can be set up in 1-2 weeks. A complete DevOps transformation including infrastructure automation, monitoring, and security typically takes 8-12 weeks depending on your existing setup.'
                },
                {
                  question: 'What tools do you use for DevOps?',
                  answer: 'We use industry-leading tools including GitHub Actions, GitLab CI, Jenkins, Docker, Kubernetes, Terraform, Ansible, Prometheus, Grafana, AWS, Azure, and Google Cloud. We select the best tools based on your specific needs.'
                },
                {
                  question: 'Can you help with cloud migration as part of DevOps?',
                  answer: 'Absolutely! Cloud migration is often part of DevOps transformation. We can migrate your applications to AWS, Azure, or Google Cloud with zero downtime and implement cloud-native practices.'
                },
                {
                  question: 'Do you provide ongoing DevOps support?',
                  answer: 'Yes! We offer 24/7 monitoring, incident response, and ongoing optimization. Our support includes performance tuning, security updates, cost optimization, and continuous improvement of your DevOps processes.'
                },
                {
                  question: 'How much does DevOps implementation cost?',
                  answer: 'Costs vary based on scope. A basic CI/CD setup starts at $15,000. Complete DevOps transformation ranges from $30,000-$100,000. We provide custom quotes after assessing your needs. ROI is typically achieved within 6-12 months through improved efficiency.'
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
        title="Ready to Accelerate Your Software Delivery?"
        description="Let's implement modern DevOps practices that reduce deployment time by 10x, improve reliability, and free your team to focus on innovation."
        primaryButtonText="Schedule DevOps Consultation"
        primaryButtonLink="/contact"
        secondaryButtonText="View Case Studies"
        secondaryButtonLink="/resources/case-studies"
        showContactInfo={true}
      />
    </div>
  )
}
