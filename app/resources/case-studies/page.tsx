import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { getCdnUrl } from '@/lib/utils'
import { 
  Briefcase, 
  TrendingUp,
  Target,
  Award,
  ArrowRight,
  CheckCircle2,
  BarChart3,
  Users,
  DollarSign,
  Zap
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Case Studies | Success Stories & Client Results',
  description: 'Real-world success stories from our clients. See how we helped businesses achieve their goals with custom software solutions.',
  keywords: 'case studies, client success stories, project results, client testimonials, software development portfolio',
}

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      title: 'E-commerce Platform Scales to 10M Users',
      client: 'RetailCorp',
      industry: 'E-commerce',
      challenge: 'Legacy monolithic application could not handle rapid growth. Site crashed during sales events, losing $50K+ per hour.',
      solution: 'Migrated to microservices architecture on AWS with auto-scaling, Redis caching, and CDN. Implemented queue-based order processing.',
      results: [
        '99.9% uptime during Black Friday (previously 92%)',
        '10M+ users handled simultaneously',
        '200ms average page load time (down from 3.5s)',
        '$2M+ additional revenue from eliminated downtime',
        '70% reduction in infrastructure costs'
      ],
      tech: ['Next.js', 'Node.js', 'PostgreSQL', 'Redis', 'AWS', 'Docker', 'Kubernetes'],
      duration: '6 months',
      image: 'https://picsum.photos/800/600?random=case1',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Healthcare Portal Achieves HIPAA Compliance',
      client: 'MediCare Plus',
      industry: 'Healthcare',
      challenge: 'Patient portal needed HIPAA compliance, secure messaging, and integration with legacy EHR system.',
      solution: 'Built HIPAA-compliant web and mobile apps with end-to-end encryption, secure messaging, appointment booking, and HL7 EHR integration.',
      results: [
        '500K+ patients onboarded in 3 months',
        'HIPAA compliance certification achieved',
        '85% reduction in phone call volume',
        '4.8/5 patient satisfaction rating',
        '40% faster appointment scheduling'
      ],
      tech: ['React', 'Node.js', 'MongoDB', 'AWS', 'React Native', 'HL7', 'FHIR'],
      duration: '8 months',
      image: 'https://picsum.photos/800/600?random=case2',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'FinTech Startup Builds Payment Platform',
      client: 'PayFlow',
      industry: 'Financial Technology',
      challenge: 'New payment processor needed PCI DSS Level 1 compliance, fraud detection, and multi-currency support.',
      solution: 'Developed secure payment gateway with tokenization, 3D Secure, machine learning fraud detection, and real-time currency conversion.',
      results: [
        '$50M+ processed in first 6 months',
        'PCI DSS Level 1 certified',
        '0.01% fraud rate (industry avg 0.5%)',
        '20+ payment methods supported',
        '99.99% transaction success rate'
      ],
      tech: ['Python', 'FastAPI', 'PostgreSQL', 'Redis', 'Stripe', 'TensorFlow', 'AWS'],
      duration: '10 months',
      image: 'https://picsum.photos/800/600?random=case3',
      color: 'from-purple-500 to-violet-500'
    },
    {
      title: 'Manufacturing Company Digitizes Operations',
      client: 'IndustryTech',
      industry: 'Manufacturing',
      challenge: 'Paper-based processes, no real-time visibility, manual inventory tracking causing errors and delays.',
      solution: 'Built custom ERP with IoT sensor integration, real-time dashboards, predictive maintenance, and automated inventory management.',
      results: [
        '60% reduction in downtime with predictive maintenance',
        '95% inventory accuracy (up from 78%)',
        '$1.5M annual cost savings',
        'Real-time production visibility',
        'ROI achieved in 14 months'
      ],
      tech: ['React', 'Node.js', 'PostgreSQL', 'IoT', 'Python', 'Azure', 'Power BI'],
      duration: '12 months',
      image: 'https://picsum.photos/800/600?random=case4',
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'SaaS Platform Grows from 100 to 50K Users',
      client: 'CloudWorks',
      industry: 'SaaS',
      challenge: 'Rapid growth causing performance issues. Application could not scale beyond 5K concurrent users.',
      solution: 'Database optimization, caching layer, microservices migration, horizontal scaling with Kubernetes, and CDN implementation.',
      results: [
        '50K+ concurrent users (10x growth)',
        '100ms API response time (down from 2s)',
        '99.95% uptime SLA maintained',
        '80% reduction in server costs with optimization',
        'Zero-downtime deployments achieved'
      ],
      tech: ['Next.js', 'GraphQL', 'PostgreSQL', 'Redis', 'Kubernetes', 'AWS', 'Terraform'],
      duration: '5 months',
      image: 'https://picsum.photos/800/600?random=case5',
      color: 'from-indigo-500 to-blue-500'
    },
    {
      title: 'Logistics Company Optimizes Fleet Management',
      client: 'TransLogix',
      industry: 'Logistics',
      challenge: 'Inefficient routing, no real-time tracking, high fuel costs, poor customer visibility.',
      solution: 'Developed fleet management system with GPS tracking, AI-powered route optimization, driver mobile app, and customer portal.',
      results: [
        '25% reduction in fuel costs',
        '30% more deliveries per day',
        'Real-time tracking for 500+ vehicles',
        '40% improvement in on-time delivery',
        '$800K annual savings'
      ],
      tech: ['React', 'Node.js', 'MongoDB', 'Google Maps API', 'React Native', 'AWS'],
      duration: '7 months',
      image: 'https://picsum.photos/800/600?random=case6',
      color: 'from-teal-500 to-cyan-500'
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <section className="border-b border-border bg-muted/30">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            <span>/</span>
            <Link href="/resources" className="hover:text-foreground transition-colors">Resources</Link>
            <span>/</span>
            <span className="text-foreground font-medium">Case Studies</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50 dark:from-purple-950/20 dark:via-indigo-950/20 dark:to-blue-950/20" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-4 px-4 py-1.5 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium">
              💼 Case Studies
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">
              Client Success Stories
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Real results from real clients. See how we helped businesses transform their operations, scale their platforms, and achieve measurable success.
            </p>

            <div className="grid grid-cols-4 gap-6 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-1">200+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-600 mb-1">98%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-1">$100M+</div>
                <div className="text-sm text-muted-foreground">ROI Generated</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-600 mb-1">150+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <article key={index} className="group">
                <div className={`grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <div className="relative rounded-2xl overflow-hidden shadow-xl group-hover:shadow-2xl transition-shadow">
                      <Image
                        src={getCdnUrl(study.image)}
                        alt={study.title}
                        width={800}
                        height={600}
                        className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
                        unoptimized
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-white/90 dark:bg-black/90 backdrop-blur-sm text-sm font-medium rounded-full">
                          {study.industry}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                    <div className="inline-flex items-center space-x-2 text-sm text-muted-foreground mb-4">
                      <Briefcase className="w-4 h-4" />
                      <span>{study.client}</span>
                      <span>•</span>
                      <span>{study.duration}</span>
                    </div>

                    <h2 className="text-3xl font-bold mb-4">{study.title}</h2>

                    <div className="mb-6">
                      <h3 className="text-lg font-semibold mb-2 flex items-center">
                        <Target className="w-5 h-5 mr-2 text-red-600" />
                        Challenge
                      </h3>
                      <p className="text-muted-foreground">{study.challenge}</p>
                    </div>

                    <div className="mb-6">
                      <h3 className="text-lg font-semibold mb-2 flex items-center">
                        <Zap className="w-5 h-5 mr-2 text-blue-600" />
                        Solution
                      </h3>
                      <p className="text-muted-foreground">{study.solution}</p>
                    </div>

                    <div className="mb-6">
                      <h3 className="text-lg font-semibold mb-3 flex items-center">
                        <TrendingUp className="w-5 h-5 mr-2 text-green-600" />
                        Results
                      </h3>
                      <ul className="space-y-2">
                        {study.results.map((result, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h3 className="text-sm font-semibold mb-3 text-muted-foreground">Technologies Used</h3>
                      <div className="flex flex-wrap gap-2">
                        {study.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-muted rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Link
                      href="/contact"
                      className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${study.color} text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all`}
                    >
                      Start Your Success Story
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 border-t border-border bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">By The Numbers</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-4xl font-bold mb-2">150+</div>
                <div className="text-muted-foreground">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-green-600" />
                </div>
                <div className="text-4xl font-bold mb-2">98%</div>
                <div className="text-muted-foreground">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-8 h-8 text-purple-600" />
                </div>
                <div className="text-4xl font-bold mb-2">$100M+</div>
                <div className="text-muted-foreground">Client ROI</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-8 h-8 text-orange-600" />
                </div>
                <div className="text-4xl font-bold mb-2">200+</div>
                <div className="text-muted-foreground">Projects Delivered</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 rounded-2xl p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Write Your Success Story?</h2>
            <p className="text-purple-100 mb-8 text-lg">
              Let's discuss how we can help you achieve similar results for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-white text-purple-600 rounded-lg font-semibold hover:bg-purple-50 transition-all inline-flex items-center justify-center"
              >
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/about"
                className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-all inline-flex items-center justify-center"
              >
                Learn About Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
