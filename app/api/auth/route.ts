import { site } from '@/config/site'
import { NextRequest,NextResponse } from 'next/server'
import { randomBytes,timingSafeEqual } from 'node:crypto'

const cookieName = 'cms_oauth_state'
export async function GET(request: NextRequest) {
  const origin = new URL(site.url).origin
  const callback = `${origin}/api/auth`
  const clientId = process.env.GITHUB_OAUTH_CLIENT_ID
  const clientSecret = process.env.GITHUB_OAUTH_CLIENT_SECRET
  if (!clientId || !clientSecret) return NextResponse.json({ error: 'CMS authentication is unavailable.' }, { status: 503 })
  const code = request.nextUrl.searchParams.get('code')
  if (!code && request.nextUrl.searchParams.get('provider') === 'github') {
    const state = randomBytes(32).toString('hex')
    const url = new URL('https://github.com/login/oauth/authorize')
    url.search = new URLSearchParams({ client_id: clientId, scope: 'repo', redirect_uri: callback, state }).toString()
    const response = NextResponse.redirect(url)
    response.cookies.set(cookieName, state, { httpOnly: true, secure: origin.startsWith('https:'), sameSite: 'lax', path: '/api/auth', maxAge: 600 })
    response.headers.set('Cache-Control', 'no-store')
    return response
  }
  const state = request.nextUrl.searchParams.get('state') || ''
  const expected = request.cookies.get(cookieName)?.value || ''
  if (!code || !/^[a-f0-9]{64}$/.test(state) || !/^[a-f0-9]{64}$/.test(expected) || !timingSafeEqual(Buffer.from(state), Buffer.from(expected))) return NextResponse.json({ error: 'Authentication expired. Please start again.' }, { status: 400 })
  try {
    const result = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ client_id: clientId, client_secret: clientSecret, code, redirect_uri: callback }), signal: AbortSignal.timeout(10_000),
    })
    const data = await result.json()
    if (!result.ok || typeof data.access_token !== 'string') throw new Error('OAuth exchange failed')
    const nonce = randomBytes(16).toString('base64')
    const payload = JSON.stringify({ token: data.access_token, provider: 'github' }).replace(/</g, '\\u003c')
    const html = `<!doctype html><html lang="en"><meta charset="utf-8"><title>CMS authentication</title><p>Completing sign in…</p><script nonce="${nonce}">(() => {
      const origin = ${JSON.stringify(origin)};
      const opener = window.opener;
      if (!opener) return;
      const receive = event => {
        if (event.origin !== origin || event.source !== opener) return;
        window.removeEventListener('message', receive);
        opener.postMessage('authorization:github:success:' + JSON.stringify(${payload}), origin);
        window.close();
      };
      window.addEventListener('message', receive);
      opener.postMessage('authorizing:github', origin);
    })()</script></html>`
    const response = new NextResponse(html, { headers: { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store', 'Referrer-Policy': 'no-referrer', 'Content-Security-Policy': `default-src 'none'; script-src 'nonce-${nonce}'; base-uri 'none'; frame-ancestors 'none'` } })
    response.cookies.set(cookieName, '', { httpOnly: true, secure: origin.startsWith('https:'), sameSite: 'lax', path: '/api/auth', maxAge: 0 })
    return response
  } catch {
    return NextResponse.json({ error: 'Authentication failed. Please start again.' }, { status: 502, headers: { 'Cache-Control': 'no-store' } })
  }
}
