export async function GET() {
  const baseUrl = 'https://www.srapsware.com'
  const currentDate = new Date().toISOString()

  const sitemaps = [
    { loc: `${baseUrl}/sitemap-static.xml`, lastmod: currentDate },
    { loc: `${baseUrl}/sitemap-blog.xml`, lastmod: currentDate },
    { loc: `${baseUrl}/sitemap-portfolio.xml`, lastmod: currentDate },
    { loc: `${baseUrl}/sitemap-services.xml`, lastmod: currentDate },
    { loc: `${baseUrl}/sitemap-technologies.xml`, lastmod: currentDate },
    { loc: `${baseUrl}/sitemap-solutions.xml`, lastmod: currentDate },
  ]

  const sitemapIndex = sitemaps.map((sitemap) => `
  <sitemap>
    <loc>${sitemap.loc}</loc>
    <lastmod>${sitemap.lastmod}</lastmod>
  </sitemap>`).join('')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${sitemapIndex}
</sitemapindex>`

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}
