'use client'

import { useEffect, useId, useRef, useState, type KeyboardEvent } from 'react'
import { useGSAP } from '@gsap/react'
import { ArrowRight, ArrowUpRight, Code2, Smartphone, Cloud, Sparkles, Palette, Server } from 'lucide-react'
import Link from 'next/link'
import type { Service } from '@/lib/content'
import { gsap } from '@/lib/animations/gsap-setup'
import { ServiceBlueprint } from '@/components/animations/service-blueprint'
import './featured-services.css'

const icons = { Code2, Smartphone, Cloud, Sparkles, Palette, Server }

interface FeaturedServicesProps {
  services?: Service[]
  title?: string
  description?: string
}

export function FeaturedServices({ services = [], title = 'Our Core Services', description = 'Comprehensive software development services to transform your business' }: FeaturedServicesProps) {
  const root = useRef<HTMLElement>(null)
  const stage = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)
  const [enhanced, setEnhanced] = useState(false)
  const id = useId()
  useEffect(() => setEnhanced(true), [])

  useGSAP(() => {
    if (!enhanced || !services.length) return
    const media = gsap.matchMedia()
    media.add('(prefers-reduced-motion: no-preference)', () => {
      const panel = stage.current?.querySelector<HTMLElement>('[role="tabpanel"]:not([hidden])')
      if (!panel) return
      const timeline = gsap.timeline({
        defaults: { ease: 'power3.out' },
        scrollTrigger: { trigger: panel, start: 'top 85%', once: true },
      })
      // Assemble each diagram from separate parts; no autoplay or endless background work.
      timeline.from(panel.querySelectorAll('.studio-piece'), { y: 32, scale: .94, opacity: 0, transformOrigin: '50% 50%', stagger: .09, duration: .85 }, 0)
        .from(panel.querySelectorAll('.studio-trace'), { strokeDashoffset: 1, duration: 1.25, stagger: .08, ease: 'power2.inOut' }, .35)
        .from(panel.querySelectorAll('.studio-detail'), { opacity: 0, x: -8, stagger: .04, duration: .5 }, .65)
        .from(panel.querySelectorAll('.studio-copy > *'), { y: 12, opacity: 0, stagger: .07, duration: .5 }, .1)
        .fromTo(panel.querySelectorAll('.studio-signal'), { strokeDashoffset: .15, opacity: 0 }, { strokeDashoffset: -1, opacity: 1, duration: 1.25, stagger: .1, ease: 'power2.inOut' }, .7)
        .to(panel.querySelectorAll('.studio-signal'), { opacity: 0, duration: .25 }, 2.3)
    })
    return () => media.revert()
  }, { scope: root, dependencies: [active, enhanced, services.length], revertOnUpdate: true })

  function navigate(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next = index
    if (event.key === 'ArrowDown' || event.key === 'ArrowRight') next = (index + 1) % services.length
    else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') next = (index + services.length - 1) % services.length
    else if (event.key === 'Home') next = 0
    else if (event.key === 'End') next = services.length - 1
    else return
    event.preventDefault()
    setActive(next)
    root.current?.querySelectorAll<HTMLButtonElement>('[role="tab"]')[next]?.focus()
  }

  if (!services.length) return null
  return <section ref={root} id="core-services" className="service-studio services-section" data-enhanced={enhanced} aria-labelledby={`${id}-heading`}>
    <noscript><style>{'.service-studio[data-enhanced="false"] .studio-panel ~ .studio-panel { display: block; }'}</style></noscript>
    <div className="studio-shell">
      <header className="studio-heading">
        <div><p className="studio-eyebrow"><span aria-hidden="true">↳</span> WHAT WE DO / BUILT AROUND YOU</p><h2 id={`${id}-heading`}>{title}</h2></div>
        <p className="studio-intro">{description}</p>
      </header>
      <div className="studio-workbench">
        <div className="studio-navigation">
          <p className="studio-instruction"><span className="studio-dot"/>Explore our capabilities<span aria-hidden="true">{String(services.length).padStart(2, '0')}</span></p>
          <div className="studio-tabs" role={enhanced ? 'tablist' : undefined} aria-label="Service capabilities" aria-orientation={enhanced ? 'vertical' : undefined}>
            {services.map((service, index) => {
              const Icon = icons[service.icon as keyof typeof icons] || Code2
              const label = <><span className="studio-tab-number">{String(index + 1).padStart(2, '0')}</span><Icon size={21} aria-hidden="true"/><span className="studio-tab-title">{service.title}</span><ArrowUpRight className="studio-tab-arrow" size={18} aria-hidden="true"/></>
              return enhanced ? <button key={service.slug} type="button" role="tab" id={`${id}-tab-${index}`} aria-controls={`${id}-panel-${index}`} aria-selected={active === index} tabIndex={active === index ? 0 : -1} onClick={() => setActive(index)} onKeyDown={event => navigate(event, index)} className="studio-tab">{label}</button> : <a key={service.slug} className="studio-tab" href={`#${id}-panel-${index}`}>{label}</a>
            })}
          </div>
          <Link className="studio-all" href="/services">View all services<ArrowRight size={17}/></Link>
        </div>
        <div className="studio-display" ref={stage}>
          <div className="studio-display-top"><span><span aria-hidden="true">✳</span> THE SRAPSWARE STUDIO</span><span aria-hidden="true">IDEAS → REALITY</span></div>
          {services.map((service, index) => <div key={service.slug} id={`${id}-panel-${index}`} className="studio-panel" role={enhanced ? 'tabpanel' : undefined} aria-labelledby={enhanced ? `${id}-tab-${index}` : undefined} tabIndex={enhanced ? 0 : undefined} hidden={enhanced && active !== index}>
            <div className="studio-drawing"><ServiceBlueprint kind={service.icon}/><span className="studio-drawing-index" aria-hidden="true">{String(index + 1).padStart(2, '0')}<small> / {String(services.length).padStart(2, '0')}</small></span></div>
            <div className="studio-copy"><h3>{service.title}</h3><p>{service.description}</p><Link href={service.link}>Explore {service.title}<ArrowUpRight size={19}/></Link></div>
          </div>)}
          <div className="studio-display-bottom"><span><i aria-hidden="true"/>Made to fit your ambition.</span></div>
        </div>
      </div>
      <div className="studio-bridge"><p>One team. From the first sketch to what’s next.</p><Link href="/contact">Let’s build your next chapter<ArrowUpRight size={18}/></Link></div>
    </div>
  </section>
}
