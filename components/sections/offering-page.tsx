import { ExpertiseScene } from '@/components/animations/expertise-scene'
import { Markdown } from '@/components/content/markdown'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { getOffering,getOfferings,inquiryLink } from '@/lib/page-content'
import { getTechnologies } from '@/lib/content'
import { ArrowUpRight,Check } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { CTASection } from './cta-section'
import { DeliveryProcess } from './delivery-process'
import { RelatedWork } from './related-work'

export function offeringMetadata(slug:string):Metadata {
  const item=getOffering(slug)
  if(!item)return {title:'Page not found'}
  const title=item.pageTitle||item.title, description=item.pageDescription||item.description
  return {title:title+' | Srapsware',description,alternates:{canonical:'/'+slug},openGraph:{title,description,images:['/opengraph-image'],url:'/'+slug}}
}
export function OfferingPage({slug}:{slug:string}) {
  const item=getOffering(slug)
  if(!item)notFound()
  const title=item.pageTitle||item.title,description=item.pageDescription||item.description
  const children=getOfferings().filter(entry=>entry.route.startsWith(slug+'/')&&entry.route.split('/').length===slug.split('/').length+1)
  const cards=item.children?.length?item.children:children.map(entry=>({title:entry.pageTitle||entry.title,description:entry.pageDescription||entry.description,href:'/'+entry.route,features:[] as string[]}))
  const cta=inquiryLink({service:title,source:'/'+slug})
  const technologies=getTechnologies().filter(tech=>tech.active&&item.technologies?.includes(tech.title))
  return <>
    <section className="home-hero border-b border-border"><div className="site-container"><Breadcrumb/><div className="mt-10 grid items-center gap-10 lg:grid-cols-[1.1fr_1fr]"><div><p className="eyebrow">{slug.startsWith('services')?'OUR EXPERTISE':'SOLVING BUSINESS CHALLENGES'}</p><h1 className="mt-6 text-4xl font-semibold leading-[1.1] tracking-[-.04em] md:text-6xl">{title}</h1><p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">{description}</p><div className="mt-8 flex flex-wrap items-center gap-6"><Link href={cta} className="button-primary">Discuss your project<ArrowUpRight size={18}/></Link><Link href="#offering-details" className="text-sm font-medium">Explore the approach ↓</Link></div></div><ExpertiseScene kind={item.scene}/></div></div></section>
    <div id="offering-details" className="scroll-mt-24">
      {cards.length>0&&<section className="section-space"><div className="site-container"><div className="section-heading"><div><p className="eyebrow">FIND YOUR STARTING POINT</p><h2>Explore the possibilities.</h2></div></div><div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{cards.map((card,i)=><article key={card.title} className="rounded-2xl border border-border bg-card p-7"><p className="eyebrow">{String(i+1).padStart(2,'0')}</p><h3 className="mt-5 text-xl font-semibold">{card.href?<Link href={card.href}>{card.title} ↗</Link>:card.title}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{card.description}</p>{!!card.features?.length&&<ul className="mt-5 space-y-2">{card.features.map(feature=><li key={feature} className="flex items-start gap-2 text-sm"><Check size={14} className="mt-1 shrink-0 text-brand"/>{feature}</li>)}</ul>}</article>)}</div></div></section>}
      {item.content.trim()&&<section className="section-space border-t border-border"><div className="site-container"><div className="max-w-3xl"><p className="eyebrow mb-6">BUILT AROUND YOUR PRIORITIES</p><Markdown>{item.content}</Markdown></div></div></section>}
      {!!item.features?.length&&<section className="section-space border-t border-border bg-card"><div className="site-container"><div className="section-heading"><div><p className="eyebrow">A PRACTICAL SCOPE</p><h2>What we can build together.</h2></div><p>We shape the final scope around your priorities, constraints and existing systems.</p></div><div className="grid gap-x-10 gap-y-8 md:grid-cols-2 lg:grid-cols-3">{item.features.map(feature=><article key={feature.title} className="border-t border-border pt-6"><h3 className="text-lg font-semibold">{feature.title}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{feature.description}</p></article>)}</div></div></section>}
    </div>
    <RelatedWork slugs={item.relatedProjects} technologies={item.technologies} industry={item.industry}/>
    {!!item.steps?.length?<section className="section-space border-y border-border bg-card"><div className="site-container"><div className="section-heading"><div><p className="eyebrow">FROM DISCOVERY TO DELIVERY</p><h2>A plan you can follow.</h2></div><p>Scope and timing are agreed after discovery, with reviews throughout delivery.</p></div><ol className="grid gap-6 md:grid-cols-2">{item.steps.map((step,i)=><li key={step.title} className="flex gap-5 border-t border-border py-6"><span className="text-2xl font-medium text-brand">{String(i+1).padStart(2,'0')}</span><div><h3 className="text-lg font-semibold">{step.title}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.description}</p></div></li>)}</ol></div></section>:<DeliveryProcess/>}
    {technologies.length>0&&<section className="section-space border-b border-border"><div className="site-container grid gap-8 md:grid-cols-2"><div><p className="eyebrow">ENGINEERING CHOICES</p><h2 className="mt-4 text-3xl font-semibold">Tools that fit the work.</h2><p className="mt-4 text-muted-foreground">The final stack follows your requirements. Explore the capabilities behind these options.</p></div><div className="flex flex-wrap content-start gap-3">{technologies.map(tech=><Link key={tech.slug} href={'/technologies/'+tech.slug} className="rounded-xl border border-border bg-card px-5 py-4 font-medium">{tech.title} ↗</Link>)}</div></div></section>}
    {!!item.questions?.length&&<section className="section-space"><div className="site-container grid gap-8 md:grid-cols-2"><div><p className="eyebrow">BEFORE WE BUILD</p><h2 className="mt-5 text-3xl font-semibold tracking-tight">The right questions come first.</h2></div><div>{item.questions.map(q=><details key={q.question} className="border-b border-border py-5"><summary className="cursor-pointer font-medium">{q.question}</summary><div className="mt-4 text-sm"><Markdown>{q.answer}</Markdown></div></details>)}</div></div></section>}
    <CTASection title="Let’s put your next step in focus." description={'Tell us what you want to achieve with '+title.toLowerCase()+'. We’ll help clarify the scope and a practical way forward.'} primaryButtonText="Request a project conversation" primaryButtonLink={cta}/>
  </>
}
