'use client'

import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { getCdnUrl } from '@/lib/utils'
import { Play } from 'lucide-react'

interface VideoSectionProps { title?: string; description?: string; videoUrl: string; thumbnail: string; thumbnailAlt?: string }
export function VideoSection({ title, description, videoUrl, thumbnail, thumbnailAlt = 'About our work' }: VideoSectionProps) {
  const id = videoUrl.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|watch\?v=))([\w-]{11})/)?.[1]
  return <section className="video-section relative isolate overflow-hidden border-t border-border py-24">
    <img src={getCdnUrl(thumbnail)} alt="" className="absolute inset-0 -z-20 h-full w-full object-cover opacity-15 blur-sm" loading="lazy" />
    <div className="site-container text-center"><h2 className="mx-auto max-w-4xl text-3xl font-bold leading-tight md:text-5xl">{title}</h2>{description && <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">{description}</p>}
      <Dialog><DialogTrigger asChild><button aria-label="Play introduction video" className="video-thumbnail group relative mx-auto mt-10 block aspect-video w-full max-w-3xl overflow-hidden rounded-2xl border border-border shadow-2xl"><img src={getCdnUrl(thumbnail)} alt={thumbnailAlt} className="h-full w-full object-cover" loading="lazy" /><span className="absolute inset-0 grid place-items-center bg-black/15"><span className="grid h-20 w-20 place-items-center rounded-full border border-white/50 bg-white/90 text-slate-950 backdrop-blur transition-transform group-hover:scale-110"><Play size={30} fill="currentColor" /></span></span></button></DialogTrigger>
        <DialogContent className="max-w-5xl"><DialogTitle>{title || 'About our work'}</DialogTitle><DialogDescription>Watch our introduction. Playback starts when you choose to play.</DialogDescription>{id ? <iframe className="aspect-video w-full rounded-lg" src={`https://www.youtube-nocookie.com/embed/${id}`} title={title || 'Introduction video'} allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen /> : <video src={videoUrl} controls className="aspect-video w-full" />}</DialogContent>
      </Dialog>
    </div>
  </section>
}
