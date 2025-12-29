import { useRef, useEffect } from 'react'
import { gsap, ScrollTrigger, useGSAP } from './gsap-setup'

// Hook for scroll-triggered animations
export function useScrollTrigger(
  trigger: string | HTMLElement,
  animation: gsap.TweenVars,
  options: {
    start?: string
    end?: string
    scrub?: boolean | number
    pin?: boolean
    markers?: boolean
  } = {}
) {
  const elementRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    const element = typeof trigger === 'string' ? trigger : elementRef.current
    if (!element) return

    gsap.fromTo(
      element,
      { ...animation },
      {
        ...animation,
        scrollTrigger: {
          trigger: element,
          start: options.start || 'top 80%',
          end: options.end || 'bottom 20%',
          scrub: options.scrub || false,
          pin: options.pin || false,
          markers: options.markers || false,
        },
      }
    )
  }, [])

  return elementRef
}

// Hook for parallax effects
export function useParallax(speed: number = 0.5) {
  const elementRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    if (!elementRef.current) return

    gsap.to(elementRef.current, {
      yPercent: -speed * 100,
      ease: 'none',
      scrollTrigger: {
        trigger: elementRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    })
  }, [])

  return elementRef
}

// Hook for text reveal animations
export function useTextReveal() {
  const textRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    if (!textRef.current) return

    const text = textRef.current
    const words = text.textContent?.split(' ') || []

    // Clear original text
    text.innerHTML = ''

    // Create spans for each word
    words.forEach((word, index) => {
      const span = document.createElement('span')
      span.textContent = word + ' '
      span.style.display = 'inline-block'
      span.style.opacity = '0'
      span.style.transform = 'translateY(20px)'
      text.appendChild(span)

      // Animate each word
      gsap.to(span, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: index * 0.1,
        ease: 'power2.out',
      })
    })
  }, [])

  return textRef
}

// Hook for counter animations
export function useCounter(endValue: number, duration: number = 2) {
  const counterRef = useRef<HTMLSpanElement>(null)

  useGSAP(() => {
    if (!counterRef.current) return

    const counter = { value: 0 }

    gsap.to(counter, {
      value: endValue,
      duration: duration,
      ease: 'power2.out',
      onUpdate: () => {
        if (counterRef.current) {
          counterRef.current.textContent = Math.floor(counter.value).toLocaleString()
        }
      },
    })
  }, [endValue, duration])

  return counterRef
}

// Hook for hover animations
export function useHoverAnimation(
  scale: number = 1.05,
  duration: number = 0.3
) {
  const elementRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const handleMouseEnter = () => {
      gsap.to(element, {
        scale,
        duration,
        ease: 'power2.out',
      })
    }

    const handleMouseLeave = () => {
      gsap.to(element, {
        scale: 1,
        duration,
        ease: 'power2.out',
      })
    }

    element.addEventListener('mouseenter', handleMouseEnter)
    element.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      element.removeEventListener('mouseenter', handleMouseEnter)
      element.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [scale, duration])

  return elementRef
}

// Hook for stagger animations
export function useStaggerAnimation(
  selector: string,
  animation: gsap.TweenVars = { opacity: 0, y: 30 },
  stagger: number = 0.1
) {
  const containerRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    gsap.fromTo(
      containerRef.current.querySelectorAll(selector),
      animation,
      {
        ...animation,
        stagger,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    )
  }, [selector, stagger])

  return containerRef
}