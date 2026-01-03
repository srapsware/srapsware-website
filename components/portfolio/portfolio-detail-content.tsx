'use client'

import { useEffect, useRef } from 'react'
import { Portfolio, Technology } from '@/lib/content'
import { CheckCircle2, Zap, Target, Users } from 'lucide-react'

interface PortfolioDetailContentProps {
  project: Portfolio
  allTechnologies: Technology[]
}

export default function PortfolioDetailContent({ project, allTechnologies }: PortfolioDetailContentProps) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const techRef = useRef<HTMLDivElement>(null)
  
  // Match project technologies with full data from passed prop
  const projectTechDetails = project.technologies
    ?.map(techName => {
      const found = allTechnologies.find(
        tech => tech.title.toLowerCase() === techName.toLowerCase()
      )
      return found
    })
    .filter((tech): tech is Technology => tech !== undefined) || []

  // Removed GSAP animations - content displays immediately

  return (
    <div ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          
          {/* Technologies Section */}
          {projectTechDetails.length > 0 && (
            <section className="fade-in-section mb-20">
              <div className="flex items-center gap-3 mb-8">
                <Zap className="w-6 h-6 text-primary" />
                <h2 className="text-3xl font-bold">Technology Stack</h2>
              </div>
              
              <div 
                ref={techRef}
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
              >
                {projectTechDetails.map((tech: any, index) => (
                  <div
                    key={index}
                    className="group relative p-6 rounded-xl border-2 border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-lg bg-card"
                  >
                    {/* Technology Logo/Icon */}
                    {tech.logo ? (
                      <div className="w-12 h-12 mb-4 relative">
                        <img
                          src={tech.logo}
                          alt={tech.title}
                          className="w-full h-full object-contain"
                          style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))' }}
                        />
                      </div>
                    ) : (
                      <div 
                        className="w-12 h-12 mb-4 rounded-lg flex items-center justify-center text-2xl font-bold"
                        style={{ 
                          backgroundColor: tech.color ? `${tech.color}20` : '#f0f0f0',
                          color: tech.color || '#333'
                        }}
                      >
                        {tech.title.charAt(0)}
                      </div>
                    )}

                    {/* Technology Name */}
                    <h3 className="font-bold text-lg mb-1">{tech.title}</h3>
                    
                    {/* Category */}
                    <p className="text-xs text-muted-foreground mb-2">{tech.category}</p>
                    
                    {/* Experience Badge */}
                    {tech.experience && (
                      <span 
                        className="inline-block px-2 py-1 rounded text-xs font-medium"
                        style={{
                          backgroundColor: tech.color ? `${tech.color}15` : '#f0f0f0',
                          color: tech.color || '#666'
                        }}
                      >
                        {tech.experience}
                      </span>
                    )}

                    {/* Hover Glow Effect */}
                    <div 
                      className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity blur-xl"
                      style={{ backgroundColor: tech.color || '#3b82f6' }}
                    />
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Project Overview / Content */}
          {project.content && (
            <section className="fade-in-section mb-20">
              <div className="flex items-center gap-3 mb-8">
                <Target className="w-6 h-6 text-primary" />
                <h2 className="text-3xl font-bold">Project Overview</h2>
              </div>
              
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <div 
                  className="text-lg leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: project.content.replace(/\n/g, '<br />') }}
                />
              </div>
            </section>
          )}

          {/* Categories Section */}
          {project.categories && project.categories.length > 0 && (
            <section className="fade-in-section mb-20">
              <div className="flex items-center gap-3 mb-8">
                <Target className="w-6 h-6 text-primary" />
                <h2 className="text-3xl font-bold">Project Categories</h2>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {project.categories.map((category, index) => (
                  <span
                    key={index}
                    className="px-6 py-3 rounded-xl bg-card border-2 border-primary/30 hover:border-primary hover:shadow-lg transition-all duration-300 font-semibold text-lg"
                  >
                    {category}
                  </span>
                ))}
              </div>
            </section>
          )}

          {/* Results/Impact Section */}
          <section className="fade-in-section">
            <div className="flex items-center gap-3 mb-8">
              <Users className="w-6 h-6 text-primary" />
              <h2 className="text-3xl font-bold">Project Impact</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-8 rounded-xl bg-gradient-to-br from-blue-500/10 to-blue-600/10 border-2 border-blue-500/20">
                <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
              <div className="p-8 rounded-xl bg-gradient-to-br from-green-500/10 to-green-600/10 border-2 border-green-500/20">
                <div className="text-4xl font-bold text-green-600 mb-2">On Time</div>
                <div className="text-sm text-muted-foreground">Project Delivery</div>
              </div>
              <div className="p-8 rounded-xl bg-gradient-to-br from-purple-500/10 to-purple-600/10 border-2 border-purple-500/20">
                <div className="text-4xl font-bold text-purple-600 mb-2">Exceeded</div>
                <div className="text-sm text-muted-foreground">Expectations</div>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  )
}
