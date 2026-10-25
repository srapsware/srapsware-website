import { completeMetadata } from '@/lib/seo'
import { DynamicContactForm } from '@/components/contact/dynamic-contact-form'
import { site } from '@/config/site'
import { Metadata } from 'next'
import Link from 'next/link'
export const metadata: Metadata = completeMetadata({ title: 'Contact Srapsware - Discuss your next project', description: 'Tell us about your software project, request a conversation or reach our team for support.', alternates: { canonical: '/contact' } })
export default function ContactPage() {
  return <section className="section-space"><div className="site-container grid items-start gap-12 lg:grid-cols-[.8fr_1.2fr]">
    <div className="lg:sticky lg:top-32"><p className="eyebrow">START A CONVERSATION</p><h1 className="mt-6 text-5xl font-semibold leading-tight tracking-tight md:text-6xl">Your next chapter<br /><span className="text-brand">starts here.</span></h1><p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">A new product, a difficult integration, or an idea you want to explore. Tell us where you are and where you’d like to go.</p><a className="mt-8 inline-block text-lg font-medium text-brand" href={`mailto:${site.email}`}>{site.email} ↗</a><div className="mt-12 space-y-5 border-t border-border pt-7"><h2 className="font-semibold">What happens next?</h2><ol className="space-y-4 text-sm leading-relaxed text-muted-foreground"><li>01 · We review your goals and project context.</li><li>02 · We follow up with questions or arrange a conversation.</li><li>03 · Together, we agree on a practical next step.</li></ol><Link href="/our-process" className="inline-block text-sm font-medium">Explore our process ↗</Link></div></div>
    <DynamicContactForm />
  </div></section>
}
