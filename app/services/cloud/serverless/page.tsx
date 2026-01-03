import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { 
  Zap, 
  Cloud, 
  DollarSign, 
  Shield, 
  TrendingUp, 
  Code,
  ArrowRight,
  CheckCircle2,
  Clock,
  Sparkles,
  Cpu,
  Workflow,
  Database,
  Activity
} from 'lucide-react'
import { cn } from '@/lib/utils'
import TechShowcase from '@/components/animations/tech-showcase'
import { PortfolioSlider } from '@/components/sections/portfolio-slider'
import { TestimonialsCarousel } from '@/components/sections/testimonials-carousel'
import { CTASection } from '@/components/sections/cta-section'
import { getFeaturedPortfolio, getTechnologies, getFeaturedTestimonials } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Serverless Development Services | AWS Lambda, Azure Functions, Cloud Functions',
  description: 'Professional serverless application development. Build scalable, cost-effective apps with AWS Lambda, Azure Functions, and Google Cloud Functions. Pay only for what you use.',
  keywords: 'serverless development, AWS Lambda, Azure Functions, Google Cloud Functions, serverless architecture, FaaS, event-driven computing, serverless consulting',
  openGraph: {
    title: 'Serverless Development Services | Lambda & Cloud Functions',
    description: 'Build scalable serverless applications that automatically scale and cost 80% less than traditional infrastructure.',
    type: 'website',
  }
}

