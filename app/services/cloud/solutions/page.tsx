import { Metadata } from 'next'
import { PageHero } from '@/components/sections/page-hero'
import { ProcessSteps } from '@/components/sections/process-steps'
import { TestimonialsCarousel } from '@/components/sections/testimonials-carousel'
import { PortfolioSlider } from '@/components/sections/portfolio-slider'
import { CTASection } from '@/components/sections/cta-section'
import TechShowcase from '@/components/animations/tech-showcase'
import { getFeaturedPortfolio, getTechnologies, getFeaturedTestimonials } from '@/lib/content'
import { Cloud, Server, Shield, Zap, Database, Globe } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Cloud Solutions & Infrastructure | AWS, Azure, Google Cloud | Srapsware',
  description: 'Expert cloud infrastructure design, migration, and management. AWS, Azure, Google Cloud solutions for scalable, secure, and cost-effective cloud computing.',
  openGraph: {
    title: 'Cloud Solutions & Infrastructure Services',
    description: 'Scale your business with enterprise cloud solutions',
    type: 'website',
  }
}

export default function CloudSolutionsPage() {
  const portfolioProjects = getFeaturedPortfolio()
  const technologies = getTechnologies()
  const testimonials = getFeaturedTestimonials()

  const processSteps = [
    {
      number: 1,
      title: 'Cloud Assessment',
      description: 'Evaluate current infrastructure, identify cloud opportunities, cost analysis, and migration strategy planning.',
      duration: '1-2 weeks',
      icon: 'ClipboardCheck'
    },
    {
      number: 2,
      title: 'Architecture Design',
      description: 'Design cloud architecture with high availability, disaster recovery, security best practices, and cost optimization.',
      duration: '2-3 weeks',
      icon: 'Layout'
    },
    {
      number: 3,
      title: 'Migration Planning',
      description: 'Create detailed migration roadmap, identify dependencies, plan data transfer, and minimize downtime strategies.',
      duration: '1-2 weeks',
      icon: 'GitBranch'
    },
    {
      number: 4,
      title: 'Implementation',
      description: 'Deploy infrastructure as code, configure services, setup networking, security groups, and load balancers.',
      duration: '4-8 weeks',
      icon: 'Code'
    },
    {
      number: 5,
      title: 'Migration Execution',
      description: 'Execute phased migration, data transfer, application deployment, and comprehensive testing in cloud environment.',
      duration: '3-6 weeks',
      icon: 'Upload'
    },
    {
      number: 6,
      title: 'Optimization & Monitoring',
      description: 'Setup monitoring, alerts, auto-scaling, cost optimization, and ongoing managed services support.',
      duration: 'Ongoing',
      icon: 'Activity'
    }
  ]

  return (
    <main>
      {/* Hero Section */}
      <PageHero
        badge="Cloud Solutions & Infrastructure"
        title="Enterprise Cloud Solutions"
        description="Transform your business with scalable, secure cloud infrastructure on AWS, Azure, and Google Cloud. Expert cloud migration, architecture design, and managed services."
        ctaPrimary={{
          text: 'Start Cloud Migration',
          href: '/contact'
        }}
        ctaSecondary={{
          text: 'Get Cloud Assessment',
          href: '/contact'
        }}
      />

      {/* Overview Section - Creative Magazine Layout */}
      <section className="relative py-32 border-t border-border overflow-hidden">
        {/* Floating Background Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-sky-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4">
          {/* Dynamic Title */}
          <div className="relative mb-20">
            <div className="absolute -top-10 -right-10 w-32 h-32 border-4 border-sky-500/20 rounded-full hidden lg:block"></div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="block text-foreground">Limitless Scale,</span>
              <span className="block mt-2 bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
                Enterprise Reliability
              </span>
            </h2>
          </div>

          {/* First Section - Diagonal Split */}
          <div className="relative mb-32">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              {/* Large Image - Diagonal Cut */}
              <div className="lg:col-span-7 relative">
                <div className="relative h-[400px] lg:h-[500px] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-sky-500/20 to-blue-500/20 opacity-50" 
                       style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)' }}></div>
                  <img 
                    src="https://picsum.photos/seed/cloud-infrastructure/900/600" 
                    alt="Cloud Infrastructure"
                    className="w-full h-full object-cover"
                    style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)' }}
                  />
                  {/* Floating Badge */}
                  <div className="absolute top-8 right-8 bg-background/90 backdrop-blur-md border border-sky-500/30 rounded-full px-6 py-3 shadow-xl">
                    <span className="text-sm font-bold text-sky-500">AWS & Azure Certified</span>
                  </div>
                </div>
              </div>
              
              {/* Text Content - Overlapping */}
              <div className="lg:col-span-5 lg:-ml-20 relative z-10">
                <div className="bg-background/95 backdrop-blur-xl border border-border rounded-3xl p-8 lg:p-10 shadow-2xl">
                  <div className="w-12 h-1 bg-gradient-to-r from-sky-500 to-blue-500 mb-6"></div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground">Your Infrastructure, Elevated</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Cloud computing eliminates infrastructure constraints, reduces costs, and enables global scale. We design, migrate, and manage cloud infrastructure that grows with your business - from startup to enterprise.
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
                  <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-500/10 rounded-lg -z-10"></div>
                  <div className="bg-gradient-to-br from-background via-background to-blue-900/5 backdrop-blur-xl border border-border rounded-3xl p-8 lg:p-10 shadow-2xl">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-3 h-3 rounded-full bg-sky-500 animate-pulse"></div>
                      <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse delay-100"></div>
                      <div className="w-3 h-3 rounded-full bg-indigo-500 animate-pulse delay-200"></div>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-foreground">Multi-Cloud Expertise</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      AWS for mature ecosystems, Azure for Microsoft integration, Google Cloud for AI/ML workloads. We help you choose the right platform or architect hybrid solutions that leverage strengths of each.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Image Grid - Right Side */}
              <div className="lg:col-span-7 lg:-mr-20 relative order-1 lg:order-2">
                <div className="grid grid-cols-2 gap-4 h-[500px]">
                  <div className="row-span-2 rounded-2xl overflow-hidden relative group">
                    <img 
                      src="https://picsum.photos/seed/aws-cloud/400/650" 
                      alt="AWS Cloud"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-sky-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="rounded-2xl overflow-hidden relative group">
                    <img 
                      src="https://picsum.photos/seed/azure-cloud/400/320" 
                      alt="Azure Cloud"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/80 to-transparent"></div>
                  </div>
                  <div className="rounded-2xl overflow-hidden relative group">
                    <img 
                      src="https://picsum.photos/seed/google-cloud/400/320" 
                      alt="Google Cloud"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tl from-indigo-500/80 to-transparent"></div>
                    <div className="absolute bottom-4 right-4 bg-white text-black text-xs font-bold px-3 py-1 rounded-full">
                      Multi-Cloud Ready
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Third Section - Full Width Stats */}
          <div className="relative">
            <div className="bg-gradient-to-br from-background via-sky-500/5 to-blue-900/10 rounded-[3rem] overflow-hidden border border-border shadow-2xl">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Left - Text with Stats */}
                <div className="p-12 lg:p-16 flex flex-col justify-center relative">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500"></div>
                  
                  <h3 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight">
                    Scale to{' '}
                    <span className="text-sky-500">Millions of Users</span>
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                    Cloud infrastructure that auto-scales based on demand. Handle traffic spikes effortlessly, pay only for what you use, and ensure 99.99% uptime with redundancy across multiple availability zones.
                  </p>
                  
                  {/* Stats Grid */}
                  <div className="grid grid-cols-3 gap-6 mb-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-sky-500 mb-2">99.99%</div>
                      <div className="text-sm text-muted-foreground">Uptime SLA</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-500 mb-2">40%</div>
                      <div className="text-sm text-muted-foreground">Cost Savings</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-indigo-500 mb-2">24/7</div>
                      <div className="text-sm text-muted-foreground">Monitoring</div>
                    </div>
                  </div>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-sky-500/10 border border-sky-500/20 rounded-full text-sm font-medium">
                      Auto-Scaling
                    </span>
                    <span className="px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-sm font-medium">
                      Load Balancing
                    </span>
                    <span className="px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-sm font-medium">
                      Multi-Region
                    </span>
                  </div>
                </div>
                
                {/* Right - Large Hero Image */}
                <div className="relative h-[400px] lg:h-auto min-h-[500px]">
                  <img 
                    src="https://picsum.photos/seed/cloud-scale/700/700" 
                    alt="Cloud Scale"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-background via-transparent to-transparent lg:from-background/50"></div>
                  
                  {/* Floating Card */}
                  <div className="absolute bottom-8 right-8 bg-background/95 backdrop-blur-xl border border-border rounded-2xl p-6 shadow-2xl max-w-xs hidden lg:block">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-sky-500 to-blue-500 flex items-center justify-center text-white font-bold">
                        <Cloud className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="font-bold text-foreground mb-1">Enterprise Grade</div>
                        <div className="text-sm text-muted-foreground">Built for mission-critical workloads</div>
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(14,165,233,0.05),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(59,130,246,0.05),transparent_50%)]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <div className="max-w-3xl mb-16">
            <div className="inline-block px-4 py-2 bg-sky-500/10 border border-sky-500/20 rounded-full text-sm font-semibold text-sky-500 mb-6">
              Cloud Capabilities
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Why Choose Our
              <span className="block text-transparent bg-gradient-to-r from-sky-500 to-blue-500 bg-clip-text">
                Cloud Solutions
              </span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Scalable, secure, and cost-effective cloud infrastructure
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid lg:grid-cols-12 gap-6">
            {/* Scalable Infrastructure - Large Featured */}
            <div className="lg:col-span-8 relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-sky-500/20 to-blue-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              <div className="relative h-full bg-gradient-to-br from-sky-950/40 to-blue-950/40 backdrop-blur-xl border border-sky-500/20 rounded-3xl p-8 lg:p-12 overflow-hidden group-hover:border-sky-500/40 transition-all duration-300">
                <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-sky-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Server className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4 text-foreground">Infinitely Scalable Infrastructure</h3>
                  <p className="text-lg text-muted-foreground mb-8">
                    Auto-scaling compute, storage, and database resources that grow with your business. Handle traffic spikes automatically without manual intervention or infrastructure limits.
                  </p>
                  <div className="relative h-48 rounded-2xl overflow-hidden">
                    <img 
                      src="https://picsum.photos/seed/scalable-infra/700/300" 
                      alt="Scalable Infrastructure"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-sky-950/80 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 flex items-center gap-4">
                      <div className="bg-sky-500 text-white text-xs font-bold px-3 py-1 rounded-full">EC2/VMs</div>
                      <div className="bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">Kubernetes</div>
                      <div className="bg-white/10 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full">Serverless</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Security & Compliance - Tall Card */}
            <div className="lg:col-span-4 lg:row-span-2 relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              <div className="relative h-full bg-gradient-to-br from-red-950/40 to-orange-950/40 backdrop-blur-xl border border-red-500/20 rounded-3xl p-8 overflow-hidden group-hover:border-red-500/40 transition-all duration-300">
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-red-500/10 rounded-full blur-3xl"></div>
                <div className="relative z-10 h-full flex flex-col">
                  <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6">
                    <Shield className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground">Security & Compliance</h3>
                  <p className="text-base text-muted-foreground mb-6">
                    Enterprise-grade security with encryption, IAM, VPCs, and compliance certifications (SOC 2, HIPAA, GDPR).
                  </p>
                  <div className="mt-auto space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-red-500/5 rounded-lg border border-red-500/10">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span className="text-sm">Data Encryption</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-red-500/5 rounded-lg border border-red-500/10">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span className="text-sm">Access Control</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-red-500/5 rounded-lg border border-red-500/10">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <span className="text-sm">Audit Logging</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Cost Optimization */}
            <div className="lg:col-span-4 relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative h-full bg-gradient-to-br from-green-950/40 to-emerald-950/40 backdrop-blur-xl border border-green-500/20 rounded-3xl p-6 overflow-hidden group-hover:border-green-500/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Cost Optimization</h3>
                <p className="text-sm text-muted-foreground">
                  Pay only for what you use. Reserved instances, spot instances, and right-sizing to minimize cloud spend while maximizing performance.
                </p>
              </div>
            </div>

            {/* High Availability */}
            <div className="lg:col-span-4 relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative h-full bg-gradient-to-br from-purple-950/40 to-pink-950/40 backdrop-blur-xl border border-purple-500/20 rounded-3xl p-6 overflow-hidden group-hover:border-purple-500/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">High Availability</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Multi-AZ deployments, automatic failover, load balancing, and disaster recovery plans ensure your apps are always available.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-purple-500/10 border border-purple-500/30 rounded text-xs">99.99% Uptime</span>
                  <span className="px-2 py-1 bg-purple-500/10 border border-purple-500/30 rounded text-xs">Multi-AZ</span>
                  <span className="px-2 py-1 bg-purple-500/10 border border-purple-500/30 rounded text-xs">Failover</span>
                </div>
              </div>
            </div>

            {/* Database & Storage - Wide Card */}
            <div className="lg:col-span-8 relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 via-blue-500/20 to-cyan-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              <div className="relative h-full bg-gradient-to-r from-indigo-950/40 via-blue-950/40 to-cyan-950/40 backdrop-blur-xl border border-indigo-500/20 rounded-3xl overflow-hidden group-hover:border-indigo-500/40 transition-all duration-300">
                <div className="grid md:grid-cols-2 gap-0 h-full">
                  {/* Database Side */}
                  <div className="p-8 flex flex-col justify-center border-r border-indigo-500/10">
                    <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6">
                      <Database className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-foreground">Managed Databases</h3>
                    <p className="text-base text-muted-foreground">
                      RDS, Aurora, DynamoDB, CosmosDB. Automated backups, patching, scaling, and replication without managing servers.
                    </p>
                  </div>
                  
                  {/* Storage Side */}
                  <div className="relative p-8 flex flex-col justify-center">
                    <div className="absolute inset-0">
                      <img 
                        src="https://picsum.photos/seed/cloud-storage/500/400" 
                        alt="Cloud Storage"
                        className="w-full h-full object-cover opacity-20"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-950/80 to-cyan-950/40"></div>
                    </div>
                    <div className="relative z-10">
                      <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6">
                        <Globe className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold mb-3 text-foreground">Object Storage & CDN</h3>
                      <p className="text-base text-muted-foreground">
                        S3, Blob Storage, Cloud Storage with global CDN distribution. Store petabytes, serve millions of users worldwide.
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
        title="Cloud Technology Stack"
        subtitle="Leading cloud platforms and infrastructure tools"
        filterSlugs={[
          // Cloud Platforms
          'aws',
          // Infrastructure
          'docker', 'kubernetes',
          // Databases
          'postgresql', 'mongodb', 'mysql', 'redis',
          // Backend
          'nodejs', 'python',
          // Tools
          'nginx', 'graphql'
        ]}
        showStats={true}
      />

      {/* Process */}
      <ProcessSteps
        title="Our Cloud Migration Process"
        description="From assessment to optimization"
        steps={processSteps}
      />

      {/* Use Cases - Card Deck Layout */}
      <section className="relative py-32 border-t border-border overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-sky-500/5 to-transparent"></div>
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <div className="max-w-3xl mb-20">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-sky-500 to-transparent"></div>
              <span className="px-4 py-2 bg-sky-500/10 border border-sky-500/20 rounded-full text-sm font-semibold text-sky-500">
                Cloud Solutions
              </span>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent via-sky-500 to-transparent"></div>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Cloud Infrastructure For{' '}
              <span className="relative inline-block">
                <span className="relative z-10 text-transparent bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 bg-clip-text">
                  Every Workload
                </span>
                <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 200 12" fill="none">
                  <path d="M0 6C50 0 150 12 200 6" stroke="url(#gradient-cloud)" strokeWidth="2"/>
                  <defs>
                    <linearGradient id="gradient-cloud" x1="0" y1="0" x2="200" y2="0">
                      <stop offset="0%" stopColor="rgb(14, 165, 233)" />
                      <stop offset="50%" stopColor="rgb(59, 130, 246)" />
                      <stop offset="100%" stopColor="rgb(99, 102, 241)" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              From startups to Fortune 500 companies
            </p>
          </div>

          {/* Card Deck */}
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Cloud Migration */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-sky-500/20 to-blue-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              <div className="relative h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 to-blue-500/5 backdrop-blur-sm border border-sky-500/10 rounded-3xl transform translate-x-2 translate-y-2"></div>
                
                <div className="relative bg-background/95 backdrop-blur-xl border border-sky-500/20 rounded-3xl p-8 lg:p-10 overflow-hidden group-hover:border-sky-500/40 transition-all duration-300">
                  <div className="absolute top-4 right-4 w-32 h-32 bg-sky-500/5 rounded-full blur-2xl"></div>
                  
                  <div className="relative z-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-sky-500 to-blue-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Cloud className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-foreground">Cloud Migration</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                      Migrate legacy on-premise infrastructure to the cloud. Lift-and-shift or re-architecture strategies with minimal downtime.
                    </p>
                    
                    <div className="relative h-40 rounded-xl overflow-hidden mb-6">
                      <img 
                        src="https://picsum.photos/seed/cloud-migration/600/300" 
                        alt="Cloud Migration"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-sky-500/80 to-transparent"></div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1.5 bg-sky-500/10 border border-sky-500/30 rounded-full text-xs font-medium text-sky-400">
                        Lift & Shift
                      </span>
                      <span className="px-3 py-1.5 bg-sky-500/10 border border-sky-500/30 rounded-full text-xs font-medium text-sky-400">
                        Re-architecture
                      </span>
                      <span className="px-3 py-1.5 bg-sky-500/10 border border-sky-500/30 rounded-full text-xs font-medium text-sky-400">
                        Zero Downtime
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Serverless Architecture */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 to-purple-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              <div className="relative h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-purple-500/5 backdrop-blur-sm border border-violet-500/10 rounded-3xl transform translate-x-2 translate-y-2"></div>
                
                <div className="relative bg-background/95 backdrop-blur-xl border border-violet-500/20 rounded-3xl p-8 lg:p-10 overflow-hidden group-hover:border-violet-500/40 transition-all duration-300">
                  <div className="absolute bottom-4 left-4 w-40 h-40 bg-violet-500/5 rounded-full blur-2xl"></div>
                  
                  <div className="relative z-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-violet-500 to-purple-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Zap className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-foreground">Serverless Architecture</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                      Lambda, Cloud Functions, Azure Functions. Pay per execution, infinite scale, zero server management.
                    </p>
                    
                    <div className="grid grid-cols-2 gap-2 mb-6">
                      <div className="relative h-20 rounded-lg overflow-hidden bg-violet-500/10 border border-violet-500/20 flex items-center justify-center">
                        <span className="text-xs font-bold text-violet-400">Event-Driven</span>
                      </div>
                      <div className="relative h-20 rounded-lg overflow-hidden bg-violet-500/10 border border-violet-500/20 flex items-center justify-center">
                        <span className="text-xs font-bold text-violet-400">Auto-Scale</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1.5 bg-violet-500/10 border border-violet-500/30 rounded-full text-xs font-medium text-violet-400">
                        AWS Lambda
                      </span>
                      <span className="px-3 py-1.5 bg-violet-500/10 border border-violet-500/30 rounded-full text-xs font-medium text-violet-400">
                        API Gateway
                      </span>
                      <span className="px-3 py-1.5 bg-violet-500/10 border border-violet-500/30 rounded-full text-xs font-medium text-violet-400">
                        Pay Per Use
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Container Orchestration */}
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
                    
                    <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-foreground">Container Orchestration</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                      Kubernetes (EKS, AKS, GKE), Docker, container registries. Deploy, scale, and manage containerized applications.
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
                        Kubernetes
                      </span>
                      <span className="px-3 py-1.5 bg-blue-500/10 border border-blue-500/30 rounded-full text-xs font-medium text-blue-400">
                        Docker
                      </span>
                      <span className="px-3 py-1.5 bg-blue-500/10 border border-blue-500/30 rounded-full text-xs font-medium text-blue-400">
                        Helm Charts
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* DevOps & CI/CD */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-amber-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              <div className="relative h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-amber-500/5 backdrop-blur-sm border border-orange-500/10 rounded-3xl transform translate-x-2 translate-y-2"></div>
                
                <div className="relative bg-background/95 backdrop-blur-xl border border-orange-500/20 rounded-3xl p-8 lg:p-10 overflow-hidden group-hover:border-orange-500/40 transition-all duration-300">
                  <div className="absolute bottom-4 right-4 w-40 h-40 bg-orange-500/5 rounded-full blur-2xl"></div>
                  
                  <div className="relative z-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                    </div>
                    
                    <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-foreground">DevOps & CI/CD</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                      Automated pipelines with GitHub Actions, GitLab CI, Jenkins. Infrastructure as Code with Terraform and CloudFormation.
                    </p>
                    
                    <div className="grid grid-cols-3 gap-3 mb-6">
                      <div className="aspect-square bg-gradient-to-br from-orange-500/10 to-amber-500/10 rounded-xl border border-orange-500/20 flex items-center justify-center">
                        <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                      </div>
                      <div className="aspect-square bg-gradient-to-br from-orange-500/10 to-amber-500/10 rounded-xl border border-orange-500/20 flex items-center justify-center">
                        <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="aspect-square bg-gradient-to-br from-orange-500/10 to-amber-500/10 rounded-xl border border-orange-500/20 flex items-center justify-center">
                        <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                        </svg>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1.5 bg-orange-500/10 border border-orange-500/30 rounded-full text-xs font-medium text-orange-400">
                        Terraform
                      </span>
                      <span className="px-3 py-1.5 bg-orange-500/10 border border-orange-500/30 rounded-full text-xs font-medium text-orange-400">
                        GitHub Actions
                      </span>
                      <span className="px-3 py-1.5 bg-orange-500/10 border border-orange-500/30 rounded-full text-xs font-medium text-orange-400">
                        Monitoring
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
                Cloud Infrastructure We've Built
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                See our cloud migration and infrastructure projects
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
                Trusted by businesses for reliable cloud solutions
              </p>
            </div>
            
            <TestimonialsCarousel testimonials={testimonials} />
          </div>
        </section>
      )}

      {/* Final CTA */}
      <CTASection 
        title="Ready to Move to the Cloud?"
        description="Transform your infrastructure with scalable, secure cloud solutions. Get a free cloud assessment and migration roadmap from our certified cloud architects."
        primaryButtonText="Start Cloud Migration"
        primaryButtonLink="/contact"
        secondaryButtonText="Get Free Cloud Assessment"
        secondaryButtonLink="/contact"
        showContactInfo={true}
      />
    </main>
  )
}
