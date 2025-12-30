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
}

export function PortfolioSlider({ 
  projects,
  technologies,
  autoplay = true,
  showNavigation = true,
  showPagination = true
}: PortfolioSliderProps) {
  const swiperRef = useRef<SwiperType | null>(null)
  
  // Create a map for quick technology lookup
  const technologiesMap = new Map<string, Technology>()
  technologies.forEach(tech => {
    technologiesMap.set(tech.title, tech)
  })

  if (projects.length === 0) {
    return (
      <div className="text-center py-12 text-muted-foreground">
        No projects available.
      </div>
    )
  }

  return (
    <div className="relative group">
      {/* Swiper Container */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectCreative]}
        spaceBetween={24}
        slidesPerView={1}
        loop={projects.length > 4}
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
            slidesPerView: 4,
            spaceBetween: 24
          }
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper
        }}
        className="!pb-14"
      >
        {projects.map((project) => (
          <SwiperSlide key={project.slug} className="h-auto">
            <Link
              href={`/portfolio/${project.slug}`}
              className="group/card relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card hover:border-brand/50 hover:shadow-2xl hover:shadow-brand/20 transition-all duration-500 h-full min-h-[420px] portfolio-card"
            >
              {/* Image Container with Overlay */}
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                {project.image && (
                  <>
                    <Image
                      src={project.image}
                      alt={project.image_alt || project.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-all duration-700 group-hover/card:scale-110 group-hover/card:rotate-2"
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
                            src={techData.logo}
                            alt={tech}
                            width={20}
                            height={20}
                            className="object-contain"
                          />
                        </div>
                      )
                    })}
                    
                    {/* Show +N badge if more than 3 technologies */}
                    {project.technologies.length > 3 && (
                      <div 
                        className="w-8 h-8 rounded-lg bg-brand/10 text-brand text-xs font-semibold flex items-center justify-center shadow-sm hover:shadow-md transition-shadow"
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
        ))}
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
  )
}
