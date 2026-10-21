import { site } from '@/config/site'
import { MetadataRoute } from 'next'
export default function robots(): MetadataRoute.Robots {
  if (process.env.VERCEL_ENV === 'preview') return { rules: { userAgent: '*', disallow: '/' } }
  return { rules: { userAgent: '*', allow: '/', disallow: ['/admin/', '/api/'] }, sitemap: `${site.url}/sitemap.xml`, host: site.url }
}
