import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { 
  getBlogPostBySlug, 
  getAllBlogPosts,
  getAuthorByName,
  getRelatedPosts,
  calculateReadingTime
} from '@/lib/content'
import { BlogDetailClient } from './blog-detail-client'

export async function generateStaticParams() {
  const posts = await getAllBlogPosts()
  return posts.map(post => ({
    slug: post.slug
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = await getBlogPostBySlug(slug)
  
  if (!post) {
    return {
      title: 'Post Not Found'
    }
  }
  
  return {
    title: `${post.title} | Blog`,
    description: post.metaDescription || post.excerpt || post.content.substring(0, 160),
    openGraph: {
      title: post.title,
      description: post.metaDescription || post.excerpt || post.content.substring(0, 160),
      images: [post.image],
      type: 'article',
      publishedTime: post.date,
    }
  }
}

export const dynamic = 'force-static'

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getBlogPostBySlug(slug)
  
  if (!post) {
    notFound()
  }
  
  const author = await getAuthorByName(post.author)
  
  if (!author) {
    notFound()
  }
  
  const relatedPosts = await getRelatedPosts(
    post.slug,
    post.categories || [],
    post.tags || [],
    3
  )
  const readingTime = calculateReadingTime(post.content)
  
  // Pre-calculate reading times for related posts
  const relatedWithMeta = relatedPosts.map(p => ({
    ...p,
    readingTime: calculateReadingTime(p.content)
  }))
  
  return (
    <BlogDetailClient
      post={post}
      author={author}
      relatedPosts={relatedWithMeta}
      readingTime={readingTime}
    />
  )
}
