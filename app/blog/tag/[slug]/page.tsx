import { completeMetadata } from '@/lib/seo'
import type { Author } from '@/lib/content'
import { BlogListLayout } from '@/components/blog/blog-list-layout'
import {
calculateReadingTime,
generateExcerpt,
getAllAuthors,
getAllBlogPosts,
getAllCategories,
getAllTags,
getPopularPosts
} from '@/lib/content'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

export const revalidate = 900 // 15 minutes

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const tags = await getAllTags()
  
  return tags.map(tag => ({
    slug: tag.toLowerCase().replace(/\s+/g, '-')
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const tagName = decodeURIComponent(slug).replace(/-/g, ' ')

  return completeMetadata({
    alternates: { canonical: `/blog/tag/${encodeURIComponent(decodeURIComponent(slug))}` },
    title: `#${tagName} Articles | Srapsware Blog`,
    description: `Articles tagged with ${tagName}. Discover related content, tutorials, and insights from Srapsware.`,
  })
}

export default async function TagPage({ params }: PageProps) {
  const { slug } = await params
  const allPosts = await getAllBlogPosts()
  const authors = await getAllAuthors()
  const allCategories = await getAllCategories()
  const allTags = await getAllTags()
  const popularPosts = await getPopularPosts(5)

  // Convert slug to tag name


  // Find exact tag match
  const exactTag = allTags.find(
    tag => tag.toLowerCase().replace(/\s+/g, '-') === decodeURIComponent(slug).toLowerCase()
  )

  if (!exactTag) {
    notFound()
  }

  // Filter posts by tag
  const tagPosts = allPosts.filter(post =>
    post.tags?.some(tag => 
      tag.toLowerCase() === exactTag.toLowerCase()
    )
  )

  if (tagPosts.length === 0) {
    notFound()
  }

  // Pre-calculate reading times and excerpts
  const postsWithMeta = tagPosts.map(post => ({
    ...post,
    readingTime: calculateReadingTime(post.content),
    excerpt: post.excerpt || generateExcerpt(post.content, 150)
  }))

  const popularWithMeta = popularPosts.map(post => ({
    ...post,
    readingTime: calculateReadingTime(post.content),
    excerpt: post.excerpt || generateExcerpt(post.content, 150)
  }))

  // Count posts per category
  const categoriesWithCount = allCategories.map(cat => ({
    name: cat,
    count: allPosts.filter(post => 
      post.categories?.some(c => c.toLowerCase() === cat.toLowerCase())
    ).length
  }))

  // Create authors map
  const authorsMap = authors.reduce((acc, author) => {
    acc[author.name] = author
    return acc
  }, {} as Record<string, Author>)

  return (
    <BlogListLayout
      posts={postsWithMeta}
      categories={categoriesWithCount}
      popularPosts={popularWithMeta}
      tags={allTags}
      authors={authorsMap}
      title={`#${exactTag}`}
      description={`All articles tagged with ${exactTag}. Explore related content and insights.`}
      showFeatured={false}
      showStats={false}
    />
  )
}
