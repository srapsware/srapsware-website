'use client'

import { MenuItem } from '@/config/menu'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

type Category = NonNullable<MenuItem['megaMenu']>['categories'][number]
interface MegaMenuProps {
  categories: Category[]
  onNavigate?: () => void
}

function MenuLink({ item, onNavigate }: { item: Category['items'][number]; onNavigate?: () => void }) {
  return <Link href={item.href} onClick={onNavigate}
    className="group flex min-h-12 min-w-0 items-start gap-2.5 rounded-lg p-2 hover:bg-brand-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
    <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-md bg-brand-soft text-brand"><item.icon size={16}/></span>
    <span className="min-w-0 flex-1">
      <span className="block text-sm font-medium leading-snug text-foreground group-hover:text-brand">{item.name}</span>
      {item.description && <span className="mt-1 block text-xs leading-snug text-muted-foreground">{item.description}</span>}
    </span>
    <ArrowUpRight size={14} aria-hidden="true" className="mt-1 shrink-0 text-brand opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100"/>
  </Link>
}

export function MegaMenu({ categories, onNavigate }: MegaMenuProps) {
  const featured = categories.filter(category => category.featured)
  const standard = categories.filter(category => !category.featured)
  const columns = standard.length >= 4 ? 'grid-cols-4' : standard.length === 2 ? 'grid-cols-2' : 'grid-cols-3'
  const width = standard.length >= 4 ? 'w-[min(1280px,calc(100vw-2rem))]' : standard.length === 2 ? 'w-[min(800px,calc(100vw-2rem))]' : 'w-[min(1100px,calc(100vw-2rem))]'

  return <div className={`${width} max-h-[calc(100dvh-160px)] overflow-y-auto overscroll-contain rounded-b-2xl`}>
    {featured.map(category => <section key={category.category} className="grid grid-cols-[0.8fr_2fr] items-center gap-6 border-b border-border bg-brand-soft/30 px-6 py-4">
      <div className="min-w-0"><h3 className="text-base font-semibold">{category.category}</h3><p className="mt-1 text-xs leading-relaxed text-muted-foreground">{category.description}</p></div>
      <ul className="grid grid-cols-2 gap-4">{category.items.map(item => <li key={item.href} className="min-w-0"><MenuLink item={item} onNavigate={onNavigate}/></li>)}</ul>
    </section>)}
    <div className={`grid ${columns} items-start gap-4 p-5`}>
      {standard.map(category => <section key={category.category} className="min-w-0">
        <div className="px-2 pb-3"><h3 className="text-base font-semibold leading-snug">{category.category}</h3>{category.description && <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{category.description}</p>}</div>
        <ul className="space-y-1">{category.items.map(item => <li key={item.href}><MenuLink item={item} onNavigate={onNavigate}/></li>)}</ul>
      </section>)}
    </div>
  </div>
}
