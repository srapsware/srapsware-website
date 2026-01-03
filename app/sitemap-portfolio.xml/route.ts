import { MetadataRoute } from 'next'
import { getAllPortfolio } from '@/lib/content'

export async function GET() {
  const baseUrl = 'https://www.srapsware.com'
  const portfolios = getAllPortfolio()

  const portfolioPages: MetadataRoute.Sitemap = portfolios.map((portfolio) => ({
    url: `${baseUrl}/portfolio/${portfolio.slug}`,
    lastModified: new Date(portfolio.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  const sitemap = portfolioPages.map((page) => {
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
