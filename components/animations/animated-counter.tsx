'use client'

import { useEffect, useRef } from 'react'
import { gsap } from '@/lib/animations/gsap-setup'
import ScrollTrigger from 'gsap/ScrollTrigger'

interface AnimatedCounterProps {
  value: string // e.g., "604+", "400+", "30+", "15+"
  duration?: number
  className?: string
}

export default function AnimatedCounter({ 
  value, 
  duration = 2,
  className = '' 
}: AnimatedCounterProps) {
  const counterRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!counterRef.current) return

    // Extract number and suffix from value
    const matches = value.match(/^(\d+)(.*)$/)
    if (!matches) {
      // If no number found, just display as-is
      counterRef.current.textContent = value
      return
    }

    const targetNumber = parseInt(matches[1], 10)
    const suffix = matches[2] // e.g., "+", "K+", etc.

    // Create animation object
    const counter = { val: 0 }

    // Animate on scroll into view
    gsap.fromTo(
      counter,
      { val: 0 },
      {
        val: targetNumber,
        duration: duration,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: counterRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
          once: true // Only animate once
        },
        onUpdate: function() {
          if (counterRef.current) {
            // Format number with commas if needed
            const formattedNumber = Math.round(counter.val).toLocaleString()
            counterRef.current.textContent = formattedNumber + suffix
          }
        }
      }
    )

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [value, duration])

  return (
    <div 
      ref={counterRef}
      className={className}
    >
      0
    </div>
  )
}
