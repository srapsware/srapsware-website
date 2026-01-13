'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Home, Search, ArrowLeft, Code2, Terminal, Bug, Sparkles, BookOpen, Info } from 'lucide-react'
import { useState, useEffect } from 'react'
import { CommandPalette } from '@/components/search/command-palette'

export default function NotFound() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState('')
  const [glitchText, setGlitchText] = useState('404')
  const [mounted, setMounted] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  // Glitch effect for 404
  useEffect(() => {
    setMounted(true)
    const glitchChars = ['4', '0', '4', '@', '#', '$', '%', '&', '*']
    let glitchInterval: NodeJS.Timeout

    const startGlitch = () => {
      let count = 0
      glitchInterval = setInterval(() => {
        if (count < 3) {
          const randomText = Array.from({ length: 3 }, () => 
            glitchChars[Math.floor(Math.random() * glitchChars.length)]
          ).join('')
          setGlitchText(randomText)
          count++
        } else {
          setGlitchText('404')
          clearInterval(glitchInterval)
        }
      }, 100)
    }

    // Glitch every 3 seconds
    const mainInterval = setInterval(startGlitch, 3000)
    
    return () => {
      clearInterval(mainInterval)
      clearInterval(glitchInterval)
    }
  }, [])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      setSearchOpen(true)
    }
  }

  const handleQuickLinkClick = (e: React.MouseEvent, href: string) => {
    if (href === '/search') {
      e.preventDefault()
      setSearchOpen(true)
    }
  }

  const quickLinks = [
    { name: 'Home', href: '/', icon: Home, description: 'Back to homepage' },
    { name: 'Services', href: '/services', icon: Code2, description: 'Explore our services' },
    { name: 'Portfolio', href: '/portfolio', icon: Sparkles, description: 'View our work' },
    { name: 'Blog', href: '/blog', icon: Terminal, description: 'Read our articles' },
    { name: 'About Us', href: '/about', icon: Bug, description: 'Learn about us' },
    { name: 'Search', href: '/search', icon: Search, description: 'Search website' },
  ]

  const errorMessages = [
    "// Error: Page not found in the codebase",
    "console.error('404: Route does not exist');",
    "throw new Error('Page not found');",
    "if (page === undefined) return 404;",
  ]

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
      {/* Animated Background Grid */}
      <div 
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(71, 128, 199, 0.3) 1.5px, transparent 1.5px),
            linear-gradient(90deg, rgba(71, 128, 199, 0.3) 1.5px, transparent 1.5px)
          `,
          backgroundSize: '50px 50px',
          animation: mounted ? 'gridMove 20s linear infinite' : 'none'
        }}
      />

      {/* Floating Code Snippets */}
      {mounted && (
        <>
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute text-muted-foreground/20 font-mono text-xs pointer-events-none"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${5 + Math.random() * 5}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`
              }}
            >
              {errorMessages[i % errorMessages.length]}
            </div>
          ))}
        </>
      )}

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Glitching 404 */}
          <div className="mb-8">
            <div className="inline-block relative">
              <h1 
                className="text-[180px] md:text-[280px] font-black leading-none bg-gradient-to-br from-red-500 via-purple-500 to-blue-500 bg-clip-text text-transparent select-none"
                style={{
                  textShadow: '0 0 30px rgba(147, 51, 234, 0.3)',
                  fontFamily: 'monospace'
                }}
              >
                {glitchText}
              </h1>
              
              {/* Scanline effect */}
              <div 
                className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                  background: 'linear-gradient(transparent 50%, rgba(255,255,255,0.1) 50%)',
                  backgroundSize: '100% 4px',
                  animation: mounted ? 'scanline 8s linear infinite' : 'none'
                }}
              />
            </div>
          </div>

          {/* Terminal-style Error Message */}
          <div className="bg-muted/50 backdrop-blur-sm border border-border rounded-lg p-6 mb-8 text-left font-mono text-sm max-w-2xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="text-muted-foreground text-xs">terminal</span>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Bug className="w-4 h-4 text-red-500" />
                <span className="text-red-500">Error:</span>
                <span className="text-muted-foreground">Page Not Found</span>
              </div>
              <div className="text-muted-foreground">
                <span className="text-blue-400">{'>'}</span> The page you're looking for has been moved, deleted, or never existed.
              </div>
              <div className="text-muted-foreground">
                <span className="text-green-400">{'>'}</span> Try searching or navigate back to safety.
              </div>
            </div>
          </div>

          {/* Main Message */}
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Oops! Page Not Found
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Looks like this page took an unexpected detour. Let's get you back on track!
          </p>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="max-w-xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search our website..."
                className="w-full pl-12 pr-4 py-4 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
              />
            </div>
          </form>

          {/* Quick Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto mb-8">
            {quickLinks.map((link) => {
              const Icon = link.icon
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleQuickLinkClick(e, link.href)}
                  className="group flex flex-col items-center text-center p-5 rounded-xl border border-border bg-card/50 backdrop-blur-sm hover:bg-card hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-14 h-14 mb-3 flex items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="font-semibold text-sm mb-1 text-foreground group-hover:text-primary transition-colors">
                    {link.name}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {link.description}
                  </p>
                </Link>
              )
            })}
          </div>

          {/* Go Back Button */}
          <button
            onClick={() => router.back()}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border bg-muted/50 hover:bg-muted transition-colors text-foreground font-medium mb-12"
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </button>
        </div>
      </div>

      {/* Search Command Palette */}
      <CommandPalette open={searchOpen} onOpenChange={setSearchOpen} />

      <style jsx>{`
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        
        @keyframes scanline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg);
            opacity: 0.1;
          }
          50% { 
            transform: translateY(-20px) rotate(5deg);
            opacity: 0.3;
          }
        }
      `}</style>
    </div>
  )
}
