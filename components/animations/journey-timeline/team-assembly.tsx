'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

interface TeamAssemblyProps {
  trigger: boolean
  onComplete?: () => void
}

export default function TeamAssembly({ trigger, onComplete }: TeamAssemblyProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (!trigger || hasAnimated.current || !containerRef.current) return

    hasAnimated.current = true
    const container = containerRef.current

    // Create 5 small person figures that will gather
    const figures: HTMLDivElement[] = []
    const figureCount = 5
    const startPositions = [
      { x: -120, y: -80 },   // Top-left
      { x: 120, y: -80 },    // Top-right
      { x: -140, y: 40 },    // Bottom-left
      { x: 140, y: 40 },     // Bottom-right
      { x: 0, y: -120 }      // Top-center
    ]

    // Create figure elements
    for (let i = 0; i < figureCount; i++) {
      const figure = document.createElement('div')
      figure.className = 'team-figure'
      figure.style.cssText = `
        position: absolute;
        left: 50%;
        top: 50%;
        width: 24px;
        height: 24px;
        background: linear-gradient(135deg, #06B6D4, #4780C7);
        border-radius: 50%;
        box-shadow: 0 0 10px rgba(6, 182, 212, 0.6);
        transform: translate(-50%, -50%);
        z-index: 10;
      `
      
      // Add person icon using SVG
      figure.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">
          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
      `
      
      container.appendChild(figure)
      figures.push(figure)
    }

    // Create connection lines container
    const linesContainer = document.createElement('div')
    linesContainer.className = 'connection-lines'
    linesContainer.style.cssText = `
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      z-index: 5;
    `
    container.appendChild(linesContainer)

    // Animation timeline
    const tl = gsap.timeline({
      onComplete: () => {
        // Cleanup
        setTimeout(() => {
          figures.forEach(fig => fig.remove())
          linesContainer.remove()
        }, 500)
        onComplete?.()
      }
    })

    // Step 1: Figures appear at starting positions
    figures.forEach((figure, i) => {
      gsap.set(figure, {
        x: startPositions[i].x,
        y: startPositions[i].y,
        scale: 0,
        opacity: 0
      })
    })

    tl.to(figures, {
      scale: 1,
      opacity: 1,
      duration: 0.4,
      stagger: 0.1,
      ease: 'back.out(2)'
    })

    // Step 2: Draw connection lines between figures
    .add(() => {
      // Create SVG for lines
      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
      svg.style.cssText = `
        position: absolute;
        left: 50%;
        top: 50%;
        width: 300px;
        height: 300px;
        transform: translate(-50%, -50%);
        overflow: visible;
      `

      // Draw lines connecting figures to center
      figures.forEach((figure, i) => {
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line')
        const pos = startPositions[i]
        
        line.setAttribute('x1', '150') // Center
        line.setAttribute('y1', '150')
        line.setAttribute('x2', String(150 + pos.x))
        line.setAttribute('y2', String(150 + pos.y))
        line.setAttribute('stroke', '#06B6D4')
        line.setAttribute('stroke-width', '2')
        line.setAttribute('opacity', '0.6')
        line.style.filter = 'drop-shadow(0 0 4px rgba(6, 182, 212, 0.4))'
        
        svg.appendChild(line)

        // Animate line drawing
        const length = Math.sqrt(pos.x * pos.x + pos.y * pos.y)
        line.style.strokeDasharray = String(length)
        line.style.strokeDashoffset = String(length)

        gsap.to(line.style, {
          strokeDashoffset: 0,
          duration: 0.6,
          delay: i * 0.1,
          ease: 'power2.out'
        })
      })

      linesContainer.appendChild(svg)
    }, '+=0.2')

    // Step 3: Figures move toward center
    .to(figures, {
      x: 0,
      y: 0,
      duration: 1,
      stagger: 0.08,
      ease: 'power2.inOut'
    }, '+=0.3')

    // Step 4: Merge effect - scale down and fade
    .to(figures, {
      scale: 0.3,
      opacity: 0,
      duration: 0.5,
      stagger: 0.05,
      ease: 'power2.in'
    }, '-=0.3')

    // Step 5: Create ripple effect
    .add(() => {
      const rippleCount = 3
      for (let i = 0; i < rippleCount; i++) {
        const ripple = document.createElement('div')
        ripple.style.cssText = `
          position: absolute;
          left: 50%;
          top: 50%;
          width: 30px;
          height: 30px;
          border: 2px solid #06B6D4;
          border-radius: 50%;
          transform: translate(-50%, -50%);
          pointer-events: none;
        `
        container.appendChild(ripple)

        gsap.fromTo(ripple, 
          {
            scale: 0.5,
            opacity: 0.8
          },
          {
            scale: 4,
            opacity: 0,
            duration: 1.5,
            delay: i * 0.2,
            ease: 'power2.out',
            onComplete: () => ripple.remove()
          }
        )
      }
    }, '-=0.2')

    // Step 6: Fade out connection lines
    .to(linesContainer, {
      opacity: 0,
      duration: 0.5
    }, '-=0.8')

    return () => {
      tl.kill()
      figures.forEach(fig => fig.remove())
      linesContainer.remove()
    }
  }, [trigger, onComplete])

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 20 }}
    />
  )
}
