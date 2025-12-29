'use client'

import Link from 'next/link'
import { MenuItem } from '@/config/menu'
import { ArrowRight } from 'lucide-react'

interface MegaMenuProps {
  categories: NonNullable<MenuItem['megaMenu']>['categories']
}

export function MegaMenu({ categories }: MegaMenuProps) {
  const getGridCols = () => {
    if (categories.length === 4) return 'lg:grid-cols-4'
    if (categories.length === 2) return 'lg:grid-cols-2'
    return 'lg:grid-cols-3'
  }
  
  const getMenuWidth = () => {
    if (categories.length === 4) return 'w-[min(1400px,calc(100vw-64px))]'
    if (categories.length === 2) return 'w-[min(800px,calc(100vw-64px))]'
    return 'w-[min(1100px,calc(100vw-64px))]'
  }
  
  return (
    <div className={`${getMenuWidth()} rounded-2xl border border-border/70 bg-background shadow-2xl overflow-hidden`}>
      <div className={`grid gap-6 sm:grid-cols-2 ${getGridCols()} [grid-template-columns:repeat(auto-fit,minmax(320px,1fr))] p-6`}>
        {categories.map((category) => (
          <div key={category.category} className="p-6">
            {/* Category Header */}
            <div className="mb-5">
              <h3 className="text-lg font-semibold leading-tight text-foreground mb-1">
                {category.category}
              </h3>
              {category.description && (
                <p className="text-sm text-muted-foreground leading-snug">
                  {category.description}
                </p>
              )}
            </div>
            
            {/* Category Items */}
            <ul className="space-y-2">
              {category.items.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="group flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-brand-soft transition-all"
                  >
                    <div className="shrink-0 w-8 h-8 rounded-md bg-brand-soft flex items-center justify-center group-hover:bg-brand transition-colors">
                      <item.icon className="w-4 h-4 text-brand group-hover:text-white transition-colors" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1">
                        <span className="text-sm font-medium text-foreground group-hover:text-brand transition-colors leading-tight">
                          {item.name}
                        </span>
                        <ArrowRight className="w-3 h-3 text-muted-foreground opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all shrink-0" />
                      </div>
                      {item.description && (
                        <p className="text-xs text-muted-foreground leading-snug line-clamp-2">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
