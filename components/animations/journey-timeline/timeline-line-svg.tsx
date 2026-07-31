'use client'

import { useRef, useState, useEffect, useCallback } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

interface SegmentLayout {
  top: number
  height: number
}

interface TimelineLineProps {
  triggerRef: React.RefObject<HTMLDivElement | null>
  milestoneRefs: React.RefObject<HTMLDivElement | null>[]
}

const COLORS = [
  'rgb(71, 128, 199)',
  'rgb(147, 51, 234)',
  'rgb(6, 182, 212)',
  'rgb(245, 158, 11)',
]

const SHADOWS = [
  '0 0 10px rgba(71, 128, 199, 0.5)',
  '0 0 10px rgba(147, 51, 234, 0.5)',
  '0 0 10px rgba(6, 182, 212, 0.5)',
  '0 0 10px rgba(245, 158, 11, 0.5)',
]

function computeSegments(
  container: HTMLDivElement,
  milestones: (HTMLDivElement | null)[]
): SegmentLayout[] {
  const containerRect = container.getBoundingClientRect()
  const centers = milestones.map((milestone) => {
    if (!milestone) return 0
    const rect = milestone.getBoundingClientRect()
    return rect.top + rect.height / 2 - containerRect.top
  })

  return [
    { top: 0, height: Math.max(centers[0], 1) },
    { top: centers[0], height: Math.max(centers[1] - centers[0], 1) },
    { top: centers[1], height: Math.max(centers[2] - centers[1], 1) },
    { top: centers[2], height: Math.max(centers[3] - centers[2], 1) },
  ]
}

export default function TimelineLine({ triggerRef, milestoneRefs }: TimelineLineProps) {
  const segmentRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ]
  const [segments, setSegments] = useState<SegmentLayout[]>([
    { top: 0, height: 25 },
    { top: 25, height: 25 },
    { top: 50, height: 25 },
    { top: 75, height: 25 },
  ])

  const updateLayout = useCallback(() => {
    if (!triggerRef.current) return

    const milestoneElements = milestoneRefs.map((ref) => ref.current)
    if (milestoneElements.some((el) => !el)) return

    setSegments(computeSegments(triggerRef.current, milestoneElements))
    ScrollTrigger.refresh()
  }, [triggerRef, milestoneRefs])

  useEffect(() => {
    updateLayout()

    const ro = new ResizeObserver(updateLayout)
    if (triggerRef.current) ro.observe(triggerRef.current)
    milestoneRefs.forEach((ref) => {
      if (ref.current) ro.observe(ref.current)
    })

    window.addEventListener('resize', updateLayout)
    window.addEventListener('load', updateLayout)

    return () => {
      ro.disconnect()
      window.removeEventListener('resize', updateLayout)
      window.removeEventListener('load', updateLayout)
    }
  }, [updateLayout, milestoneRefs, triggerRef])

  useGSAP(() => {
    if (!triggerRef.current) return

    segmentRefs.forEach((segRef, index) => {
      if (!segRef.current) return

      const segment = segRef.current
      const milestone = milestoneRefs[index]?.current
      if (!milestone) return

      gsap.set(segment, {
        scaleY: 0,
        transformOrigin: 'top center',
      })

      gsap.to(segment, {
        scaleY: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: milestone,
          start: index === 0 ? 'top 80%' : 'top 60%',
          end: 'bottom 60%',
          scrub: 1,
          invalidateOnRefresh: true,
        },
      })
    })
  }, { dependencies: [] })

  return (
    <div className="timeline-line-desktop hidden md:block" aria-hidden="true">
      <div
        className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 pointer-events-none"
        style={{
          background: 'rgba(255, 255, 255, 0.05)',
          zIndex: 5,
        }}
      />

      {segmentRefs.map((segRef, index) => (
        <div
          key={index}
          ref={segRef}
          className="absolute left-1/2 w-1 -translate-x-1/2 pointer-events-none"
          style={{
            top: `${segments[index].top}px`,
            height: `${segments[index].height}px`,
            background: COLORS[index],
            boxShadow: SHADOWS[index],
            zIndex: 6,
          }}
        />
      ))}
    </div>
  )
}
