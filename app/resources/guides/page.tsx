import { Metadata } from 'next'
import Link from 'next/link'
import { Book, Code, Wrench, Cloud, Database, Shield, Zap, Terminal, GitBranch, Search, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Developer Guides & Tutorials | Learn Software Development',
  description: 'Step-by-step tutorials and comprehensive guides for web development, cloud deployment, DevOps, and modern software engineering practices.',
  keywords: 'developer tutorials, programming guides, web development tutorials, cloud deployment, DevOps guides',
}

export default function DeveloperGuidesPage() {
  const guideCategories = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Frontend and backend development tutorials',
      color: 'from-blue-500 to-cyan-500',
      guides: [
        { title: 'Building a Full Stack App with Next.js 15', level: 'Intermediate', duration: '3 hours' },
        { title: 'React Server Components Deep Dive', level: 'Advanced', duration: '2 hours' },
        { title: 'TypeScript for JavaScript Developers', level: 'Beginner', duration: '1.5 hours' },
        { title: 'RESTful API Design Best Practices', level: 'Intermediate', duration: '1 hour' },
      ]
    },
    {
      icon: Database,
      title: 'Databases',
      description: 'Database design and optimization guides',
      color: 'from-purple-500 to-pink-500',
      guides: [
        { title: 'PostgreSQL Performance Tuning', level: 'Advanced', duration: '2.5 hours' },
        { title: 'MongoDB Schema Design Patterns', level: 'Intermediate', duration: '2 hours' },
        { title: 'Redis Caching Strategies', level: 'Intermediate', duration: '1.5 hours' },
        { title: 'SQL vs NoSQL: Choosing the Right Database', level: 'Beginner', duration: '45 min' },
      ]
    },
    {
      icon: Cloud,
      title: 'Cloud & Infrastructure',
      description: 'Deploy and manage cloud applications',
      color: 'from-cyan-500 to-blue-500',
      guides: [
        { title: 'AWS Deployment Guide for Next.js Apps', level: 'Intermediate', duration: '2 hours' },
        { title: 'Docker Containerization from Scratch', level: 'Beginner', duration: '2 hours' },
        { title: 'Kubernetes Production Setup', level: 'Advanced', duration: '4 hours' },
        { title: 'Terraform Infrastructure as Code', level: 'Intermediate', duration: '3 hours' },
      ]
    },
    {
      icon: GitBranch,
      title: 'DevOps & CI/CD',
      description: 'Automate deployment and testing',
      color: 'from-green-500 to-emerald-500',
      guides: [
        { title: 'GitHub Actions CI/CD Pipeline', level: 'Intermediate', duration: '1.5 hours' },
        { title: 'Jenkins Pipeline Setup', level: 'Advanced', duration: '2 hours' },
        { title: 'Automated Testing with Jest and Cypress', level: 'Intermediate', duration: '2 hours' },
        { title: 'Monitoring with Prometheus and Grafana', level: 'Advanced', duration: '2.5 hours' },
      ]
    },
    {
      icon: Shield,
      title: 'Security',
      description: 'Secure your applications and APIs',
      color: 'from-red-500 to-orange-500',
      guides: [
        { title: 'OAuth 2.0 and JWT Authentication', level: 'Intermediate', duration: '1.5 hours' },
        { title: 'Securing React Applications', level: 'Intermediate', duration: '1 hour' },
        { title: 'OWASP Top 10 Prevention Guide', level: 'Advanced', duration: '3 hours' },
        { title: 'API Rate Limiting and Protection', level: 'Intermediate', duration: '1 hour' },
      ]
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimize speed and scalability',
      color: 'from-yellow-500 to-orange-500',
      guides: [
        { title: 'Web Performance Optimization Techniques', level: 'Intermediate', duration: '2 hours' },
        { title: 'Database Query Optimization', level: 'Advanced', duration: '2 hours' },
        { title: 'Caching Strategies for High Traffic', level: 'Advanced', duration: '1.5 hours' },
        { title: 'Image Optimization Best Practices', level: 'Beginner', duration: '45 min' },
      ]
    },
  ]

  const featuredTutorials = [
    {
      title: 'Build a Real-Time Chat Application with WebSockets',
      description: 'Learn how to build a scalable real-time chat app using Node.js, Socket.io, React, and MongoDB. Includes user authentication, message persistence, and typing indicators.',
      level: 'Intermediate',
      duration: '4 hours',
      topics: ['Node.js', 'Socket.io', 'React', 'MongoDB', 'WebSockets'],
      image: '/api/placeholder/600/400'
    },
    {
      title: 'Microservices Architecture: Building a Complete System',
      description: 'Design and implement a microservices-based e-commerce platform with API gateway, service discovery, event-driven communication, and centralized monitoring.',
      level: 'Advanced',
      duration: '6 hours',
      topics: ['Microservices', 'Docker', 'Kubernetes', 'RabbitMQ', 'API Gateway'],
      image: '/api/placeholder/600/400'
    },
    {
      title: 'Deploying Next.js Applications to AWS with Terraform',
      description: 'Automate the deployment of Next.js apps to AWS using Terraform. Covers EC2, RDS, S3, CloudFront CDN, and CI/CD with GitHub Actions.',
      level: 'Intermediate',
      duration: '3 hours',
      topics: ['Next.js', 'AWS', 'Terraform', 'CI/CD', 'GitHub Actions'],
      image: '/api/placeholder/600/400'
    },
  ]

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner': return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300'
      case 'Intermediate': return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300'
      case 'Advanced': return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300'
      default: return 'bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-300'
    }
  }

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
            <span className="text-foreground font-medium">Developer Guides</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-pink-50 to-red-50 dark:from-purple-950/20 dark:via-pink-950/20 dark:to-red-950/20" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-4 px-4 py-1.5 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium">
              📚 Learn by Doing
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent">
              Developer Guides & Tutorials
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Step-by-step tutorials and comprehensive guides from beginner to advanced topics
            </p>

            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search tutorials..."
                  className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 focus:border-purple-500 focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="text-center p-4 rounded-lg bg-white/50 dark:bg-black/20 backdrop-blur-sm">
                <div className="text-3xl font-bold text-purple-600 mb-1">100+</div>
                <div className="text-sm text-muted-foreground">Tutorials</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-white/50 dark:bg-black/20 backdrop-blur-sm">
                <div className="text-3xl font-bold text-pink-600 mb-1">All Levels</div>
                <div className="text-sm text-muted-foreground">Beginner to Advanced</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-white/50 dark:bg-black/20 backdrop-blur-sm">
                <div className="text-3xl font-bold text-red-600 mb-1">FREE</div>
                <div className="text-sm text-muted-foreground">Forever</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Tutorials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold flex items-center">
              <Book className="w-8 h-8 mr-3 text-purple-600" />
              Featured Tutorials
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {featuredTutorials.map((tutorial, index) => (
              <article key={index} className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden hover:shadow-xl transition-all group">
                <div className="h-48 bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 relative">
                  <div className="absolute inset-0 bg-black/20" />
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getLevelColor(tutorial.level)}`}>
                      {tutorial.level}
                    </span>
                    <span className="text-sm text-muted-foreground">{tutorial.duration}</span>
                  </div>

                  <h3 className="text-xl font-bold mb-3 group-hover:text-purple-600 transition-colors">
                    {tutorial.title}
                  </h3>

                  <p className="text-muted-foreground mb-4 text-sm line-clamp-3">
                    {tutorial.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {tutorial.topics.slice(0, 3).map((topic, idx) => (
                      <span key={idx} className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded text-xs">
                        {topic}
                      </span>
                    ))}
                  </div>

                  <Link
                    href="#"
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all w-full justify-center"
                  >
                    Start Tutorial
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Guide Categories */}
      <section className="py-20 border-t border-border bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Browse by Topic</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {guideCategories.map((category, index) => (
              <article key={index} className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden hover:shadow-xl transition-all">
                <div className={`h-24 bg-gradient-to-br ${category.color} relative`}>
                  <div className="absolute inset-0 bg-black/10" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <category.icon className="w-12 h-12 text-white" />
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
                  <p className="text-muted-foreground mb-4">{category.description}</p>
                  <p className="text-sm text-purple-600 font-medium mb-4">{category.guides.length} guides</p>

                  <div className="space-y-3">
                    {category.guides.map((guide, idx) => (
                      <Link
                        key={idx}
                        href="#"
                        className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                      >
                        <h4 className="font-semibold mb-1 text-sm">{guide.title}</h4>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <span className={`px-2 py-0.5 rounded ${getLevelColor(guide.level)}`}>
                            {guide.level}
                          </span>
                          <span>{guide.duration}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Path */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Recommended Learning Path</h2>

            <div className="space-y-6">
              {[
                {
                  step: 1,
                  title: 'Foundation',
                  description: 'Start with HTML, CSS, and JavaScript basics',
                  guides: ['JavaScript Fundamentals', 'CSS Flexbox & Grid', 'Responsive Design']
                },
                {
                  step: 2,
                  title: 'Frontend Framework',
                  description: 'Learn React and Next.js for modern web development',
                  guides: ['React Basics', 'Next.js App Router', 'TypeScript Integration']
                },
                {
                  step: 3,
                  title: 'Backend & APIs',
                  description: 'Build APIs and connect to databases',
                  guides: ['Node.js & Express', 'RESTful APIs', 'Database Design']
                },
                {
                  step: 4,
                  title: 'DevOps & Deployment',
                  description: 'Deploy and maintain applications in production',
                  guides: ['Docker Basics', 'CI/CD Pipelines', 'AWS Deployment']
                },
              ].map((path, index) => (
                <div key={index} className="flex items-start space-x-6 bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {path.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{path.title}</h3>
                    <p className="text-muted-foreground mb-3">{path.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {path.guides.map((guide, idx) => (
                        <Link
                          key={idx}
                          href="#"
                          className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded text-sm hover:bg-purple-200 dark:hover:bg-purple-900/50 transition-colors"
                        >
                          {guide}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-border bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 rounded-2xl p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Start Learning Today</h2>
            <p className="text-purple-100 mb-8 text-lg">
              Join thousands of developers improving their skills with our comprehensive tutorials
            </p>
            <Link
              href="#"
              className="inline-flex items-center px-8 py-4 bg-white text-purple-600 rounded-lg font-semibold hover:bg-purple-50 transition-all"
            >
              Browse All Tutorials
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
