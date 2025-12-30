'use client'

import { useState, useEffect, useRef } from 'react'
import { gsap } from '@/lib/animations/gsap-setup'
import { Technology } from '@/lib/content'
import Image from 'next/image'

interface TechShowcaseProps {
  technologies: Technology[]
  title?: string
  subtitle?: string
}

export default function TechShowcase({ 
  technologies,
  title = "Technologies We Master",
  subtitle = "Building with industry-leading tools and frameworks"
}: TechShowcaseProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeCategory, setActiveCategory] = useState<string>('All')

  // Group by expertise
  const expertTechs = technologies.filter(t => t.experience === 'Expert' && t.active && t.featured)
  const advancedTechs = technologies.filter(t => t.experience === 'Advanced' && t.active && t.featured)
  const proficientTechs = technologies.filter(t => t.experience === 'Proficient' && t.active && t.featured)

  // Group by category for tabs
  const allOtherTechs = [...advancedTechs, ...proficientTechs]
  const categories = ['All', ...Array.from(new Set(allOtherTechs.map(t => t.category)))]
  
  const filteredTechs = activeCategory === 'All' 
    ? allOtherTechs 
    : allOtherTechs.filter(t => t.category === activeCategory)

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
  }, [])

  return (
    <section 
      ref={containerRef}
      className="py-24 border-t border-border overflow-hidden bg-gradient-to-b from-background to-muted/20"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 tech-section">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Expert Level - Marquee */}
        {expertTechs.length > 0 && (
          <div className="mb-20 tech-section">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand/10 border border-brand/20">
                <div className="w-3 h-3 rounded-full bg-brand animate-pulse"></div>
                <span className="text-sm font-semibold text-brand">Expert Level Technologies</span>
              </div>
            </div>

            {/* Marquee Container */}
            <div className="relative overflow-hidden py-8">
              {/* Gradient overlays for smooth edges */}
              <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10"></div>
              <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10"></div>

              {/* Scrolling content */}
              <div className="flex gap-12 animate-marquee hover:pause-marquee">
                {/* Duplicate for seamless loop */}
                {[...expertTechs, ...expertTechs, ...expertTechs].map((tech, index) => (
                  <div
                    key={`${tech.slug}-${index}`}
                    className="flex-shrink-0 group"
                  >
                    <div className="flex flex-col items-center gap-3">
                      <div className="w-24 h-24 flex items-center justify-center p-5 rounded-2xl bg-card border border-border transition-all duration-300 group-hover:border-brand/50 group-hover:shadow-xl group-hover:shadow-brand/20 group-hover:-translate-y-1">
                        <Image
                          src={tech.logo}
                          alt={tech.title}
                          width={64}
                          height={64}
                          className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-110"
                        />
                      </div>
                      <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                        {tech.title}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Advanced & Proficient - Tabbed Grid */}
        {allOtherTechs.length > 0 && (
          <div className="tech-section">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20">
                <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                <span className="text-sm font-semibold text-purple-600 dark:text-purple-400">
                  Advanced & Proficient Technologies
                </span>
              </div>
            </div>

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
            <div className="flex justify-center">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
                {filteredTechs.map((tech) => (
                  <div
                    key={tech.slug}
                    className="group"
                  >
                    <div className="flex flex-col items-center gap-3">
                      <div className="w-20 h-20 flex items-center justify-center p-4 rounded-xl bg-card border border-border transition-all duration-300 group-hover:border-purple-500/50 group-hover:shadow-lg group-hover:shadow-purple-500/20 group-hover:-translate-y-1">
                        <Image
                          src={tech.logo}
                          alt={tech.title}
                          width={56}
                          height={56}
                          className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-110"
                        />
                      </div>
                      
                      {/* Tech name and badge */}
                      <div className="text-center">
                        <p className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                          {tech.title}
                        </p>
                        <span 
                          className="text-xs px-2 py-0.5 rounded-full font-semibold mt-1 inline-block opacity-0 group-hover:opacity-100 transition-opacity"
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
        )}

        {/* Stats Summary */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mt-20 tech-section">
          <div className="text-center p-6 rounded-2xl bg-card border border-border">
            <div className="text-3xl font-bold text-brand mb-1">
              {expertTechs.length}
            </div>
            <div className="text-sm text-muted-foreground">Expert Level</div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-card border border-border">
            <div className="text-3xl font-bold text-purple-500 mb-1">
              {advancedTechs.length}
            </div>
            <div className="text-sm text-muted-foreground">Advanced Level</div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-card border border-border">
            <div className="text-3xl font-bold text-teal-500 mb-1">
              {proficientTechs.length}
            </div>
            <div className="text-sm text-muted-foreground">Proficient Level</div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-card border border-border">
            <div className="text-3xl font-bold text-foreground mb-1">
              {categories.length - 1}
            </div>
            <div className="text-sm text-muted-foreground">Categories</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        .animate-marquee {
          animation: marquee 40s linear infinite;
        }

        .pause-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
