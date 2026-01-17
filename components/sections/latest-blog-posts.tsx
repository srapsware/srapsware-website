import Image from 'next/image'
import Link from 'next/link'
import { getCdnUrl } from '@/lib/utils'
import { Calendar, ArrowRight, Clock } from 'lucide-react'
import type { BlogPost } from '@/lib/content'

interface LatestBlogPostsProps {
  posts: BlogPost[]
  showReadMore?: boolean
}

export function LatestBlogPosts({ posts, showReadMore = true }: LatestBlogPostsProps) {
  if (posts.length === 0) {
    return null
  }

  // Calculate read time (rough estimate: 200 words per minute)
  const calculateReadTime = (content: string) => {
    const wordsPerMinute = 200
    const words = content.trim().split(/\s+/).length
    const minutes = Math.ceil(words / wordsPerMinute)
    return minutes
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post) => (
        <Link
          key={post.slug}
          href={`/blog/${post.slug}`}
          className="group relative flex flex-col overflow-hidden rounded-2xl border-2 border-border bg-card hover:border-brand/50 hover:shadow-2xl hover:shadow-brand/10 hover:-translate-y-1 transition-all duration-300 blog-card"
        >
          {/* Gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand/0 to-brand/0 group-hover:from-brand/5 group-hover:to-accent-primary/5 transition-all duration-300 pointer-events-none" />
          
          {/* Featured Image */}
          {post.image && (
            <div className="relative aspect-[16/9] overflow-hidden bg-muted">
              <Image
                src={getCdnUrl(post.image)}
                alt={post.image_alt || post.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                unoptimized
              />
              
              {/* Featured Badge */}
              {post.featured && (
                <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-gradient-to-r from-brand to-accent-primary text-white text-xs font-semibold shadow-lg">
                  Featured
                </div>
              )}
              
              {/* Category overlay on image */}
              {post.categories && post.categories.length > 0 && (
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background/90 to-transparent">
                  <div className="flex flex-wrap gap-2">
                    {post.categories.slice(0, 2).map((category, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full bg-white/90 dark:bg-card/90 backdrop-blur-sm text-brand text-xs font-semibold"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Content */}
          <div className="relative z-10 flex flex-col flex-1 p-6">
            {/* Categories */}
            {post.categories && post.categories.length > 0 && !post.image && (
              <div className="flex flex-wrap gap-2 mb-3">
                {post.categories.slice(0, 2).map((category, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 rounded bg-brand/10 text-brand text-xs font-medium"
                  >
                    {category}
                  </span>
                ))}
              </div>
            )}

            {/* Title */}
            <h3 className="text-xl font-bold mb-3 group-hover:text-brand transition-colors line-clamp-2">
              {post.title}
            </h3>

            {/* Excerpt */}
            {post.excerpt && (
              <p className="text-sm text-muted-foreground mb-4 line-clamp-3 flex-1">
                {post.excerpt}
              </p>
            )}

            {/* Footer */}
            <div className="flex items-center justify-between text-xs text-muted-foreground pt-4 border-t border-border">
              <div className="flex items-center gap-4">
                {/* Date */}
                <div className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  <span>
                    {new Date(post.date).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </span>
                </div>

                {/* Read Time */}
                <div className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  <span>{calculateReadTime(post.content)} min read</span>
                </div>
              </div>

              {/* Arrow */}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </Link>
      ))}

      {/* View All Link */}
      {showReadMore && posts.length >= 3 && (
        <div className="md:col-span-2 lg:col-span-3 flex justify-center mt-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-brand text-brand font-medium hover:bg-brand hover:text-white transition-all"
          >
            View All Articles
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      )}
    </div>
  )
}
