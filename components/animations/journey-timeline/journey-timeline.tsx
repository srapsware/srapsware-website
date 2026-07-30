'use client'

import { useRef, useState, useEffect, type RefObject } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Rocket, TrendingUp, Users, Award, type LucideIcon } from 'lucide-react'
import TimelineLine from './timeline-line-svg'
import RocketLaunch from './rocket-launch'
import GraphGrowth from './graph-growth'
import TeamAssembly from './team-assembly'
import TrophyCelebration from './trophy-celebration'
import ProgressIndicator from './progress-indicator'
import FireworkParticles from './particles/firework-particles'
import FirecrackerParticles from './particles/firecracker-particles'
import ConfettiParticles from './particles/confetti-particles'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

interface TimelineData {
  year: string
  title: string
  description: string
  icon: LucideIcon
  position: 'left' | 'right'
  className: string
  yearClass: string
  cardHoverClass: string
  cardGradientClass: string
  iconGradientClass: string
}

const timelineData: TimelineData[] = [
  {
    year: '2010',
    title: 'Company Founded',
    description: 'Started our journey with a vision to transform businesses through technology.',
    icon: Rocket,
    position: 'left',
    className: 'timeline-2010',
    yearClass: 'text-brand',
    cardHoverClass: 'hover:border-brand/50 hover:shadow-xl hover:shadow-brand/10',
    cardGradientClass: 'from-brand/5',
    iconGradientClass: 'from-brand to-purple-500',
  },
  {
    year: '2015',
    title: '200+ Projects Milestone',
    description: 'Reached 200 successful projects, expanding our client base globally.',
    icon: TrendingUp,
    position: 'right',
    className: 'timeline-2015',
    yearClass: 'text-purple-500',
    cardHoverClass: 'hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/10',
    cardGradientClass: 'from-purple-500/5',
    iconGradientClass: 'from-purple-500 to-cyan-500',
  },
  {
    year: '2020',
    title: 'Team Expansion',
    description: 'Grew our expert team to 30+ skilled developers and designers.',
    icon: Users,
    position: 'left',
    className: 'timeline-2020',
    yearClass: 'text-cyan-500',
    cardHoverClass: 'hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/10',
    cardGradientClass: 'from-cyan-500/5',
    iconGradientClass: 'from-cyan-500 to-brand',
  },
  {
    year: '2025',
    title: 'Industry Leader',
    description: '604+ projects delivered, trusted by 400+ clients as an industry leader.',
    icon: Award,
    position: 'right',
    className: 'timeline-2025',
    yearClass: 'text-amber-500',
    cardHoverClass: 'hover:border-amber-500/50 hover:shadow-xl hover:shadow-amber-500/10',
    cardGradientClass: 'from-amber-500/5',
    iconGradientClass: 'from-amber-500 to-orange-500',
  },
]

