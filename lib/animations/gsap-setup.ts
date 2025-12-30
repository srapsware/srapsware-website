import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

// GSAP defaults and easing curves
if (typeof window !== 'undefined') {
  gsap.set('html', {
    '--ease-out': 'cubic-bezier(0.16, 1, 0.3, 1)',
    '--ease-in': 'cubic-bezier(0.12, 0, 0.39, 0)',
    '--ease-in-out': 'cubic-bezier(0.16, 1, 0.3, 1)',
    '--ease-bounce': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  })
}

// Default animation settings
gsap.defaults({
  ease: 'power2.out',
  duration: 0.8,
})

// Custom easing functions
export const easings = {
  bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  smooth: 'cubic-bezier(0.16, 1, 0.3, 1)',
  sharp: 'cubic-bezier(0.4, 0, 0.2, 1)',
}

// Animation presets
export const animations = {
  fadeIn: {
    opacity: 0,
    y: 30,
    duration: 0.8,
    ease: 'power2.out',
  },
  fadeInUp: {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: 'power3.out',
  },
  fadeInDown: {
    opacity: 0,
    y: -50,
    duration: 1,
    ease: 'power3.out',
  },
  slideInLeft: {
    opacity: 0,
    x: -100,
    duration: 0.8,
    ease: 'power2.out',
  },
  slideInRight: {
    opacity: 0,
    x: 100,
    duration: 0.8,
    ease: 'power2.out',
  },
  scaleIn: {
    opacity: 0,
    scale: 0.8,
    duration: 0.6,
    ease: 'back.out(1.7)',
  },
  stagger: {
    stagger: 0.1,
    ease: 'power2.out',
  },
}

// Export GSAP and plugins
export { gsap, ScrollTrigger, useGSAP }