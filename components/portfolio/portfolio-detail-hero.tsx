import type { Portfolio } from '@/lib/content'
import { getCdnUrl } from '@/lib/utils'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { Reveal } from '@/components/animations/reveal'
import { inquiryLink } from '@/lib/page-content'
import Link from 'next/link'
export default function PortfolioDetailHero({project}:{project:Portfolio}) {
  return <Reveal><section className="home-hero border-b border-border"><div className="site-container"><Breadcrumb items={[{label:'Portfolio',href:'/portfolio'},{label:project.title}]}/><div className="mt-10 grid items-center gap-10 lg:grid-cols-[.9fr_1.2fr]"><div data-reveal><p className="eyebrow">{project.categories?.[0]||'FROM THE PORTFOLIO'}</p><h1 className="mt-5 text-4xl font-semibold leading-tight tracking-[-.04em] md:text-6xl">{project.title}</h1><p className="mt-6 text-lg leading-relaxed text-muted-foreground">{project.description}</p>{project.client&&<p className="mt-6 text-sm text-muted-foreground">Client / {project.client}</p>}<div className="mt-8 flex flex-wrap items-center gap-5"><Link className="button-primary" href={inquiryLink({project:project.title,source:'/portfolio/'+project.slug})}>Discuss a similar project ↗</Link>{project.project_url&&<a href={project.project_url} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-brand">Visit project ↗<span className="sr-only"> (new tab)</span></a>}</div></div><div data-reveal className="min-w-0 overflow-hidden rounded-2xl border border-border bg-card p-2"><img src={getCdnUrl(project.image)} alt={project.image_alt||project.title} width="1000" height="750" className="aspect-[4/3] h-auto w-full rounded-xl object-cover" fetchPriority="high"/></div></div></div></section></Reveal>
}
