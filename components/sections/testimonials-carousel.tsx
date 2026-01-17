'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { getCdnUrl } from '@/lib/utils'
import { Star, Quote, ChevronLeft, ChevronRight, BadgeCheck } from 'lucide-react'
import type { Testimonial } from '@/lib/content'

interface TestimonialsCarouselProps {
  testimonials: Testimonial[]
  autoplay?: boolean
  interval?: number
}

export function TestimonialsCarousel({ 
  testimonials, 
  autoplay = true, 
  interval = 5000 
}: TestimonialsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (!autoplay || testimonials.length <= 1) return

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, interval)

    return () => clearInterval(timer)
  }, [autoplay, interval, testimonials.length])

  const goToPrevious = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    )
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  if (testimonials.length === 0) {
    return (
      <div className="text-center py-12 text-muted-foreground">
        No testimonials available.
      </div>
    )
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <div className="relative">
      {/* Main Testimonial Card */}
      <div className="relative bg-card border border-border rounded-3xl p-8 md:p-12 shadow-lg testimonial-card">
        {/* Quote Icon */}
        <div className="absolute top-8 left-8 text-brand/10">
          <Quote className="w-16 h-16" />
        </div>

        <div className="relative z-10">
          {/* Rating */}
          <div className="flex gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-5 h-5 ${
                  i < currentTestimonial.rating
                    ? 'fill-yellow-400 text-yellow-400'
                    : 'text-muted-foreground'
                }`}
              />
            ))}
          </div>

          {/* Testimonial Text */}
          <blockquote className="text-lg md:text-xl text-foreground mb-8 leading-relaxed">
            "{currentTestimonial.content}"
          </blockquote>

          {/* Author Info */}
          <div className="flex items-center gap-4">
            {/* Avatar */}
            {currentTestimonial.avatar && (
              <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-border">
                <Image
                  src={getCdnUrl(currentTestimonial.avatar)}
                  alt={currentTestimonial.name}
                  fill
                  className="object-cover"
                />
              </div>
            )}

            {/* Name & Position */}
            <div className="flex-1">
              <div className="font-bold text-foreground flex items-center gap-2">
                {currentTestimonial.name}
                {currentTestimonial.verified && (
                  <BadgeCheck className="w-4 h-4 text-blue-500 flex-shrink-0" />
                )}
              </div>
              <div className="text-sm text-muted-foreground">
                {currentTestimonial.position}
                {currentTestimonial.company && (
                  <> at {currentTestimonial.company}</>
                )}
              </div>
              {currentTestimonial.country && (
                <div className="text-xs text-muted-foreground mt-1">
                  {currentTestimonial.country}
                </div>
              )}
            </div>

            {/* Company Logo */}
            {currentTestimonial.logo && (
              <div className="relative w-20 h-20 grayscale hover:grayscale-0 transition-all">
                <Image
                  src={getCdnUrl(currentTestimonial.logo)}
                  alt={currentTestimonial.company || 'Company'}
                  fill
                  className="object-contain"
                />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Navigation */}
      {testimonials.length > 1 && (
        <div className="flex items-center justify-center gap-4 mt-8">
          {/* Previous Button */}
          <button
            onClick={goToPrevious}
            className="w-12 h-12 rounded-full border border-border bg-background hover:bg-muted hover:border-brand transition-all flex items-center justify-center"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-brand w-8'
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={goToNext}
            className="w-12 h-12 rounded-full border border-border bg-background hover:bg-muted hover:border-brand transition-all flex items-center justify-center"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}
    </div>
  )
}
