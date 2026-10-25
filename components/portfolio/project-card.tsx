import type { Portfolio, Technology } from '@/lib/content'
import { getCdnUrl } from '@/lib/utils'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export function ProjectCard({project,technologies=[]}:{project:Portfolio;technologies?:Technology[]}) {
  const stack=(project.technologies||[]).slice(0,6).flatMap(name=>{const tech=technologies.find(t=>t.title.toLowerCase()===name.toLowerCase());return tech?[tech]:[]})
  return <article className="min-w-0"><Link href={`/portfolio/${project.slug}`} className="group block"><div className="aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-muted"><img src={getCdnUrl(project.image)} alt={project.image_alt||project.title} width="640" height="480" loading="lazy" className="h-full w-full object-cover transition-transform duration-500 motion-safe:group-hover:scale-105"/></div><p className="eyebrow mt-5">{project.categories?.[0]||'SELECTED PROJECT'}</p><h3 className="mt-3 flex items-start justify-between gap-3 text-xl font-semibold">{project.title}<ArrowUpRight size={19} className="mt-1 shrink-0 text-brand"/></h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.description}</p></Link>{stack.length>0&&<ul aria-label="Project technologies" className="mt-5 flex flex-wrap gap-2">{stack.map(tech=><li key={tech.slug}><Link href={`/technologies/${tech.slug}`} title={tech.title} className="flex min-h-9 min-w-9 items-center justify-center rounded-lg border border-border bg-card p-2">{tech.logo?<img src={getCdnUrl(tech.logo)} alt={tech.title} width="20" height="20" loading="lazy"/>:<span className="text-xs">{tech.title}</span>}</Link></li>)}</ul>}</article>
}
