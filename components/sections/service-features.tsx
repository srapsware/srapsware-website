'use client'

import { 
  Code2, Zap, Smartphone, Users, Search, TestTube,
  Cloud, Brain, Palette, Server, Lock, Rocket,
  Globe, Database, GitBranch, Package, Workflow,
  MessageSquare, ShoppingCart, BarChart, Settings,
  CheckCircle, ArrowRight, Layers, Monitor, Cpu,
  type LucideIcon 
} from 'lucide-react'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

// Icon mapping for server component compatibility
const iconMap: Record<string, LucideIcon> = {
  Code2, Zap, Smartphone, Users, Search, TestTube,
  Cloud, Brain, Palette, Server, Lock, Rocket,
  Globe, Database, GitBranch, Package, Workflow,
  MessageSquare, ShoppingCart, BarChart, Settings,
  CheckCircle, ArrowRight, Layers, Monitor, Cpu
}

export interface ServiceFeature {
  icon: string // Icon name as string for server component compatibility
  title: string
  description: string
  color?: 'blue' | 'purple' | 'pink' | 'cyan' | 'green' | 'orange'
}

interface ServiceFeaturesProps {
  title?: string
  description?: string
  features: ServiceFeature[]
  columns?: 2 | 3 | 4
  className?: string
}

const colorClasses = {
  blue: 'from-blue-500 to-cyan-500',
  purple: 'from-purple-500 to-pink-500',
  pink: 'from-pink-500 to-rose-500',
  cyan: 'from-cyan-500 to-blue-500',
  green: 'from-green-500 to-emerald-500',
  orange: 'from-orange-500 to-red-500',
}

export function ServiceFeatures({
  title = 'Key Features',
  description,
  features,
  columns = 3,
  className = ''
}: ServiceFeaturesProps) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    if (!sectionRef.current || cardsRef.current.length === 0) return

    // Stagger animation for cards on scroll
    gsap.fromTo(
      cardsRef.current,
      {
        opacity: 0,
        y: 50,
        scale: 0.9
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    )

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [features.length])

  const gridCols = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-2 lg:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4'
  }

  return (
    <section ref={sectionRef} className={`py-20 ${className}`}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {title}
          </h2>
          {description && (
            <p className="text-lg text-muted-foreground">
              {description}
            </p>
          )}
        </div>

        {/* Features Grid */}
        <div className={`grid grid-cols-1 ${gridCols[columns]} gap-6 lg:gap-8`}>
          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon] || Code2 // Fallback to Code2 if icon not found
            const gradientColor = colorClasses[feature.color || 'blue']

            return (
              <div
                key={index}
                ref={(el) => {
                  if (el) cardsRef.current[index] = el
                }}
                className="group relative"
              >
                {/* Animated gradient border glow on hover */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${gradientColor} rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Card */}
                <div className="relative h-full p-8 rounded-2xl border border-border bg-card backdrop-blur-xl hover:border-transparent transition-all duration-300">
                  {/* Icon with gradient background */}
                  <div className="relative mb-6">
                    <div className={`absolute inset-0 bg-gradient-to-br ${gradientColor} rounded-xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300`} />
                    <div className={`relative w-14 h-14 rounded-xl bg-gradient-to-br ${gradientColor} p-3 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                      <Icon className="w-full h-full text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-3 group-hover:text-brand transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Hover effect shine */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-transparent via-white/5 to-transparent" />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
