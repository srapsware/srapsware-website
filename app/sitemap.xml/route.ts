import { site } from '@/config/site';
export const dynamic = 'force-static'
export function GET() {
 const maps = ['static','services','solutions','blog','portfolio','technologies'].map(kind => '<sitemap><loc>' + site.url + '/sitemap-' + kind + '.xml</loc></sitemap>').join('');
 return new Response('<?xml version="1.0" encoding="UTF-8"?><sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' + maps + '</sitemapindex>', {headers:{'Content-Type':'application/xml; charset=utf-8'}})
}
