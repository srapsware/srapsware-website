import { Metadata } from 'next'
import Link from 'next/link'
import { HelpCircle, MessageCircle, Search, ChevronDown, Mail, Phone, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'FAQs | Frequently Asked Questions',
  description: 'Find answers to common questions about our services, pricing, process, and technology. Get help with web development, mobile apps, cloud solutions, and more.',
  keywords: 'FAQ, frequently asked questions, software development questions, pricing, web development help',
}

export default function FAQPage() {
  const faqCategories = [
    {
      category: 'General Questions',
      icon: HelpCircle,
      faqs: [
        {
          question: 'What services do you offer?',
          answer: 'We offer comprehensive software development services including web development (React, Next.js, Node.js), mobile app development (iOS, Android, React Native), cloud solutions (AWS, Azure, GCP), DevOps, AI/ML integration, e-commerce platforms, and enterprise software solutions. We handle everything from initial consultation and design to development, testing, deployment, and ongoing maintenance.'
        },
        {
          question: 'What industries do you work with?',
          answer: 'We work with clients across various industries including e-commerce, healthcare, fintech, manufacturing, logistics, education, real estate, and SaaS startups. Our team has experience building HIPAA-compliant healthcare systems, PCI DSS certified payment platforms, and scalable e-commerce solutions handling millions of users.'
        },
        {
          question: 'Where are you located? Do you work remotely?',
          answer: 'We are a remote-first company with team members in 15+ countries. This allows us to provide 24/7 support and work with clients globally. We use modern collaboration tools like Slack, Zoom, Jira, and GitHub to ensure seamless communication and project management regardless of location.'
        },
        {
          question: 'How do I get started with a project?',
          answer: 'Simply contact us through our contact form, email, or phone. We will schedule a free consultation call to discuss your project requirements, goals, and timeline. After understanding your needs, we will provide a detailed proposal with scope, timeline, and pricing. Once approved, we will kick off the project with a discovery phase.'
        },
      ]
    },
    {
      category: 'Pricing & Payment',
      icon: HelpCircle,
      faqs: [
        {
          question: 'How much does it cost to build a website or app?',
          answer: 'Project costs vary based on complexity, features, and timeline. A simple website starts at $5K-10K, a complex web application ranges from $30K-100K+, and mobile apps typically cost $40K-150K+. Enterprise solutions can range from $100K to $500K+. We provide detailed quotes after understanding your requirements during the consultation.'
        },
        {
          question: 'What payment terms do you offer?',
          answer: 'We typically structure payments in milestones: 30% upfront to start the project, 40% upon completion of development and testing, and 30% upon final delivery and deployment. For larger projects, we can arrange monthly payment plans. We accept bank transfers, credit cards, and international payment methods.'
        },
        {
          question: 'Do you offer fixed-price or hourly billing?',
          answer: 'We offer both. Fixed-price projects work best when requirements are well-defined and scope is clear. Hourly billing ($80-150/hour depending on expertise level) is better for ongoing maintenance, consulting, or projects with evolving requirements. We can also provide dedicated team models for long-term engagements.'
        },
        {
          question: 'Are there any hidden costs?',
          answer: 'No hidden costs. Our proposals clearly outline all costs including development, design, testing, deployment, and project management. Third-party costs like domain names, hosting, SSL certificates, and API licenses are identified separately. We provide transparent pricing and regular budget updates throughout the project.'
        },
      ]
    },
    {
      category: 'Development Process',
      icon: HelpCircle,
      faqs: [
        {
          question: 'What is your development process?',
          answer: 'We follow an Agile development methodology with 2-week sprints. Our process includes: 1) Discovery & Planning (requirements gathering, wireframes, technical architecture), 2) Design (UI/UX mockups, design system), 3) Development (iterative coding with regular demos), 4) Testing (QA, automated tests, security audits), 5) Deployment (production launch, monitoring), and 6) Maintenance (ongoing support, updates, bug fixes).'
        },
        {
          question: 'How long does it take to build a website or app?',
          answer: 'Timelines vary by project complexity. A simple website takes 4-8 weeks, a medium-complexity web application takes 3-6 months, and large enterprise systems can take 6-12+ months. Mobile apps typically require 3-6 months. We provide a detailed timeline with milestones during the proposal phase and send weekly progress updates.'
        },
        {
          question: 'Will I get regular updates on project progress?',
          answer: 'Yes! We provide weekly status reports via email, bi-weekly demo sessions to show working features, daily updates in our project management tool (Jira or Trello), and 24/7 access to our communication channels (Slack, email). You will always know what has been completed, what is in progress, and what is coming next.'
        },
        {
          question: 'Can I request changes during development?',
          answer: 'Yes, we welcome feedback and changes. Minor adjustments within the original scope are included. Major changes that affect timeline or complexity are evaluated for additional time and cost. We follow Agile methodology specifically to accommodate evolving requirements and ensure the final product meets your needs.'
        },
      ]
    },
    {
      category: 'Technology & Security',
      icon: HelpCircle,
      faqs: [
        {
          question: 'What technologies do you use?',
          answer: 'We use modern, proven technologies: Frontend (React, Next.js, TypeScript, Tailwind CSS), Backend (Node.js, Python, Java, .NET), Databases (PostgreSQL, MongoDB, Redis), Cloud (AWS, Azure, GCP), Mobile (React Native, Swift, Kotlin), DevOps (Docker, Kubernetes, Terraform, Jenkins, GitHub Actions), and AI/ML (TensorFlow, PyTorch, OpenAI GPT-4).'
        },
        {
          question: 'How do you ensure application security?',
          answer: 'Security is our priority. We implement HTTPS/SSL encryption, OAuth 2.0 and JWT authentication, input validation and sanitization to prevent SQL injection, OWASP Top 10 security practices, regular security audits and penetration testing, data encryption at rest and in transit, GDPR/HIPAA/PCI DSS compliance when required, and secure coding practices with code reviews.'
        },
        {
          question: 'Do you provide source code and documentation?',
          answer: 'Yes, absolutely. You own all source code and intellectual property upon project completion. We provide complete source code in a GitHub/GitLab repository, comprehensive documentation including API docs, deployment guides, and architecture diagrams, code comments and README files, database schema documentation, and user manuals and admin guides.'
        },
        {
          question: 'What about compliance (HIPAA, PCI DSS, GDPR)?',
          answer: 'We have extensive experience building compliant applications. For HIPAA (healthcare), we implement encrypted data storage, audit logs, access controls, and business associate agreements. For PCI DSS (payments), we use tokenization, secure payment gateways, and never store card data. For GDPR, we implement data privacy controls, consent management, and right-to-deletion features.'
        },
      ]
    },
    {
      category: 'Support & Maintenance',
      icon: HelpCircle,
      faqs: [
        {
          question: 'Do you provide support after launch?',
          answer: 'Yes! We offer multiple support plans: Essential Plan ($1K-2K/month) includes bug fixes, security updates, and email support. Professional Plan ($3K-5K/month) adds feature enhancements, performance monitoring, and priority support. Enterprise Plan ($5K+/month) provides 24/7 support, dedicated team, and SLA guarantees. All projects include 30 days of free post-launch support.'
        },
        {
          question: 'What if something breaks after launch?',
          answer: 'We provide 30 days of free bug fixes after launch. Our team monitors applications 24/7 with alerting systems. If critical issues arise, we respond within 1-4 hours depending on your support plan. We maintain comprehensive documentation and runbooks for quick issue resolution. For peace of mind, we recommend our maintenance plans with guaranteed response times.'
        },
        {
          question: 'Can you help with existing applications?',
          answer: 'Absolutely! We provide legacy system maintenance, performance optimization and scaling, security audits and hardening, feature additions and enhancements, bug fixing and troubleshooting, cloud migration services, code refactoring and modernization, and integration with third-party systems. We can work with codebases in any technology stack.'
        },
        {
          question: 'How do software updates work?',
          answer: 'We follow semantic versioning (major.minor.patch) for all releases. Security patches are deployed immediately. Minor updates with new features are released monthly. Major updates with breaking changes are planned and communicated in advance. All updates go through staging environment testing before production deployment. We maintain detailed changelogs and release notes.'
        },
      ]
    },
    {
      category: 'Team & Communication',
      icon: HelpCircle,
      faqs: [
        {
          question: 'Who will work on my project?',
          answer: 'You will have a dedicated team including a Project Manager (single point of contact), Senior Developers (2-3 engineers based on project size), UI/UX Designer (for interface design), QA Engineer (for testing), and DevOps Engineer (for deployment and infrastructure). For larger projects, we can provide a Solutions Architect and dedicated Business Analyst.'
        },
        {
          question: 'How do we communicate during the project?',
          answer: 'We offer flexible communication options: Slack workspace for daily discussions and quick questions, Zoom/Google Meet for weekly calls and demos, Email for formal communications and documents, Jira/Trello for task tracking and progress, GitHub/GitLab for code reviews and technical discussions, and scheduled status calls (weekly or bi-weekly based on your preference).'
        },
        {
          question: 'What time zones do you work in?',
          answer: 'Our team spans multiple time zones enabling 24/7 coverage. We align our working hours to overlap with yours for 4-6 hours daily to ensure real-time collaboration. For US clients, we have teams in EST and PST. For European clients, we have teams in CET and GMT. We schedule meetings at mutually convenient times.'
        },
        {
          question: 'Can I hire a dedicated development team?',
          answer: 'Yes! We offer dedicated team models starting at $15K/month for a full-time senior developer. A typical dedicated team includes 2-3 developers, 1 QA engineer, 1 project manager for $40K-60K/month. This model is ideal for long-term projects, ongoing product development, or when you need flexible scaling. Teams work exclusively on your project.'
        },
      ]
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
            <span className="text-foreground font-medium">FAQs</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 dark:from-orange-950/20 dark:via-red-950/20 dark:to-pink-950/20" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-4 px-4 py-1.5 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded-full text-sm font-medium">
              ❓ Got Questions?
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Find answers to common questions about our services, pricing, process, and more
            </p>

            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search FAQs..."
                  className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 focus:border-orange-500 focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="text-center p-4 rounded-lg bg-white/50 dark:bg-black/20 backdrop-blur-sm">
                <div className="text-3xl font-bold text-orange-600 mb-1">50+</div>
                <div className="text-sm text-muted-foreground">Questions Answered</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-white/50 dark:bg-black/20 backdrop-blur-sm">
                <div className="text-3xl font-bold text-red-600 mb-1">6</div>
                <div className="text-sm text-muted-foreground">Categories</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-white/50 dark:bg-black/20 backdrop-blur-sm">
                <div className="text-3xl font-bold text-pink-600 mb-1">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-12">
            {faqCategories.map((categoryData, catIndex) => (
              <div key={catIndex}>
                <div className="flex items-center mb-6">
                  <categoryData.icon className="w-8 h-8 mr-3 text-orange-600" />
                  <h2 className="text-3xl font-bold">{categoryData.category}</h2>
                </div>

                <div className="space-y-4">
                  {categoryData.faqs.map((faq, faqIndex) => (
                    <details
                      key={faqIndex}
                      className="group bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden hover:shadow-lg transition-all"
                    >
                      <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                        <h3 className="text-lg font-bold pr-4">{faq.question}</h3>
                        <ChevronDown className="w-5 h-5 text-muted-foreground group-open:rotate-180 transition-transform flex-shrink-0" />
                      </summary>
                      <div className="px-6 pb-6 pt-2 text-muted-foreground leading-relaxed border-t border-gray-100 dark:border-gray-800">
                        {faq.answer}
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 border-t border-border bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-xl text-muted-foreground">
              Our team is here to help you. Get in touch and we'll respond within 24 hours.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-800 text-center hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Live Chat</h3>
              <p className="text-muted-foreground mb-4">Chat with our team in real-time</p>
              <button className="px-6 py-2 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all">
                Start Chat
              </button>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-800 text-center hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Email Us</h3>
              <p className="text-muted-foreground mb-4">Get a response within 24 hours</p>
              <Link
                href="mailto:contact@srapsware.com"
                className="inline-block px-6 py-2 bg-gradient-to-r from-red-600 to-pink-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
              >
                Send Email
              </Link>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-800 text-center hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-pink-100 dark:bg-pink-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Call Us</h3>
              <p className="text-muted-foreground mb-4">Speak with an expert directly</p>
              <Link
                href="tel:+1234567890"
                className="inline-block px-6 py-2 bg-gradient-to-r from-pink-600 to-red-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
              >
                Call Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 rounded-2xl p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="text-orange-100 mb-8 text-lg">
              Let's discuss your requirements and turn your ideas into reality
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-orange-600 rounded-lg font-semibold hover:bg-orange-50 transition-all"
            >
              Get Free Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
