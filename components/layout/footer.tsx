import Link from 'next/link'
import { 
  Github, Twitter, Linkedin, Mail, Phone, MapPin,
  Facebook, Instagram, Youtube
} from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <img 
                src="/assets/img/logo.png" 
                alt="Srapsware" 
                className="h-8 dark:hidden"
              />
              <img 
                src="/assets/img/logo-light.png" 
                alt="Srapsware" 
                className="h-8 hidden dark:block"
              />
            </div>
            <p className="text-muted-foreground mb-6">
              15+ years of building cutting-edge software solutions for ambitious businesses worldwide.
            </p>
            <div className="flex gap-3">
              <a href="https://github.com" target="_blank" rel="noopener" className="w-10 h-10 rounded-lg bg-brand-50 dark:bg-brand-900/20 border border-brand/20 flex items-center justify-center hover:bg-brand hover:text-white hover:border-brand transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener" className="w-10 h-10 rounded-lg bg-brand-50 dark:bg-brand-900/20 border border-brand/20 flex items-center justify-center hover:bg-brand hover:text-white hover:border-brand transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener" className="w-10 h-10 rounded-lg bg-brand-50 dark:bg-brand-900/20 border border-brand/20 flex items-center justify-center hover:bg-brand hover:text-white hover:border-brand transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener" className="w-10 h-10 rounded-lg bg-brand-50 dark:bg-brand-900/20 border border-brand/20 flex items-center justify-center hover:bg-brand hover:text-white hover:border-brand transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-3">
              <li><Link href="/services/web-development" className="text-muted-foreground hover:text-brand transition-colors">Web Development</Link></li>
              <li><Link href="/services/mobile-development" className="text-muted-foreground hover:text-brand transition-colors">Mobile Apps</Link></li>
              <li><Link href="/services/cloud-devops" className="text-muted-foreground hover:text-brand transition-colors">Cloud & DevOps</Link></li>
              <li><Link href="/services/ai-ml" className="text-muted-foreground hover:text-brand transition-colors">AI & ML</Link></li>
              <li><Link href="/services/design" className="text-muted-foreground hover:text-brand transition-colors">UI/UX Design</Link></li>
              <li><Link href="/services" className="text-brand font-medium hover:text-brand-light">View All →</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-muted-foreground hover:text-brand transition-colors">About Us</Link></li>
              <li><Link href="/portfolio" className="text-muted-foreground hover:text-brand transition-colors">Portfolio</Link></li>
              <li><Link href="/blog" className="text-muted-foreground hover:text-brand transition-colors">Blog</Link></li>
              <li><Link href="/careers" className="text-muted-foreground hover:text-brand transition-colors">Careers</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-brand transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Get In Touch</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-muted-foreground">
                <Mail className="w-5 h-5 mt-0.5 shrink-0" />
                <a href="mailto:hello@srapsware.com" className="hover:text-brand transition-colors">
                  hello@srapsware.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <Phone className="w-5 h-5 mt-0.5 shrink-0" />
                <a href="tel:+1234567890" className="hover:text-brand transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 mt-0.5 shrink-0" />
                <span>123 Business St, Tech City, TC 12345</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Srapsware. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/privacy" className="text-muted-foreground hover:text-brand transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-muted-foreground hover:text-brand transition-colors">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-muted-foreground hover:text-brand transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
