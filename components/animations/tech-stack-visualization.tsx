'use client'

import { useEffect, useRef } from 'react'
import { gsap } from '@/lib/animations/gsap-setup'
import { Technology } from '@/lib/content'

/**
 * Tech Stack Visualization
 * Displays animated technology logos in a circular orbit pattern
 * Professional showcase of technical capabilities
 */

interface TechStackVisualizationProps {
  technologies: Technology[]
  title?: string
  subtitle?: string
}

export default function TechStackVisualization({ 
  technologies,
  title = "Technologies We Master",
  subtitle = "Building with industry-leading tools and frameworks"
}: TechStackVisualizationProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const orbitRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!orbitRef.current) return

    const items = orbitRef.current.querySelectorAll('.tech-orbit-item')
    
    // Animate each tech logo in its orbit
    items.forEach((item, index) => {
      const delay = index * 0.5 // Stagger animation start
      
      gsap.fromTo(item,
        { 
          opacity: 0,
          scale: 0,
          rotation: -180
        },
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 1,
          delay: delay,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 70%',
            toggleActions: 'play none none none',
            once: true
          }
        }
      )

      // Continuous floating animation
      gsap.to(item, {
        y: '+=15',
        duration: 2 + Math.random() * 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: delay
      })
    })

    return () => {
      gsap.killTweensOf(items)
    }
  }, [technologies])

  // Group technologies by category
  const grouped = technologies.reduce((acc, tech) => {
    if (!acc[tech.category]) acc[tech.category] = []
    acc[tech.category].push(tech)
    return acc
  }, {} as Record<string, Technology[]>)

  return (
    <section 
      ref={containerRef}
      className="py-24 border-t border-border overflow-hidden"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Circular Orbit Display */}
        <div 
          ref={orbitRef}
          className="relative max-w-5xl mx-auto"
        >
          {/* Categories in grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {Object.entries(grouped).slice(0, 12).map(([category, techs], categoryIndex) => (
              <div 
                key={category}
                className="tech-orbit-item flex flex-col items-center gap-4 p-6 rounded-2xl bg-card border border-border hover:border-brand/30 transition-colors"
              >
                {/* Category Badge */}
                <div className="text-xs font-semibold uppercase tracking-wider text-brand/70 mb-2">
                  {category}
                </div>
                
                {/* Tech logos in this category */}
                <div className="flex flex-wrap gap-2 justify-center">
                  {techs.slice(0, 3).map((tech, techIndex) => (
                    <div
                      key={tech.title}
                      className="w-12 h-12 rounded-lg bg-background border border-border flex items-center justify-center hover:scale-110 transition-transform"
                      title={tech.title}
                    >
                      {tech.logo ? (
                        <img 
                          src={tech.logo} 
                          alt={tech.title}
                          className="w-8 h-8 object-contain"
                        />
                      ) : (
                        <span className="text-2xl">⚡</span>
                      )}
                    </div>
                  ))}
                </div>
                
                {/* Tech names */}
                <div className="text-center">
                  <div className="text-sm font-medium text-foreground">
                    {techs.slice(0, 3).map(t => t.title).join(', ')}
                  </div>
                  {techs.length > 3 && (
                    <div className="text-xs text-muted-foreground mt-1">
                      +{techs.length - 3} more
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Optional: Show all count */}
        {technologies.length > 12 && (
          <div className="text-center mt-12">
            <p className="text-muted-foreground">
              And {technologies.length - 12} more cutting-edge technologies...
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
