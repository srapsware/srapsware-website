'use client'
import { useEffect } from 'react';
export default function ErrorPage({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => { console.error('Page render failed', { digest: error.digest }) }, [error])
  return <section className="section-space"><div className="site-container"><p className="eyebrow">SOMETHING DIDN’T LOAD</p><h1 className="mt-5 text-4xl font-semibold">Let’s try that again.</h1><p className="mt-5 text-muted-foreground">Please retry. If the problem continues, contact our team.</p><button className="button-primary mt-8" onClick={reset}>Try again</button></div></section>
}
