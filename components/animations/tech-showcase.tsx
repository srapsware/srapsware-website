'use client'

import { useState, useEffect, useRef } from 'react'
import { gsap } from '@/lib/animations/gsap-setup'
import { Technology } from '@/lib/content'
import Image from 'next/image'
import AnimatedBackground from './animated-background'

interface TechShowcaseProps {
  technologies: Technology[]
  title?: string
  subtitle?: string
  filterSlugs?: string[] // Optional: show only specific technologies by slug
  showStats?: boolean // Optional: show/hide stats summary
}

export default function TechShowcase({ 
  technologies,
  title = "Technologies We Master",
  subtitle = "Building with industry-leading tools and frameworks",
  filterSlugs,
  showStats = true
}: TechShowcaseProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeCategory, setActiveCategory] = useState<string>('All')

  // Filter technologies based on filterSlugs if provided
  const baseTechs = filterSlugs && filterSlugs.length > 0
    ? technologies.filter(t => filterSlugs.includes(t.slug) && t.active)
    : technologies.filter(t => t.active && t.featured)

  // Group by expertise
  const expertTechs = baseTechs.filter(t => t.experience === 'Expert')
  const allTechs = baseTechs

  // Group by category for tabs
  const categories = ['All', ...Array.from(new Set(allTechs.map(t => t.category)))]
  
  const filteredTechs = activeCategory === 'All' 
    ? allTechs 
    : allTechs.filter(t => t.category === activeCategory)

  useEffect(() => {
    if (!containerRef.current) return

    // Animate sections on scroll
    gsap.fromTo('.tech-section',
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 70%',
          toggleActions: 'play none none none',
          once: true
        }
      }
    )

    // Animate floating expert icons
    const floatingIcons = document.querySelectorAll('.floating-icon')
    floatingIcons.forEach((icon, index) => {
      gsap.to(icon, {
        y: `random(-30, 30)`,
        x: `random(-30, 30)`,
        rotation: `random(-15, 15)`,
        duration: `random(8, 15)`,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: index * 0.3
      })
    })
  }, [])

  return (
    <section 
      ref={containerRef}
      className="relative py-24 border-t border-border overflow-hidden"
    >
      {/* Animated Background */}
      <AnimatedBackground variant="tech" speed="normal" />
      
      {/* Floating Expert Tech Icons */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
        {expertTechs.slice(0, 15).map((tech, index) => (
          <div
            key={tech.slug}
            className="floating-icon absolute"
            style={{
              left: `${(index * 12 + 5) % 95}%`,
              top: `${(index * 17 + 10) % 85}%`,
              width: '80px',
              height: '80px'
            }}
          >
            <Image
              src={tech.logo}
              alt={tech.title}
              width={80}
              height={80}
              className="w-full h-full object-contain opacity-30"
            />
          </div>
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 tech-section">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* All Technologies - Tabbed Grid */}
        <div className="tech-section">
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2.5 rounded-lg font-medium text-sm transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-accent-primary text-white shadow-lg shadow-accent-primary/20'
                    : 'bg-card border border-border text-muted-foreground hover:border-brand/40 hover:text-foreground'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Logo Grid */}
          <div className="flex justify-center w-full">
            <div className="flex flex-wrap justify-center gap-4 max-w-7xl mx-auto">
              {filteredTechs.map((tech) => (
                <div
                  key={tech.slug}
                  className="group"
                >
                  <div className="flex flex-col items-center gap-2">
                    <div className={`w-14 h-14 flex items-center justify-center p-2.5 rounded-xl bg-card border transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1 group-hover:scale-110 ${
                      tech.experience === 'Expert' 
                        ? 'border-brand/30 group-hover:border-brand/70 group-hover:shadow-brand/20' 
                        : 'border-border group-hover:border-purple-500/50 group-hover:shadow-purple-500/20'
                    }`}>
                      <Image
                        src={tech.logo}
                        alt={tech.title}
                        width={48}
                        height={48}
                        className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-110"
                      />
                    </div>
                    
                    {/* Tech name and badge */}
                    <div className="text-center max-w-[56px]">
                      <p className="text-[11px] font-medium text-muted-foreground group-hover:text-foreground transition-colors line-clamp-2 leading-tight">
                        {tech.title}
                      </p>
                      <span 
                        className="text-[10px] px-1.5 py-0.5 rounded-full font-semibold mt-1 inline-block opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap"
                        style={{
                          backgroundColor: `${tech.color}20`,
                          color: tech.color
                        }}
                      >
                        {tech.experience}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Summary */}
        {showStats && (
          <div className="flex flex-wrap justify-center gap-6 max-w-2xl mx-auto mt-20 tech-section">
            {baseTechs.filter(t => t.experience === 'Expert').length > 0 && (
              <div className="text-center p-6 rounded-2xl bg-card border border-border min-w-[200px]">
                <div className="text-3xl font-bold text-brand mb-1">
                  {baseTechs.filter(t => t.experience === 'Expert').length}
                </div>
                <div className="text-sm text-muted-foreground">Expert Level</div>
              </div>
            )}
            {baseTechs.filter(t => t.experience === 'Advanced').length > 0 && (
              <div className="text-center p-6 rounded-2xl bg-card border border-border min-w-[200px]">
                <div className="text-3xl font-bold text-purple-500 mb-1">
                  {baseTechs.filter(t => t.experience === 'Advanced').length}
                </div>
                <div className="text-sm text-muted-foreground">Advanced Level</div>
              </div>
            )}
            {baseTechs.filter(t => t.experience === 'Proficient').length > 0 && (
              <div className="text-center p-6 rounded-2xl bg-card border border-border min-w-[200px]">
                <div className="text-3xl font-bold text-teal-500 mb-1">
                  {baseTechs.filter(t => t.experience === 'Proficient').length}
                </div>
                <div className="text-sm text-muted-foreground">Proficient Level</div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
