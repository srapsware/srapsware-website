import JourneyTimeline from '@/components/animations/journey-timeline/journey-timeline'
import { ProductBlueprint } from '@/components/animations/product-blueprint'
import { CTASection } from '@/components/sections/cta-section'
import { DeliveryProcess } from '@/components/sections/delivery-process'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { Metadata } from 'next'
import Link from 'next/link'
import './journey-timeline-styles.css'

export const metadata: Metadata = { title: 'About Srapsware - The people behind your next product', description: 'Meet the approach behind Srapsware: thoughtful design, practical engineering and a shared commitment to building useful software.', alternates: { canonical: '/about' } }
export default function AboutPage() {
  return <>
    <section className="home-hero"><div className="site-container">
      <Breadcrumb items={[{ label: 'About us' }]} />
      <div className="mt-12 grid items-center gap-10 lg:grid-cols-[1.15fr_1fr]"><div><p className="eyebrow">HELLO, WE’RE SRAPSWARE</p><h1 className="mt-6 text-[clamp(2.8rem,5.6vw,5.2rem)] font-semibold leading-[1.07] tracking-[-.05em]">Curious minds.<br />Careful craft.<br /><span className="text-brand">Useful software.</span></h1><p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground">We’re a software development company bringing design and engineering together to help businesses turn complex challenges into clear, usable products.</p></div><ProductBlueprint compact /></div>
    </div></section>
    <section className="section-space border-t border-border"><div className="site-container grid gap-10 md:grid-cols-2"><div><p className="eyebrow">HOW WE THINK</p><h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight md:text-5xl">Understand first.<br /><span className="text-muted-foreground">Build with intention.</span></h2></div><div className="space-y-5 text-lg leading-relaxed text-muted-foreground"><p>The best technical solution starts with the right questions. Who will use this? What needs to work better? What will make a meaningful difference?</p><p>We work with you to connect those answers to thoughtful interfaces, dependable systems and a practical delivery plan.</p><Link href="/portfolio" className="inline-block text-base font-semibold text-brand">Explore our work ↗</Link></div></div></section>
    <JourneyTimeline />
    <section className="section-space"><div className="site-container"><p className="eyebrow">WHAT YOU CAN EXPECT</p><div className="mt-8 grid gap-8 md:grid-cols-3">{[{title:'Clarity over complexity.',text:'Practical advice, clear priorities and decisions you can understand.'},{title:'Progress you can see.',text:'Regular reviews and working software keep everyone connected to the outcome.'},{title:'Care beyond launch.',text:'Maintainability, documentation and ongoing improvement are part of the conversation.'}].map((value,i)=><article key={value.title} className="border-t border-border pt-6"><span className="eyebrow">0{i+1}</span><h2 className="mt-6 text-2xl font-semibold tracking-tight">{value.title}</h2><p className="mt-4 leading-relaxed text-muted-foreground">{value.text}</p></article>)}</div></div></section>
    <DeliveryProcess /><CTASection />
  </>
}
