import { ExpertiseScene } from '@/components/animations/expertise-scene'
import { Markdown } from '@/components/content/markdown'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { getProduct,getProductDocuments,inquiryLink } from '@/lib/page-content'
import { site } from '@/config/site'
import { CTASection } from '@/components/sections/cta-section'
import { RelatedWork } from '@/components/sections/related-work'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

export function productMetadata(slug:string,kind?:string):Metadata {
  const product=getProduct(slug),doc=kind?getProductDocuments().find(d=>d.product===slug&&d.kind===kind):undefined
  if(!product||(kind&&!doc))return {title:'Product not found'}
  const title=doc?.title||product.title,description=doc?.description||product.description,url=`/product/${slug}${kind?`/${kind}`:''}`
  return {title:`${title} | Srapsware`,description,alternates:{canonical:url},openGraph:{title,description,url,images:[`/product/${slug}/opengraph-image`]}}
}
function ProductNav({slug,active}:{slug:string;active:string}) {
  const links=[{label:'Overview',href:`/product/${slug}`,key:'overview'},...getProductDocuments().filter(doc=>doc.product===slug).map(doc=>({label:doc.kind==='privacy'?'Privacy policy':doc.kind==='terms'?'Terms of use':doc.kind==='data-deletion'?'Data deletion':'Support',href:`/product/${slug}/${doc.kind}`,key:doc.kind}))]
  return <nav aria-label="Product sections" className="sticky top-[80px] z-20 border-y border-border bg-background/95 backdrop-blur"><div className="site-container flex gap-2 overflow-x-auto">{links.map(link=><Link key={link.href} href={link.href} aria-current={active===link.key?'page':undefined} className={`shrink-0 border-b-2 px-4 py-4 text-sm font-medium ${active===link.key?'border-primary text-primary':'border-transparent text-muted-foreground hover:text-foreground'}`}>{link.label}</Link>)}</div></nav>
}
export function ProductPage({slug}:{slug:string}) {
  const product=getProduct(slug)
  if(!product)notFound()
  const primary=product.storeUrl||product.website
  const schema={'@context':'https://schema.org','@type':'SoftwareApplication',name:product.title,description:product.description,operatingSystem:product.platform,url:`${site.url}/product/${slug}`,applicationCategory:'DeveloperApplication',...(product.license?{license:product.license}:{}),...(product.pricingModel.toLowerCase().includes('free')?{offers:{'@type':'Offer',price:0,priceCurrency:'USD'}}:{})}
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema).replace(/</g,'\\u003c')}}/>
    <section className="home-hero"><div className="site-container"><Breadcrumb items={[{label:'Products',href:'/products'},{label:product.title}]}/><div className="mt-10 grid items-center gap-12 lg:grid-cols-[1.05fr_1fr]"><div><p className="eyebrow">BUILT IN OUR STUDIO / {product.platform}</p><h1 className="mt-6 text-5xl font-semibold tracking-[-.05em] md:text-7xl">{product.title}</h1><p className="mt-6 text-lg leading-relaxed text-muted-foreground">{product.description}</p><div className="mt-6 flex flex-wrap gap-2">{[product.status,product.pricingModel,product.license].filter(Boolean).map(label=><span key={label} className="rounded-full border border-border bg-card px-3 py-2 text-xs">{label}</span>)}</div><div className="mt-8 flex flex-wrap items-center gap-6">{primary?<a href={primary} className="button-primary">{product.storeUrl?'Get the app':'Explore the product'} ↗</a>:<p className="rounded-xl border border-border bg-card px-5 py-4 text-sm">Public download coming later.</p>}{product.repository&&<a href={product.repository} className="font-medium text-brand">View source ↗</a>}</div></div><ExpertiseScene kind={product.scene}/></div></div></section>
    <ProductNav slug={slug} active="overview"/>
    <section className="section-space"><div className="site-container"><div className="section-heading"><div><p className="eyebrow">MADE TO BE USEFUL</p><h2>A little closer to the product.</h2></div></div><div className="grid gap-8 md:grid-cols-3">{product.features.map((feature,index)=><article key={feature.title} className="border-t border-border pt-6"><p className="eyebrow">0{index+1}</p><h3 className="mt-5 text-xl font-semibold">{feature.title}</h3><p className="mt-4 leading-relaxed text-muted-foreground">{feature.description}</p></article>)}</div></div></section>
    {!!product.screenshots?.length&&<section className="section-space border-y border-border bg-card"><div className="site-container"><h2 className="mb-8 text-3xl font-semibold">Inside {product.title}</h2><div className="grid gap-8">{product.screenshots.map(image=><figure key={image.image}><img src={image.image} alt={image.alt} width="1440" height="900" loading="lazy" className="h-auto w-full rounded-2xl border border-border"/>{image.caption&&<figcaption className="mt-3 text-sm text-muted-foreground">{image.caption}</figcaption>}</figure>)}</div></div></section>}
    <section className="section-space border-t border-border"><div className="site-container grid gap-12 md:grid-cols-[1.5fr_1fr]"><Markdown>{product.content}</Markdown><aside className="h-fit rounded-2xl border border-border bg-card p-7"><h2 className="text-xl font-semibold">Explore & get help</h2><div className="mt-6 flex flex-col items-start gap-5">{product.docsUrl&&<a href={product.docsUrl} className="text-brand">Product documentation ↗</a>}{product.website&&<a href={product.website} className="text-brand">Official product website ↗</a>}<Link href={inquiryLink({product:product.title,source:`/product/${slug}`},'support')} className="text-brand">Ask a product question ↗</Link></div></aside></div></section>
    <RelatedWork slugs={product.relatedProjects} technologies={product.technologies} title="Explore related engineering work."/>
    <CTASection title="Have a product idea of your own?" description="Bring us the workflow you want to improve. We can help shape the experience, engineering and delivery around it." primaryButtonText="Discuss your product" primaryButtonLink={inquiryLink({product:product.title,source:`/product/${slug}`})}/>
  </>
}
export function ProductDocumentPage({slug,kind}:{slug:string;kind:string}) {
  const product=getProduct(slug),doc=getProductDocuments().find(item=>item.product===slug&&item.kind===kind)
  if(!product||!doc)notFound()
  return <><section className="home-hero"><div className="site-container"><Breadcrumb items={[{label:'Products',href:'/products'},{label:product.title,href:`/product/${slug}`},{label:doc.title}]}/><p className="eyebrow mt-8">{product.title}</p><h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-tight md:text-6xl">{doc.title}</h1><p className="mt-5 max-w-2xl text-lg text-muted-foreground">{doc.description}</p>{doc.effectiveDate&&<p className="mt-5 text-sm text-muted-foreground">Last updated: {doc.effectiveDate}</p>}</div></section><ProductNav slug={slug} active={kind}/><section className="section-space"><div className="site-container"><div className="mx-auto max-w-3xl"><Markdown>{doc.content}</Markdown><div className="mt-12 border-t border-border pt-6"><Link href={inquiryLink({product:product.title,source:`/product/${slug}/${kind}`},'support')} className="text-brand">Contact us about {product.title} ↗</Link></div></div></div></section></>
}
