import { GpsHunterLayoutHeader } from '@/components/product/gps-hunter-layout-header'

export default function GpsHunterLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <GpsHunterLayoutHeader />
      {children}
    </>
  )
}
