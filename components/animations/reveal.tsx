'use client'
import { useRef,type ReactNode } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/lib/animations/gsap-setup'
export function Reveal({children}:{children:ReactNode}) {
  const root=useRef<HTMLDivElement>(null)
  useGSAP(()=>{const mm=gsap.matchMedia();mm.add('(prefers-reduced-motion: no-preference)',()=>{gsap.from('[data-reveal]',{opacity:0,y:18,duration:.7,stagger:.1,ease:'power2.out',scrollTrigger:{trigger:root.current,start:'top 90%',once:true}})});return()=>mm.revert()},{scope:root})
  return <div ref={root}>{children}</div>
}
