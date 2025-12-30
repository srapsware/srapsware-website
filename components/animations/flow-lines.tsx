'use client'

import { useEffect, useRef } from 'react'
import { gsap } from '@/lib/animations/gsap-setup'
import ScrollTrigger from 'gsap/ScrollTrigger'

interface FlowLinesProps {
  className?: string
}

export default function FlowLines({ className = '' }: FlowLinesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationFrameRef = useRef<number | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size to viewport
    const updateCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    updateCanvasSize()

    // Connection points (vertical positions in viewport)
    const connectionPoints = [
      { x: 0.5, y: 0.15, color: '#4780C7', label: 'Hero' },
      { x: 0.5, y: 0.35, color: '#14B8A6', label: 'Services' },
      { x: 0.5, y: 0.55, color: '#8B5CF6', label: 'Process' },
      { x: 0.5, y: 0.75, color: '#F59E0B', label: 'Portfolio' }
    ]

    let scrollProgress = 0

    // Draw flowing lines
    const drawLines = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Get scroll position
      const scrollTop = window.scrollY
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      scrollProgress = Math.min(scrollTop / maxScroll, 1)

      // Draw connections between points - all visible at once
      for (let i = 0; i < connectionPoints.length - 1; i++) {
        const start = connectionPoints[i]
        const end = connectionPoints[i + 1]

        const startX = start.x * canvas.width
        const startY = start.y * canvas.height
        const endX = end.x * canvas.width
        const endY = end.y * canvas.height

        // Calculate control points for smooth curve
        const controlY = (startY + endY) / 2

        // Draw the full path
        ctx.beginPath()
        ctx.moveTo(startX, startY)
        ctx.quadraticCurveTo(
          startX + (endX - startX) * 0.5,
          controlY,
          endX,
          endY
        )

        // Create gradient
        const gradient = ctx.createLinearGradient(startX, startY, endX, endY)
        gradient.addColorStop(0, start.color)
        gradient.addColorStop(1, end.color)

        ctx.strokeStyle = gradient
        ctx.lineWidth = 4
        ctx.lineCap = 'round'
        ctx.globalAlpha = 0.6
        ctx.stroke()

        // Draw flowing particles
        for (let p = 0; p < 3; p++) {
          const particleOffset = (p * 0.3 + Date.now() * 0.0003) % 1
          
          const t = particleOffset
          const px = startX + (endX - startX) * t
          const py = startY + (endY - startY) * t

          ctx.beginPath()
          ctx.arc(px, py, 5, 0, Math.PI * 2)
          ctx.fillStyle = start.color
          ctx.globalAlpha = 0.8
          ctx.fill()

          // Glow effect
          ctx.beginPath()
          ctx.arc(px, py, 10, 0, Math.PI * 2)
          ctx.fillStyle = start.color
          ctx.globalAlpha = 0.3
          ctx.fill()
        }

        // Draw node circles
        ctx.beginPath()
        ctx.arc(startX, startY, 10, 0, Math.PI * 2)
        ctx.fillStyle = start.color
        ctx.globalAlpha = 1
        ctx.fill()

        // Outer ring
        ctx.beginPath()
        ctx.arc(startX, startY, 16, 0, Math.PI * 2)
        ctx.strokeStyle = start.color
        ctx.lineWidth = 3
        ctx.globalAlpha = 0.6
        ctx.stroke()
      }

      // Draw last node
      const lastPoint = connectionPoints[connectionPoints.length - 1]
      const lastX = lastPoint.x * canvas.width
      const lastY = lastPoint.y * canvas.height

      ctx.beginPath()
      ctx.arc(lastX, lastY, 10, 0, Math.PI * 2)
      ctx.fillStyle = lastPoint.color
      ctx.globalAlpha = 1
      ctx.fill()

      ctx.beginPath()
      ctx.arc(lastX, lastY, 16, 0, Math.PI * 2)
      ctx.strokeStyle = lastPoint.color
      ctx.lineWidth = 3
      ctx.globalAlpha = 0.6
      ctx.stroke()
    }

    // Animation loop
    const animate = () => {
      drawLines()
      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animate()

    // Update on scroll and resize
    const handleScroll = () => {
      // Animation loop will handle updates
    }

    const handleResize = () => {
      updateCanvasSize()
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none ${className}`}
      style={{
        zIndex: 5,
        mixBlendMode: 'normal',
        opacity: 0.8
      }}
    />
  )
}
