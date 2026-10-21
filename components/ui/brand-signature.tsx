import { site } from '@/config/site'

export function IndiaFlag() {
  return <svg width="30" height="20" viewBox="0 0 30 20" role="img" aria-label="India flag"><rect width="30" height="20" rx="1" fill="#fff" /><path d="M0 0H30V6.67H0Z" fill="#ff9933" /><path d="M0 13.33H30V20H0Z" fill="#138808" /><g stroke="#000080" strokeWidth=".4"><circle cx="15" cy="10" r="2.8" fill="none" />{Array.from({ length: 24 }, (_, i) => <path key={i} d="M15 10V7.2" transform={`rotate(${i * 15} 15 10)`} />)}</g></svg>
}

export function BrandSignature() {
  return <div className="brand-signature">
    <h2 className="flex flex-wrap items-center justify-center gap-2 text-2xl font-bold sm:text-3xl">{site.signature}<span className="brand-heart" role="img" aria-label="with heart">❤️</span><svg width="52" height="24" viewBox="0 0 52 24" aria-hidden="true"><path className="brand-ecg" d="M0 12H10L14 6L18 20L22 3L26 15L30 12H52" fill="none" stroke="#ef4444" strokeWidth="1.7" strokeLinecap="round" /></svg></h2>
    <p className="mt-4 flex items-center justify-center gap-3 text-muted-foreground">Made in India <IndiaFlag /><span className="mx-1 opacity-40">|</span>Since 2010</p>
  </div>
}
