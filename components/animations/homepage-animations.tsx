'use client'

import { useEffect } from 'react'
import { gsap } from '@/lib/animations/gsap-setup'

// Homepage animation orchestrator
export function HomepageAnimations() {
  useEffect(() => {
    // Kill any existing animations
    gsap.killTweensOf('*')

    // Helper to check if element exists
    const elementExists = (selector: string) => {
      return document.querySelector(selector) !== null
    }

    // Hero Section Animations
    const heroTimeline = gsap.timeline()

    // Badge animation
    if (elementExists('.hero-badge')) {
      heroTimeline.fromTo(
        '.hero-badge',
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }
      )
    }

    // Headline animation with stagger
    if (elementExists('.hero-headline .highlight')) {
      heroTimeline.fromTo(
        '.hero-headline .highlight',
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
        '-=0.3'
      )
    }

    if (elementExists('.hero-headline span:not(.highlight)')) {
      heroTimeline.fromTo(
        '.hero-headline span:not(.highlight)',
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
        '-=0.5'
      )
    }

    // Subheadline animation
    if (elementExists('.hero-subheadline')) {
      heroTimeline.fromTo(
        '.hero-subheadline',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
        '-=0.4'
      )
    }

    // CTA buttons with stagger
    if (elementExists('.hero-cta-primary')) {
      heroTimeline.fromTo(
        '.hero-cta-primary',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' },
        '-=0.3'
      )
    }

    if (elementExists('.hero-cta-secondary')) {
      heroTimeline.fromTo(
        '.hero-cta-secondary',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' },
        '-=0.2'
      )
    }

    // Stats cards with stagger
    if (elementExists('.stats-card')) {
      heroTimeline.fromTo(
        '.stats-card',
      { opacity: 0, y: 40, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        ease: 'back.out(1.7)',
        stagger: 0.1
      },
      '-=0.5'
      )
    }

    // Client Logos Section
    if (elementExists('.client-logo')) {
      gsap.fromTo(
        '.client-logo',
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: 'power2.out',
        stagger: 0.1,
        scrollTrigger: {
          trigger: '.client-logos-section',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
      )
    }

    // Services Section
    if (elementExists('.service-card')) {
      gsap.fromTo(
        '.service-card',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.services-section',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
      )
    }

    // Portfolio Section
    if (elementExists('.portfolio-title')) {
      gsap.fromTo(
        '.portfolio-title',
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.portfolio-section',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
      )
    }

    if (elementExists('.portfolio-card')) {
      gsap.fromTo(
        '.portfolio-card',
      { opacity: 0, y: 50, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: 'power2.out',
        stagger: 0.1,
        scrollTrigger: {
          trigger: '.portfolio-section',
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
      }
      )
    }

    // Video Section
    if (elementExists('.video-thumbnail')) {
      gsap.fromTo(
        '.video-thumbnail',
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.video-section',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
      )
    }

    // Testimonials Section
    if (elementExists('.testimonials-title')) {
      gsap.fromTo(
        '.testimonials-title',
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.testimonials-section',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
      )
    }

    if (elementExists('.testimonial-card')) {
      gsap.fromTo(
        '.testimonial-card',
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.testimonials-section',
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
      }
      )
    }

    // Blog Section
    if (elementExists('.blog-title')) {
      gsap.fromTo(
        '.blog-title',
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.blog-section',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
      )
    }

    if (elementExists('.blog-card')) {
      gsap.fromTo(
        '.blog-card',
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
        stagger: 0.15,
        scrollTrigger: {
          trigger: '.blog-section',
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
      }
      )
    }

    // CTA Section
    if (elementExists('.cta-title')) {
      gsap.fromTo(
        '.cta-title',
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.cta-section',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
      )
    }

    if (elementExists('.cta-description')) {
      gsap.fromTo(
        '.cta-description',
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power2.out',
        delay: 0.2,
        scrollTrigger: {
          trigger: '.cta-section',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
      )
    }

    if (elementExists('.cta-buttons')) {
      gsap.fromTo(
        '.cta-buttons',
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
          delay: 0.4,
          scrollTrigger: {
            trigger: '.cta-section',
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    }

    // Floating background elements (if any)
    if (elementExists('.floating-element')) {
      gsap.to('.floating-element', {
        y: 'random(-20, 20)',
        x: 'random(-10, 10)',
        rotation: 'random(-5, 5)',
        duration: 'random(3, 6)',
        ease: 'none',
        repeat: -1,
        yoyo: true,
        stagger: 0.5,
      })
    }

  }, [])

  return null
}