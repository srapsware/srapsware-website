'use client'

import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'

interface FireworkParticlesProps {
  centerX: number
  centerY: number
  colors: string[]
  particleCount?: number
  onComplete?: () => void
}

// Detect if mobile/tablet for performance optimization
const isMobile = typeof window !== 'undefined' && window.innerWidth < 768

export default function FireworkParticles({ 
  centerX, 
  centerY, 
  colors, 
  particleCount = isMobile ? 15 : 25,
  onComplete 
}: FireworkParticlesProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const particles: HTMLDivElement[] = []
    
    // Create particles
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div')
      particle.className = 'firework-particle'
      
      // Random size between 4-8px
      const size = Math.random() * 4 + 4
      
      particle.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background: ${colors[Math.floor(Math.random() * colors.length)]};
        border-radius: 50%;
        left: ${centerX}px;
        top: ${centerY}px;
        box-shadow: 0 0 ${size * 2}px currentColor;
        pointer-events: none;
      `
      
      containerRef.current.appendChild(particle)
      particles.push(particle)
    }

    // Animate particles
    particles.forEach((particle, i) => {
      const angle = (Math.PI * 2 * i) / particleCount
      const velocity = Math.random() * 100 + 80 // Random distance 80-180px
      const x = Math.cos(angle) * velocity
      const y = Math.sin(angle) * velocity

      gsap.timeline()
        .to(particle, {
          x,
          y,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: 'power2.out'
        })
        .to(particle, {
          opacity: 0,
          scale: 0.3,
          duration: 0.4,
          ease: 'power2.in',
          onComplete: () => {
            particle.remove()
            if (i === particles.length - 1 && onComplete) {
              onComplete()
            }
          }
        })
    })

    return () => {
      particles.forEach(p => p.remove())
    }
  }, [centerX, centerY, colors, particleCount, onComplete])

  return <div ref={containerRef} className="absolute inset-0 pointer-events-none" style={{ zIndex: 50 }} />
}
