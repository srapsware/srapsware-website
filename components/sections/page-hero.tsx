import { Breadcrumb } from '@/components/ui/breadcrumb'
import { ExpertiseScene } from '@/components/animations/expertise-scene'
import type { SceneKey } from '@/lib/page-content'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import { ReactNode } from 'react'
interface PageHeroProps { badge?: string; title: string | ReactNode; description?: string; ctaPrimary?: {text:string;href:string}; ctaSecondary?: {text:string;href:string}; breadcrumbItems?: Array<{label:string;href?:string}>; children?: ReactNode; className?: string; scene?: SceneKey }
export function PageHero({badge,title,description,ctaPrimary,ctaSecondary,breadcrumbItems,children,className='',scene}:PageHeroProps) {
  return <section className={'home-hero border-b border-border '+className}><div className="site-container"><Breadcrumb items={breadcrumbItems}/><div className={scene?'mt-10 grid items-center gap-10 lg:grid-cols-[1.1fr_1fr]':'mt-10 max-w-4xl'}><div>{badge&&<p className="eyebrow">{badge}</p>}<h1 className="mt-5 text-4xl font-semibold leading-[1.1] tracking-[-.04em] md:text-6xl">{title}</h1>{description&&<p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">{description}</p>}{(ctaPrimary||ctaSecondary)&&<div className="mt-8 flex flex-wrap items-center gap-6">{ctaPrimary&&<Link className="button-primary" href={ctaPrimary.href}>{ctaPrimary.text}<ArrowUpRight size={18}/></Link>}{ctaSecondary&&<Link className="font-medium" href={ctaSecondary.href}>{ctaSecondary.text} ↗</Link>}</div>}{children}</div>{scene&&<ExpertiseScene kind={scene}/>}</div></div></section>
}
