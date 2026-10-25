import { getEditorialPage } from '@/lib/page-content'
import { PageHero } from './page-hero'
import { Markdown } from '@/components/content/markdown'
import { notFound } from 'next/navigation'
import type { ReactNode } from 'react'
export function EditorialPage({slug,children}:{slug:string;children?:ReactNode}) {
  const page=getEditorialPage(slug)
  if(!page)notFound()
  return <><PageHero badge={page.badge} title={page.title} description={page.description} scene={page.scene}/>{page.content.trim()&&<section className="section-space"><div className="site-container"><div className="max-w-3xl"><Markdown>{page.content}</Markdown></div></div></section>}{!!page.sections?.length&&<section className="section-space border-t border-border"><div className="site-container grid gap-8 md:grid-cols-3">{page.sections.map((section,i)=><article key={section.title} className="border-t border-border pt-6"><p className="eyebrow">0{i+1}</p><h2 className="mt-5 text-2xl font-semibold">{section.title}</h2><p className="mt-4 leading-relaxed text-muted-foreground">{section.description}</p></article>)}</div></section>}{children}</>
}
