'use client'

import { useEffect, useState, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

interface ProgressIndicatorProps {
  containerRef: React.RefObject<any>
}

export default function ProgressIndicator({ containerRef }: ProgressIndicatorProps) {
  const [progress, setProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const indicatorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current || !indicatorRef.current) return

    const container = containerRef.current
    const indicator = indicatorRef.current

    const updateProgress = () => {
      if (!container) return

      const rect = container.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const containerHeight = container.offsetHeight
      
      // Check if journey section is in view
      const isInView = rect.top < windowHeight && rect.bottom > 0
      setIsVisible(isInView)
      
      if (!isInView) {
        return
      }
      
      // Calculate progress based on scroll position within the section
      const scrolled = Math.max(0, -rect.top)
      const total = containerHeight - windowHeight
      const percentage = Math.min(100, Math.max(0, (scrolled / total) * 100))
      
      setProgress(Math.round(percentage))
    }

    // Initial update
    updateProgress()

    // Update on scroll
    window.addEventListener('scroll', updateProgress)
    window.addEventListener('resize', updateProgress)

    // Animate indicator with ScrollTrigger
    ScrollTrigger.create({
      trigger: container,
      start: 'top center',
      end: 'bottom center',
      onEnter: () => {
        gsap.to(indicator, {
          x: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power2.out'
        })
      },
      onLeave: () => {
        gsap.to(indicator, {
          x: 50,
          opacity: 0,
          duration: 0.4,
          ease: 'power2.in'
        })
      },
      onEnterBack: () => {
        gsap.to(indicator, {
          x: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power2.out'
        })
      },
      onLeaveBack: () => {
        gsap.to(indicator, {
          x: 50,
          opacity: 0,
          duration: 0.4,
          ease: 'power2.in'
        })
      }
    })

    return () => {
      window.removeEventListener('scroll', updateProgress)
      window.removeEventListener('resize', updateProgress)
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars.trigger === container) {
          trigger.kill()
        }
      })
    }
  }, [containerRef])

  return (
    <div 
      ref={indicatorRef}
      className={`fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col items-center gap-3 transition-opacity duration-300 ${
        isVisible ? 'pointer-events-auto' : 'pointer-events-none'
      }`}
      style={{ opacity: 0, transform: 'translateX(50px) translateY(-50%)' }}
    >
      {/* Progress Circle */}
      <div className="relative w-16 h-16">
        <svg className="w-16 h-16 transform -rotate-90">
          {/* Background circle */}
          <circle
            cx="32"
            cy="32"
            r="28"
            stroke="currentColor"
            strokeWidth="4"
            fill="none"
            className="text-muted/20"
          />
          {/* Progress circle */}
          <circle
            cx="32"
            cy="32"
            r="28"
            stroke="url(#progressGradient)"
            strokeWidth="4"
            fill="none"
            strokeDasharray={`${2 * Math.PI * 28}`}
            strokeDashoffset={`${2 * Math.PI * 28 * (1 - progress / 100)}`}
            strokeLinecap="round"
            className="transition-all duration-300 ease-out"
            style={{ filter: 'drop-shadow(0 0 8px rgba(71, 128, 199, 0.5))' }}
          />
          <defs>
            <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4780C7" />
              <stop offset="50%" stopColor="#9333EA" />
              <stop offset="100%" stopColor="#06B6D4" />
            </linearGradient>
          </defs>
        </svg>
        
        {/* Percentage text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-sm font-bold text-foreground">
            {progress}%
          </span>
        </div>
      </div>

      {/* Label */}
      <div className="text-xs font-medium text-muted-foreground text-center leading-tight">
        Journey<br />Progress
      </div>

      {/* Milestone dots */}
      <div className="flex flex-col gap-2 mt-2">
        <div 
          className={`w-2 h-2 rounded-full transition-all duration-300 ${
            progress >= 0 ? 'bg-brand scale-110 shadow-lg shadow-brand/50' : 'bg-muted/40'
          }`}
          title="2010 - Founded"
        />
        <div 
          className={`w-2 h-2 rounded-full transition-all duration-300 ${
            progress >= 33 ? 'bg-purple-500 scale-110 shadow-lg shadow-purple-500/50' : 'bg-muted/40'
          }`}
          title="2015 - 200+ Projects"
        />
        <div 
          className={`w-2 h-2 rounded-full transition-all duration-300 ${
            progress >= 66 ? 'bg-cyan-500 scale-110 shadow-lg shadow-cyan-500/50' : 'bg-muted/40'
          }`}
          title="2020 - Team Expansion"
        />
        <div 
          className={`w-2 h-2 rounded-full transition-all duration-300 ${
            progress >= 90 ? 'bg-amber-500 scale-110 shadow-lg shadow-amber-500/50' : 'bg-muted/40'
          }`}
          title="2025 - Industry Leader"
        />
      </div>
    </div>
  )
}
