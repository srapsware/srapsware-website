'use client'

import Link from 'next/link'
import { MenuItem } from '@/config/menu'
import { ArrowRight } from 'lucide-react'

interface MegaMenuProps {
  categories: NonNullable<MenuItem['megaMenu']>['categories']
}

export function MegaMenu({ categories }: MegaMenuProps) {
  const getGridCols = () => {
    if (categories.length === 1) return 'grid-cols-1'
    if (categories.length === 2) return 'grid-cols-2'
    if (categories.length === 3) return 'grid-cols-3'
    return 'grid-cols-4'
  }
  
  return (
    <div className="w-[min(1180px,calc(100vw-32px))] rounded-2xl border border-border/70 bg-background/95 shadow-2xl backdrop-blur-xl overflow-hidden">
      <div className={`grid ${getGridCols()} divide-x divide-border/60 [grid-template-columns:repeat(auto-fit,minmax(240px,1fr))]`}>
        {categories.map((category) => (
          <div key={category.category} className="bg-card p-6 hover:bg-muted/40 transition-colors">
            {/* Category Header */}
            <div className="flex items-start gap-3 mb-5">
              <div className="shrink-0 w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center">
                <category.icon className="w-5 h-5 text-brand" />
              </div>
              <div>
                <h3 className="text-lg font-semibold leading-tight text-foreground">
                  {category.category}
                </h3>
                {category.description && (
                  <p className="text-sm text-muted-foreground leading-snug">
                    {category.description}
                  </p>
                )}
              </div>
            </div>
            
            {/* Category Items */}
            <ul className="space-y-2">
              {category.items.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="group flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-accent/40 transition-all"
                  >
                    <div className="shrink-0 w-8 h-8 rounded-md bg-muted/70 flex items-center justify-center group-hover:bg-brand/20 transition-colors">
                      <item.icon className="w-4 h-4 text-muted-foreground group-hover:text-brand transition-colors" />
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
      
      {/* Footer CTA */}
      <div className="px-6 py-4 bg-muted/30 border-t border-border/70 flex items-center justify-between">
        <div className="text-sm text-muted-foreground">Need something specific?</div>
        <Link
          href="/contact"
          className="inline-flex h-9 px-4 items-center bg-brand text-white text-sm rounded-lg font-medium hover:bg-brand-light transition-colors"
        >
          Contact Us
        </Link>
      </div>
    </div>
  )
}
