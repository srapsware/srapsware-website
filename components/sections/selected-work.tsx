import { getAllPortfolio } from '@/lib/content'
import { getCdnUrl } from '@/lib/utils'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

export function SelectedWork() {
  // Explicit selection of established portfolio records, rather than synthetic catalog ordering.
  const slugs = ['bionic-reading', 'pharmagenies', 'agriculture-wy-gov']
  const archive = getAllPortfolio()
  const projects = slugs.flatMap(slug => {
    const item = archive.find(project => project.slug === slug)
    return item ? [item] : []
  })
  return <section className="section-space border-t border-border">
    <div className="site-container">
      <div className="section-heading"><div><p className="eyebrow">SELECTED WORK</p><h2>Different challenges.<br /><span className="text-muted-foreground">Thoughtful solutions.</span></h2></div><Link href="/portfolio" className="inline-flex items-center gap-2 text-sm font-semibold">Explore the portfolio<ArrowUpRight size={17} /></Link></div>
      <div className="grid gap-7 md:grid-cols-3">
        {projects.map((project, i) => <Link key={project.slug} href={`/portfolio/${project.slug}`} className="work-card group">
          <div className="aspect-[4/3] overflow-hidden rounded-xl border border-border bg-muted">
            <img src={getCdnUrl(project.image)} alt={project.image_alt || project.title} width="640" height="480" loading="lazy" className="h-full w-full object-cover transition-transform duration-500 motion-safe:group-hover:scale-105" />
          </div>
          <div className="mt-5 flex items-start justify-between gap-3"><div><p className="eyebrow mb-2">PROJECT / 0{i + 1}</p><h3 className="text-xl font-semibold">{project.title}</h3></div><ArrowUpRight className="mt-6 shrink-0 text-brand" size={22} /></div>
          <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
        </Link>)}
      </div>
    </div>
  </section>
}
