'use client'

import { useEffect, useRef } from 'react'
import { useTheme } from 'next-themes'

export function GiscusComments() {
  const ref = useRef<HTMLDivElement>(null)
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    if (!ref.current) return

    // Clear existing script if any
    const existingScript = ref.current.querySelector('script')
    if (existingScript) {
      existingScript.remove()
    }

    // Create and append the Giscus script
    const script = document.createElement('script')
    script.src = 'https://giscus.app/client.js'
    script.setAttribute('data-repo', 'srapsware/srapsware-website')
    script.setAttribute('data-repo-id', 'MDEwOlJlcG9zaXRvcnkzNzcxNzMwNjY=')
    script.setAttribute('data-category', 'Comments')
    script.setAttribute('data-category-id', 'DIC_kwDOFns0Ss4C0jP9')
    script.setAttribute('data-mapping', 'title')
    script.setAttribute('data-strict', '1')
    script.setAttribute('data-reactions-enabled', '1')
    script.setAttribute('data-emit-metadata', '0')
    script.setAttribute('data-input-position', 'top')
    script.setAttribute('data-theme', resolvedTheme === 'dark' ? 'dark' : 'light')
    script.setAttribute('data-lang', 'en')
    script.setAttribute('crossorigin', 'anonymous')
    script.async = true

    ref.current.appendChild(script)
  }, [resolvedTheme])

  return (
    <section className="py-16 border-t border-border bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-1 h-8 bg-primary rounded-full" />
            <h2 className="text-3xl font-bold">Comments</h2>
          </div>
          <div ref={ref} className="giscus-container bg-background rounded-xl p-6 border border-border shadow-sm" />
        </div>
      </div>
    </section>
  )
}
