import { BlogDetailContent } from '@/components/blog/blog-detail-content'
import { BlogDetailHeader } from '@/components/blog/blog-detail-header'
import { BlogRelatedPosts } from '@/components/blog/blog-related-posts'
import { GiscusComments } from '@/components/blog/giscus-comments'
import type { Author,BlogPost } from '@/lib/content'

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
      
      {post.comments && <GiscusComments />}
      
      {relatedPosts.length > 0 && (
        <BlogRelatedPosts posts={relatedPosts} />
      )}
    </div>
  )
}
