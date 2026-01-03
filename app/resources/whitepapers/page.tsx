import { Metadata } from 'next'
import Link from 'next/link'
import { FileText, Download, Calendar, Clock, Tag, ArrowRight, TrendingUp } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Whitepapers & Research | Technical Resources',
  description: 'Download free whitepapers, technical guides, and industry research on web development, cloud architecture, DevOps, and modern software engineering.',
  keywords: 'software development whitepapers, technical guides, cloud architecture, microservices guide, DevOps best practices',
}

export default function WhitepapersPage() {
  const whitepapers = [
    {
      title: 'Microservices Architecture: A Comprehensive Guide',
      description: 'Learn how to design, build, and deploy microservices-based applications. Covers service decomposition, API gateways, data management, and deployment strategies.',
      category: 'Architecture',
      pages: 42,
      readTime: '45 min',
      publishedDate: 'December 2024',
      downloads: 3200,
      topics: ['Microservices', 'API Gateway', 'Docker', 'Kubernetes', 'Service Mesh'],
      featured: true
    },
    {
      title: 'Cloud Migration Strategy: From On-Premise to AWS',
      description: 'A complete guide to migrating legacy applications to AWS cloud. Includes assessment frameworks, migration patterns (rehost, refactor, rebuild), and cost optimization.',
      category: 'Cloud Computing',
      pages: 38,
      readTime: '40 min',
      publishedDate: 'November 2024',
      downloads: 2800,
      topics: ['AWS', 'Cloud Migration', 'Lift and Shift', 'Refactoring', 'Cost Optimization']
    },
    {
      title: 'DevOps Best Practices: CI/CD Pipeline Automation',
      description: 'Implement robust CI/CD pipelines using GitHub Actions, Jenkins, and GitLab CI. Covers automated testing, deployment strategies, and monitoring.',
      category: 'DevOps',
      pages: 35,
      readTime: '38 min',
      publishedDate: 'October 2024',
      downloads: 4100,
      topics: ['CI/CD', 'GitHub Actions', 'Jenkins', 'Docker', 'Automated Testing'],
      featured: true
    },
    {
      title: 'Securing Modern Web Applications: OWASP Top 10',
      description: 'Protect your applications from the most critical security risks. Detailed analysis of OWASP Top 10 vulnerabilities with prevention strategies and code examples.',
      category: 'Security',
      pages: 50,
      readTime: '55 min',
      publishedDate: 'September 2024',
      downloads: 5200,
      topics: ['Security', 'OWASP', 'Authentication', 'Encryption', 'Penetration Testing']
    },
    {
      title: 'Building Scalable APIs with GraphQL and Node.js',
      description: 'Design high-performance GraphQL APIs. Covers schema design, resolvers, data loading with DataLoader, caching strategies, and N+1 query problem solutions.',
      category: 'API Development',
      pages: 32,
      readTime: '35 min',
      publishedDate: 'August 2024',
      downloads: 2600,
      topics: ['GraphQL', 'Node.js', 'API Design', 'Performance', 'Caching']
    },
    {
      title: 'React Performance Optimization: Advanced Techniques',
      description: 'Master React performance optimization with code splitting, lazy loading, memoization, virtualization, and profiling tools. Reduce bundle size and improve UX.',
      category: 'Frontend',
      pages: 28,
      readTime: '30 min',
      publishedDate: 'July 2024',
      downloads: 3800,
      topics: ['React', 'Performance', 'Code Splitting', 'Optimization', 'Web Vitals'],
      featured: true
    },
    {
      title: 'Database Design and Optimization for High-Traffic Applications',
      description: 'Advanced database techniques for scaling PostgreSQL and MongoDB. Covers indexing strategies, query optimization, sharding, replication, and connection pooling.',
      category: 'Database',
      pages: 45,
      readTime: '48 min',
      publishedDate: 'June 2024',
      downloads: 2900,
      topics: ['PostgreSQL', 'MongoDB', 'Indexing', 'Sharding', 'Query Optimization']
    },
    {
      title: 'Infrastructure as Code with Terraform and AWS',
      description: 'Automate cloud infrastructure management using Terraform. Learn modules, state management, workspaces, and best practices for multi-environment deployments.',
      category: 'Infrastructure',
      pages: 40,
      readTime: '42 min',
      publishedDate: 'May 2024',
      downloads: 3100,
      topics: ['Terraform', 'IaC', 'AWS', 'Automation', 'Cloud Infrastructure']
    },
    {
      title: 'Mobile App Development: React Native vs Flutter',
      description: 'Compare React Native and Flutter for cross-platform mobile development. Performance benchmarks, developer experience, ecosystem, and real-world case studies.',
      category: 'Mobile',
      pages: 36,
      readTime: '38 min',
      publishedDate: 'April 2024',
      downloads: 4300,
      topics: ['React Native', 'Flutter', 'Cross-Platform', 'Mobile Development', 'Performance']
    },
    {
      title: 'AI and Machine Learning Integration in Web Applications',
      description: 'Integrate AI capabilities into web apps using OpenAI GPT-4, LangChain, and vector databases. Includes chatbots, semantic search, and recommendation systems.',
      category: 'AI/ML',
      pages: 42,
      readTime: '45 min',
      publishedDate: 'March 2024',
      downloads: 5600,
      topics: ['AI', 'Machine Learning', 'GPT-4', 'LangChain', 'Vector Databases']
    },
    {
      title: 'Event-Driven Architecture with Kafka and RabbitMQ',
      description: 'Build scalable event-driven systems using message queues. Covers event sourcing, CQRS pattern, message serialization, and handling failures.',
      category: 'Architecture',
      pages: 38,
      readTime: '40 min',
      publishedDate: 'February 2024',
      downloads: 2400,
      topics: ['Kafka', 'RabbitMQ', 'Event-Driven', 'CQRS', 'Message Queues']
    },
    {
      title: 'Container Orchestration: Kubernetes in Production',
      description: 'Deploy and manage containerized applications with Kubernetes. Covers pods, services, deployments, ingress, ConfigMaps, secrets, and monitoring with Prometheus.',
      category: 'DevOps',
      pages: 52,
      readTime: '58 min',
      publishedDate: 'January 2024',
      downloads: 4800,
      topics: ['Kubernetes', 'Containers', 'Docker', 'Orchestration', 'Production']
    },
  ]

  const categories = [
    { name: 'All', count: whitepapers.length },
    { name: 'Architecture', count: whitepapers.filter(w => w.category === 'Architecture').length },
    { name: 'Cloud Computing', count: whitepapers.filter(w => w.category === 'Cloud Computing').length },
    { name: 'DevOps', count: whitepapers.filter(w => w.category === 'DevOps').length },
    { name: 'Security', count: whitepapers.filter(w => w.category === 'Security').length },
    { name: 'Frontend', count: whitepapers.filter(w => w.category === 'Frontend').length },
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
            <span className="text-foreground font-medium">Whitepapers</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-950/20 dark:via-indigo-950/20 dark:to-purple-950/20" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-4 px-4 py-1.5 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
              📚 Free Technical Resources
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Whitepapers & Research
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Download free technical guides, research papers, and best practices from our engineering team. No signup required.
            </p>

            <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="text-center p-4 rounded-lg bg-white/50 dark:bg-black/20 backdrop-blur-sm">
                <div className="text-3xl font-bold text-blue-600 mb-1">12</div>
                <div className="text-sm text-muted-foreground">Whitepapers</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-white/50 dark:bg-black/20 backdrop-blur-sm">
                <div className="text-3xl font-bold text-indigo-600 mb-1">40K+</div>
                <div className="text-sm text-muted-foreground">Downloads</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-white/50 dark:bg-black/20 backdrop-blur-sm">
                <div className="text-3xl font-bold text-purple-600 mb-1">FREE</div>
                <div className="text-sm text-muted-foreground">All Resources</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b border-border bg-white/50 dark:bg-black/10 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat, index) => (
              <button
                key={index}
                className="px-4 py-2 rounded-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-blue-500 hover:text-blue-600 transition-all font-medium"
              >
                {cat.name} <span className="text-muted-foreground">({cat.count})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Whitepapers */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold flex items-center">
              <TrendingUp className="w-8 h-8 mr-3 text-blue-600" />
              Featured Whitepapers
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {whitepapers.filter(w => w.featured).map((paper, index) => (
              <article key={index} className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden hover:shadow-xl transition-all group">
                <div className="h-48 bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-xs font-medium mb-2">
                      {paper.category}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors">
                    {paper.title}
                  </h3>

                  <p className="text-muted-foreground mb-4 text-sm line-clamp-3">
                    {paper.description}
                  </p>

                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                    <div className="flex items-center">
                      <FileText className="w-4 h-4 mr-1" />
                      {paper.pages} pages
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {paper.readTime}
                    </div>
                    <div className="flex items-center">
                      <Download className="w-4 h-4 mr-1" />
                      {paper.downloads.toLocaleString()}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {paper.topics.slice(0, 3).map((topic, idx) => (
                      <span key={idx} className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded text-xs">
                        {topic}
                      </span>
                    ))}
                  </div>

                  <button className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all flex items-center justify-center">
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* All Whitepapers */}
      <section className="py-20 border-t border-border bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 flex items-center">
            <FileText className="w-8 h-8 mr-3 text-indigo-600" />
            All Whitepapers
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whitepapers.map((paper, index) => (
              <article key={index} className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-all">
                <div className="flex items-start justify-between mb-3">
                  <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full text-xs font-medium">
                    {paper.category}
                  </span>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Calendar className="w-3 h-3 mr-1" />
                    {paper.publishedDate}
                  </div>
                </div>

                <h3 className="text-lg font-bold mb-2 hover:text-indigo-600 transition-colors">
                  {paper.title}
                </h3>

                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {paper.description}
                </p>

                <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
                  <div className="flex items-center">
                    <FileText className="w-3 h-3 mr-1" />
                    {paper.pages}p
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    {paper.readTime}
                  </div>
                  <div className="flex items-center">
                    <Download className="w-3 h-3 mr-1" />
                    {paper.downloads.toLocaleString()}
                  </div>
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {paper.topics.slice(0, 4).map((topic, idx) => (
                    <span key={idx} className="px-2 py-0.5 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded text-xs">
                      {topic}
                    </span>
                  ))}
                </div>

                <button className="w-full py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all text-sm flex items-center justify-center">
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-2xl p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Get New Whitepapers in Your Inbox</h2>
            <p className="text-blue-100 mb-8 text-lg">
              Subscribe to receive notifications when we publish new technical resources
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all whitespace-nowrap">
                Subscribe
              </button>
            </div>
            <p className="text-blue-200 text-sm mt-4">No spam. Unsubscribe anytime.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
