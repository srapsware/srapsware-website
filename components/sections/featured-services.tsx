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
    <section className="relative w-full py-32 border-t border-border services-section overflow-hidden">
      {/* Dynamic Background Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(71,128,199,0.08),transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(147,51,234,0.08),transparent_40%)]" />
      <div className="absolute top-20 left-10 w-96 h-96 bg-brand/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      
      {/* Animated mesh pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(71, 128, 199, 0.3) 1.5px, transparent 1.5px),
            linear-gradient(90deg, rgba(71, 128, 199, 0.3) 1.5px, transparent 1.5px)
          `,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Floating decorative icons */}
      {floatingIcons.map((item, i) => (
        <div
          key={i}
          className="absolute pointer-events-none text-brand/10 dark:text-brand/20 font-mono text-xl transition-all duration-[4000ms] ease-in-out"
          style={{
            left: item.left,
            top: item.top,
          }}
        >
          {item.icon}
        </div>
      ))}
      
      <div className="container mx-auto px-3 sm:px-4 max-w-[1400px] relative z-10">
        {/* Enhanced Section Header */}
        <div className="max-w-3xl mx-auto mb-20">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-20 bg-gradient-to-r from-transparent via-brand to-transparent"></div>
            <span className="px-4 py-2 bg-brand/10 border border-brand/20 rounded-full text-sm font-semibold text-brand">
              What We Do
            </span>
            <div className="h-px w-20 bg-gradient-to-l from-transparent via-brand to-transparent"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 leading-tight">
            {title || (
              <>
                Our Core{' '}
                <span className="relative inline-block">
                  <span className="text-transparent bg-gradient-to-r from-brand via-purple-500 to-pink-500 bg-clip-text">
                    Services
                  </span>
                  <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" fill="none">
                    <path d="M0 4C50 1 150 7 200 4" stroke="url(#services-gradient)" strokeWidth="2"/>
                    <defs>
                      <linearGradient id="services-gradient" x1="0" y1="0" x2="200" y2="0">
                        <stop offset="0%" stopColor="rgb(71, 128, 199)" />
                        <stop offset="50%" stopColor="rgb(147, 51, 234)" />
                        <stop offset="100%" stopColor="rgb(236, 72, 153)" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
              </>
            )}
          </h2>
          
          <p className="text-xl text-muted-foreground text-center leading-relaxed">
            {description || 'Comprehensive software development services to transform your business'}
          </p>
        </div>

        {/* Creative Asymmetric Grid Layout */}
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-6">
            {services.map((service, index) => {
              const IconComponent = iconMap[service.icon as keyof typeof iconMap] || Code2
              
              // Define unique layouts for first 6 services
              const layouts = [
                'lg:col-span-7', // First service - large
                'lg:col-span-5', // Second service - medium
                'lg:col-span-5', // Third service - medium
                'lg:col-span-7', // Fourth service - large
                'lg:col-span-6', // Fifth service - medium
                'lg:col-span-6', // Sixth service - medium
              ]
              
              const layout = layouts[index % layouts.length] || 'lg:col-span-4'
              
              // Gradient colors for each service
              const gradients = [
                { from: 'from-blue-500/20', to: 'to-cyan-500/20', icon: 'from-blue-500 to-cyan-500', border: 'border-blue-500/20 hover:border-blue-500/40', text: 'text-blue-400' },
                { from: 'from-purple-500/20', to: 'to-pink-500/20', icon: 'from-purple-500 to-pink-500', border: 'border-purple-500/20 hover:border-purple-500/40', text: 'text-purple-400' },
                { from: 'from-green-500/20', to: 'to-emerald-500/20', icon: 'from-green-500 to-emerald-500', border: 'border-green-500/20 hover:border-green-500/40', text: 'text-green-400' },
                { from: 'from-orange-500/20', to: 'to-amber-500/20', icon: 'from-orange-500 to-amber-500', border: 'border-orange-500/20 hover:border-orange-500/40', text: 'text-orange-400' },
                { from: 'from-pink-500/20', to: 'to-rose-500/20', icon: 'from-pink-500 to-rose-500', border: 'border-pink-500/20 hover:border-pink-500/40', text: 'text-pink-400' },
                { from: 'from-cyan-500/20', to: 'to-teal-500/20', icon: 'from-cyan-500 to-teal-500', border: 'border-cyan-500/20 hover:border-cyan-500/40', text: 'text-cyan-400' },
              ]
              
              const gradient = gradients[index % gradients.length]
              const isLarge = layout.includes('col-span-7')
              
              return (
                <div key={service.slug} className={`${layout} group`}>
                  <Link
                    href={service.link}
                    className="block h-full relative"
                  >
                    {/* Floating glow effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${gradient.from} ${gradient.to} rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500`}></div>
                    
                    {/* Stacked background card effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${gradient.from} ${gradient.to} backdrop-blur-sm border ${gradient.border.split(' ')[0]} rounded-3xl transform translate-x-2 translate-y-2 opacity-30`}></div>
                    
                    {/* Main Card */}
                    <div className={`relative h-full bg-background/95 backdrop-blur-xl border ${gradient.border} rounded-3xl p-8 ${isLarge ? 'lg:p-10' : ''} overflow-hidden transition-all duration-300`}>
                      {/* Corner decoration */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-bl-[100px]"></div>
                      
                      <div className="relative z-10">
                        {/* Icon with gradient background */}
                        <div className={`inline-flex w-16 h-16 rounded-2xl bg-gradient-to-br ${gradient.icon} items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                        
                        {/* Title */}
                        <h3 className={`text-2xl ${isLarge ? 'lg:text-3xl' : ''} font-bold mb-4 text-foreground group-hover:text-brand transition-colors duration-300`}>
                          {service.title}
                        </h3>
                        
                        {/* Description */}
                        <p className={`text-base ${isLarge ? 'lg:text-lg' : ''} text-muted-foreground leading-relaxed mb-6`}>
                          {service.description}
                        </p>
                        
                        {/* Learn More Link with Arrow */}
                        <div className={`inline-flex items-center gap-2 ${gradient.text} font-semibold group-hover:gap-3 transition-all duration-300`}>
                          <span>Explore Service</span>
                          <ArrowRight className="w-5 h-5" />
                        </div>
                        
                        {/* Bottom accent line */}
                        <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${gradient.icon} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                      </div>
                      
                      {/* Decorative floating element */}
                      {isLarge && (
                        <div className="absolute bottom-8 right-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                          <IconComponent className="w-32 h-32" />
                        </div>
                      )}
                    </div>
                  </Link>
                </div>
              )
            })}
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16">
          <Link
            href="/services"
            className="group inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-brand via-purple-500 to-pink-500 text-white rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-brand/40 hover:scale-105 transition-all duration-300 relative overflow-hidden"
          >
            <span className="relative z-10">View All Services</span>
            <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-brand opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>
        </div>
      </div>
    </section>
  )
}
