import { NextResponse } from 'next/server'
import { buildSearchIndex } from '@/lib/search-documents'

export const dynamic = 'force-static'
export const revalidate = 3600 // Revalidate every hour

export async function GET() {
  try {
    const searchIndex = buildSearchIndex()
    
    return NextResponse.json(searchIndex, {
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
        'X-Robots-Tag': 'noindex',
      },
    })
  } catch (error) {
    console.error('Error building search index:', error)
    return NextResponse.json(
      { error: 'Failed to build search index' },
      { status: 500 }
    )
  }
}
