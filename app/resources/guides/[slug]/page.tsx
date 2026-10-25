import { completeMetadata } from '@/lib/seo'
import { Markdown } from '@/components/content/markdown'
import { CTASection } from '@/components/sections/cta-section'
import { PageHero } from '@/components/sections/page-hero'
import { guides } from '@/config/resources'
import { notFound } from 'next/navigation'
export function generateStaticParams() { return guides.map(guide => ({ slug: guide.slug })) }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const guide = guides.find(item => item.slug === slug)
  return completeMetadata(guide ? { title: `${guide.title} | Srapsware`, description: guide.description, alternates: { canonical: `/resources/guides/${slug}` } } : {})
}
export default async function Guide({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const guide = guides.find(item => item.slug === slug)
  if (!guide) notFound()
  return <><PageHero badge="FIELD NOTES" title={guide.title} description={guide.description} /><article className="site-container py-16"><div className="mx-auto max-w-3xl space-y-10">{guide.sections.map((section, i) => <section key={section.title}><p className="eyebrow">0{i + 1}</p><h2 className="mt-3 text-2xl font-semibold">{section.title}</h2><p className="mt-4 text-lg leading-relaxed text-muted-foreground">{section.text}</p></section>)}<Markdown>{guide.content}</Markdown><a href={`/resources/downloads/${guide.slug}`} download className="button-primary">Download this guide (Markdown) ↓</a></div></article><CTASection /></>
}
