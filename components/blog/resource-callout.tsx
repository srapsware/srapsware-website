import Link from 'next/link'

export function ResourceCallout() {
  return <div className="rounded-xl border border-border bg-brand-soft/30 p-6">
    <p className="eyebrow">PUT IDEAS INTO PRACTICE</p>
    <h3 className="mt-3 text-lg font-semibold">Planning your next project?</h3>
    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Start with a useful brief, a release checklist or an integration plan.</p>
    <Link href="/resources/guides" className="mt-5 inline-block text-sm font-semibold text-brand">Explore practical guides ↗</Link>
  </div>
}
