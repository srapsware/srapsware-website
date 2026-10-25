import type { Metadata } from 'next'
import { site } from '@/config/site'

export function plainDescription(value: string): string {
  return value.replace(/<[^>]*>/g, ' ').replace(/!\[[^\]]*\]\([^)]*\)/g, '')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1').replace(/[#*_`>]/g, '')
    .replace(/\s+/g, ' ').trim().slice(0, 200)
}

/** Keep search and social summaries aligned with each page's own content. */
export function completeMetadata(metadata: Metadata): Metadata {
  const title = typeof metadata.title === 'string' ? metadata.title : site.name
  const description = plainDescription(metadata.description || site.description)
  const canonical = metadata.alternates?.canonical
  const images = metadata.openGraph?.images || ['/opengraph-image']
  return {
    ...metadata, description,
    openGraph: {
      type: 'website', siteName: site.name, locale: 'en_US',
      ...metadata.openGraph, title, description, images,
      ...(typeof canonical === 'string' ? { url: canonical } : {}),
    },
    twitter: { ...metadata.twitter, card: 'summary_large_image', title, description, images },
  }
}

export function jsonLd(value: unknown): string {
  return JSON.stringify(value).replace(/</g, '\\u003c')
}
