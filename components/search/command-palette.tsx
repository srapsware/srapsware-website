'use client'

import {
CommandDialog,
CommandEmpty,
CommandGroup,
CommandInput,
CommandItem,
CommandList,
} from '@/components/ui/command'
import { DialogDescription,DialogTitle } from '@/components/ui/dialog'
import './search-dialog.css'
import type { SearchDocument } from '@/lib/search-documents'
import { useSearch } from '@/lib/use-search'
import { Code2,FileCode,FileText,FolderKanban,HelpCircle } from 'lucide-react'
import { useRouter } from 'next/navigation'
import * as React from 'react'

interface CommandPaletteProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

const typeIcons = {
  product: Code2,
  blog: FileText,
  portfolio: FolderKanban,
  technology: Code2,
  service: FileCode,
  page: HelpCircle,
}

const typeBadges = {
  product: { label: 'Product', color: 'bg-blue-500/10 text-blue-600 dark:text-blue-400' },
  blog: { label: 'Blog', color: 'bg-blue-500/10 text-blue-600 dark:text-blue-400' },
  portfolio: { label: 'Project', color: 'bg-purple-500/10 text-purple-600 dark:text-purple-400' },
  technology: { label: 'Tech', color: 'bg-green-500/10 text-green-600 dark:text-green-400' },
  service: { label: 'Service', color: 'bg-orange-500/10 text-orange-600 dark:text-orange-400' },
  page: { label: 'Page', color: 'bg-gray-500/10 text-gray-600 dark:text-gray-400' },
}

export function CommandPalette({ open, onOpenChange }: CommandPaletteProps) {
  const router = useRouter()
  const { query, setQuery, results, isLoading, error } = useSearch(open)
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
      router.push(url)
    },
    [onOpenChange, router, setQuery]
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
      <div className="shrink-0 px-5 pb-5 pr-20 pt-6">
        <DialogTitle>Search Srapsware</DialogTitle>
        <DialogDescription className="mt-2">Find services, projects, insights and tools.</DialogDescription>
      </div>
      <CommandInput
        placeholder="What are you looking for?"
        aria-label="Search the website"
        value={query}
        onValueChange={setQuery}
      />
      <CommandList>
        {isLoading && (
          <div className="py-6 text-center text-sm text-muted-foreground">
            Loading search index...
          </div>
        )}
        
        {error && <p role="alert" className="px-4 py-6 text-sm text-muted-foreground">Search is temporarily unavailable. Please close and reopen to try again, or use the website navigation.</p>}
        {!error && !isLoading && query.trim() && results.length === 0 && (
          <CommandEmpty>No matches yet. Try a service or technology name.</CommandEmpty>
        )}

        {!error && !isLoading && !query.trim() && (
          <CommandGroup heading="Explore Srapsware">
            {[
              ['Services', 'Explore what we can build together', '/services'],
              ['Our work', 'See projects and client experiences', '/portfolio'],
              ['Products & open source', 'Discover tools made by our team', '/products'],
              ['Start a project', 'Tell us what you have in mind', '/contact'],
            ].map(([title, description, url]) => <CommandItem key={url} value={url} onSelect={() => handleSelect(url)}>
              <div className="min-w-0"><p className="font-medium">{title}</p><p className="mt-1 text-sm text-muted-foreground">{description}</p></div>
            </CommandItem>)}
          </CommandGroup>
        )}

        {!isLoading && results.length > 0 && Object.entries(groupedResults).map(([type, items]) => {
          const Icon = typeIcons[type as keyof typeof typeIcons] || HelpCircle
          const badge = typeBadges[type as keyof typeof typeBadges] || typeBadges.page
          
          return (
            <CommandGroup key={type} heading={badge.label + 's'}>
              {items.map((item) => (
                <CommandItem
                  key={item.id}
                  value={item.id}
                  onSelect={() => handleSelect(item.url)}
                  className="flex items-start gap-3 py-3"
                >
                  <Icon className="mt-0.5 h-4 w-4 shrink-0 opacity-60" />
                  <div className="flex-1 overflow-hidden">
                    <div className="flex items-center gap-2">
                      <p className="min-w-0 font-medium truncate">{item.title}</p>
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
      <div className="shrink-0 border-t px-5 py-3 text-xs text-muted-foreground"><span className="hidden sm:inline">↑ ↓ to browse · Enter to open · </span>Esc to close</div>
    </CommandDialog>
  )
}
