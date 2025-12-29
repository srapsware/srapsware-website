import Image from 'next/image'
import Link from 'next/link'
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
          className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card hover:border-brand/50 hover:shadow-xl hover:shadow-brand/10 transition-all blog-card"
        >
          {/* Featured Image */}
          {post.image && (
            <div className="relative aspect-[16/9] overflow-hidden bg-muted">
              <Image
                src={post.image}
                alt={post.image_alt || post.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Featured Badge */}
              {post.featured && (
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-brand text-white text-xs font-medium">
                  Featured
                </div>
              )}
            </div>
          )}

          {/* Content */}
          <div className="flex flex-col flex-1 p-6">
            {/* Categories */}
            {post.categories && post.categories.length > 0 && (
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
