'use client'

import { site } from '@/config/site'
import { useState } from 'react'

export function ShareArticle({ slug, title }: { slug: string; title: string }) {
  const url = `${site.url}/blog/${slug}`
  const [status, setStatus] = useState('')
  return <div className="rounded-xl border border-border bg-card p-6">
    <h3 className="mb-4 font-semibold">Share this article</h3>
    <div className="flex flex-col gap-3 text-sm">
      <a className="rounded-lg border border-border px-4 py-3 hover:bg-muted" href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`} target="_blank" rel="noopener noreferrer">Share on LinkedIn ↗</a>
      <a className="rounded-lg border border-border px-4 py-3 hover:bg-muted" href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`} target="_blank" rel="noopener noreferrer">Share on X ↗</a>
      <button className="rounded-lg border border-border px-4 py-3 text-left hover:bg-muted" onClick={async () => {
        try { await navigator.clipboard.writeText(url); setStatus('Link copied.') }
        catch { setStatus('Copy the article address from your browser.') }
      }}>Copy link</button>
    </div>
    <p role="status" className="mt-3 text-xs text-muted-foreground">{status}</p>
  </div>
}
