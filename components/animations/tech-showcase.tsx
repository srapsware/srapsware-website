'use client'

import { Fragment, useEffect, useId, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight, Search, X } from 'lucide-react'
import { useGSAP } from '@gsap/react'
import { Flip } from 'gsap/Flip'
import { gsap } from '@/lib/animations/gsap-setup'
import type { Technology } from '@/lib/content'
import { technologyRelations } from '@/lib/technology-relations'
import { getCdnUrl } from '@/lib/utils'
import './technology-atlas.css'

if (typeof window !== 'undefined') gsap.registerPlugin(Flip)
interface TechShowcaseProps {
  technologies: Technology[]
  title?: string
  subtitle?: string
  filterSlugs?: string[]
  showStats?: boolean
}

function Logo({ technology, size = 36 }: { technology: Technology; size?: number }) {
  return <Image src={getCdnUrl(technology.logo)} alt="" width={size} height={size} unoptimized/>
}

const landscapes = [
  { title: 'Interfaces & design', categories: ['Frontend', 'Design'], path: 'M80 100C240 20 310 230 500 150S760 40 1120 100' },
  { title: 'Backend & APIs', categories: ['Backend'], path: 'M80 230C260 350 320 110 560 240S900 320 1120 230' },
  { title: 'Mobile experiences', categories: ['Mobile'], path: 'M80 360C300 260 400 450 620 340S940 260 1120 360' },
  { title: 'Data & storage', categories: ['Database'], path: 'M200 40C400 160 260 300 420 420' },
  { title: 'Cloud & delivery', categories: ['Cloud & DevOps', 'DevTools'], path: 'M600 40C420 160 810 270 680 420' },
  { title: 'AI & machine learning', categories: ['AI & ML'], path: 'M1000 40C800 130 1050 320 900 420' },
]

