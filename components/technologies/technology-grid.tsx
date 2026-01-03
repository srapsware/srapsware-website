'use client'

import { useState, useMemo } from 'react'
import { Technology } from '@/lib/content'
import TechnologyCard from './technology-card'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'

interface TechnologyWithProjects extends Technology {
  projectCount: number
}

interface TechnologyGridProps {
  technologies: TechnologyWithProjects[]
}

export default function TechnologyGrid({ technologies }: TechnologyGridProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [selectedExperience, setSelectedExperience] = useState<string>('All')
  const [sortBy, setSortBy] = useState<'name' | 'projects' | 'experience'>('name')
  
  // Get unique categories
  const categories = useMemo(() => {
    const cats = [...new Set(technologies.map(t => t.category))].sort()
    return ['All', ...cats]
  }, [technologies])
  
  // Experience levels
  const experienceLevels = ['All', 'Expert', 'Advanced', 'Proficient']
  
  // Filter and sort technologies
  const filteredTechnologies = useMemo(() => {
    let filtered = technologies.filter(tech => {
      const matchesSearch = tech.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           tech.description.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesCategory = selectedCategory === 'All' || tech.category === selectedCategory
      const matchesExperience = selectedExperience === 'All' || tech.experience === selectedExperience
      
      return matchesSearch && matchesCategory && matchesExperience && tech.active
    })
    
    // Sort
    filtered.sort((a, b) => {
      if (sortBy === 'name') {
        return a.title.localeCompare(b.title)
      } else if (sortBy === 'projects') {
        return b.projectCount - a.projectCount
      } else {
        const expOrder = { 'Expert': 3, 'Advanced': 2, 'Proficient': 1 }
        return (expOrder[b.experience as keyof typeof expOrder] || 0) - (expOrder[a.experience as keyof typeof expOrder] || 0)
      }
    })
    
    return filtered
  }, [technologies, searchQuery, selectedCategory, selectedExperience, sortBy])
  
  return (
    <div className="space-y-8">
      {/* Filters */}
      <div className="sticky top-[76px] md:top-[65px] z-40 w-full bg-background border-b border-border shadow-lg">
        <div className="py-6 space-y-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search technologies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-12"
            />
          </div>
          
          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-primary text-primary-foreground shadow-lg scale-105'
                    : 'bg-accent hover:bg-accent/80 text-foreground'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Experience & Sort */}
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Experience:</span>
              <select
                value={selectedExperience}
                onChange={(e) => setSelectedExperience(e.target.value)}
                className="px-3 py-2 bg-accent border border-border rounded-lg text-sm"
              >
                {experienceLevels.map(level => (
                  <option key={level} value={level}>{level}</option>
                ))}
              </select>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'name' | 'projects' | 'experience')}
                className="px-3 py-2 bg-accent border border-border rounded-lg text-sm"
              >
                <option value="name">Name</option>
                <option value="projects">Projects</option>
                <option value="experience">Experience</option>
              </select>
            </div>
          </div>
          
          {/* Results Count */}
          <div className="text-sm text-muted-foreground">
            Showing {filteredTechnologies.length} of {technologies.filter(t => t.active).length} technologies
          </div>
        </div>
      </div>
      
      {/* Grid */}
      {filteredTechnologies.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredTechnologies.map(tech => (
            <TechnologyCard key={tech.slug} technology={tech} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-xl font-semibold mb-2">No technologies found</h3>
          <p className="text-muted-foreground">
            Try adjusting your search or filters
          </p>
        </div>
      )}
    </div>
  )
}
