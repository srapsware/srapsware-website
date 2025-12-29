import Link from 'next/link'
import { ArrowRight, Mail, Phone, MessageSquare } from 'lucide-react'

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
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand via-brand-dark to-background opacity-95" />
      
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent-primary rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Title */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            {title}
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            {description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
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
