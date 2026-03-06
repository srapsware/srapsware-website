'use client'

import Link from 'next/link'
import { ArrowRight, Mail, Phone, MessageSquare } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { gsap } from '@/lib/animations/gsap-setup'

interface CTASectionProps {
  title?: string
  description?: string
  primaryButtonText?: string
  primaryButtonLink?: string
  secondaryButtonText?: string
  secondaryButtonLink?: string
  showContactInfo?: boolean
}

export function CTASection({
  title = "Ready to Build Your Next Project?",
  description = "Get a free consultation and project quote. Let's discuss how we can bring your ideas to life with cutting-edge technology.",
  primaryButtonText = "Get Free Quote",
  primaryButtonLink = "/contact",
  secondaryButtonText = "Schedule a Call",
  secondaryButtonLink = "/contact",
  showContactInfo = true
}: CTASectionProps) {
  const particlesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!particlesRef.current) return

    // Create floating particles with varied sizes and speeds
    const particles = Array.from({ length: 20 }, (_, i) => {
      const particle = document.createElement('div')
      particle.className = 'absolute rounded-full bg-white/20'
      
      const size = Math.random() * 4 + 2 // 2-6px
      particle.style.width = `${size}px`
      particle.style.height = `${size}px`
      particle.style.left = `${Math.random() * 100}%`
      particle.style.top = `${Math.random() * 100}%`
      
      particlesRef.current?.appendChild(particle)

      // Animate with GSAP
      gsap.to(particle, {
        y: `${Math.random() * 100 - 50}px`,
        x: `${Math.random() * 100 - 50}px`,
        opacity: Math.random() * 0.5 + 0.3,
        scale: Math.random() + 0.5,
        duration: Math.random() * 10 + 10, // 10-20s
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: Math.random() * 2,
      })

      return particle
    })

    return () => {
      particles.forEach(p => p.remove())
    }
  }, [])

  return (
    <section className="relative w-full py-24 overflow-hidden cta-section">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand via-brand-dark to-background opacity-95" />
      
      {/* Animated Particles */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none" />

      {/* Decorative Glows - Different from footer */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent-primary/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s', animationDelay: '1s' }} />
      </div>

      {/* Diagonal Lines Pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 35px,
            rgba(255, 255, 255, 0.3) 35px,
            rgba(255, 255, 255, 0.3) 37px
          )`
        }}
      />

      {/* Content */}
      <div className="container mx-auto px-3 sm:px-4 max-w-[1400px] relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Title */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 cta-title">
            {title}
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-white/90 mb-12 max-w-2xl mx-auto cta-description">
            {description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 cta-buttons">
            <Link
              href={primaryButtonLink}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent-primary text-white rounded-lg text-lg font-semibold hover:bg-accent-hover transition-all shadow-xl hover:shadow-2xl hover:scale-105"
            >
              {primaryButtonText}
              <ArrowRight className="w-5 h-5" />
            </Link>

            <Link
              href={secondaryButtonLink}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 rounded-lg text-lg font-semibold hover:bg-white/20 transition-all"
            >
              <MessageSquare className="w-5 h-5" />
              {secondaryButtonText}
            </Link>
          </div>

          {/* Contact Info */}
          {showContactInfo && (
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-white/80">
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                <a href="mailto:contact@srapsware.com" className="hover:text-white transition-colors">
                  contact@srapsware.com
                </a>
              </div>
              <div className="hidden sm:block w-px h-6 bg-white/30" />
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <a href="tel:+917982377273" className="hover:text-white transition-colors">
                  +91 79823 77273
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