export default function ServerlessPage() {
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
            <span className="text-foreground font-medium">Serverless Development</span>
          </nav>
        </div>
      </section>

      {/* Hero Section - Modern Gradient Design */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 dark:from-yellow-950/20 dark:via-orange-950/20 dark:to-red-950/20" />
        <div className="absolute inset-0 bg-grid-slate-900/[0.04] dark:bg-grid-slate-400/[0.05] bg-[size:32px_32px]" />
        
        {/* Floating Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-400/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-400/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-4 px-4 py-1.5 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 rounded-full text-sm font-medium">
                ⚡ Serverless Solutions
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
                Serverless Development
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                Build and deploy applications without managing servers. Scale automatically, pay only for execution time, and focus purely on code.
              </p>

              {/* Key Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center p-4 rounded-lg bg-white/50 dark:bg-black/20 backdrop-blur-sm border border-white/20">
                  <div className="text-3xl font-bold text-yellow-600">80%</div>
                  <div className="text-sm text-muted-foreground">Cost Savings</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-white/50 dark:bg-black/20 backdrop-blur-sm border border-white/20">
                  <div className="text-3xl font-bold text-orange-600">∞</div>
                  <div className="text-sm text-muted-foreground">Auto Scale</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-white/50 dark:bg-black/20 backdrop-blur-sm border border-white/20">
                  <div className="text-3xl font-bold text-red-600">0</div>
                  <div className="text-sm text-muted-foreground">Server Ops</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-yellow-600 to-orange-600 text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200"
                >
                  Go Serverless Today
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link 
                  href="#cost-calculator"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-yellow-600 text-yellow-600 dark:text-yellow-400 rounded-lg font-semibold hover:bg-yellow-50 dark:hover:bg-yellow-950/30 transition-all duration-200"
                >
                  Calculate Savings
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 backdrop-blur-sm">
                <Image
                  src="https://picsum.photos/800/600?random=serverless"
                  alt="Serverless Architecture with AWS Lambda and Azure Functions"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                  priority
                />
                {/* Floating Badge */}
                <div className="absolute top-6 right-6 bg-white/90 dark:bg-black/90 backdrop-blur-md px-4 py-2 rounded-lg shadow-lg border border-white/20">
                  <div className="flex items-center space-x-2">
                    <Zap className="w-5 h-5 text-yellow-500 animate-pulse" />
                    <span className="font-semibold text-sm">Auto-Scaling</span>
                  </div>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex items-center space-x-4 bg-white dark:bg-gray-900 px-6 py-3 rounded-full shadow-xl border border-gray-200 dark:border-gray-800">
                <Zap className="w-6 h-6 text-yellow-600" />
                <Cloud className="w-6 h-6 text-orange-600" />
                <Sparkles className="w-6 h-6 text-red-600" />
                <DollarSign className="w-6 h-6 text-green-600" />
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
                  src="https://picsum.photos/600/400?random=lambda-functions"
                  alt="AWS Lambda Functions"
                  width={600}
                  height={400}
                  className="w-full h-auto transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm font-medium">Lambda Functions</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 lg:pl-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What is Serverless Computing?</h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                Serverless doesn't mean "no servers" - it means you don't manage them. Write code, deploy functions, and the cloud provider handles infrastructure, scaling, patching, and availability automatically. You only pay for actual execution time (milliseconds).
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Perfect for APIs, background jobs, data processing, webhooks, and event-driven workflows. Scale from zero to millions of requests instantly without provisioning servers or worrying about capacity planning.
              </p>
            </div>
          </div>

          {/* Layout 2: Reverse Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16 items-center">
            <div className="lg:pr-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Pay Only for What You Use</h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                Traditional servers cost $100-500/month even when idle. Serverless charges per 100ms of execution time. Most startups pay $5-50/month for Lambda. Only pay when code runs - zero cost when idle.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                AWS Lambda's free tier includes 1 million requests and 400,000 GB-seconds per month forever. Azure Functions offers 1 million free executions monthly. Perfect for side projects, MVPs, and growing startups.
              </p>
            </div>
            <div>
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://picsum.photos/600/400?random=cost-savings"
                  alt="Serverless Cost Savings"
                  width={600}
                  height={400}
                  className="w-full h-auto transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm font-medium">80% Lower Costs</p>
                </div>
              </div>
            </div>
          </div>

          {/* Layout 3: Full-Width Stats */}
          <div className="bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 rounded-2xl p-8 text-white">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">300+</div>
                <div className="text-yellow-100">Serverless Apps Built</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">5ms</div>
                <div className="text-yellow-100">Cold Start Time</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">99.99%</div>
                <div className="text-yellow-100">Function Availability</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">$0.20</div>
                <div className="text-yellow-100">Per Million Requests</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features - Asymmetric Bento Grid */}
      <section className="py-20 border-t border-border bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Serverless Capabilities We Deliver</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Complete serverless solutions from architecture design to production deployment
            </p>
          </div>

          <div className="grid md:grid-cols-12 gap-6">
            {/* Large Feature - Spans 8 columns */}
            <div className="md:col-span-8 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-yellow-500 to-yellow-700 p-8 text-white hover:shadow-2xl transition-all duration-300">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform translate-x-32 -translate-y-32 group-hover:scale-150 transition-transform duration-500" />
              <div className="relative z-10">
                <Zap className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold mb-3">AWS Lambda & Serverless Framework</h3>
                <p className="text-yellow-100 mb-4 text-lg leading-relaxed">
                  Build event-driven applications with AWS Lambda, API Gateway, DynamoDB, S3, SQS, and EventBridge. We use Serverless Framework, SAM, or Terraform for infrastructure as code with automated CI/CD deployments.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="text-sm">Multi-Runtime Support</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="text-sm">VPC Integration</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="text-sm">Layer Optimization</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Tall Feature - 4 columns, 2 rows */}
            <div className="md:col-span-4 md:row-span-2 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-orange-500 to-orange-700 p-8 text-white hover:shadow-2xl transition-all duration-300">
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl transform -translate-x-24 translate-y-24 group-hover:scale-150 transition-transform duration-500" />
              <div className="relative z-10 h-full flex flex-col">
                <DollarSign className="w-12 h-12 mb-4 group-hover:rotate-12 transition-transform" />
                <h3 className="text-2xl font-bold mb-3">Cost Optimization</h3>
                <p className="text-orange-100 mb-4 leading-relaxed flex-grow">
                  Optimize Lambda memory allocation, execution time, and cold starts. Implement reserved concurrency, provisioned concurrency for latency-sensitive apps, and monitoring to minimize costs while maximizing performance.
                </p>
                <div className="space-y-2 mt-auto">
                  <div className="flex items-center justify-between bg-white/10 rounded-lg p-2">
                    <span className="text-sm">Memory Tuning</span>
                    <span className="text-sm font-bold">-70%</span>
                  </div>
                  <div className="flex items-center justify-between bg-white/10 rounded-lg p-2">
                    <span className="text-sm">Cold Start Fix</span>
                    <span className="text-sm font-bold">-90%</span>
                  </div>
                  <div className="flex items-center justify-between bg-white/10 rounded-lg p-2">
                    <span className="text-sm">Total Savings</span>
                    <span className="text-sm font-bold">80%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Medium Feature - 4 columns */}
            <div className="md:col-span-4 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-red-500 to-red-700 p-6 text-white hover:shadow-2xl transition-all duration-300">
              <Cloud className="w-10 h-10 mb-3 group-hover:rotate-180 transition-transform duration-500" />
              <h3 className="text-xl font-bold mb-2">Azure Functions & Google Cloud</h3>
              <p className="text-red-100 text-sm leading-relaxed">
                Multi-cloud serverless with Azure Functions, Google Cloud Functions, and Cloud Run
              </p>
            </div>

            {/* Medium Feature - 4 columns */}
            <div className="md:col-span-4 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-pink-500 to-pink-700 p-6 text-white hover:shadow-2xl transition-all duration-300">
              <Workflow className="w-10 h-10 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2">Event-Driven Architectures</h3>
              <p className="text-pink-100 text-sm leading-relaxed">
                Build reactive systems with EventBridge, SNS, SQS, and Step Functions
              </p>
            </div>

            {/* Large Feature - Spans 8 columns */}
            <div className="md:col-span-8 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 p-8 text-white hover:shadow-2xl transition-all duration-300">
              <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform -translate-x-32 -translate-y-32 group-hover:scale-150 transition-transform duration-500" />
              <div className="relative z-10">
                <Code className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold mb-3">Serverless APIs & GraphQL</h3>
                <p className="text-blue-100 mb-4 text-lg leading-relaxed">
                  Build REST and GraphQL APIs with API Gateway, AppSync, or Vercel Functions. Implement authentication (Cognito, Auth0), rate limiting, caching, and custom domains with millisecond latency at any scale.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="text-sm">API Gateway v2</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="text-sm">AppSync GraphQL</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="text-sm">WebSocket Support</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Medium Feature - 4 columns */}
            <div className="md:col-span-4 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-green-500 to-green-700 p-6 text-white hover:shadow-2xl transition-all duration-300">
              <Database className="w-10 h-10 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2">Serverless Databases</h3>
              <p className="text-green-100 text-sm leading-relaxed">
                DynamoDB, Aurora Serverless, FaunaDB with auto-scaling storage
              </p>
            </div>

            {/* Medium Feature - 4 columns */}
            <div className="md:col-span-4 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-500 to-purple-700 p-6 text-white hover:shadow-2xl transition-all duration-300">
              <Activity className="w-10 h-10 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2">Monitoring & Debugging</h3>
              <p className="text-purple-100 text-sm leading-relaxed">
                CloudWatch, X-Ray distributed tracing, and error tracking with Sentry
              </p>
            </div>

            {/* Medium Feature - 4 columns */}
            <div className="md:col-span-4 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-500 to-indigo-700 p-6 text-white hover:shadow-2xl transition-all duration-300">
              <Shield className="w-10 h-10 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2">Security & IAM</h3>
              <p className="text-indigo-100 text-sm leading-relaxed">
                Least-privilege IAM policies, secrets management, and encryption
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
            title="Serverless Technology Stack"
            subtitle="Cloud platforms, frameworks, and tools we use to build serverless applications"
            filterSlugs={[
              'aws', 'azure', 'google-cloud', 'nodejs', 'python', 'golang',
              'typescript', 'graphql', 'dynamodb', 'postgresql', 'redis', 'vercel'
            ]}
            showStats={true}
          />
        </div>
      </section>

      {/* Use Cases - Card Deck Style */}
      <section className="py-20 border-t border-border bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Perfect Use Cases for Serverless</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Scenarios where serverless architecture delivers maximum value and cost savings
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-600 to-orange-600 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform opacity-20" />
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-600 to-orange-600 rounded-2xl transform rotate-1 group-hover:rotate-3 transition-transform opacity-40" />
              <div className="relative bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all duration-300">
                <Code className="w-10 h-10 text-yellow-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">REST & GraphQL APIs</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Build scalable APIs that handle millions of requests without server management. Auto-scale from zero to infinity based on demand.
                </p>
                <div className="flex items-center text-sm text-yellow-600 font-semibold">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-600 to-red-600 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform opacity-20" />
              <div className="absolute inset-0 bg-gradient-to-br from-orange-600 to-red-600 rounded-2xl transform rotate-1 group-hover:rotate-3 transition-transform opacity-40" />
              <div className="relative bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all duration-300">
                <Workflow className="w-10 h-10 text-orange-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Background Processing</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Process files, resize images, send emails, generate PDFs - all triggered by events. No servers to maintain, pay per execution.
                </p>
                <div className="flex items-center text-sm text-orange-600 font-semibold">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-red-600 to-pink-600 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform opacity-20" />
              <div className="absolute inset-0 bg-gradient-to-br from-red-600 to-pink-600 rounded-2xl transform rotate-1 group-hover:rotate-3 transition-transform opacity-40" />
              <div className="relative bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all duration-300">
                <Sparkles className="w-10 h-10 text-red-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Webhooks & Integrations</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Receive webhooks from Stripe, Twilio, GitHub. Process payments, notifications, and third-party events instantly at scale.
                </p>
                <div className="flex items-center text-sm text-red-600 font-semibold">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-600 to-purple-600 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform opacity-20" />
              <div className="absolute inset-0 bg-gradient-to-br from-pink-600 to-purple-600 rounded-2xl transform rotate-1 group-hover:rotate-3 transition-transform opacity-40" />
              <div className="relative bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all duration-300">
                <TrendingUp className="w-10 h-10 text-pink-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Data Processing Pipelines</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  ETL pipelines, log processing, analytics aggregation. Process terabytes of data with Lambda and Kinesis without infrastructure.
                </p>
                <div className="flex items-center text-sm text-pink-600 font-semibold">
                  <span>Learn More</span>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Serverless Implementation Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From architecture design to production deployment in weeks, not months
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {[
              {
                step: '01',
                title: 'Architecture Design & Planning',
                description: 'Analyze requirements, design event-driven architecture, choose AWS Lambda vs Azure Functions vs Google Cloud, and plan database strategy (DynamoDB, Aurora Serverless).',
                duration: '1 week',
                icon: Code
              },
              {
                step: '02',
                title: 'Development & Infrastructure as Code',
                description: 'Build Lambda functions in Node.js, Python, or Go. Create Serverless Framework or SAM templates for infrastructure as code with reusable components.',
                duration: '2-4 weeks',
                icon: Zap
              },
              {
                step: '03',
                title: 'API Gateway & Integration',
                description: 'Set up API Gateway with custom domains, Cognito authentication, rate limiting, and caching. Integrate with third-party APIs and services.',
                duration: '1-2 weeks',
                icon: Workflow
              },
              {
                step: '04',
                title: 'Testing & Performance Optimization',
                description: 'Unit and integration tests, load testing with Artillery, optimize cold starts, memory allocation, and implement provisioned concurrency for critical paths.',
                duration: '1 week',
                icon: TrendingUp
              },
              {
                step: '05',
                title: 'Monitoring & Alerting Setup',
                description: 'Configure CloudWatch logs/metrics, X-Ray tracing, error tracking with Sentry, and cost monitoring dashboards to track spending in real-time.',
                duration: '3-5 days',
                icon: Activity
              },
              {
                step: '06',
                title: 'Production Deployment & Support',
                description: 'Deploy to production with CI/CD pipeline, implement gradual rollout, monitor performance, and provide ongoing optimization and support.',
                duration: 'Ongoing',
                icon: Sparkles
              }
            ].map((item, index) => (
              <div key={index} className="relative pl-8 pb-12 border-l-2 border-yellow-600 last:border-0 last:pb-0">
                <div className="absolute left-0 top-0 w-4 h-4 bg-yellow-600 rounded-full -translate-x-[9px]" />
                <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow ml-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="text-3xl font-bold text-yellow-600">{item.step}</div>
                      <div>
                        <h3 className="text-xl font-bold">{item.title}</h3>
                        <p className="text-sm text-muted-foreground flex items-center mt-1">
                          <Clock className="w-4 h-4 mr-1" />
                          {item.duration}
                        </p>
                      </div>
                    </div>
                    <item.icon className="w-8 h-8 text-yellow-600" />
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Calculator Section */}
      <section id="cost-calculator" className="py-20 border-t border-border bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Serverless vs Traditional Server Costs</h2>
              <p className="text-xl text-muted-foreground">
                See how much you can save by going serverless
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Traditional Server */}
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 border-2 border-gray-300 dark:border-gray-700">
                <h3 className="text-2xl font-bold mb-6 text-center">Traditional Server</h3>
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">EC2 Instance (t3.medium)</span>
                    <span className="font-semibold">$30/mo</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Load Balancer</span>
                    <span className="font-semibold">$18/mo</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">RDS Database</span>
                    <span className="font-semibold">$50/mo</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">DevOps Time (20%)</span>
                    <span className="font-semibold">$300/mo</span>
                  </div>
                  <div className="border-t-2 border-gray-300 dark:border-gray-700 pt-4 flex justify-between text-xl font-bold">
                    <span>Total Monthly Cost</span>
                    <span className="text-red-600">$398</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground text-center">Always running, fixed cost even when idle</p>
              </div>

              {/* Serverless */}
              <div className="bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl p-8 text-white border-2 border-yellow-600">
                <h3 className="text-2xl font-bold mb-6 text-center">Serverless (AWS Lambda)</h3>
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span>Lambda (1M requests/mo)</span>
                    <span className="font-semibold">$0.20</span>
                  </div>
                  <div className="flex justify-between">
                    <span>API Gateway (1M requests)</span>
                    <span className="font-semibold">$3.50</span>
                  </div>
                  <div className="flex justify-between">
                    <span>DynamoDB (pay-per-request)</span>
                    <span className="font-semibold">$1.25</span>
                  </div>
                  <div className="flex justify-between">
                    <span>DevOps Time (5%)</span>
                    <span className="font-semibold">$75/mo</span>
                  </div>
                  <div className="border-t-2 border-white/30 pt-4 flex justify-between text-xl font-bold">
                    <span>Total Monthly Cost</span>
                    <span className="text-white">$80</span>
                  </div>
                </div>
                <p className="text-sm text-yellow-100 text-center font-semibold">
                  💰 Save $318/month (80% savings)
                </p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-lg text-muted-foreground">
                <strong>First 1 million requests are FREE every month</strong> on AWS Lambda free tier!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Slider */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Serverless Projects We've Built
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See how we've helped companies save costs and scale infinitely with serverless
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
              What Our Serverless Clients Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real savings and scalability from companies that went serverless with us
            </p>
          </div>
          
          <TestimonialsCarousel testimonials={testimonials} />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-4">
              {[
                {
                  question: 'What is serverless computing and how does it work?',
                  answer: 'Serverless means you write code and deploy it, but don\'t manage servers. The cloud provider (AWS, Azure, Google) runs your code on-demand, scales automatically, and charges only for execution time (milliseconds). You never provision servers, patch OS, or worry about capacity.'
                },
                {
                  question: 'How much does AWS Lambda cost?',
                  answer: 'AWS Lambda free tier includes 1 million requests and 400,000 GB-seconds per month forever. After that, it\'s $0.20 per million requests plus $0.0000166667 per GB-second. Most startups pay $5-50/month for Lambda versus $300+ for traditional servers.'
                },
                {
                  question: 'What are cold starts and how do you solve them?',
                  answer: 'Cold starts occur when Lambda needs to initialize a new container (100-500ms delay). We solve this with provisioned concurrency for critical functions, keeping containers warm. Or use languages like Go/Rust with fast cold starts (<100ms). Most apps don\'t need optimization.'
                },
                {
                  question: 'Can serverless handle high traffic and scale?',
                  answer: 'Absolutely! Lambda scales from zero to thousands of concurrent executions automatically. It can handle millions of requests per second. Companies like Netflix, Coca-Cola, and Airbnb use serverless for production at massive scale.'
                },
                {
                  question: 'What are the limitations of serverless?',
                  answer: 'Lambda has 15-minute max execution time (use Step Functions for longer), 10GB max memory, and 512MB /tmp storage. Not ideal for long-running batch jobs or stateful applications. But perfect for APIs, webhooks, data processing, and event-driven workloads.'
                },
                {
                  question: 'How long does serverless implementation take?',
                  answer: 'Simple API: 1-2 weeks. Complex application with multiple functions, databases, and integrations: 4-8 weeks. Migration from existing backend: 6-12 weeks depending on complexity. Much faster than traditional infrastructure setup.'
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
        title="Ready to Go Serverless and Save 80%?"
        description="Let's build scalable, cost-effective applications with AWS Lambda, Azure Functions, or Google Cloud Functions. Pay only for what you use, scale infinitely, and focus on code - not infrastructure."
        primaryButtonText="Start Serverless Project"
        primaryButtonLink="/contact"
        secondaryButtonText="Calculate Your Savings"
        secondaryButtonLink="#cost-calculator"
        showContactInfo={true}
      />
    </div>
  )
}
