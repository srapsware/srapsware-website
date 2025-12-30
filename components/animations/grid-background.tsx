'use client'

import { useEffect, useRef } from 'react'
import { gsap } from '@/lib/animations/gsap-setup'

interface GridBackgroundProps {
  className?: string
  intensity?: number // 0-1, controls visibility
  speed?: number // Animation speed multiplier
  gridSize?: number // Size of grid cells
}

export default function GridBackground({
  className = '',
  intensity = 0.15,
  speed = 1,
  gridSize = 50
}: GridBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationFrameRef = useRef<number | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size to parent container
    const updateCanvasSize = () => {
      const parent = canvas.parentElement
      if (parent) {
        canvas.width = parent.offsetWidth
        canvas.height = parent.offsetHeight
      }
    }
    updateCanvasSize()
    window.addEventListener('resize', updateCanvasSize)

    // Animation state
    let offsetX = 0
    let offsetY = 0

    // Draw grid function
    const drawGrid = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Create gradient overlay
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
      gradient.addColorStop(0, `rgba(59, 130, 246, ${intensity * 0.1})`) // blue-500
      gradient.addColorStop(0.5, `rgba(139, 92, 246, ${intensity * 0.15})`) // violet-500
      gradient.addColorStop(1, `rgba(59, 130, 246, ${intensity * 0.1})`)

      // Grid color
      ctx.strokeStyle = `rgba(148, 163, 184, ${intensity})` // slate-400 with opacity
      ctx.lineWidth = 1

      // Draw vertical lines
      for (let x = offsetX % gridSize; x < canvas.width; x += gridSize) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }

      // Draw horizontal lines
      for (let y = offsetY % gridSize; y < canvas.height; y += gridSize) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }

      // Draw intersection points (subtle glow)
      ctx.fillStyle = `rgba(59, 130, 246, ${intensity * 0.6})` // blue-500
      for (let x = offsetX % gridSize; x < canvas.width; x += gridSize) {
        for (let y = offsetY % gridSize; y < canvas.height; y += gridSize) {
          ctx.beginPath()
          ctx.arc(x, y, 2, 0, Math.PI * 2)
          ctx.fill()
        }
      }

      // Apply gradient overlay
      ctx.globalCompositeOperation = 'screen'
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.globalCompositeOperation = 'source-over'
    }

    // Animation loop
    const animate = () => {
      // Slow, subtle movement
      offsetX += 0.2 * speed
      offsetY += 0.1 * speed

      // Reset offsets to prevent overflow
      if (offsetX > gridSize) offsetX -= gridSize
      if (offsetY > gridSize) offsetY -= gridSize

      drawGrid()
      animationFrameRef.current = requestAnimationFrame(animate)
    }

    // Start animation
    animate()

    // Cleanup
    return () => {
      window.removeEventListener('resize', updateCanvasSize)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [intensity, speed, gridSize])

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{
        background: 'transparent'
      }}
    />
  )
}
