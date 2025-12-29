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
        <div className="flex h-16 items-center justify-between gap-8">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <span className="text-2xl font-bold text-brand">Srapsware</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex flex-1 items-center justify-center gap-8">
            <Link href="/" className="text-sm font-medium transition-colors hover:text-brand whitespace-nowrap">
              Home
            </Link>
            <div
              className="relative"
              onMouseEnter={() => setShowMegaMenu(true)}
              onMouseLeave={() => setShowMegaMenu(false)}
            >
              <button className="flex items-center gap-1 text-sm font-medium transition-colors hover:text-brand whitespace-nowrap">
                Services
                <ChevronDown className="w-4 h-4" />
              </button>
              {showMegaMenu && <MegaMenu />}
            </div>
            <Link href="/portfolio" className="text-sm font-medium transition-colors hover:text-brand whitespace-nowrap">
              Portfolio
            </Link>
            <Link href="/blog" className="text-sm font-medium transition-colors hover:text-brand whitespace-nowrap">
              Blog
            </Link>
            <Link href="/contact" className="text-sm font-medium transition-colors hover:text-brand whitespace-nowrap">
              Contact
            </Link>
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-4 shrink-0">
            <ThemeToggle />
            
            <Link
              href="/contact"
              className="hidden lg:flex h-9 px-6 items-center justify-center bg-brand text-white rounded-lg text-sm font-medium hover:bg-brand-light transition-colors whitespace-nowrap"
            >
              Get Free Quote
            </Link>

            {/* Mobile Menu Button */}
            <button className="lg:hidden flex items-center justify-center">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
