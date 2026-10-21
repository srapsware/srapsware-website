import { guides } from '@/config/resources'
import routes from '@/config/routes.json'
import { site } from '@/config/site'
import offerings from '@/content/data/offerings.json'
import { getAllBlogPosts,getAllPortfolio,getTechnologies } from '@/lib/content'
const escape = (value: string) => value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;')
export function sitemapResponse(kind: 'static' | 'services' | 'solutions' | 'blog' | 'portfolio' | 'technologies') {
  let entries: { path: string; modified?: string }[] = []
  if (kind === 'static') entries = [
    ...routes.filter(route => !route.startsWith('/services/') && !route.startsWith('/solutions/')).map(path => ({ path })),
    ...guides.map(guide => ({ path: `/resources/guides/${guide.slug}` })),
  ]
  if (kind === 'services' || kind === 'solutions') entries = Object.keys(offerings).filter(path => path.startsWith(`${kind}/`)).map(path => ({ path: `/${path}` }))
  if (kind === 'blog') entries = getAllBlogPosts().map(post => ({ path: `/blog/${post.slug}`, modified: post.date }))
  if (kind === 'portfolio') entries = getAllPortfolio().map(project => ({ path: `/portfolio/${project.slug}`, modified: project.date }))
  if (kind === 'technologies') entries = getTechnologies().filter(tech => tech.active).map(tech => ({ path: `/technologies/${tech.slug}` }))
  const xml = entries.map(entry => {
    const date = entry.modified ? new Date(entry.modified) : null
    return `<url><loc>${escape(`${site.url.replace(/\/$/, '')}${entry.path}`)}</loc>${date && !isNaN(date.getTime()) ? `<lastmod>${date.toISOString()}</lastmod>` : ''}</url>`
  }).join('')
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${xml}</urlset>`, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } })
}
