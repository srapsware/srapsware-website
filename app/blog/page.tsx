import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { 
  BookOpen, 
  Search,
  Calendar,
  Clock,
  ArrowRight,
  Tag,
  TrendingUp,
  Code,
  Lightbulb
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Blog & Tech Insights | Web Development, Cloud, AI Articles',
  description: 'Expert insights on web development, cloud computing, AI/ML, DevOps, and software engineering best practices. Technical tutorials, guides, and industry trends.',
  keywords: 'web development blog, cloud computing articles, AI tutorials, DevOps guides, software engineering, technical blog, programming tutorials',
}

export default function BlogPage() {
  const categories = [
    { name: 'Web Development', slug: 'web-dev', count: 45, color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300' },
    { name: 'Cloud & DevOps', slug: 'cloud', count: 32, color: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300' },
    { name: 'AI & Machine Learning', slug: 'ai-ml', count: 28, color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300' },
    { name: 'Mobile Development', slug: 'mobile', count: 20, color: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300' },
    { name: 'Security', slug: 'security', count: 18, color: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300' },
    { name: 'Best Practices', slug: 'best-practices', count: 35, color: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300' },
  ]

  const featuredPosts = [
    {
      title: 'Building Scalable Web Applications with Next.js 15',
      excerpt: 'Learn how to build production-ready web applications using Next.js 15 App Router, Server Components, and streaming SSR for optimal performance.',
      category: 'Web Development',
      date: 'December 28, 2025',
      readTime: '12 min read',
      image: 'https://picsum.photos/800/450?random=1',
      slug: 'nextjs-15-scalable-apps'
    },
    {
      title: 'Kubernetes Best Practices for Production Deployments',
      excerpt: 'Essential Kubernetes configurations, security hardening, monitoring, and scaling strategies for running production workloads reliably.',
      category: 'Cloud & DevOps',
      date: 'December 25, 2025',
      readTime: '15 min read',
      image: 'https://picsum.photos/800/450?random=2',
      slug: 'kubernetes-production-best-practices'
    },
    {
      title: 'Building AI Chatbots with OpenAI GPT-4 and LangChain',
      excerpt: 'Step-by-step guide to creating intelligent chatbots using GPT-4, LangChain framework, and vector databases for context-aware conversations.',
      category: 'AI & Machine Learning',
      date: 'December 22, 2025',
      readTime: '18 min read',
      image: 'https://picsum.photos/800/450?random=3',
      slug: 'ai-chatbots-gpt4-langchain'
    },
  ]

  const recentPosts = [
    {
      title: 'Microservices Architecture: When to Use and When to Avoid',
      excerpt: 'Comprehensive guide to microservices patterns, benefits, challenges, and decision framework for choosing the right architecture.',
      category: 'Best Practices',
      date: 'December 20, 2025',
      readTime: '10 min read',
      slug: 'microservices-architecture-guide'
    },
    {
      title: 'API Security Best Practices: OAuth 2.0, JWT, and Rate Limiting',
      excerpt: 'Secure your APIs with authentication, authorization, input validation, rate limiting, and monitoring strategies.',
      category: 'Security',
      date: 'December 18, 2025',
      readTime: '14 min read',
      slug: 'api-security-best-practices'
    },
    {
      title: 'React Server Components: A Paradigm Shift in React Development',
      excerpt: 'Understanding React Server Components, benefits, use cases, and migration strategies from traditional client-side React.',
      category: 'Web Development',
      date: 'December 15, 2025',
      readTime: '16 min read',
      slug: 'react-server-components-guide'
    },
    {
      title: 'CI/CD Pipeline Setup with GitHub Actions and AWS',
      excerpt: 'Automated deployment pipeline with GitHub Actions, Docker, AWS ECS, and zero-downtime blue-green deployments.',
      category: 'Cloud & DevOps',
      date: 'December 12, 2025',
      readTime: '20 min read',
      slug: 'cicd-github-actions-aws'
    },
    {
      title: 'Mobile App Performance Optimization: React Native vs Flutter',
      excerpt: 'Performance comparison, optimization techniques, and best practices for building fast mobile apps.',
      category: 'Mobile Development',
      date: 'December 10, 2025',
      readTime: '12 min read',
      slug: 'mobile-performance-optimization'
    },
    {
      title: 'Database Scaling Strategies: Sharding, Replication, and Caching',
      excerpt: 'Scale your database from thousands to millions of users with horizontal scaling, read replicas, and Redis caching.',
      category: 'Best Practices',
      date: 'December 8, 2025',
      readTime: '15 min read',
      slug: 'database-scaling-strategies'
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
            <span className="text-foreground font-medium">Blog</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-950/20 dark:via-indigo-950/20 dark:to-purple-950/20" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-4 px-4 py-1.5 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
              📚 Blog & Insights
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Tech Insights & Tutorials
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Expert guides, tutorials, and industry insights on web development, cloud computing, AI/ML, DevOps, and software engineering best practices.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full pl-12 pr-4 py-4 rounded-lg border-2 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 focus:border-blue-500 focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* Categories */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category.slug}
                  className={`${category.color} px-4 py-2 rounded-full text-sm font-medium hover:shadow-md transition-all`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2">Featured Articles</h2>
              <p className="text-muted-foreground">In-depth guides and tutorials</p>
            </div>
            <TrendingUp className="w-8 h-8 text-blue-600" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredPosts.map((post, index) => (
              <article key={index} className="group bg-white dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={800}
                    height={450}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded-full">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-3">
                    <Tag className="w-4 h-4" />
                    <span>{post.category}</span>
                    <span>•</span>
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <Link 
                      href={`/resources/blog/${post.slug}`}
                      className="inline-flex items-center text-blue-600 font-medium hover:gap-2 transition-all"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-20 border-t border-border bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2">Recent Articles</h2>
              <p className="text-muted-foreground">Latest updates and tutorials</p>
            </div>
            <BookOpen className="w-8 h-8 text-indigo-600" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {recentPosts.map((post, index) => (
              <article key={index} className="group bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-all">
                <div className="flex items-start space-x-2 text-sm text-muted-foreground mb-3">
                  <Tag className="w-4 h-4 mt-0.5" />
                  <span>{post.category}</span>
                  <span>•</span>
                  <Clock className="w-4 h-4 mt-0.5" />
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-indigo-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <Link 
                    href={`/resources/blog/${post.slug}`}
                    className="inline-flex items-center text-indigo-600 font-medium hover:gap-2 transition-all"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-2xl p-12 text-white text-center">
            <Lightbulb className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Stay Updated with Our Newsletter</h2>
            <p className="text-blue-100 mb-8 text-lg">
              Get the latest tutorials, guides, and industry insights delivered to your inbox every week.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors whitespace-nowrap">
                Subscribe Now
              </button>
            </div>
            <p className="text-blue-100 text-sm mt-4">
              Join 10,000+ developers. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>

      {/* Popular Topics */}
      <section className="py-20 border-t border-border bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Popular Topics</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'Next.js', 'React', 'TypeScript', 'Node.js', 'Python',
                'AWS', 'Docker', 'Kubernetes', 'MongoDB', 'PostgreSQL',
                'GraphQL', 'REST API', 'Microservices', 'DevOps', 'CI/CD',
                'Machine Learning', 'AI', 'Chatbots', 'Security', 'Testing'
              ].map((topic) => (
                <button
                  key={topic}
                  className="px-4 py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-full text-sm font-medium hover:border-blue-500 hover:text-blue-600 transition-all"
                >
                  {topic}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
