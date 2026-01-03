import { Metadata } from 'next'
import { PageHero } from '@/components/sections/page-hero'
import { CTASection } from '@/components/sections/cta-section'
import { Code2, Cloud, Smartphone, Shield, Layers, Cpu, Globe, Palette, Database, Sparkles } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Our Services | Web, Mobile, Cloud & AI Development | Srapsware',
  description: 'Comprehensive software development services including web development, mobile apps, cloud solutions, AI/ML, enterprise systems, and digital transformation.',
  openGraph: {
    title: 'Our Services - Full-Stack Development Solutions',
    description: 'Expert software development services for modern businesses',
    type: 'website',
  }
}

const serviceCategories = [
  {
    title: 'Web Development',
    description: 'Full-stack web applications with modern frameworks and scalable architecture.',
    icon: Globe,
    href: '/services/web/fullstack',
    features: ['React & Next.js', 'Node.js & Python', 'Progressive Web Apps', 'API Development'],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile apps for iOS and Android.',
    icon: Smartphone,
    href: '/services/mobile/cross-platform',
    features: ['React Native', 'iOS & Android', 'Flutter', 'Mobile UI/UX'],
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Cloud Solutions',
    description: 'Cloud architecture, migration, DevOps, and serverless applications.',
    icon: Cloud,
    href: '/services/cloud/solutions',
    features: ['AWS & Azure', 'Kubernetes', 'CI/CD Pipelines', 'Serverless'],
    color: 'from-cyan-500 to-blue-500'
  },
  {
    title: 'AI & Machine Learning',
    description: 'Intelligent applications with AI, ML, and natural language processing.',
    icon: Sparkles,
    href: '/services/ai-ml',
    features: ['ChatGPT Integration', 'Custom AI Models', 'Data Analytics', 'Automation'],
    color: 'from-violet-500 to-purple-500'
  },
  {
    title: 'Enterprise Solutions',
    description: 'Custom ERP, CRM, business intelligence, and system integration.',
    icon: Layers,
    href: '/services/enterprise/solutions',
    features: ['ERP Systems', 'CRM Solutions', 'Business Intelligence', 'API Integration'],
    color: 'from-orange-500 to-red-500'
  },
  {
    title: 'Security & Cybersecurity',
    description: 'Application security, penetration testing, and vulnerability assessment.',
    icon: Shield,
    href: '/services/security/cybersecurity',
    features: ['Security Audits', 'Penetration Testing', 'Code Review', 'Compliance'],
    color: 'from-red-500 to-rose-500'
  },
  {
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive interfaces with modern design principles.',
    icon: Palette,
    href: '/services/web/frontend',
    features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
    color: 'from-pink-500 to-rose-500'
  },
  {
    title: 'IoT Solutions',
    description: 'Connected devices, sensors, and real-time data processing.',
    icon: Cpu,
    href: '/services/iot',
    features: ['Device Integration', 'Real-time Data', 'Edge Computing', 'Monitoring'],
    color: 'from-green-500 to-emerald-500'
  },
  {
    title: 'Blockchain Development',
    description: 'Decentralized applications, smart contracts, and Web3 solutions.',
    icon: Database,
    href: '/services/blockchain',
    features: ['Smart Contracts', 'DApps', 'NFT Platforms', 'Token Development'],
    color: 'from-yellow-500 to-orange-500'
  },
  {
    title: 'DevOps & Support',
    description: '24/7 support, monitoring, maintenance, and performance optimization.',
    icon: Code2,
    href: '/services/support/devops',
    features: ['24/7 Monitoring', 'Performance Tuning', 'Bug Fixes', 'Updates'],
    color: 'from-slate-500 to-gray-500'
  }
]

export default function ServicesPage() {
  return (
    <main>
      {/* Hero Section */}
      <PageHero
        badge="Our Services"
        title="Comprehensive Software Development Services"
        description="From web and mobile apps to cloud infrastructure and AI solutions - we deliver end-to-end technology services that drive business growth."
        ctaPrimary={{
          text: 'Start Your Project',
          href: '/contact'
        }}
        ctaSecondary={{
          text: 'View Portfolio',
          href: '/portfolio'
        }}
      />

      {/* Services Grid */}
      <section className="relative py-32 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              What We Do
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We offer a complete range of software development services to help you build, scale, and optimize your digital presence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((service) => {
              const Icon = service.icon
              return (
                <Link
                  key={service.title}
                  href={service.href}
                  className="group relative p-8 rounded-2xl border border-border bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1"
                >
                  {/* Gradient Accent */}
                  <div className={`absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                  
                  {/* Icon */}
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${service.color} mb-6`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary/60 mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Arrow */}
                  <div className="mt-6 flex items-center text-primary font-medium">
                    Learn More
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              Why Choose Srapsware?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">10+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">500+</div>
                <div className="text-muted-foreground">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">98%</div>
                <div className="text-muted-foreground">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Start Your Project?"
        description="Let's discuss your requirements and build something amazing together."
        primaryButtonText="Get Free Consultation"
        primaryButtonLink="/contact"
        secondaryButtonText="View Our Work"
        secondaryButtonLink="/portfolio"
      />
    </main>
  )
}
