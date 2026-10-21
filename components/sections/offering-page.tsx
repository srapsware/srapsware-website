import { ProductBlueprint } from '@/components/animations/product-blueprint'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import offerings from '@/content/data/offerings.json'
import { ArrowUpRight,Check } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { CTASection } from './cta-section'
import { DeliveryProcess } from './delivery-process'

interface Feature { title: string; description: string }
interface Offering { title: string; description: string; features: Feature[]; steps: Feature[]; children: (Feature & { href?: string; features?: string[] })[] }
const data: Record<string, Offering> = offerings
export function offeringMetadata(slug: string): Metadata {
  const item = data[slug]
  return { title: `${item.title} | Srapsware`, description: item.description, alternates: { canonical: `/${slug}` }, openGraph: { title: item.title, description: item.description, images: ['/opengraph-image'], url: `/${slug}` } }
}
export function OfferingPage({ slug }: { slug: string }) {
  const item = data[slug]
  const related = Object.entries(data).filter(([path]) => path.startsWith(`${slug}/`) && path.split('/').length === slug.split('/').length + 1)
  const cards = item.children.length ? item.children : related.map(([path, entry]) => ({ title: entry.title, description: entry.description, features: [] as string[], href: `/${path}` }))
  return <>
    <section className="home-hero border-b border-border"><div className="site-container">
      <Breadcrumb />
      <div className="mt-10 grid items-center gap-10 lg:grid-cols-[1.25fr_1fr]">
        <div><p className="eyebrow">{slug.startsWith('services') ? 'OUR EXPERTISE' : 'SOLVING BUSINESS CHALLENGES'}</p><h1 className="mt-6 text-4xl font-semibold leading-[1.1] tracking-[-.04em] md:text-6xl">{item.title}</h1><p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">{item.description}</p><Link href={`/contact?type=quote&service=${encodeURIComponent(item.title)}`} className="button-primary mt-8">Discuss your project<ArrowUpRight size={18} /></Link></div>
        <ProductBlueprint compact />
      </div>
    </div></section>
    {cards.length > 0 && <section className="section-space"><div className="site-container"><div className="section-heading"><div><p className="eyebrow">FIND YOUR STARTING POINT</p><h2>Explore the possibilities.</h2></div></div><div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{cards.map((card, i) => <article key={card.title} className="rounded-xl border border-border bg-card p-7"><p className="eyebrow">0{i + 1}</p><h3 className="mt-5 text-xl font-semibold">{card.href ? <Link href={card.href}>{card.title} ↗</Link> : card.title}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{card.description}</p>{card.features && <ul className="mt-5 space-y-2">{card.features.map(feature => <li key={feature} className="flex items-center gap-2 text-xs"><Check size={13} className="text-brand" />{feature}</li>)}</ul>}</article>)}</div></div></section>}
    {item.features.length > 0 && <section className="section-space border-t border-border bg-card"><div className="site-container"><div className="section-heading"><div><p className="eyebrow">A PRACTICAL SCOPE</p><h2>What we can build together.</h2></div><p>We shape the final scope around your priorities, constraints and existing systems.</p></div><div className="grid gap-x-10 gap-y-8 md:grid-cols-2 lg:grid-cols-3">{item.features.map(feature => <article key={feature.title} className="border-t border-border pt-6"><h3 className="font-semibold">{feature.title}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{feature.description}</p></article>)}</div></div></section>}
    {item.steps.length > 0 ? <section className="section-space border-t border-border"><div className="site-container"><div className="section-heading"><div><p className="eyebrow">FROM DISCOVERY TO DELIVERY</p><h2>A plan you can follow.</h2></div><p>Scope and timing are agreed after discovery, with reviews throughout delivery.</p></div><ol className="grid gap-6 md:grid-cols-2">{item.steps.map((step, i) => <li key={step.title} className="flex gap-5 rounded-xl border border-border p-6"><span className="text-sm font-semibold text-brand">{String(i + 1).padStart(2, '0')}</span><div><h3 className="font-semibold">{step.title}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.description}</p></div></li>)}</ol></div></section> : <DeliveryProcess />}
    <section className="section-space border-t border-border bg-card"><div className="site-container grid gap-8 md:grid-cols-2"><div><p className="eyebrow">BEFORE WE BUILD</p><h2 className="mt-5 text-3xl font-semibold tracking-tight">The right questions come first.</h2></div><div className="space-y-5"><details className="border-b border-border pb-4"><summary className="cursor-pointer font-medium">How do we agree on cost and timing?</summary><p className="mt-3 text-sm leading-relaxed text-muted-foreground">We discuss your goals, dependencies and constraints before defining a scope and estimate. Any change to that scope should be visible and agreed.</p></details><details className="border-b border-border pb-4"><summary className="cursor-pointer font-medium">Can you work with our existing product?</summary><p className="mt-3 text-sm leading-relaxed text-muted-foreground">We can start with a technical review to understand your current systems and propose a practical improvement or integration plan.</p></details><Link href="/portfolio" className="inline-block text-sm font-semibold text-brand">Explore our project archive ↗</Link></div></div></section>
    <CTASection primaryButtonLink={`/contact?type=quote&service=${encodeURIComponent(item.title)}`} />
  </>
}
