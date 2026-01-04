import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { 
  Briefcase, 
  MapPin,
  Clock,
  DollarSign,
  ArrowRight,
  CheckCircle2,
  Users,
  Heart,
  Zap,
  Award,
  Code,
  Globe
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Careers | Join Our Team of Software Engineers',
  description: 'Join our team of talented developers, designers, and engineers. Remote-first culture, competitive salaries, and exciting projects. We are hiring!',
  keywords: 'software engineering jobs, web developer careers, remote developer jobs, tech careers, full stack developer jobs',
}

export default function CareersPage() {
  const openPositions = [
    {
      title: 'Senior Full Stack Developer',
      location: 'Remote (US)',
      type: 'Full-time',
      salary: '$120K - $180K',
      description: 'Build scalable web applications using React, Next.js, Node.js, and PostgreSQL. Work on diverse projects from e-commerce to SaaS platforms.',
      requirements: [
        '5+ years full stack development experience',
        'Expert in React, Next.js, TypeScript',
        'Strong backend skills (Node.js, Python, or Java)',
        'Experience with PostgreSQL, MongoDB, Redis',
        'Cloud platforms (AWS, Azure, or GCP)',
        'CI/CD, Docker, Kubernetes knowledge'
      ],
      category: 'Engineering'
    },
    {
      title: 'DevOps Engineer',
      location: 'Remote (Worldwide)',
      type: 'Full-time',
      salary: '$100K - $150K',
      description: 'Manage cloud infrastructure, CI/CD pipelines, and monitoring systems. Ensure 99.9% uptime for client applications.',
      requirements: [
        '3+ years DevOps experience',
        'AWS/Azure/GCP infrastructure expertise',
        'Kubernetes and Docker proficiency',
        'Terraform, Ansible, or CloudFormation',
        'CI/CD tools (Jenkins, GitLab CI, GitHub Actions)',
        'Monitoring tools (Datadog, Prometheus, Grafana)'
      ],
      category: 'DevOps'
    },
    {
      title: 'UI/UX Designer',
      location: 'Remote (US/EU)',
      type: 'Full-time',
      salary: '$80K - $120K',
      description: 'Design beautiful, intuitive interfaces for web and mobile applications. Create design systems and collaborate with developers.',
      requirements: [
        '4+ years UI/UX design experience',
        'Expert in Figma, Adobe XD, or Sketch',
        'Strong portfolio of web and mobile designs',
        'Understanding of HTML/CSS/JavaScript',
        'Design system and component library experience',
        'User research and usability testing'
      ],
      category: 'Design'
    },
    {
      title: 'Mobile Developer (React Native)',
      location: 'Remote (Worldwide)',
      type: 'Full-time',
      salary: '$90K - $140K',
      description: 'Develop cross-platform mobile apps for iOS and Android using React Native. Focus on performance and user experience.',
      requirements: [
        '3+ years React Native development',
        'Published apps on App Store and Play Store',
        'Native module integration experience',
        'Redux, MobX, or similar state management',
        'Push notifications, deep linking, analytics',
        'App performance optimization'
      ],
      category: 'Mobile'
    },
    {
      title: 'Solutions Architect',
      location: 'Remote (US)',
      type: 'Full-time',
      salary: '$140K - $200K',
      description: 'Design technical solutions for complex client projects. Lead architecture decisions and mentor development teams.',
      requirements: [
        '8+ years software engineering experience',
        'Expertise in system design and architecture',
        'Multiple tech stacks (JavaScript, Python, Java)',
        'Microservices, event-driven architecture',
        'Database design and optimization',
        'Client-facing and leadership experience'
      ],
      category: 'Architecture'
    },
    {
      title: 'QA Engineer / Test Automation',
      location: 'Remote (Worldwide)',
      type: 'Full-time',
      salary: '$70K - $110K',
      description: 'Build automated test suites and ensure software quality. Write end-to-end tests, API tests, and performance tests.',
      requirements: [
        '3+ years QA and test automation',
        'Selenium, Cypress, Playwright, or similar',
        'API testing (Postman, REST Assured)',
        'Performance testing (JMeter, k6)',
        'CI/CD integration for automated tests',
        'Bug tracking and test management tools'
      ],
      category: 'QA'
    },
  ]

  const benefits = [
    {
      icon: Globe,
      title: 'Remote-First Culture',
      description: 'Work from anywhere in the world. We have team members in 15+ countries with flexible hours.'
    },
    {
      icon: DollarSign,
      title: 'Competitive Salary',
      description: 'Above-market compensation with annual raises and performance bonuses.'
    },
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance, dental, vision, and mental health support.'
    },
    {
      icon: Zap,
      title: 'Professional Growth',
      description: '$2K/year learning budget for courses, conferences, and certifications.'
    },
    {
      icon: Clock,
      title: 'Work-Life Balance',
      description: 'Unlimited PTO, flexible hours, and no overtime expectations.'
    },
    {
      icon: Users,
      title: 'Great Team',
      description: 'Work with talented engineers on challenging projects for exciting clients.'
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
            <Link href="/about" className="hover:text-foreground transition-colors">About</Link>
            <span>/</span>
            <span className="text-foreground font-medium">Careers</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-950/20 dark:via-purple-950/20 dark:to-pink-950/20" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-4 px-4 py-1.5 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full text-sm font-medium">
              🚀 We're Hiring!
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Join Our Team
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Build innovative software with talented people. Remote-first culture, challenging projects, and competitive compensation.
            </p>

            <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto mb-8">
              <div className="text-center p-4 rounded-lg bg-white/50 dark:bg-black/20 backdrop-blur-sm">
                <div className="text-3xl font-bold text-indigo-600 mb-1">50+</div>
                <div className="text-sm text-muted-foreground">Team Members</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-white/50 dark:bg-black/20 backdrop-blur-sm">
                <div className="text-3xl font-bold text-purple-600 mb-1">15+</div>
                <div className="text-sm text-muted-foreground">Countries</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-white/50 dark:bg-black/20 backdrop-blur-sm">
                <div className="text-3xl font-bold text-pink-600 mb-1">4.8/5</div>
                <div className="text-sm text-muted-foreground">Glassdoor</div>
              </div>
            </div>

            <Link 
              href="#openings"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200"
            >
              View Open Positions
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Join Srapsware?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We take care of our team so they can do their best work
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="openings" className="py-20 border-t border-border bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Open Positions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Find your next opportunity. We're always looking for talented people.
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-6">
            {openPositions.map((job, index) => (
              <article key={index} className="bg-white dark:bg-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-all">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div className="flex-1">
                    <div className="inline-block px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full text-xs font-medium mb-3">
                      {job.category}
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4" />
                        <span>{job.type}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <DollarSign className="w-4 h-4" />
                        <span>{job.salary}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6">{job.description}</p>

                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Requirements:</h4>
                  <ul className="space-y-2">
                    {job.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <CheckCircle2 className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground text-sm">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/contact?subject=Job Application"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all"
                >
                  Apply Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Do not see a position that fits? We're always looking for talented people.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center text-indigo-600 font-semibold hover:gap-2 transition-all"
            >
              Send us your resume
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Hiring Process */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Our Hiring Process</h2>

            <div className="space-y-8">
              {[
                {
                  step: '01',
                  title: 'Application Review',
                  description: 'Submit your resume and portfolio. We review all applications within 3-5 business days.',
                  duration: '3-5 days'
                },
                {
                  step: '02',
                  title: 'Initial Call',
                  description: '30-minute video call with our recruiter to discuss your experience, expectations, and answer questions.',
                  duration: '30 minutes'
                },
                {
                  step: '03',
                  title: 'Technical Interview',
                  description: '60-90 minute technical interview with our engineering team. Coding challenges and system design discussions.',
                  duration: '60-90 minutes'
                },
                {
                  step: '04',
                  title: 'Team Interview',
                  description: 'Meet with your potential team members. Culture fit assessment and project discussions.',
                  duration: '45 minutes'
                },
                {
                  step: '05',
                  title: 'Offer',
                  description: 'Receive your offer letter with compensation details, benefits, and start date. Typical turnaround: 1-2 days.',
                  duration: '1-2 days'
                }
              ].map((stage, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {stage.step}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold">{stage.title}</h3>
                      <span className="text-sm text-muted-foreground">{stage.duration}</span>
                    </div>
                    <p className="text-muted-foreground">{stage.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="py-20 border-t border-border bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Our Culture</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-800">
                <Code className="w-12 h-12 text-indigo-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Innovation First</h3>
                <p className="text-muted-foreground">
                  We embrace new technologies and encourage experimentation. You will work with cutting-edge tools and frameworks.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-800">
                <Users className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Collaborative Environment</h3>
                <p className="text-muted-foreground">
                  Work with talented engineers who support each other. Regular knowledge sharing sessions and code reviews.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-800">
                <Award className="w-12 h-12 text-pink-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Recognition & Growth</h3>
                <p className="text-muted-foreground">
                  Clear career progression paths, mentorship programs, and regular performance reviews with meaningful raises.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-800">
                <Globe className="w-12 h-12 text-cyan-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Global Team</h3>
                <p className="text-muted-foreground">
                  Work with diverse team members from around the world. Experience different perspectives and learn from each other.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Join Us?</h2>
            <p className="text-indigo-100 mb-8 text-lg">
              Apply today and start building amazing software with our team.
            </p>
            <Link
              href="#openings"
              className="inline-flex items-center px-8 py-4 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-indigo-50 transition-all"
            >
              View Open Positions
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
