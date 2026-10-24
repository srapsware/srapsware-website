// One vector asset for the header and footer. The viewBox contains no raster padding.
export function BrandLogo({ width = 164, className = '', loading }: { width?: number; className?: string; loading?: 'lazy' | 'eager' }) {
  return <img src="/assets/brand/srapsware-wordmark.svg" alt="Srapsware" width={width} height={width * 54 / 520} className={className} loading={loading}/>
}
