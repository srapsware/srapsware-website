'use client'

import Image from 'next/image'
import Link from 'next/link'
import { getCdnUrl } from '@/lib/utils'
import { Calendar, Clock, User } from 'lucide-react'
import type { BlogPost, Author } from '@/lib/content'

interface BlogCardProps {
  post: BlogPost & { readingTime: number; excerpt: string }
  author?: Author | null
}

export function BlogCard({ post, author }: BlogCardProps) {
  const { readingTime, excerpt } = post

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block"
    >
      <article className="flex gap-6 p-6 rounded-xl border border-border bg-card hover:bg-muted/50 transition-all duration-300 hover:shadow-lg">
        {/* Image */}
        <div className="relative w-48 h-32 flex-shrink-0 rounded-lg overflow-hidden">
          <Image
            src={getCdnUrl(post.image)}
            alt={post.image_alt || post.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            unoptimized
          />
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col justify-between min-w-0">
          <div className="space-y-2">
            {/* Categories */}
            {post.categories && post.categories.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {post.categories.slice(0, 2).map(category => (
                  <span
                    key={category}
                    className="px-2 py-1 text-xs font-medium rounded bg-primary/10 text-primary"
                  >
                    {category}
                  </span>
                ))}
              </div>
            )}

            {/* Title */}
            <h3 className="text-xl font-bold line-clamp-2 group-hover:text-primary transition-colors">
              {post.title}
            </h3>

            {/* Excerpt */}
            <p className="text-sm text-muted-foreground line-clamp-2">
              {excerpt}
            </p>
          </div>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 pt-4 text-xs text-muted-foreground">
            {author && (
              <div className="flex items-center gap-1">
                <User className="w-3 h-3" />
                <span>{author.display_name}</span>
              </div>
            )}
            <div className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              <span>{new Date(post.date).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric'
              })}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              <span>{readingTime} min read</span>
            </div>

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="flex gap-1 ml-auto">
                {post.tags.slice(0, 3).map(tag => (
                  <span
                    key={tag}
                    className="text-xs text-muted-foreground"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </article>
    </Link>
  )
}
