'use client'

import { useRef, type ReactNode } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/lib/animations/gsap-setup'

export function FooterMotion({ children }: { children: ReactNode }) {
  const root = useRef<HTMLElement>(null)

  useGSAP(() => {
    const media = gsap.matchMedia()
    media.add('(prefers-reduced-motion: no-preference)', () => {
      const beat = gsap.timeline({ repeat: 1, repeatDelay: .8, paused: true })
        .to('.brand-heart', { scale: 1.16, duration: .16, transformOrigin: 'center', ease: 'power2.out' }, 0)
        .to('.brand-heart', { scale: 1, duration: .18 }, .16)
        .to('.brand-heart', { scale: 1.1, duration: .13 }, .34)
        .to('.brand-heart', { scale: 1, duration: .23 }, .47)
        .fromTo('.brand-ecg-signal', { strokeDashoffset: 1 }, { strokeDashoffset: -1, duration: 1.1, ease: 'none' }, 0)
        .to('.brand-ecg-signal', { opacity: 0, duration: .2 }, 1.1)
      let visible = false
      const sync = () => { if (visible && !document.hidden) beat.play(); else beat.pause() }
      const observer = new IntersectionObserver(entries => { visible = entries[0].isIntersecting; sync() })
      const signature = root.current?.querySelector('.brand-signature')
      if (signature) observer.observe(signature)
      document.addEventListener('visibilitychange', sync)
      const reveal = gsap.timeline({ scrollTrigger: { trigger: '.footer-finale', start: 'top 90%', once: true } })
      reveal.from('.footer-big-logo', { clipPath: 'inset(0 100% 0 0)', duration: 1.7, ease: 'power2.inOut' }, 0)
        .from('.footer-code-fragment', { opacity: 0, y: 12, duration: .8, stagger: .12 }, .2)
        .fromTo('.footer-build-line', { scaleX: 0 }, { scaleX: 1, duration: 1.8, transformOrigin: 'left' }, 0)
      return () => { observer.disconnect(); document.removeEventListener('visibilitychange', sync) }
    })
    return () => media.revert()
  }, { scope: root })

  return <footer ref={root} className="studio-footer" aria-label="Srapsware footer">
    <div className="footer-ambient" aria-hidden="true"/>
    {children}
    <div className="footer-finale">
      <div className="footer-code-field" aria-hidden="true"><span className="footer-code-fragment">{'const craft = (idea) => build(idea, { heart: true });'}</span><span className="footer-code-fragment">{'<Possibility />'}</span><span className="footer-code-fragment">{'// made in India. built for everywhere.'}</span></div>
      <div className="footer-finale-top"><p>CRAFTED IN CODE. SIGNED WITH HEART.</p></div>
      <div className="footer-build-line" aria-hidden="true"/>
      <img className="footer-big-logo" src="/assets/brand/srapsware-wordmark.svg" width="520" height="54" alt="Srapsware" loading="lazy"/>
      <div className="footer-finale-bottom"><span>IDEA → CODE → SOMETHING THAT MATTERS</span><span>WITH YOU, FROM THE FIRST LINE.</span></div>
    </div>
  </footer>
}
