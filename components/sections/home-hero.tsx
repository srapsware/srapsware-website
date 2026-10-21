'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import { ArrowDown, ArrowUpRight, Pause, Play } from 'lucide-react'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/lib/animations/gsap-setup'
import { HeroProductScene } from '@/components/animations/hero-product-scene'
import AnimatedCounter from '@/components/animations/animated-counter'
import type { SiteSettings } from '@/lib/content'
import './home-hero.css'

export function HomeHero({ content, stats }: { content: SiteSettings['hero']; stats: SiteSettings['stats'] }) {
  const root = useRef<HTMLElement>(null)
  const scene = useRef<HTMLDivElement>(null)
  const intro = useRef<gsap.core.Timeline | null>(null)
  const ambient = useRef<gsap.core.Timeline | null>(null)
  const [paused, setPaused] = useState(false)
  const [ready, setReady] = useState(false)

  useGSAP(() => {
    setReady(true)
    const media = gsap.matchMedia()
    media.add('(prefers-reduced-motion: no-preference)', () => {
      // Keep the main message visible on first paint; movement never gates reading.
      gsap.from('.launch-copy > *', { y: 18, duration: .85, stagger: .08, ease: 'power3.out' })
      const entrance = gsap.timeline({ defaults: { ease: 'power3.out' } })
      intro.current = entrance
      entrance.from('.launch-panel', { y: 34, opacity: 0, duration: .9, stagger: .16 }, .1)
        .from('.launch-route', { strokeDashoffset: 1, duration: 1.4, stagger: .15 }, .3)
        .from('.launch-chart', { strokeDashoffset: 1, duration: 1.2, ease: 'power1.inOut' }, 1)
        .from('.launch-code-lines > text', { opacity: 0, x: -5, duration: .35, stagger: .12 }, 1)
        .from('.launch-heart-shell', { scale: .4, opacity: 0, transformOrigin: 'center', duration: .7, ease: 'back.out(1.8)' }, 1.45)
      const drift = gsap.timeline({ repeat: -1, yoyo: true, defaults: { ease: 'sine.inOut' } })
      ambient.current = drift
      drift.to('.launch-float', { y: index => index % 2 ? -9 : 7, duration: 8 }, 0)
        .to('.launch-orbit', { rotation: 12, transformOrigin: 'center', duration: 8 }, 0)
        .to('.launch-signal', { strokeDashoffset: -1, duration: 5, stagger: .4, ease: 'none' }, 0)
        .to('.launch-heart', { scale: 1.1, transformOrigin: 'center', duration: .45, repeat: 3, yoyo: true }, 1.4)
        .to('.launch-spark', { opacity: .25, duration: 2, repeat: 3, yoyo: true }, 0)
        .to('.launch-cursor', { opacity: 0, duration: .5, repeat: 9, yoyo: true, ease: 'steps(1)' }, 0)
      let inView = true
      const sync = () => {
        const shouldPause = !inView || document.hidden || root.current?.dataset.paused === 'true'
        entrance.paused(shouldPause)
        drift.paused(shouldPause)
      }
      const observer = new IntersectionObserver(([entry]) => { inView = entry.isIntersecting; sync() })
      if (root.current) observer.observe(root.current)
      document.addEventListener('visibilitychange', sync)
      return () => { observer.disconnect(); document.removeEventListener('visibilitychange', sync); intro.current = null; ambient.current = null }
    })
    media.add('(prefers-reduced-motion: no-preference) and (hover: hover) and (pointer: fine)', () => {
      const node = scene.current
      const art = node?.querySelector('.launch-parallax')
      if (!node || !art) return
      const x = gsap.quickTo(art, 'x', { duration: .7, ease: 'power3.out' })
      const y = gsap.quickTo(art, 'y', { duration: .7, ease: 'power3.out' })
      const move = (event: PointerEvent) => {
        if (root.current?.dataset.paused === 'true') return
        const bounds = node.getBoundingClientRect()
        x(((event.clientX - bounds.left) / bounds.width - .5) * 14)
        y(((event.clientY - bounds.top) / bounds.height - .5) * 14)
      }
      const reset = () => { x(0); y(0) }
      node.addEventListener('pointermove', move)
      node.addEventListener('pointerleave', reset)
      return () => { node.removeEventListener('pointermove', move); node.removeEventListener('pointerleave', reset) }
    })
    return () => media.revert()
  }, { scope: root })

  const figures = [{ value: stats.projects, label: 'Projects delivered' }, { value: stats.clients, label: 'Happy clients' }, { value: stats.team, label: 'Expert team' }, { value: stats.years, label: 'Years of experience' }]
  const pause = () => {
    const next = !paused
    setPaused(next)
    intro.current?.paused(next)
    ambient.current?.paused(next)
  }

  return <section ref={root} className="launch-hero" data-paused={paused} data-motion-ready={ready} aria-labelledby="home-hero-title">
    <div className="launch-sky" aria-hidden="true"/><div className="launch-grid" aria-hidden="true"/>
    <div className="launch-shell">
      <div className="launch-main">
        <div className="launch-copy">
          <p className="launch-badge"><span aria-hidden="true" className="launch-badge-mark">{'</>'}</span>{content.badge}</p>
          <h1 id="home-hero-title">{content.headline}<span>{content.headlineHighlight}<svg viewBox="0 0 440 20" preserveAspectRatio="none" aria-hidden="true"><path d="M3 14Q210 0 435 9"/></svg></span></h1>
          <p className="launch-description">{content.subheadline}</p>
          <div className="launch-actions"><Link href={content.ctaPrimaryLink} className="launch-primary">{content.ctaPrimary}<ArrowUpRight size={19}/></Link><Link href={content.ctaSecondaryLink} className="launch-secondary">{content.ctaSecondary}<ArrowUpRight size={18}/></Link></div>
          <p className="launch-footnote"><span/>From your first idea to your next big chapter.</p>
        </div>
        <div ref={scene} className="launch-scene">
          <div className="launch-scene-heading"><span>THE MAKING OF SOMETHING GREAT</span><span aria-hidden="true">[01-03]</span></div>
          <HeroProductScene/>
          <div className="launch-scene-bottom"><p><span>01</span> Imagine <i>→</i> <span>02</span> Engineer <i>→</i> <span>03</span> Launch</p><div className="launch-motion-controls"><button type="button" onClick={pause} aria-label={`${paused ? 'Resume' : 'Pause'} hero animation`} aria-pressed={paused} title={`${paused ? 'Resume' : 'Pause'} animation`}>{paused ? <Play size={13}/> : <Pause size={13}/>}</button></div></div>
        </div>
      </div>
      <div className="launch-proof"><div className="launch-proof-label"><span>GOOD CODE.</span><span>REAL EXPERIENCE.</span><ArrowDown size={17} aria-hidden="true"/></div><dl>{figures.map(figure=><div key={figure.label}><dt>{figure.label}</dt><dd><AnimatedCounter value={`${figure.value.replace(/\+$/, '')}+`} duration={1.8}/></dd></div>)}</dl></div>
    </div>
  </section>
}