export default function TechShowcase({ technologies, title = 'Technologies We Master', subtitle = 'Building with industry-leading tools and frameworks', filterSlugs, showStats = true }: TechShowcaseProps) {
  const base = technologies.filter(technology => technology.active && (filterSlugs?.length ? filterSlugs.includes(technology.slug) : technology.featured))
  const [selectedSlug, setSelectedSlug] = useState('')
  const [anchorSlug, setAnchorSlug] = useState('')
  const [category, setCategory] = useState('All')
  const [query, setQuery] = useState('')
  const [columns, setColumns] = useState(3)
  const catalogue = useRef<HTMLUListElement>(null)
  const opener = useRef<HTMLButtonElement | null>(null)
  const root = useRef<HTMLElement>(null)
  const map = useRef<HTMLDivElement>(null)
  const layout = useRef<ReturnType<typeof Flip.getState> | null>(null)
  const id = useId()
  const selected = technologies.find(technology => technology.active && technology.slug === selectedSlug)
  const categories = ['All', ...new Set(base.map(technology => technology.category))]
  const filtered = base.filter(technology => (category === 'All' || technology.category === category || landscapes.find(group => group.title === category)?.categories.includes(technology.category)) && `${technology.title} ${technology.category} ${technology.ecosystem ?? ''}`.toLowerCase().includes(query.trim().toLowerCase()))
  const relations = selected ? technologyRelations(selected, technologies) : []

  useEffect(() => {
    if (!catalogue.current) return
    const observer = new ResizeObserver(() => {
      if (catalogue.current) setColumns(getComputedStyle(catalogue.current).gridTemplateColumns.split(' ').length)
    })
    observer.observe(catalogue.current)
    return () => observer.disconnect()
  }, [])

  useGSAP(() => {
    const media = gsap.matchMedia()
    media.add('(prefers-reduced-motion: no-preference)', () => {
      gsap.timeline({ scrollTrigger: { trigger: map.current, start: 'top 85%', once: true } })
        .from('.landscape-route', { strokeDashoffset: 1, duration: 1.2, stagger: .08 }, 0)
        .from('.landscape-cluster', { y: 14, opacity: 0, duration: .6, stagger: .08 }, .15)
        .fromTo('.landscape-pulse', { strokeDashoffset: .1, opacity: 0 }, { strokeDashoffset: -1, opacity: .8, duration: 1.4, stagger: .06 }, .5)
        .to('.landscape-pulse', { opacity: 0, duration: .3 }, 2.3)
    })
    return () => media.revert()
  }, { scope: root })

  useGSAP(() => {
    if (!layout.current) return
    const state = layout.current
    layout.current = null
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    Flip.from(state, { duration: .5, ease: 'power3.out', prune: true, onEnter: elements => gsap.fromTo(elements, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: .35 }) })
  }, { scope: root, dependencies: [category, query], revertOnUpdate: true })

  function captureLayout() {
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) layout.current = Flip.getState(root.current?.querySelectorAll('.atlas-tile') ?? [])
  }
  function choose(slug: string) {
    setSelectedSlug(slug)
  }
  function closeExploration() {
    setSelectedSlug('')
    opener.current?.focus({ preventScroll: true })
  }
  function filterCategory(value: string) {
    captureLayout()
    setCategory(value)
    setSelectedSlug('')
  }
  const selectedIndex = filtered.findIndex(item => item.slug === anchorSlug)
  const panelAfter = selectedIndex < 0 ? -1 : Math.min(filtered.length - 1, Math.ceil((selectedIndex + 1) / columns) * columns - 1)
  const panel = selected && <div className="atlas-inline-detail" id={`${id}-exploration`}>
    <div className="atlas-inline-top"><p className="atlas-eyebrow">EXPLORING / {selected.category}</p><button type="button" onClick={closeExploration}>Close exploration<X size={16}/></button></div>
    <div className="atlas-inline-body"><div><div className="atlas-selected-heading"><span className="atlas-logo"><Logo technology={selected} size={40}/></span><h3>{selected.title}</h3></div><p className="atlas-description">{selected.description}</p><p className="atlas-inline-experience">Our experience: {selected.experience}</p><Link className="atlas-detail-link" href={`/technologies/${selected.slug}`}>View {selected.title} details<ArrowUpRight size={17}/></Link></div>
    <div><h4>Connected technologies</h4><p className="atlas-guidance">Explore related tools. These connections do not prescribe a project stack.</p><ul className="atlas-related">{relations.map(({ technology, label }) => <li key={technology.slug}><button type="button" onClick={() => choose(technology.slug)}><Logo technology={technology} size={22}/><span>{technology.title}<small>{label}</small></span></button></li>)}</ul>{!relations.length && <p className="atlas-guidance">No connections listed yet. Visit the detail page to learn more.</p>}</div></div>
  </div>
  if (!base.length) return null
  return <section ref={root} id="technology-atlas" className="technology-atlas" aria-labelledby={`${id}-title`}>
    <div className="atlas-shell">
      <header className="atlas-heading"><div><p className="atlas-eyebrow">THE TOOLS. THE CONNECTIONS. THE POSSIBILITIES.</p><h2 id={`${id}-title`}>{title}</h2></div><p>{subtitle}</p></header>
      <div ref={map} className="technology-landscape">
        <div className="landscape-intro"><h3>Different tools. One thoughtfully engineered product.</h3><p>Explore our expertise across interfaces, applications, data, cloud, and beyond.</p></div>
        <div className="landscape-field">
          <svg viewBox="0 0 1200 460" preserveAspectRatio="none" aria-hidden="true" className="landscape-lines">{landscapes.map(group => <g key={group.title}><path className="landscape-route" d={group.path} pathLength="1" strokeDasharray="1"/><path className="landscape-pulse" d={group.path} pathLength="1" strokeDasharray=".06 .94" opacity="0"/></g>)}</svg>
          <div className="landscape-clusters">{landscapes.map((group, index) => {
            const members = base.filter(tool => group.categories.includes(tool.category))
            if (!members.length) return null
            return <button type="button" className="landscape-cluster" key={group.title} aria-pressed={category === group.title} onClick={() => filterCategory(group.title)}><span className="landscape-number">0{index + 1} / {members.length} tools</span><strong>{group.title}</strong><span className="landscape-logos">{members.slice(0, 3).map(tool => <span className="atlas-logo" key={tool.slug}><Logo technology={tool} size={27}/></span>)}<ArrowUpRight size={18}/></span></button>
          })}</div>
        </div>
        <p className="landscape-instruction">Choose a category or select a technology to explore.</p>
      </div>
      <div className="atlas-catalogue-heading"><div><p className="atlas-eyebrow">FIND YOUR BUILDING BLOCKS</p><h3>Explore our technologies</h3></div><label className="atlas-search"><Search size={18} aria-hidden="true"/><span className="sr-only">Search technologies</span><input value={query} onChange={event => { captureLayout(); setQuery(event.target.value); setSelectedSlug('') }} placeholder="Search tools, categories, ecosystems…" type="search"/></label></div>
      <div className="atlas-filters" aria-label="Filter technologies by category">{categories.map(name => <button key={name} type="button" aria-pressed={category === name} onClick={() => { filterCategory(name) }}>{name}</button>)}</div>
      <div className="atlas-results"><p role="status">{filtered.length} of {base.length} technologies</p>{(query || category !== 'All') && <button type="button" onClick={() => { captureLayout(); setQuery(''); setCategory('All'); setSelectedSlug('') }}>Clear filters<X size={13}/></button>}</div>
      <ul ref={catalogue} className="atlas-catalogue" aria-label="Technology catalogue">{filtered.map((technology, index) => <Fragment key={technology.slug}><li className="atlas-tile" data-flip-id={technology.slug} data-technology={technology.slug} key={technology.slug} data-selected={selected?.slug === technology.slug}>
        <button type="button" className="atlas-select" aria-pressed={selected?.slug === technology.slug} title={`Show ${technology.title} in the technology atlas`} aria-expanded={selected?.slug === technology.slug} aria-controls={selected?.slug === technology.slug ? `${id}-exploration` : undefined} onClick={event => { opener.current = event.currentTarget; setAnchorSlug(technology.slug); choose(technology.slug) }}><span className="atlas-logo"><Logo technology={technology}/></span><span className="atlas-tile-name">{technology.title}</span><span className="atlas-experience">{technology.experience}</span></button>
        <Link href={`/technologies/${technology.slug}`} className="atlas-page-link" aria-label={`${technology.title} details`}>Details<ArrowUpRight size={12}/></Link>
      </li>{selected && index === panelAfter && <li className="atlas-panel-row">{panel}</li>}</Fragment>)}</ul>
      {selected && panelAfter === -1 && panel}
      {!filtered.length && <div className="atlas-no-results"><h4>No technologies match your search.</h4><p>Try another name or clear the category filter.</p></div>}
      {showStats && <dl className="atlas-summary">{['Expert', 'Advanced', 'Proficient'].map(level => { const count = base.filter(technology => technology.experience === level).length; return count ? <div key={level}><dt>{level} level</dt><dd>{count}</dd></div> : null })}</dl>}
      <div className="atlas-contact"><div><h3>Not sure which technologies fit your idea?</h3><p>Let’s find the right approach together.</p></div><Link href="/contact">Talk about your project<ArrowUpRight size={18}/></Link></div>
    </div>
  </section>
}
