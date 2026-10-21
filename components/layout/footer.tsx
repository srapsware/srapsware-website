import { FooterWorkshop } from '@/components/animations/footer-workshop'
import { BrandSignature } from '@/components/ui/brand-signature'
import { NewsletterForm } from '@/components/ui/newsletter-form'
import { menuItems } from '@/config/menu'
import { site } from '@/config/site'
import { ArrowRight, ArrowUpRight, Facebook, Github, Instagram, Linkedin, Twitter } from 'lucide-react'
import Link from 'next/link'
import './footer.css'

const socialIcons = { LinkedIn: Linkedin, GitHub: Github, X: Twitter, Facebook, Instagram }

// Reuse the navigation catalogue, choosing category landing pages where available.
const footerGroups = ['Services', 'Solutions', 'About', 'Resources'].map(name => {
  const group = menuItems.find(item => item.name === name)!
  const categories = group.megaMenu?.categories ?? []
  const links = name === 'Services'
    ? categories.map(category => ({ name: category.category, href: category.items[0].href.split('/').slice(0, 3).join('/') }))
    : categories.flatMap(category => name === 'Solutions' ? category.items.slice(0, 2) : category.items)
  return { ...group, links: links.filter((item, index, items) => items.findIndex(other => other.href === item.href) === index) }
})

export function Footer() {
  const newsletterReady = Boolean(process.env.MAILCHIMP_API_KEY && process.env.MAILCHIMP_AUDIENCE_ID && process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY && process.env.TURNSTILE_SECRET_KEY)
  return <footer className="studio-footer" aria-label="Srapsware footer">
    <div className="footer-ambient" aria-hidden="true" />
    <div className="footer-shell">
      <div className="footer-invitation">
        <div className="footer-invitation-copy">
          <p className="footer-overline"><span aria-hidden="true">↳</span> YOUR NEXT CHAPTER</p>
          <h2>Have an idea?<br/><span>Let’s bake it.</span></h2>
          <p className="footer-intro">A spark of ambition. A team that cares.<br/>Let’s turn your next idea into software people love.</p>
          <Link href={site.primaryCTA.href} className="footer-project-link">Tell us what you’re imagining<span className="footer-arrow"><ArrowUpRight size={25}/></span></Link>
        </div>
        <FooterWorkshop />
      </div>

      <div className="footer-directory">
        <div className="footer-identity">
          <Link href="/" aria-label="Srapsware home" className="footer-logo"><img src="/assets/img/logo.png" alt="Srapsware" width="206" height="54" loading="lazy" /></Link>
          <BrandSignature />
          <p className="footer-brand-description">Thoughtful design. Dependable engineering.<br/>A little heart in every line of code.</p>
          <div className="footer-contact"><a href={`mailto:${site.email}`}>{site.email}<ArrowUpRight size={15}/></a><a href={`tel:${site.phone.replace(/\s/g, '')}`}>{site.phone}</a></div>
          <div className="footer-socials">{site.social.map(item => { const Icon = socialIcons[item.label]; return <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" aria-label={`${item.label} (opens in a new tab)`}><Icon size={18}/></a> })}</div>
        </div>
        <nav className="footer-navigation" aria-label="Footer navigation">
          {footerGroups.map((group, index) => <div key={group.name} className="footer-link-group"><h3><span aria-hidden="true">0{index + 1}</span>{group.name === 'About' ? 'Company' : group.name}</h3><ul>{group.links.map(item => <li key={item.href}><Link href={item.href}>{item.name}</Link></li>)}</ul><Link href={group.href} className="footer-all-link">{group.name === 'About' ? 'About Srapsware' : `All ${group.name.toLowerCase()}`}<ArrowRight size={13}/></Link></div>)}
        </nav>
      </div>

      <div className="footer-notes">
        <div><p className="footer-overline">FRESH FROM THE STUDIO</p><h3>Good ideas are worth sharing.</h3><p>Engineering insights, useful guides, and things we learn along the way.</p></div>
        <div className="footer-notes-action">{newsletterReady ? <NewsletterForm/> : <><Link href="/blog">Read our journal<ArrowUpRight size={18}/></Link><Link href="/resources/guides">Explore the guides<ArrowUpRight size={18}/></Link></>}</div>
      </div>
      <div className="footer-colophon"><p>© {new Date().getFullYear()} {site.legalName}</p><nav aria-label="Legal"><Link href="/privacy-policy">Privacy</Link><Link href="/terms-conditions">Terms</Link><Link href="/cancellation-refund-policies">Cancellation & Refund</Link><Link href="/sitemap.xml">Sitemap</Link></nav><a href="#main-content" className="footer-top">Back to top ↑</a></div>
    </div>
  </footer>
}
