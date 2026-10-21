'use client'
import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog'
import { getCdnUrl } from '@/lib/utils'
interface Props { images: string[] | Array<{image:string;caption?:string;alt?:string}>; projectTitle:string }
export default function PortfolioGallery({images,projectTitle}:Props){
 const [selected,setSelected]=useState<number|null>(null)
 const items=images.map(image=>typeof image==='string'?{image,caption:'',alt:projectTitle}:image).filter(image=>image.image)
 if(!items.length)return null
 const move=(direction:number)=>setSelected(index=>index===null?0:(index+direction+items.length)%items.length)
 return <section className="section-space border-t border-border"><div className="site-container"><h2 className="mb-9 text-3xl font-semibold tracking-tight">A closer look.</h2><div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{items.map((image,index)=><button key={`${image.image}-${index}`} onClick={()=>setSelected(index)} aria-label={`Open ${projectTitle} image ${index+1}`} className="overflow-hidden rounded-xl border border-border bg-card text-left"><img src={getCdnUrl(image.image)} alt={image.alt||`${projectTitle} screenshot ${index+1}`} width="640" height="480" loading="lazy" className="aspect-[4/3] w-full object-cover"/>{image.caption&&<span className="block p-4 text-sm">{image.caption}</span>}</button>)}</div><Dialog open={selected!==null} onOpenChange={open=>{if(!open)setSelected(null)}}><DialogContent className="max-w-5xl" onKeyDown={event=>{if(event.key==='ArrowRight')move(1);if(event.key==='ArrowLeft')move(-1)}}><DialogTitle>{projectTitle}</DialogTitle><DialogDescription>Image {(selected??0)+1} of {items.length}. Use arrow keys to browse.</DialogDescription>{selected!==null&&<img src={getCdnUrl(items[selected].image)} alt={items[selected].alt||`${projectTitle} screenshot ${selected+1}`} className="max-h-[65dvh] w-full object-contain"/>}<div className="flex justify-between"><button aria-label="Previous image" className="button-primary" onClick={()=>move(-1)}><ChevronLeft size={18}/></button><button aria-label="Next image" className="button-primary" onClick={()=>move(1)}><ChevronRight size={18}/></button></div></DialogContent></Dialog></div></section>
}
