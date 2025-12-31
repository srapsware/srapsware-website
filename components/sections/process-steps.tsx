'use client'

import { 
  Lightbulb, FileCode, GitBranch, TestTube, Rocket, CheckCircle,
  Code2, Settings, Users, Database, Cloud, Zap,
  type LucideIcon 
} from 'lucide-react'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

// Icon mapping for server component compatibility
const iconMap: Record<string, LucideIcon> = {
  Lightbulb, FileCode, GitBranch, TestTube, Rocket, CheckCircle,
  Code2, Settings, Users, Database, Cloud, Zap
}

export interface ProcessStep {
  number: number
  title: string
  description: string
  duration?: string
  icon?: string // Icon name as string for server component compatibility
}

interface ProcessStepsProps {
  title?: string
  description?: string
  steps: ProcessStep[]
  className?: string
}

export function ProcessSteps({
  title = 'Our Process',
  description,
  steps,
  className = ''
}: ProcessStepsProps) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)
  const stepsRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    if (!sectionRef.current || !lineRef.current || stepsRef.current.length === 0) return

    const ctx = gsap.context(() => {
      // Animate connecting line
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0, transformOrigin: 'top' },
        {
          scaleY: 1,
          duration: 1.5,
          ease: 'power2.inOut',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
            end: 'bottom 40%',
            toggleActions: 'play none none reverse'
          }
        }
      )

      // Stagger animate steps
      gsap.fromTo(
        stepsRef.current,
        {
          opacity: 0,
          x: (index) => (index % 2 === 0 ? -50 : 50),
          scale: 0.8
        },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: 'back.out(1.2)',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse'
          }
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [steps.length])

  return (
    <section ref={sectionRef} className={`py-20 ${className}`}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {title}
          </h2>
          {description && (
            <p className="text-lg text-muted-foreground">
              {description}
            </p>
          )}
        </div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Connecting Line */}
          <div
            ref={lineRef}
            className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand via-purple-500 to-pink-500 hidden sm:block"
            style={{ transform: 'translateX(-50%)' }}
          />

          {/* Steps */}
          <div className="space-y-12">
            {steps.map((step, index) => {
              const Icon = step.icon ? iconMap[step.icon] : undefined
              const isEven = index % 2 === 0

              return (
                <div
                  key={step.number}
                  ref={(el) => {
                    if (el) stepsRef.current[index] = el
                  }}
                  className={`relative flex items-center gap-8 ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Content Card */}
                  <div className={`flex-1 ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="group relative p-6 rounded-2xl border border-border bg-card hover:border-brand/50 transition-all duration-300 hover:shadow-xl hover:shadow-brand/10">
                      {/* Step Number Badge */}
                      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-brand to-purple-600 text-white font-bold text-lg mb-4 ${
                        isEven ? 'md:float-right md:ml-4' : 'md:float-left md:mr-4'
                      }`}>
                        {step.number}
                      </div>

                      <h3 className="text-xl font-bold mb-2 group-hover:text-brand transition-colors">
                        {step.title}
                      </h3>
                      
                      {step.duration && (
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 text-brand text-sm font-medium mb-3">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {step.duration}
                        </div>
                      )}

                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Center Icon */}
                  <div className="relative flex-shrink-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-brand to-purple-600 rounded-full blur-xl opacity-30 animate-pulse" />
                    <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-brand to-purple-600 flex items-center justify-center border-4 border-background shadow-xl">
                      {Icon ? (
                        <Icon className="w-7 h-7 text-white" />
                      ) : (
                        <span className="text-white font-bold text-xl">{step.number}</span>
                      )}
                    </div>
                  </div>

                  {/* Spacer for layout */}
                  <div className="flex-1 hidden md:block" />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
