import { guides } from '@/config/resources';
import Link from 'next/link';
import { CTASection } from './cta-section';
import { PageHero } from './page-hero';

export function ResourceLibrary({ title = 'Practical ideas for better software.', description = 'Field notes and checklists to help you prepare, plan and deliver.' }: { title?: string; description?: string }) {
  return <><PageHero scene="learning" badge="THE RESOURCE LIBRARY" title={title} description={description} /><section className="section-space"><div className="site-container"><div className="grid gap-6 md:grid-cols-3">{guides.map((guide, i) => <article key={guide.slug} className="flex flex-col rounded-xl border border-border bg-card p-8"><p className="eyebrow">FIELD NOTE / 0{i + 1}</p><h2 className="mt-6 text-2xl font-semibold tracking-tight">{guide.title}</h2><p className="mt-4 flex-1 leading-relaxed text-muted-foreground">{guide.description}</p><Link href={`/resources/guides/${guide.slug}`} className="mt-8 font-medium text-brand">Read the guide ↗</Link><a href={`/resources/downloads/${guide.slug}`} download className="mt-4 text-sm text-muted-foreground underline">Download Markdown</a></article>)}</div><div className="mt-12 flex flex-wrap gap-6 border-t border-border pt-8"><Link href="/blog" className="font-medium">Technical articles ↗</Link><Link href="/resources/case-studies" className="font-medium">Project stories ↗</Link><Link href="/faq" className="font-medium">Common questions ↗</Link></div></div></section><CTASection /></>
}
