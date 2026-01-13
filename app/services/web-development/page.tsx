import { Metadata } from 'next'
import { PageHero } from '@/components/sections/page-hero'
import { CTASection } from '@/components/sections/cta-section'
import { Code2, Monitor, Server, Layers, Zap } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Web Development Services | React, Next.js, WordPress | Srapsware',
  description: 'Professional web development services including frontend, backend, full-stack, WordPress, and Progressive Web Apps (PWA).',
  openGraph: {
    title: 'Web Development Services',
    description: 'Modern web applications with React, Next.js, and cutting-edge technologies',
    type: 'website',
  }
}

const webServices = [
  {
    title: 'Frontend Development',
    description: 'Build responsive, performant user interfaces with React, Next.js, Vue.js, and modern CSS frameworks.',
    icon: Monitor,
    href: '/services/web-development/frontend',
    features: ['React & Next.js', 'TypeScript', 'Tailwind CSS', 'Responsive Design'],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Backend Development',
    description: 'Scalable server-side applications with Node.js, Python, PHP, and robust database solutions.',
    icon: Server,
    href: '/services/web-development/backend',
    features: ['Node.js & Express', 'Python & Django', 'PHP & Laravel', 'RESTful APIs'],
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Full Stack Development',
    description: 'Complete end-to-end web applications combining frontend and backend expertise.',
    icon: Layers,
    href: '/services/web-development/fullstack',
    features: ['MERN Stack', 'Next.js Full-Stack', 'Database Design', 'API Integration'],
    color: 'from-green-500 to-emerald-500'
  },
  {
    title: 'WordPress Development',
    description: 'Custom WordPress themes, plugins, and enterprise CMS solutions.',
    icon: Code2,
    href: '/services/web-development/wordpress',
    features: ['Custom Themes', 'Plugin Development', 'WooCommerce', 'Headless WordPress'],
    color: 'from-cyan-500 to-blue-500'
  },
  {
    title: 'Progressive Web Apps',
    description: 'Fast, reliable, and engaging web apps that work offline and feel native.',
    icon: Zap,
    href: '/services/web-development/pwa',
    features: ['Offline Support', 'Push Notifications', 'App-like Experience', 'Fast Loading'],
    color: 'from-orange-500 to-red-500'
  }
]

export default function WebDevelopmentPage() {
  return (
    <main>
      {/* Hero Section */}
      <PageHero
        badge="Web Development"
        title="Modern Web Development Services"
        description="Build fast, scalable, and beautiful web applications with React, Next.js, WordPress, and cutting-edge technologies."
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
              Our Web Development Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From frontend to backend, we deliver comprehensive web solutions tailored to your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {webServices.map((service) => {
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
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </main>
  )
}
