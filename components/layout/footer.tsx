'use client'

import Link from 'next/link'
import { 
  Github, Twitter, Linkedin, Mail, Phone, MapPin,
  Facebook, Instagram, Youtube
} from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { gsap } from '@/lib/animations/gsap-setup'

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

  // Different mesh patterns
  const meshPatterns: MeshPattern[] = [
    { gridSize: 8, color: 'rgba(71, 128, 199, 0.3)', opacity: 0.08 },
    { gridSize: 12, color: 'rgba(99, 102, 241, 0.3)', opacity: 0.06 },
    { gridSize: 15, color: 'rgba(14, 165, 233, 0.3)', opacity: 0.07 },
    { gridSize: 10, color: 'rgba(56, 189, 248, 0.3)', opacity: 0.09 },
    { gridSize: 20, color: 'rgba(71, 128, 199, 0.25)', opacity: 0.05 },
    { gridSize: 6, color: 'rgba(125, 211, 252, 0.4)', opacity: 0.1 },
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
    <footer className="relative border-t border-border overflow-hidden">
      {/* 1. Base Premium Gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-[#020617] dark:via-[#071A2F] dark:to-[#020617]" />

      {/* 2. Soft Edge Glow - Luxury Touch */}
      <div 
        ref={glowRef}
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-sky-400/20 dark:bg-cyan-400/15 rounded-full blur-3xl pointer-events-none"
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
            className="absolute pointer-events-none opacity-[0.06] dark:opacity-[0.08] font-mono text-sm text-brand transition-all duration-[3000ms] ease-in-out"
            style={{
              left: pos.left,
              top: pos.top,
            }}
          >
            {randomSnippet}
          </div>
        )
      })}
      
      <div className="container mx-auto px-4 py-16 relative z-10">
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
            <p className="text-lg font-medium mb-6">
              15 Years of code baking ❤️
            </p>
            <div className="flex gap-3 mb-6">
              <a href="https://facebook.com" target="_blank" rel="noopener" className="w-10 h-10 rounded-lg bg-brand-soft border border-brand/20 flex items-center justify-center hover:bg-brand hover:text-white hover:border-brand transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener" className="w-10 h-10 rounded-lg bg-brand-soft border border-brand/20 flex items-center justify-center hover:bg-brand hover:text-white hover:border-brand transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener" className="w-10 h-10 rounded-lg bg-brand-soft border border-brand/20 flex items-center justify-center hover:bg-brand hover:text-white hover:border-brand transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener" className="w-10 h-10 rounded-lg bg-brand-soft border border-brand/20 flex items-center justify-center hover:bg-brand hover:text-white hover:border-brand transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener" className="w-10 h-10 rounded-lg bg-brand-soft border border-brand/20 flex items-center justify-center hover:bg-brand hover:text-white hover:border-brand transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <span>Made in the India</span>
                <svg className="inline-block" width="24" height="16" viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg">
                  <rect width="30" height="20" fill="#fff"/>
                  <rect width="30" height="6.67" fill="#FF9933"/>
                  <rect y="13.33" width="30" height="6.67" fill="#138808"/>
                  <circle cx="15" cy="10" r="3.5" fill="none" stroke="#000080" strokeWidth="0.4"/>
                  <g transform="translate(15, 10)">
                    {[...Array(24)].map((_, i) => (
                      <line
                        key={i}
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="-3"
                        stroke="#000080"
                        strokeWidth="0.3"
                        transform={`rotate(${i * 15})`}
                      />
                    ))}
                  </g>
                </svg>
              </div>
              <p>Since 2010</p>
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
                <MapPin className="w-5 h-5 mt-0.5 shrink-0" />
                <span>E-160, 3rd Floor, Sector 63<br />Noida, U.P. 201301, India</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <Mail className="w-5 h-5 mt-0.5 shrink-0" />
                <a href="mailto:sales@srapsware.com" className="hover:text-brand transition-colors">
                  sales@srapsware.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <Phone className="w-5 h-5 mt-0.5 shrink-0" />
                <a href="tel:+917982377273" className="hover:text-brand transition-colors">
                  +91-7982377273
                </a>
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
