'use client'

import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, EffectCreative } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react'
import type { Portfolio } from '@/lib/content'
import type { Technology } from '@/lib/content'
import { getCdnUrl } from '@/lib/utils'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-creative'

interface PortfolioSliderProps {
  projects: Portfolio[]
  technologies: Technology[]
  autoplay?: boolean
  showNavigation?: boolean
  showPagination?: boolean
  title?: string
  description?: string
  filterByCategories?: string[]
  filterByTechnologies?: string[]
  excludeSlug?: string
  limit?: number
  showViewAll?: boolean
  viewAllLink?: string
}

export function PortfolioSlider({ 
  projects,
  technologies,
  autoplay = true,
  showNavigation = true,
  showPagination = true,
  title,
  description,
  filterByCategories,
  filterByTechnologies,
  excludeSlug,
  limit,
  showViewAll = false,
  viewAllLink = '/portfolio'
}: PortfolioSliderProps) {
  const swiperRef = useRef<SwiperType | null>(null)
  
  // Create a map for quick technology lookup
  const technologiesMap = new Map<string, Technology>()
  technologies.forEach(tech => {
    technologiesMap.set(tech.title, tech)
  })

  // Filter projects based on categories/technologies if provided
  let filteredProjects = projects
  
  if (filterByCategories || filterByTechnologies || excludeSlug) {
    filteredProjects = projects.filter(project => {
      // Exclude specific project (for related projects)
      if (excludeSlug && project.slug === excludeSlug) return false
      
      // Filter by categories
      if (filterByCategories && filterByCategories.length > 0) {
        const hasMatchingCategory = project.categories?.some(cat => 
          filterByCategories.includes(cat)
        )
        if (hasMatchingCategory) return true
      }
      
      // Filter by technologies
      if (filterByTechnologies && filterByTechnologies.length > 0) {
        const hasMatchingTech = project.technologies?.some(tech => 
          filterByTechnologies.includes(tech)
        )
        if (hasMatchingTech) return true
      }
      
      // If no filters matched and filters were provided, exclude
      if ((filterByCategories && filterByCategories.length > 0) || 
          (filterByTechnologies && filterByTechnologies.length > 0)) {
        return false
      }
      
      return true
    })
  }
  
  // Apply limit if specified
  if (limit && limit > 0) {
    filteredProjects = filteredProjects.slice(0, limit)
  }

  // Generate random Ken Burns directions for each project
  const getRandomDirection = (index: number) => {
    const directions = [
      { x: -15, y: -15 },  // top-left
      { x: 15, y: -15 },   // top-right
      { x: -15, y: 15 },   // bottom-left
      { x: 15, y: 15 },    // bottom-right
      { x: -20, y: 0 },    // left
      { x: 20, y: 0 },     // right
      { x: 0, y: -20 },    // top
      { x: 0, y: 20 },     // bottom
    ]
    return directions[index % directions.length]
  }

  if (filteredProjects.length === 0) {
    return (
      <div className="text-center py-12 text-muted-foreground">
        No projects available.
      </div>
    )
  }

  return (
    <div className="relative">
      {/* Optional Title and Description */}
      {(title || description) && (
        <div className="flex items-center justify-between mb-8">
          <div>
            {title && <h2 className="text-3xl font-bold mb-2">{title}</h2>}
            {description && <p className="text-muted-foreground">{description}</p>}
          </div>
          {showViewAll && (
            <Link
              href={viewAllLink}
              className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all group"
            >
              View All
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          )}
        </div>
      )}
      
      <div className="group">
      {/* Swiper Container */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectCreative]}
        spaceBetween={24}
        slidesPerView={1}
        loop={filteredProjects.length > 4}
        speed={800}
        autoplay={autoplay ? {
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        } : false}
        pagination={showPagination ? {
          clickable: true,
          dynamicBullets: true,
          dynamicMainBullets: 3
        } : false}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 24
          },
          1280: {
            slidesPerView: filteredProjects.length >= 4 ? 4 : filteredProjects.length,
            spaceBetween: 24
          }
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper
        }}
        className="!pb-14"
      >
        {filteredProjects.map((project, index) => {
          const direction = getRandomDirection(index)
          return (
            <SwiperSlide key={project.slug} className="h-auto">
              <Link
                href={`/portfolio/${project.slug}`}
                className="group/card relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card hover:border-brand/50 hover:shadow-2xl hover:shadow-brand/20 transition-all duration-500 h-full min-h-[420px] portfolio-card"
              >
                {/* Image Container with Overlay */}
                <div 
                  className="relative aspect-[4/3] overflow-hidden bg-muted"
                  onMouseEnter={(e) => {
                    const img = e.currentTarget.querySelector('img')
                    if (img) {
                      img.style.transform = `scale(1.35) translate(${direction.x}%, ${direction.y}%)`
                    }
                  }}
                  onMouseLeave={(e) => {
                    const img = e.currentTarget.querySelector('img')
                    if (img) {
                      img.style.transform = 'scale(1.2)'
                    }
                  }}
                >
                  {project.image && (
                    <>
                      <Image
                        src={getCdnUrl(project.image)}
                        alt={project.image_alt || project.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-[8000ms] ease-linear"
                        style={{
                          transform: 'scale(1.2)',
                        }}
                        unoptimized
                      />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />
                  </>
                )}
                
                {/* Status Badge */}
                {project.status && (
                  <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-brand/90 backdrop-blur-sm text-white text-xs font-semibold shadow-lg">
                    {project.status}
                  </div>
                )}

                {/* External Link Icon - Shows on Hover */}
                <div className="absolute top-4 left-4 opacity-0 group-hover/card:opacity-100 transition-all duration-300">
                  <div className="p-2 rounded-full bg-white/90 backdrop-blur-sm">
                    <ExternalLink className="w-4 h-4 text-brand" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-5">
                {/* Categories */}
                {project.categories && project.categories.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.categories.slice(0, 2).map((category, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded-md bg-accent-primary/10 text-accent-primary text-xs font-medium"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                )}

                {/* Title */}
                <h3 className="text-lg font-bold mb-2 group-hover/card:text-brand transition-colors line-clamp-2">
                  {project.title}
                </h3>

                {/* Description - Always 2 lines space */}
                <div className="mb-4 h-10">
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {project.description || '\u00A0'}
                  </p>
                </div>

                {/* Footer - Technologies */}
                {project.technologies && project.technologies.length > 0 && (
                  <div className="flex items-center gap-2 pt-4 border-t border-border">
                    {/* Show first 3 technology logos */}
                    {project.technologies.slice(0, 3).map((tech, i) => {
                      const techData = technologiesMap.get(tech)
                      if (!techData?.logo) {
                        return (
                          <span
                            key={i}
                            className="px-2 py-1 rounded bg-muted text-muted-foreground text-xs font-medium"
                            title={tech}
                          >
                            {tech}
                          </span>
                        )
                      }
                      return (
                        <div
                          key={i}
                          className="relative w-8 h-8 p-1.5 rounded-lg bg-white dark:bg-muted flex items-center justify-center shadow-sm hover:shadow-md transition-shadow"
                          title={tech}
                          style={{ 
                            borderColor: techData.color || '#e5e7eb',
                            borderWidth: '1px',
                            borderStyle: 'solid'
                          }}
                        >
                          <Image
                            src={getCdnUrl(techData.logo)}
                            alt={tech}
                            width={20}
                            height={20}
                            className="object-contain"
                            unoptimized
                          />
                        </div>
                      )
                    })}
                    
                    {/* Show +N badge if more than 3 technologies */}
                    {project.technologies.length > 3 && (
                      <div 
                        className="w-8 h-8 rounded-lg bg-brand/10 text-brand text-xs font-semibold flex items-center justify-center shadow-sm hover:shadow-md transition-shadow border border-brand/30"
                        title={`${project.technologies.slice(3).join(', ')}`}
                      >
                        +{project.technologies.length - 3}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </Link>
          </SwiperSlide>
          )
        })}
      </Swiper>

      {/* Custom Navigation Buttons */}
      {showNavigation && projects.length > 4 && (
        <>
          {/* Previous Button */}
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 p-3 rounded-full bg-white dark:bg-card border-2 border-brand shadow-lg opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 hover:bg-brand hover:text-white"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 p-3 rounded-full bg-white dark:bg-card border-2 border-brand shadow-lg opacity-0 group-hover:opacity-100 group-hover:-translate-x-0 transition-all duration-300 hover:bg-brand hover:text-white"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}

      {/* Custom Pagination Styles */}
      <style jsx global>{`
        .swiper-pagination {
          bottom: 0 !important;
        }
        
        .swiper-pagination-bullet {
          background: hsl(var(--brand)) !important;
          opacity: 0.3 !important;
          transition: all 0.3s ease !important;
        }
        
        .swiper-pagination-bullet-active {
          opacity: 1 !important;
          transform: scale(1.2);
        }
        
        .swiper-pagination-bullet:hover {
          opacity: 0.7 !important;
        }
      `}</style>
      </div>
    </div>
  )
}
