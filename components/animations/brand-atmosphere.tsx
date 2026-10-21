'use client'

import { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/lib/animations/gsap-setup'
import { Pause, Play } from 'lucide-react'

const snippets = [
  { language: 'TypeScript', code: 'interface YourNextIdea {\n  purpose: string\n  possibilities: endless\n}' },
  { language: 'React', code: 'const Product = () => {\n  return <SomethingGreat />\n}' },
  { language: 'Node.js', code: 'app.build({\n  ideas: yours,\n  engineering: ours\n})' },
  { language: 'Python', code: 'def build_with_heart(idea):\n    return make_it_real(idea)' },
]

/** Srapsware's grid, code and light atmosphere, with scoped GSAP choreography. */
export function BrandAtmosphere({ variant = 'section' }: { variant?: 'hero' | 'footer' | 'section' }) {
  const root = useRef<HTMLDivElement>(null)
  const motion = useRef<gsap.core.Timeline | null>(null)
  const [paused, setPaused] = useState(false)
  useGSAP(() => {
    if (variant === 'section') return
    const media = gsap.matchMedia()
    media.add('(prefers-reduced-motion: no-preference)', () => {
      const timeline = gsap.timeline({ repeat: -1, yoyo: true, defaults: { ease: 'sine.inOut' } })
      motion.current = timeline
      timeline.to('.brand-grid', { backgroundPosition: '60px 30px', duration: 18 }, 0)
        .to('.brand-light-one', { xPercent: 20, yPercent: 12, scale: 1.15, duration: 12 }, 0)
        .to('.brand-light-two', { xPercent: -18, yPercent: -10, scale: .85, duration: 16 }, 0)
        .to('.brand-code-card', { y: -24, rotation: index => index % 2 ? 2 : -2, duration: 9, stagger: .8 }, 0)
        .to('.brand-circuit-signal', { strokeDashoffset: -2, duration: 12, ease: 'none' }, 0)
      let inView = false
      const observer = new IntersectionObserver(([entry]) => {
        inView = entry.isIntersecting
        if (entry.isIntersecting && root.current?.dataset.paused !== 'true' && !document.hidden) timeline.play()
        else timeline.pause()
      })
      if (root.current) observer.observe(root.current)
      const visibility = () => { if (document.hidden) timeline.pause(); else if (inView && root.current?.dataset.paused !== 'true') timeline.play() }
      document.addEventListener('visibilitychange', visibility)
      return () => { observer.disconnect(); document.removeEventListener('visibilitychange', visibility); motion.current = null }
    })
    return () => media.revert()
  }, { scope: root })
  return <div ref={root} data-paused={paused} className={`brand-atmosphere brand-atmosphere-${variant}`}>
    <div className="brand-grid" aria-hidden="true" />
    <div className="brand-light brand-light-one" aria-hidden="true" />
    <div className="brand-light brand-light-two" aria-hidden="true" />
    <svg className="brand-circuit" viewBox="0 0 1440 900" preserveAspectRatio="none" aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="1">
        {['M0 240 H160 Q200 240 200 280 V600 Q200 640 240 640 H440', 'M1440 180 H1240 Q1200 180 1200 220 V560 Q1200 600 1160 600 H990', 'M120 900 V810 Q120 770 160 770 H520', 'M1440 760 H1330 Q1290 760 1290 800 V900'].map(path => <g key={path}><path d={path} opacity=".25" /><path d={path} className="brand-circuit-signal" pathLength="1" strokeDasharray=".09 .91" strokeWidth="2" /></g>)}
      </g>
    </svg>
    {variant === 'hero' && <div className="brand-code-field" aria-hidden="true">{snippets.map((snippet, index) => <div key={snippet.language} className={`brand-code-card brand-code-${index}`}><div className="brand-code-toolbar"><i /><i /><i /><span>{snippet.language}</span></div><pre>{snippet.code}</pre></div>)}</div>}
    {variant === 'footer' && <div className="brand-footer-code" aria-hidden="true">{['const', '{ }', 'async', '</>', 'return', 'await'].map((text, i) => <span className="brand-code-card" style={{ left: `${6 + i * 17}%`, top: `${20 + i % 3 * 25}%` }} key={text}>{text}</span>)}</div>}
    {variant !== 'section' && <button type="button" className="brand-motion-control" aria-label={`${paused ? 'Play' : 'Pause'} ${variant} background motion`} aria-pressed={paused} onClick={() => { const next = !paused; setPaused(next); motion.current?.paused(next) }}>{paused ? <Play size={13} /> : <Pause size={13} />}<span>{paused ? 'Play motion' : 'Pause motion'}</span></button>}
  </div>
}
