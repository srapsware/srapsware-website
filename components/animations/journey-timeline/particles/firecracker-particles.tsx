'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

interface FirecrackerParticlesProps {
  centerX: number
  centerY: number
  onComplete?: () => void
}

export default function FirecrackerParticles({ centerX, centerY, onComplete }: FirecrackerParticlesProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const colors = ['#9333EA', '#06B6D4', '#4780C7', '#A855F7', '#FFFFFF']
    
    // Create 3 bursts
    const createBurst = (delay: number, offsetX: number, offsetY: number, count: number) => {
      setTimeout(() => {
        for (let i = 0; i < count; i++) {
          const particle = document.createElement('div')
          const size = Math.random() * 5 + 3
          
          particle.style.cssText = `
            position: fixed;
            width: ${size}px;
            height: ${size}px;
            background: ${colors[Math.floor(Math.random() * colors.length)]};
            border-radius: 50%;
            left: ${centerX + offsetX}px;
            top: ${centerY + offsetY}px;
            box-shadow: 0 0 ${size * 3}px currentColor;
            pointer-events: none;
            z-index: 50;
          `
          
          containerRef.current?.appendChild(particle)

          const angle = (Math.PI * 2 * i) / count
          const distance = Math.random() * 60 + 40
          const x = Math.cos(angle) * distance
          const y = Math.sin(angle) * distance

          gsap.timeline()
            .to(particle, {
              x,
              y,
              scale: 1.5,
              opacity: 1,
              duration: 0.4,
              ease: 'power2.out'
            })
            .to(particle, {
              opacity: 0,
              scale: 0.3,
              duration: 0.3,
              ease: 'power2.in',
              onComplete: () => {
                particle.remove()
              }
            })
        }
      }, delay)
    }

    // Burst 1: Center
    createBurst(0, 0, 0, 10)
    
    // Burst 2: Top-right
    createBurst(200, 30, -30, 8)
    
    // Burst 3: Bottom-left
    createBurst(400, -30, 30, 8)

    // Call onComplete after all bursts
    setTimeout(() => {
      if (onComplete) onComplete()
    }, 1000)

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = ''
      }
    }
  }, [centerX, centerY, onComplete])

  return <div ref={containerRef} className="fixed inset-0 pointer-events-none" style={{ zIndex: 50 }} />
}
