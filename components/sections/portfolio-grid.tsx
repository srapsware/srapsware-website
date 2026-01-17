'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { getCdnUrl } from '@/lib/utils'
import { ExternalLink, Calendar } from 'lucide-react'
import type { Portfolio } from '@/lib/content'

interface PortfolioGridProps {
  projects: Portfolio[]
  showFilters?: boolean
  columns?: 2 | 3 | 4
}

export function PortfolioGrid({ projects, showFilters = true, columns = 3 }: PortfolioGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [selectedTech, setSelectedTech] = useState<string>('all')

  // Get unique categories and technologies
  const categories = ['all', ...Array.from(new Set(projects.flatMap(p => p.categories || [])))]
  const technologies = ['all', ...Array.from(new Set(projects.flatMap(p => p.technologies || [])))]

  // Filter projects
  const filteredProjects = projects.filter(project => {
    const categoryMatch = selectedCategory === 'all' || project.categories?.includes(selectedCategory)
    const techMatch = selectedTech === 'all' || project.technologies?.includes(selectedTech)
    return categoryMatch && techMatch
  })

  const gridCols = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
  }[columns]

  return (
    <div className="space-y-8">
      {showFilters && (
        <div className="flex flex-wrap gap-4">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            <span className="text-sm font-medium text-muted-foreground self-center">Category:</span>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  selectedCategory === cat
                    ? 'bg-brand text-white'
                    : 'bg-muted text-foreground hover:bg-muted/80'
                }`}
              >
                {cat === 'all' ? 'All Projects' : cat}
              </button>
            ))}
          </div>

          {/* Technology Filter */}
          <div className="flex flex-wrap gap-2">
            <span className="text-sm font-medium text-muted-foreground self-center">Tech:</span>
            {technologies.slice(0, 8).map(tech => (
              <button
                key={tech}
                onClick={() => setSelectedTech(tech)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  selectedTech === tech
                    ? 'bg-brand text-white'
                    : 'bg-muted text-foreground hover:bg-muted/80'
                }`}
              >
                {tech === 'all' ? 'All Tech' : tech}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Projects Grid */}
      <div className={`grid ${gridCols} gap-6`}>
        {filteredProjects.map((project) => (
          <Link
            key={project.slug}
            href={`/portfolio/${project.slug}`}
            className="group relative overflow-hidden rounded-2xl border border-border bg-card hover:border-brand/50 hover:shadow-xl hover:shadow-brand/10 transition-all"
          >
            {/* Image */}
            <div className="relative aspect-[16/10] overflow-hidden bg-muted">
              {project.image && (
                <Image
                  src={getCdnUrl(project.image)}
                  alt={project.image_alt || project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              )}
              
              {/* Status Badge */}
              {project.status && (
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-background/90 backdrop-blur-sm border border-border text-xs font-medium">
                  {project.status}
                </div>
              )}

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="flex items-start justify-between gap-2 mb-3">
                <h3 className="text-xl font-bold group-hover:text-brand transition-colors line-clamp-1">
                  {project.title}
                </h3>
                {project.project_url && (
                  <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-brand transition-colors shrink-0" />
                )}
              </div>

              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                {project.description}
              </p>

              {/* Technologies */}
              {project.technologies && project.technologies.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 rounded bg-muted text-xs font-medium text-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 rounded bg-muted text-xs font-medium text-muted-foreground">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
              )}

              {/* Footer */}
              <div className="flex items-center justify-between text-xs text-muted-foreground pt-4 border-t border-border">
                {project.client && (
                  <span className="font-medium">{project.client}</span>
                )}
                {project.completed_on && (
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>{new Date(project.completed_on).getFullYear()}</span>
                  </div>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No projects found with the selected filters.</p>
        </div>
      )}
    </div>
  )
}
