import { ReactNode } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Breadcrumb } from '@/components/ui/breadcrumb'

interface PageHeroProps {
  badge?: string
  title: string | ReactNode
  description?: string
  ctaPrimary?: {
    text: string
    href: string
  }
  ctaSecondary?: {
    text: string
    href: string
  }
  breadcrumbItems?: Array<{ label: string; href?: string }>
  children?: ReactNode
  className?: string
}

export function PageHero({
  badge,
  title,
  description,
  ctaPrimary,
  ctaSecondary,
  breadcrumbItems,
  children,
  className = ''
}: PageHeroProps) {
  return (
    <section className={`relative w-full py-20 md:py-32 overflow-hidden ${className}`}>
      {/* Gradient Mesh Background (Vercel Style) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full blur-3xl opacity-20 animate-pulse" />
        <div 
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-pink-400 to-orange-600 rounded-full blur-3xl opacity-20 animate-pulse"
          style={{ animationDelay: '1s' }}
        />
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full blur-3xl opacity-10 animate-pulse"
          style={{ animationDelay: '2s' }}
        />
      </div>

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(71, 128, 199, 0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(71, 128, 199, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="container mx-auto px-3 sm:px-4 max-w-[1400px] relative z-10">
        {/* Breadcrumb */}
        {breadcrumbItems && <Breadcrumb items={breadcrumbItems} />}
        {!breadcrumbItems && <Breadcrumb />}

        {/* Content */}
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          {badge && (
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand/10 border border-brand/20 text-brand text-sm font-medium mb-6 animate-fade-in">
              <div className="w-2 h-2 rounded-full bg-brand animate-pulse" />
              {badge}
            </div>
          )}

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight animate-fade-in-up">
            {typeof title === 'string' ? (
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                {title}
              </span>
            ) : (
              title
            )}
          </h1>

          {/* Description */}
          {description && (
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in-up animation-delay-200">
              {description}
            </p>
          )}

          {/* CTAs */}
          {(ctaPrimary || ctaSecondary) && (
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-400">
              {ctaPrimary && (
                <Link
                  href={ctaPrimary.href}
                  className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:shadow-xl hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300"
                >
                  {ctaPrimary.text}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              )}
              {ctaSecondary && (
                <Link
                  href={ctaSecondary.href}
                  className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl border-2 border-border hover:border-brand bg-card hover:bg-brand/5 font-semibold transition-all duration-300"
                >
                  {ctaSecondary.text}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              )}
            </div>
          )}

          {/* Custom Children */}
          {children && (
            <div className="mt-12 animate-fade-in-up animation-delay-600">
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
