'use client'

import Image from 'next/image'
import Link from 'next/link'
import { getCdnUrl } from '@/lib/utils'
import { Clock } from 'lucide-react'
import type { BlogPost } from '@/lib/content'

interface BlogRelatedPostsProps {
  posts: Array<BlogPost & { readingTime: number }>
}

export function BlogRelatedPosts({ posts }: BlogRelatedPostsProps) {
  if (posts.length === 0) return null

  return (
    <section className="border-t border-border bg-muted/30 py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-3xl font-bold mb-8">Related Articles</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map(post => {
            const { readingTime } = post
            
            return (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block"
              >
                <article className="h-full rounded-xl border border-border bg-card overflow-hidden hover:shadow-lg transition-all">
                  {/* Image */}
                  <div className="relative aspect-video">
                    <Image
                      src={getCdnUrl(post.image)}
                      alt={post.image_alt || post.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      unoptimized
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Category */}
                    {post.categories && post.categories.length > 0 && (
                      <div className="mb-3">
                        <span className="px-2 py-1 text-xs font-medium rounded bg-primary/10 text-primary">
                          {post.categories[0]}
                        </span>
                      </div>
                    )}

                    {/* Title */}
                    <h3 className="text-lg font-bold mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>

                    {/* Meta */}
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{readingTime} min read</span>
                    </div>
                  </div>
                </article>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
