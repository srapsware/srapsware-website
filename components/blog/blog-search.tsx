'use client'

import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'

interface BlogSearchProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
}

export function BlogSearch({ value, onChange, placeholder = "Search articles..." }: BlogSearchProps) {
  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
      <Input
        type="search"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="pl-10"
      />
    </div>
  )
}
