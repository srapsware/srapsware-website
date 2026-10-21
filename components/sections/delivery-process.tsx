import { deliverySteps } from '@/config/site'
import Link from 'next/link'
import { DeliveryReveal } from '@/components/animations/delivery-reveal'

export function DeliveryProcess() {
  return <section className="section-space border-t border-border">
    <div className="site-container">
      <div className="section-heading"><div><p className="eyebrow">FROM FIRST SKETCH TO WHAT’S NEXT</p><h2>A clear path.<br /><span className="text-muted-foreground">A shared destination.</span></h2></div><p>Stay close to the decisions that matter. Every stage ends with something you can review, use or build on.</p></div>
      <DeliveryReveal><ol className="delivery-grid">
        {deliverySteps.map(step => <li key={step.number}>
          <span className="delivery-number">{step.number}</span><h3 className="mt-7 text-xl font-semibold">{step.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
          <p className="mt-6 border-t border-border pt-4 text-xs font-medium">{step.output}</p>
        </li>)}
      </ol></DeliveryReveal>
      <Link href="/our-process" className="mt-10 inline-block text-sm font-semibold text-brand">See how we work together <span aria-hidden="true">↗</span></Link>
    </div>
  </section>
}
