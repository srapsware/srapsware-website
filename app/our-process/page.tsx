import { Metadata } from 'next'
import { PageHero } from '@/components/sections/page-hero'
import { ProcessSteps } from '@/components/sections/process-steps'
import { CTASection } from '@/components/sections/cta-section'
import { MessageSquare, FileSearch, PenTool, Code2, TestTube, Rocket, Headphones, TrendingUp } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Our Process | How We Build Software | Srapsware',
  description: 'Learn about our proven software development process. From discovery to deployment and beyond, we ensure quality at every step.',
  openGraph: {
    title: 'Our Development Process - Transparent & Agile',
    description: 'See how we turn your ideas into reality',
    type: 'website',
  }
}

export default function OurProcessPage() {
  const processSteps = [
    {
      number: 1,
      title: 'Discovery & Planning',
      description: 'We start by understanding your business goals, target audience, and technical requirements. This phase includes stakeholder interviews, market research, and competitive analysis.',
      duration: '1-2 weeks',
      icon: 'MessageSquare',
      deliverables: ['Project proposal', 'Technical requirements', 'Timeline & budget', 'Risk assessment']
    },
    {
      number: 2,
      title: 'Research & Analysis',
      description: 'Deep dive into user needs, technical feasibility, and system architecture. We create user personas, user journeys, and define the product roadmap.',
      duration: '1-2 weeks',
      icon: 'FileSearch',
      deliverables: ['User personas', 'System architecture', 'Technology stack', 'Feature prioritization']
    },
    {
      number: 3,
      title: 'Design & Prototyping',
      description: 'Our designers create wireframes, mockups, and interactive prototypes. We focus on user experience, accessibility, and brand consistency.',
      duration: '2-3 weeks',
      icon: 'PenTool',
      deliverables: ['Wireframes', 'UI mockups', 'Interactive prototypes', 'Design system']
    },
    {
      number: 4,
      title: 'Development',
      description: 'Agile development with 2-week sprints. Daily standups, continuous integration, and regular client demos ensure transparency and alignment.',
      duration: '8-16 weeks',
      icon: 'Code2',
      deliverables: ['Working software', 'Sprint demos', 'Code documentation', 'API documentation']
    },
    {
      number: 5,
      title: 'Testing & QA',
      description: 'Comprehensive testing including unit tests, integration tests, E2E tests, performance testing, security audits, and accessibility compliance.',
      duration: '2-3 weeks',
      icon: 'TestTube',
      deliverables: ['Test reports', 'Bug fixes', 'Performance metrics', 'Security audit']
    },
    {
      number: 6,
      title: 'Deployment & Launch',
      description: 'Smooth deployment with zero downtime. We handle server setup, CI/CD pipelines, monitoring, and launch support.',
      duration: '1 week',
      icon: 'Rocket',
      deliverables: ['Production deployment', 'Monitoring setup', 'Backup strategy', 'Launch checklist']
    },
    {
      number: 7,
      title: 'Support & Maintenance',
      description: '24/7 monitoring, regular updates, bug fixes, and performance optimization. We ensure your application runs smoothly post-launch.',
      duration: 'Ongoing',
      icon: 'Headphones',
      deliverables: ['24/7 support', 'Regular updates', 'Performance reports', 'Backup & recovery']
    },
    {
      number: 8,
      title: 'Growth & Optimization',
      description: 'Continuous improvement based on user feedback and analytics. Feature enhancements, A/B testing, and scalability improvements.',
      duration: 'Ongoing',
      icon: 'TrendingUp',
      deliverables: ['Feature updates', 'Performance optimization', 'Analytics reports', 'Growth recommendations']
    }
  ]

  return (
    <main>
      {/* Hero Section */}
      <PageHero
        badge="Our Process"
        title="A Proven Process for Success"
        description="Our transparent, agile development process ensures your project is delivered on time, on budget, and exceeds expectations."
        ctaPrimary={{
          text: 'Start Your Project',
          href: '/contact'
        }}
        ctaSecondary={{
          text: 'View Portfolio',
          href: '/portfolio'
        }}
      />

      {/* Process Overview */}
      <section className="relative py-32 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              How We Work
            </h2>
            <p className="text-xl text-muted-foreground">
              Our 8-phase agile methodology combines industry best practices with continuous client collaboration to deliver exceptional results.
            </p>
          </div>

          {/* Process Steps */}
          <ProcessSteps steps={processSteps} />
        </div>
      </section>

      {/* Methodology Section */}
      <section className="relative py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Our Development Methodology
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 rounded-xl border border-border bg-card">
                <h3 className="text-2xl font-bold mb-4">Agile Development</h3>
                <p className="text-muted-foreground mb-4">
                  We follow agile principles with 2-week sprints, allowing for flexibility, rapid iteration, and continuous delivery of value.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3"></span>
                    <span>Daily stand-ups for team alignment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3"></span>
                    <span>Sprint planning & retrospectives</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3"></span>
                    <span>Regular client demos & feedback</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3"></span>
                    <span>Continuous integration & delivery</span>
                  </li>
                </ul>
              </div>

              <div className="p-8 rounded-xl border border-border bg-card">
                <h3 className="text-2xl font-bold mb-4">Quality Assurance</h3>
                <p className="text-muted-foreground mb-4">
                  Quality is built into every phase. Our comprehensive QA process ensures your application is secure, performant, and bug-free.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3"></span>
                    <span>Automated testing (unit, integration, E2E)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3"></span>
                    <span>Code reviews & pair programming</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3"></span>
                    <span>Performance & security audits</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3"></span>
                    <span>Accessibility compliance testing</span>
                  </li>
                </ul>
              </div>

              <div className="p-8 rounded-xl border border-border bg-card">
                <h3 className="text-2xl font-bold mb-4">Transparent Communication</h3>
                <p className="text-muted-foreground mb-4">
                  Stay informed every step of the way. We believe in radical transparency and proactive communication.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3"></span>
                    <span>Weekly progress reports</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3"></span>
                    <span>Dedicated project manager</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3"></span>
                    <span>Real-time project tracking (Jira/Asana)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3"></span>
                    <span>Slack/Teams channel for instant communication</span>
                  </li>
                </ul>
              </div>

              <div className="p-8 rounded-xl border border-border bg-card">
                <h3 className="text-2xl font-bold mb-4">Post-Launch Support</h3>
                <p className="text-muted-foreground mb-4">
                  Our relationship doesn't end at launch. We provide ongoing support to ensure your success.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3"></span>
                    <span>24/7 monitoring & alerting</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3"></span>
                    <span>Regular updates & security patches</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3"></span>
                    <span>Performance optimization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3"></span>
                    <span>Feature enhancements & scaling</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools & Technologies */}
      <section className="relative py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Tools We Use
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              We leverage industry-leading tools to ensure efficiency and quality
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {['Jira', 'Slack', 'GitHub', 'AWS', 'Docker', 'Figma', 'Postman', 'Jest'].map((tool) => (
                <div key={tool} className="p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-colors">
                  <div className="font-medium">{tool}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Start Your Project?"
        description="Let's discuss your requirements and create a custom roadmap for your success."
        primaryButtonText="Schedule Consultation"
        primaryButtonLink="/contact"
        secondaryButtonText="View Services"
        secondaryButtonLink="/services"
      />
    </main>
  )
}
