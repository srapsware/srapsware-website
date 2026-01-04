'use client'

import { useState, useEffect, useMemo, useCallback } from 'react'
import Fuse from 'fuse.js'
import type { SearchDocument } from '@/lib/search-documents'

interface UseSearchResult {
  query: string
  setQuery: (query: string) => void
  results: SearchDocument[]
  isLoading: boolean
  error: Error | null
  search: (searchQuery: string) => void
}

const DEBOUNCE_DELAY = 200 // ms

export function useSearch(): UseSearchResult {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchDocument[]>([])
  const [searchIndex, setSearchIndex] = useState<SearchDocument[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  // Fetch search index on mount
  useEffect(() => {
    let mounted = true

    async function fetchSearchIndex() {
      try {
        setIsLoading(true)
        const response = await fetch('/api/search-index')
        
        if (!response.ok) {
          throw new Error('Failed to fetch search index')
        }
        
        const data = await response.json()
        
        if (mounted) {
          setSearchIndex(data)
          setIsLoading(false)
        }
      } catch (err) {
        if (mounted) {
          setError(err instanceof Error ? err : new Error('Unknown error'))
          setIsLoading(false)
        }
      }
    }

    fetchSearchIndex()

    return () => {
      mounted = false
    }
  }, [])

  // Initialize Fuse.js
  const fuse = useMemo(() => {
    if (searchIndex.length === 0) return null

    return new Fuse(searchIndex, {
      keys: [
        { name: 'title', weight: 0.5 },
        { name: 'description', weight: 0.3 },
        { name: 'tags', weight: 0.2 },
        { name: 'content', weight: 0.1 },
      ],
      threshold: 0.3,
      minMatchCharLength: 2,
      includeScore: true,
      ignoreLocation: true,
    })
  }, [searchIndex])

  // Debounced search function
  const search = useCallback((searchQuery: string) => {
    setQuery(searchQuery)

    if (!searchQuery.trim() || !fuse) {
      setResults([])
      return
    }

    const searchResults = fuse.search(searchQuery)
    const documents = searchResults.map(result => result.item)
    setResults(documents)
  }, [fuse])

  // Debounce the query changes
  useEffect(() => {
    if (!query.trim()) {
      setResults([])
      return
    }

    const timeoutId = setTimeout(() => {
      search(query)
    }, DEBOUNCE_DELAY)

    return () => clearTimeout(timeoutId)
  }, [query, search])

  return {
    query,
    setQuery,
    results,
    isLoading,
    error,
    search,
  }
}
