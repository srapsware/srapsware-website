'use client'

import { useEffect, useRef, useState } from 'react'
import { useTheme } from 'next-themes'

interface AnimatedGoogleMapProps {
  latitude?: number
  longitude?: number
  zoom?: number
  title?: string
  showAnimation?: boolean
}

export function AnimatedGoogleMap({
  latitude = 28.6220226,
  longitude = 77.3866481,
  zoom = 15,
  title = 'Srapsware Office',
  showAnimation = true,
}: AnimatedGoogleMapProps) {
  const mapContainerRef = useRef<HTMLDivElement>(null)
  const loadingRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<google.maps.Map | null>(null)
  const markerRef = useRef<google.maps.Marker | null>(null)
  const infoWindowRef = useRef<google.maps.InfoWindow | null>(null)
  const scriptLoadedRef = useRef(false)
  const [isHovering, setIsHovering] = useState(false)
  const { theme, systemTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  const currentTheme = theme === 'system' ? systemTheme : theme

  const mapStyles = {
    light: [
      {
        featureType: 'all',
        elementType: 'geometry',
        stylers: [{ color: '#f5f5f5' }],
      },
      {
        featureType: 'all',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#616161' }],
      },
      {
        featureType: 'administrative',
        elementType: 'geometry.stroke',
        stylers: [{ color: '#e0e0e0' }],
      },
      {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [{ color: '#ffffff' }],
      },
      {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{ color: '#c9c9c9' }],
      },
    ],
    dark: [
      {
        elementType: 'geometry',
        stylers: [{ color: '#212121' }],
      },
      {
        elementType: 'labels.icon',
        stylers: [{ visibility: 'off' }],
      },
      {
        elementType: 'labels.text.fill',
        stylers: [{ color: '#757575' }],
      },
      {
        elementType: 'labels.text.stroke',
        stylers: [{ color: '#212121' }],
      },
      {
        featureType: 'administrative',
        elementType: 'geometry',
        stylers: [{ color: '#757575' }],
      },
      {
        featureType: 'water',
        elementType: 'geometry.fill',
        stylers: [{ color: '#0e1626' }],
      },
    ],
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted || !mapContainerRef.current) return

    const loadGoogleMaps = () => {
      if (scriptLoadedRef.current) {
        if (window.google) {
          initializeMap()
        }
        return
      }

      if (window.google) {
        scriptLoadedRef.current = true
        initializeMap()
        return
      }

      const script = document.createElement('script')
      script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`
      script.async = true
      script.defer = true

      script.onload = () => {
        scriptLoadedRef.current = true
        if (mapContainerRef.current) {
          initializeMap()
        }
      }

      script.onerror = () => {
        console.error('Failed to load Google Maps API')
        if (loadingRef.current) {
          loadingRef.current.innerHTML = '<div class="text-center text-red-500"><p>Failed to load map</p></div>'
        }
      }

      document.head.appendChild(script)
    }

    loadGoogleMaps()
  }, [mounted])

  useEffect(() => {
    if (mapRef.current && window.google) {
      const newStyle = currentTheme === 'dark' ? mapStyles.dark : mapStyles.light
      mapRef.current.setOptions({ styles: newStyle as google.maps.MapTypeStyle[] })
    }
  }, [currentTheme])

  const initializeMap = () => {
    if (!mapContainerRef.current || mapRef.current) return

    try {
      // Hide loading spinner
      if (loadingRef.current) {
        loadingRef.current.style.display = 'none'
      }

      const mapOptions: google.maps.MapOptions = {
        center: { lat: latitude, lng: longitude },
        zoom: zoom,
        styles: (currentTheme === 'dark' ? mapStyles.dark : mapStyles.light) as google.maps.MapTypeStyle[],
        disableDefaultUI: true,
        zoomControl: true,
        zoomControlOptions: {
          position: window.google.maps.ControlPosition.RIGHT_CENTER,
        },
      }

      const map = new window.google.maps.Map(mapContainerRef.current, mapOptions)
      mapRef.current = map

      const marker = new window.google.maps.Marker({
        position: { lat: latitude, lng: longitude },
        map: map,
        title: title,
        animation: window.google.maps.Animation.DROP,
      })

      markerRef.current = marker

      const infoWindow = new window.google.maps.InfoWindow({
        content: `
          <div style="padding: 12px; font-family: system-ui, -apple-system, sans-serif; margin: 0;">
            <h3 style="margin: 0 0 8px 0; font-weight: 700; font-size: 14px; color: #333; padding: 0;">Srapsware Office</h3>
            <div style="border-top: 1px solid #ddd; padding-top: 12px; margin-bottom: 12px;">
              <p style="margin: 0; font-size: 13px; color: #555; line-height: 1.5; padding: 0;">
                3rd Floor, E-160, Sector 63<br/>
                Noida, Uttar Pradesh 201309<br/>
                India
              </p>
            </div>
            <div style="display: flex; gap: 8px;">
              <a href="tel:+917982377273" style="flex: 1; background: #0066cc; color: white; text-decoration: none; padding: 8px 12px; border-radius: 4px; font-size: 13px; font-weight: 600; text-align: center; border: none;">Call Now</a>
              <a href="https://wa.me/917982377273" style="flex: 1; background: #25D366; color: white; text-decoration: none; padding: 8px 12px; border-radius: 4px; font-size: 13px; font-weight: 600; text-align: center; border: none;">WhatsApp</a>
            </div>
          </div>
        `,
      })

      infoWindowRef.current = infoWindow

      marker.addListener('click', () => {
        infoWindow.open(map, marker)
        animateBounce()
      })

      marker.addListener('mouseover', () => {
        setIsHovering(true)
      })

      marker.addListener('mouseout', () => {
        setIsHovering(false)
      })

      infoWindow.open(map, marker)

      // Animate zoom on load
      if (showAnimation) {
        setTimeout(() => {
          map.setZoom(zoom + 1)
          setTimeout(() => {
            map.setZoom(zoom)
          }, 300)
        }, 500)
      }
    } catch (error) {
      console.error('Failed to initialize map:', error)
      if (loadingRef.current) {
        loadingRef.current.innerHTML = '<div class="text-center text-red-500"><p>Failed to load map</p></div>'
      }
    }
  }

  const animateBounce = () => {
    if (!markerRef.current || !window.google) return

    markerRef.current.setAnimation(window.google.maps.Animation.BOUNCE)
    setTimeout(() => {
      markerRef.current?.setAnimation(null)
    }, 3000)
  }

  return (
    <div className="relative w-full">
      <style>{`
        .gm-ui-hover-effect {
          background-color: #f5f5f5 !important;
        }
        .gm-style .gm-style-iw-c {
          background-color: #ffffff !important;
        }
        .gm-style-iw-d {
          color: #333 !important;
        }
        .gm-style button {
          filter: invert(0) !important;
        }
        @media (prefers-color-scheme: dark) {
          .gm-style .gm-style-iw-c {
            background-color: #ffffff !important;
          }
          .gm-style-iw button {
            filter: brightness(1.2) !important;
          }
        }
      `}</style>
      <div
        ref={mapContainerRef}
        className={`relative w-full h-96 rounded-lg overflow-hidden border transition-all duration-300 ${
          isHovering ? 'border-primary shadow-lg' : 'border-border shadow-md'
        }`}
        style={{ width: '100%', height: '384px' }}
      />
      <div
        ref={loadingRef}
        className="absolute inset-0 bg-muted flex items-center justify-center z-10 rounded-lg"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: '100%',
          height: '384px',
        }}
      >
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
          <p className="text-sm text-muted-foreground">Loading map...</p>
        </div>
      </div>

      {/* Enhanced Map Controls */}
      <style>{`
        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.7);
          }
          50% {
            box-shadow: 0 0 0 10px rgba(59, 130, 246, 0);
          }
        }

        .map-pulse {
          animation: pulse-glow 2s infinite;
        }
      `}</style>
    </div>
  )
}
