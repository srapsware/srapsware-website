'use client'

import { gsap } from '@/lib/animations/gsap-setup'
import { useGSAP } from '@gsap/react'
import { useId,useRef } from 'react'

export function ProductBlueprint({ compact = false }: { compact?: boolean }) {
  const root = useRef<SVGSVGElement>(null)
  const id = useId().replace(/:/g, '')
  useGSAP(() => {
    const mm = gsap.matchMedia()
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      gsap.from('.blueprint-module', {
        y: 14, opacity: 0, duration: .75, stagger: .13, ease: 'power3.out',
        scrollTrigger: { trigger: root.current, start: 'top 85%', once: true },
      })
      gsap.from('.blueprint-connection', {
        strokeDashoffset: 1, duration: 1.6, stagger: .15, ease: 'power2.inOut',
        scrollTrigger: { trigger: root.current, start: 'top 80%', once: true },
      })
    })
    return () => mm.revert()
  }, { scope: root })
  return <svg ref={root} viewBox="0 0 600 480" className="product-blueprint w-full" role="img" aria-labelledby={`${id}-title ${id}-desc`}>
    <title id={`${id}-title`}>From idea to connected product</title>
    <desc id={`${id}-desc`}>An interface connects to an API, database and cloud service. A conceptual illustration of our software development capabilities.</desc>
    <defs>
      <pattern id={`${id}-grid`} width="24" height="24" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r="1" fill="currentColor" opacity=".14" /></pattern>
      <linearGradient id={`${id}-gradient`} x1="0" y1="0" x2="1" y2="1"><stop stopColor="hsl(var(--brand))" /><stop offset="1" stopColor="hsl(var(--accent-primary))" /></linearGradient>
    </defs>
    <rect width="600" height="480" rx="24" fill={`url(#${id}-grid)`} />
    <g fill="none" stroke={`url(#${id}-gradient)`} strokeWidth="2">
      <path className="blueprint-connection" pathLength="1" strokeDasharray="1" d="M300 255 V285 Q300 300 285 300 H125 Q110 300 110 315 V340" />
      <path className="blueprint-connection" pathLength="1" strokeDasharray="1" d="M300 255 V340" />
      <path className="blueprint-connection" pathLength="1" strokeDasharray="1" d="M300 255 V285 Q300 300 315 300 H475 Q490 300 490 315 V340" />
    </g>
    <g className="blueprint-module">
      <rect x="118" y="60" width="364" height="195" rx="14" fill="hsl(var(--card))" stroke="hsl(var(--border))" strokeWidth="2" />
      <path d="M118 94 H482" stroke="hsl(var(--border))" />
      <circle cx="136" cy="77" r="3" fill="hsl(var(--brand))" /><circle cx="148" cy="77" r="3" fill="hsl(var(--border))" /><circle cx="160" cy="77" r="3" fill="hsl(var(--border))" />
      <text x="464" y="81" textAnchor="end" className="blueprint-label">YOUR NEXT PRODUCT</text>
      <rect x="138" y="115" width="64" height="118" rx="5" fill="hsl(var(--muted))" />
      {[135, 155, 175, 195].map((y, i) => <rect key={y} x="150" y={y} width={i === 0 ? 40 : 28} height="5" rx="2" fill={i === 0 ? 'hsl(var(--brand))' : 'hsl(var(--border))'} />)}
      <rect x="220" y="117" width="122" height="8" rx="4" fill="hsl(var(--foreground))" />
      <rect x="220" y="135" width="192" height="5" rx="2" fill="hsl(var(--border))" />
      <rect x="220" y="156" width="240" height="76" rx="7" fill="hsl(var(--brand-soft))" />
      <path d="M235 213 L275 199 L312 205 L348 177 L388 185 L445 165" fill="none" stroke={`url(#${id}-gradient)`} strokeWidth="3" />
      <circle cx="445" cy="165" r="5" fill="hsl(var(--accent-primary))" />
    </g>
    {[{ x: 45, label: 'API', sub: 'Connect' }, { x: 235, label: 'DATA', sub: 'Organize' }, { x: 425, label: 'CLOUD', sub: 'Scale' }].map((node, index) => <g key={node.label} className="blueprint-module">
      <rect x={node.x} y="340" width="130" height="82" rx="12" fill="hsl(var(--card))" stroke="hsl(var(--border))" strokeWidth="2" />
      <text x={node.x + 65} y="374" textAnchor="middle" fill="hsl(var(--brand))" fontSize="17" fontWeight="700">{node.label}</text>
      <text x={node.x + 65} y="397" textAnchor="middle" className="blueprint-label">{node.sub}</text>
      <circle cx={node.x + 65} cy="340" r="4" fill={index === 1 ? 'hsl(var(--accent-primary))' : 'hsl(var(--brand))'} />
    </g>)}
    {!compact && <g className="blueprint-module">
      <rect x="36" y="24" width="145" height="36" rx="18" fill="hsl(var(--brand-soft))" />
      <circle cx="55" cy="42" r="4" fill="hsl(var(--brand))" /><text x="68" y="46" className="blueprint-label">IDEA → IMPACT</text>
      <text x="564" y="456" textAnchor="end" className="blueprint-label">DESIGNED TO WORK TOGETHER</text>
    </g>}
  </svg>
}
