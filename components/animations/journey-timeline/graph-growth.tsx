'use client'

import { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

interface GraphGrowthProps {
  triggerRef: React.RefObject<any>
  iconRef: React.RefObject<any>
}

export default function GraphGrowth({ triggerRef, iconRef }: GraphGrowthProps) {
  const graphContainerRef = useRef<HTMLDivElement>(null)
  const [hasAnimated, setHasAnimated] = useState(false)

  useGSAP(() => {
    if (!graphContainerRef.current || !triggerRef.current || !iconRef.current || hasAnimated) return

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerRef.current,
        start: 'top 70%',
        once: true,
        onEnter: () => setHasAnimated(true)
      }
    })

    // Pulsing glow on icon during animation
    tl.to(iconRef.current, {
      boxShadow: '0 0 40px rgba(147, 51, 234, 0.6)',
      scale: 1.1,
      duration: 0.3,
      yoyo: true,
      repeat: 5,
      ease: 'power2.inOut'
    })

    // Create success particles that fall
    tl.call(() => {
      createSuccessParticles()
    }, undefined, '+=0.2')

  }, { scope: graphContainerRef, dependencies: [hasAnimated] })

  const createSuccessParticles = () => {
    if (!iconRef.current) return

    const rect = iconRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    // Create 5-8 falling particles
    for (let i = 0; i < 7; i++) {
      setTimeout(() => {
        const particle = document.createElement('div')
        const size = Math.random() * 6 + 4
        const colors = ['#9333EA', '#06B6D4', '#4780C7', '#A855F7']
        
        particle.style.cssText = `
          position: fixed;
          left: ${centerX + (Math.random() - 0.5) * 100}px;
          top: ${centerY - 50}px;
          width: ${size}px;
          height: ${size}px;
          background: ${colors[Math.floor(Math.random() * colors.length)]};
          border-radius: 50%;
          pointer-events: none;
          z-index: 50;
          box-shadow: 0 0 ${size * 2}px currentColor;
        `
        
        document.body.appendChild(particle)

        gsap.to(particle, {
          y: window.innerHeight - centerY + 100,
          x: (Math.random() - 0.5) * 100,
          opacity: 0,
          rotation: Math.random() * 360,
          duration: 2 + Math.random(),
          ease: 'power2.in',
          onComplete: () => particle.remove()
        })
      }, i * 200)
    }
  }

  return <div ref={graphContainerRef} />
}
