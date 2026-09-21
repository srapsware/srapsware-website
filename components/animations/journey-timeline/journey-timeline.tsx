'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Rocket, TrendingUp, Users, Award, type LucideIcon } from 'lucide-react'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

interface Milestone {
  year: string
  title: string
  description: string
  icon: LucideIcon
  side: 'left' | 'right'
  accentClass: string
  yearClass: string
  iconGradientClass: string
  burstColor: string
}

const MILESTONES: Milestone[] = [
  {
    year: '2010',
    title: 'Company Founded',
    description: 'Started our journey with a vision to transform businesses through technology.',
    icon: Rocket,
    side: 'left',
    accentClass: 'journey-accent-brand',
    yearClass: 'text-brand',
    iconGradientClass: 'from-brand to-purple-500',
    burstColor: '#4780C7',
  },
  {
    year: '2015',
    title: '200+ Projects Milestone',
    description: 'Reached 200 successful projects, expanding our client base globally.',
    icon: TrendingUp,
    side: 'right',
    accentClass: 'journey-accent-purple',
    yearClass: 'text-purple-500',
    iconGradientClass: 'from-purple-500 to-cyan-500',
    burstColor: '#9333EA',
  },
  {
    year: '2020',
    title: 'Team Expansion',
    description: 'Grew our expert team to 30+ skilled developers and designers.',
    icon: Users,
    side: 'left',
    accentClass: 'journey-accent-cyan',
    yearClass: 'text-cyan-500',
    iconGradientClass: 'from-cyan-500 to-brand',
    burstColor: '#06B6D4',
  },
  {
    year: '2025',
    title: 'Industry Leader',
    description: '604+ projects delivered, trusted by 400+ clients as an industry leader.',
    icon: Award,
    side: 'right',
    accentClass: 'journey-accent-amber',
    yearClass: 'text-amber-500',
    iconGradientClass: 'from-amber-500 to-orange-500',
    burstColor: '#F59E0B',
  },
]

const BURST_COUNT = 8

function playBurst(node: HTMLElement, color: string) {
  const wrapper = node.querySelector('.journey-node-burst')
  if (!wrapper) return

  wrapper.innerHTML = ''
  const particles: HTMLSpanElement[] = []

  for (let i = 0; i < BURST_COUNT; i++) {
    const dot = document.createElement('span')
    dot.className = 'journey-burst-dot'
    dot.style.backgroundColor = color
    wrapper.appendChild(dot)
    particles.push(dot)
  }

  particles.forEach((dot, i) => {
    const angle = (i / BURST_COUNT) * Math.PI * 2
    gsap.fromTo(
      dot,
      { x: 0, y: 0, opacity: 1, scale: 1 },
      {
        x: Math.cos(angle) * 28,
        y: Math.sin(angle) * 28,
        opacity: 0,
        scale: 0.4,
        duration: 0.55,
        ease: 'power2.out',
        onComplete: () => dot.remove(),
      }
    )
  })
}

