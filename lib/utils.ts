import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getCdnUrl(assetPath: string): string {
  // If the path is already a full URL, return it as-is
  if (assetPath.startsWith('http://') || assetPath.startsWith('https://')) {
    return assetPath
  }
  
  // Get CDN URL from environment variable
  const cdnUrl = process.env.NEXT_PUBLIC_CDN_URL || 'https://cdn.srapsware.com'
  
  // Remove leading slash if present
  const cleanPath = assetPath.startsWith('/') ? assetPath.slice(1) : assetPath
  
  // Remove /assets/ prefix if present to match CDN structure
  const normalizedPath = cleanPath.startsWith('assets/') ? cleanPath.slice(7) : cleanPath
  
  return `${cdnUrl}/${normalizedPath}`
}
