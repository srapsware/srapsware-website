'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Clock, User } from 'lucide-react'
import type { BlogPost, Author } from '@/lib/content'

interface BlogHeroProps {
  post: BlogPost & { readingTime: number; excerpt: string }
  author?: Author | null
}

export function BlogHero({ post, author }: BlogHeroProps) {
  const { readingTime, excerpt } = post

  return (
    <div className="relative w-full overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 via-background to-background border border-border">
      <div className="grid md:grid-cols-2 gap-6 p-8 md:p-12">
        {/* Content */}
        <div className="flex flex-col justify-center space-y-6">
          <div className="inline-flex items-center gap-2 text-sm text-primary font-medium">
            <span className="px-3 py-1 rounded-full bg-primary/10">
              Featured Article
            </span>
          </div>

          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              {post.title}
            </h1>

            <p className="text-lg text-muted-foreground line-clamp-3">
              {excerpt}
            </p>
          </div>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            {author && (
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{author.display_name}</span>
              </div>
            )}
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{new Date(post.date).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric'
              })}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{readingTime} min read</span>
            </div>
          </div>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {post.tags.slice(0, 4).map(tag => {
                const slug = tag.toLowerCase().replace(/\s+/g, '-')
                return (
                  <Link
                    key={tag}
                    href={`/blog/tag/${slug}`}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-muted text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    #{tag}
                  </Link>
                )
              })}
            </div>
          )}

          <Link
            href={`/blog/${post.slug}`}
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline group"
          >
            <span>Read Article</span>
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>

        {/* Image */}
        <div className="relative aspect-[4/3] md:aspect-auto rounded-xl overflow-hidden">
          <Image
            src={post.image}
            alt={post.image_alt || post.title}
            fill
            className="object-cover"
            unoptimized
          />
        </div>
      </div>
    </div>
  )
}
