'use client'

import { useEffect } from 'react'

export function CodeBlockEnhancer() {
  useEffect(() => {
    // Find all code blocks
    const codeBlocks = document.querySelectorAll('article.prose pre[class*="language-"]')
    
    codeBlocks.forEach((pre) => {
      // Skip if already enhanced
      if (pre.parentElement?.classList.contains('code-block-wrapper')) return
      
      // Get language from class
      const languageClass = Array.from(pre.classList).find(cls => cls.startsWith('language-'))
      const language = languageClass?.replace('language-', '').toUpperCase() || 'CODE'
      
      // Create wrapper
      const wrapper = document.createElement('div')
      wrapper.className = 'code-block-wrapper relative group my-6'
      
      // Create header
      const header = document.createElement('div')
      header.className = 'flex items-center justify-between px-4 py-2 bg-[#1e1e1e] border-b border-border/50 rounded-t-lg'
      
      // Language badge
      const badge = document.createElement('span')
      badge.className = 'text-xs font-mono text-muted-foreground uppercase tracking-wider'
      badge.textContent = language
      
      // Copy button
      const button = document.createElement('button')
      button.className = 'flex items-center gap-1.5 px-2 py-1 rounded text-xs font-medium transition-colors hover:bg-primary/20 text-muted-foreground hover:text-primary'
      button.innerHTML = `
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
        </svg>
        <span>Copy</span>
      `
      
      button.onclick = async () => {
        const code = pre.textContent || ''
        await navigator.clipboard.writeText(code)
        button.innerHTML = `
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          <span>Copied!</span>
        `
        setTimeout(() => {
          button.innerHTML = `
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
            </svg>
            <span>Copy</span>
          `
        }, 2000)
      }
      
      header.appendChild(badge)
      header.appendChild(button)
      
      // Wrap pre element
      pre.parentNode?.insertBefore(wrapper, pre)
      wrapper.appendChild(header)
      wrapper.appendChild(pre)
      
      // Add rounded bottom to pre
      pre.classList.add('!mt-0', '!rounded-t-none', '!rounded-b-lg')
    })
  }, [])
  
  return null
}
