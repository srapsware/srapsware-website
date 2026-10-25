import { guides } from '@/config/resources'
import routes from '@/config/routes.json'
import { site } from '@/config/site'
import { getOfferings,getProducts,getProductDocuments } from '@/lib/page-content'
import { getAllBlogPosts,getAllPortfolio,getTechnologies,getAllCategories,getAllTags } from '@/lib/content'
const escape = (value: string) => value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;')
export function sitemapResponse(kind: 'static' | 'services' | 'solutions' | 'blog' | 'portfolio' | 'technologies') {
  let entries: { path: string; modified?: string }[] = []
  if (kind === 'static') entries = [
    ...routes.filter(route => !route.startsWith('/services/') && !route.startsWith('/solutions/') && !route.startsWith('/product/')).map(path => ({ path })),
    ...guides.map(guide => ({ path: `/resources/guides/${guide.slug}` })),
    ...getProducts().map(product => ({path:`/product/${product.slug}`})),
    ...getProductDocuments().map(doc => ({path:`/product/${doc.product}/${doc.kind}`})),
  ]
  if (kind === 'services' || kind === 'solutions') entries = getOfferings().filter(item => item.route.startsWith(`${kind}/`)).map(item => ({ path: `/${item.route}` }))
  if (kind === 'blog') entries = [
    ...getAllBlogPosts().map(post => ({ path: `/blog/${post.slug}`, modified: post.date })),
    ...getAllCategories().map(name => ({path:`/blog/category/${encodeURIComponent(name.toLowerCase().replace(/\s+/g,'-'))}`})),
    ...getAllTags().map(name => ({path:`/blog/tag/${encodeURIComponent(name.toLowerCase().replace(/\s+/g,'-'))}`})),
  ]
  if (kind === 'portfolio') entries = getAllPortfolio().map(project => ({ path: `/portfolio/${project.slug}`, modified: project.date }))
  if (kind === 'technologies') entries = getTechnologies().filter(tech => tech.active).map(tech => ({ path: `/technologies/${tech.slug}` }))
  const xml = entries.filter((entry,index,items)=>items.findIndex(item=>item.path===entry.path)===index).map(entry => {
    const date = entry.modified ? new Date(entry.modified) : null
    return `<url><loc>${escape(`${site.url.replace(/\/$/, '')}${entry.path}`)}</loc>${date && !isNaN(date.getTime()) ? `<lastmod>${date.toISOString()}</lastmod>` : ''}</url>`
  }).join('')
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${xml}</urlset>`, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } })
}
