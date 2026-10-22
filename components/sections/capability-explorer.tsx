'use client'

import { CapabilityScene } from '@/components/animations/capability-scenes'
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
      const timeline = gsap.timeline({ defaults: { ease: 'power3.out' }, scrollTrigger: { trigger: root.current?.querySelector('.system-stage'), start: 'top 85%', once: true } })
      if (item.id === 'product') {
        timeline.from('.cap-foundation', { y: 25, opacity: 0, duration: .6 })
          .from('.cap-browser', { y: 35, opacity: 0, duration: .75 }, .2)
          .from('.cap-ui > *', { scaleY: .2, opacity: 0, transformOrigin: 'center bottom', stagger: .06, duration: .5 }, .5)
          .from('.cap-phone', { x: 35, opacity: 0, duration: .7 }, .8)
          .from('.cap-wire', { strokeDashoffset: 1, duration: .8, stagger: .1 }, .6)
          .fromTo('.cap-tap', { scale: .5, opacity: .8, transformOrigin: 'center' }, { scale: 1.5, opacity: 0, duration: .8 }, 1.7)
      } else if (item.id === 'commerce') {
        timeline.from('.cap-shop', { y: -25, opacity: 0, duration: .7 })
          .from('.cap-checkout', { x: -20, opacity: 0, duration: .6 }, .4)
          .from('.cap-wire', { strokeDashoffset: 1, duration: 1 }, .4)
          .fromTo('.cap-order', { opacity: 1, x: 0 }, { x: 150, duration: .7 }, .7)
          .to('.cap-order', { opacity: 0, duration: .2 }, 1.4)
          .from('.cap-confirm', { scale: 0, transformOrigin: 'center', duration: .4, ease: 'back.out(2)' }, 1.3)
          .from('.cap-package', { y: -35, opacity: 0, rotation: -8, transformOrigin: 'center', duration: .7 }, 1.5)
          .from('.cap-stock', { y: 15, opacity: 0, duration: .5 }, 1.8)
          .from('.cap-stock-bar', { scaleY: 0, transformOrigin: 'bottom', stagger: .08, duration: .5 }, 2)
      } else if (item.id === 'cloud') {
        timeline.from('.cap-source', { x: -25, opacity: 0, duration: .6 })
          .from('.cap-build', { y: 20, opacity: 0, duration: .5 }, .3)
          .from('.cap-wire', { strokeDashoffset: 1, duration: 1.4 }, .3)
          .from('.cap-test', { scale: 0, transformOrigin: 'center', stagger: .2, duration: .3 }, .6)
          .fromTo('.cap-release', { opacity: 1, x: 0 }, { x: 341, duration: 1.1, ease: 'power1.inOut' }, .6)
          .to('.cap-release', { opacity: 0, duration: .2 }, 1.7)
          .from('.cap-cloud', { y: -20, opacity: 0, duration: .6 }, 1.1)
          .from('.cap-monitor', { y: 20, opacity: 0, duration: .5 }, 1.7)
          .from('.cap-metrics', { strokeDashoffset: 1, duration: 1.1, ease: 'none' }, 2)
      } else {
        timeline.from('.cap-tools, .cap-workflow', { x: -25, opacity: 0, stagger: .2, duration: .6 })
          .from('.cap-adapter', { rotation: -30, scale: .7, opacity: 0, transformOrigin: 'center', duration: .8 }, .3)
          .from('.cap-wire', { strokeDashoffset: 1, stagger: .1, duration: 1 }, .6)
          .from('.cap-database', { x: 30, opacity: 0, duration: .7 }, .8)
          .set('.cap-packet-a, .cap-packet-b', { opacity: 1 }, 1)
          .to('.cap-packet-a', { x: 87, duration: .4 }, 1)
          .to('.cap-packet-b', { x: 87, duration: .4 }, 1.1)
          .to('.cap-packet-a', { y: 89, duration: .4 }, 1.4)
          .to('.cap-packet-b', { y: -84, duration: .4 }, 1.5)
          .to('.cap-packet-a, .cap-packet-b', { x: 321, duration: .65 }, 1.9)
          .to('.cap-packet-a, .cap-packet-b', { opacity: 0, duration: .2 }, 2.5)
          .from('.cap-confirm', { scale: 0, transformOrigin: 'center', duration: .4, ease: 'back.out(2)' }, 2.5)
      }
    })
    return () => media.revert()
  }, { scope: root, dependencies: [active], revertOnUpdate: true })
  const choose = (index: number) => { setActive(index); buttons.current[index]?.focus() }
  return <section ref={root} id="capabilities" className="capability-explorer section-space border-t border-border bg-card" aria-labelledby={`${id}-heading`}>
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
          <CapabilityScene key={item.id} item={item} id={id}/>
        </div>
      </div>
    </div>
  </section>
}
