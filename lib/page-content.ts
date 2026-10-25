import { completeMetadata } from './seo'
import fs from 'node:fs'
import path from 'node:path'
import frontmatter from './frontmatter'
import type { Metadata } from 'next'

export const sceneKeys = ['web','backend','mobile','commerce','cloud','ai','data','integration','security','process','studio','editor','devstack','gps','learning','healthcare','finance','property','chatbot','mcp'] as const
export type SceneKey = typeof sceneKeys[number]
export interface ContentStep { title: string; description: string; href?: string; features?: string[]; duration?: string }
export interface FAQEntry { slug: string; question: string; answer: string; category?: string; active?: boolean; order?: number }
export interface Offering {
  slug: string; route: string; title: string; pageTitle?: string; description: string; pageDescription?: string; content: string;
  scene: SceneKey; features: ContentStep[]; steps: ContentStep[]; children: ContentStep[];
  questions: { question: string; answer: string }[]; technologies?: string[]; relatedProjects?: string[]; industry?: string; draft?: boolean;
}
export interface Product {
  slug: string; title: string; description: string; content: string; scene: SceneKey; status: string; platform: string;
  license?: string; pricingModel: string; website?: string; docsUrl?: string; repository?: string; storeUrl?: string;
  features: ContentStep[]; technologies?: string[]; relatedProjects?: string[];
  screenshots?: { image: string; alt: string; caption?: string }[]; draft?: boolean;
}
export interface ProductDocument { slug: string; product: string; kind: 'privacy'|'terms'|'support'|'data-deletion'; title: string; description: string; effectiveDate?: string; content: string; draft?: boolean }
export interface Resource { slug: string; title: string; description: string; sections: { title: string; text: string }[]; content: string; draft?: boolean }
export interface EditorialPage { slug: string; route?: string; title: string; description: string; badge?: string; scene?: SceneKey; content: string; sections?: ContentStep[] }

// Read at build/request time: edits in the existing Git-backed CMS remain the source of truth.
export function readCollection<T>(folder: string): T[] {
  const directory = path.join(process.cwd(), 'content', folder)
  if (!fs.existsSync(directory)) return []
  return fs.readdirSync(directory).filter(file => file.endsWith('.md')).sort().flatMap(file => {
    const { data, content } = frontmatter(fs.readFileSync(path.join(directory, file), 'utf8'))
    if (data.draft === true || data.active === false) return []
    return [{ ...data, slug: file.slice(0,-3), content } as T]
  })
}
export function getOfferings(): Offering[] {
  const entries = [...readCollection<Offering>('services'), ...readCollection<Offering>('solutions')].filter(item => item.route)
  const routes = new Set<string>()
  for (const item of entries) {
    if (!/^(services|solutions)(\/[a-z0-9-]+)*$/.test(item.route) || routes.has(item.route)) throw new Error(`Invalid or duplicate offering route: ${item.route}`)
    if (!item.title || !sceneKeys.includes(item.scene)) throw new Error(`Incomplete offering: ${item.route}`)
    routes.add(item.route)
  }
  return entries
}
export const getOffering = (route: string) => getOfferings().find(item => item.route === route)
export const getProducts = () => readCollection<Product>('products')
export const getProduct = (slug: string) => getProducts().find(item => item.slug === slug)
export const getProductDocuments = () => readCollection<ProductDocument>('product-documents').filter(doc => getProduct(doc.product))
export const getResources = () => readCollection<Resource>('resources')
export const getFAQs = () => readCollection<FAQEntry>('faq').sort((a,b) => (a.order || 0) - (b.order || 0))
export const getEditorialPage = (slug: string) => readCollection<EditorialPage>('pages').find(page => page.slug === slug)
export function editorialMetadata(slug:string):Metadata {
  const page=getEditorialPage(slug)
  return completeMetadata(page?{title:`${page.title} | Srapsware`,description:page.description,alternates:{canonical:`/${page.route||slug}`},openGraph:{title:page.title,description:page.description,images:['/opengraph-image']}}:{title:'Page not found'})
}

export function inquiryLink(context: { service?: string; product?: string; project?: string; source?: string }, type = 'quote') {
  return `/contact?${new URLSearchParams({ type, ...context }).toString()}`
}
