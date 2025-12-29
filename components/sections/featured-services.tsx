import { 
  Code2, Smartphone, Cloud, Sparkles, Palette, Server,
  ArrowRight
} from 'lucide-react'
import Link from 'next/link'
import { Service } from '@/lib/content'

const iconMap = {
  Code2,
  Smartphone,
  Cloud,
  Sparkles,
  Palette,
  Server,
}

const colorMap = {
  blue: 'hover:bg-blue-50 dark:hover:bg-blue-950/30',
  purple: 'hover:bg-purple-50 dark:hover:bg-purple-950/30',
  green: 'hover:bg-green-50 dark:hover:bg-green-950/30',
  orange: 'hover:bg-orange-50 dark:hover:bg-orange-950/30',
  pink: 'hover:bg-pink-50 dark:hover:bg-pink-950/30',
  cyan: 'hover:bg-cyan-50 dark:hover:bg-cyan-950/30',
}

interface FeaturedServicesProps {
  services?: Service[]
  title?: string
  description?: string
}

export function FeaturedServices({ services = [], title, description }: FeaturedServicesProps) {
  // If no services provided, don't render
  if (services.length === 0) {
    return null
  }

  return (
    <section className="py-24 border-t border-border services-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            {title || 'Our Core Services'}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {description || 'Comprehensive software development services to transform your business'}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap] || Code2
            const colorClass = colorMap[service.color as keyof typeof colorMap] || colorMap.blue
            
            return (
              <Link
                key={service.slug}
                href={service.link}
                className={`group relative p-8 rounded-2xl border border-border bg-card hover:border-brand/50 ${colorClass} hover:shadow-xl hover:shadow-brand/5 transition-all duration-300 service-card`}
              >
                <div className="relative">
                  <div className="w-14 h-14 rounded-xl bg-brand/10 flex items-center justify-center mb-6 group-hover:bg-brand group-hover:scale-110 transition-all duration-300">
                    <IconComponent className="w-7 h-7 text-brand group-hover:text-white transition-colors" />
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
            )
          })}
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
