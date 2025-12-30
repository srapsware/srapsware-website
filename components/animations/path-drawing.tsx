'use client'

import { useEffect, useRef } from 'react'
import { gsap } from '@/lib/animations/gsap-setup'
import ScrollTrigger from 'gsap/ScrollTrigger'

interface ProcessStep {
  number: string
  title: string
  description: string
  icon: string
}

const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Discovery',
    description: 'Understanding your business goals and technical requirements',
    icon: '🔍'
  },
  {
    number: '02',
    title: 'Design',
    description: 'Creating user-centered solutions and architecture',
    icon: '✨'
  },
  {
    number: '03',
    title: 'Development',
    description: 'Building with modern frameworks and best practices',
    icon: '⚡'
  },
  {
    number: '04',
    title: 'Launch',
    description: 'Deploying to production with monitoring and support',
    icon: '🚀'
  }
]

interface PathDrawingProps {
  className?: string
}

export default function PathDrawing({ className = '' }: PathDrawingProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const pathRef = useRef<SVGPathElement>(null)

  useEffect(() => {
    if (!containerRef.current || !pathRef.current) return

    const ctx = gsap.context(() => {
      // Animate path drawing
      gsap.fromTo(
        pathRef.current,
        {
          strokeDashoffset: 1000,
          strokeDasharray: 1000
        },
        {
          strokeDashoffset: 0,
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top center',
            end: 'bottom center',
            scrub: 1
          },
          ease: 'none'
        }
      )

      // Animate step cards
      const steps = containerRef.current?.querySelectorAll('.process-step')
      steps?.forEach((step, index) => {
        gsap.fromTo(
          step,
          {
            opacity: 0,
            y: 50,
            scale: 0.9
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            scrollTrigger: {
              trigger: step,
              start: 'top 80%',
              end: 'top 50%',
              scrub: 1
            }
          }
        )

        // Pulse icon on reveal
        const icon = step.querySelector('.process-icon')
        if (icon) {
          gsap.fromTo(
            icon,
            {
              scale: 0
            },
            {
              scale: 1,
              scrollTrigger: {
                trigger: step,
                start: 'top 70%',
                toggleActions: 'play none none reverse'
              },
              duration: 0.6,
              ease: 'back.out(1.7)'
            }
          )
        }
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} className={`py-24 bg-muted/30 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our Development Process
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A systematic approach to delivering exceptional software solutions
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* SVG Path Connection */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ zIndex: 0 }}
            viewBox="0 0 1000 800"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: 'rgb(71, 128, 199)', stopOpacity: 1 }} />
                <stop offset="50%" style={{ stopColor: 'rgb(139, 92, 246)', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: 'rgb(20, 184, 166)', stopOpacity: 1 }} />
              </linearGradient>
            </defs>
            <path
              ref={pathRef}
              d="M 500 80 L 500 720"
              stroke="url(#pathGradient)"
              strokeWidth="6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="1"
            />
          </svg>

          {/* Process Steps */}
          <div className="grid md:grid-cols-2 gap-8 relative z-10">
            {PROCESS_STEPS.map((step, index) => (
              <div
                key={index}
                className="process-step group"
              >
                <div className="relative p-8 rounded-2xl bg-card border-2 border-border hover:border-brand/50 hover:shadow-xl transition-all duration-500">
                  {/* Step Number */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br from-brand to-accent-primary flex items-center justify-center text-white font-bold shadow-lg process-icon">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="text-5xl mb-4 process-icon">
                    {step.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-brand transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>

                  {/* Progress Bar */}
                  <div className="mt-6 h-1 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-brand to-accent-primary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-1000"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
