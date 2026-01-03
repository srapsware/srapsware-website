import { Metadata } from 'next'
import { PageHero } from '@/components/sections/page-hero'
import { CTASection } from '@/components/sections/cta-section'
import { BookOpen, FileText, Video, HelpCircle, Code2, Newspaper, GraduationCap, Sparkles } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Resources | Blog, Guides, Documentation & Case Studies | Srapsware',
  description: 'Access our library of technical resources, tutorials, case studies, documentation, and industry insights to enhance your knowledge.',
  openGraph: {
    title: 'Resources - Learning Center & Knowledge Base',
    description: 'Free resources to help you build better software',
    type: 'website',
  }
}

const resourceCategories = [
  {
    title: 'Blog',
    description: 'Latest insights, tutorials, and industry news from our experts.',
    icon: Newspaper,
    href: '/blog',
    count: '150+ Articles',
    color: 'from-blue-500 to-cyan-500',
    topics: ['Web Development', 'Mobile Apps', 'Cloud Computing', 'AI & ML']
  },
  {
    title: 'Case Studies',
    description: 'Real-world success stories and project showcases from our clients.',
    icon: FileText,
    href: '/resources/case-studies',
    count: '50+ Projects',
    color: 'from-purple-500 to-pink-500',
    topics: ['E-commerce', 'Enterprise', 'SaaS', 'Mobile Apps']
  },
  {
    title: 'Developer Guides',
    description: 'Step-by-step tutorials and best practices for developers.',
    icon: BookOpen,
    href: '/resources/guides',
    count: '75+ Guides',
    color: 'from-orange-500 to-red-500',
    topics: ['React', 'Next.js', 'Node.js', 'AWS']
  },
  {
    title: 'Documentation',
    description: 'Complete technical documentation for our products and APIs.',
    icon: Code2,
    href: '/docs',
    count: 'API References',
    color: 'from-cyan-500 to-blue-500',
    topics: ['REST APIs', 'GraphQL', 'SDKs', 'Integration']
  },
  {
    title: 'Whitepapers',
    description: 'In-depth research reports and technical papers on emerging technologies.',
    icon: GraduationCap,
    href: '/resources/whitepapers',
    count: '20+ Papers',
    color: 'from-violet-500 to-purple-500',
    topics: ['Architecture', 'Security', 'Performance', 'Scalability']
  },
  {
    title: 'FAQ',
    description: 'Answers to commonly asked questions about our services and processes.',
    icon: HelpCircle,
    href: '/faq',
    count: '100+ Questions',
    color: 'from-green-500 to-emerald-500',
    topics: ['Pricing', 'Process', 'Support', 'Technical']
  },
  {
    title: 'API Documentation',
    description: 'Complete API references with code examples and integration guides.',
    icon: Sparkles,
    href: '/resources/api-documentation',
    count: 'Full Reference',
    color: 'from-pink-500 to-rose-500',
    topics: ['REST', 'GraphQL', 'Webhooks', 'Authentication']
  }
]

export default function ResourcesPage() {
  return (
    <main>
      {/* Hero Section */}
      <PageHero
        badge="Resources"
        title="Knowledge Base & Learning Center"
        description="Access free resources, tutorials, case studies, and documentation to enhance your technical knowledge and stay updated with industry trends."
        ctaPrimary={{
          text: 'Browse Blog',
          href: '/blog'
        }}
        ctaSecondary={{
          text: 'View Case Studies',
          href: '/resources/case-studies'
        }}
      />

      {/* Resources Grid */}
      <section className="relative py-32 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Explore Our Resources
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to learn, build, and grow with modern technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resourceCategories.map((resource) => {
              const Icon = resource.icon
              return (
                <Link
                  key={resource.title}
                  href={resource.href}
                  className="group relative p-8 rounded-2xl border border-border bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1"
                >
                  {/* Gradient Accent */}
                  <div className={`absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r ${resource.color} opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                  
                  {/* Icon & Count */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${resource.color}`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <span className="text-sm font-medium text-primary">
                      {resource.count}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {resource.description}
                  </p>

                  {/* Topics */}
                  <div className="mb-6">
                    <div className="text-sm font-medium text-foreground mb-3">Popular Topics:</div>
                    <div className="flex flex-wrap gap-2">
                      {resource.topics.map((topic) => (
                        <span key={topic} className="text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground">
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="mt-6 flex items-center text-primary font-medium">
                    Explore {resource.title}
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

      {/* Featured Content */}
      <section className="relative py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Featured Content
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Hand-picked resources to get you started
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="p-8 rounded-xl bg-card border border-border">
              <div className="text-sm text-primary font-medium mb-2">LATEST ARTICLE</div>
              <h3 className="text-xl font-bold mb-3">Building Scalable Next.js Applications</h3>
              <p className="text-muted-foreground mb-4">Learn best practices for architecture, performance, and deployment</p>
              <Link href="/blog" className="text-primary font-medium hover:underline">
                Read More →
              </Link>
            </div>
            
            <div className="p-8 rounded-xl bg-card border border-border">
              <div className="text-sm text-primary font-medium mb-2">CASE STUDY</div>
              <h3 className="text-xl font-bold mb-3">E-commerce Platform Migration</h3>
              <p className="text-muted-foreground mb-4">How we helped a client increase sales by 250% with a modern platform</p>
              <Link href="/resources/case-studies" className="text-primary font-medium hover:underline">
                View Case Study →
              </Link>
            </div>
            
            <div className="p-8 rounded-xl bg-card border border-border">
              <div className="text-sm text-primary font-medium mb-2">DEVELOPER GUIDE</div>
              <h3 className="text-xl font-bold mb-3">Complete API Integration Guide</h3>
              <p className="text-muted-foreground mb-4">Step-by-step tutorial for integrating third-party APIs in your app</p>
              <Link href="/resources/guides" className="text-primary font-medium hover:underline">
                Start Learning →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="relative py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Subscribe to our newsletter for the latest articles, tutorials, and industry insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-6 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Need Custom Development?"
        description="Our team of experts is ready to help you build your next project."
        primaryButtonText="Start Your Project"
        primaryButtonLink="/contact"
        secondaryButtonText="View Services"
        secondaryButtonLink="/services"
      />
    </main>
  )
}
