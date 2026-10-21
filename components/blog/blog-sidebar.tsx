'use client'

import { ResourceCallout } from './resource-callout'

import type { BlogPost } from '@/lib/content'
import { FolderOpen,TrendingUp } from 'lucide-react'
import Link from 'next/link'

interface BlogSidebarProps {
  categories: Array<{ name: string; count: number }>
  popularPosts: BlogPost[]
  tags: string[]
}

export function BlogSidebar({ categories, popularPosts, tags }: BlogSidebarProps) {
  return (
    <aside className="space-y-8">
      {/* Categories */}
      <div className="p-6 rounded-xl border border-border bg-card">
        <div className="flex items-center gap-2 mb-4">
          <FolderOpen className="w-5 h-5 text-primary" />
          <h3 className="font-bold text-lg">Categories</h3>
        </div>
        <ul className="space-y-2">
          {categories.map(({ name, count }) => {
            const slug = name.toLowerCase().replace(/\s+/g, '-')
            return (
              <li key={name}>
                <Link
                  href={`/blog/category/${slug}`}
                  className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-muted transition-colors group"
                >
                  <span className="group-hover:text-primary transition-colors">{name}</span>
                  <span className="text-sm text-muted-foreground">({count})</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>

      {/* Popular Posts */}
      {popularPosts.length > 0 && (
        <div className="p-6 rounded-xl border border-border bg-card">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="w-5 h-5 text-primary" />
            <h3 className="font-bold text-lg">Popular Posts</h3>
          </div>
          <ul className="space-y-4">
            {popularPosts.map((post, index) => (
              <li key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group block"
                >
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">
                      {index + 1}
                    </span>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-medium line-clamp-2 group-hover:text-primary transition-colors">
                        {post.title}
                      </h4>
                      <p className="text-xs text-muted-foreground mt-1">
                        {new Date(post.date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </p>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Tags Cloud */}
      {tags.length > 0 && (
        <div className="p-6 rounded-xl border border-border bg-card">
          <h3 className="font-bold text-lg mb-4">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {tags.slice(0, 20).map(tag => {
              const slug = tag.toLowerCase().replace(/\s+/g, '-')
              return (
                <Link
                  key={tag}
                  href={`/blog/tag/${slug}`}
                  className="px-3 py-1 text-sm rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  #{tag}
                </Link>
              )
            })}
          </div>
        </div>
      )}

      <ResourceCallout />
    </aside>
  )
}
