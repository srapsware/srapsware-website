'use client'

import { Technology } from '@/lib/content'
import Image from 'next/image'
import Link from 'next/link'
import { ExternalLink, TrendingUp } from 'lucide-react'

interface TechnologyWithProjects extends Technology {
  projectCount: number
}

interface TechnologyCardProps {
  technology: TechnologyWithProjects
}

export default function TechnologyCard({ technology }: TechnologyCardProps) {
  const experienceColors = {
    Expert: 'bg-green-500/10 text-green-600 border-green-500/20',
    Advanced: 'bg-blue-500/10 text-blue-600 border-blue-500/20',
    Proficient: 'bg-purple-500/10 text-purple-600 border-purple-500/20'
  }
  
  const experienceColor = experienceColors[technology.experience as keyof typeof experienceColors] || 'bg-muted text-muted-foreground'
  
  return (
    <Link
      href={`/technologies/${technology.slug}`}
      className="group block"
    >
      <div className="h-full bg-card border border-border rounded-xl p-6 transition-all duration-300 hover:shadow-xl hover:border-primary/50 hover:-translate-y-1">
        {/* Logo & Featured Badge */}
        <div className="flex items-start justify-between mb-4">
          <div 
            className="w-16 h-16 rounded-xl flex items-center justify-center p-3 transition-transform duration-300 group-hover:scale-110"
            style={{ backgroundColor: `${technology.color}15` }}
          >
            <Image
              src={technology.logo}
              alt={technology.title}
              width={48}
              height={48}
              className="w-full h-full object-contain"
              unoptimized
            />
          </div>
          {technology.featured && (
            <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-amber-500/10 text-amber-600 border border-amber-500/20 text-xs font-medium">
              <TrendingUp className="w-3 h-3" />
              Featured
            </span>
          )}
        </div>
        
        {/* Title & Category */}
        <div className="mb-3">
          <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
            {technology.title}
          </h3>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>{technology.category}</span>
            <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
            <span className={`px-2 py-0.5 rounded-md border text-xs font-medium ${experienceColor}`}>
              {technology.experience}
            </span>
          </div>
        </div>
        
        {/* Description */}
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {technology.description}
        </p>
        
        {/* Footer Stats */}
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div className="flex items-center gap-2 text-sm">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold">
              {technology.projectCount}
            </div>
            <span className="text-muted-foreground">
              {technology.projectCount === 1 ? 'Project' : 'Projects'}
            </span>
          </div>
          
          <div className="flex items-center gap-1 text-xs text-primary group-hover:gap-2 transition-all">
            <span>View Details</span>
            <ExternalLink className="w-3 h-3" />
          </div>
        </div>
      </div>
    </Link>
  )
}
