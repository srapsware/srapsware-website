'use client'

import { 
  Code2, Smartphone, Cloud, Sparkles, Palette, Server,
  ArrowRight
} from 'lucide-react'
import Link from 'next/link'
import { Service } from '@/lib/content'
import { useEffect, useState } from 'react'

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

interface FloatingIcon {
  left: string
  top: string
  icon: string
  delay: number
  duration: number
}

export function FeaturedServices({ services = [], title, description }: FeaturedServicesProps) {
  const [floatingIcons, setFloatingIcons] = useState<FloatingIcon[]>([])

  // Service-related icon symbols
  const serviceIcons = ['</>','{ }', '( )', '⚡', '★', '◆', '●', '▲', '✦', '◉', '⬡', '◈']

  useEffect(() => {
    // Generate random floating icons
    const generateIcons = () => {
      return Array.from({ length: 12 }, () => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        icon: serviceIcons[Math.floor(Math.random() * serviceIcons.length)],
        delay: Math.random() * 3,
        duration: Math.random() * 5 + 8, // 8-13s
      }))
    }

    setFloatingIcons(generateIcons())

    // Update positions every 10 seconds
    const interval = setInterval(() => {
      setFloatingIcons(generateIcons())
    }, 10000)

    return () => clearInterval(interval)
  }, [])

  // If no services provided, don't render
  if (services.length === 0) {
    return null
  }

  return (
    <section className="relative py-24 border-t border-border services-section overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand/5 via-transparent to-purple-500/5 dark:from-brand/10 dark:to-purple-500/10" />
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(71, 128, 199, 0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(71, 128, 199, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Floating icons */}
      {floatingIcons.map((item, i) => (
        <div
          key={i}
          className="absolute pointer-events-none text-brand/20 dark:text-brand/30 font-mono text-lg transition-all duration-[4000ms] ease-in-out"
          style={{
            left: item.left,
            top: item.top,
          }}
        >
          {item.icon}
        </div>
      ))}
      
      <div className="container mx-auto px-4 relative z-10">
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
                className={`group relative p-8 rounded-2xl border border-border bg-card ${colorClass} hover:border-brand/30 transition-all duration-300 service-card`}
              >
                <div className="relative">
                  <div className="w-16 h-16 rounded-xl bg-brand/10 flex items-center justify-center mb-6 group-hover:bg-brand/15 transition-colors duration-300">
                    <IconComponent className="w-8 h-8 text-brand transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 group-hover:text-brand transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="flex items-center text-brand font-medium transition-all duration-300">
                    <span className="group-hover:underline">Learn more</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
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
