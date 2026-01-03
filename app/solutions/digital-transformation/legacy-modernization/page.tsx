import { Metadata } from 'next'
import Image from 'next/image'
import { 
  RefreshCw, 
  Server, 
  Cloud, 
  Code,
  ArrowRight,
  CheckCircle2,
  Database,
  Zap,
  Shield,
  TrendingUp,
  AlertTriangle,
  Wrench
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { PageHero } from '@/components/sections/page-hero'
import TechShowcase from '@/components/animations/tech-showcase'
import { PortfolioSlider } from '@/components/sections/portfolio-slider'
import { TestimonialsCarousel } from '@/components/sections/testimonials-carousel'
import { CTASection } from '@/components/sections/cta-section'
import { getFeaturedPortfolio, getTechnologies, getFeaturedTestimonials } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Legacy System Modernization Services | Migrate Old Systems to Modern Tech',
  description: 'Modernize legacy applications built on outdated technology. Migrate COBOL, mainframe, VB6, old PHP/Java to modern cloud-native architectures without business disruption.',
  keywords: 'legacy modernization, system migration, COBOL migration, mainframe modernization, application reengineering, technical debt, cloud migration, legacy code',
  openGraph: {
    title: 'Legacy System Modernization | Transform Old Tech to Modern Cloud',
    description: 'Migrate legacy systems to modern architectures without disrupting your business. Reduce costs, improve security, enable innovation.',
    type: 'website',
  }
}

