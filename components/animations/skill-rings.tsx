'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from '@/lib/animations/gsap-setup'
import { Technology } from '@/lib/content'

interface SkillRingsProps {
  technologies: Technology[]
  title?: string
  subtitle?: string
}

export default function SkillRings({ 
  technologies,
  title = "Technologies We Master",
  subtitle = "Building with industry-leading tools and frameworks"
}: SkillRingsProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [hoveredTech, setHoveredTech] = useState<Technology | null>(null)

  // Group technologies by expertise level - ONLY FEATURED
  const expertTechs = technologies.filter(t => t.experience === 'Expert' && t.active && t.featured).slice(0, 8)
  const advancedTechs = technologies.filter(t => t.experience === 'Advanced' && t.active && t.featured).slice(0, 10)
  const proficientTechs = technologies.filter(t => t.experience === 'Proficient' && t.active && t.featured).slice(0, 12)

  useEffect(() => {
    if (!containerRef.current) return

    // Animate tech cards on scroll
    const cards = containerRef.current.querySelectorAll('.tech-card')
    cards.forEach((card, index) => {
      gsap.fromTo(card,
        { opacity: 0, scale: 0.8, y: 30 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.6,
          delay: index * 0.05,
          ease: 'back.out(1.4)',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 70%',
            toggleActions: 'play none none none',
            once: true
          }
        }
      )
    })
  }, [technologies])

  return (
    <section 
      ref={containerRef}
      className="py-24 border-t border-border overflow-hidden bg-gradient-to-b from-background to-muted/20"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            {subtitle}
          </p>
          
          {/* Legend */}
          <div className="flex flex-wrap gap-6 justify-center text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-brand"></div>
              <span className="text-muted-foreground">Expert (Inner Ring)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-purple-500"></div>
              <span className="text-muted-foreground">Advanced (Middle Ring)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-teal-500"></div>
              <span className="text-muted-foreground">Proficient (Outer Ring)</span>
            </div>
          </div>
        </div>

        {/* Expertise Rings - Simple Grid Layout */}
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Expert Ring */}
          {expertTechs.length > 0 && (
            <div className="text-center">
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-brand/10 border border-brand/20">
                <div className="w-3 h-3 rounded-full bg-brand"></div>
                <span className="text-sm font-semibold text-brand">Expert Level</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
                {expertTechs.map((tech, index) => (
                  <div
                    key={tech.slug}
                    className="tech-card group relative"
                    onMouseEnter={() => setHoveredTech(tech)}
                    onMouseLeave={() => setHoveredTech(null)}
                  >
                    <div className="p-6 rounded-2xl bg-card border-2 border-border hover:border-brand/40 transition-all duration-300 hover:shadow-xl hover:shadow-brand/10 hover:-translate-y-1">
                      <div 
                        className="w-16 h-16 mx-auto mb-3 rounded-xl flex items-center justify-center text-2xl font-bold text-white transition-transform group-hover:scale-110"
                        style={{ backgroundColor: tech.color }}
                      >
                        {tech.title.split(/[\s.-]/).map(w => w[0]).join('').substring(0, 2).toUpperCase()}
                      </div>
                      <h3 className="font-semibold text-sm text-center">{tech.title}</h3>
                      <p className="text-xs text-muted-foreground text-center mt-1">{tech.category}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Advanced Ring */}
          {advancedTechs.length > 0 && (
            <div className="text-center">
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20">
                <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                <span className="text-sm font-semibold text-purple-600 dark:text-purple-400">Advanced Level</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5 gap-6">
                {advancedTechs.map((tech, index) => (
                  <div
                    key={tech.slug}
                    className="tech-card group relative"
                    onMouseEnter={() => setHoveredTech(tech)}
                    onMouseLeave={() => setHoveredTech(null)}
                  >
                    <div className="p-5 rounded-2xl bg-card border-2 border-border hover:border-purple-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1">
                      <div 
                        className="w-14 h-14 mx-auto mb-3 rounded-xl flex items-center justify-center text-xl font-bold text-white transition-transform group-hover:scale-110"
                        style={{ backgroundColor: tech.color }}
                      >
                        {tech.title.split(/[\s.-]/).map(w => w[0]).join('').substring(0, 2).toUpperCase()}
                      </div>
                      <h3 className="font-semibold text-xs text-center">{tech.title}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Proficient Ring */}
          {proficientTechs.length > 0 && (
            <div className="text-center">
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/20">
                <div className="w-3 h-3 rounded-full bg-teal-500"></div>
                <span className="text-sm font-semibold text-teal-600 dark:text-teal-400">Proficient Level</span>
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-6 gap-4">
                {proficientTechs.map((tech, index) => (
                  <div
                    key={tech.slug}
                    className="tech-card group relative"
                    onMouseEnter={() => setHoveredTech(tech)}
                    onMouseLeave={() => setHoveredTech(null)}
                  >
                    <div className="p-4 rounded-xl bg-card border-2 border-border hover:border-teal-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/10 hover:-translate-y-1">
                      <div 
                        className="w-12 h-12 mx-auto mb-2 rounded-lg flex items-center justify-center text-lg font-bold text-white transition-transform group-hover:scale-110"
                        style={{ backgroundColor: tech.color }}
                      >
                        {tech.title.split(/[\s.-]/).map(w => w[0]).join('').substring(0, 2).toUpperCase()}
                      </div>
                      <h3 className="font-semibold text-xs text-center">{tech.title}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Hover Info Card */}
        <div className="flex justify-center mt-8">
          {hoveredTech && (
          <div className="max-w-md p-6 rounded-2xl bg-card border-2 border-border shadow-2xl">
            <div className="flex items-start gap-4">
              <div 
                className="w-12 h-12 rounded-lg flex items-center justify-center text-2xl font-bold text-white flex-shrink-0"
                style={{ backgroundColor: hoveredTech.color }}
              >
                {hoveredTech.title.split(/[\s.-]/).map(w => w[0]).join('').substring(0, 2).toUpperCase()}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-1">{hoveredTech.title}</h3>
                <div className="flex items-center gap-2 mb-2">
                  <span 
                    className="px-2 py-0.5 rounded-full text-xs font-semibold"
                    style={{ 
                      backgroundColor: `${hoveredTech.color}20`,
                      color: hoveredTech.color 
                    }}
                  >
                    {hoveredTech.experience}
                  </span>
                  <span className="text-xs text-muted-foreground">{hoveredTech.category}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  {hoveredTech.description}
                </p>
                {hoveredTech.website && (
                  <a
                    href={hoveredTech.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-brand hover:underline"
                  >
                    Learn more →
                  </a>
                )}
              </div>
            </div>
          </div>
          )}
        </div>

        {/* Stats Summary */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mt-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-brand mb-1">
              {technologies.filter(t => t.experience === 'Expert' && t.active).length}
            </div>
            <div className="text-sm text-muted-foreground">Expert Level</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-500 mb-1">
              {technologies.filter(t => t.experience === 'Advanced' && t.active).length}
            </div>
            <div className="text-sm text-muted-foreground">Advanced Level</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-teal-500 mb-1">
              {technologies.filter(t => t.experience === 'Proficient' && t.active).length}
            </div>
            <div className="text-sm text-muted-foreground">Proficient Level</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-foreground mb-1">
              {technologies.filter(t => t.active && t.featured).length}
            </div>
            <div className="text-sm text-muted-foreground">Featured Techs</div>
          </div>
        </div>
        
        {/* Note about featured technologies */}
        <div className="text-center mt-8 text-sm text-muted-foreground">
          Showing {technologies.filter(t => t.active && t.featured).length} featured technologies from our full stack of {technologies.filter(t => t.active).length}+ tools
        </div>
      </div>
    </section>
  )
}
