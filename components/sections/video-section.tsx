'use client'

import { useState } from 'react'
import { Play, X } from 'lucide-react'
import Image from 'next/image'

interface VideoSectionProps {
  title?: string
  description?: string
  videoUrl: string
  thumbnail: string
  thumbnailAlt?: string
}

export function VideoSection({ 
  title,
  description,
  videoUrl,
  thumbnail,
  thumbnailAlt = 'Video thumbnail'
}: VideoSectionProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Extract video ID from YouTube URL
  const getYouTubeId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
    const match = url.match(regExp)
    return (match && match[2].length === 11) ? match[2] : null
  }

  const youtubeId = getYouTubeId(videoUrl)
  const isYouTube = !!youtubeId

  const openModal = () => {
    setIsModalOpen(true)
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setIsModalOpen(false)
    document.body.style.overflow = 'unset'
  }

  return (
    <>
      {/* Video Section */}
      <section className="relative py-24 overflow-hidden border-t border-border video-section">
        {/* Background with overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src={thumbnail}
            alt={thumbnailAlt}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Text Content */}
            {(title || description) && (
              <div className="mb-12">
                {title && (
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                    {title}
                  </h2>
                )}
                {description && (
                  <p className="text-lg md:text-xl text-muted-foreground">
                    {description}
                  </p>
                )}
              </div>
            )}

            {/* Video Thumbnail with Play Button */}
            <button
              onClick={openModal}
              className="group relative w-full aspect-video max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-3xl focus:outline-none focus:ring-4 focus:ring-brand/50 video-thumbnail"
            >
              {/* Thumbnail Image */}
              <Image
                src={thumbnail}
                alt={thumbnailAlt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                className="object-cover"
              />
              
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-background/40 group-hover:bg-background/30 transition-colors duration-300" />

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white shadow-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-8 h-8 md:w-10 md:h-10 text-brand fill-brand ml-1" />
                </div>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/95 backdrop-blur-md"
          onClick={closeModal}
        >
          {/* Close Button */}
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 p-3 rounded-full bg-background/80 hover:bg-background transition-colors shadow-lg z-10"
            aria-label="Close video"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Video Container */}
          <div
            className="relative w-full max-w-5xl aspect-video rounded-xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {isYouTube ? (
              <iframe
                src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`}
                title="Video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            ) : (
              <video
                src={videoUrl}
                controls
                autoPlay
                preload="metadata"
                playsInline
                className="w-full h-full"
              >
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        </div>
      )}
    </>
  )
}
