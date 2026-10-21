'use client'

import { useEffect, useId, useRef, useState, type KeyboardEvent } from 'react'
import { useGSAP } from '@gsap/react'
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import type { Portfolio, Technology } from '@/lib/content'
import { getCdnUrl } from '@/lib/utils'
import { gsap } from '@/lib/animations/gsap-setup'
import './portfolio-showcase.css'

interface PortfolioShowcaseProps {
  projects: Portfolio[]
  technologies: Technology[]
  title: string
  description: string
}

export function PortfolioShowcase({ projects, technologies, title, description }: PortfolioShowcaseProps) {
  const root = useRef<HTMLElement>(null)
  const rail = useRef<HTMLUListElement>(null)
  const travel = useRef<gsap.core.Tween | null>(null)
  const destination = useRef<number | null>(null)
  const wheelTarget = useRef<number | null>(null)
  const wheelDirection = useRef(0)
  const [ready, setReady] = useState(false)
  const [position, setPosition] = useState({ first: 0, last: 0, atStart: true, atEnd: false })
  const id = useId()
  const technologyMap = new Map(technologies.map(technology => [technology.title, technology]))
  const heading = title.split(' as Well as ')

  useEffect(() => {
    const node = rail.current
    if (!node) return
    setReady(true)
    let frame = 0
    function measure() {
      if (!node) return
      const bounds = node.getBoundingClientRect()
      const cards = Array.from(node.children) as HTMLElement[]
      // Count cards that are substantially visible; a sliver of the next image is a browsing cue.
      const visible = cards.flatMap((card, index) => {
        const rect = card.getBoundingClientRect()
        const overlap = Math.min(rect.right, bounds.right) - Math.max(rect.left, bounds.left)
        return overlap > Math.min(rect.width * .5, bounds.width * .5) + 2 ? [index] : []
      })
      const next = { first: visible[0] ?? 0, last: visible.at(-1) ?? 0, atStart: node.scrollLeft < 2, atEnd: node.scrollLeft >= node.scrollWidth - node.clientWidth - 2 }
      setPosition(previous => Object.keys(next).every(key => previous[key as keyof typeof next] === next[key as keyof typeof next]) ? previous : next)
    }
    const schedule = () => { cancelAnimationFrame(frame); frame = requestAnimationFrame(measure) }
    const stop = () => {
      travel.current?.kill()
      travel.current = null
      destination.current = null
      wheelTarget.current = null
      wheelDirection.current = 0
      node.style.removeProperty('scroll-snap-type')
    }
    const wheel = (event: WheelEvent) => {
      // Leave zoom gestures and horizontal trackpad scrolling to the browser.
      if (event.ctrlKey || event.metaKey || Math.abs(event.deltaX) >= Math.abs(event.deltaY)) {
        if (Math.abs(event.deltaX) > 0) stop()
        return
      }
      const max = node.scrollWidth - node.clientWidth
      const direction = Math.sign(event.deltaY)
      if (!direction || max < 2) return
      // Release vertical page scrolling at either end; the document scrollbar is never intercepted.
      if ((direction < 0 && node.scrollLeft < 2) || (direction > 0 && node.scrollLeft >= max - 2)) return
      if (!event.cancelable) return
      event.preventDefault()
      const distance = event.deltaY * (event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? node.clientWidth : 1)
      const origin = wheelDirection.current === direction ? (wheelTarget.current ?? node.scrollLeft) : node.scrollLeft
      const target = Math.max(0, Math.min(max, origin + distance))
      if (target === wheelTarget.current && travel.current?.isActive()) return
      travel.current?.kill()
      destination.current = null
      wheelTarget.current = target
      wheelDirection.current = direction
      node.style.scrollSnapType = 'none'
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        node.scrollLeft = target
        wheelTarget.current = null
        return
      }
      travel.current = gsap.to(node, { scrollLeft: target, duration: .38, ease: 'power2.out', onComplete: () => {
        travel.current = null
        wheelTarget.current = null
        // Keep the chosen wheel position. Touch, keyboard focus, or arrow navigation restores snapping.
      } })
    }
    const observer = new ResizeObserver(() => { stop(); schedule() })
    observer.observe(node)
    node.addEventListener('scroll', schedule, { passive: true })
    node.addEventListener('pointerdown', stop, { passive: true })
    node.addEventListener('wheel', wheel, { passive: false })
    node.addEventListener('focusin', stop)
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)')
    preference.addEventListener('change', stop)
    schedule()
    return () => {
      stop(); observer.disconnect(); cancelAnimationFrame(frame)
      node.removeEventListener('scroll', schedule)
      node.removeEventListener('pointerdown', stop)
      node.removeEventListener('wheel', wheel)
      node.removeEventListener('focusin', stop)
      preference.removeEventListener('change', stop)
    }
  }, [projects.length])

  useGSAP(() => {
    const media = gsap.matchMedia()
    media.add('(prefers-reduced-motion: no-preference)', () => {
      const node = rail.current
      if (!node) return
      // Each frame is revealed once, including projects reached by horizontal scrolling.
      const seen = new WeakSet<Element>()
      const reveal = (card: Element) => {
        gsap.fromTo(card.querySelector('.work-frame'), { clipPath: 'inset(8% 0 18% 0 round 10px)', y: 24 }, { clipPath: 'inset(0% 0 0% 0 round 10px)', y: 0, duration: 1, ease: 'power3.out' })
        gsap.fromTo(card.querySelector('.work-photo'), { scale: 1.06 }, { scale: 1, duration: 1.3, ease: 'power3.out' })
        gsap.from(card.querySelectorAll('.work-caption > *'), { y: 16, duration: .75, stagger: .06, ease: 'power3.out' })
      }
      const safeReveal = gsap.context(() => {}, root)
      safeReveal.add('reveal', reveal)
      // IntersectionObserver accounts for both the viewport and the native scroll container.
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting || seen.has(entry.target)) return
          seen.add(entry.target)
          safeReveal.reveal(entry.target)
          observer.unobserve(entry.target)
        })
      }, { threshold: .28 })
      node.querySelectorAll('.work-project').forEach(card => observer.observe(card))
      return () => { observer.disconnect(); safeReveal.revert() }
    })
    return () => media.revert()
  }, { scope: root, dependencies: [projects], revertOnUpdate: true })

  function move(direction: number) {
    const node = rail.current
    if (!node) return
    const cards = Array.from(node.children) as HTMLElement[]
    const closest = cards.reduce((nearest, card, index) => Math.abs(card.offsetLeft - node.scrollLeft) < Math.abs(cards[nearest].offsetLeft - node.scrollLeft) ? index : nearest, 0)
    const next = Math.max(0, Math.min(projects.length - 1, (destination.current ?? closest) + direction))
    const target = Math.min(cards[next].offsetLeft, node.scrollWidth - node.clientWidth)
    travel.current?.kill()
    destination.current = next
    wheelTarget.current = null
    wheelDirection.current = 0
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      node.scrollLeft = target
      destination.current = null
      return
    }
    // Use GSAP for deliberate navigation, retaining native touch/trackpad scrolling.
    node.style.scrollSnapType = 'none'
    travel.current = gsap.to(node, { scrollLeft: target, duration: .7, ease: 'power3.inOut', onComplete: () => {
      node.style.removeProperty('scroll-snap-type')
      destination.current = null
      travel.current = null
    } })
  }

  function navigate(event: KeyboardEvent<HTMLUListElement>) {
    if (event.altKey || event.ctrlKey || event.metaKey) return
    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return
    // Preserve link focus and native browser scrolling when a project link is focused.
    if (event.target !== event.currentTarget) return
    event.preventDefault()
    move(event.key === 'ArrowRight' ? 1 : -1)
  }

  if (!projects.length) return null
  return <section ref={root} id="selected-projects" className="work-gallery" aria-labelledby={`${id}-heading`} data-enhanced={ready}>
    <div className="work-shell">
      <header className="work-heading">
        <div><p className="work-eyebrow"><span aria-hidden="true">↳</span> FROM THE PORTFOLIO</p><h2 id={`${id}-heading`}>{heading.length === 2 ? <>{heading[0]}<span> as Well as {heading[1]}</span></> : title}</h2></div>
        <div className="work-introduction"><p>{description}</p><Link href="/portfolio">View All Portfolio<ArrowUpRight size={18}/></Link></div>
      </header>
      <div className="work-gallery-bar"><p><span className="work-live-dot"/>PROJECT GALLERY <span className="work-total">/ {String(projects.length).padStart(2, '0')} PROJECTS</span></p><span className="work-browse-hint">Scroll to explore<ArrowRight size={15}/></span><div className="work-controls"><span className="work-wheel-hint">Scroll to explore</span><button type="button" aria-label="Previous projects" aria-controls={`${id}-rail`} aria-disabled={position.atStart} onClick={() => !position.atStart && move(-1)}><ArrowLeft size={20}/></button><button type="button" aria-label="Next projects" aria-controls={`${id}-rail`} aria-disabled={position.atEnd} onClick={() => !position.atEnd && move(1)}><ArrowRight size={20}/></button></div></div>
      <ul ref={rail} id={`${id}-rail`} className="work-reel" aria-label="Portfolio projects" tabIndex={0} onKeyDown={navigate}>
        {projects.map((project, index) => <li key={project.slug} className="work-project" data-project={project.slug}>
          <Link href={`/portfolio/${project.slug}`} className="work-project-link" aria-labelledby={`${id}-project-${index}`}>
            <div className="work-frame">
              <div className="work-frame-bar"><span className="work-window-dots" aria-hidden="true"><i/><i/><i/></span><span>PROJECT / {String(index + 1).padStart(2, '0')}</span>{project.status && <span className="work-status">{project.status}</span>}</div>
              <div className="work-image-window">{project.image && <Image className="work-photo" src={getCdnUrl(project.image)} alt={project.image_alt || project.title} width={1280} height={800} sizes="(max-width: 759px) 90vw, (max-width: 1099px) 44vw, 28vw" unoptimized/>}<span className="work-image-action" aria-hidden="true"><ArrowUpRight size={22}/></span></div>
            </div>
            <div className="work-caption">
              {project.categories?.length ? <p className="work-categories">{project.categories.map((category, categoryIndex) => <span key={`${category}-${categoryIndex}`}>{category}</span>)}</p> : null}
              <div className="work-project-heading"><h3 id={`${id}-project-${index}`}>{project.title}</h3><ArrowUpRight size={23} aria-hidden="true"/></div>
              <p className="work-description">{project.description}</p>
              {project.technologies?.length ? <div className="work-stack"><span className="work-stack-label">BUILT WITH</span><ul aria-label={`${project.title} technologies`}>{project.technologies.map((name, techIndex) => {
                const technology = technologyMap.get(name)
                return <li key={`${name}-${techIndex}`} className="work-technology" title={name}>{technology?.logo ? <Image src={getCdnUrl(technology.logo)} alt={name} width={20} height={20} unoptimized/> : <span>{name}</span>}</li>
              })}</ul></div> : null}
              <span className="work-project-cta">Explore project<ArrowRight size={15} aria-hidden="true"/></span>
            </div>
          </Link>
        </li>)}
      </ul>
      <div className="work-gallery-footer">
        <p className="work-position" aria-live="polite" aria-atomic="true">{ready ? <><strong>{String(position.first + 1).padStart(2, '0')}{position.last > position.first && `–${String(position.last + 1).padStart(2, '0')}`}</strong><span> / {String(projects.length).padStart(2, '0')}</span></> : `${projects.length} projects`}</p>
        <div className="work-progress" aria-hidden="true"><span style={{ width: `${(position.last + 1) / projects.length * 100}%` }}/></div>
      </div>
    </div>
  </section>
}
