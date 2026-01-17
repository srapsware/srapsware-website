'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Portfolio, Technology } from '@/lib/content'
import { getCdnUrl } from '@/lib/utils'
import { ExternalLink, Calendar, Award } from 'lucide-react'

interface PortfolioCardProps {
  project: Portfolio
  featured?: boolean
  allTechnologies?: Technology[]
}

export default function PortfolioCard({ project, featured = false, allTechnologies = [] }: PortfolioCardProps) {
  // Create tech map for quick lookup
  const techMap = new Map(allTechnologies.map(t => [t.title.toLowerCase(), t]))
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const cardRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  // 3D tilt effect on hover
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100

    setMousePosition({ x, y })

    // CSS will handle transforms via custom properties
  }

  const handleMouseEnter = () => {
    // CSS transitions handle hover effects
  }

  const handleMouseLeave = () => {
    // CSS transitions handle reset
  }

  // Initialize content for hover effects only
  useEffect(() => {
    // Content will be visible by default, only animate on hover
  }, [])

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
  }

  return (
    <Link href={`/portfolio/${project.slug}`}>
      <div
        ref={cardRef}
        className={`group relative w-full h-full rounded-2xl overflow-hidden cursor-pointer ${
          featured ? 'shadow-2xl' : 'shadow-lg'
        } hover:shadow-2xl transition-shadow duration-300`}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Image */}
        <div 
          ref={imageRef}
          className="absolute inset-0 w-full h-full"
        >
          {project.image ? (
            <Image
              src={getCdnUrl(project.image)}
              alt={project.title}
              fill
              className="object-cover"
              sizes={featured ? '(max-width: 768px) 100vw, 50vw' : '(max-width: 768px) 100vw, 25vw'}
              unoptimized
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center">
              <span className="text-4xl font-bold text-white/50">{project.title.charAt(0)}</span>
            </div>
          )}
        </div>

        {/* Gradient overlay - always visible */}
        <div
          ref={overlayRef}
          className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/80 group-hover:from-black/80 group-hover:via-black/70 group-hover:to-black/90 transition-all duration-500"
          style={{
            // @ts-ignore
            '--x': '50%',
            '--y': '50%'
          }}
        />

        {/* Hover gradient effect */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(59, 130, 246, 0.4), transparent 40%)`
          }}
        />

        {/* Status Badge */}
        {project.status && (
          <div className="absolute top-4 right-4 z-10">
            <div className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md ${
              project.status.toLowerCase() === 'completed' 
                ? 'bg-green-500/20 text-green-300 border border-green-500/30'
                : project.status.toLowerCase() === 'in progress' || project.status.toLowerCase() === 'in-progress'
                ? 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30'
                : 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
            }`}>
              {project.status.replace('-', ' ').toUpperCase()}
            </div>
          </div>
        )}

        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-4 left-4 z-10">
            <div className="px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md bg-purple-500/20 text-purple-300 border border-purple-500/30 flex items-center gap-1">
              <Award className="w-3 h-3" />
              Featured
            </div>
          </div>
        )}

        {/* Content - Always Visible */}
        <div
          ref={contentRef}
          className="absolute inset-0 z-10 flex flex-col justify-end p-4 md:p-6 text-white"
        >
          {/* Category */}
          {project.categories && project.categories.length > 0 && (
            <div className="mb-2">
              <span className="text-xs font-semibold text-blue-300 uppercase tracking-wider">
                {project.categories[0]}
              </span>
            </div>
          )}

          {/* Title */}
          <h3 className={`font-bold mb-2 line-clamp-2 ${
            featured ? 'text-3xl' : 'text-xl'
          }`}>
            {project.title}
          </h3>

          {/* Description - only for featured cards */}
          {featured && project.description && (
            <p className="text-sm text-gray-300 mb-4 line-clamp-2">
              {project.description}
            </p>
          )}

          {/* Client & Date */}
          <div className="flex items-center gap-4 mb-4 text-xs text-gray-400">
            {project.client && (
              <span className="flex items-center gap-1">
                {project.client}
              </span>
            )}
            {project.completed_on && (
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {formatDate(project.completed_on)}
              </span>
            )}
          </div>

          {/* Technologies */}
          {project.technologies && project.technologies.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-2">
              {project.technologies.slice(0, featured ? 5 : 4).map((techName) => {
                const tech = techMap.get(techName.toLowerCase())
                return (
                  <div
                    key={techName}
                    title={techName}
                    className="tech-badge relative w-8 h-8 p-1.5 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all flex items-center justify-center"
                  >
                    {tech?.logo ? (
                      <Image
                        src={getCdnUrl(tech.logo)}
                        alt={techName}
                        width={20}
                        height={20}
                        className="object-contain"
                      />
                    ) : (
                      <span className="text-xs font-bold">{techName.charAt(0)}</span>
                    )}
                  </div>
                )
              })}
              {project.technologies.length > (featured ? 5 : 4) && (
                <div className="tech-badge w-8 h-8 rounded-lg text-xs font-medium bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                  +{project.technologies.length - (featured ? 5 : 4)}
                </div>
              )}
            </div>
          )}

          {/* View Project Link */}
          <div className="flex items-center gap-2 text-sm font-semibold text-blue-300 group-hover:text-blue-200 transition-colors">
            <span>View Project</span>
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </div>
        </div>

        {/* Bottom shine effect */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </Link>
  )
}
