'use client'

import { capabilities } from '@/config/capabilities'
import { gsap } from '@/lib/animations/gsap-setup'
import { useGSAP } from '@gsap/react'
import { ArrowUpRight, Check } from 'lucide-react'
import Link from 'next/link'
import { useId, useRef, useState } from 'react'

export function CapabilityExplorer() {
  const [active, setActive] = useState(0)
  const root = useRef<HTMLElement>(null)
  const buttons = useRef<(HTMLButtonElement | null)[]>([])
  const id = useId().replace(/:/g, '')
  const item = capabilities[active]
  useGSAP(() => {
    const media = gsap.matchMedia()
    media.add('(prefers-reduced-motion: no-preference)', () => {
      const timeline = gsap.timeline({ scrollTrigger: { trigger: root.current, start: 'top 75%', once: true } })
      timeline.from('.system-core', { scale: .92, opacity: 0, transformOrigin: 'center', duration: .65, ease: 'power3.out' })
        .from('.system-wire', { strokeDashoffset: 1, duration: .9, stagger: .08, ease: 'power2.inOut' }, '-=.3')
        .from('.system-node', { y: 10, opacity: 0, duration: .5, stagger: .08 }, '-=.75')
        .fromTo('.system-signal', { strokeDashoffset: 1, opacity: 0 }, { strokeDashoffset: -1, opacity: .8, duration: 1.7, stagger: .12, ease: 'none' }, '-=.3')
        .to('.system-signal', { opacity: 0, duration: .3 })
    })
    return () => media.revert()
  }, { scope: root, dependencies: [active], revertOnUpdate: true })
  const choose = (index: number) => { setActive(index); buttons.current[index]?.focus() }
  return <section ref={root} className="section-space border-t border-border bg-card" aria-labelledby={`${id}-heading`}>
    <div className="site-container">
      <div className="section-heading">
        <div><p className="eyebrow">THE BIG PICTURE, CONNECTED</p><h2 id={`${id}-heading`}>Great software.<br /><span className="text-muted-foreground">Every piece in place.</span></h2></div>
        <p>Explore how we bring the experience, the engineering and your business together.</p>
      </div>
      <div className="capability-tabs" role="tablist" aria-label="Explore our capabilities">
        {capabilities.map((entry, index) => <button key={entry.id} ref={element => { buttons.current[index] = element }} type="button" role="tab" id={`${id}-tab-${index}`} aria-controls={`${id}-panel`} aria-selected={index === active} tabIndex={index === active ? 0 : -1} onClick={() => setActive(index)} onKeyDown={event => {
          const next = event.key === 'ArrowRight' ? (active + 1) % capabilities.length : event.key === 'ArrowLeft' ? (active + capabilities.length - 1) % capabilities.length : event.key === 'Home' ? 0 : event.key === 'End' ? capabilities.length - 1 : -1
          if (next >= 0) { event.preventDefault(); choose(next) }
        }}><span aria-hidden="true" className="mr-3 text-xs">{entry.number}</span>{entry.label}</button>)}
      </div>
      <div id={`${id}-panel`} role="tabpanel" aria-labelledby={`${id}-tab-${active}`} tabIndex={0} className="capability-panel">
        <div className="p-6 md:p-10 lg:py-14">
          <p className="eyebrow">ENGINEERED AROUND YOU / {item.number}</p>
          <h3 className="mt-5 text-3xl font-semibold leading-tight tracking-tight lg:text-4xl">{item.title}</h3>
          <p className="mt-5 leading-relaxed text-muted-foreground">{item.description}</p>
          <p className="mt-7 flex gap-3 border-t border-border pt-6 text-sm leading-relaxed"><Check size={18} className="mt-1 shrink-0 text-brand" />{item.outcome}</p>
          <Link href={item.href} className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand">{item.link}<ArrowUpRight size={17} /></Link>
        </div>
        <div className="system-stage">
          <svg viewBox="0 0 640 470" role="img" aria-labelledby={`${id}-diagram-title`}>
            <title id={`${id}-diagram-title`}>{`${item.nodes.join(', ')} connect around ${item.center.toLowerCase()}.`}</title>
            <defs>
              <pattern id={`${id}-dots`} width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r="1" fill="currentColor" opacity=".12" /></pattern>
              <linearGradient id={`${id}-line`} x1="0" x2="1" y1="0" y2="1"><stop stopColor="hsl(var(--brand))" /><stop offset="1" stopColor="hsl(var(--accent-primary))" /></linearGradient>
            </defs>
            <rect width="640" height="470" fill={`url(#${id}-dots)`} />
            <ellipse cx="320" cy="241" rx="205" ry="157" fill="none" stroke="hsl(var(--border))" strokeDasharray="3 8" />
            <ellipse cx="320" cy="241" rx="250" ry="198" fill="none" stroke="hsl(var(--border))" opacity=".5" />
            {['M160 108 H240 Q260 108 260 128 V190', 'M480 108 H400 Q380 108 380 128 V190', 'M160 362 H240 Q260 362 260 342 V280', 'M480 362 H400 Q380 362 380 342 V280'].map(path => <g key={path} fill="none">
              <path d={path} className="system-wire" stroke={`url(#${id}-line)`} strokeWidth="2" pathLength="1" strokeDasharray="1" />
              <path d={path} className="system-signal" opacity="0" stroke="hsl(var(--foreground))" strokeWidth="3" pathLength="1" strokeDasharray=".06 .94" />
            </g>)}
            <g className="system-core">
              <rect x="202" y="178" width="236" height="126" rx="25" fill="hsl(var(--brand-soft))" opacity=".6" />
              <rect x="212" y="168" width="216" height="126" rx="22" fill="hsl(var(--card))" stroke="hsl(var(--brand))" />
              <path d="M305 195 L292 208 L305 221 M335 195 L348 208 L335 221 M324 192 L316 224" stroke={`url(#${id}-line)`} strokeWidth="3" fill="none" strokeLinecap="round" />
              <text x="320" y="249" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="15" fontWeight="700" letterSpacing="1.5">{item.center}</text>
              <text x="320" y="272" textAnchor="middle" className="blueprint-label">{item.detail}</text>
            </g>
            {item.nodes.map((label, index) => {
              const x = index % 2 === 0 ? 63 : 407
              const y = index < 2 ? 63 : 317
              return <g key={label} className="system-node">
                <rect x={x} y={y + 5} width="170" height="90" rx="14" fill="hsl(var(--brand-soft))" opacity=".4" />
                <rect x={x} y={y} width="170" height="90" rx="14" fill="hsl(var(--card))" stroke="hsl(var(--border))" />
                <rect x={x + 15} y={y + 15} width="25" height="25" rx="7" fill="hsl(var(--brand-soft))" />
                <text x={x + 27.5} y={y + 32} textAnchor="middle" fill="hsl(var(--brand))" fontSize="11" fontWeight="600">0{index + 1}</text>
                <path d={`M${x + 120} ${y + 23} h30 m-18 8 h18`} stroke="hsl(var(--border))" strokeWidth="3" strokeLinecap="round" />
                <text x={x + 15} y={y + 66} fill="hsl(var(--foreground))" fontSize="14" fontWeight="500">{label}</text>
              </g>
            })}
            <text x="320" y="450" textAnchor="middle" className="blueprint-label" letterSpacing="2">EXPERIENCE × ENGINEERING × BUSINESS</text>
          </svg>
        </div>
      </div>
    </div>
  </section>
}
