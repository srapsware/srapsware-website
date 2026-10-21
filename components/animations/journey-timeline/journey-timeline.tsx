'use client'

import { journey } from '@/config/site'
import { gsap } from '@/lib/animations/gsap-setup'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import { MilestoneIllustration } from '../milestone-illustration'

export default function JourneyTimeline() {
  const root = useRef<HTMLElement>(null)
  useGSAP(() => {
    const mm = gsap.matchMedia()
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const chapters = gsap.utils.toArray<HTMLElement>('.journey-chapter', root.current)
      gsap.fromTo('.journey-progress', { scaleY: 0 }, {
        scaleY: 1, ease: 'none', transformOrigin: 'top',
        scrollTrigger: {
          trigger: '.journey-route', start: 'top 65%', end: 'bottom 65%', scrub: .35,
          onUpdate: self => chapters.forEach((chapter, index) => chapter.classList.toggle('is-reached', self.progress >= index / (chapters.length - 1))),
        },
      })
      chapters.forEach(chapter => {
        gsap.from(chapter.querySelector('.journey-content'), {
          opacity: 0, y: 18, duration: .6, ease: 'power3.out',
          scrollTrigger: { trigger: chapter, start: 'top 85%', once: true },
        })
        gsap.from(chapter.querySelectorAll('.illustration-part'), {
          opacity: 0, y: 6, duration: .55, stagger: .08,
          scrollTrigger: { trigger: chapter, start: 'top 70%', once: true },
        })
      })
      return () => chapters.forEach(chapter => chapter.classList.remove('is-reached'))
    })
    return () => mm.revert()
  }, { scope: root })
  return <section ref={root} className="section-space journey-section" aria-labelledby="journey-heading">
    <div className="site-container">
      <div className="section-heading">
        <div><p className="eyebrow">THE STORY SO FAR</p><h2 id="journey-heading">Built over time.<br /><span className="text-muted-foreground">Always moving forward.</span></h2></div>
        <p>Ideas become experience. Experience becomes better software. A few chapters from our journey.</p>
      </div>
      <div className="journey-route">
        <div className="journey-track" aria-hidden="true"><span className="journey-progress" /></div>
        <ol className="journey-list">
          {journey.map((milestone, index) => <li key={milestone.year} className="journey-chapter">
            <span className="journey-node" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
            <div className="journey-content">
              <div className="journey-copy">
                <p className="journey-year"><time>{milestone.year}</time></p>
                <h3>{milestone.title}</h3><p className="text-muted-foreground">{milestone.description}</p>
              </div>
              <div className="journey-visual"><MilestoneIllustration kind={milestone.illustration} /><span className="eyebrow">CHAPTER {String(index + 1).padStart(2, '0')}</span></div>
            </div>
          </li>)}
        </ol>
      </div>
      <p className="mt-8 text-xs text-muted-foreground">Selected milestones. Illustrations represent our capabilities, not measured growth.</p>
    </div>
  </section>
}
