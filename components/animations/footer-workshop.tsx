'use client'

import { useId, useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/lib/animations/gsap-setup'

/** A small, original SVG story: your idea, our craft, a product with heart. */
export function FooterWorkshop() {
  const root = useRef<HTMLDivElement>(null)
  const id = useId().replace(/:/g, '')
  useGSAP(() => {
    const media = gsap.matchMedia()
    media.add('(prefers-reduced-motion: no-preference)', () => {
      const timeline = gsap.timeline({ scrollTrigger: { trigger: root.current, start: 'top 85%', once: true } })
      timeline.from('.workshop-layer', { y: 24, opacity: 0, duration: .65, stagger: .13 }, 0)
        .from('.workshop-route', { strokeDashoffset: 1, duration: 1.2, stagger: .5, ease: 'power1.inOut' }, .3)
        .from('.workshop-window', { y: 15, opacity: 0, duration: .6, stagger: .3 }, .6)
        .from('.workshop-code', { scaleX: 0, transformOrigin: 'left center', duration: .4, stagger: .1 }, 1)
        .from('.workshop-heart', { scale: .6, opacity: 0, transformOrigin: 'center', duration: .6, ease: 'back.out(1.8)' }, 1.5)
        .to('.workshop-heart', { scale: 1.12, transformOrigin: 'center', duration: .22, repeat: 3, yoyo: true }, 2.1)
        .from('.workshop-check', { scale: 0, transformOrigin: 'center', duration: .5, ease: 'back.out(2)' }, 2.8)
    })
    return () => media.revert()
  }, { scope: root })

  return <div ref={root} className="footer-workshop">
    <svg viewBox="0 0 560 340" role="img" aria-labelledby={`${id}-title ${id}-desc`}>
      <title id={`${id}-title`}>Software baked with heart</title>
      <desc id={`${id}-desc`}>An idea connects to layers of design and code, with a heart at their centre, then becomes a working product.</desc>
      <defs>
        <linearGradient id={`${id}-plate`} x1="0" y1="0" x2="1" y2="1"><stop stopColor="var(--workshop-blue)" stopOpacity=".22"/><stop offset="1" stopColor="var(--workshop-teal)" stopOpacity=".05"/></linearGradient>
        <linearGradient id={`${id}-heart`} x1="0" y1="0" x2="1" y2="1"><stop stopColor="#ff8eaa"/><stop offset="1" stopColor="#e74272"/></linearGradient>
        <pattern id={`${id}-dots`} width="22" height="22" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r="1" fill="currentColor" opacity=".13"/></pattern>
      </defs>
      <rect width="560" height="340" fill={`url(#${id}-dots)`}/>
      <ellipse cx="285" cy="270" rx="158" ry="30" fill="var(--workshop-blue)" opacity=".055"/>
      <g fill="none" stroke="var(--workshop-blue)" strokeWidth="1.5">
        <path d="M70 150V220Q70 238 90 238H159" opacity=".25"/>
        <path className="workshop-route" d="M70 150V220Q70 238 90 238H159" pathLength="1" strokeDasharray="1"/>
        <path d="M398 212H470Q490 212 490 192V129" opacity=".25"/>
        <path className="workshop-route" d="M398 212H470Q490 212 490 192V129" pathLength="1" strokeDasharray="1" stroke="var(--workshop-teal)"/>
      </g>
      {[40, 20, 0].map((offset, index) => <g className="workshop-layer" key={offset}>
        <path d={`M143 ${177 + offset}L277 ${108 + offset}Q283 ${105 + offset} 289 ${108 + offset}L423 ${177 + offset}V${190 + offset}L289 ${261 + offset}Q283 ${264 + offset} 277 ${261 + offset}L143 ${190 + offset}Z`} fill="var(--workshop-surface)" stroke="var(--workshop-blue)" strokeOpacity={.22 + index * .12}/>
        <path d={`M143 ${177 + offset}L277 ${108 + offset}Q283 ${105 + offset} 289 ${108 + offset}L423 ${177 + offset}L289 ${248 + offset}Q283 ${251 + offset} 277 ${248 + offset}Z`} fill={`url(#${id}-plate)`} stroke="var(--workshop-blue)" strokeOpacity=".4"/>
      </g>)}
      <g className="workshop-window">
        <rect x="205" y="57" width="156" height="115" rx="10" fill="var(--workshop-surface)" stroke="var(--workshop-blue)" strokeOpacity=".6"/>
        <path d="M205 81H361" stroke="var(--workshop-blue)" opacity=".25"/>
        {[217,225,233].map(x=><circle key={x} cx={x} cy="69" r="2" fill="var(--workshop-blue)" opacity=".6"/>)}
        <text x="346" y="72" textAnchor="end" className="workshop-micro">with-heart.tsx</text>
        {[{x:218,y:96,w:41},{x:227,y:107,w:61},{x:227,y:118,w:34},{x:218,y:129,w:17}].map(line=><rect className="workshop-code" key={line.y} x={line.x} y={line.y} width={line.w} height="3" rx="1.5" fill="var(--workshop-blue)" opacity=".6"/>)}
        <text x="218" y="153" className="workshop-micro">idea + craft + care</text>
      </g>
      <g className="workshop-heart"><path d="M320 113C304 93 281 108 290 125C295 135 320 150 320 150S345 135 350 125C359 108 336 93 320 113Z" fill={`url(#${id}-heart)`}/><path d="M301 115Q306 108 312 114" fill="none" stroke="white" opacity=".55" strokeWidth="3" strokeLinecap="round"/></g>
      <g className="workshop-window">
        <rect x="26" y="81" width="91" height="70" rx="11" fill="var(--workshop-surface)" stroke="var(--workshop-blue)" strokeOpacity=".35"/>
        <g fill="none" stroke="var(--workshop-blue)" strokeWidth="2" strokeLinecap="round"><path d="M64 115C53 107 61 93 71 93S89 107 78 115L77 121H65Z"/><path d="M66 126H76M71 84V80M48 97L44 95M94 97L98 95"/></g>
      </g>
      <g className="workshop-window">
        <rect x="435" y="60" width="105" height="70" rx="10" fill="var(--workshop-surface)" stroke="var(--workshop-teal)" strokeOpacity=".55"/>
        <rect x="445" y="70" width="85" height="9" rx="3" fill="var(--workshop-teal)" opacity=".15"/>
        <rect x="445" y="86" width="27" height="33" rx="3" fill="var(--workshop-blue)" opacity=".12"/>
        <path d="M481 90H520M481 99H507M481 108H516" stroke="var(--workshop-blue)" opacity=".35" strokeWidth="3" strokeLinecap="round"/>
        <g className="workshop-check"><circle cx="528" cy="127" r="13" fill="var(--workshop-teal)"/><path d="M522 127L526 131L534 123" fill="none" stroke="var(--workshop-surface)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></g>
      </g>
      <g className="workshop-label"><text x="71" y="176" textAnchor="middle">01 / YOUR IDEA</text><text x="283" y="327" textAnchor="middle">02 / OUR CRAFT</text><text x="488" y="157" textAnchor="middle">03 / REAL IMPACT</text></g>
    </svg>
  </div>
}
