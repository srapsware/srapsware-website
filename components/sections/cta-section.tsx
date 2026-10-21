import { site } from '@/config/site'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

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
  title = 'Good software starts with a conversation.',
  description = 'Tell us what you want to build, improve or solve. We’ll help you find a practical next step.',
  primaryButtonText = site.primaryCTA.label, primaryButtonLink = site.primaryCTA.href,
  secondaryButtonText = 'Explore our process', secondaryButtonLink = '/our-process', showContactInfo = true,
}: CTASectionProps) {
  return <section className="section-space border-t border-border bg-brand-soft/30">
    <div className="site-container grid items-end gap-8 lg:grid-cols-[1.5fr_1fr]">
      <div><p className="eyebrow">LET’S BUILD SOMETHING USEFUL</p><h2 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-5xl">{title}</h2><p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">{description}</p></div>
      <div className="flex flex-col items-start gap-5 lg:items-end">
        <Link href={primaryButtonLink} className="button-primary">{primaryButtonText}<ArrowUpRight size={18} /></Link>
        <Link href={secondaryButtonLink} className="text-sm font-medium">{secondaryButtonText} <span aria-hidden="true">↗</span></Link>
        {showContactInfo && <a href={`mailto:${site.email}`} className="text-sm text-muted-foreground">{site.email}</a>}
      </div>
    </div>
  </section>
}
