import { Metadata } from 'next'
import Link from 'next/link'
import { Book, Code, Terminal, Database, Cloud, Shield, Zap, ArrowRight, Search, BookOpen, FileText } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Documentation Portal | Developer Resources',
  description: 'Comprehensive documentation for web development, API integration, cloud deployment, and software development best practices.',
  keywords: 'developer documentation, API docs, technical guides, web development tutorials, cloud deployment guides',
}

export default function DocumentationPage() {
  const docCategories = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Frontend and backend development guides',
      color: 'from-blue-500 to-cyan-500',
      articles: 48,
      topics: [
        { title: 'Getting Started with React', link: '#' },
        { title: 'Next.js App Router Guide', link: '#' },
        { title: 'TypeScript Best Practices', link: '#' },
        { title: 'Tailwind CSS Utilities', link: '#' },
      ]
    },
    {
      icon: Database,
      title: 'Database & APIs',
      description: 'Database design, queries, and API development',
      color: 'from-purple-500 to-pink-500',
      articles: 35,
      topics: [
        { title: 'PostgreSQL Query Optimization', link: '#' },
        { title: 'MongoDB Schema Design', link: '#' },
        { title: 'RESTful API Best Practices', link: '#' },
        { title: 'GraphQL Schema Development', link: '#' },
      ]
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      description: 'Infrastructure, deployment, and CI/CD',
      color: 'from-cyan-500 to-blue-500',
      articles: 42,
      topics: [
        { title: 'AWS EC2 Deployment Guide', link: '#' },
        { title: 'Docker Containerization', link: '#' },
        { title: 'Kubernetes Cluster Setup', link: '#' },
        { title: 'GitHub Actions CI/CD', link: '#' },
      ]
    },
    {
      icon: Shield,
      title: 'Security',
      description: 'Authentication, encryption, and compliance',
      color: 'from-red-500 to-orange-500',
      articles: 28,
      topics: [
        { title: 'OAuth 2.0 Implementation', link: '#' },
        { title: 'JWT Token Authentication', link: '#' },
        { title: 'HTTPS/SSL Configuration', link: '#' },
        { title: 'OWASP Security Checklist', link: '#' },
      ]
    },
    {
      icon: Terminal,
      title: 'Command Line Tools',
      description: 'CLI utilities, scripts, and automation',
      color: 'from-green-500 to-emerald-500',
      articles: 22,
      topics: [
        { title: 'Git Commands Cheat Sheet', link: '#' },
        { title: 'npm/pnpm/yarn Guide', link: '#' },
        { title: 'Linux Server Management', link: '#' },
        { title: 'Shell Scripting Basics', link: '#' },
      ]
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimization, caching, and monitoring',
      color: 'from-yellow-500 to-orange-500',
      articles: 30,
      topics: [
        { title: 'Web Performance Metrics', link: '#' },
        { title: 'Redis Caching Strategies', link: '#' },
        { title: 'CDN Configuration Guide', link: '#' },
        { title: 'Database Indexing Tips', link: '#' },
      ]
    },
  ]

  const popularGuides = [
    {
      title: 'Complete Next.js 15 Guide: From Basics to Production',
      description: 'Learn Next.js 15 with App Router, Server Components, streaming, and deployment to Vercel/AWS.',
      readTime: '45 min',
      difficulty: 'Beginner to Advanced',
      lastUpdated: 'Dec 2024'
    },
    {
      title: 'Building a Full Stack Application with MERN Stack',
      description: 'Step-by-step tutorial for building MongoDB, Express, React, Node.js applications with authentication.',
      readTime: '2 hours',
      difficulty: 'Intermediate',
      lastUpdated: 'Nov 2024'
    },
    {
      title: 'Kubernetes Production Deployment Guide',
      description: 'Deploy containerized applications to Kubernetes clusters with auto-scaling, monitoring, and CI/CD.',
      readTime: '1.5 hours',
      difficulty: 'Advanced',
      lastUpdated: 'Dec 2024'
    },
    {
      title: 'API Security Best Practices: OAuth, JWT, and Rate Limiting',
      description: 'Secure your REST and GraphQL APIs with modern authentication, authorization, and protection strategies.',
      readTime: '1 hour',
      difficulty: 'Intermediate',
      lastUpdated: 'Oct 2024'
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
            <span className="text-foreground font-medium">Documentation</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-950/20 dark:via-purple-950/20 dark:to-pink-950/20" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-4 px-4 py-1.5 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full text-sm font-medium">
              📖 Developer Resources
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Documentation Portal
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Comprehensive guides, tutorials, and API references for modern software development
            </p>

            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search documentation..."
                  className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 focus:border-indigo-500 focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="text-center p-4 rounded-lg bg-white/50 dark:bg-black/20 backdrop-blur-sm">
                <div className="text-3xl font-bold text-indigo-600 mb-1">200+</div>
                <div className="text-sm text-muted-foreground">Articles</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-white/50 dark:bg-black/20 backdrop-blur-sm">
                <div className="text-3xl font-bold text-purple-600 mb-1">6</div>
                <div className="text-sm text-muted-foreground">Categories</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-white/50 dark:bg-black/20 backdrop-blur-sm">
                <div className="text-3xl font-bold text-pink-600 mb-1">Weekly</div>
                <div className="text-sm text-muted-foreground">Updates</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Documentation Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Browse by Category</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {docCategories.map((category, index) => (
              <article key={index} className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden hover:shadow-xl transition-all group">
                <div className={`h-32 bg-gradient-to-br ${category.color} relative`}>
                  <div className="absolute inset-0 bg-black/10" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <category.icon className="w-16 h-16 text-white" />
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-indigo-600 transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{category.description}</p>
                  <p className="text-sm text-indigo-600 font-medium mb-4">{category.articles} articles</p>

                  <div className="space-y-2 mb-4">
                    {category.topics.map((topic, idx) => (
                      <Link
                        key={idx}
                        href={topic.link}
                        className="block text-sm text-muted-foreground hover:text-indigo-600 transition-colors"
                      >
                        → {topic.title}
                      </Link>
                    ))}
                  </div>

                  <Link
                    href="#"
                    className="inline-flex items-center text-indigo-600 font-semibold hover:gap-2 transition-all"
                  >
                    View all articles
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Guides */}
      <section className="py-20 border-t border-border bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold flex items-center">
              <BookOpen className="w-8 h-8 mr-3 text-indigo-600" />
              Popular Guides
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {popularGuides.map((guide, index) => (
              <article key={index} className="bg-white dark:bg-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-all">
                <h3 className="text-2xl font-bold mb-3 hover:text-indigo-600 transition-colors">
                  {guide.title}
                </h3>

                <p className="text-muted-foreground mb-6">
                  {guide.description}
                </p>

                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center">
                    <FileText className="w-4 h-4 mr-2" />
                    {guide.readTime}
                  </div>
                  <div className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full">
                    {guide.difficulty}
                  </div>
                  <div>Updated {guide.lastUpdated}</div>
                </div>

                <Link
                  href="#"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
                >
                  Read Guide
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Quick Links</h2>

            <div className="grid md:grid-cols-3 gap-6">
              <Link
                href="/resources/api-documentation"
                className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-gray-200 dark:border-gray-800 hover:border-indigo-500 transition-all text-center group"
              >
                <Code className="w-12 h-12 mx-auto mb-4 text-indigo-600 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-2">API Reference</h3>
                <p className="text-muted-foreground text-sm">Complete API documentation with code examples</p>
              </Link>

              <Link
                href="/resources/blog"
                className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-gray-200 dark:border-gray-800 hover:border-purple-500 transition-all text-center group"
              >
                <BookOpen className="w-12 h-12 mx-auto mb-4 text-purple-600 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-2">Blog & Tutorials</h3>
                <p className="text-muted-foreground text-sm">Latest articles and step-by-step tutorials</p>
              </Link>

              <Link
                href="/resources/whitepapers"
                className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-gray-200 dark:border-gray-800 hover:border-pink-500 transition-all text-center group"
              >
                <FileText className="w-12 h-12 mx-auto mb-4 text-pink-600 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-2">Whitepapers</h3>
                <p className="text-muted-foreground text-sm">In-depth technical guides and research</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Need Help with Something?</h2>
            <p className="text-indigo-100 mb-8 text-lg">
              Our team is here to help you with any questions or technical challenges
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-indigo-50 transition-all"
            >
              Contact Our Team
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
