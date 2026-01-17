'use client'

import { Technology } from '@/lib/content'
import { getCdnUrl } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { ExternalLink, TrendingUp, Network, Tag } from 'lucide-react'

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
  
  const ecosystemColors: Record<string, string> = {
    'JavaScript': 'bg-yellow-500/10 text-yellow-700 border-yellow-500/20',
    'PHP': 'bg-indigo-500/10 text-indigo-700 border-indigo-500/20',
    'Python': 'bg-blue-500/10 text-blue-700 border-blue-500/20',
    'Java': 'bg-orange-500/10 text-orange-700 border-orange-500/20',
    'Ruby': 'bg-red-500/10 text-red-700 border-red-500/20',
    'Go': 'bg-cyan-500/10 text-cyan-700 border-cyan-500/20',
    'Rust': 'bg-orange-600/10 text-orange-800 border-orange-600/20',
    'Mobile': 'bg-purple-500/10 text-purple-700 border-purple-500/20',
    'DevOps': 'bg-gray-500/10 text-gray-700 border-gray-500/20',
    'Database': 'bg-emerald-500/10 text-emerald-700 border-emerald-500/20',
    'Cloud': 'bg-sky-500/10 text-sky-700 border-sky-500/20',
    'AI-ML': 'bg-pink-500/10 text-pink-700 border-pink-500/20',
    'Design': 'bg-violet-500/10 text-violet-700 border-violet-500/20',
    'Other': 'bg-slate-500/10 text-slate-700 border-slate-500/20'
  }
  
  const experienceColor = experienceColors[technology.experience as keyof typeof experienceColors] || 'bg-muted text-muted-foreground'
  const ecosystemColor = technology.ecosystem ? (ecosystemColors[technology.ecosystem] || 'bg-muted text-muted-foreground') : ''
  
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
              src={getCdnUrl(technology.logo)}
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
        
        {/* Title & Badges */}
        <div className="mb-3">
          <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
            {technology.title}
          </h3>
          
          {/* Badges Row */}
          <div className="flex flex-wrap items-center gap-1.5 mb-2">
            <span className="text-xs text-muted-foreground">{technology.category}</span>
            <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
            <span className={`px-2 py-0.5 rounded-md border text-xs font-medium ${experienceColor}`}>
              {technology.experience}
            </span>
            
            {/* Ecosystem Badge */}
            {technology.ecosystem && (
              <>
                <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
                <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md border text-xs font-medium ${ecosystemColor}`}>
                  <Network className="w-3 h-3" />
                  {technology.ecosystem}
                </span>
              </>
            )}
            
            {/* Parent Badge */}
            {technology.parent && (
              <>
                <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-muted/50 text-muted-foreground border border-muted text-xs">
                  ↳ {technology.parent}
                </span>
              </>
            )}
          </div>
          
          {/* Tags */}
          {technology.tags && technology.tags.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {technology.tags.slice(0, 3).map((tag, index) => (
                <span
                  key={index}
                  className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-accent/50 text-accent-foreground text-xs"
                >
                  <Tag className="w-2.5 h-2.5" />
                  {tag}
                </span>
              ))}
              {technology.tags.length > 3 && (
                <span className="px-1.5 py-0.5 text-xs text-muted-foreground">
                  +{technology.tags.length - 3}
                </span>
              )}
            </div>
          )}
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
