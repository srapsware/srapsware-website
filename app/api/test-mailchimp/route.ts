import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY
    const MAILCHIMP_API_SERVER = process.env.MAILCHIMP_API_SERVER || 'us1'

    if (!MAILCHIMP_API_KEY) {
      return NextResponse.json({ error: 'API key not configured' }, { status: 500 })
    }

    // Test 1: Get account info
    const pingUrl = `https://${MAILCHIMP_API_SERVER}.api.mailchimp.com/3.0/ping`
    const pingResponse = await fetch(pingUrl, {
      headers: {
        Authorization: `apikey ${MAILCHIMP_API_KEY}`,
      },
    })
    const pingData = await pingResponse.json()

    // Test 2: List all audiences
    const listsUrl = `https://${MAILCHIMP_API_SERVER}.api.mailchimp.com/3.0/lists`
    const listsResponse = await fetch(listsUrl, {
      headers: {
        Authorization: `apikey ${MAILCHIMP_API_KEY}`,
      },
    })
    const listsData = await listsResponse.json()

    return NextResponse.json({
      ping: pingData,
      lists: listsData,
      config: {
        server: MAILCHIMP_API_SERVER,
        hasApiKey: !!MAILCHIMP_API_KEY,
      },
    })
  } catch (error) {
    console.error('Test error:', error)
    return NextResponse.json({ error: String(error) }, { status: 500 })
  }
}
