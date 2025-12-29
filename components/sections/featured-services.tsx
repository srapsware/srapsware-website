import { 
  Globe, Smartphone, Cloud, Brain, Palette, Building2,
  ArrowRight
} from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Full-stack web applications with Next.js, React, and modern frameworks',
    href: '/services/web-development',
    color: 'from-brand-50/50 to-brand-100/50 hover:from-brand-50 hover:to-brand-100',
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'Native iOS & Android apps, React Native, and Flutter applications',
    href: '/services/mobile-development',
    color: 'from-brand-50/50 to-brand-100/50 hover:from-brand-50 hover:to-brand-100',
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    description: 'AWS, Azure, Google Cloud architecture and CI/CD automation',
    href: '/services/cloud-devops',
    color: 'from-brand-50/50 to-brand-100/50 hover:from-brand-50 hover:to-brand-100',
  },
  {
    icon: Brain,
    title: 'AI & Machine Learning',
    description: 'ChatGPT integration, computer vision, and custom AI solutions',
    href: '/services/ai-ml',
    color: 'from-brand-50/50 to-brand-100/50 hover:from-brand-50 hover:to-brand-100',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Beautiful interfaces with user-centered design principles',
    href: '/services/design',
    color: 'from-brand-50/50 to-brand-100/50 hover:from-brand-50 hover:to-brand-100',
  },
  {
    icon: Building2,
    title: 'Enterprise Solutions',
    description: 'ERP, CRM, and business intelligence systems',
    href: '/services/enterprise',
    color: 'from-brand-50/50 to-brand-100/50 hover:from-brand-50 hover:to-brand-100',
  },
]

export function FeaturedServices() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Our Core Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive software development services to transform your business
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group relative p-8 rounded-2xl border border-border bg-card hover:border-brand/50 hover:shadow-xl hover:shadow-brand/5 transition-all duration-300"
            >
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              
              <div className="relative">
                <div className="w-14 h-14 rounded-xl bg-brand/10 flex items-center justify-center mb-6 group-hover:bg-brand group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-7 h-7 text-brand group-hover:text-white transition-colors" />
                </div>
                
                <h3 className="text-xl font-bold mb-3 group-hover:text-brand transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="flex items-center text-brand font-medium group-hover:gap-2 transition-all">
                  Learn more
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex h-12 px-8 items-center justify-center bg-accent-primary text-white rounded-lg font-medium hover:bg-accent-hover transition-colors shadow-lg shadow-accent-primary/20"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  )
}
