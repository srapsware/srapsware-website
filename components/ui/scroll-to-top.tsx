'use client'

import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollPercentage, setScrollPercentage] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled = (scrollTop / docHeight) * 100

      setScrollPercentage(scrolled)
      setIsVisible(scrollTop > 500)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  // Calculate circle progress
  const radius = 26
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (scrollPercentage / 100) * circumference

  return (
    <button
      onClick={scrollToTop}
      className={`group fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full backdrop-blur-md bg-background/80 border-2 border-border hover:border-brand/50 shadow-lg hover:shadow-2xl hover:shadow-brand/20 hover:scale-110 transition-all duration-500 ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0 pointer-events-none'
      }`}
      style={{
        animation: isVisible ? 'float 3s ease-in-out infinite' : 'none'
      }}
      aria-label="Scroll to top"
    >
      {/* Progress Ring */}
      <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 60 60">
        <defs>
          <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgb(59, 130, 246)" />
            <stop offset="50%" stopColor="rgb(147, 51, 234)" />
            <stop offset="100%" stopColor="rgb(6, 182, 212)" />
          </linearGradient>
        </defs>
        {/* Background circle */}
        <circle
          cx="30"
          cy="30"
          r={radius}
          stroke="currentColor"
          strokeWidth="3"
          fill="none"
          className="text-border/30"
        />
        {/* Progress circle */}
        <circle
          cx="30"
          cy="30"
          r={radius}
          stroke="url(#progressGradient)"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className="transition-all duration-300"
        />
      </svg>

      {/* Arrow Icon */}
      <div className="relative z-10 flex items-center justify-center w-full h-full">
        <ArrowUp className="w-5 h-5 text-brand group-hover:text-purple-500 group-hover:-translate-y-1 group-hover:scale-110 transition-all duration-300" />
      </div>

      {/* Glow effect */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-brand/20 to-purple-500/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }
      `}</style>
    </button>
  )
}
