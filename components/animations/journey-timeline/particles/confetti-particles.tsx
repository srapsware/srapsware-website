'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

interface ConfettiParticlesProps {
  centerX: number
  centerY: number
  particleCount?: number
  onComplete?: () => void
}

// Detect if mobile/tablet for performance optimization
const isMobile = typeof window !== 'undefined' && window.innerWidth < 768

export default function ConfettiParticles({ 
  centerX, 
  centerY, 
  particleCount = isMobile ? 20 : 40,
  onComplete 
}: ConfettiParticlesProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    const particles: HTMLDivElement[] = []

    // Define confetti shapes and colors
    const shapes = ['rectangle', 'circle', 'star']
    const colors = ['#F59E0B', '#9333EA', '#06B6D4', '#4780C7', '#EF4444', '#10B981']

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div')
      const shape = shapes[Math.floor(Math.random() * shapes.length)]
      const color = colors[Math.floor(Math.random() * colors.length)]
      const size = Math.random() * 8 + 6 // 6-14px
      
      particle.className = `confetti-particle confetti-${shape}`
      particle.style.cssText = `
        position: absolute;
        left: 0;
        top: 0;
        width: ${size}px;
        height: ${size}px;
        background-color: ${color};
        pointer-events: none;
        z-index: 1000;
      `

      // Shape-specific styling
      if (shape === 'circle') {
        particle.style.borderRadius = '50%'
      } else if (shape === 'star') {
        particle.style.clipPath = 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'
        particle.style.backgroundColor = '#F59E0B' // Gold stars
      }

      container.appendChild(particle)
      particles.push(particle)
    }

    // Animate particles with physics
    particles.forEach((particle, i) => {
      // Random initial velocity (shoot upward and outward)
      const angle = (Math.random() * Math.PI) - Math.PI / 2 // -90 to 0 degrees (upward)
      const velocity = Math.random() * 300 + 200 // 200-500px
      const vx = Math.cos(angle) * velocity
      const vy = Math.sin(angle) * velocity
      
      // Random rotation
      const rotationSpeed = Math.random() * 720 - 360 // -360 to 360 degrees
      const rotationDirection = Math.random() > 0.5 ? 1 : -1

      // Gravity and physics simulation
      const gravity = 800 // pixels per second squared
      const duration = 3

      gsap.set(particle, {
        x: centerX,
        y: centerY,
        rotation: Math.random() * 360,
        opacity: 1
      })

      const tl = gsap.timeline({
        onComplete: () => {
          particle.remove()
          if (i === particles.length - 1) {
            onComplete?.()
          }
        }
      })

      // Confetti physics animation
      tl.to(particle, {
        x: centerX + vx / 60, // Slow down horizontal
        y: centerY + (vy / 60) + (0.5 * gravity * duration * duration / 60),
        rotation: rotationSpeed * rotationDirection,
        opacity: 0,
        duration: duration,
        ease: 'none',
        delay: i * 0.02
      })

      // Add some wind/drift
      tl.to(particle, {
        x: `+=${(Math.random() - 0.5) * 100}`,
        duration: duration,
        ease: 'sine.inOut'
      }, 0)
    })

    return () => {
      particles.forEach(p => p.remove())
    }
  }, [centerX, centerY, particleCount, onComplete])

  return (
    <div 
      ref={containerRef}
      className="confetti-container"
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 1000
      }}
    />
  )
}
