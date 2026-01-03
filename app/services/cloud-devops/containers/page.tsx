import { Metadata } from 'next'
import Image from 'next/image'
import { PageHero } from '@/components/sections/page-hero'
import { 
  Container, 
  Box, 
  Layers, 
  Shield, 
  Zap, 
  Network,
  ArrowRight,
  CheckCircle2,
  Clock,
  TrendingUp,
  Server,
  Workflow,
  Settings,
  Cpu
} from 'lucide-react'
import { cn } from '@/lib/utils'
import TechShowcase from '@/components/animations/tech-showcase'
import { PortfolioSlider } from '@/components/sections/portfolio-slider'
import { TestimonialsCarousel } from '@/components/sections/testimonials-carousel'
import { CTASection } from '@/components/sections/cta-section'
import { getFeaturedPortfolio, getTechnologies, getFeaturedTestimonials } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Docker & Kubernetes Solutions | Container Orchestration Services',
  description: 'Professional Docker containerization and Kubernetes orchestration services. Build, deploy, and scale containerized applications with confidence.',
  keywords: 'Docker, Kubernetes, K8s, container orchestration, containerization, Docker Swarm, Helm, container services, microservices deployment, cloud-native',
  openGraph: {
    title: 'Docker & Kubernetes Solutions | Container Orchestration',
    description: 'Containerize and orchestrate your applications with Docker and Kubernetes. Expert implementation and support.',
    type: 'website',
  }
}

