'use client'

import { useState, useEffect, useRef } from 'react'
import { Portfolio, Technology } from '@/lib/content'
import { getCdnUrl } from '@/lib/utils'
import { Search, X, Filter as FilterIcon, Sparkles } from 'lucide-react'
import Image from 'next/image'

interface PortfolioFilterProps {
  projects: Portfolio[]
  categories: string[]
  technologies: Technology[]
  onFilter: (filtered: Portfolio[]) => void
}

export default function PortfolioFilter({ 
  projects, 
  categories, 
  technologies, 
  onFilter 
}: PortfolioFilterProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>([])
  const [showFilters, setShowFilters] = useState(false)

  const filterBarRef = useRef<HTMLDivElement>(null)
  const filtersRef = useRef<HTMLDivElement>(null)

  // Apply filters whenever selections change
  useEffect(() => {
    const filtered = projects.filter(project => {
      // Search filter
      const matchesSearch = searchQuery === '' || 
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.client?.toLowerCase().includes(searchQuery.toLowerCase())

      // Category filter
      const matchesCategory = selectedCategories.length === 0 ||
        project.categories?.some(cat => selectedCategories.includes(cat))

      // Technology filter
      const matchesTechnology = selectedTechnologies.length === 0 ||
        project.technologies?.some(tech => selectedTechnologies.includes(tech))

      return matchesSearch && matchesCategory && matchesTechnology
    })

    onFilter(filtered)
  }, [searchQuery, selectedCategories, selectedTechnologies, projects, onFilter])

  // Removed GSAP animation - using CSS transitions

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    )
  }

  const toggleTechnology = (technology: string) => {
    setSelectedTechnologies(prev =>
      prev.includes(technology)
        ? prev.filter(t => t !== technology)
        : [...prev, technology]
    )
  }

  const clearAllFilters = () => {
    setSearchQuery('')
    setSelectedCategories([])
    setSelectedTechnologies([])
  }

  const activeFilterCount = selectedCategories.length + selectedTechnologies.length + (searchQuery ? 1 : 0)

  return (
    <div 
      ref={filterBarRef}
      className="flex flex-col gap-4"
    >
      <div className="flex flex-col gap-4">
        {/* Search and Filter Toggle */}
        <div className="flex gap-4 items-center">
          {/* Search Bar */}
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search projects, clients, or descriptions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-12 py-4 rounded-xl border-2 border-border bg-background focus:border-primary focus:outline-none transition-colors text-foreground placeholder:text-muted-foreground"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-muted rounded-full transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Filter Toggle Button */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`flex items-center gap-2 px-6 py-4 rounded-xl font-semibold transition-all whitespace-nowrap ${
              showFilters || activeFilterCount > 0
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted text-foreground hover:bg-muted/80'
            }`}
          >
            <FilterIcon className="w-5 h-5" />
            <span>Filters</span>
            {activeFilterCount > 0 && (
              <span className="ml-1 px-2 py-0.5 rounded-full bg-white/20 text-xs font-bold">
                {activeFilterCount}
              </span>
            )}
          </button>

          {/* Clear All */}
          {activeFilterCount > 0 && (
            <button
              onClick={clearAllFilters}
              className="px-4 py-4 rounded-xl font-semibold bg-destructive/10 text-destructive hover:bg-destructive/20 transition-colors whitespace-nowrap"
            >
              Clear All
            </button>
          )}
        </div>

        {/* Filter Pills Panel */}
        {showFilters && (
          <div
            ref={filtersRef}
            className="overflow-hidden transition-all duration-300 ease-in-out"
          >
            <div className="space-y-6 pt-2">
            {/* Categories */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-4 h-4 text-primary" />
                <h3 className="text-sm font-semibold text-foreground">Categories</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => toggleCategory(category)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      selectedCategories.includes(category)
                        ? 'bg-primary text-primary-foreground scale-105 shadow-lg'
                        : 'bg-muted text-muted-foreground hover:bg-muted/80 hover:scale-105'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-4 h-4 text-primary" />
                <h3 className="text-sm font-semibold text-foreground">Technologies</h3>
              </div>
              <div className="flex flex-wrap gap-2 max-h-40 overflow-y-auto scrollbar-thin scrollbar-thumb-primary scrollbar-track-muted">
                {technologies.map(technology => (
                  <button
                    key={technology.title}
                    onClick={() => toggleTechnology(technology.title)}
                    title={technology.title}
                    className={`group relative p-2 rounded-lg transition-all ${
                      selectedTechnologies.includes(technology.title)
                        ? 'bg-primary scale-110 shadow-lg ring-2 ring-primary'
                        : 'bg-muted hover:bg-muted/80 hover:scale-105'
                    }`}
                  >
                    {technology.logo ? (
                      <div className="relative w-8 h-8 flex items-center justify-center">
                        <Image
                          src={getCdnUrl(technology.logo)}
                          alt={technology.title}
                          width={32}
                          height={32}
                          className="object-contain"
                        />
                      </div>
                    ) : (
                      <div 
                        className="w-8 h-8 rounded flex items-center justify-center text-xs font-bold"
                        style={{ 
                          backgroundColor: technology.color ? `${technology.color}20` : '#f0f0f0',
                          color: technology.color || '#333'
                        }}
                      >
                        {technology.title.charAt(0)}
                      </div>
                    )}
                    <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 px-2 py-1 bg-popover text-popover-foreground text-xs rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-50">
                      {technology.title}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
          </div>
        )}

        {/* Active Filters Display */}
        {activeFilterCount > 0 && !showFilters && (
          <div className="flex flex-wrap gap-2 items-center">
            <span className="text-xs font-semibold text-muted-foreground">Active filters:</span>
            {searchQuery && (
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                Search: {searchQuery}
              </span>
            )}
            {selectedCategories.map(category => (
              <span
                key={category}
                className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 flex items-center gap-1"
              >
                {category}
                <button
                  onClick={() => toggleCategory(category)}
                  className="hover:bg-primary/20 rounded-full p-0.5"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            ))}
            {selectedTechnologies.map(technology => (
              <span
                key={technology}
                className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 flex items-center gap-1"
              >
                {technology}
                <button
                  onClick={() => toggleTechnology(technology)}
                  className="hover:bg-primary/20 rounded-full p-0.5"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
