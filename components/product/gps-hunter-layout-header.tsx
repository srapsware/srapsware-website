'use client'

import { usePathname } from 'next/navigation'
import { PageHero } from '@/components/sections/page-hero'
import { GpsHunterTabs } from '@/components/product/gps-hunter-tabs'

function getBreadcrumbItems(pathname: string) {
  if (pathname === '/product/gpshunter/privacy') {
    return [
      { label: 'GPS Hunter', href: '/product/gpshunter' },
      { label: 'Privacy Policy' },
    ]
  }

  if (pathname === '/product/gpshunter/terms') {
    return [
      { label: 'GPS Hunter', href: '/product/gpshunter' },
      { label: 'Terms of Service' },
    ]
  }

  return [{ label: 'GPS Hunter' }]
}

export function GpsHunterLayoutHeader() {
  const pathname = usePathname()

  return (
    <>
      <PageHero
        badge="GPS Hunter"
        title="GPS Simulation & Route Playback"
        description="Simulate GPS locations, create routes, and play back movement for testing, development, and lawful use."
        breadcrumbItems={getBreadcrumbItems(pathname)}
      />
      <GpsHunterTabs />
    </>
  )
}
