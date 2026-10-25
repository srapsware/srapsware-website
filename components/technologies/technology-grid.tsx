'use client'

import { Input } from '@/components/ui/input'
import { Technology } from '@/lib/content'
import { Filter,Search } from 'lucide-react'
import { useMemo,useState } from 'react'
import TechnologyCard from './technology-card'

interface TechnologyWithProjects extends Technology {
  projectCount: number
}

interface TechnologyGridProps {
  technologies: TechnologyWithProjects[]
}

interface TechnologyWithRelevance extends TechnologyWithProjects {
  relevanceScore?: number
  matchType?: string
}

export default function TechnologyGrid({ technologies }: TechnologyGridProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [limit,setLimit] = useState(16)
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [selectedEcosystem, setSelectedEcosystem] = useState<string>('All')
  const [selectedExperience, setSelectedExperience] = useState<string>('All')
  const [sortBy, setSortBy] = useState<'name' | 'projects' | 'experience' | 'relevance'>('relevance')
  
  // Get unique categories
  const categories = useMemo(() => {
    const cats = [...new Set(technologies.map(t => t.category))].sort()
    return ['All', ...cats]
  }, [technologies])
  
  // Get unique ecosystems
  const ecosystems = useMemo(() => {
    const ecos = [...new Set(technologies.map(t => t.ecosystem).filter((e): e is string => Boolean(e)))].sort()
    return ['All', ...ecos]
  }, [technologies])
  
  // Experience levels
  const experienceLevels = ['All', 'Expert', 'Advanced', 'Proficient']
  
  // Enhanced search with relationship matching
  const searchTechnologies = (tech: TechnologyWithProjects, query: string): { matches: boolean; score: number; type: string } => {
    if (!query) return { matches: true, score: 0, type: '' }
    
    const lowerQuery = query.toLowerCase()
    const title = tech.title.toLowerCase()
    const slug = tech.slug.toLowerCase()
    const description = tech.description.toLowerCase()
    const parent = tech.parent?.toLowerCase() || ''
    const ecosystem = tech.ecosystem?.toLowerCase() || ''
    const related = tech.relatedTechnologies?.filter(r => typeof r === 'string').map(r => r.toLowerCase()) || []
    const tags = tech.tags?.filter(t => typeof t === 'string').map(t => t.toLowerCase()) || []
    
    // Exact title match (highest priority)
    if (title === lowerQuery || slug === lowerQuery) {
      return { matches: true, score: 100, type: 'exact' }
    }
    
    // Title contains query
    if (title.includes(lowerQuery)) {
      return { matches: true, score: 90, type: 'title' }
    }
    
    // Parent match (child of searched tech)
    if (parent === lowerQuery || parent.includes(lowerQuery)) {
      return { matches: true, score: 80, type: 'child' }
    }
    
    // Ecosystem match
    if (ecosystem === lowerQuery || ecosystem.includes(lowerQuery)) {
      return { matches: true, score: 70, type: 'ecosystem' }
    }
    
    // Related technologies match
    if (related.some(r => r === lowerQuery || r.includes(lowerQuery))) {
      return { matches: true, score: 60, type: 'related' }
    }
    
    // Tags match
    if (tags.some(t => t === lowerQuery || t.includes(lowerQuery))) {
      return { matches: true, score: 50, type: 'tag' }
    }
    
    // Description match (lowest priority)
    if (description.includes(lowerQuery)) {
      return { matches: true, score: 30, type: 'description' }
    }
    
    return { matches: false, score: 0, type: '' }
  }
  
  // Filter and sort technologies with relevance scoring
  const filteredTechnologies = useMemo(() => {
    const filtered: TechnologyWithRelevance[] = technologies.filter(tech => {
      const { matches } = searchTechnologies(tech, searchQuery)
      const matchesCategory = selectedCategory === 'All' || tech.category === selectedCategory
      const matchesEcosystem = selectedEcosystem === 'All' || tech.ecosystem === selectedEcosystem
      const matchesExperience = selectedExperience === 'All' || tech.experience === selectedExperience
      
      return matches && matchesCategory && matchesEcosystem && matchesExperience && tech.active
    }).map(tech => {
      const { score, type } = searchTechnologies(tech, searchQuery)
      return { ...tech, relevanceScore: score, matchType: type }
    })
    
    // Sort
    filtered.sort((a, b) => {
      if (sortBy === 'relevance') {
        return (b.relevanceScore || 0) - (a.relevanceScore || 0)
      } else if (sortBy === 'name') {
        return a.title.localeCompare(b.title)
      } else if (sortBy === 'projects') {
        return b.projectCount - a.projectCount
      } else {
        const expOrder = { 'Expert': 3, 'Advanced': 2, 'Proficient': 1 }
        return (expOrder[b.experience as keyof typeof expOrder] || 0) - (expOrder[a.experience as keyof typeof expOrder] || 0)
      }
    })
    
    return filtered
  }, [technologies, searchQuery, selectedCategory, selectedEcosystem, selectedExperience, sortBy])
  
  return (
    <div className="space-y-8"><h2 className="text-3xl font-semibold tracking-tight">Explore the technology catalogue.</h2>
      {/* Filters */}
      <div className="md:sticky md:top-[80px] z-20 w-full bg-background border-b border-border shadow-lg">
        <div className="py-6 space-y-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="search" aria-label="Search technologies"
              placeholder="Search technologies..."
              value={searchQuery}
              onChange={(e) => { setSearchQuery(e.target.value); setLimit(16) }}
              className="pl-10 h-12"
            />
          </div>
          
          {/* Ecosystem & Category Filters Row */}
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-muted-foreground" />
              <select
                aria-label="Technology ecosystem" value={selectedEcosystem}
                onChange={(e) => { setSelectedEcosystem(e.target.value); setLimit(16) }}
                className="px-3 py-2 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              >
                {ecosystems.map(ecosystem => (
                  <option key={ecosystem} value={ecosystem}>
                    {ecosystem} Ecosystem
                  </option>
                ))}
              </select>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Category:</span>
              <select
                aria-label="Technology category" value={selectedCategory}
                onChange={(e) => { setSelectedCategory(e.target.value); setLimit(16) }}
                className="px-3 py-2 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Experience:</span>
              <select
                aria-label="Experience level" value={selectedExperience}
                onChange={(e) => { setSelectedExperience(e.target.value); setLimit(16) }}
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
                aria-label="Sort technologies" value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'name' | 'projects' | 'experience' | 'relevance')}
                className="px-3 py-2 bg-accent border border-border rounded-lg text-sm"
              >
                <option value="relevance">Relevance</option>
                <option value="name">Name</option>
                <option value="projects">Projects</option>
                <option value="experience">Experience</option>
              </select>
            </div>
          </div>
          
          {/* Results Count */}
          <div className="text-sm text-muted-foreground">
            Showing {Math.min(limit,filteredTechnologies.length)} of {filteredTechnologies.length} matching technologies
          </div>
        </div>
      </div>
      
      {filteredTechnologies.length>limit&&<p className="text-sm text-muted-foreground">More tools are available below. Use search or filters to narrow the catalogue.</p>}
      {/* Grid */}
      {filteredTechnologies.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredTechnologies.slice(0,limit).map(tech => (
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
      {filteredTechnologies.length > limit && <div className="text-center"><button type="button" className="button-secondary" onClick={() => setLimit(value => value + 16)}>Show more technologies</button></div>}
    </div>
  )
}
