'use client'

import { CommandPalette } from '@/components/search/command-palette'
import { SearchButton } from '@/components/search/search-button'
import { Dialog,DialogContent,DialogDescription,DialogTitle,DialogTrigger } from '@/components/ui/dialog'
import { ThemeToggle } from '@/components/ui/theme-toggle'
import { menuItems } from '@/config/menu'
import { site } from '@/config/site'
import { ArrowUpRight,ChevronDown,Menu } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect,useRef,useState } from 'react'
import { MegaMenu } from './mega-menu'

export function Header() {
  const pathname = usePathname()
  const [searchOpen, setSearchOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const root = useRef<HTMLElement>(null)
  const triggers = useRef<Record<string, HTMLButtonElement | null>>({})
  useEffect(() => { setOpenMenu(null); setMobileOpen(false) }, [pathname])
  useEffect(() => {
    const escape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && openMenu) {
        triggers.current[openMenu]?.focus()
        setOpenMenu(null)
      }
    }
    document.addEventListener('keydown', escape)
    return () => document.removeEventListener('keydown', escape)
  }, [openMenu])
  useEffect(() => {
    const outside = (event: PointerEvent) => {
      if (!root.current?.contains(event.target as Node)) setOpenMenu(null)
    }
    const resize = () => { if (window.innerWidth >= 1024) setMobileOpen(false); else setOpenMenu(null) }
    document.addEventListener('pointerdown', outside)
    window.addEventListener('resize', resize)
    return () => { document.removeEventListener('pointerdown', outside); window.removeEventListener('resize', resize) }
  }, [])
  return (
    <header ref={root} className="site-header sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-xl"
      onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget as Node)) setOpenMenu(null) }}>
      <div className="mx-auto flex h-[76px] max-w-[1400px] items-center justify-between gap-4 px-4 lg:px-8">
        <Link href="/" aria-label="Srapsware home" className="shrink-0">
          <img src="/assets/img/logo.png" alt="Srapsware" width="164" height="44" className="h-9 w-auto dark:hidden" />
          <img src="/assets/img/logo-light.png" alt="Srapsware" width="164" height="44" className="hidden h-9 w-auto dark:block" />
        </Link>
        <nav aria-label="Main navigation" className="hidden items-center gap-5 lg:flex">
          {menuItems.map(item => {
            const id = `navigation-${item.name.toLowerCase()}`
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`)
            return <div key={item.name}>
              {item.megaMenu ? <>
                <button ref={element => { triggers.current[item.name] = element }} aria-expanded={openMenu === item.name} aria-controls={id}
                  onClick={() => setOpenMenu(openMenu === item.name ? null : item.name)}
                  className={`flex min-h-11 items-center gap-1 text-sm font-medium ${active ? 'text-brand' : 'text-foreground'}`}>
                  {item.name}<ChevronDown size={14} className={openMenu === item.name ? 'rotate-180 transition-transform' : 'transition-transform'} />
                </button>
                {openMenu === item.name && <div id={id} className="menu-panel absolute left-1/2 top-full -translate-x-1/2 pt-2">
                  <div className="rounded-2xl border border-border bg-background shadow-xl">
                    <div className="flex items-center justify-between border-b border-border px-6 py-4">
                      <span className="eyebrow">{item.name}</span>
                      <Link href={item.href} onClick={() => setOpenMenu(null)} className="text-sm font-medium text-brand">Explore all {item.name.toLowerCase()} <span aria-hidden="true">↗</span></Link>
                    </div>
                    <MegaMenu categories={item.megaMenu.categories} onNavigate={() => setOpenMenu(null)} />
                  </div>
                </div>}
              </> : <Link href={item.href} aria-current={active ? 'page' : undefined} className={`text-sm font-medium ${active ? 'text-brand' : ''}`}>{item.name}</Link>}
            </div>
          })}
        </nav>
        <div className="flex items-center gap-2">
          <SearchButton onClick={() => setSearchOpen(true)} variant="mobile" />
          <ThemeToggle />
          <Link href={site.primaryCTA.href} className="button-primary hidden text-sm xl:inline-flex">{site.primaryCTA.label}<ArrowUpRight size={16} /></Link>
          <Dialog open={mobileOpen} onOpenChange={setMobileOpen}>
            <DialogTrigger asChild><button aria-label="Open navigation" className="grid h-11 w-11 place-items-center lg:hidden"><Menu size={23} /></button></DialogTrigger>
            <DialogContent className="max-h-[90dvh] overflow-y-auto">
              <DialogTitle>Explore Srapsware</DialogTitle>
              <DialogDescription>Services, work and the people behind it.</DialogDescription>
              <nav aria-label="Mobile navigation" onClick={event => { if ((event.target as HTMLElement).closest('a')) setMobileOpen(false) }}>
                {menuItems.map(item => item.megaMenu
                  ? <details key={item.name} className="border-b border-border py-3">
                    <summary className="cursor-pointer py-2 font-semibold">{item.name}</summary>
                    <Link href={item.href} className="block py-3 text-brand">Explore all {item.name.toLowerCase()}</Link>
                    {item.megaMenu.categories.map(category => <div key={category.category} className="pb-3">
                      <p className="eyebrow py-2">{category.category}</p>
                      {category.items.map(link => <Link key={link.href} href={link.href} className="block rounded-lg px-2 py-3 text-sm hover:bg-muted">{link.name}</Link>)}
                    </div>)}
                  </details>
                  : <Link key={item.href} href={item.href} className="block border-b border-border py-4 font-semibold">{item.name}</Link>)}
                <Link className="button-primary mt-6 w-full" href={site.primaryCTA.href}>{site.primaryCTA.label}<ArrowUpRight size={16} /></Link>
              </nav>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <CommandPalette open={searchOpen} onOpenChange={setSearchOpen} />
    </header>
  )
}
