'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

interface StarSparklesProps {
  centerX: number
  centerY: number
  starCount?: number
  radius?: number
  duration?: number
}

// Detect if mobile/tablet for performance optimization
const isMobile = typeof window !== 'undefined' && window.innerWidth < 768

export default function StarSparkles({ 
  centerX, 
  centerY, 
  starCount = isMobile ? 8 : 12,
  radius = 60,
  duration = 2
}: StarSparklesProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    const stars: HTMLDivElement[] = []

    // Create star elements in circular pattern
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div')
      const angle = (Math.PI * 2 * i) / starCount
      const x = centerX + Math.cos(angle) * radius
      const y = centerY + Math.sin(angle) * radius
      const size = Math.random() * 8 + 6 // 6-14px
      
      star.innerHTML = '★'
      star.style.cssText = `
        position: absolute;
        left: ${x}px;
        top: ${y}px;
        font-size: ${size}px;
        color: #F59E0B;
        transform: translate(-50%, -50%);
        pointer-events: none;
        z-index: 1000;
        text-shadow: 0 0 10px rgba(245, 158, 11, 0.8);
      `

      container.appendChild(star)
      stars.push(star)

      // Individual star animation (twinkle)
      const tl = gsap.timeline({ repeat: -1 })
      
      tl.fromTo(star, 
        {
          scale: 0,
          opacity: 0,
          rotation: 0
        },
        {
          scale: 1,
          opacity: 1,
          rotation: 180,
          duration: duration / 2,
          ease: 'back.out(2)',
          delay: i * 0.1
        }
      )
      .to(star, {
        scale: 0,
        opacity: 0,
        rotation: 360,
        duration: duration / 2,
        ease: 'back.in(2)'
      })
    }

    return () => {
      gsap.killTweensOf(stars)
      stars.forEach(s => s.remove())
    }
  }, [centerX, centerY, starCount, radius, duration])

  return (
    <div 
      ref={containerRef}
      className="star-sparkles-container"
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 1000
      }}
    />
  )
}
