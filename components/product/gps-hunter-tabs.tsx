'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const tabs = [
  { label: 'Overview', href: '/product/gpshunter' },
  { label: 'Privacy Policy', href: '/product/gpshunter/privacy' },
  { label: 'Terms of Service', href: '/product/gpshunter/terms' },
] as const

function isTabActive(pathname: string, href: string): boolean {
  if (href === '/product/gpshunter') {
    return pathname === href
  }
  return pathname.startsWith(href)
}

export function GpsHunterTabs() {
  const pathname = usePathname()

  return (
    <nav
      aria-label="GPS Hunter sections"
      className="sticky top-0 z-20 border-b border-border bg-background/80 backdrop-blur-md"
    >
      <div className="container mx-auto px-4 max-w-[1400px]">
        <div className="flex gap-1 overflow-x-auto scrollbar-none -mb-px">
          {tabs.map((tab) => {
            const active = isTabActive(pathname, tab.href)

            return (
              <Link
                key={tab.href}
                href={tab.href}
                aria-current={active ? 'page' : undefined}
                className={cn(
                  'shrink-0 px-5 py-4 text-sm font-medium border-b-2 transition-colors whitespace-nowrap',
                  active
                    ? 'border-brand text-brand font-semibold'
                    : 'border-transparent text-muted-foreground hover:text-brand hover:border-brand/30'
                )}
              >
                {tab.label}
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
