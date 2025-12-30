'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

interface TimelineLineProps {
  containerRef: React.RefObject<HTMLElement>
}

export default function TimelineLine({ containerRef }: TimelineLineProps) {
  const lineRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!lineRef.current || !containerRef.current) return

    // Set initial state - line starts with no height
    gsap.set(lineRef.current, {
      scaleY: 0,
      transformOrigin: 'top center'
    })

    // Animate the line growing on scroll
    gsap.to(lineRef.current, {
      scaleY: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top center',
        end: 'bottom center',
        scrub: 1,
        // markers: true, // Uncomment to see scroll trigger markers
      }
    })

  }, { scope: lineRef, dependencies: [containerRef] })

  return (
    <>
      {/* Background static line (always visible, faded) */}
      <div 
        className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, rgb(71, 128, 199), rgb(147, 51, 234), rgb(6, 182, 212))',
          opacity: 0.2,
          zIndex: 0
        }}
      />
      
      {/* Animated drawing line */}
      <div 
        ref={lineRef}
        className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, rgb(71, 128, 199), rgb(147, 51, 234), rgb(6, 182, 212))',
          boxShadow: '0 0 10px rgba(71, 128, 199, 0.5), 0 0 20px rgba(147, 51, 234, 0.3)',
          zIndex: 1
        }}
      />
    </>
  )
}