export default function LegacyModernizationPage() {
  const projects = getFeaturedPortfolio(6)
  const technologies = getTechnologies()
  const testimonials = getFeaturedTestimonials(6)

  return (
    <main>
      <PageHero
        badge="🔄 System Modernization"
        title="Legacy System Modernization"
        description="Transform legacy applications into modern, cloud-native systems. Reduce maintenance costs, improve security, and unlock innovation - without business disruption."
        ctaPrimary={{
          text: "Start Modernization",
          href: "/contact"
        }}
        ctaSecondary={{
          text: "See Approaches",
          href: "#approaches"
        }}
        breadcrumbItems={[
          { label: 'Solutions', href: '/solutions' },
          { label: 'Digital Transformation' },
          { label: 'Legacy Modernization' }
        ]}
      />

      {/* Signs You Need Modernization */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Is Your Legacy System Holding You Back?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Warning signs that it's time to modernize
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {[
              {
                icon: AlertTriangle,
                title: 'High Maintenance Costs',
                description: 'Spending $100K+/year maintaining old code. Hard to find developers who know COBOL, VB6, or legacy Java.',
                color: 'red'
              },
              {
                icon: Shield,
                title: 'Security Vulnerabilities',
                description: 'Old frameworks with unpatched security holes. Failed compliance audits (PCI, HIPAA, SOC 2). No modern encryption.',
                color: 'orange'
              },
              {
                icon: TrendingUp,
                title: 'Cannot Scale',
                description: 'System crashes under load. Cannot handle mobile traffic or API integrations. Monolithic architecture impossible to scale.',
                color: 'amber'
              },
              {
                icon: Code,
                title: 'Slow Development',
                description: 'New features take months instead of weeks. Every change breaks something else. No automated testing or CI/CD.',
                color: 'yellow'
              },
              {
                icon: Database,
                title: 'Data Silos',
                description: 'Data locked in old databases. Cannot integrate with modern tools (Salesforce, analytics, APIs). Manual data exports.',
                color: 'rose'
              },
              {
                icon: Wrench,
                title: 'Technical Debt',
                description: 'Code written 10-20+ years ago with no documentation. Original developers long gone. Band-aid fixes everywhere.',
                color: 'red'
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

          <div className="bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 rounded-2xl p-8 text-white">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">100+</div>
                <div className="text-amber-100">Systems Modernized</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">70%</div>
                <div className="text-amber-100">Cost Reduction</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">10x</div>
                <div className="text-amber-100">Faster Deployment</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">Zero</div>
                <div className="text-amber-100">Business Disruption</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modernization Approaches */}
      <section id="approaches" className="py-20 border-t border-border bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Modernization Strategies</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We choose the right approach based on your business needs, budget, and risk tolerance
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border-2 border-amber-200 dark:border-amber-800 hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-lg flex items-center justify-center mb-4">
                <RefreshCw className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">1. Replatform (Lift & Shift)</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                Move existing application to modern infrastructure (AWS, Azure, GCP) with minimal code changes. Quick migration with lowest risk.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0" />
                  <span><strong>Timeline:</strong> 2-4 months</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0" />
                  <span><strong>Cost:</strong> $$$</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0" />
                  <span><strong>Best for:</strong> Quick cloud benefits</span>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border-2 border-orange-200 dark:border-orange-800 hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center mb-4">
                <Code className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">2. Refactor (Optimize)</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                Rewrite portions of the codebase to use modern frameworks and cloud services while keeping core logic. Balance of speed and improvement.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-orange-600 flex-shrink-0" />
                  <span><strong>Timeline:</strong> 4-8 months</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-orange-600 flex-shrink-0" />
                  <span><strong>Cost:</strong> $$$$$</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-orange-600 flex-shrink-0" />
                  <span><strong>Best for:</strong> Improving performance</span>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border-2 border-red-200 dark:border-red-800 hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">3. Rebuild (Greenfield)</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                Build new application from scratch using modern tech stack, replicating business logic. Maximum benefits but higher risk and cost.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-red-600 flex-shrink-0" />
                  <span><strong>Timeline:</strong> 8-18 months</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-red-600 flex-shrink-0" />
                  <span><strong>Cost:</strong> $$$$$$</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-red-600 flex-shrink-0" />
                  <span><strong>Best for:</strong> Complete transformation</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800 rounded-xl p-6 max-w-4xl mx-auto">
            <h3 className="text-xl font-bold mb-3 flex items-center">
              <Zap className="w-6 h-6 mr-2 text-blue-600" />
              Our Recommendation: Hybrid Approach
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Start with <strong>Replatform</strong> for quick cloud benefits and cost savings. Then <strong>Refactor</strong> critical modules incrementally (Strangler Fig pattern). This minimizes risk while delivering continuous value. Final <strong>Rebuild</strong> only if absolutely necessary.
            </p>
          </div>
        </div>
      </section>

      {/* What We Modernize */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Systems We Modernize</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From mainframes to monoliths - we've migrated them all
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'COBOL & Mainframe',
                examples: 'IBM z/OS, CICS, DB2, AS/400',
                target: 'Cloud-native microservices',
                icon: Server
              },
              {
                title: 'Legacy Windows Apps',
                examples: 'VB6, Delphi, Foxpro, PowerBuilder',
                target: 'Web-based SaaS applications',
                icon: Code
              },
              {
                title: 'Old PHP/Java/.NET',
                examples: 'PHP 5, Java 6/7, .NET 2.0',
                target: 'Modern frameworks (Laravel, Spring Boot, .NET 8)',
                icon: RefreshCw
              },
              {
                title: 'Outdated Databases',
                examples: 'Access, FoxPro, dBase, Oracle 9i',
                target: 'PostgreSQL, MongoDB, modern cloud databases',
                icon: Database
              }
            ].map((item, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all">
                <item.icon className="w-10 h-10 text-amber-600 mb-4" />
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground mb-2">{item.examples}</p>
                <div className="flex items-center text-xs text-green-600 dark:text-green-400 font-semibold mt-3">
                  <ArrowRight className="w-4 h-4 mr-1" />
                  {item.target}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 border-t border-border bg-muted/30">
        <div className="container mx-auto px-4">
          <TechShowcase 
            technologies={technologies}
            title="Modern Technology Stack"
            subtitle="What we migrate your legacy systems to"
            filterSlugs={[
              'react', 'nextjs', 'nodejs', 'python', 'java',
              'postgresql', 'mongodb', 'aws', 'docker', 'kubernetes'
            ]}
            showStats={true}
          />
        </div>
      </section>

      {/* Migration Process */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Modernization Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Zero-downtime migration with continuous business operations
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {[
              {
                step: '01',
                title: 'Discovery & Assessment',
                description: 'Audit existing system architecture, codebase, dependencies, and data models. Document business logic, integration points, and user workflows. Evaluate modernization approaches (replatform, refactor, rebuild) and create ROI analysis.',
                duration: '2-4 weeks',
                icon: Server
              },
              {
                step: '02',
                title: 'Strategy & Roadmap',
                description: 'Choose modernization strategy (hybrid recommended). Design new architecture (microservices, cloud-native, APIs). Create phased migration plan with milestones. Define success metrics and rollback procedures.',
                duration: '2-3 weeks',
                icon: Code
              },
              {
                step: '03',
                title: 'Pilot Migration',
                description: 'Select low-risk module for pilot migration. Build proof-of-concept in new technology stack. Test data migration, integration points, and performance. Validate approach before full-scale migration.',
                duration: '4-8 weeks',
                icon: RefreshCw
              },
              {
                step: '04',
                title: 'Incremental Migration',
                description: 'Migrate system module-by-module (Strangler Fig pattern). Run old and new systems in parallel. Gradual traffic cutover with A/B testing. Continuous validation and rollback capability.',
                duration: '3-12 months',
                icon: Zap
              },
              {
                step: '05',
                title: 'Testing & Validation',
                description: 'Comprehensive testing: functional, performance, security, integration. User acceptance testing (UAT) with stakeholders. Load testing to ensure new system can handle production traffic. Data integrity validation.',
                duration: '2-4 weeks',
                icon: Shield
              },
              {
                step: '06',
                title: 'Cutover & Support',
                description: 'Final production cutover during low-traffic window. 24/7 monitoring for first 30 days. Hypercare support for critical issues. Post-migration optimization and legacy system decommissioning.',
                duration: '1-2 months',
                icon: TrendingUp
              }
            ].map((item, index) => (
              <div key={index} className="relative pl-8 pb-12 border-l-2 border-amber-600 last:border-0 last:pb-0">
                <div className="absolute left-0 top-0 w-4 h-4 bg-amber-600 rounded-full -translate-x-[9px]" />
                <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow ml-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="text-3xl font-bold text-amber-600">{item.step}</div>
                      <div>
                        <h3 className="text-xl font-bold">{item.title}</h3>
                        <p className="text-sm text-muted-foreground flex items-center mt-1">
                          <Zap className="w-4 h-4 mr-1" />
                          {item.duration}
                        </p>
                      </div>
                    </div>
                    <item.icon className="w-8 h-8 text-amber-600" />
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-20 border-t border-border bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Modernization Success Stories
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Legacy systems we've transformed for enterprise clients
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
              What Our Modernization Clients Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real results from businesses that modernized their legacy systems
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
                  question: 'How much does legacy modernization cost?',
                  answer: 'Replatform (lift & shift): $75K-200K for cloud migration with minimal code changes. Refactor: $200K-500K for rewriting critical modules with modern frameworks. Rebuild: $500K-2M+ for complete application rewrite. ROI typically achieved in 12-24 months through reduced maintenance costs (70% savings), faster development (10x), and cloud infrastructure savings (60%).'
                },
                {
                  question: 'How long does modernization take?',
                  answer: 'Replatform: 2-4 months for cloud migration. Refactor: 4-8 months for incremental modernization of key modules. Rebuild: 8-18 months for complete rewrite. We use phased approach: pilot migration (1-2 months) → incremental rollout (3-12 months) → production cutover (1 month). Business continues operating throughout - zero downtime.'
                },
                {
                  question: 'What happens to our data during migration?',
                  answer: 'Data safety is priority #1: 1) Complete backup before migration, 2) Incremental data sync (old to new), 3) Parallel run (both systems active), 4) Data validation (compare old vs new), 5) Gradual cutover (low-risk modules first), 6) Rollback capability at each phase. We have migrated 50TB+ of data with 100% accuracy. Typical data downtime: 0-4 hours during final cutover.'
                },
                {
                  question: 'Will modernization disrupt our business?',
                  answer: 'No! We use Strangler Fig pattern: build new system alongside old, gradually migrate traffic, keep old system as fallback. Users continue working normally throughout migration. Cutover happens in phases (by module/feature), not all at once. Final cutover scheduled during low-traffic window with rollback plan. Risk mitigation: pilot migrations, parallel runs, comprehensive testing, 24/7 support during cutover.'
                },
                {
                  question: 'Can you migrate COBOL/mainframe applications?',
                  answer: 'Yes! We have migrated 30+ COBOL/mainframe systems to modern cloud platforms. Process: 1) Reverse engineer COBOL business logic, 2) Document data structures (VSAM, DB2), 3) Rewrite logic in Java/Python/Node.js, 4) Migrate data to PostgreSQL/MongoDB, 5) Rebuild interfaces as REST APIs/web UIs. COBOL modernization reduces costs by 70%+ and enables modern integrations impossible with mainframes.'
                },
                {
                  question: 'What ongoing support do you provide?',
                  answer: 'Included: 3-month hypercare support post-cutover (24/7 critical issue response, bug fixes, performance tuning, user training). Optional: Monthly retainer ($5K-25K) for: New features, integrations, scaling optimization, security updates, infrastructure management, disaster recovery. Also offer: Legacy system decommissioning, documentation, knowledge transfer to your IT team.'
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
        title="Ready to Modernize Your Legacy Systems?"
        description="Stop wasting money on maintenance and missing opportunities for innovation. Transform your legacy applications into modern, cloud-native systems that drive business growth."
        primaryButtonText="Start Modernization"
        primaryButtonLink="/contact"
        secondaryButtonText="See Approaches"
        secondaryButtonLink="#approaches"
        showContactInfo={true}
      />
    </main>  )
}