'use client'

import { useEffect } from 'react'
import { gsap } from '@/lib/animations/gsap-setup'
import ScrollTrigger from 'gsap/ScrollTrigger'

/**
 * Parallax Depth Layers
 * Creates depth by moving elements at different speeds during scroll
 * Inspired by Apple's parallax effects - subtle and sophisticated
 */
export default function ParallaxLayers() {
  useEffect(() => {
    // Wait for DOM to be ready
    const timer = setTimeout(() => {
      // Background elements scroll slower (0.5x speed)
      const backgroundElements = document.querySelectorAll('.parallax-background')
      backgroundElements.forEach((element) => {
        gsap.to(element, {
          y: '20%',
          ease: 'none',
          scrollTrigger: {
            trigger: element,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1, // Smooth scrubbing
            invalidateOnRefresh: true
          }
        })
      })

      // Mid-ground elements at normal speed (default)
      // No animation needed - these scroll naturally

      // Foreground elements scroll slightly faster (1.2x speed)
      const foregroundElements = document.querySelectorAll('.parallax-foreground')
      foregroundElements.forEach((element) => {
        gsap.to(element, {
          y: '-10%',
          ease: 'none',
          scrollTrigger: {
            trigger: element,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
            invalidateOnRefresh: true
          }
        })
      })

      // Special: Stats cards with subtle parallax
      const statsCards = document.querySelectorAll('.stats-card')
      statsCards.forEach((card, index) => {
        gsap.to(card, {
          y: `-${5 + index * 2}%`, // Staggered parallax effect
          ease: 'none',
          scrollTrigger: {
            trigger: card.closest('section'),
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.5,
            invalidateOnRefresh: true
          }
        })
      })
    }, 100)

    return () => {
      clearTimeout(timer)
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return null // This component only sets up animations
}
