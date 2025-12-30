'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

interface TimelineLineProps {
  triggerRef: React.RefObject<any>
  milestoneRefs: React.RefObject<HTMLDivElement | null>[]
}

export default function TimelineLine({ triggerRef, milestoneRefs }: TimelineLineProps) {
  const segment1Ref = useRef<HTMLDivElement>(null)
  const segment2Ref = useRef<HTMLDivElement>(null)
  const segment3Ref = useRef<HTMLDivElement>(null)
  const segment4Ref = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!triggerRef.current) return

    const trigger = triggerRef.current
    const segments = [segment1Ref, segment2Ref, segment3Ref, segment4Ref]
    const milestones = milestoneRefs

    // Animate each segment separately as you reach each milestone
    segments.forEach((segRef, index) => {
      if (!segRef.current) return
      
      const segment = segRef.current
      const milestone = milestones[index]?.current

      if (!milestone) return

      // Set initial state - segment is hidden
      gsap.set(segment, {
        scaleY: 0,
        transformOrigin: 'top center'
      })

      // Create the ScrollTrigger animation for this segment
      gsap.to(segment, {
        scaleY: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: milestone,
          start: index === 0 ? 'top 80%' : 'top 60%',
          end: 'bottom 60%',
          scrub: 1,
          invalidateOnRefresh: true,
        }
      })
    })

  }, { dependencies: [] })

  // Colors for each milestone: 2010 (brand), 2015 (purple), 2020 (cyan), 2025 (amber)
  const colors = [
    'rgb(71, 128, 199)',   // Brand blue - 2010
    'rgb(147, 51, 234)',   // Purple - 2015
    'rgb(6, 182, 212)',    // Cyan - 2020
    'rgb(245, 158, 11)'    // Amber - 2025
  ]

  const shadows = [
    '0 0 10px rgba(71, 128, 199, 0.5)',
    '0 0 10px rgba(147, 51, 234, 0.5)',
    '0 0 10px rgba(6, 182, 212, 0.5)',
    '0 0 10px rgba(245, 158, 11, 0.5)'
  ]

  return (
    <>
      {/* Background static line (subtle guide) */}
      <div 
        className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 pointer-events-none"
        style={{
          background: 'rgba(255, 255, 255, 0.05)',
          zIndex: 5
        }}
      />
      
      {/* Segment 1: 2010 - Brand Blue */}
      <div 
        ref={segment1Ref}
        className="absolute left-1/2 top-0 w-1 -translate-x-1/2 pointer-events-none"
        style={{
          height: '25%',
          background: colors[0],
          boxShadow: shadows[0],
          zIndex: 6
        }}
      />

      {/* Segment 2: 2015 - Purple */}
      <div 
        ref={segment2Ref}
        className="absolute left-1/2 w-1 -translate-x-1/2 pointer-events-none"
        style={{
          top: '25%',
          height: '25%',
          background: colors[1],
          boxShadow: shadows[1],
          zIndex: 6
        }}
      />

      {/* Segment 3: 2020 - Cyan */}
      <div 
        ref={segment3Ref}
        className="absolute left-1/2 w-1 -translate-x-1/2 pointer-events-none"
        style={{
          top: '50%',
          height: '25%',
          background: colors[2],
          boxShadow: shadows[2],
          zIndex: 6
        }}
      />

      {/* Segment 4: 2025 - Amber */}
      <div 
        ref={segment4Ref}
        className="absolute left-1/2 w-1 -translate-x-1/2 pointer-events-none"
        style={{
          top: '75%',
          height: '25%',
          background: colors[3],
          boxShadow: shadows[3],
          zIndex: 6
        }}
      />
    </>
  )
}
