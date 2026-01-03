'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function MorphingBackground() {
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    if (!svgRef.current) return

    const shapes = [
      // Blob 1 paths
      'M37.5,-65.3C48.1,-58.4,56,-47.3,62.3,-35.1C68.6,-22.9,73.3,-9.6,73.9,4.1C74.5,17.8,71,31.8,63.4,42.9C55.8,54,44.1,62.2,31.2,67.1C18.3,72,4.2,73.6,-9.8,71.8C-23.8,70,-37.6,64.8,-48.7,56.3C-59.8,47.8,-68.2,36,-71.8,23C-75.4,10,-74.2,-4.2,-69.5,-16.8C-64.8,-29.4,-56.6,-40.4,-46.3,-47.5C-36,-54.6,-23.6,-57.8,-11.3,-60.3C1,-62.8,13.9,-64.6,24.5,-61.7C35.1,-58.8,43.4,-51.2,37.5,-65.3Z',
      
      // Blob 2 paths
      'M44.7,-76.4C56.9,-68.2,65.4,-54.3,71.1,-39.1C76.8,-23.9,79.7,-7.4,77.9,8.3C76.1,24,69.6,38.9,60.3,51C51,63.1,38.9,72.4,25.3,76.8C11.7,81.2,-3.4,80.7,-17.8,76.4C-32.2,72.1,-45.9,64,-56.8,52.9C-67.7,41.8,-75.8,27.7,-78.2,12.5C-80.6,-2.7,-77.3,-18.9,-70.1,-32.8C-62.9,-46.7,-51.8,-58.3,-38.9,-66.2C-26,-74.1,-11.3,-78.3,3.2,-83.9C17.7,-89.5,35.4,-96.5,44.7,-76.4Z',
      
      // Blob 3 paths
      'M51.1,-87.8C64.8,-79.2,74.4,-64.3,80.2,-48C86,-31.7,88,-14,86.3,2.9C84.6,19.8,79.2,35.9,70.5,49.3C61.8,62.7,49.8,73.4,36.2,78.8C22.6,84.2,7.4,84.3,-8.2,82.1C-23.8,79.9,-39.8,75.4,-53.6,67.3C-67.4,59.2,-79,47.5,-84.9,33.4C-90.8,19.3,-91,2.8,-87.4,-12.9C-83.8,-28.6,-76.4,-43.5,-65.3,-54.3C-54.2,-65.1,-39.4,-71.8,-24.9,-78.8C-10.4,-85.8,3.8,-93.1,18.9,-94.4C34,-95.7,50,-91,51.1,-87.8Z'
    ]

    // Create timeline for continuous morphing
    const tl = gsap.timeline({ repeat: -1 })

    shapes.forEach((shape, index) => {
      const nextIndex = (index + 1) % shapes.length
      
      tl.to('.morph-path', {
        attr: { d: shapes[nextIndex] },
        duration: 4,
        ease: 'sine.inOut'
      }, index * 4)
    })

    // Rotation animation
    gsap.to('.morph-group', {
      rotation: 360,
      duration: 60,
      repeat: -1,
      ease: 'none',
      transformOrigin: 'center center'
    })

    return () => {
      tl.kill()
    }
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      <svg
        ref={svgRef}
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-30"
      >
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#ec4899" stopOpacity="0.4" />
          </linearGradient>
          
          <linearGradient id="gradient2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.3" />
          </linearGradient>

          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>

        <g className="morph-group" transform="translate(100 100)" filter="url(#goo)">
          {/* Primary morphing shape */}
          <path
            className="morph-path"
            d="M37.5,-65.3C48.1,-58.4,56,-47.3,62.3,-35.1C68.6,-22.9,73.3,-9.6,73.9,4.1C74.5,17.8,71,31.8,63.4,42.9C55.8,54,44.1,62.2,31.2,67.1C18.3,72,4.2,73.6,-9.8,71.8C-23.8,70,-37.6,64.8,-48.7,56.3C-59.8,47.8,-68.2,36,-71.8,23C-75.4,10,-74.2,-4.2,-69.5,-16.8C-64.8,-29.4,-56.6,-40.4,-46.3,-47.5C-36,-54.6,-23.6,-57.8,-11.3,-60.3C1,-62.8,13.9,-64.6,24.5,-61.7C35.1,-58.8,43.4,-51.2,37.5,-65.3Z"
            fill="url(#gradient1)"
            transform="translate(0 0)"
          />
          
          {/* Secondary shape for depth */}
          <path
            className="morph-path"
            d="M37.5,-65.3C48.1,-58.4,56,-47.3,62.3,-35.1C68.6,-22.9,73.3,-9.6,73.9,4.1C74.5,17.8,71,31.8,63.4,42.9C55.8,54,44.1,62.2,31.2,67.1C18.3,72,4.2,73.6,-9.8,71.8C-23.8,70,-37.6,64.8,-48.7,56.3C-59.8,47.8,-68.2,36,-71.8,23C-75.4,10,-74.2,-4.2,-69.5,-16.8C-64.8,-29.4,-56.6,-40.4,-46.3,-47.5C-36,-54.6,-23.6,-57.8,-11.3,-60.3C1,-62.8,13.9,-64.6,24.5,-61.7C35.1,-58.8,43.4,-51.2,37.5,-65.3Z"
            fill="url(#gradient2)"
            transform="translate(-20 30) scale(0.8)"
            opacity="0.6"
          />
        </g>
      </svg>

      {/* Additional decorative blobs */}
      <div className="absolute top-20 -left-20 w-72 h-72 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-40 -right-20 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
    </div>
  )
}
