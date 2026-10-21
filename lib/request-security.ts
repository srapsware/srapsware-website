import { site } from '@/config/site'
import { createHash } from 'node:crypto'

export class RequestError extends Error {
  constructor(message: string, public status = 400) { super(message) }
}

export async function readBoundedBody(request: Request, limit: number) {
  if (Number(request.headers.get('content-length') || 0) > limit) throw new RequestError('Request is too large.', 413)
  const reader = request.body?.getReader()
  if (!reader) throw new RequestError('Request body is required.')
  const chunks: Uint8Array[] = []
  let size = 0
  while (true) {
    const { done, value } = await reader.read()
    if (done) break
    size += value.byteLength
    if (size > limit) { await reader.cancel(); throw new RequestError('Request is too large.', 413) }
    chunks.push(value)
  }
  return Buffer.concat(chunks)
}

const buckets = new Map<string, { count: number; expires: number }>()
export async function protectRequest(request: Request, scope: string, limit = 5) {
  const origin = request.headers.get('origin')
  const allowed = new Set([new URL(site.url).origin, new URL(request.url).origin])
  const host = request.headers.get('host')
  if (host) allowed.add(`${new URL(request.url).protocol}//${host}`)
  if (!origin || !allowed.has(origin)) throw new RequestError('This request origin is not allowed.', 403)
  // Only use a forwarded IP when the deployed edge is configured to overwrite it.
  const ip = (process.env.VERCEL === '1' || process.env.TRUST_PROXY === 'true') ? request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown' : 'shared'
  const key = `website:${scope}:${createHash('sha256').update(ip).digest('hex').slice(0, 24)}`
  // Best-effort per-instance guard. Vercel Firewall supplies distributed limits.
  const now = Date.now()
  for (const [id, bucket] of buckets) if (bucket.expires <= now) buckets.delete(id)
  if (buckets.size >= 10000 && !buckets.has(key)) throw new RequestError('Please try again shortly.', 429)
  const bucket = buckets.get(key) || { count: 0, expires: now + 600_000 }
  if (++bucket.count > limit) throw new RequestError('Too many attempts. Please try again in ten minutes.', 429)
  buckets.set(key, bucket)
}

export const escapeHTML = (value: string) => value.replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]!)

export async function verifyHuman(token: unknown) {
  if (typeof token !== 'string' || !token || token.length > 2048) throw new RequestError('Complete the verification before sending.')
  if (!process.env.TURNSTILE_SECRET_KEY) throw new RequestError('Verification is temporarily unavailable.', 503)
  const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST', headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ secret: process.env.TURNSTILE_SECRET_KEY, response: token }), signal: AbortSignal.timeout(10_000),
  })
  const result = await response.json()
  const allowed = (process.env.TURNSTILE_ALLOWED_HOSTNAMES || new URL(site.url).hostname).split(',').map(host => host.trim())
  if (!response.ok || !result.success || !allowed.includes(result.hostname)) throw new RequestError('Verification expired or failed. Please try again.')
}
