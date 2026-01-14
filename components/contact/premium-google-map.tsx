'use client'

import { useEffect, useRef, useState } from 'react'
import { useTheme } from 'next-themes'

interface PremiumGoogleMapProps {
  latitude?: number
  longitude?: number
  zoom?: number
  title?: string
}

export function PremiumGoogleMap({
  latitude = 28.6220226,
  longitude = 77.3866481,
  zoom = 15,
  title = 'Srapsware Office',
}: PremiumGoogleMapProps) {
  const mapContainerRef = useRef<HTMLDivElement>(null)
  const loadingRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<google.maps.Map | null>(null)
  const markerRef = useRef<google.maps.Marker | null>(null)
  const scriptLoadedRef = useRef(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const { theme, systemTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  const currentTheme = theme === 'system' ? systemTheme : theme

  const mapStyles = {
    light: [
      { featureType: 'all', elementType: 'geometry', stylers: [{ color: '#f5f5f5' }] },
      { featureType: 'all', elementType: 'labels.text.fill', stylers: [{ color: '#616161' }] },
      { featureType: 'administrative', elementType: 'geometry.stroke', stylers: [{ color: '#e0e0e0' }] },
      { featureType: 'road', elementType: 'geometry', stylers: [{ color: '#ffffff' }] },
      { featureType: 'water', elementType: 'geometry', stylers: [{ color: '#c9c9c9' }] },
    ],
    dark: [
      { elementType: 'geometry', stylers: [{ color: '#212121' }] },
      { elementType: 'labels.icon', stylers: [{ visibility: 'off' }] },
      { elementType: 'labels.text.fill', stylers: [{ color: '#757575' }] },
      { elementType: 'labels.text.stroke', stylers: [{ color: '#212121' }] },
      { featureType: 'administrative', elementType: 'geometry', stylers: [{ color: '#757575' }] },
      { featureType: 'water', elementType: 'geometry.fill', stylers: [{ color: '#0e1626' }] },
    ],
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    // Scroll-triggered visibility detection
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting)
    }, { threshold: 0.3 })

    if (mapContainerRef.current) {
      observer.observe(mapContainerRef.current)
    }

    return () => observer.disconnect()
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
      if (loadingRef.current) {
        loadingRef.current.style.display = 'none'
      }

      const mapOptions: google.maps.MapOptions = {
        center: { lat: latitude, lng: longitude },
        zoom: isVisible ? zoom : zoom - 2,
        styles: (currentTheme === 'dark' ? mapStyles.dark : mapStyles.light) as google.maps.MapTypeStyle[],
        disableDefaultUI: true,
        zoomControl: true,
        zoomControlOptions: {
          position: window.google.maps.ControlPosition.RIGHT_CENTER,
        },
      }

      const map = new window.google.maps.Map(mapContainerRef.current, mapOptions)
      mapRef.current = map

      // Create custom marker icon using SVG
      const markerIcon = {
        path: window.google.maps.SymbolPath.CIRCLE,
        scale: 12,
        fillColor: '#0066cc',
        fillOpacity: 1,
        strokeColor: '#3b82f6',
        strokeWeight: 3,
      }

      const marker = new window.google.maps.Marker({
        position: { lat: latitude, lng: longitude },
        map: map,
        title: title,
        icon: markerIcon as any,
        animation: window.google.maps.Animation.DROP,
      })

      markerRef.current = marker

      const infoWindow = new window.google.maps.InfoWindow({
        content: `
          <div style="padding: 12px; font-family: system-ui, -apple-system, sans-serif; margin: 0;">
            <div style="display: flex; align-items: center; gap: 6px; margin-bottom: 8px;">
              <span style="display: inline-block; width: 8px; height: 8px; background: #22c55e; border-radius: 50%; animation: pulse 2s infinite;"></span>
              <span style="font-size: 12px; color: #0066cc; font-weight: 600;">Live Office • IST (GMT+5:30)</span>
            </div>
            <h3 style="margin: 0 0 8px 0; font-weight: 700; font-size: 14px; color: #333; padding: 0;">SRAPSWARE HQ</h3>
            <p style="margin: 0 0 8px 0; font-size: 13px; color: #555; padding: 0;">
              <svg style="display: inline; width: 14px; height: 14px; margin-right: 4px; vertical-align: text-bottom;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              Noida, India<br/>
              <svg style="display: inline; width: 14px; height: 14px; margin-right: 4px; vertical-align: text-bottom;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              Avg response: < 2 hrs
            </p>
            <p style="margin: 8px 0 0 0; font-size: 12px; color: #888; padding: 0;">
              <svg style="display: inline; width: 14px; height: 14px; margin-right: 4px; vertical-align: text-bottom;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 1 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
              </svg>
              Since 2010
            </p>
            <a href="https://www.google.com/maps/dir/?api=1&destination=28.6220226,77.3866481" target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; gap: 6px; margin-top: 10px; padding: 6px 10px; background: #0066cc; color: white; text-decoration: none; border-radius: 4px; font-size: 12px; font-weight: 600; cursor: pointer; transition: background 0.2s;">
              <svg style="display: inline; width: 14px; height: 14px; vertical-align: middle;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              Get Directions
            </a>
          </div>
        `,
      })

      marker.addListener('click', () => {
        infoWindow.open(map, marker as any)
      })

      infoWindow.open(map, marker as any)

      // Animate zoom on scroll into view
      if (isVisible) {
        map.setZoom(zoom)
      }
    } catch (error) {
      console.error('Failed to initialize map:', error)
    }
  }

  return (
    <div className="relative w-full">
      <style>{`
        @keyframes pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7);
          }
          70% {
            box-shadow: 0 0 0 18px rgba(34, 197, 94, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(34, 197, 94, 0);
          }
        }

        @keyframes gridDrift {
          0%, 100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(1px, 1px);
          }
        }

        .grid-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: 
            linear-gradient(0deg, transparent 24%, rgba(59, 130, 246, .04) 25%, rgba(59, 130, 246, .04) 26%, transparent 27%, transparent 74%, rgba(59, 130, 246, .04) 75%, rgba(59, 130, 246, .04) 76%, transparent 77%, transparent),
            linear-gradient(90deg, transparent 24%, rgba(59, 130, 246, .04) 25%, rgba(59, 130, 246, .04) 26%, transparent 27%, transparent 74%, rgba(59, 130, 246, .04) 75%, rgba(59, 130, 246, .04) 76%, transparent 77%, transparent);
          background-size: 40px 40px;
          animation: gridDrift 20s linear infinite;
          pointer-events: none;
          opacity: ${isHovering ? 0.08 : 0.04};
          transition: opacity 0.3s ease;
        }

        .gm-ui-hover-effect {
          background-color: #f5f5f5 !important;
        }
        .gm-style .gm-style-iw-c {
          background-color: #ffffff !important;
          backdrop-filter: blur(10px) !important;
          border-radius: 8px !important;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1) !important;
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
        }
      `}</style>

      <div
        ref={mapContainerRef}
        className={`relative w-full h-96 rounded-lg overflow-hidden border transition-all duration-500 ${
          isHovering ? 'border-primary shadow-2xl' : 'border-border shadow-lg'
        }`}
        style={{
          width: '100%',
          height: '384px',
          filter: isVisible ? 'blur(0)' : 'blur(4px)',
          transition: 'all 0.6s ease',
        }}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div className="grid-overlay" />
      </div>

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

      {/* Branding Footer */}
      <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground px-1">
        <span className="flex items-center gap-1">
          Designed & Engineered in Noida
          <svg className="w-4 h-4" viewBox="0 0 36 24" fill="none">
            <rect width="36" height="24" fill="#FF9933"/>
            <rect y="8" width="36" height="8" fill="white"/>
            <rect y="16" width="36" height="8" fill="#138808"/>
            <circle cx="18" cy="12" r="3.5" fill="#0052B4" stroke="white" strokeWidth="0.5"/>
          </svg>
        </span>
        <span className="flex items-center gap-1">
          Serving clients globally
          <svg className="w-4 h-4 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="12" cy="12" r="10"/>
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
            <path d="M2 12h20"/>
          </svg>
        </span>
      </div>
    </div>
  )
}
