'use client'

import { gsap } from '@/lib/animations/gsap-setup'
import { useGSAP } from '@gsap/react'
import { useRef, type ReactNode } from 'react'

/** Keep the process readable before hydration and scope motion to this instance. */
export function DeliveryReveal({ children }: { children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null)
  useGSAP(() => {
    const media = gsap.matchMedia()
    media.add('(prefers-reduced-motion: no-preference)', () => {
      gsap.from('.delivery-grid > li', {
        y: 22, opacity: 0, duration: .65, stagger: .12, ease: 'power2.out',
        scrollTrigger: { trigger: root.current, start: 'top 85%', once: true },
      })
      gsap.from('.delivery-number', {
        scale: .8, duration: .7, stagger: .12, ease: 'back.out(1.4)',
        scrollTrigger: { trigger: root.current, start: 'top 85%', once: true },
      })
    })
    return () => media.revert()
  }, { scope: root })
  return <div ref={root}>{children}</div>
}
