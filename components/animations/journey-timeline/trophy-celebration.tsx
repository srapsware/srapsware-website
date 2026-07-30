'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

interface TrophyCelebrationProps {
  iconRef: React.RefObject<HTMLDivElement | null>
  trigger: boolean
}

export default function TrophyCelebration({ iconRef, trigger }: TrophyCelebrationProps) {
  const shineRef = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (!trigger || hasAnimated.current || !iconRef.current || !shineRef.current) return

    hasAnimated.current = true
    const icon = iconRef.current
    const shine = shineRef.current

    const tl = gsap.timeline()

    for (let i = 0; i < 3; i++) {
      tl.fromTo(
        shine,
        { left: '-100%', opacity: 0 },
        {
          left: '200%',
          opacity: 1,
          duration: 0.6,
          ease: 'power2.inOut',
          delay: i === 0 ? 0 : 0.4,
        }
      ).to(shine, {
        opacity: 0,
        duration: 0.1,
      })

      tl.to(
        icon,
        {
          scale: 1.15,
          filter: 'brightness(1.5) drop-shadow(0 0 20px rgba(245, 158, 11, 0.8))',
          duration: 0.3,
          ease: 'power2.out',
        },
        `-=${0.7}`
      ).to(icon, {
        scale: 1,
        filter: 'brightness(1) drop-shadow(0 0 10px rgba(245, 158, 11, 0.4))',
        duration: 0.3,
        ease: 'power2.in',
      })
    }

    return () => {
      tl.kill()
    }
  }, [trigger, iconRef])

  useEffect(() => {
    if (!trigger) {
      hasAnimated.current = false
    }
  }, [trigger])

  return (
    <div
      ref={shineRef}
      className="trophy-shine"
      style={{
        position: 'absolute',
        top: 0,
        left: '-100%',
        width: '50%',
        height: '100%',
        background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.8), transparent)',
        pointerEvents: 'none',
        zIndex: 10,
        transform: 'skewX(-20deg)',
        opacity: 0,
      }}
    />
  )
}
