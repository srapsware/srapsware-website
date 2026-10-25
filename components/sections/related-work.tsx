import { ProjectCard } from '@/components/portfolio/project-card'
import { getAllPortfolio,getTechnologies } from '@/lib/content'
import { selectRelatedWork,type WorkSelection } from '@/lib/related-work'
import Link from 'next/link'
export function RelatedWork({title='Work you can explore.',...selection}:WorkSelection&{title?:string}) {
  const projects=selectRelatedWork(getAllPortfolio(),selection)
  if(!projects.length)return null
  const technologies=getTechnologies()
  return <section className="section-space border-t border-border"><div className="site-container"><div className="section-heading"><div><p className="eyebrow">THE WORK BEHIND THE WORDS</p><h2>{title}</h2></div><Link href="/portfolio" className="font-medium text-brand">Explore all projects ↗</Link></div><div className="grid gap-x-7 gap-y-12 md:grid-cols-3">{projects.map(project=><ProjectCard key={project.slug} project={project} technologies={technologies}/>)}</div></div></section>
}
