import { Metadata } from 'next'
import { 
  getAllBlogPosts, 
  getFeaturedPost,
  getAllAuthors,
  getAllCategories,
  getAllTags,
  getPopularPosts,
  calculateReadingTime,
  generateExcerpt
} from '@/lib/content'
import { BlogListClient } from './blog-list-client'

export const metadata: Metadata = {
  title: 'Blog | Web Development, Technology & Digital Trends',
  description: 'Expert insights on web development, mobile apps, cloud technology, AI/ML, and digital transformation. Stay updated with the latest tech trends and best practices.',
}

export const revalidate = 900 // 15 minutes

export default async function BlogPage() {
  const posts = await getAllBlogPosts()
  const featuredPost = await getFeaturedPost()
  const authors = await getAllAuthors()
  const allCategories = await getAllCategories()
  const allTags = await getAllTags()
  const popularPosts = await getPopularPosts(5)

  // Pre-calculate reading times and excerpts for all posts
  const postsWithMeta = posts.map(post => ({
    ...post,
    readingTime: calculateReadingTime(post.content),
    excerpt: post.excerpt || generateExcerpt(post.content, 150)
  }))

  const featuredWithMeta = featuredPost ? {
    ...featuredPost,
    readingTime: calculateReadingTime(featuredPost.content),
    excerpt: featuredPost.excerpt || generateExcerpt(featuredPost.content, 150)
  } : null

  const popularWithMeta = popularPosts.map(post => ({
    ...post,
    readingTime: calculateReadingTime(post.content),
    excerpt: post.excerpt || generateExcerpt(post.content, 150)
  }))

  // Count posts per category
  const categoriesWithCount = allCategories.map(cat => ({
    name: cat,
    count: posts.filter(p => p.categories?.includes(cat)).length
  })).sort((a, b) => b.count - a.count)

  // Create authors map
  const authorsMap = authors.reduce((acc, author) => {
    acc[author.name] = author
    return acc
  }, {} as Record<string, any>)

  return (
    <BlogListClient
      posts={postsWithMeta}
      featuredPost={featuredWithMeta}
      categories={categoriesWithCount}
      popularPosts={popularWithMeta}
      tags={allTags}
      authors={authorsMap}
    />
  )
}
