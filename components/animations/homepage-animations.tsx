'use client'

import { useGSAP } from '@gsap/react'
import { gsap } from '@/lib/animations/gsap-setup'

export function HomepageAnimations() {
  useGSAP(() => {
    const root = document.getElementById('brand-home')
    if (!root) return
    const media = gsap.matchMedia()
    media.add('(prefers-reduced-motion: no-preference)', () => {
      const context = gsap.context(() => {
        gsap.utils.toArray<HTMLElement>('.blog-card', root).forEach(card => {
          gsap.from(card, { opacity: 0, y: 24, duration: .65, scrollTrigger: { trigger: card, start: 'top 92%', once: true } })
        })
      }, root)
      return () => context.revert()
    })
    return () => media.revert()
  })
  return null
}
