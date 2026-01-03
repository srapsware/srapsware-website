import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { 
  BarChart3, 
  TrendingUp, 
  PieChart, 
  Activity,
  ArrowRight,
  CheckCircle2,
  Database,
  Zap,
  Brain,
  Target,
  LineChart,
  Eye
} from 'lucide-react'
import { cn } from '@/lib/utils'
import TechShowcase from '@/components/animations/tech-showcase'
import { PortfolioSlider } from '@/components/sections/portfolio-slider'
import { TestimonialsCarousel } from '@/components/sections/testimonials-carousel'
import { CTASection } from '@/components/sections/cta-section'
import { getFeaturedPortfolio, getTechnologies, getFeaturedTestimonials } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Business Intelligence & Data Analytics Services | Custom BI Solutions',
  description: 'Build custom dashboards, real-time analytics, data warehouses, and BI platforms. Transform raw data into actionable insights with Power BI, Tableau, custom solutions.',
  keywords: 'business intelligence, data analytics, BI dashboards, Power BI, Tableau, data warehouse, ETL, data visualization, custom analytics, reporting',
  openGraph: {
    title: 'Business Intelligence & Analytics | Data-Driven Insights',
    description: 'Custom BI solutions that turn your data into competitive advantage. Real-time dashboards, predictive analytics, automated reporting.',
    type: 'website',
  }
}

