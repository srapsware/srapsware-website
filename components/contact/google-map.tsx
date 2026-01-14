'use client'

import { useEffect, useRef, useState } from 'react'
import { useTheme } from 'next-themes'

interface GoogleMapProps {
  latitude?: number
  longitude?: number
  zoom?: number
  title?: string
}

export function GoogleMap({
  latitude = 28.6220226,
  longitude = 77.3866481,
  zoom = 15,
  title = 'Srapsware Office',
}: GoogleMapProps) {
  const mapContainerRef = useRef<HTMLDivElement>(null)
  const loadingRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<google.maps.Map | null>(null)
  const markerRef = useRef<google.maps.Marker | null>(null)
  const scriptLoadedRef = useRef(false)
  const { theme, systemTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  const currentTheme = theme === 'system' ? systemTheme : theme

  // Define map styles for light and dark modes
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
        featureType: 'administrative.country',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#9e9e9e' }],
      },
      {
        featureType: 'administrative.land_parcel',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#bdbdbd' }],
      },
      {
        featureType: 'administrative.province',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#9e9e9e' }],
      },
      {
        featureType: 'landscape',
        elementType: 'geometry',
        stylers: [{ color: '#2c2c2c' }],
      },
      {
        featureType: 'poi',
        elementType: 'geometry',
        stylers: [{ color: '#2d2d2d' }],
      },
      {
        featureType: 'poi',
        elementType: 'labels.text',
        stylers: [{ visibility: 'off' }],
      },
      {
        featureType: 'poi',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#d2691e' }],
      },
      {
        featureType: 'poi.park',
        elementType: 'geometry',
        stylers: [{ color: '#313131' }],
      },
      {
        featureType: 'poi.park',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#626262' }],
      },
      {
        featureType: 'road',
        elementType: 'geometry.fill',
        stylers: [{ color: '#1f1f1f' }],
      },
      {
        featureType: 'road',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#8a8a8a' }],
      },
      {
        featureType: 'road.arterial',
        elementType: 'geometry',
        stylers: [{ color: '#373737' }],
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [{ color: '#3c3c3c' }],
      },
      {
        featureType: 'road.highway',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#f3ff00' }],
      },
      {
        featureType: 'road.local',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#979797' }],
      },
      {
        featureType: 'transit',
        elementType: 'geometry',
        stylers: [{ color: '#2d2d2d' }],
      },
      {
        featureType: 'transit',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#d59563' }],
      },
      {
        featureType: 'transit.line',
        elementType: 'geometry',
        stylers: [{ color: '#474747' }],
      },
      {
        featureType: 'transit.station',
        elementType: 'geometry',
        stylers: [{ color: '#2d2d2d' }],
      },
      {
        featureType: 'water',
        elementType: 'geometry.fill',
        stylers: [{ color: '#0e1626' }],
      },
      {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#515c6d' }],
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

    return () => {
      // Cleanup
    }
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
            <h3 style="margin: 0 0 8px 0; font-weight: 600; font-size: 14px; color: #333; padding: 0;">Srapsware Office</h3>
            <p style="margin: 0; font-size: 13px; color: #555; line-height: 1.5; padding: 0;">
              3rd Floor, E-160, Sector 63<br/>
              Noida, Uttar Pradesh 201309<br/>
              India
            </p>
            <p style="margin: 12px 0 0 0; font-size: 13px; padding: 0;">
              <a href="tel:+917982377273" style="color: #0066cc; text-decoration: none; font-weight: 600;">+91-7982377273</a>
            </p>
          </div>
        `,
      })

      marker.addListener('click', () => {
        infoWindow.open(map, marker)
      })

      infoWindow.open(map, marker)
    } catch (error) {
      console.error('Failed to initialize map:', error)
      if (loadingRef.current) {
        loadingRef.current.innerHTML = '<div class="text-center text-red-500"><p>Failed to load map</p></div>'
      }
    }
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
        className="relative w-full h-96 rounded-lg overflow-hidden border border-border shadow-lg"
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
    </div>
  )
}
