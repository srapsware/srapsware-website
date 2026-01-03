'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { Portfolio, Technology } from '@/lib/content'
import PortfolioCard from './portfolio-card'
import PortfolioFilter from './portfolio-filter'
import { Loader2 } from 'lucide-react'

interface PortfolioGridProps {
  projects: Portfolio[]
  categories: string[]
  technologies: Technology[]
}

const ITEMS_PER_PAGE = 24

// Smart bento grid sizing with better space filling
const getSmartBentoSize = (index: number, totalCards: number) => {
  // Use modulo pattern for better distribution
  // Featured card (2x2): every 12th card
  if (index % 12 === 6) {
    return 'col-span-2 row-span-2'
  }
  // Wide card (2x1): every 5th card (but not featured)
  if (index % 5 === 0 && index % 12 !== 6) {
    return 'col-span-2 row-span-1'
  }
  // Tall card (1x2): every 7th card (but not featured or wide)
  if (index % 7 === 3 && index % 12 !== 6 && index % 5 !== 0) {
    return 'col-span-1 row-span-2'
  }
  // Default: regular card (1x1)
  return 'col-span-1 row-span-1'
}

export default function PortfolioGrid({ projects, categories, technologies }: PortfolioGridProps) {
  const [filteredProjects, setFilteredProjects] = useState<Portfolio[]>(projects)
  const [displayedProjects, setDisplayedProjects] = useState<Portfolio[]>([])
  const [page, setPage] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [hasMore, setHasMore] = useState(true)
  
  const gridRef = useRef<HTMLDivElement>(null)
  const observerTarget = useRef<HTMLDivElement>(null)

  // Initialize displayed projects
  useEffect(() => {
    const initial = filteredProjects.slice(0, ITEMS_PER_PAGE)
    setDisplayedProjects(initial)
    setPage(1)
    setHasMore(filteredProjects.length > ITEMS_PER_PAGE)
  }, [filteredProjects])

  // Infinite scroll observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting && hasMore && !isLoading) {
          loadMore()
        }
      },
      { threshold: 0.1 }
    )

    if (observerTarget.current) {
      observer.observe(observerTarget.current)
    }

    return () => observer.disconnect()
  }, [hasMore, isLoading, page, filteredProjects])

  // Removed GSAP animations - cards display immediately

  const loadMore = useCallback(() => {
    if (isLoading || !hasMore) return

    setIsLoading(true)
    
    // Simulate loading delay for smooth UX
    setTimeout(() => {
      const nextPage = page + 1
      const startIndex = page * ITEMS_PER_PAGE
      const endIndex = startIndex + ITEMS_PER_PAGE
      const newProjects = filteredProjects.slice(startIndex, endIndex)

      if (newProjects.length > 0) {
        setDisplayedProjects(prev => [...prev, ...newProjects])
        setPage(nextPage)
        setHasMore(endIndex < filteredProjects.length)
      } else {
        setHasMore(false)
      }

      setIsLoading(false)
    }, 300)
  }, [page, filteredProjects, isLoading, hasMore])

  const handleFilter = useCallback((filtered: Portfolio[]) => {
    const cards = document.querySelectorAll('.portfolio-card')
    
    if (cards.length === 0) {
      // No cards to animate, just update immediately
      setFilteredProjects(filtered)
      return
    }

    // Update projects immediately without animation
    setFilteredProjects(filtered)
    // Scroll to top of grid
    gridRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [])

  return (
    <div className="relative py-20">
      {/* Filter Bar - Full Width Sticky just below header */}
      <div className="sticky top-[76px] md:top-[65px] z-40 w-full bg-background border-b border-border shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <PortfolioFilter
            projects={projects}
            categories={categories}
            technologies={technologies}
            onFilter={handleFilter}
          />
        </div>
      </div>

      <div className="container mx-auto px-4 mt-12">
        {/* Results Count */}
        <div className="mb-8 text-center">
          <p className="text-muted-foreground">
            Showing <span className="font-semibold text-foreground">{displayedProjects.length}</span> of{' '}
            <span className="font-semibold text-foreground">{filteredProjects.length}</span> projects
          </p>
        </div>

        {/* Bento Grid with Dense Packing */}
        <div 
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[300px] mb-12 max-w-full"
          style={{ gridAutoFlow: 'dense' }}
        >
          {displayedProjects.map((project, index) => {
            const sizeClass = getSmartBentoSize(index, displayedProjects.length)
            return (
              <div
                key={project.slug}
                className={`portfolio-card ${sizeClass} min-h-[300px]`}
              >
              <PortfolioCard 
                project={project} 
                featured={index % 7 === 6} // Every 7th card is featured (large)
                allTechnologies={technologies}
              />
            </div>
            )
          })}
        </div>

        {/* Loading indicator */}
        {isLoading && (
          <div className="flex justify-center items-center py-12">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
            <span className="ml-3 text-muted-foreground">Loading more projects...</span>
          </div>
        )}

        {/* Intersection observer target */}
        <div ref={observerTarget} className="h-20" />

        {/* End of results */}
        {!hasMore && filteredProjects.length > 0 && (
          <div className="text-center py-12">
            <div className="inline-block px-6 py-3 rounded-full bg-muted text-muted-foreground">
              🎉 You've seen all {filteredProjects.length} projects!
            </div>
          </div>
        )}

        {/* No results */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold mb-2">No projects found</h3>
            <p className="text-muted-foreground mb-8">Try adjusting your filters to see more results</p>
            <button
              onClick={() => handleFilter(projects)}
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </div>

      {/* Background decorative elements (clipped to avoid horizontal scroll) */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-96 h-96 -translate-x-1/4 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 translate-x-1/4 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl" />
      </div>
    </div>
  )
}
