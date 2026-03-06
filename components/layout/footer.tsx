'use client'

import Link from 'next/link'
import { getCdnUrl } from '@/lib/utils'
import { 
  Github, Twitter, Linkedin, Mail, Phone, MapPin,
  Facebook, Instagram, Youtube, Heart, Lock, Cloud, Zap, Send
} from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { gsap } from '@/lib/animations/gsap-setup'
import { NewsletterForm } from '@/components/ui/newsletter-form'

interface Position {
  left: string
  top: string
  size?: number
  opacity?: number
  gridSize?: number
  pattern?: string
}

interface MeshPattern {
  gridSize: number
  color: string
  opacity: number
}

export function Footer() {
  const glowRef = useRef<HTMLDivElement>(null)
  const [meshPositions, setMeshPositions] = useState<Position[]>([])
  const [codePositions, setCodePositions] = useState<Position[]>([])
  
  // Expanded code snippets library
  const codeSnippets = [
    'const', 'let', 'var', 'function', 'async', 'await', 'return',
    '{ }', '[ ]', '( )', '< >', '< />', 
    '=>', '...', '||', '&&', '??', '!',
    'import', 'export', 'class', 'interface', 'type',
    'if', 'else', 'for', 'while', 'switch',
    '===', '!==', '>=', '<=', '+=',
    'try', 'catch', 'throw', 'new', 'this',
  ]

  // Different mesh patterns (darker colors for light mode visibility)
  const meshPatterns: MeshPattern[] = [
    { gridSize: 8, color: 'rgba(30, 64, 175, 0.35)', opacity: 0.2 },      // Dark blue
    { gridSize: 12, color: 'rgba(67, 56, 202, 0.35)', opacity: 0.18 },    // Dark indigo
    { gridSize: 15, color: 'rgba(7, 89, 133, 0.4)', opacity: 0.22 },      // Dark sky
    { gridSize: 10, color: 'rgba(3, 105, 161, 0.4)', opacity: 0.24 },     // Dark cyan
    { gridSize: 20, color: 'rgba(30, 58, 138, 0.35)', opacity: 0.19 },    // Deep blue
    { gridSize: 6, color: 'rgba(8, 145, 178, 0.45)', opacity: 0.25 },     // Rich cyan
  ]

  // Generate random positions with varied patterns
  const generatePositions = (count: number, withSize = false) => {
    return Array.from({ length: count }, () => {
      const pattern = meshPatterns[Math.floor(Math.random() * meshPatterns.length)]
      return {
        left: `${Math.random() * 90 + 5}%`,
        top: `${Math.random() * 80 + 10}%`,
        ...(withSize && {
          size: Math.floor(Math.random() * 50 + 70), // 70-120px
          opacity: pattern.opacity,
          gridSize: pattern.gridSize,
          pattern: `linear-gradient(${pattern.color} 1px, transparent 1px), linear-gradient(90deg, ${pattern.color} 1px, transparent 1px)`
        })
      }
    })
  }

  useEffect(() => {
    // Initial positions
    setMeshPositions(generatePositions(8, true))
    setCodePositions(generatePositions(15))

    // Change positions every 8 seconds
    const interval = setInterval(() => {
      setMeshPositions(generatePositions(8, true))
      setCodePositions(generatePositions(15))
    }, 8000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (!glowRef.current) return

    // Ultra-subtle motion - barely noticeable
    gsap.to(glowRef.current, {
      y: 20,
      scale: 1.05,
      duration: 18,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    })
  }, [])

  return (
    <footer className="relative border-t border-border overflow-hidden max-w-[100vw] w-full">
      {/* 1. Base Premium Gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-[#020617] dark:via-[#071A2F] dark:to-[#020617]" />

      {/* 2. Soft Edge Glow - Luxury Touch */}
      <div 
        ref={glowRef}
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[min(600px,90vw)] h-[300px] bg-sky-400/20 dark:bg-cyan-400/15 rounded-full blur-3xl pointer-events-none"
      />

      {/* 3. Ultra-Soft Noise (Premium Feel) */}
      <div 
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.02] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '128px 128px'
        }}
      />

      {/* 4. Random Small Mesh Grids (Positions & Patterns Change) */}
      {meshPositions.map((mesh, i) => (
        <div
          key={i}
          className="absolute pointer-events-none transition-all duration-[3000ms] ease-in-out"
          style={{
            left: mesh.left,
            top: mesh.top,
            width: `${mesh.size}px`,
            height: `${mesh.size}px`,
            opacity: mesh.opacity,
            backgroundImage: mesh.pattern,
            backgroundSize: `${mesh.gridSize}px ${mesh.gridSize}px`,
          }}
        />
      ))}

      {/* 5. Floating Code Snippets (Random Selection Each Time) */}
      {codePositions.map((pos, i) => {
        const randomSnippet = codeSnippets[Math.floor(Math.random() * codeSnippets.length)]
        return (
          <div
            key={i}
            className="absolute pointer-events-none opacity-[0.15] dark:opacity-[0.08] font-mono text-sm text-brand transition-all duration-[3000ms] ease-in-out"
            style={{
              left: pos.left,
              top: pos.top,
            }}
          >
            {randomSnippet}
          </div>
        )
      })}
      
      <div className="container mx-auto px-3 sm:px-4 py-12 sm:py-16 relative z-10 max-w-[1400px]">
        {/* Top Brand Section */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="mb-6">
            <img 
              src={getCdnUrl("/assets/img/logo.png")}
              alt="Srapsware" 
              className="h-12 mx-auto dark:hidden"
            />
            <img 
              src={getCdnUrl("/assets/img/logo-light.png")}
              alt="Srapsware" 
              className="h-12 mx-auto hidden dark:block"
            />
          </div>
          
          <h3 className="text-2xl font-bold mb-3 flex items-center justify-center gap-2 flex-wrap">
            <span>15 Years of code baking</span>
            
            {/* Animated Heart (emoji) with ECG line */}
            <span className="inline-flex items-center gap-2" style={{ background: 'none', border: 'none', padding: 0 }}>
              <span
                className="heartbeat-text"
                aria-label="heart"
                style={{
                  display: 'inline-block',
                  lineHeight: 1,
                  filter: 'drop-shadow(0 0 6px rgba(239, 68, 68, 0.45))',
                  background: 'none',
                  border: 'none',
                  padding: 0,
                }}
              >
                ❤️
              </span>

              {/* ECG Line Animation */}
              <svg 
                width="50" 
                height="24" 
                viewBox="0 0 50 24" 
                className="ecg-animation"
                xmlns="http://www.w3.org/2000/svg"
                style={{ 
                  background: 'none',
                  border: 'none',
                  boxShadow: 'none',
                  padding: 0,
                  display: 'block'
                }}
              >
                <path
                  d="M0,12 L8,12 L10,6 L12,18 L14,9 L16,15 L18,12 L50,12"
                  stroke="#ef4444"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </h3>

          {/* CSS Animations */}
          <style jsx>{`
            @keyframes heartbeat {
              0%, 100% {
                transform: scale(1);
              }
              10% {
                transform: scale(1.15);
              }
              20% {
                transform: scale(1);
              }
              30% {
                transform: scale(1.15);
              }
              40%, 100% {
                transform: scale(1);
              }
            }

            @keyframes ecg-flow {
              0% {
                stroke-dasharray: 0 100;
                opacity: 0.3;
              }
              50% {
                stroke-dasharray: 50 50;
                opacity: 1;
              }
              100% {
                stroke-dasharray: 100 0;
                opacity: 0.3;
              }
            }

            .heartbeat-text {
              animation: heartbeat 1.5s ease-in-out infinite;
            }

            .ecg-animation path {
              stroke-dasharray: 100;
              animation: ecg-flow 2s ease-in-out infinite;
            }

            /* Force remove any background/border that might be applied */
            .heartbeat-text, .ecg-animation {
              background: none !important;
              border: none !important;
              box-shadow: none !important;
              outline: none !important;
            }
          `}</style>
          
          <div className="flex items-center justify-center gap-2 text-lg text-muted-foreground mb-2">
            <span>Made in India</span>
            <svg className="inline-block" width="28" height="19" viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg">
              <rect width="30" height="20" fill="#fff"/>
              <rect width="30" height="6.67" fill="#FF9933"/>
              <rect y="13.33" width="30" height="6.67" fill="#138808"/>
              <circle cx="15" cy="10" r="3.5" fill="none" stroke="#000080" strokeWidth="0.5"/>
              <g transform="translate(15, 10)">
                {[...Array(24)].map((_, i) => (
                  <line
                    key={i}
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="-3"
                    stroke="#000080"
                    strokeWidth="0.35"
                    transform={`rotate(${i * 15})`}
                  />
                ))}
              </g>
            </svg>
          </div>
          
          <p className="text-muted-foreground mb-6">Since 2010</p>
          
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Crafting exceptional digital experiences with cutting-edge technology. 
            We transform ideas into powerful software solutions.
          </p>
          
          <div className="flex gap-3 justify-center">
            <a href="https://linkedin.com/company/srapsware" target="_blank" rel="noopener" className="w-10 h-10 rounded-lg bg-brand-soft border border-brand/20 flex items-center justify-center hover:bg-brand hover:text-white hover:border-brand transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://twitter.com/srapsware" target="_blank" rel="noopener" className="w-10 h-10 rounded-lg bg-brand-soft border border-brand/20 flex items-center justify-center hover:bg-brand hover:text-white hover:border-brand transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="https://facebook.com/srapsware" target="_blank" rel="noopener" className="w-10 h-10 rounded-lg bg-brand-soft border border-brand/20 flex items-center justify-center hover:bg-brand hover:text-white hover:border-brand transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="https://instagram.com/srapsware" target="_blank" rel="noopener" className="w-10 h-10 rounded-lg bg-brand-soft border border-brand/20 flex items-center justify-center hover:bg-brand hover:text-white hover:border-brand transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://github.com/srapsware" target="_blank" rel="noopener" className="w-10 h-10 rounded-lg bg-brand-soft border border-brand/20 flex items-center justify-center hover:bg-brand hover:text-white hover:border-brand transition-colors">
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* 4 Column Links Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 pb-12 border-b border-border">
          {/* Column 1: Services */}
          <div>
            <h4 className="font-bold text-lg mb-4 uppercase tracking-wide">Services</h4>
            <ul className="space-y-3">
              <li><Link href="/services/web-development/frontend" className="text-muted-foreground hover:text-brand transition-colors">Frontend Development</Link></li>
              <li><Link href="/services/mobile-development/ios" className="text-muted-foreground hover:text-brand transition-colors">iOS Development</Link></li>
              <li><Link href="/services/ecommerce-development/woocommerce" className="text-muted-foreground hover:text-brand transition-colors">WooCommerce</Link></li>
              <li><Link href="/services/cloud-devops/cloud" className="text-muted-foreground hover:text-brand transition-colors">Cloud Solutions</Link></li>
              <li><Link href="/services" className="text-brand font-medium hover:text-brand/80 transition-colors">→ View All Services</Link></li>
            </ul>
          </div>

          {/* Column 2: Solutions */}
          <div>
            <h4 className="font-bold text-lg mb-4 uppercase tracking-wide">Solutions</h4>
            <ul className="space-y-3">
              <li><Link href="/solutions/by-industry/ecommerce" className="text-muted-foreground hover:text-brand transition-colors">E-Commerce Solutions</Link></li>
              <li><Link href="/solutions/by-technology/saas" className="text-muted-foreground hover:text-brand transition-colors">SaaS Development</Link></li>
              <li><Link href="/solutions/digital-transformation/automation" className="text-muted-foreground hover:text-brand transition-colors">Business Automation</Link></li>
              <li><Link href="/solutions/support-maintenance/maintenance" className="text-muted-foreground hover:text-brand transition-colors">Maintenance Packages</Link></li>
              <li><Link href="/solutions" className="text-brand font-medium hover:text-brand/80 transition-colors">→ View All Solutions</Link></li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="font-bold text-lg mb-4 uppercase tracking-wide">Company</h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-muted-foreground hover:text-brand transition-colors">About Us</Link></li>
              <li><Link href="/careers" className="text-muted-foreground hover:text-brand transition-colors">Careers</Link></li>
              <li><Link href="/our-process" className="text-muted-foreground hover:text-brand transition-colors">Our Process</Link></li>
              <li><Link href="/portfolio" className="text-muted-foreground hover:text-brand transition-colors">Portfolio</Link></li>
              <li><Link href="/testimonials" className="text-muted-foreground hover:text-brand transition-colors">Testimonials</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-brand transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 4: Resources */}
          <div>
            <h4 className="font-bold text-lg mb-4 uppercase tracking-wide">Resources</h4>
            <ul className="space-y-3">
              <li><Link href="/blog" className="text-muted-foreground hover:text-brand transition-colors">Blog</Link></li>
              <li><Link href="/resources/case-studies" className="text-muted-foreground hover:text-brand transition-colors">Case Studies</Link></li>
              <li><Link href="/faq" className="text-muted-foreground hover:text-brand transition-colors">FAQ</Link></li>
              <li><Link href="/docs" className="text-muted-foreground hover:text-brand transition-colors">Documentation</Link></li>
              <li><Link href="/resources/guides" className="text-muted-foreground hover:text-brand transition-colors">Guides</Link></li>
              <li><Link href="/resources" className="text-brand font-medium hover:text-brand/80 transition-colors">→ View All Resources</Link></li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mb-12 pb-12 border-b border-border">
          <div className="max-w-2xl mx-auto text-center">
            <h4 className="text-xl font-bold mb-3 flex items-center justify-center gap-2">
              <Send className="w-6 h-6 text-brand" />
              Stay Updated with Tech Insights
            </h4>
            <p className="text-muted-foreground mb-6">
              Get the latest trends, tips, and updates delivered to your inbox
            </p>
            <div className="max-w-md mx-auto">
              <NewsletterForm />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
            <p className="text-muted-foreground text-sm text-center md:text-left">
              © {new Date().getFullYear()} Srapsware. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm">
              <Link href="/privacy-policy" className="text-muted-foreground hover:text-brand transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-conditions" className="text-muted-foreground hover:text-brand transition-colors">
                Terms & Conditions
              </Link>
              <Link href="/cancellation-refund-policies" className="text-muted-foreground hover:text-brand transition-colors">
                Cancellation & Refund
              </Link>
              <Link href="/sitemap.xml" className="text-muted-foreground hover:text-brand transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
          
          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center items-center gap-6 pt-6 border-t border-border/50">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Lock className="w-5 h-5 text-green-500" />
              <span>SSL Secure</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Cloud className="w-5 h-5 text-orange-500" />
              <span>AWS Partner</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Cloud className="w-5 h-5 text-blue-500" />
              <span>Google Cloud Partner</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Zap className="w-5 h-5 text-yellow-500" />
              <span>Fast & Reliable</span>
            </div>
            
            {/* GitHub Status Badges */}
            <a 
              href="https://github.com/srapsware/srapsware-website" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transition-opacity hover:opacity-80"
            >
              <img 
                src="https://img.shields.io/github/checks-status/srapsware/srapsware-website/main?style=flat-square&label=deploy" 
                alt="Deployment Status"
                className="h-5"
              />
            </a>
            <a 
              href="https://github.com/srapsware/srapsware-website" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transition-opacity hover:opacity-80"
            >
              <img 
                src="https://img.shields.io/github/package-json/v/srapsware/srapsware-website?label=version&style=flat-square" 
                alt="Version"
                className="h-5"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
