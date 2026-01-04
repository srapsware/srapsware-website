'use client'

import { BlogDetailHeader } from '@/components/blog/blog-detail-header'
import { BlogDetailContent } from '@/components/blog/blog-detail-content'
import { BlogRelatedPosts } from '@/components/blog/blog-related-posts'
import { GiscusComments } from '@/components/blog/giscus-comments'
import type { BlogPost, Author } from '@/lib/content'

interface BlogDetailClientProps {
  post: BlogPost
  author: Author
  relatedPosts: Array<BlogPost & { readingTime: number }>
  readingTime: number
}

export function BlogDetailClient({
  post,
  author,
  relatedPosts,
  readingTime
}: BlogDetailClientProps) {
  return (
    <div className="min-h-screen bg-background">
      <BlogDetailHeader
        post={post}
        author={author}
        readingTime={readingTime}
      />
      
      <BlogDetailContent
        post={post}
        author={author}
      />
      
      <GiscusComments />
      
      {relatedPosts.length > 0 && (
        <BlogRelatedPosts posts={relatedPosts} />
      )}
    </div>
  )
}
