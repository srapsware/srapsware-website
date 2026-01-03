import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { 
  Users, 
  MessageSquare, 
  Video, 
  FileText,
  ArrowRight,
  CheckCircle2,
  Calendar,
  Cloud,
  Share2,
  Smartphone,
  Zap,
  Lock
} from 'lucide-react'
import { cn } from '@/lib/utils'
import TechShowcase from '@/components/animations/tech-showcase'
import { PortfolioSlider } from '@/components/sections/portfolio-slider'
import { TestimonialsCarousel } from '@/components/sections/testimonials-carousel'
import { CTASection } from '@/components/sections/cta-section'
import { getFeaturedPortfolio, getTechnologies, getFeaturedTestimonials } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Digital Workplace Solutions | Intranet, Collaboration, Employee Portal',
  description: 'Build modern digital workplaces with employee intranets, collaboration platforms, document management, and unified communication tools for remote and hybrid teams.',
  keywords: 'digital workplace, intranet development, employee portal, collaboration platform, SharePoint alternative, team communication, document management',
  openGraph: {
    title: 'Digital Workplace Solutions | Modern Employee Experiences',
    description: 'Transform how your team collaborates with custom digital workplace platforms - intranets, portals, communication tools built for modern work.',
    type: 'website',
  }
}

export default function DigitalWorkplacePage() {
  const projects = getFeaturedPortfolio(6)
  const technologies = getTechnologies()
  const testimonials = getFeaturedTestimonials(6)

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <section className="border-b border-border bg-muted/30">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-foreground transition-colors">Services</Link>
            <span>/</span>
            <Link href="/services/enterprise" className="hover:text-foreground transition-colors">Enterprise</Link>
            <span>/</span>
            <span className="text-foreground font-medium">Digital Workplace</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-50 dark:from-sky-950/20 dark:via-blue-950/20 dark:to-indigo-950/20" />
        <div className="absolute inset-0 bg-grid-slate-900/[0.04] dark:bg-grid-slate-400/[0.05] bg-[size:32px_32px]" />
        
        <div className="absolute top-20 left-10 w-72 h-72 bg-sky-400/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-400/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-4 px-4 py-1.5 bg-sky-100 dark:bg-sky-900/30 text-sky-700 dark:text-sky-300 rounded-full text-sm font-medium">
                🏢 Modern Workplace
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Digital Workplace Solutions
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                Build a modern digital workplace that connects your team, centralizes knowledge, and drives collaboration - whether remote, hybrid, or in-office.
              </p>

              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center p-4 rounded-lg bg-white/50 dark:bg-black/20 backdrop-blur-sm border border-white/20">
                  <div className="text-3xl font-bold text-sky-600">85%</div>
                  <div className="text-sm text-muted-foreground">Engagement</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-white/50 dark:bg-black/20 backdrop-blur-sm border border-white/20">
                  <div className="text-3xl font-bold text-blue-600">50%</div>
                  <div className="text-sm text-muted-foreground">Faster Info</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-white/50 dark:bg-black/20 backdrop-blur-sm border border-white/20">
                  <div className="text-3xl font-bold text-indigo-600">500+</div>
                  <div className="text-sm text-muted-foreground">Built</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-sky-600 to-indigo-600 text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200"
                >
                  Build Your Workplace
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link 
                  href="#features"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-sky-600 text-sky-600 dark:text-sky-400 rounded-lg font-semibold hover:bg-sky-50 dark:hover:bg-sky-950/30 transition-all duration-200"
                >
                  See Features
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 backdrop-blur-sm">
                <Image
                  src="https://picsum.photos/800/600?random=workplace"
                  alt="Digital Workplace Platform with Collaboration Tools"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                  priority
                />
                <div className="absolute top-6 right-6 bg-white/90 dark:bg-black/90 backdrop-blur-md px-4 py-2 rounded-lg shadow-lg border border-white/20">
                  <div className="flex items-center space-x-2">
                    <Users className="w-5 h-5 text-sky-500 animate-pulse" />
                    <span className="font-semibold text-sm">Connected</span>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex items-center space-x-4 bg-white dark:bg-gray-900 px-6 py-3 rounded-full shadow-xl border border-gray-200 dark:border-gray-800">
                <Users className="w-6 h-6 text-sky-600" />
                <MessageSquare className="w-6 h-6 text-blue-600" />
                <Video className="w-6 h-6 text-indigo-600" />
                <FileText className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Digital Workplace */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Transform How Your Team Works</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Modern teams need modern tools - not clunky intranets from 2005
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
            <div className="bg-red-50 dark:bg-red-950/20 border-2 border-red-200 dark:border-red-800 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4 text-red-900 dark:text-red-100">❌ Legacy Intranets (SharePoint, Jive)</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start space-x-2">
                  <span className="text-red-600 mt-1">•</span>
                  <span>Expensive licenses ($8-30/user/month)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-red-600 mt-1">•</span>
                  <span>Complicated UI = nobody uses it</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-red-600 mt-1">•</span>
                  <span>Information scattered across multiple systems</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-red-600 mt-1">•</span>
                  <span>Poor mobile experience</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-red-600 mt-1">•</span>
                  <span>Limited customization options</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-red-600 mt-1">•</span>
                  <span>Slow search and outdated content</span>
                </li>
              </ul>
            </div>

            <div className="bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4 text-green-900 dark:text-green-100">✅ Modern Digital Workplace</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start space-x-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>Unlimited users - no per-seat pricing</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>Intuitive UI like consumer apps (Slack, Notion)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>All tools in one place - intranet, chat, docs, wiki</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>Mobile-first design - work from anywhere</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>100% tailored to your brand and workflows</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>AI-powered search and recommendations</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">500+</div>
                <div className="text-sky-100">Digital Workplaces Built</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">85%</div>
                <div className="text-sky-100">Employee Engagement</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">50%</div>
                <div className="text-sky-100">Faster Information Access</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">24/7</div>
                <div className="text-sky-100">Access Anywhere</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section id="features" className="py-20 border-t border-border bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Complete Digital Workplace Platform</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything your team needs to collaborate, communicate, and stay informed
            </p>
          </div>

          <div className="grid md:grid-cols-12 gap-6">
            <div className="md:col-span-8 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-sky-500 to-sky-700 p-8 text-white hover:shadow-2xl transition-all duration-300">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform translate-x-32 -translate-y-32 group-hover:scale-150 transition-transform duration-500" />
              <div className="relative z-10">
                <Users className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold mb-3">Employee Intranet & Portal</h3>
                <p className="text-sky-100 mb-4 text-lg leading-relaxed">
                  Personalized employee homepage with company news, announcements, department updates, and personalized content feeds. Employee directory with org charts, skills, contact info. HR resources (policies, benefits, forms), IT help desk, and quick links to tools.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="text-sm">Personalized</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="text-sm">Company News</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="text-sm">Employee Directory</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-4 md:row-span-2 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 p-8 text-white hover:shadow-2xl transition-all duration-300">
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl transform -translate-x-24 translate-y-24 group-hover:scale-150 transition-transform duration-500" />
              <div className="relative z-10 h-full flex flex-col">
                <MessageSquare className="w-12 h-12 mb-4 group-hover:rotate-12 transition-transform" />
                <h3 className="text-2xl font-bold mb-3">Team Chat & Messaging</h3>
                <p className="text-blue-100 mb-4 leading-relaxed flex-grow">
                  Real-time chat with channels, DMs, threads, file sharing, emoji reactions. Slack-like experience embedded in your intranet. Search message history, pin important messages, integrate with notifications.
                </p>
                <div className="space-y-2 mt-auto">
                  <div className="flex items-center justify-between bg-white/10 rounded-lg p-2">
                    <span className="text-sm">Channels</span>
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div className="flex items-center justify-between bg-white/10 rounded-lg p-2">
                    <span className="text-sm">DMs</span>
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div className="flex items-center justify-between bg-white/10 rounded-lg p-2">
                    <span className="text-sm">File Share</span>
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-4 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-500 to-indigo-700 p-6 text-white hover:shadow-2xl transition-all duration-300">
              <FileText className="w-10 h-10 mb-3 group-hover:rotate-180 transition-transform duration-500" />
              <h3 className="text-xl font-bold mb-2">Document Management</h3>
              <p className="text-indigo-100 text-sm leading-relaxed">
                Centralized document library with version control, permissions, and smart search
              </p>
            </div>

            <div className="md:col-span-4 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-500 to-purple-700 p-6 text-white hover:shadow-2xl transition-all duration-300">
              <Video className="w-10 h-10 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2">Video Conferencing</h3>
              <p className="text-purple-100 text-sm leading-relaxed">
                Integrated video calls, screen sharing, and webinar capabilities with recording
              </p>
            </div>

            <div className="md:col-span-8 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-violet-500 to-violet-700 p-8 text-white hover:shadow-2xl transition-all duration-300">
              <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform -translate-x-32 -translate-y-32 group-hover:scale-150 transition-transform duration-500" />
              <div className="relative z-10">
                <Share2 className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold mb-3">Knowledge Base & Wiki</h3>
                <p className="text-violet-100 mb-4 text-lg leading-relaxed">
                  Company wiki with rich text editor, templates, and collaborative editing (like Notion/Confluence). SOPs, how-to guides, product documentation, and training materials. AI-powered search to find information instantly. Link related articles and create knowledge graphs.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="text-sm">Rich Editor</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="text-sm">AI Search</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="text-sm">Templates</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-4 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-fuchsia-500 to-fuchsia-700 p-6 text-white hover:shadow-2xl transition-all duration-300">
              <Calendar className="w-10 h-10 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2">Shared Calendar & Events</h3>
              <p className="text-fuchsia-100 text-sm leading-relaxed">
                Company calendar for meetings, events, holidays, and room booking
              </p>
            </div>

            <div className="md:col-span-4 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-pink-500 to-pink-700 p-6 text-white hover:shadow-2xl transition-all duration-300">
              <Smartphone className="w-10 h-10 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2">Mobile Apps</h3>
              <p className="text-pink-100 text-sm leading-relaxed">
                Native iOS/Android apps for accessing workplace tools on the go
              </p>
            </div>

            <div className="md:col-span-4 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-rose-500 to-rose-700 p-6 text-white hover:shadow-2xl transition-all duration-300">
              <Lock className="w-10 h-10 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2">SSO & Security</h3>
              <p className="text-rose-100 text-sm leading-relaxed">
                Single sign-on, role-based access control, audit logs, data encryption
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-4">
          <TechShowcase 
            technologies={technologies}
            title="Digital Workplace Technology Stack"
            subtitle="Modern technologies for building scalable, secure workplace platforms"
            filterSlugs={[
              'react', 'nextjs', 'nodejs', 'postgresql', 'mongodb',
              'redis', 'aws', 'typescript', 'tailwind', 'docker'
            ]}
            showStats={true}
          />
        </div>
      </section>

      {/* Development Process */}
      <section className="py-20 border-t border-border bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Workplace Development Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From discovery to launch in 10-16 weeks
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {[
              {
                step: '01',
                title: 'Discovery & Strategy',
                description: 'Understand your team structure, workflows, pain points with current tools. Define content strategy, user personas, and feature requirements. Audit existing content for migration.',
                duration: '1-2 weeks',
                icon: Users
              },
              {
                step: '02',
                title: 'Information Architecture',
                description: 'Design site structure, navigation, content taxonomy. Create wireframes for intranet homepage, wiki, employee directory. Plan integrations with existing tools (HR systems, SSO, email).',
                duration: '1-2 weeks',
                icon: Share2
              },
              {
                step: '03',
                title: 'Design & Branding',
                description: 'Custom UI design matching your brand identity. Design system with reusable components. Mobile-responsive layouts for all devices. User testing with stakeholders for feedback.',
                duration: '2-3 weeks',
                icon: Cloud
              },
              {
                step: '04',
                title: 'Development & Integration',
                description: 'Build intranet, wiki, chat, document management, and collaboration features. Integrate SSO, email notifications, calendar sync. API integrations with HR systems, file storage, video conferencing.',
                duration: '5-7 weeks',
                icon: Zap
              },
              {
                step: '05',
                title: 'Content Migration & Training',
                description: 'Migrate content from old intranet/SharePoint. Train content editors and admins. Create user documentation and video tutorials. Beta launch with pilot group for feedback.',
                duration: '1-2 weeks',
                icon: FileText
              },
              {
                step: '06',
                title: 'Launch & Adoption',
                description: 'Company-wide rollout with onboarding campaign. Monitor usage analytics and gather feedback. 3-month post-launch support for adjustments and feature enhancements.',
                duration: '1 week',
                icon: CheckCircle2
              }
            ].map((item, index) => (
              <div key={index} className="relative pl-8 pb-12 border-l-2 border-sky-600 last:border-0 last:pb-0">
                <div className="absolute left-0 top-0 w-4 h-4 bg-sky-600 rounded-full -translate-x-[9px]" />
                <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow ml-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="text-3xl font-bold text-sky-600">{item.step}</div>
                      <div>
                        <h3 className="text-xl font-bold">{item.title}</h3>
                        <p className="text-sm text-muted-foreground flex items-center mt-1">
                          <Zap className="w-4 h-4 mr-1" />
                          {item.duration}
                        </p>
                      </div>
                    </div>
                    <item.icon className="w-8 h-8 text-sky-600" />
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Digital Workplaces We've Built
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Modern workplace platforms connecting teams and improving productivity
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
      <section className="py-20 border-t border-border bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our Workplace Clients Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Success stories from organizations that transformed employee experiences
            </p>
          </div>
          
          <TestimonialsCarousel testimonials={testimonials} />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-4">
              {[
                {
                  question: 'How much does digital workplace development cost?',
                  answer: 'Basic intranet (homepage, news, employee directory): $40K-75K. Mid-size platform (intranet, wiki, document management): $75K-150K. Enterprise workplace (intranet, chat, video, wiki, integrations): $150K-300K+. Compare to SharePoint: 500 users × $12/mo × 36 months = $216K subscription + $100K+ implementation + limited customization. Custom workplace pays for itself in 12-24 months with unlimited users.'
                },
                {
                  question: 'Can you migrate from SharePoint or other platforms?',
                  answer: 'Yes! We migrate content, documents, and user data from: SharePoint (Online/On-Premise), Jive, Confluence, Google Sites, Workplace by Meta, Microsoft Teams, and custom intranets. Process: 1) Content audit and cleanup, 2) Map old structure to new IA, 3) Automated migration tools, 4) Manual QA for critical content, 5) Redirect old URLs to new pages. Timeline: 2-4 weeks for migration depending on content volume.'
                },
                {
                  question: 'What integrations do you support?',
                  answer: 'SSO: Active Directory, Okta, Azure AD, Google Workspace. Email: Gmail, Outlook (calendar sync, notifications). File Storage: Google Drive, OneDrive, Dropbox, Box. HR Systems: Workday, BambooHR, ADP. Video: Zoom, Microsoft Teams, Google Meet (embedded). Chat: Slack, Microsoft Teams (optional alternative to built-in chat). Custom: Any internal system with API or database access.'
                },
                {
                  question: 'How do you drive employee adoption?',
                  answer: 'Adoption strategies: 1) Intuitive UI like consumer apps (not corporate clunky), 2) Personalized content feeds for each user, 3) Mobile apps for on-the-go access, 4) Gamification (badges, leaderboards for contributions), 5) Champions program (power users in each department), 6) Regular training webinars and documentation, 7) Usage analytics to identify low-adoption areas, 8) Continuous feedback loops and improvements. Typical adoption: 85%+ active monthly users within 3 months.'
                },
                {
                  question: 'Do you provide mobile apps?',
                  answer: 'Yes! We build: 1) Responsive web app (works in mobile browser - fastest option), 2) Progressive Web App (PWA - installable, offline support), 3) Native iOS/Android apps (full native experience with push notifications). Mobile features: Company news, employee directory, chat, document access, calendar, quick actions (submit PTO, IT tickets). Offline mode for viewing cached content without internet.'
                },
                {
                  question: 'What ongoing support do you offer?',
                  answer: 'Included: 3-month post-launch support (bug fixes, content updates, user training, adoption monitoring). Optional: Monthly retainer ($3K-10K) for: New features, content management, integrations, advanced analytics, 24/7 monitoring, security updates. Also offer: Content strategy consulting, change management, adoption campaigns, platform administration training.'
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
        title="Ready to Build Your Modern Workplace?"
        description="Stop struggling with legacy intranets and scattered tools. Build a digital workplace that your team will actually love using - connecting everyone, everywhere."
        primaryButtonText="Build Your Workplace"
        primaryButtonLink="/contact"
        secondaryButtonText="See Features"
        secondaryButtonLink="#features"
        showContactInfo={true}
      />
    </div>
  )
}