(ref: RefObject<HTMLDivElement | null>) {
  const rect = ref.current?.getBoundingClientRect()
  if (!rect) return { x: 0, y: 0 }
  return { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 }
}

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

  const milestoneRefs = [milestone2010Ref, milestone2015Ref, milestone2020Ref, milestone2025Ref]

  const [mounted, setMounted] = useState(false)
  const [show2010Firework, setShow2010Firework] = useState(false)
  const [show2015Firecracker, setShow2015Firecracker] = useState(false)
  const [show2020Team, setShow2020Team] = useState(false)
  const [show2025Confetti, setShow2025Confetti] = useState(false)
  const [show2025Shine, setShow2025Shine] = useState(false)
  const [fireworkPos, setFireworkPos] = useState({ x: 0, y: 0 })
  const [firecrackerPos, setFirecrackerPos] = useState({ x: 0, y: 0 })
  const [confettiPos, setConfettiPos] = useState({ x: 0, y: 0 })
  const [teamPos, setTeamPos] = useState({ x: 0, y: 0 })
  const [rocketTarget, setRocketTarget] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const updateRocketTarget = () => {
      setRocketTarget(getIconCenter(icon2010Ref))
    }

    updateRocketTarget()
    window.addEventListener('resize', updateRocketTarget)
    window.addEventListener('scroll', updateRocketTarget)

    return () => {
      window.removeEventListener('resize', updateRocketTarget)
      window.removeEventListener('scroll', updateRocketTarget)
    }
  }, [mounted])

  useGSAP(() => {
    if (!containerRef.current || !milestone2010Ref.current || !icon2010Ref.current) return

    const cardElement = milestone2010Ref.current.querySelector('.timeline-card')
    if (!cardElement) return

    const tl2010 = gsap.timeline({
      scrollTrigger: {
        trigger: milestone2010Ref.current,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none none',
        id: 'milestone-2010',
        onEnter: () => cardElement.classList.add('timeline-card-active'),
        onLeave: () => cardElement.classList.remove('timeline-card-active'),
        onEnterBack: () => cardElement.classList.add('timeline-card-active'),
        onLeaveBack: () => cardElement.classList.remove('timeline-card-active'),
      },
    })

    tl2010.fromTo(
      cardElement,
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: 'power3.out' }
    )

    tl2010.fromTo(
      icon2010Ref.current,
      { scale: 0, rotation: -180 },
      { scale: 1, rotation: 0, duration: 1.5, ease: 'elastic.out(1, 0.5)' },
      '-=0.5'
    )

    const yearElement = milestone2010Ref.current.querySelector('.timeline-year')
    if (yearElement) {
      tl2010.fromTo(
        yearElement,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.8, ease: 'back.out(2)' },
        '-=1'
      )
    }

    tl2010.call(() => {
      const pos = getIconCenter(icon2010Ref)
      setFireworkPos(pos)
      setShow2010Firework(true)
      setTimeout(() => setShow2010Firework(false), 1000)
    }, undefined, '+=0.3')

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
        onEnter: () => card2015Element.classList.add('timeline-card-active'),
        onLeave: () => card2015Element.classList.remove('timeline-card-active'),
        onEnterBack: () => card2015Element.classList.add('timeline-card-active'),
        onLeaveBack: () => card2015Element.classList.remove('timeline-card-active'),
      },
    })

    tl2015.fromTo(
      card2015Element,
      { x: 100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: 'power3.out' }
    )

    tl2015.fromTo(
      icon2015Ref.current,
      { scale: 0, rotation: 180 },
      { scale: 1, rotation: 0, duration: 1.5, ease: 'elastic.out(1, 0.5)' },
      '-=0.5'
    )

    const year2015Element = milestone2015Ref.current.querySelector('.timeline-year')
    if (year2015Element) {
      tl2015.fromTo(
        year2015Element,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.8, ease: 'back.out(2)' },
        '-=1'
      )
    }

    tl2015.call(() => {
      setFirecrackerPos(getIconCenter(icon2015Ref))
      setShow2015Firecracker(true)
      setTimeout(() => setShow2015Firecracker(false), 1200)
    }, undefined, '+=0.3')

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
        onEnter: () => card2020Element.classList.add('timeline-card-active'),
        onLeave: () => card2020Element.classList.remove('timeline-card-active'),
        onEnterBack: () => card2020Element.classList.add('timeline-card-active'),
        onLeaveBack: () => card2020Element.classList.remove('timeline-card-active'),
      },
    })

    tl2020.fromTo(
      card2020Element,
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: 'power3.out' }
    )

    tl2020.fromTo(
      icon2020Ref.current,
      { scale: 0, rotation: -180 },
      { scale: 1, rotation: 0, duration: 1.5, ease: 'elastic.out(1, 0.5)' },
      '-=0.5'
    )

    const year2020Element = milestone2020Ref.current.querySelector('.timeline-year')
    if (year2020Element) {
      tl2020.fromTo(
        year2020Element,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.8, ease: 'back.out(2)' },
        '-=1'
      )
    }

    tl2020.call(() => {
      setTeamPos(getIconCenter(icon2020Ref))
      setShow2020Team(true)
      setTimeout(() => setShow2020Team(false), 3000)
    }, undefined, '+=0.3')

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
        onEnter: () => card2025Element.classList.add('timeline-card-active'),
        onLeave: () => card2025Element.classList.remove('timeline-card-active'),
        onEnterBack: () => card2025Element.classList.add('timeline-card-active'),
        onLeaveBack: () => card2025Element.classList.remove('timeline-card-active'),
      },
    })

    tl2025.fromTo(
      card2025Element,
      { x: 100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: 'power3.out' }
    )

    tl2025.fromTo(
      icon2025Ref.current,
      { scale: 0, rotation: 180 },
      { scale: 1, rotation: 0, duration: 1.8, ease: 'elastic.out(1.2, 0.4)' },
      '-=0.5'
    )

    const year2025Element = milestone2025Ref.current.querySelector('.timeline-year')
    if (year2025Element) {
      tl2025.fromTo(
        year2025Element,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.8, ease: 'back.out(2)' },
        '-=1.2'
      )
    }

    tl2025.call(() => {
      setShow2025Shine(true)
    }, undefined, '+=0.2')

    tl2025.call(() => {
      setConfettiPos(getIconCenter(icon2025Ref))
      setShow2025Confetti(true)
      setTimeout(() => setShow2025Confetti(false), 3500)
    }, undefined, '+=0.8')
  }, { scope: containerRef, dependencies: [mounted] })

  const getMilestoneRef = (year: string) => {
    switch (year) {
      case '2010': return milestone2010Ref
      case '2015': return milestone2015Ref
      case '2020': return milestone2020Ref
      case '2025': return milestone2025Ref
      default: return null
    }
  }

  const getIconRef = (year: string) => {
    switch (year) {
      case '2010': return icon2010Ref
      case '2015': return icon2015Ref
      case '2020': return icon2020Ref
      case '2025': return icon2025Ref
      default: return null
    }
  }

  return (
    <section
      ref={containerRef}
      className="py-20 md:py-28 relative journey-timeline-section"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />

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
          <TimelineLine
            triggerRef={timelineRef}
            milestoneRefs={milestoneRefs}
          />

          {/* Mobile left-side timeline */}
          <div
            className="timeline-line-mobile md:hidden absolute left-4 top-0 bottom-0 w-0.5 bg-border pointer-events-none"
            aria-hidden="true"
          />

          <div className="space-y-12 md:space-y-16">
            {timelineData.map((milestone) => {
              const Icon = milestone.icon
              const isLeft = milestone.position === 'left'
              const is2025 = milestone.year === '2025'
              const milestoneRef = getMilestoneRef(milestone.year)
              const iconRef = getIconRef(milestone.year)

              return (
                <div
                  key={milestone.year}
                  ref={milestoneRef}
                  className={`timeline-milestone relative min-h-[120px] md:min-h-[140px] ${milestone.className}`}
                >
                  {/* Center icon - desktop: on timeline; mobile: above card */}
                  <div
                    className="timeline-icon-wrapper flex justify-center mb-4 md:mb-0 md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:z-20"
                  >
                    <div
                      ref={iconRef}
                      className={`timeline-icon relative w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br ${milestone.iconGradientClass} flex items-center justify-center shadow-lg overflow-hidden`}
                    >
                      <Icon className="w-7 h-7 md:w-8 md:h-8 text-white relative z-10" />
                      {is2025 && (
                        <TrophyCelebration iconRef={icon2025Ref} trigger={show2025Shine} />
                      )}
                    </div>
                  </div>

                  {/* Mobile dot on left timeline */}
                  <div
                    className="timeline-mobile-dot md:hidden absolute left-4 top-7 -translate-x-1/2 w-3 h-3 rounded-full z-10"
                    style={{
                      background: milestone.year === '2010'
                        ? 'rgb(71, 128, 199)'
                        : milestone.year === '2015'
                          ? 'rgb(147, 51, 234)'
                          : milestone.year === '2020'
                            ? 'rgb(6, 182, 212)'
                            : 'rgb(245, 158, 11)',
                    }}
                    aria-hidden="true"
                  />

                  {/* Card */}
                  <div
                    className={`timeline-card-wrapper pl-10 md:pl-0 md:w-[calc(50%-3rem)] ${
                      isLeft
                        ? 'md:mr-auto md:pr-4 md:text-right'
                        : 'md:ml-auto md:pl-4'
                    }`}
                  >
                    <div
                      className={`timeline-card group relative p-6 rounded-2xl bg-card border-2 border-border ${milestone.cardHoverClass} transition-all duration-300 overflow-hidden`}
                    >
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${milestone.cardGradientClass} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                      />

                      <h3 className={`timeline-year text-2xl font-bold ${milestone.yearClass} mb-2`}>
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
              )
            })}
          </div>
        </div>
      </div>

      {mounted && (
        <>
          <RocketLaunch
            triggerRef={milestone2010Ref}
            targetX={rocketTarget.x}
            targetY={rocketTarget.y}
          />

          <GraphGrowth
            triggerRef={milestone2015Ref}
            iconRef={icon2015Ref}
          />
        </>
      )}

      {show2010Firework && (
        <FireworkParticles
          centerX={fireworkPos.x}
          centerY={fireworkPos.y}
          colors={['#4780C7', '#9333EA', '#06B6D4', '#FFFFFF']}
          particleCount={30}
        />
      )}

      {show2015Firecracker && (
        <FirecrackerParticles
          centerX={firecrackerPos.x}
          centerY={firecrackerPos.y}
          onComplete={() => setShow2015Firecracker(false)}
        />
      )}

      {show2020Team && (
        <div
          style={{
            position: 'fixed',
            left: teamPos.x,
            top: teamPos.y,
            transform: 'translate(-50%, -50%)',
            pointerEvents: 'none',
            zIndex: 1000,
          }}
        >
          <TeamAssembly
            trigger={show2020Team}
            onComplete={() => setShow2020Team(false)}
          />
        </div>
      )}

      {show2025Confetti && (
        <ConfettiParticles
          centerX={confettiPos.x}
          centerY={confettiPos.y}
          particleCount={40}
          onComplete={() => setShow2025Confetti(false)}
        />
      )}
    </section>
  )
}
