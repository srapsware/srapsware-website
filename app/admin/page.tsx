'use client'

import { useEffect } from 'react'

export default function AdminPage() {
  useEffect(() => {
    // Set manual init BEFORE script loads
    window.CMS_MANUAL_INIT = true
    
    // Remove the header from admin page
    const header = document.querySelector('header')
    if (header) {
      header.style.display = 'none'
    }
    
    // Load DecapCMS script
    const script = document.createElement('script')
    script.src = 'https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js'
    script.async = true
    script.onload = () => {
      if (window.DecapCMS) {
        console.log('Initializing DecapCMS with config...')
        window.DecapCMS.init({
          config: {
            backend: {
              name: 'proxy',
              proxy_url: 'http://localhost:8081/api/v1',
            },
            load_config_file: '/admin/config.yml',
          }
        })
      }
    }
    document.head.appendChild(script)
    
    return () => {
      if (header) {
        header.style.display = ''
      }
      script.remove()
    }
  }, [])

  return (
    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
      {/* DecapCMS will mount here */}
    </div>
  )
}

declare global {
  interface Window {
    DecapCMS: any
    CMS_MANUAL_INIT: boolean
  }
}
