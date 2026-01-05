import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { 
  getAllBlogPosts, 
  getAllAuthors,
  getAllCategories,
  getAllTags,
  getPopularPosts,
  calculateReadingTime,
  generateExcerpt
} from '@/lib/content'
import { BlogListLayout } from '@/components/blog/blog-list-layout'

export const revalidate = 900 // 15 minutes

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const categories = await getAllCategories()
  
  return categories.map(category => ({
    slug: category.toLowerCase().replace(/\s+/g, '-')
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const categoryName = slug.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ')

  return {
    title: `${categoryName} Articles | Srapsware Blog`,
    description: `Explore articles about ${categoryName}. Expert insights, tutorials, and best practices from Srapsware's development team.`,
  }
}

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params
  const allPosts = await getAllBlogPosts()
  const authors = await getAllAuthors()
  const allCategories = await getAllCategories()
  const allTags = await getAllTags()
  const popularPosts = await getPopularPosts(5)

  // Convert slug to category name
  const categoryName = slug.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ')

  // Find exact category match
  const exactCategory = allCategories.find(
    cat => cat.toLowerCase() === categoryName.toLowerCase()
  )

  if (!exactCategory) {
    notFound()
  }

  // Filter posts by category
  const categoryPosts = allPosts.filter(post =>
    post.categories?.some(cat => 
      cat.toLowerCase() === exactCategory.toLowerCase()
    )
  )

  if (categoryPosts.length === 0) {
    notFound()
  }

  // Pre-calculate reading times and excerpts
  const postsWithMeta = categoryPosts.map(post => ({
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
  }, {} as Record<string, any>)

  return (
    <BlogListLayout
      posts={postsWithMeta}
      categories={categoriesWithCount}
      popularPosts={popularWithMeta}
      tags={allTags}
      authors={authorsMap}
      title={`${exactCategory} Articles`}
      description={`Browse all articles in the ${exactCategory} category. Stay updated with the latest insights, tutorials, and best practices.`}
      showFeatured={false}
      showStats={false}
    />
  )
}
