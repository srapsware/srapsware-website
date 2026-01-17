'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Portfolio } from '@/lib/content'
import { getCdnUrl } from '@/lib/utils'
import { Calendar, ExternalLink, Award, ArrowLeft, Play } from 'lucide-react'

interface PortfolioDetailHeroProps {
  project: Portfolio
}

export default function PortfolioDetailHero({ project }: PortfolioDetailHeroProps) {
  const heroRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  // Removed GSAP animations - content displays immediately

  const formatDate = (dateString: string) => {
    // Handle ISO 8601 date strings properly
    const date = new Date(dateString)
    // Check if date is valid
    if (isNaN(date.getTime())) {
      return 'Date not available'
    }
    return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
  }

  return (
    <div ref={heroRef} className="relative min-h-[70vh] flex items-end overflow-hidden">
      {/* Background Image with Parallax */}
      <div 
        ref={imageRef}
        className="absolute inset-0 w-full h-full"
      >
        {project.image ? (
          <Image
            src={getCdnUrl(project.image)}
            alt={project.title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary/30 to-purple-500/30" />
        )}
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pb-16 pt-32">
        <div ref={contentRef} className="max-w-4xl">
          {/* Back Button */}
          <Link 
            href="/portfolio"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Portfolio
          </Link>

          {/* Status & Featured Badges */}
          <div className="flex flex-wrap gap-3 mb-6">
            {project.status && (
              <span
                className={`px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm border ${
                  project.status.toLowerCase() === 'completed'
                    ? 'bg-green-500/20 text-green-300 border-green-500/30'
                    : project.status.toLowerCase() === 'in-progress'
                    ? 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30'
                    : 'bg-blue-500/20 text-blue-300 border-blue-500/30'
                }`}
              >
                {project.status.replace('-', ' ').toUpperCase()}
              </span>
            )}
            {project.featured && (
              <span className="px-4 py-2 rounded-full text-sm font-semibold bg-purple-500/20 text-purple-300 border border-purple-500/30 backdrop-blur-sm flex items-center gap-1">
                <Award className="w-4 h-4" />
                Featured Project
              </span>
            )}
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            {project.title}
          </h1>

          {/* Description */}
          {project.description && (
            <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-3xl">
              {project.description}
            </p>
          )}

          {/* Meta Information */}
          <div className="flex flex-wrap gap-6 mb-8">
            {project.client && (
              <div className="flex flex-col">
                <span className="text-white/60 text-sm mb-1">Client</span>
                <span className="text-white font-semibold">{project.client}</span>
              </div>
            )}
            {project.industry && (
              <div className="flex flex-col">
                <span className="text-white/60 text-sm mb-1">Industry</span>
                <span className="text-white font-semibold">{project.industry}</span>
              </div>
            )}
            {project.duration && (
              <div className="flex flex-col">
                <span className="text-white/60 text-sm mb-1">Duration</span>
                <span className="text-white font-semibold">{project.duration}</span>
              </div>
            )}
            {project.completed_on && (
              <div className="flex flex-col">
                <span className="text-white/60 text-sm mb-1">Completed</span>
                <div className="flex items-center gap-2 text-white font-semibold">
                  <Calendar className="w-4 h-4" />
                  {formatDate(project.completed_on)}
                </div>
              </div>
            )}
            {project.technologies && project.technologies.length > 0 && (
              <div className="flex flex-col">
                <span className="text-white/60 text-sm mb-1">Technologies</span>
                <span className="text-white font-semibold">{project.technologies.length} Tech Stack</span>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            {project.project_url && (
              <a
                href={project.project_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
                Visit Live Site
              </a>
            )}
            {project.video && (
              <a
                href={project.video}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white rounded-lg font-semibold hover:bg-white/20 transition-colors backdrop-blur-sm border border-white/20"
              >
                <Play className="w-5 h-5" />
                Watch Demo
              </a>
            )}
            {project.android && (
              <a
                href={project.android}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white rounded-lg font-semibold hover:bg-white/20 transition-colors backdrop-blur-sm border border-white/20"
              >
                Android App
              </a>
            )}
            {project.ios && (
              <a
                href={project.ios}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white rounded-lg font-semibold hover:bg-white/20 transition-colors backdrop-blur-sm border border-white/20"
              >
                iOS App
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/60 rounded-full" />
        </div>
      </div>
    </div>
  )
}
