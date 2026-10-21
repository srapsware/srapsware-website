'use client'

import { useEffect, useRef, useState, type CSSProperties } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/lib/animations/gsap-setup'
import { ArrowUpRight, Sparkles } from 'lucide-react'
import { getCdnUrl } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import './client-logos.css'

interface ClientLogo { name: string; logo: string; website?: string }
interface ClientLogosProps {
  title?: string
  subtitle?: string
  description?: string
  logos: ClientLogo[]
  columns?: 4 | 5 | 6 | 8
  grayscale?: boolean
  animated?: boolean
}

export function ClientLogos({ title = 'TRUSTED BY THE BRANDS YOU TRUST', subtitle = 'Trusted by over 400+ clients', description = 'We bring solutions to simplify the lives of our customers.', logos, columns = 4, grayscale = false, animated = true }: ClientLogosProps) {
  const root = useRef<HTMLElement>(null)
  const network = useRef<HTMLDivElement>(null)
  const hub = useRef<HTMLDivElement>(null)
  const [paths, setPaths] = useState<string[]>([])
  const [active, setActive] = useState<number | null>(null)
  const heading = subtitle.split(/(\d[\d,]*\+)/)

  // Measure real logo centres, so connectors follow wrapping, fonts and viewport changes.
  useEffect(() => {
    const node = network.current
    const origin = hub.current
    if (!node || !origin) return
    let frame = 0
    const measure = () => {
      const bounds = node.getBoundingClientRect()
      const source = origin.getBoundingClientRect()
      const x = source.left + source.width / 2 - bounds.left
      const y = source.top + source.height / 2 - bounds.top
      const next = Array.from(node.querySelectorAll<HTMLElement>('.trust-logo-surface')).map(logo => {
        // Use the layout position, not a hover/entrance transform, for a stable connection.
        const item = logo.closest<HTMLElement>('.trust-node')!
        const targetX = item.offsetLeft + logo.offsetWidth / 2
        const targetY = node.querySelector<HTMLElement>('.trust-nodes')!.offsetTop + item.offsetTop + logo.offsetHeight / 2
        return `M${x} ${y} C${x} ${targetY}, ${targetX} ${y}, ${targetX} ${targetY}`
      })
      setPaths(previous => previous.join('|') === next.join('|') ? previous : next)
    }
    const schedule = () => { cancelAnimationFrame(frame); frame = requestAnimationFrame(measure) }
    const observer = new ResizeObserver(schedule)
    observer.observe(node)
    observer.observe(origin)
    schedule()
    return () => { cancelAnimationFrame(frame); observer.disconnect() }
  }, [logos, columns])

  useGSAP(() => {
    if (!animated || !paths.length) return
    const media = gsap.matchMedia()
    media.add('(prefers-reduced-motion: no-preference)', () => {
      const timeline = gsap.timeline({ defaults: { ease: 'power3.out' }, scrollTrigger: { trigger: network.current, start: 'top 82%', once: true } })
      timeline.from('.trust-hub-content', { scale: .8, opacity: 0, duration: .6, transformOrigin: 'center' }, 0)
        .from('.trust-wire', { strokeDashoffset: 1, duration: 1.2, stagger: .08, ease: 'power1.inOut' }, .15)
        .from('.trust-node', { y: 24, opacity: 0, duration: .7, stagger: .09 }, .35)
        .fromTo('.trust-packet', { strokeDashoffset: .12, opacity: 0 }, { strokeDashoffset: -1, opacity: .8, duration: 1.2, stagger: .08, ease: 'power1.inOut' }, .5)
        .to('.trust-packet', { opacity: 0, duration: .3 }, 2.3)
    })
    return () => media.revert()
  }, { scope: root, dependencies: [paths.length, animated], revertOnUpdate: true })

  if (!logos.length) return null
  return <section ref={root} className="trust-section" aria-label={subtitle || 'Our clients'} data-animated={animated}>
    <div className="trust-shell">
      <div className="trust-composition">
        <div className="trust-copy">
          {title && <p className="trust-eyebrow">{title}</p>}
          {subtitle && <h2>{heading.length === 3 ? <>{heading[0]}<span className="trust-number-line"><strong>{heading[1]}</strong>{heading[2]}</span></> : subtitle}</h2>}
          {description && <p className="trust-description">{description}</p>}
          <Link href="/portfolio" className="trust-work-link">Explore our work<ArrowUpRight size={18}/></Link>
        </div>
        <div ref={network} className="trust-network" data-hub-top={Math.ceil(logos.length / columns) !== 2} style={{ '--trust-columns': columns } as CSSProperties}>
          <svg className="trust-wires" aria-hidden="true">{paths.map((path, index)=><g key={index}><path d={path} pathLength="1" strokeDasharray="1" className={`trust-wire${active === index ? ' is-active' : ''}`}/><path d={path} pathLength="1" strokeDasharray=".08 .92" className="trust-packet" opacity="0"/></g>)}</svg>
          <div ref={hub} className="trust-hub" aria-hidden="true"><div className="trust-hub-content flex items-center gap-2"><Sparkles/><span>BUILT TOGETHER</span></div></div>
          <ul className="trust-nodes" aria-label="Selected clients">
            {logos.map((client, index) => {
              const content = <><div className="trust-logo-surface"><Image src={getCdnUrl(client.logo)} alt={`${client.name} logo`} width={160} height={80} unoptimized/></div><span className="trust-node-caption"><span>{client.name}</span>{client.website && <ArrowUpRight size={12} aria-hidden="true"/>}</span></>
              return <li key={`${client.name}-${client.logo}`} className="trust-node" data-grayscale={grayscale} onPointerEnter={() => setActive(index)} onPointerLeave={() => setActive(null)} onFocus={() => setActive(index)} onBlur={() => setActive(null)}>{client.website ? <a href={client.website} target="_blank" rel="noopener noreferrer" aria-label={`${client.name} website (opens in a new tab)`}>{content}</a> : content}</li>
            })}
          </ul>
        </div>
      </div>
      <div className="trust-bottom"><p><span aria-hidden="true">✳</span>A selection of the clients we build for.</p></div>
    </div>
  </section>
}