export default function BusinessIntelligencePage() {
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
            <span className="text-foreground font-medium">Business Intelligence</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50 dark:from-violet-950/20 dark:via-purple-950/20 dark:to-fuchsia-950/20" />
        <div className="absolute inset-0 bg-grid-slate-900/[0.04] dark:bg-grid-slate-400/[0.05] bg-[size:32px_32px]" />
        
        <div className="absolute top-20 left-10 w-72 h-72 bg-violet-400/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-fuchsia-400/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-4 px-4 py-1.5 bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 rounded-full text-sm font-medium">
                📊 Data & Analytics
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent">
                Business Intelligence & Analytics
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                Transform raw data into actionable insights. Custom dashboards, real-time analytics, predictive models, and automated reporting - all in one platform.
              </p>

              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center p-4 rounded-lg bg-white/50 dark:bg-black/20 backdrop-blur-sm border border-white/20">
                  <div className="text-3xl font-bold text-violet-600">10TB+</div>
                  <div className="text-sm text-muted-foreground">Data Analyzed</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-white/50 dark:bg-black/20 backdrop-blur-sm border border-white/20">
                  <div className="text-3xl font-bold text-purple-600">Real-time</div>
                  <div className="text-sm text-muted-foreground">Updates</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-white/50 dark:bg-black/20 backdrop-blur-sm border border-white/20">
                  <div className="text-3xl font-bold text-fuchsia-600">90%</div>
                  <div className="text-sm text-muted-foreground">Faster Insights</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200"
                >
                  Build Your BI Platform
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link 
                  href="#capabilities"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-violet-600 text-violet-600 dark:text-violet-400 rounded-lg font-semibold hover:bg-violet-50 dark:hover:bg-violet-950/30 transition-all duration-200"
                >
                  See Capabilities
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 backdrop-blur-sm">
                <Image
                  src="https://picsum.photos/800/600?random=bi-dashboard"
                  alt="Business Intelligence Dashboard with Real-time Analytics"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                  priority
                />
                <div className="absolute top-6 right-6 bg-white/90 dark:bg-black/90 backdrop-blur-md px-4 py-2 rounded-lg shadow-lg border border-white/20">
                  <div className="flex items-center space-x-2">
                    <BarChart3 className="w-5 h-5 text-violet-500 animate-pulse" />
                    <span className="font-semibold text-sm">Live Data</span>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex items-center space-x-4 bg-white dark:bg-gray-900 px-6 py-3 rounded-full shadow-xl border border-gray-200 dark:border-gray-800">
                <BarChart3 className="w-6 h-6 text-violet-600" />
                <PieChart className="w-6 h-6 text-purple-600" />
                <TrendingUp className="w-6 h-6 text-fuchsia-600" />
                <Activity className="w-6 h-6 text-pink-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Custom BI */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Build Custom BI Solutions?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Generic BI tools show you data. Custom BI gives you answers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
            <div className="bg-red-50 dark:bg-red-950/20 border-2 border-red-200 dark:border-red-800 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4 text-red-900 dark:text-red-100">❌ With Generic BI (Power BI, Tableau)</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start space-x-2">
                  <span className="text-red-600 mt-1">•</span>
                  <span>Per-user licensing ($15-70/user/month) gets expensive</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-red-600 mt-1">•</span>
                  <span>Generic dashboards - not tailored to your KPIs</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-red-600 mt-1">•</span>
                  <span>Complex learning curve for end-users</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-red-600 mt-1">•</span>
                  <span>Limited customization and branding options</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-red-600 mt-1">•</span>
                  <span>Difficult to embed in your apps</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-red-600 mt-1">•</span>
                  <span>Data refresh delays (15-30 min typical)</span>
                </li>
              </ul>
            </div>

            <div className="bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4 text-green-900 dark:text-green-100">✅ With Custom BI</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start space-x-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>Fixed cost - unlimited users and dashboards</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>Dashboards designed for YOUR metrics and workflows</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>Intuitive UI = instant user adoption</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>100% customizable to match your brand and needs</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>Seamlessly embedded in existing applications</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>Real-time data updates (&lt;1 second)</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 rounded-2xl p-8 text-white">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">200+</div>
                <div className="text-violet-100">BI Platforms Built</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">10TB+</div>
                <div className="text-violet-100">Data Processed Daily</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">90%</div>
                <div className="text-violet-100">Faster Decision Making</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">&lt;1s</div>
                <div className="text-violet-100">Query Response Time</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BI Capabilities */}
      <section id="capabilities" className="py-20 border-t border-border bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Complete BI Capabilities</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to turn data into competitive advantage
            </p>
          </div>

          <div className="grid md:grid-cols-12 gap-6">
            <div className="md:col-span-8 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-violet-500 to-violet-700 p-8 text-white hover:shadow-2xl transition-all duration-300">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform translate-x-32 -translate-y-32 group-hover:scale-150 transition-transform duration-500" />
              <div className="relative z-10">
                <BarChart3 className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold mb-3">Interactive Dashboards</h3>
                <p className="text-violet-100 mb-4 text-lg leading-relaxed">
                  Drag-and-drop widgets, drill-down capabilities, custom date ranges, filters, and real-time data updates. Mobile-responsive dashboards accessible anywhere. Role-based views showing relevant KPIs for each team. Export to PDF/Excel for stakeholder reports.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="text-sm">Drag & Drop</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="text-sm">Real-time</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="text-sm">Mobile Ready</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-4 md:row-span-2 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-500 to-purple-700 p-8 text-white hover:shadow-2xl transition-all duration-300">
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl transform -translate-x-24 translate-y-24 group-hover:scale-150 transition-transform duration-500" />
              <div className="relative z-10 h-full flex flex-col">
                <Brain className="w-12 h-12 mb-4 group-hover:rotate-12 transition-transform" />
                <h3 className="text-2xl font-bold mb-3">Predictive Analytics</h3>
                <p className="text-purple-100 mb-4 leading-relaxed flex-grow">
                  Machine learning models for forecasting sales, churn prediction, anomaly detection, and trend analysis. Automated alerts when metrics deviate from expected patterns.
                </p>
                <div className="space-y-2 mt-auto">
                  <div className="flex items-center justify-between bg-white/10 rounded-lg p-2">
                    <span className="text-sm">Forecasting</span>
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div className="flex items-center justify-between bg-white/10 rounded-lg p-2">
                    <span className="text-sm">Anomalies</span>
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div className="flex items-center justify-between bg-white/10 rounded-lg p-2">
                    <span className="text-sm">Smart Alerts</span>
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-4 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-fuchsia-500 to-fuchsia-700 p-6 text-white hover:shadow-2xl transition-all duration-300">
              <Database className="w-10 h-10 mb-3 group-hover:rotate-180 transition-transform duration-500" />
              <h3 className="text-xl font-bold mb-2">Data Warehousing</h3>
              <p className="text-fuchsia-100 text-sm leading-relaxed">
                Centralized data lake/warehouse combining data from all sources (ERP, CRM, databases)
              </p>
            </div>

            <div className="md:col-span-4 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-pink-500 to-pink-700 p-6 text-white hover:shadow-2xl transition-all duration-300">
              <Zap className="w-10 h-10 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2">ETL Pipelines</h3>
              <p className="text-pink-100 text-sm leading-relaxed">
                Extract, Transform, Load data from multiple sources with automated scheduling
              </p>
            </div>

            <div className="md:col-span-8 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-rose-500 to-rose-700 p-8 text-white hover:shadow-2xl transition-all duration-300">
              <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform -translate-x-32 -translate-y-32 group-hover:scale-150 transition-transform duration-500" />
              <div className="relative z-10">
                <LineChart className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold mb-3">Custom Visualizations</h3>
                <p className="text-rose-100 mb-4 text-lg leading-relaxed">
                  Bar charts, line graphs, pie charts, heatmaps, geographic maps, funnel charts, gauge meters, and custom visualizations specific to your industry. Interactive legends, tooltips, zoom/pan capabilities. Consistent branding and color schemes across all charts.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="text-sm">20+ Chart Types</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="text-sm">Interactive</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="text-sm">Branded</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-4 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-red-500 to-red-700 p-6 text-white hover:shadow-2xl transition-all duration-300">
              <Target className="w-10 h-10 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2">KPI Tracking</h3>
              <p className="text-red-100 text-sm leading-relaxed">
                Define and monitor custom KPIs with targets, thresholds, and trend indicators
              </p>
            </div>

            <div className="md:col-span-4 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-orange-500 to-orange-700 p-6 text-white hover:shadow-2xl transition-all duration-300">
              <Activity className="w-10 h-10 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2">Scheduled Reports</h3>
              <p className="text-orange-100 text-sm leading-relaxed">
                Automated email reports (daily/weekly/monthly) with PDF attachments and Excel data
              </p>
            </div>

            <div className="md:col-span-4 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-yellow-500 to-yellow-700 p-6 text-white hover:shadow-2xl transition-all duration-300">
              <Eye className="w-10 h-10 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2">Self-Service BI</h3>
              <p className="text-yellow-100 text-sm leading-relaxed">
                Empower users to build their own reports without IT help using intuitive query builder
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
            title="BI & Analytics Technology Stack"
            subtitle="Modern tools for building scalable data platforms"
            filterSlugs={[
              'python', 'react', 'nodejs', 'postgresql', 'mongodb',
              'redis', 'elasticsearch', 'aws', 'docker', 'tableau'
            ]}
            showStats={true}
          />
        </div>
      </section>

      {/* Development Process */}
      <section className="py-20 border-t border-border bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">BI Development Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From data discovery to production deployment in 8-16 weeks
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {[
              {
                step: '01',
                title: 'Data Discovery & KPI Definition',
                description: 'Audit all data sources (databases, APIs, files). Identify key metrics and KPIs for each department. Define data quality requirements and governance policies.',
                duration: '1-2 weeks',
                icon: Database
              },
              {
                step: '02',
                title: 'Data Warehouse Design',
                description: 'Design star/snowflake schema for optimal query performance. Set up data lake/warehouse on AWS Redshift, Snowflake, or BigQuery. Plan ETL pipelines for data ingestion.',
                duration: '1-2 weeks',
                icon: Target
              },
              {
                step: '03',
                title: 'ETL Development',
                description: 'Build data pipelines to extract from sources, transform/clean data, and load into warehouse. Schedule automated jobs for batch processing. Handle incremental updates efficiently.',
                duration: '3-4 weeks',
                icon: Zap
              },
              {
                step: '04',
                title: 'Dashboard & Visualization',
                description: 'Design and build interactive dashboards with drill-down capabilities. Create custom visualizations for your specific metrics. Implement role-based access control.',
                duration: '3-5 weeks',
                icon: BarChart3
              },
              {
                step: '05',
                title: 'ML & Predictive Models (Optional)',
                description: 'Train machine learning models for forecasting, anomaly detection, churn prediction. Integrate models into dashboards for real-time predictions and automated alerts.',
                duration: '2-4 weeks',
                icon: Brain
              },
              {
                step: '06',
                title: 'Testing & Deployment',
                description: 'Validate data accuracy against source systems. Load testing for performance at scale. User training and documentation. Production deployment with monitoring.',
                duration: '1-2 weeks',
                icon: CheckCircle2
              }
            ].map((item, index) => (
              <div key={index} className="relative pl-8 pb-12 border-l-2 border-violet-600 last:border-0 last:pb-0">
                <div className="absolute left-0 top-0 w-4 h-4 bg-violet-600 rounded-full -translate-x-[9px]" />
                <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow ml-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="text-3xl font-bold text-violet-600">{item.step}</div>
                      <div>
                        <h3 className="text-xl font-bold">{item.title}</h3>
                        <p className="text-sm text-muted-foreground flex items-center mt-1">
                          <Zap className="w-4 h-4 mr-1" />
                          {item.duration}
                        </p>
                      </div>
                    </div>
                    <item.icon className="w-8 h-8 text-violet-600" />
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
              BI Platforms We've Built
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Custom analytics solutions transforming business decision-making
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
              What Our BI Clients Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real results from data-driven organizations
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
                  question: 'How much does custom BI development cost?',
                  answer: 'Basic dashboards (5-10 reports): $30K-60K. Mid-size BI platform (data warehouse, 20+ dashboards, ETL): $60K-150K. Enterprise BI (ML models, real-time, self-service): $150K-300K+. Compare to Power BI: 100 users × $20/mo × 36 months = $72K subscription + $50K+ implementation. Custom BI pays for itself in 12-24 months with unlimited users.'
                },
                {
                  question: 'What data sources can you connect?',
                  answer: 'Databases: PostgreSQL, MySQL, SQL Server, Oracle, MongoDB, Cassandra. Cloud: AWS S3, Azure Blob, Google Cloud Storage. SaaS: Salesforce, HubSpot, Stripe, Google Analytics. Files: CSV, Excel, JSON, XML, Parquet. APIs: REST/GraphQL from any service. ERP: SAP, NetSuite, Dynamics. Custom: Any system with data export or API access.'
                },
                {
                  question: 'Can you work with Power BI or Tableau?',
                  answer: 'Yes! We offer: 1) Custom dashboard development in Power BI/Tableau (if you already have licenses), 2) Data warehouse + ETL to feed Power BI/Tableau, 3) Custom connectors for proprietary data sources, 4) Embedded analytics (Power BI/Tableau embedded in your app), 5) Migration from one BI tool to another. We also build fully custom BI when Power BI/Tableau limitations are blockers.'
                },
                {
                  question: 'How do you handle real-time analytics?',
                  answer: 'Real-time approaches: 1) WebSocket connections for live dashboard updates (<1 second latency), 2) Event streaming with Kafka/RabbitMQ for high-volume data ingestion, 3) In-memory databases (Redis, Memcached) for fast queries, 4) CDC (Change Data Capture) for real-time database replication, 5) Materialized views and pre-aggregated tables for instant query response. Typical latency: <1 second from source data change to dashboard update.'
                },
                {
                  question: 'Do you provide data science and ML services?',
                  answer: 'Yes! We build: 1) Predictive models (sales forecasting, churn prediction, demand planning), 2) Anomaly detection (fraud, system errors, quality issues), 3) Classification models (customer segmentation, lead scoring), 4) NLP for text analytics (sentiment analysis, topic extraction), 5) Recommendation engines (product recommendations, content suggestions). Models deployed as APIs or integrated directly into dashboards with AutoML retraining.'
                },
                {
                  question: 'What ongoing support do you provide?',
                  answer: 'Included: 3-month post-launch support (bug fixes, dashboard tweaks, data pipeline monitoring). Optional: Monthly retainer ($3K-15K) for: New dashboards/reports, new data source connections, ML model retraining, performance optimization, user training, 24/7 monitoring. Also offer data warehouse management, ETL maintenance, and BI consulting services.'
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
        title="Ready to Make Data-Driven Decisions?"
        description="Stop drowning in spreadsheets and disconnected reports. Build a custom BI platform that gives your team the insights they need, when they need them."
        primaryButtonText="Build Your BI Platform"
        primaryButtonLink="/contact"
        secondaryButtonText="See Capabilities"
        secondaryButtonLink="#capabilities"
        showContactInfo={true}
      />
    </div>
  )
}
