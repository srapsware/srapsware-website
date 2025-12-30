'use client'

import { useRef, useState, useEffect } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Rocket, TrendingUp, Users, Award } from 'lucide-react'
import TimelineLine from './timeline-line-svg'
import RocketLaunch from './rocket-launch'
import GraphGrowth from './graph-growth'
import TeamAssembly from './team-assembly'
import TrophyCelebration from './trophy-celebration'
import ProgressIndicator from './progress-indicator'
import FireworkParticles from './particles/firework-particles'
import FirecrackerParticles from './particles/firecracker-particles'
import ConfettiParticles from './particles/confetti-particles'
import StarSparkles from './particles/star-sparkles'

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
  const milestone2015Ref = useRef<HTMLDivElement>(null)
  const milestone2020Ref = useRef<HTMLDivElement>(null)
  const milestone2025Ref = useRef<HTMLDivElement>(null)
  const icon2010Ref = useRef<HTMLDivElement>(null)
  const icon2015Ref = useRef<HTMLDivElement>(null)
  const icon2020Ref = useRef<HTMLDivElement>(null)
  const icon2025Ref = useRef<HTMLDivElement>(null)
  
  const [show2010Firework, setShow2010Firework] = useState(false)
  const [show2015Firecracker, setShow2015Firecracker] = useState(false)
  const [show2020Team, setShow2020Team] = useState(false)
  const [show2025Confetti, setShow2025Confetti] = useState(false)
  const [show2025Sparkles, setShow2025Sparkles] = useState(false)
  const [show2025Shine, setShow2025Shine] = useState(false)
  const [icon2010Pos, setIcon2010Pos] = useState({ x: 0, y: 0 })
  const [icon2015Pos, setIcon2015Pos] = useState({ x: 0, y: 0 })
  const [icon2020Pos, setIcon2020Pos] = useState({ x: 0, y: 0 })
  const [icon2025Pos, setIcon2025Pos] = useState({ x: 0, y: 0 })
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

  // Update 2015 icon position
  useEffect(() => {
    if (!icon2015Ref.current) return
    
    const updatePosition = () => {
      const rect = icon2015Ref.current?.getBoundingClientRect()
      if (rect) {
        setIcon2015Pos({ x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 })
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

  // Update 2020 icon position
  useEffect(() => {
    if (!icon2020Ref.current) return
    
    const updatePosition = () => {
      const rect = icon2020Ref.current?.getBoundingClientRect()
      if (rect) {
        setIcon2020Pos({ x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 })
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

  // Update 2025 icon position
  useEffect(() => {
    if (!icon2025Ref.current) return
    
    const updatePosition = () => {
      const rect = icon2025Ref.current?.getBoundingClientRect()
      if (rect) {
        setIcon2025Pos({ x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 })
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

    // Add parallax effect to all icons
    const icons = [icon2010Ref.current, icon2015Ref.current, icon2020Ref.current, icon2025Ref.current].filter(Boolean)
    
    icons.forEach((icon) => {
      if (!icon) return
      
      gsap.to(icon, {
        y: -30,
        ease: 'none',
        scrollTrigger: {
          trigger: icon,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1
        }
      })
    })

    const cardElement = milestone2010Ref.current.querySelector('.timeline-card')
    if (!cardElement) return

    // 2010 Milestone Animation
    const tl2010 = gsap.timeline({
      scrollTrigger: {
        trigger: milestone2010Ref.current,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none none',
        id: 'milestone-2010',
        onEnter: () => {
          cardElement.classList.add('timeline-card-active')
        },
        onLeave: () => {
          cardElement.classList.remove('timeline-card-active')
        },
        onEnterBack: () => {
          cardElement.classList.add('timeline-card-active')
        },
        onLeaveBack: () => {
          cardElement.classList.remove('timeline-card-active')
        }
      }
    })

    // Card slides in
    tl2010.fromTo(cardElement, 
      {
        x: -100,
        opacity: 0
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out'
      }
    )

    // Icon bounces in
    tl2010.fromTo(icon2010Ref.current,
      {
        scale: 0,
        rotation: -180
      },
      {
        scale: 1,
        rotation: 0,
        duration: 1.5,
        ease: 'elastic.out(1, 0.5)'
      }, '-=0.5')

    // Year glows
    const yearElement = milestone2010Ref.current.querySelector('.timeline-year')
    if (yearElement) {
      tl2010.fromTo(yearElement,
        {
          scale: 0.8,
          opacity: 0
        },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          ease: 'back.out(2)'
        }, '-=1')
    }

    // Trigger main firework after animations
    tl2010.call(() => {
      setShow2010Firework(true)
      setTimeout(() => setShow2010Firework(false), 1000)
    }, undefined, '+=0.3')

    // 2015 Milestone Animation
    if (!milestone2015Ref.current || !icon2015Ref.current) return

    const card2015Element = milestone2015Ref.current.querySelector('.timeline-card')
    if (!card2015Element) return

    const tl2015 = gsap.timeline({
      scrollTrigger: {
        trigger: milestone2015Ref.current,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none none',
        id: 'milestone-2015',
        onEnter: () => {
          card2015Element.classList.add('timeline-card-active')
        },
        onLeave: () => {
          card2015Element.classList.remove('timeline-card-active')
        },
        onEnterBack: () => {
          card2015Element.classList.add('timeline-card-active')
        },
        onLeaveBack: () => {
          card2015Element.classList.remove('timeline-card-active')
        }
      }
    })

    // Card slides in from right
    tl2015.fromTo(card2015Element, 
      {
        x: 100,
        opacity: 0
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out'
      }
    )

    // Icon bounces in
    tl2015.fromTo(icon2015Ref.current,
      {
        scale: 0,
        rotation: 180
      },
      {
        scale: 1,
        rotation: 0,
        duration: 1.5,
        ease: 'elastic.out(1, 0.5)'
      }, '-=0.5')

    // Year glows
    const year2015Element = milestone2015Ref.current.querySelector('.timeline-year')
    if (year2015Element) {
      tl2015.fromTo(year2015Element,
        {
          scale: 0.8,
          opacity: 0
        },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          ease: 'back.out(2)'
        }, '-=1')
    }

    // Trigger firecracker after animations
    tl2015.call(() => {
      setShow2015Firecracker(true)
      setTimeout(() => setShow2015Firecracker(false), 1200)
    }, undefined, '+=0.3')

    // ===== 2020 ANIMATION - TEAM ASSEMBLY =====
    if (!milestone2020Ref.current || !icon2020Ref.current) return

    const card2020Element = milestone2020Ref.current.querySelector('.timeline-card')
    if (!card2020Element) return

    const tl2020 = gsap.timeline({
      scrollTrigger: {
        trigger: milestone2020Ref.current,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none none',
        id: 'milestone-2020',
        onEnter: () => {
          card2020Element.classList.add('timeline-card-active')
        },
        onLeave: () => {
          card2020Element.classList.remove('timeline-card-active')
        },
        onEnterBack: () => {
          card2020Element.classList.add('timeline-card-active')
        },
        onLeaveBack: () => {
          card2020Element.classList.remove('timeline-card-active')
        }
      }
    })

    // Card slides in from left
    tl2020.fromTo(card2020Element, 
      {
        x: -100,
        opacity: 0
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out'
      }
    )

    // Icon bounces in
    tl2020.fromTo(icon2020Ref.current,
      {
        scale: 0,
        rotation: -180
      },
      {
        scale: 1,
        rotation: 0,
        duration: 1.5,
        ease: 'elastic.out(1, 0.5)'
      }, '-=0.5')

    // Year glows
    const year2020Element = milestone2020Ref.current.querySelector('.timeline-year')
    if (year2020Element) {
      tl2020.fromTo(year2020Element,
        {
          scale: 0.8,
          opacity: 0
        },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          ease: 'back.out(2)'
        }, '-=1')
    }

    // Trigger team assembly animation
    tl2020.call(() => {
      setShow2020Team(true)
      setTimeout(() => setShow2020Team(false), 3000)
    }, undefined, '+=0.3')

    // ===== 2025 ANIMATION - TROPHY CELEBRATION =====
    if (!milestone2025Ref.current || !icon2025Ref.current) return

    const card2025Element = milestone2025Ref.current.querySelector('.timeline-card')
    if (!card2025Element) return

    const tl2025 = gsap.timeline({
      scrollTrigger: {
        trigger: milestone2025Ref.current,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none none',
        id: 'milestone-2025',
        onEnter: () => {
          card2025Element.classList.add('timeline-card-active')
        },
        onLeave: () => {
          card2025Element.classList.remove('timeline-card-active')
        },
        onEnterBack: () => {
          card2025Element.classList.add('timeline-card-active')
        },
        onLeaveBack: () => {
          card2025Element.classList.remove('timeline-card-active')
        }
      }
    })

    // Card slides in from right
    tl2025.fromTo(card2025Element, 
      {
        x: 100,
        opacity: 0
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out'
      }
    )

    // Icon bounces in (extra bouncy for trophy!)
    tl2025.fromTo(icon2025Ref.current,
      {
        scale: 0,
        rotation: 180
      },
      {
        scale: 1,
        rotation: 0,
        duration: 1.8,
        ease: 'elastic.out(1.2, 0.4)'
      }, '-=0.5')

    // Year glows
    const year2025Element = milestone2025Ref.current.querySelector('.timeline-year')
    if (year2025Element) {
      tl2025.fromTo(year2025Element,
        {
          scale: 0.8,
          opacity: 0
        },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          ease: 'back.out(2)'
        }, '-=1.2')
    }

    // Trigger shine effect
    tl2025.call(() => {
      setShow2025Shine(true)
    }, undefined, '+=0.2')

    // Trigger confetti explosion
    tl2025.call(() => {
      setShow2025Confetti(true)
      setTimeout(() => setShow2025Confetti(false), 3500)
    }, undefined, '+=0.8')

    // Trigger star sparkles
    tl2025.call(() => {
      setShow2025Sparkles(true)
      setTimeout(() => setShow2025Sparkles(false), 3000)
    }, undefined, '+=0.5')

  }, { scope: containerRef, dependencies: [] })

  return (
    <section 
      ref={containerRef}
      className="py-20 md:py-28 relative overflow-hidden journey-timeline-section"
    >
      {/* Background with gradient transition */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />
      
      {/* Progress Indicator */}
      <ProgressIndicator containerRef={containerRef} />

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
          <TimelineLine 
            triggerRef={timelineRef} 
            milestoneRefs={[milestone2010Ref, milestone2015Ref, milestone2020Ref, milestone2025Ref]}
          />

          <div className="space-y-12">
            {timelineData.map((milestone, index) => {
              const Icon = milestone.icon
              const isLeft = milestone.position === 'left'
              const is2010 = milestone.year === '2010'
              const is2015 = milestone.year === '2015'
              const is2020 = milestone.year === '2020'
              const is2025 = milestone.year === '2025'

              return (
                <div 
                  key={milestone.year}
                  ref={is2010 ? milestone2010Ref : is2015 ? milestone2015Ref : is2020 ? milestone2020Ref : is2025 ? milestone2025Ref : null}
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
                      ref={is2010 ? icon2010Ref : is2015 ? icon2015Ref : is2020 ? icon2020Ref : is2025 ? icon2025Ref : null}
                      className={`timeline-icon relative w-16 h-16 rounded-full bg-gradient-to-br ${milestone.gradient} flex items-center justify-center shadow-lg overflow-hidden`}
                    >
                      <Icon className="w-8 h-8 text-white relative z-10" />
                      {is2025 && <TrophyCelebration iconRef={icon2025Ref} trigger={show2025Shine} />}
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

      {/* Graph Growth Animation for 2015 */}
      {milestone2015Ref.current && icon2015Ref.current && (
        <GraphGrowth 
          triggerRef={milestone2015Ref}
          iconRef={icon2015Ref}
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

      {/* Firecracker for 2015 Icon */}
      {show2015Firecracker && (
        <FirecrackerParticles
          centerX={icon2015Pos.x}
          centerY={icon2015Pos.y}
          onComplete={() => setShow2015Firecracker(false)}
        />
      )}

      {/* Team Assembly Animation for 2020 */}
      {show2020Team && icon2020Ref.current && (
        <div 
          style={{
            position: 'fixed',
            left: icon2020Pos.x,
            top: icon2020Pos.y,
            transform: 'translate(-50%, -50%)',
            pointerEvents: 'none',
            zIndex: 1000
          }}
        >
          <TeamAssembly 
            trigger={show2020Team}
            onComplete={() => setShow2020Team(false)}
          />
        </div>
      )}

      {/* Confetti Explosion for 2025 */}
      {show2025Confetti && (
        <ConfettiParticles
          centerX={icon2025Pos.x}
          centerY={icon2025Pos.y}
          particleCount={40}
          onComplete={() => setShow2025Confetti(false)}
        />
      )}

      {/* Star Sparkles for 2025 */}
      {show2025Sparkles && (
        <StarSparkles
          centerX={icon2025Pos.x}
          centerY={icon2025Pos.y}
          starCount={12}
          radius={70}
        />
      )}
    </section>
  )
}
