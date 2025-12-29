'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ThemeToggle } from '@/components/ui/theme-toggle'
import { MegaMenu } from './mega-menu'
import { Menu, ChevronDown } from 'lucide-react'

export function Header() {
  const [showMegaMenu, setShowMegaMenu] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-brand">Srapsware</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link href="/" className="transition-colors hover:text-brand">
              Home
            </Link>
            <button
              onMouseEnter={() => setShowMegaMenu(true)}
              onMouseLeave={() => setShowMegaMenu(false)}
              className="flex items-center gap-1 transition-colors hover:text-brand relative"
            >
              Services
              <ChevronDown className="w-4 h-4" />
              {showMegaMenu && (
                <div 
                  className="fixed left-0 right-0"
                  onMouseEnter={() => setShowMegaMenu(true)}
                  onMouseLeave={() => setShowMegaMenu(false)}
                >
                  <MegaMenu />
                </div>
              )}
            </button>
            <Link href="/portfolio" className="transition-colors hover:text-brand">
              Portfolio
            </Link>
            <Link href="/blog" className="transition-colors hover:text-brand">
              Blog
            </Link>
            <Link href="/contact" className="transition-colors hover:text-brand">
              Contact
            </Link>
          </nav>

          {/* Right Side - Theme Toggle & CTA */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            
            <Link
              href="/contact"
              className="hidden sm:inline-flex h-9 px-4 py-2 bg-brand text-white rounded-lg font-medium hover:bg-brand-light transition-colors"
            >
              Get Free Quote
            </Link>

            {/* Mobile Menu Button */}
            <button className="md:hidden w-9 h-9 flex items-center justify-center">
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
