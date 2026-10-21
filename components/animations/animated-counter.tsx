'use client'
import { gsap } from '@/lib/animations/gsap-setup';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
export default function AnimatedCounter({value,duration=1.2,className=''}:{value:string;duration?:number;className?:string}) {
 const root=useRef<HTMLSpanElement>(null)
 useGSAP(()=>{const mm=gsap.matchMedia();mm.add('(prefers-reduced-motion: no-preference)',()=>{const match=value.match(/^(\d+)(.*)$/);if(!match)return;const counter={value:0};gsap.to(counter,{value:Number(match[1]),duration,ease:'power2.out',scrollTrigger:{trigger:root.current,start:'top 85%',once:true},onUpdate:()=>{if(root.current)root.current.textContent=Math.round(counter.value).toLocaleString()+match[2]}});return()=>{if(root.current)root.current.textContent=value}});return()=>mm.revert()},{dependencies:[value,duration]})
 return <div className={className}><span className="sr-only">{value}</span><span ref={root} aria-hidden="true">{value}</span></div>
}
