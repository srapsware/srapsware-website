import { Metadata } from 'next'
import Image from 'next/image'
import { 
  Cloud, 
  Server, 
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Shield,
  Zap,
  DollarSign,
  Globe,
  Lock,
  BarChart3,
  RefreshCw
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { PageHero } from '@/components/sections/page-hero'
import TechShowcase from '@/components/animations/tech-showcase'
import { PortfolioSlider } from '@/components/sections/portfolio-slider'
import { TestimonialsCarousel } from '@/components/sections/testimonials-carousel'
import { CTASection } from '@/components/sections/cta-section'
import { getFeaturedPortfolio, getTechnologies, getFeaturedTestimonials } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Cloud Migration Services | AWS, Azure, GCP Migration & Consulting',
  description: 'Migrate your applications and infrastructure to AWS, Azure, or Google Cloud. Zero-downtime migration, cost optimization, security hardening, and ongoing cloud management.',
  keywords: 'cloud migration, AWS migration, Azure migration, Google Cloud migration, cloud consulting, lift and shift, cloud optimization, infrastructure migration',
  openGraph: {
    title: 'Cloud Migration Services | Move to AWS, Azure, GCP',
    description: 'Seamless cloud migration with zero downtime. 60% cost savings, 99.9% uptime, enterprise security.',
    type: 'website',
  }
}