export default function JourneyTimeline() {
  const sectionRef = useRef<HTMLElement>(null)
  const spineRef = useRef<SVGLineElement>(null)
  const milestoneRefs = useRef<(HTMLLIElement | null)[]>([])

  useGSAP(
    () => {
      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

      MILESTONES.forEach((milestone, i) => {
        const el = milestoneRefs.current[i]
        if (!el) return

        const card = el.querySelector('.journey-card')
        const node = el.querySelector('.journey-node') as HTMLElement | null
        if (!card || !node) return

        const slideFrom = milestone.side === 'left' ? -40 : 40

        if (reducedMotion) {
          gsap.set(card, { opacity: 1, x: 0 })
          gsap.set(node, { scale: 1 })
          return
        }

        gsap.set(card, { opacity: 0, x: slideFrom })
        gsap.set(node, { scale: 0.8 })

        ScrollTrigger.create({
          trigger: el,
          start: 'top 75%',
          once: true,
          onEnter: () => {
            gsap.to(card, {
              opacity: 1,
              x: 0,
              duration: 0.6,
              ease: 'power2.out',
            })
            gsap.to(node, {
              scale: 1,
              duration: 0.5,
              ease: 'back.out(2)',
              onComplete: () => playBurst(node, milestone.burstColor),
            })
          },
        })

        ScrollTrigger.create({
          trigger: el,
          start: 'top 60%',
          end: 'bottom 40%',
          onEnter: () => el.classList.add('is-active'),
          onLeave: () => el.classList.remove('is-active'),
          onEnterBack: () => el.classList.add('is-active'),
          onLeaveBack: () => el.classList.remove('is-active'),
        })
      })

      const spineLine = spineRef.current
      const spineTrack = sectionRef.current?.querySelector('.journey-spine-track') as SVGLineElement | null

      if (!reducedMotion && spineLine && spineTrack && sectionRef.current) {
        const length = spineTrack.getTotalLength()
        gsap.set(spineLine, {
          strokeDasharray: length,
          strokeDashoffset: length,
        })

        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: 'top 70%',
          end: 'bottom 30%',
          scrub: 0.5,
          onUpdate: (self) => {
            gsap.set(spineLine, {
              strokeDashoffset: length * (1 - self.progress),
            })
          },
        })
      } else if (spineLine && spineTrack) {
        const length = spineTrack.getTotalLength()
        gsap.set(spineLine, { strokeDasharray: length, strokeDashoffset: 0 })
      }
    },
    { scope: sectionRef }
  )

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-28 relative journey-timeline-section"
      aria-labelledby="our-journey-heading"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 id="our-journey-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Our Journey
          </h2>
          <p className="text-xl text-muted-foreground">
            15 years of innovation, growth, and success
          </p>
        </div>

        <div className="journey-timeline-wrap max-w-5xl mx-auto relative">
          {/* Desktop spine SVG */}
          <svg
            className="journey-spine-svg hidden md:block"
            aria-hidden="true"
            viewBox="0 0 4 100"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="journey-spine-gradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#4780C7" />
                <stop offset="33%" stopColor="#9333EA" />
                <stop offset="66%" stopColor="#06B6D4" />
                <stop offset="100%" stopColor="#F59E0B" />
              </linearGradient>
            </defs>
            <line
              className="journey-spine-track"
              x1="2"
              y1="0"
              x2="2"
              y2="100"
              stroke="hsl(var(--border))"
              strokeWidth="0.5"
            />
            <line
              ref={spineRef}
              className="journey-spine-progress"
              x1="2"
              y1="0"
              x2="2"
              y2="100"
              stroke="url(#journey-spine-gradient)"
              strokeWidth="0.75"
              strokeLinecap="round"
            />
          </svg>

          {/* Mobile spine */}
          <div className="journey-spine-mobile md:hidden" aria-hidden="true" />

          <ol className="journey-list list-none p-0 m-0" aria-label="Company milestones">
            {MILESTONES.map((milestone, i) => {
              const Icon = milestone.icon
              const isLeft = milestone.side === 'left'

              return (
                <li
                  key={milestone.year}
                  ref={(el) => {
                    milestoneRefs.current[i] = el
                  }}
                  className={`journey-milestone ${milestone.accentClass} ${isLeft ? 'journey-milestone-left' : 'journey-milestone-right'}`}
                >
                  <div
                    className={`journey-card-col ${isLeft ? 'journey-card-col-left' : 'journey-card-col-right'}`}
                  >
                    {isLeft && (
                      <article className="journey-card group">
                        <h3 className={`journey-year text-2xl font-bold ${milestone.yearClass} mb-2`}>
                          {milestone.year}
                        </h3>
                        <h4 className="journey-title text-lg font-semibold mb-2">{milestone.title}</h4>
                        <p className="journey-description text-muted-foreground">{milestone.description}</p>
                      </article>
                    )}
                  </div>

                  <div className="journey-node-col">
                    <div
                      className={`journey-node bg-gradient-to-br ${milestone.iconGradientClass}`}
                      aria-hidden="true"
                    >
                      <Icon className="w-7 h-7 md:w-8 md:h-8 text-white relative z-10" />
                      <span className="journey-node-burst" aria-hidden="true" />
                    </div>
                  </div>

                  <div
                    className={`journey-card-col ${isLeft ? 'journey-card-col-right' : 'journey-card-col-left'}`}
                  >
                    {!isLeft && (
                      <article className="journey-card group">
                        <h3 className={`journey-year text-2xl font-bold ${milestone.yearClass} mb-2`}>
                          {milestone.year}
                        </h3>
                        <h4 className="journey-title text-lg font-semibold mb-2">{milestone.title}</h4>
                        <p className="journey-description text-muted-foreground">{milestone.description}</p>
                      </article>
                    )}
                  </div>
                </li>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}
