'use client'

import { useEffect, useRef } from 'react'
import { Sparkles, Users, Globe2 } from 'lucide-react'
import MorphingBackground from '@/components/animations/morphing-background'

interface PortfolioHeroProps {
  totalProjects: number
  featuredCount: number
}

export default function PortfolioHero({ totalProjects, featuredCount }: PortfolioHeroProps) {
  const heroRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const counterRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    // Removed all GSAP animations - content displays immediately with CSS
  }, [totalProjects, featuredCount])

  return (
    <section ref={heroRef} className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Morphing Background */}
      <div className="absolute inset-0 -z-10">
        <MorphingBackground />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 -z-5" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-slate-900/[0.04] dark:bg-grid-slate-400/[0.05] bg-[size:32px_32px] -z-5" />

      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Floating Badge */}
          <div className="inline-block mb-8 floating-badge">
            <div className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 dark:bg-black/20 backdrop-blur-md border border-white/20 shadow-xl">
              <Sparkles className="w-5 h-5 text-primary rotating-icon" />
              <span className="font-semibold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                600+ Successful Projects
              </span>
            </div>
          </div>

          {/* Main Title with Scramble Effect */}
          <h1 
            ref={titleRef}
            className="text-6xl md:text-8xl lg:text-9xl font-black mb-6 tracking-tighter"
          >
            OUR PORTFOLIO
          </h1>

          {/* Animated Gradient Line */}
          <div className="relative w-64 h-2 mx-auto mb-8 rounded-full overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
            <div className="absolute inset-0 bg-white/30 animate-pulse" />
          </div>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            From startups to enterprises, we transform ideas into{' '}
            <span className="font-semibold text-foreground">digital masterpieces</span> that drive real business growth.
          </p>

          {/* Stats Grid with GSAP Counters */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto mb-12">
            {[
              { icon: Globe2, value: totalProjects, suffix: '+', label: 'Projects Delivered', color: 'text-blue-600' },
              { icon: Sparkles, value: featuredCount, suffix: '+', label: 'Featured Works', color: 'text-purple-600' },
              { icon: Users, value: 10, suffix: '+', label: 'Years Experience', color: 'text-indigo-600' }
            ].map((stat, index) => (
              <div
                key={stat.label}
                ref={el => { counterRefs.current[index] = el }}
                className="group relative p-6 rounded-2xl bg-white/5 dark:bg-black/20 backdrop-blur-sm border border-white/10 hover:border-primary/50 transition-all duration-300 hover:scale-105"
              >
                <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-3 group-hover:scale-110 transition-transform`} />
                <div className="stat-number text-4xl md:text-5xl font-black mb-2">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>
                
                {/* Hover Glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:to-primary/5 transition-all duration-300 -z-10" />
              </div>
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className="flex flex-col items-center gap-2 opacity-50 hover:opacity-100 transition-opacity">
            <span className="text-sm font-medium">Scroll to explore</span>
            <div className="w-6 h-10 rounded-full border-2 border-current flex items-start justify-center p-2">
              <div className="w-1 h-3 bg-current rounded-full animate-bounce" />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
    </section>
  )
}
