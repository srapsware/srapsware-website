import { CTASection } from '@/components/sections/cta-section'
import { PageHero } from '@/components/sections/page-hero'
import { Markdown } from '@/components/content/markdown'
import { getFAQs } from '@/lib/page-content'
import Link from 'next/link'
export const metadata={title:'Frequently Asked Questions | Srapsware',description:'Practical answers about starting a software project and working with Srapsware.',alternates:{canonical:'/faq'}}
export default function FAQPage(){const faqs=getFAQs();const categories=[...new Set(faqs.map(f=>f.category||'General'))];return <><PageHero badge="A FEW USEFUL ANSWERS" title="Before we get started." description="The details vary by project. Here is how we approach the first conversation."/><section className="section-space"><div className="site-container"><div className="mx-auto max-w-3xl">{categories.map(category=><section key={category} className="mb-12"><h2 className="mb-5 text-2xl font-semibold">{category}</h2>{faqs.filter(f=>(f.category||'General')===category).map(faq=><details key={faq.slug} className="border-b border-border py-6"><summary className="cursor-pointer text-lg font-medium">{faq.question}</summary><div className="mt-4"><Markdown>{faq.answer}</Markdown></div></details>)}</section>)}<Link href="/contact" className="button-primary mt-8">Ask another question ↗</Link></div></div></section><CTASection/></>}
