import { MetadataRoute } from 'next'
import { getAllBlogPosts, getAllCategories, getAllTags } from '@/lib/content'

export async function GET() {
  const baseUrl = 'https://www.srapsware.com'
  const posts = getAllBlogPosts()
  const categories = getAllCategories()
  const tags = getAllTags()

  // Blog posts
  const blogPages: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Category pages
  const categoryPages: MetadataRoute.Sitemap = categories.map((category) => {
    const slug = category.toLowerCase().replace(/\s+/g, '-')
    return {
      url: `${baseUrl}/blog/category/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    }
  })

  // Tag pages
  const tagPages: MetadataRoute.Sitemap = tags.map((tag) => {
    const slug = tag.toLowerCase().replace(/\s+/g, '-')
    return {
      url: `${baseUrl}/blog/tag/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.5,
    }
  })

  // Combine all pages
  const allPages = [...blogPages, ...categoryPages, ...tagPages]

  const sitemap = allPages.map((page) => {
    const lastmod = page.lastModified instanceof Date 
      ? page.lastModified.toISOString() 
      : page.lastModified 
        ? new Date(page.lastModified).toISOString() 
        : new Date().toISOString()
    
    return `
    <url>
      <loc>${page.url}</loc>
      <lastmod>${lastmod}</lastmod>
      <changefreq>${page.changeFrequency}</changefreq>
      <priority>${page.priority}</priority>
    </url>`
  }).join('')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${sitemap}
</urlset>`

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}