export default function CloudMigrationPage() {
  const projects = getFeaturedPortfolio(6)
  const technologies = getTechnologies()
  const testimonials = getFeaturedTestimonials(6)

  return (
    <main>
      <PageHero
        badge="Cloud Transformation"
        title="Cloud Migration Services"
        description="Migrate to AWS, Azure, or Google Cloud with zero downtime. Reduce infrastructure costs by 60%, scale automatically, and deploy anywhere in the world."
        ctaPrimary={{
          text: "Start Cloud Migration",
          href: "/contact"
        }}
        ctaSecondary={{
          text: "See Benefits",
          href: "#benefits"
        }}
        breadcrumbItems={[
          { label: 'Services', href: '/services' },
          { label: 'Cloud & DevOps' },
          { label: 'Cloud Migration' }
        ]}
      />

      {/* Cloud Providers */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">We Migrate to All Major Cloud Providers</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Certified experts in AWS, Azure, and Google Cloud Platform
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            <div className="bg-gradient-to-br from-orange-500 to-orange-700 rounded-xl p-8 text-white hover:shadow-2xl transition-all">
              <div className="text-6xl mb-4">☁️</div>
              <h3 className="text-2xl font-bold mb-3">Amazon Web Services (AWS)</h3>
              <p className="text-orange-100 mb-4 leading-relaxed">
                Market leader with 200+ services. Best for: scalability, global reach, mature ecosystem.
              </p>
              <ul className="space-y-2 text-sm text-orange-100">
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>EC2, Lambda, ECS, EKS</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>RDS, DynamoDB, S3</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>CloudFront, Route 53</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl p-8 text-white hover:shadow-2xl transition-all">
              <div className="text-6xl mb-4">☁️</div>
              <h3 className="text-2xl font-bold mb-3">Microsoft Azure</h3>
              <p className="text-blue-100 mb-4 leading-relaxed">
                Best for Windows/.NET workloads and enterprise integration. Seamless Office 365 integration.
              </p>
              <ul className="space-y-2 text-sm text-blue-100">
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>VMs, App Service, AKS</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>SQL Database, Cosmos DB</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Active Directory integration</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-500 to-green-700 rounded-xl p-8 text-white hover:shadow-2xl transition-all">
              <div className="text-6xl mb-4">☁️</div>
              <h3 className="text-2xl font-bold mb-3">Google Cloud Platform (GCP)</h3>
              <p className="text-green-100 mb-4 leading-relaxed">
                Best for data analytics, ML/AI, and Kubernetes. Strong pricing and open-source tools.
              </p>
              <ul className="space-y-2 text-sm text-green-100">
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Compute Engine, GKE, Cloud Run</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>BigQuery, Cloud SQL, Firestore</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>TensorFlow, Vertex AI</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 via-cyan-600 to-sky-600 rounded-2xl p-8 text-white">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">300+</div>
                <div className="text-blue-100">Cloud Migrations</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">60%</div>
                <div className="text-blue-100">Average Cost Savings</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">99.9%</div>
                <div className="text-blue-100">Uptime SLA</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">12 weeks</div>
                <div className="text-blue-100">Average Migration Time</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="py-20 border-t border-border bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Migrate to the Cloud?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real business benefits beyond just moving servers
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: DollarSign,
                title: '60% Cost Reduction',
                description: 'Pay only for what you use. No upfront hardware costs. Auto-scaling reduces waste. Reserved instances for predictable workloads.',
                color: 'green'
              },
              {
                icon: Zap,
                title: 'Deploy in Minutes',
                description: 'Spin up new servers in seconds, not weeks. Infrastructure as code (Terraform). CI/CD pipelines for instant deployments.',
                color: 'yellow'
              },
              {
                icon: Globe,
                title: 'Global Scale',
                description: 'Deploy to 30+ regions worldwide. CDN for fast content delivery. Multi-region redundancy and failover.',
                color: 'blue'
              },
              {
                icon: TrendingUp,
                title: 'Auto-Scaling',
                description: 'Handle traffic spikes automatically. Scale up during peak, scale down at night. Never pay for idle capacity.',
                color: 'purple'
              },
              {
                icon: Shield,
                title: 'Enterprise Security',
                description: 'Built-in DDoS protection. Compliance (SOC 2, HIPAA, PCI). Data encryption at rest and in transit.',
                color: 'red'
              },
              {
                icon: RefreshCw,
                title: 'Disaster Recovery',
                description: 'Automated backups and snapshots. Multi-region replication. RTO under 4 hours, RPO under 15 minutes.',
                color: 'orange'
              }
            ].map((item, index) => (
              <div key={index} className={cn(
                "group relative overflow-hidden rounded-xl p-6 border-2 hover:shadow-xl transition-all duration-300",
                `border-${item.color}-200 dark:border-${item.color}-800 bg-${item.color}-50/50 dark:bg-${item.color}-950/20`
              )}>
                <item.icon className={cn("w-12 h-12 mb-4", `text-${item.color}-600`)} />
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-4">
          <TechShowcase 
            technologies={technologies}
            title="Cloud Migration Technology Stack"
            subtitle="Tools and platforms we use for seamless cloud migration"
            filterSlugs={[
              'aws', 'azure', 'gcp', 'docker', 'kubernetes',
              'terraform', 'ansible', 'jenkins', 'gitlab', 'redis'
            ]}
            showStats={true}
          />
        </div>
      </section>

      {/* Migration Process */}
      <section className="py-20 border-t border-border bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Cloud Migration Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Proven methodology for zero-downtime cloud migration
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {[
              {
                step: '01',
                title: 'Discovery & Assessment',
                description: 'Audit current infrastructure, applications, and dependencies. Document server specs, network topology, and data volumes. Calculate TCO comparison (on-premise vs cloud). Identify migration candidates and complexity.',
                duration: '1-2 weeks',
                icon: BarChart3
              },
              {
                step: '02',
                title: 'Cloud Architecture Design',
                description: 'Design cloud architecture (VPC, subnets, security groups). Choose compute (VMs, containers, serverless), storage, and database services. Plan disaster recovery, backup strategy, and monitoring. Cost optimization with right-sizing and reserved instances.',
                duration: '2-3 weeks',
                icon: Cloud
              },
              {
                step: '03',
                title: 'Proof of Concept',
                description: 'Migrate one non-critical application as pilot. Test performance, security, and integrations. Validate migration process and tools. Estimate time and cost for full migration.',
                duration: '2-4 weeks',
                icon: Zap
              },
              {
                step: '04',
                title: 'Migration Execution',
                description: 'Migrate applications in waves (low-risk first). Use CloudEndure, AWS DMS, or Azure Migrate for automated migration. Run old and new systems in parallel for validation. Gradual DNS/traffic cutover with rollback capability.',
                duration: '4-12 weeks',
                icon: RefreshCw
              },
              {
                step: '05',
                title: 'Testing & Optimization',
                description: 'Performance testing under production load. Security audit and penetration testing. Cost optimization (rightsizing, spot instances, storage tiering). Set up monitoring, logging, and alerting.',
                duration: '2-3 weeks',
                icon: Shield
              },
              {
                step: '06',
                title: 'Cutover & Support',
                description: 'Final production cutover during maintenance window. 24/7 monitoring for first 30 days. Hypercare support for critical issues. Decommission old infrastructure after 60-day parallel run.',
                duration: '1 month',
                icon: CheckCircle2
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
                          <Zap className="w-4 h-4 mr-1" />
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

      {/* Portfolio */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Cloud Migration Success Stories
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Enterprises we've successfully migrated to the cloud
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
              What Our Cloud Clients Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real results from businesses that migrated to the cloud
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
                  question: 'How much does cloud migration cost?',
                  answer: 'Migration project: $50K-200K depending on infrastructure complexity and app count. Monthly cloud costs: typically 40-60% less than on-premise (no hardware, power, cooling, maintenance staff). We provide detailed TCO analysis upfront. AWS/Azure offer migration incentives and credits. ROI achieved in 12-18 months through reduced operational costs.'
                },
                {
                  question: 'How long does migration take?',
                  answer: 'Simple migration (5-10 servers, basic apps): 6-8 weeks. Medium migration (20-50 servers, databases, complex apps): 10-16 weeks. Large migration (100+ servers, mainframes, legacy systems): 6-12 months. We use phased approach: pilot (2-4 weeks) then incremental waves. Business operates normally throughout - zero downtime.'
                },
                {
                  question: 'Which cloud provider should I choose?',
                  answer: 'AWS: Best for scalability, global reach, mature services (market leader). Azure: Best for Windows/.NET apps, Office 365 integration, hybrid cloud. GCP: Best for data analytics, ML/AI, Kubernetes, competitive pricing. We assess your workloads, budget, and requirements to recommend the best fit. Multi-cloud strategy is also an option for different workloads.'
                },
                {
                  question: 'Will migration disrupt my business?',
                  answer: 'No! We use zero-downtime migration strategies: 1) Replicate data to cloud in background, 2) Run old and new systems in parallel, 3) Gradual traffic cutover (5-10-20-50-100%), 4) Instant rollback if issues, 5) Cutover during low-traffic window. Users experience no downtime. Full parallel run for 30-60 days before decommissioning old infrastructure.'
                },
                {
                  question: 'How do you ensure data security during migration?',
                  answer: 'Security measures: 1) Encrypted VPN tunnel for data transfer, 2) End-to-end encryption (TLS 1.3), 3) Compliance with SOC 2, HIPAA, PCI standards, 4) IAM roles and least privilege access, 5) Security group rules and network isolation, 6) Complete backup before migration, 7) Data validation post-migration, 8) Penetration testing in cloud environment. Cloud providers have more security resources than most on-premise setups.'
                },
                {
                  question: 'What ongoing support do you provide?',
                  answer: 'Included: 30-day hypercare support post-migration (24/7 critical issue response, optimization, cost analysis). Optional: Managed cloud services ($3K-20K/month) for: Infrastructure management, monitoring and alerting, security updates, backup management, cost optimization, 24/7 support, disaster recovery testing. Also offer cloud training for your IT team.'
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
        title="Ready to Move to the Cloud?"
        description="Stop paying for underutilized servers and expensive data centers. Migrate to AWS, Azure, or GCP for better performance, lower costs, and global scale."
        primaryButtonText="Start Cloud Migration"
        primaryButtonLink="/contact"
        secondaryButtonText="See Benefits"
        secondaryButtonLink="#benefits"
        showContactInfo={true}
      />
    </main>
  )
}
