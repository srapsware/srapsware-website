'use client'

import { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Rocket } from 'lucide-react'
import FireworkParticles from './particles/firework-particles'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

interface RocketLaunchProps {
  triggerRef: React.RefObject<HTMLElement>
  targetX: number
  targetY: number
}

export default function RocketLaunch({ triggerRef, targetX, targetY }: RocketLaunchProps) {
  const rocketRef = useRef<HTMLDivElement>(null)
  const [showFirework, setShowFirework] = useState(false)
  const [fireworkPos, setFireworkPos] = useState({ x: 0, y: 0 })
  const [hasAnimated, setHasAnimated] = useState(false)

  useGSAP(() => {
    if (!rocketRef.current || !triggerRef.current || hasAnimated) return

    // Set initial position - bottom right corner
    gsap.set(rocketRef.current, {
      x: window.innerWidth - 100,
      y: window.innerHeight - 100,
      scale: 0,
      rotation: -45,
      opacity: 0
    })

    // Create animation timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerRef.current,
        start: 'top 70%',
        once: true,
        onEnter: () => setHasAnimated(true)
      }
    })

    // Rocket appears
    tl.to(rocketRef.current, {
      scale: 1,
      opacity: 1,
      duration: 0.3,
      ease: 'back.out(2)'
    })

    // Rocket flies to target with curve
    tl.to(rocketRef.current, {
      motionPath: {
        path: [
          { x: window.innerWidth - 100, y: window.innerHeight - 100 },
          { x: (window.innerWidth - 100 + targetX) / 2, y: (window.innerHeight - 100 + targetY) / 2 - 100 }, // Arc upward
          { x: targetX, y: targetY }
        ],
        curviness: 1.5
      },
      rotation: 0,
      duration: 2,
      ease: 'power2.inOut',
      onUpdate: function() {
        // Create trail particles
        if (rocketRef.current && Math.random() > 0.7) {
          const rect = rocketRef.current.getBoundingClientRect()
          createTrailParticle(rect.left, rect.top)
        }
      },
      onComplete: () => {
        // Trigger firework at target location
        if (rocketRef.current) {
          const rect = rocketRef.current.getBoundingClientRect()
          setFireworkPos({ x: rect.left + 16, y: rect.top + 16 })
          setShowFirework(true)
        }
      }
    })

    // Rocket disappears
    tl.to(rocketRef.current, {
      scale: 0,
      opacity: 0,
      duration: 0.3,
      ease: 'power2.in'
    }, '-=0.2')

  }, { scope: rocketRef, dependencies: [triggerRef, targetX, targetY, hasAnimated] })

  const createTrailParticle = (x: number, y: number) => {
    const particle = document.createElement('div')
    particle.style.cssText = `
      position: fixed;
      left: ${x}px;
      top: ${y}px;
      width: 6px;
      height: 6px;
      background: linear-gradient(135deg, #f59e0b, #ef4444);
      border-radius: 50%;
      pointer-events: none;
      z-index: 40;
      box-shadow: 0 0 10px #f59e0b;
    `
    document.body.appendChild(particle)

    gsap.to(particle, {
      opacity: 0,
      scale: 0,
      duration: 0.5,
      ease: 'power2.out',
      onComplete: () => particle.remove()
    })
  }

  return (
    <>
      <div
        ref={rocketRef}
        className="fixed pointer-events-none"
        style={{ zIndex: 40, width: '32px', height: '32px' }}
      >
        <div className="relative w-full h-full">
          <Rocket className="w-8 h-8 text-white drop-shadow-lg" style={{ filter: 'drop-shadow(0 0 10px rgba(59, 130, 246, 0.8))' }} />
        </div>
      </div>

      {showFirework && (
        <FireworkParticles
          centerX={fireworkPos.x}
          centerY={fireworkPos.y}
          colors={['#4780C7', '#9333EA', '#06B6D4', '#FFFFFF']}
          particleCount={30}
          onComplete={() => setShowFirework(false)}
        />
      )}
    </>
  )
}