export default function ContainersPage() {
  const projects = getFeaturedPortfolio(6)
  const technologies = getTechnologies()
  const testimonials = getFeaturedTestimonials(6)

  return (
    <main>
      <PageHero
        badge="Docker & Kubernetes"
        title="Container Orchestration Solutions"
        description="Containerize applications and orchestrate them at scale with Docker and Kubernetes. Deploy anywhere, scale infinitely, reduce resource usage by 90%."
        ctaPrimary={{
          text: 'Start Your Project',
          href: '/contact'
        }}
        ctaSecondary={{
          text: 'View Our Work',
          href: '/portfolio'
        }}
        breadcrumbItems={[
          { label: 'Services', href: '/services' },
          { label: 'Cloud & DevOps' },
          { label: 'Docker & Kubernetes' }
        ]}
      />

      {/* Overview Section - Magazine Layout */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-4">
          {/* Layout 1: Diagonal Split */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://picsum.photos/600/400?random=docker-containers"
                  alt="Docker Containerization"
                  width={600}
                  height={400}
                  className="w-full h-auto transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm font-medium">Docker Containers</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 lg:pl-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Containerize Everything with Docker</h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                Docker containers package your application with all dependencies into a single, portable unit. Your app runs identically on dev laptops, staging servers, and production cloud - eliminating "works on my machine" forever.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We optimize Dockerfiles for minimal image size, implement multi-stage builds, set up private registries (Docker Hub, AWS ECR, GCR), and create efficient CI/CD pipelines that build, scan, and deploy containers automatically.
              </p>
            </div>
          </div>

          {/* Layout 2: Reverse Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16 items-center">
            <div className="lg:pr-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Orchestrate at Scale with Kubernetes</h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                Kubernetes (K8s) manages thousands of containers across multiple servers, handling deployment, scaling, health checks, and self-healing automatically. It's the de facto standard for container orchestration.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We design production-grade K8s clusters on AWS EKS, Google GKE, Azure AKS, or on-premise. You get automated scaling, zero-downtime deployments, service discovery, load balancing, and secrets management out of the box.
              </p>
            </div>
            <div>
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://picsum.photos/600/400?random=kubernetes-cluster"
                  alt="Kubernetes Orchestration"
                  width={600}
                  height={400}
                  className="w-full h-auto transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm font-medium">K8s Cluster</p>
                </div>
              </div>
            </div>
          </div>

          {/* Layout 3: Full-Width Stats */}
          <div className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">500+</div>
                <div className="text-cyan-100">Containers Deployed</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">80%</div>
                <div className="text-cyan-100">Infrastructure Cost Savings</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">99.95%</div>
                <div className="text-cyan-100">Cluster Uptime</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">5 min</div>
                <div className="text-cyan-100">Average Deploy Time</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features - Asymmetric Bento Grid */}
      <section className="py-20 border-t border-border bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Container & Orchestration Capabilities</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              End-to-end container solutions from Docker optimization to production Kubernetes clusters
            </p>
          </div>

          <div className="grid md:grid-cols-12 gap-6">
            {/* Large Feature - Spans 8 columns */}
            <div className="md:col-span-8 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-cyan-500 to-cyan-700 p-8 text-white hover:shadow-2xl transition-all duration-300">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform translate-x-32 -translate-y-32 group-hover:scale-150 transition-transform duration-500" />
              <div className="relative z-10">
                <Box className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold mb-3">Docker Containerization & Optimization</h3>
                <p className="text-cyan-100 mb-4 text-lg leading-relaxed">
                  Containerize legacy and modern applications with optimized Dockerfiles, multi-stage builds for minimal image sizes, vulnerability scanning, and private registry setup (Docker Hub, AWS ECR, Google Artifact Registry).
                </p>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="text-sm">Multi-Stage Builds</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="text-sm">Image Scanning</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="text-sm">Layer Caching</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Tall Feature - 4 columns, 2 rows */}
            <div className="md:col-span-4 md:row-span-2 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 p-8 text-white hover:shadow-2xl transition-all duration-300">
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl transform -translate-x-24 translate-y-24 group-hover:scale-150 transition-transform duration-500" />
              <div className="relative z-10 h-full flex flex-col">
                <Layers className="w-12 h-12 mb-4 group-hover:rotate-12 transition-transform" />
                <h3 className="text-2xl font-bold mb-3">Kubernetes Cluster Management</h3>
                <p className="text-blue-100 mb-4 leading-relaxed flex-grow">
                  Production-grade K8s clusters on AWS EKS, GKE, AKS, or on-premise with high availability, auto-scaling, monitoring, logging, and disaster recovery. Managed or self-hosted options available.
                </p>
                <div className="space-y-2 mt-auto">
                  <div className="flex items-center justify-between bg-white/10 rounded-lg p-2">
                    <span className="text-sm">EKS/GKE/AKS</span>
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div className="flex items-center justify-between bg-white/10 rounded-lg p-2">
                    <span className="text-sm">Auto-Scaling</span>
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div className="flex items-center justify-between bg-white/10 rounded-lg p-2">
                    <span className="text-sm">HA Setup</span>
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>

            {/* Medium Feature - 4 columns */}
            <div className="md:col-span-4 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-500 to-indigo-700 p-6 text-white hover:shadow-2xl transition-all duration-300">
              <Settings className="w-10 h-10 mb-3 group-hover:rotate-180 transition-transform duration-500" />
              <h3 className="text-xl font-bold mb-2">Helm Charts & Packaging</h3>
              <p className="text-indigo-100 text-sm leading-relaxed">
                Reusable Kubernetes packages with versioning and templating
              </p>
            </div>

            {/* Medium Feature - 4 columns */}
            <div className="md:col-span-4 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-500 to-purple-700 p-6 text-white hover:shadow-2xl transition-all duration-300">
              <Shield className="w-10 h-10 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2">Security & Secrets Management</h3>
              <p className="text-purple-100 text-sm leading-relaxed">
                Kubernetes Secrets, HashiCorp Vault, encrypted volumes
              </p>
            </div>

            {/* Large Feature - Spans 8 columns */}
            <div className="md:col-span-8 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-green-500 to-green-700 p-8 text-white hover:shadow-2xl transition-all duration-300">
              <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform -translate-x-32 -translate-y-32 group-hover:scale-150 transition-transform duration-500" />
              <div className="relative z-10">
                <Cpu className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold mb-3">Auto-Scaling & Load Balancing</h3>
                <p className="text-green-100 mb-4 text-lg leading-relaxed">
                  Horizontal Pod Autoscaling (HPA) based on CPU/memory/custom metrics, Vertical Pod Autoscaling (VPA), Cluster Autoscaler for node scaling, and Ingress controllers (NGINX, Traefik, Istio) for intelligent traffic routing.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="text-sm">HPA/VPA/CA</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="text-sm">Ingress Controllers</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="text-sm">Custom Metrics</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Medium Feature - 4 columns */}
            <div className="md:col-span-4 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-orange-500 to-orange-700 p-6 text-white hover:shadow-2xl transition-all duration-300">
              <TrendingUp className="w-10 h-10 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2">Monitoring & Observability</h3>
              <p className="text-orange-100 text-sm leading-relaxed">
                Prometheus, Grafana, ELK stack, distributed tracing with Jaeger
              </p>
            </div>

            {/* Medium Feature - 4 columns */}
            <div className="md:col-span-4 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-red-500 to-red-700 p-6 text-white hover:shadow-2xl transition-all duration-300">
              <Workflow className="w-10 h-10 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2">CI/CD Integration</h3>
              <p className="text-red-100 text-sm leading-relaxed">
                Automated builds, tests, and K8s deployments with GitOps (ArgoCD/Flux)
              </p>
            </div>

            {/* Medium Feature - 4 columns */}
            <div className="md:col-span-4 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-pink-500 to-pink-700 p-6 text-white hover:shadow-2xl transition-all duration-300">
              <Network className="w-10 h-10 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2">Service Mesh (Istio/Linkerd)</h3>
              <p className="text-pink-100 text-sm leading-relaxed">
                Advanced traffic management, security, and observability
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
            title="Container & Orchestration Stack"
            subtitle="Technologies we use to build, deploy, and manage containerized applications"
            filterSlugs={[
              'docker', 'kubernetes', 'helm', 'terraform', 'aws', 'google-cloud',
              'azure', 'prometheus', 'grafana', 'nginx', 'redis', 'postgresql'
            ]}
            showStats={true}
          />
        </div>
      </section>

      {/* Kubernetes Benefits - Card Deck Style */}
      <section id="kubernetes-benefits" className="py-20 border-t border-border bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Kubernetes for Production?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The benefits that make Kubernetes the industry standard for container orchestration
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform opacity-20" />
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-2xl transform rotate-1 group-hover:rotate-3 transition-transform opacity-40" />
              <div className="relative bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all duration-300">
                <Zap className="w-10 h-10 text-cyan-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Self-Healing</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Kubernetes automatically restarts failed containers, replaces unhealthy pods, and reschedules workloads on healthy nodes without manual intervention.
                </p>
                <div className="flex items-center text-sm text-cyan-600 font-semibold">
                  <span>99.99% Uptime</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform opacity-20" />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl transform rotate-1 group-hover:rotate-3 transition-transform opacity-40" />
              <div className="relative bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all duration-300">
                <TrendingUp className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Auto-Scaling</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Scale pods and nodes automatically based on CPU, memory, or custom metrics. Handle traffic spikes without over-provisioning infrastructure.
                </p>
                <div className="flex items-center text-sm text-blue-600 font-semibold">
                  <span>Elastic Scaling</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform opacity-20" />
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl transform rotate-1 group-hover:rotate-3 transition-transform opacity-40" />
              <div className="relative bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all duration-300">
                <Workflow className="w-10 h-10 text-indigo-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Zero-Downtime Deploys</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Rolling updates, blue-green deployments, and canary releases ensure new versions deploy without service interruption or user impact.
                </p>
                <div className="flex items-center text-sm text-indigo-600 font-semibold">
                  <span>Continuous Delivery</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform opacity-20" />
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl transform rotate-1 group-hover:rotate-3 transition-transform opacity-40" />
              <div className="relative bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all duration-300">
                <Server className="w-10 h-10 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Cloud Portability</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Run the same workloads on any cloud (AWS, GCP, Azure) or on-premise. Avoid vendor lock-in and move between providers seamlessly.
                </p>
                <div className="flex items-center text-sm text-purple-600 font-semibold">
                  <span>Multi-Cloud Ready</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Process Timeline */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Container Implementation Journey</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From dockerizing your first app to running production-grade Kubernetes clusters
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {[
              {
                step: '01',
                title: 'Application Assessment & Containerization',
                description: 'Analyze your applications, identify containerization candidates, and create optimized Dockerfiles with multi-stage builds for minimal image sizes.',
                duration: '1-2 weeks',
                icon: Box
              },
              {
                step: '02',
                title: 'Docker Registry & CI/CD Setup',
                description: 'Set up private container registry (ECR, GCR, ACR), implement automated builds, vulnerability scanning, and image signing for security.',
                duration: '1-2 weeks',
                icon: Shield
              },
              {
                step: '03',
                title: 'Kubernetes Cluster Provisioning',
                description: 'Deploy production-grade K8s cluster on managed service (EKS, GKE, AKS) or on-premise with high availability, monitoring, and security hardening.',
                duration: '2-3 weeks',
                icon: Layers
              },
              {
                step: '04',
                title: 'Application Deployment & Configuration',
                description: 'Create Kubernetes manifests or Helm charts, configure deployments, services, ingress, ConfigMaps, and Secrets for all applications.',
                duration: '2-4 weeks',
                icon: Workflow
              },
              {
                step: '05',
                title: 'Monitoring & Observability Setup',
                description: 'Deploy Prometheus, Grafana, ELK stack for logs, distributed tracing with Jaeger, and alerting for proactive issue detection.',
                duration: '1-2 weeks',
                icon: TrendingUp
              },
              {
                step: '06',
                title: 'Production Launch & Optimization',
                description: 'Migrate traffic to Kubernetes, monitor performance, optimize resource usage, tune auto-scaling policies, and provide ongoing support.',
                duration: 'Ongoing',
                icon: Zap
              }
            ].map((item, index) => (
              <div key={index} className="relative pl-8 pb-12 border-l-2 border-cyan-600 last:border-0 last:pb-0">
                <div className="absolute left-0 top-0 w-4 h-4 bg-cyan-600 rounded-full -translate-x-[9px]" />
                <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow ml-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="text-3xl font-bold text-cyan-600">{item.step}</div>
                      <div>
                        <h3 className="text-xl font-bold">{item.title}</h3>
                        <p className="text-sm text-muted-foreground flex items-center mt-1">
                          <Clock className="w-4 h-4 mr-1" />
                          {item.duration}
                        </p>
                      </div>
                    </div>
                    <item.icon className="w-8 h-8 text-cyan-600" />
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
              Container Projects We've Deployed
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See how we've containerized and orchestrated applications for scale and reliability
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
              What Our Container Clients Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real results from companies that scaled with Docker and Kubernetes
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
                  question: 'What is the difference between Docker and Kubernetes?',
                  answer: 'Docker is a containerization platform that packages applications. Kubernetes is an orchestration system that manages thousands of Docker containers at scale - handling deployment, scaling, networking, and self-healing automatically.'
                },
                {
                  question: 'Do I need Kubernetes, or is Docker enough?',
                  answer: 'Docker alone works for small deployments (1-5 containers). Kubernetes is essential when you have multiple services, need auto-scaling, require high availability, or manage deployments across multiple servers. We help you assess your needs.'
                },
                {
                  question: 'How much does Kubernetes cost?',
                  answer: 'Managed K8s (EKS, GKE, AKS) costs $75-150/month for control plane plus EC2/VM costs. A small production cluster starts at $300-500/month. Self-managed on-premise requires more setup but can be cost-effective at scale.'
                },
                {
                  question: 'Can you containerize our existing applications?',
                  answer: 'Yes! We containerize legacy apps (Java, .NET, PHP, Python, Node.js) and modern cloud-native apps. We create optimized Dockerfiles, handle dependencies, and migrate databases and state management to work with containers.'
                },
                {
                  question: 'What is Helm and why do we need it?',
                  answer: 'Helm is the "package manager" for Kubernetes. It bundles all K8s resources (deployments, services, config) into reusable charts with versioning. Makes deployments repeatable, upgrades easy, and rollbacks simple.'
                },
                {
                  question: 'How long does Kubernetes setup take?',
                  answer: 'Basic cluster setup takes 1-2 weeks. Production-grade with monitoring, CI/CD, security, and application migration takes 6-12 weeks depending on complexity. We provide managed support during and after launch.'
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
        title="Ready to Containerize and Orchestrate?"
        description="Let's package your applications in Docker containers and manage them at scale with Kubernetes. Deploy faster, scale easier, and run anywhere."
        primaryButtonText="Start Container Journey"
        primaryButtonLink="/contact"
        secondaryButtonText="View K8s Case Studies"
        secondaryButtonLink="/resources/case-studies"
        showContactInfo={true}
      />
    </main>
  )
}
