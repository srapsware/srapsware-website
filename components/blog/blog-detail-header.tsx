'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Clock, User, ChevronRight } from 'lucide-react'
import type { BlogPost, Author } from '@/lib/content'

interface BlogDetailHeaderProps {
  post: BlogPost
  author?: Author | null
  readingTime: number
}

export function BlogDetailHeader({ post, author, readingTime }: BlogDetailHeaderProps) {
  return (
    <div className="border-b border-border bg-muted/30">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link href="/" className="hover:text-foreground transition-colors">
            Home
          </Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/blog" className="hover:text-foreground transition-colors">
            Blog
          </Link>
          {post.categories && post.categories.length > 0 && (
            <>
              <ChevronRight className="w-4 h-4" />
              <span>{post.categories[0]}</span>
            </>
          )}
        </nav>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          {post.title}
        </h1>

        {/* Excerpt */}
        {post.excerpt && (
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            {post.excerpt}
          </p>
        )}

        {/* Author & Meta */}
        <div className="flex flex-wrap items-center gap-6 mb-8">
          {author && (
            <div className="flex items-center gap-3">
              {author.avatar && (
                <Image
                  src={author.avatar}
                  alt={author.display_name}
                  width={48}
                  height={48}
                  className="rounded-full"
                  unoptimized
                />
              )}
              <div>
                <div className="font-semibold">{author.display_name}</div>
                <div className="text-sm text-muted-foreground">{author.position}</div>
              </div>
            </div>
          )}

          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{new Date(post.date).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric'
              })}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{readingTime} min read</span>
            </div>
          </div>
        </div>

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {post.tags.map(tag => {
              const slug = tag.toLowerCase().replace(/\s+/g, '-')
              return (
                <Link
                  key={tag}
                  href={`/blog/tag/${slug}`}
                  className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  #{tag}
                </Link>
              )
            })}
          </div>
        )}
      </div>

      {/* Featured Image */}
      {post.image && (
        <div className="container mx-auto px-4 pb-12 max-w-5xl">
          <div className="relative aspect-video rounded-2xl overflow-hidden">
            <Image
              src={post.image}
              alt={post.image_alt || post.title}
              fill
              className="object-cover"
              unoptimized
              priority
            />
          </div>
        </div>
      )}
    </div>
  )
}
