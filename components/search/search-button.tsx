'use client'

import * as React from 'react'
import { Search } from 'lucide-react'

interface SearchButtonProps {
  onClick: () => void
  variant?: 'desktop' | 'mobile'
}

export function SearchButton({ onClick, variant = 'desktop' }: SearchButtonProps) {
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (variant === 'mobile') {
    return (
      <button
        onClick={onClick}
        className="flex h-9 w-9 items-center justify-center rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
        aria-label="Search"
      >
        <Search className="h-5 w-5" />
      </button>
    )
  }

  return (
    <button
      onClick={onClick}
      className="group relative flex h-9 w-full items-center gap-2 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 sm:w-48 lg:w-56"
    >
      <Search className="h-4 w-4 shrink-0 opacity-50" />
      <span className="flex-1 text-left text-muted-foreground">
        Search...
      </span>
      {mounted && (
        <kbd className="pointer-events-none hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
          <span className="text-xs">{navigator.platform.includes('Mac') ? '⌘' : 'Ctrl'}</span>K
        </kbd>
      )}
    </button>
  )
}
