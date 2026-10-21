import { emailValid } from '@/lib/contact-schema'
import { protectRequest,readBoundedBody,RequestError,verifyHuman } from '@/lib/request-security'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    await protectRequest(request, 'newsletter', 3)
    const raw = await readBoundedBody(request, 4096)
    let data
    try { data = JSON.parse(raw.toString()) } catch { throw new RequestError('Invalid request.') }
    if (typeof data.email !== 'string' || !emailValid(data.email.trim())) throw new RequestError('Please enter a valid email.')
    await verifyHuman(data.turnstileToken)
    const key = process.env.MAILCHIMP_API_KEY
    const audience = process.env.MAILCHIMP_AUDIENCE_ID
    const server = process.env.MAILCHIMP_API_SERVER
    if (!key || !audience || !server || !/^us\d+$/.test(server)) throw new RequestError('Newsletter signup is temporarily unavailable.', 503)
    const response = await fetch(`https://${server}.api.mailchimp.com/3.0/lists/${audience}/members`, {
      method: 'POST', headers: { Authorization: `apikey ${key}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ email_address: data.email.trim(), status: 'pending' }),
      signal: AbortSignal.timeout(10_000),
    })
    const result = await response.json()
    if (!response.ok && result.title !== 'Member Exists') throw new RequestError('Unable to subscribe right now. Please try later.', 502)
    return NextResponse.json({ message: 'If your address needs confirmation, please check your inbox to complete signup.' })
  } catch (error) {
    return NextResponse.json({ error: error instanceof RequestError ? error.message : 'Unable to subscribe right now.' }, { status: error instanceof RequestError ? error.status : 502 })
  }
}
