'use client'

import { Technology } from '@/lib/content'
import { getCdnUrl } from '@/lib/utils'
import Image from 'next/image'
import { ExternalLink, Award, Calendar, TrendingUp } from 'lucide-react'

interface TechnologyHeroProps {
  technology: Technology
  projectCount: number
}

export default function TechnologyHero({ technology, projectCount }: TechnologyHeroProps) {
  const experienceColors = {
    Expert: 'from-green-500/20 to-green-600/20 border-green-500/30',
    Advanced: 'from-blue-500/20 to-blue-600/20 border-blue-500/30',
    Proficient: 'from-purple-500/20 to-purple-600/20 border-purple-500/30'
  }
  
  const experienceGradient = experienceColors[technology.experience as keyof typeof experienceColors] || 'from-muted to-muted border-border'
  
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background with Technology Color */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{ backgroundColor: technology.color }}
      />
      
      {/* Decorative Blobs */}
      <div className="absolute top-10 left-10 w-72 h-72 rounded-full blur-3xl opacity-20"
        style={{ backgroundColor: technology.color }}
      />
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full blur-3xl opacity-20"
        style={{ backgroundColor: technology.color }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Technology Info */}
            <div>
              {/* Badges */}
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/80 backdrop-blur-sm border border-border text-sm font-medium">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  {technology.category}
                </span>
                
                {technology.featured && (
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-600 text-sm font-medium">
                    <TrendingUp className="w-4 h-4" />
                    Featured
                  </span>
                )}
                
                <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${experienceGradient} border text-sm font-medium`}>
                  <Award className="w-4 h-4" />
                  {technology.experience}
                </span>
              </div>
              
              {/* Title */}
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                {technology.title}
              </h1>
              
              {/* Short Description */}
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                {technology.description}
              </p>
              
              {/* Stats */}
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-3 px-4 py-3 bg-background/80 backdrop-blur-sm border border-border rounded-lg">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">{projectCount}+</div>
                    <div className="text-xs text-muted-foreground">Projects</div>
                  </div>
                </div>
              </div>
              
              {/* Website Link */}
              {technology.website && (
                <a
                  href={technology.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
                >
                  Official Documentation
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
            
            {/* Right: Large Logo */}
            <div className="flex items-center justify-center">
              <div 
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-3xl p-12 flex items-center justify-center transition-transform duration-500 hover:scale-105"
                style={{ 
                  backgroundColor: `${technology.color}15`,
                  boxShadow: `0 20px 60px ${technology.color}40`
                }}
              >
                <Image
                  src={getCdnUrl(technology.logo)}
                  alt={technology.title}
                  width={256}
                  height={256}
                  className="w-full h-full object-contain drop-shadow-2xl"
                  unoptimized
                  priority
                />
                
                {/* Floating Badge */}
                <div className="absolute -top-4 -right-4 bg-background border-4 border-background rounded-full shadow-xl">
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold text-white"
                    style={{ backgroundColor: technology.color }}
                  >
                    {technology.experience === 'Expert' ? '⭐' : 
                     technology.experience === 'Advanced' ? '🚀' : '💡'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
