'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { getCdnUrl } from '@/lib/utils'
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react'

interface PortfolioGalleryProps {
  images: string[] | Array<{ image: string; caption?: string; alt?: string }>
  projectTitle: string
}

export default function PortfolioGallery({ images, projectTitle }: PortfolioGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const galleryRef = useRef<HTMLDivElement>(null)
  const lightboxRef = useRef<HTMLDivElement>(null)

  // Normalize images array - handle both string[] and object[] formats
  const imageList = Array.isArray(images) ? images : [images]
  const normalizedImages = imageList
    .map(img =>
      typeof img === 'string'
        ? { image: img, alt: projectTitle, caption: undefined }
        : img
    )
    .filter((img): img is { image: string; caption?: string; alt?: string } => !!img && !!img.image)

  // Removed GSAP animations - images display immediately

  const openLightbox = (index: number) => {
    setSelectedImage(index)
    setIsLightboxOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setIsLightboxOpen(false)
    setSelectedImage(null)
    document.body.style.overflow = 'unset'
  }

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % normalizedImages.length)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + normalizedImages.length) % normalizedImages.length)
    }
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isLightboxOpen) return
      
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowRight') nextImage()
      if (e.key === 'ArrowLeft') prevImage()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isLightboxOpen, selectedImage])

  // Don't render if no images
  if (!images || images.length === 0) {
    return null
  }

  return (
    <>
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Project Gallery</h2>
          
          <div 
            ref={galleryRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
          >
            {normalizedImages.map((img, index) => (
              <div
                key={index}
                className="group relative aspect-video rounded-xl overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-300 bg-muted"
                onClick={() => openLightbox(index)}
              >
                <Image
                  src={getCdnUrl(img.image)}
                  alt={img.alt || `${projectTitle} screenshot ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  unoptimized
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                  <Maximize2 className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300" />
                </div>

                {/* Caption */}
                {img.caption && (
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <p className="text-white text-sm">{img.caption}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {isLightboxOpen && selectedImage !== null && (
        <div 
          ref={lightboxRef}
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation */}
          {normalizedImages.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); prevImage() }}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); nextImage() }}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
              >
                <ChevronRight className="w-8 h-8" />
              </button>
            </>
          )}

          {/* Image */}
          <div 
            className="relative max-w-7xl max-h-[90vh] w-full h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={getCdnUrl(normalizedImages[selectedImage].image)}
              alt={normalizedImages[selectedImage].alt || projectTitle}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>

          {/* Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm">
            {selectedImage + 1} / {normalizedImages.length}
          </div>
        </div>
      )}
    </>
  )
}
