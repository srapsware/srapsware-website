'use client'

import { useRef, useState, useEffect } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Rocket, TrendingUp, Users, Award } from 'lucide-react'
import TimelineLine from './timeline-line-svg'
import RocketLaunch from './rocket-launch'
import FireworkParticles from './particles/firework-particles'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

interface TimelineData {
  year: string
  title: string
  description: string
  icon: any
  color: string
  gradient: string
  position: 'left' | 'right'
  className: string
}

const timelineData: TimelineData[] = [
  {
    year: '2010',
    title: 'Company Founded',
    description: 'Started our journey with a vision to transform businesses through technology.',
    icon: Rocket,
    color: 'brand',
    gradient: 'from-brand to-purple-500',
    position: 'left',
    className: 'timeline-2010'
  },
  {
    year: '2015',
    title: '200+ Projects Milestone',
    description: 'Reached 200 successful projects, expanding our client base globally.',
    icon: TrendingUp,
    color: 'purple-500',
    gradient: 'from-purple-500 to-cyan-500',
    position: 'right',
    className: 'timeline-2015'
  },
  {
    year: '2020',
    title: 'Team Expansion',
    description: 'Grew our expert team to 30+ skilled developers and designers.',
    icon: Users,
    color: 'cyan-500',
    gradient: 'from-cyan-500 to-brand',
    position: 'left',
    className: 'timeline-2020'
  },
  {
    year: '2025',
    title: 'Industry Leader',
    description: '604+ projects delivered, trusted by 400+ clients as an industry leader.',
    icon: Award,
    color: 'accent-primary',
    gradient: 'from-accent-primary to-purple-500',
    position: 'right',
    className: 'timeline-2025'
  }
]

export default function JourneyTimeline() {
  const containerRef = useRef<HTMLDivElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)
  const milestone2010Ref = useRef<HTMLDivElement>(null)
  const icon2010Ref = useRef<HTMLDivElement>(null)
  
  const [show2010Firework, setShow2010Firework] = useState(false)
  const [icon2010Pos, setIcon2010Pos] = useState({ x: 0, y: 0 })
  const [rocketTarget, setRocketTarget] = useState({ x: 0, y: 0 })

  // Update rocket target position when icon position changes
  useEffect(() => {
    if (!icon2010Ref.current) return
    
    const updatePosition = () => {
      const rect = icon2010Ref.current?.getBoundingClientRect()
      if (rect) {
        setRocketTarget({ x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 })
        setIcon2010Pos({ x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 })
      }
    }
    
    updatePosition()
    window.addEventListener('resize', updatePosition)
    window.addEventListener('scroll', updatePosition)
    
    return () => {
      window.removeEventListener('resize', updatePosition)
      window.removeEventListener('scroll', updatePosition)
    }
  }, [])

  useGSAP(() => {
    if (!containerRef.current || !milestone2010Ref.current || !icon2010Ref.current) return

    // 2010 Milestone Animation
    const tl2010 = gsap.timeline({
      scrollTrigger: {
        trigger: milestone2010Ref.current,
        start: 'top 70%',
        once: true
      }
    })

    // Card slides in
    tl2010.from('.timeline-2010 .timeline-card', {
      x: -100,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    })

    // Icon bounces in
    tl2010.from(icon2010Ref.current, {
      scale: 0,
      rotation: -180,
      duration: 1.5,
      ease: 'elastic.out(1, 0.5)'
    }, '-=0.5')

    // Year glows
    tl2010.from('.timeline-2010 .timeline-year', {
      scale: 0.8,
      opacity: 0,
      duration: 0.8,
      ease: 'back.out(2)'
    }, '-=1')

    // Trigger main firework after animations
    tl2010.call(() => {
      setShow2010Firework(true)
      setTimeout(() => setShow2010Firework(false), 1000)
    }, null, '+=0.3')

  }, { scope: containerRef })

  return (
    <section 
      ref={containerRef}
      className="py-20 md:py-28 relative overflow-hidden journey-timeline-section"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Our Journey
          </h2>
          <p className="text-xl text-muted-foreground">
            15 years of innovation, growth, and success
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative" ref={timelineRef}>
          {/* Animated Timeline Line */}
          <TimelineLine containerRef={containerRef} />

          <div className="space-y-12">
            {timelineData.map((milestone, index) => {
              const Icon = milestone.icon
              const isLeft = milestone.position === 'left'
              const is2010 = milestone.year === '2010'

              return (
                <div 
                  key={milestone.year}
                  ref={is2010 ? milestone2010Ref : null}
                  className={`relative grid md:grid-cols-2 gap-8 items-center ${milestone.className}`}
                >
                  {/* Card */}
                  <div className={`${isLeft ? 'md:text-right' : 'md:col-start-2'}`}>
                    <div className={isLeft ? 'inline-block md:block' : ''}>
                      <div className={`timeline-card group relative p-6 rounded-2xl bg-card border-2 border-border hover:border-${milestone.color}/50 hover:shadow-xl hover:shadow-${milestone.color}/10 transition-all duration-300 overflow-hidden`}>
                        <div className={`absolute inset-0 bg-gradient-to-br from-${milestone.color}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                        
                        <h3 className={`timeline-year text-2xl font-bold text-${milestone.color} mb-2`}>
                          {milestone.year}
                        </h3>
                        <h4 className="timeline-title text-lg font-semibold mb-2">
                          {milestone.title}
                        </h4>
                        <p className="timeline-description text-muted-foreground">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Icon Container */}
                  <div className={`${isLeft ? 'flex justify-center md:justify-start' : 'md:col-start-1 md:row-start-1 flex justify-center md:justify-end'}`}>
                    <div 
                      ref={is2010 ? icon2010Ref : null}
                      className={`timeline-icon w-16 h-16 rounded-full bg-gradient-to-br ${milestone.gradient} flex items-center justify-center shadow-lg`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Rocket Launch Animation for 2010 */}
      {milestone2010Ref.current && (
        <RocketLaunch 
          triggerRef={milestone2010Ref}
          targetX={rocketTarget.x}
          targetY={rocketTarget.y}
        />
      )}

      {/* Main Firework for 2010 Icon */}
      {show2010Firework && (
        <FireworkParticles
          centerX={icon2010Pos.x}
          centerY={icon2010Pos.y}
          colors={['#4780C7', '#9333EA', '#06B6D4', '#FFFFFF']}
          particleCount={30}
        />
      )}
    </section>
  )
}
