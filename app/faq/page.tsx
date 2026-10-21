import { CTASection } from '@/components/sections/cta-section'
import { PageHero } from '@/components/sections/page-hero'
import Link from 'next/link'
const faqs = [
 {q:'What can Srapsware help us build?',a:'Our services cover web applications, mobile experiences, cloud infrastructure and connected business systems. We start by understanding your goals and agreeing on a suitable scope.'},
 {q:'How do you estimate cost and timing?',a:'Estimates depend on scope, integrations, existing systems and delivery constraints. After a discovery conversation, we can outline the work, assumptions and next steps. There is no single price or timeline for every project.'},
 {q:'Can you improve an existing application?',a:'Yes. A technical review can help identify what to retain, what to improve and how to stage changes. Share your current challenges without sending credentials or sensitive data.'},
 {q:'Will we be involved during delivery?',a:'We agree a review and communication process with you. Working increments and clear feedback help keep delivery aligned with your goals.'},
 {q:'What happens after launch?',a:'We discuss handover, documentation, maintenance and support as part of the engagement. Coverage and response expectations are agreed for your project.'},
 {q:'Can we request a call?',a:'Use the contact form and select Request a call. Your selected date and time are preferences; our team will follow up to confirm availability.'},
]
export const metadata = { title: 'Frequently Asked Questions | Srapsware', description: 'Practical answers about starting a software project and working with Srapsware.', alternates: {canonical:'/faq'} }
export default function FAQPage(){return <><PageHero badge="A FEW USEFUL ANSWERS" title="Before we get started." description="The details vary by project. Here is how we approach the first conversation."/><section className="section-space"><div className="site-container"><div className="mx-auto max-w-3xl">{faqs.map(item=><details key={item.q} className="border-b border-border py-6"><summary className="cursor-pointer text-lg font-semibold">{item.q}</summary><p className="mt-4 leading-relaxed text-muted-foreground">{item.a}</p></details>)}<Link href="/contact" className="button-primary mt-8">Ask another question ↗</Link></div></div></section><CTASection/></>}
