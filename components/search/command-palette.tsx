'use client'

import * as React from 'react'
import { useRouter } from 'next/navigation'
import { FileText, FolderKanban, Code2, FileCode, HelpCircle } from 'lucide-react'
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import { DialogTitle, DialogDescription } from '@/components/ui/dialog'
import { VisuallyHidden } from '@/components/ui/visually-hidden'
import { useSearch } from '@/lib/use-search'
import type { SearchDocument } from '@/lib/search-documents'

interface CommandPaletteProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

const typeIcons = {
  blog: FileText,
  portfolio: FolderKanban,
  technology: Code2,
  service: FileCode,
  page: HelpCircle,
}

const typeBadges = {
  blog: { label: 'Blog', color: 'bg-blue-500/10 text-blue-600 dark:text-blue-400' },
  portfolio: { label: 'Project', color: 'bg-purple-500/10 text-purple-600 dark:text-purple-400' },
  technology: { label: 'Tech', color: 'bg-green-500/10 text-green-600 dark:text-green-400' },
  service: { label: 'Service', color: 'bg-orange-500/10 text-orange-600 dark:text-orange-400' },
  page: { label: 'Page', color: 'bg-gray-500/10 text-gray-600 dark:text-gray-400' },
}

export function CommandPalette({ open, onOpenChange }: CommandPaletteProps) {
  const router = useRouter()
  const { query, setQuery, results, isLoading } = useSearch()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        onOpenChange(!open)
      }
    }

    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [open, onOpenChange])

  const handleSelect = React.useCallback(
    (url: string) => {
      setQuery('')
      onOpenChange(false)
      // Small delay to ensure dialog closes before navigation
      setTimeout(() => {
        window.location.href = url
      }, 50)
    },
    [onOpenChange]
  )

  // Group results by type
  const groupedResults = React.useMemo(() => {
    const groups: Record<string, SearchDocument[]> = {}
    
    results.forEach(result => {
      if (!groups[result.type]) {
        groups[result.type] = []
      }
      groups[result.type].push(result)
    })
    
    return groups
  }, [results])

  if (!mounted) return null

  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <VisuallyHidden>
        <DialogTitle>Search</DialogTitle>
        <DialogDescription>Search for pages, blog posts, projects, and more</DialogDescription>
      </VisuallyHidden>
      <CommandInput
        placeholder="Search for pages, blog posts, projects..."
        value={query}
        onValueChange={setQuery}
      />
      <CommandList>
        {isLoading && (
          <div className="py-6 text-center text-sm text-muted-foreground">
            Loading search index...
          </div>
        )}
        
        {!isLoading && query && results.length === 0 && (
          <CommandEmpty>No results found.</CommandEmpty>
        )}

        {!isLoading && !query && (
          <div className="py-6 text-center text-sm text-muted-foreground">
            Type to search pages, blog posts, projects, and more...
          </div>
        )}

        {!isLoading && results.length > 0 && Object.entries(groupedResults).map(([type, items]) => {
          const Icon = typeIcons[type as keyof typeof typeIcons] || HelpCircle
          const badge = typeBadges[type as keyof typeof typeBadges] || typeBadges.page
          
          return (
            <CommandGroup key={type} heading={badge.label + 's'}>
              {items.map((item) => (
                <CommandItem
                  key={item.id}
                  value={`${item.title} ${item.description} ${item.tags?.join(' ')}`}
                  onSelect={() => handleSelect(item.url)}
                  onClick={() => handleSelect(item.url)}
                  className="flex items-start gap-3 py-3"
                >
                  <Icon className="mt-0.5 h-4 w-4 shrink-0 opacity-60" />
                  <div className="flex-1 overflow-hidden">
                    <div className="flex items-center gap-2">
                      <p className="font-medium truncate">{item.title}</p>
                      <span className={`text-xs px-2 py-0.5 rounded-full whitespace-nowrap ${badge.color}`}>
                        {badge.label}
                      </span>
                    </div>
                    {item.description && (
                      <p className="text-sm text-muted-foreground line-clamp-1 mt-1">
                        {item.description}
                      </p>
                    )}
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          )
        })}
      </CommandList>
    </CommandDialog>
  )
}
