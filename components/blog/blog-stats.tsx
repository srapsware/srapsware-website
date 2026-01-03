'use client'

import { FileText, FolderOpen, Tag } from 'lucide-react'

interface BlogStatsProps {
  totalPosts: number
  totalCategories: number
  totalTags: number
}

export function BlogStats({ totalPosts, totalCategories, totalTags }: BlogStatsProps) {
  const stats = [
    {
      icon: FileText,
      label: 'Articles',
      value: totalPosts,
      color: 'text-blue-500'
    },
    {
      icon: FolderOpen,
      label: 'Categories',
      value: totalCategories,
      color: 'text-green-500'
    },
    {
      icon: Tag,
      label: 'Tags',
      value: totalTags,
      color: 'text-purple-500'
    }
  ]

  return (
    <div className="grid grid-cols-3 gap-4 p-6 rounded-xl bg-muted/30 border border-border">
      {stats.map(({ icon: Icon, label, value, color }) => (
        <div key={label} className="text-center">
          <div className="flex justify-center mb-2">
            <Icon className={`w-5 h-5 ${color}`} />
          </div>
          <div className="text-2xl font-bold">{value}</div>
          <div className="text-sm text-muted-foreground">{label}</div>
        </div>
      ))}
    </div>
  )
}
