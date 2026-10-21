import { test } from 'node:test'
import assert from 'node:assert/strict'
import nodemailer from 'nodemailer'
import { parseContact } from '../lib/contact-schema'
import { readBoundedBody, escapeHTML, verifyHuman } from '../lib/request-security'
import { POST } from '../app/api/contact/route'
import { site } from '../config/site'
import { GET as authenticate } from '../app/api/auth/route'
import { NextRequest } from 'next/server'

function validForm() {
  const data = new FormData()
  data.set('firstName', 'Alex')
  data.set('email', 'alex@example.com')
  data.set('message', 'We would like to discuss a new application.')
  data.set('turnstileToken', 'test-token')
  return data
}
test('minimal inquiry accepts optional phone, surname and company', () => {
  const result = parseContact(validForm())
  assert.deepEqual(result.errors, {})
  assert.equal(result.values.inquiryType, 'contact')
})
test('untrusted multipart fields cannot pass as strings', () => {
  const data = validForm()
  data.set('firstName', new File(['bad'], 'name.txt'))
  data.set('inquiryType', 'unknown')
  assert.ok(parseContact(data).errors.firstName)
  assert.ok(parseContact(data).errors.inquiryType)
})
test('line breaks, oversized fields, honeypots and invalid emails are rejected', () => {
  const data = validForm()
  data.set('email', 'test@example.com\r\nBcc: other@example.com')
  data.set('company', 'x'.repeat(161))
  data.set('website', 'bot')
  const { errors } = parseContact(data)
  assert.ok(errors.email && errors.company && errors.website)
})
test('body size is enforced even without Content-Length', async () => {
  const request = new Request('https://www.srapsware.com/api/contact', { method: 'POST', body: 'too much' })
  await assert.rejects(readBoundedBody(request, 3), /too large/)
})
test('email values are escaped', () => {
  assert.equal(escapeHTML('<img src="x">&'), '&lt;img src=&quot;x&quot;&gt;&amp;')
})
test('disguised executable attachments are rejected before provider calls', async () => {
  const form = validForm()
  form.append('files', new File(['not a PNG'], 'brief.png', { type: 'image/png' }))
  const response = await POST(new Request(`${site.url}/api/contact`, { method: 'POST', headers: { Origin: new URL(site.url).origin }, body: form }))
  assert.equal(response.status, 400)
  assert.match((await response.json()).error, /valid PDF, PNG or JPEG/)
})
test('OAuth rejects malformed Unicode state safely', async () => {
  const keys = ['GITHUB_OAUTH_CLIENT_ID', 'GITHUB_OAUTH_CLIENT_SECRET'] as const
  const saved = keys.map(key => process.env[key])
  keys.forEach(key => { process.env[key] = 'test-only' })
  try {
    const request = new NextRequest(`${site.url}/api/auth?code=test&state=${encodeURIComponent('é'.repeat(64))}`, { headers: { Cookie: `cms_oauth_state=${'a'.repeat(64)}` } })
    assert.equal((await authenticate(request)).status, 400)
  } finally {
    keys.forEach((key, index) => { if (saved[index] === undefined) delete process.env[key]; else process.env[key] = saved[index] })
  }
})
test('contact rejects cross-origin requests before contacting providers', async () => {
  const response = await POST(new Request(`${site.url}/api/contact`, { method: 'POST', headers: { Origin: 'https://not-our-site.example' }, body: validForm() }))
  assert.equal(response.status, 403)
})
test('CAPTCHA tokens from another hostname are rejected', async t => {
  const original = process.env.TURNSTILE_SECRET_KEY
  process.env.TURNSTILE_SECRET_KEY = 'test-only'
  t.mock.method(globalThis, 'fetch', async () => Response.json({ success: true, hostname: 'wrong.example' }))
  try { await assert.rejects(verifyHuman('test'), /failed/) }
  finally { if (original === undefined) delete process.env.TURNSTILE_SECRET_KEY; else process.env.TURNSTILE_SECRET_KEY = original }
})
test('successful inquiry uses mocked providers and escaped content', async t => {
  const keys = ['TURNSTILE_SECRET_KEY', 'SMTP_USER', 'SMTP_PASSWORD'] as const
  const original = Object.fromEntries(keys.map(key => [key, process.env[key]]))
  keys.forEach(key => { process.env[key] = 'test-only' })
  t.mock.method(globalThis, 'fetch', async () => Response.json({ success: true, hostname: new URL(site.url).hostname }))
  let sent: { html: string; text: string; replyTo: string } | undefined
  t.mock.method(nodemailer, 'createTransport', () => ({ sendMail: async (message: typeof sent) => { sent = message; return { messageId: 'mock-only' } } }))
  try {
    const form = validForm()
    form.set('message', '<img src=x onerror=alert(1)> Project context')
    const response = await POST(new Request(`${site.url}/api/contact`, { method: 'POST', headers: { Origin: new URL(site.url).origin }, body: form }))
    assert.equal(response.status, 200)
    assert.match(sent!.html, /&lt;img/)
    assert.equal(sent!.replyTo, 'alex@example.com')
  } finally {
    keys.forEach(key => { if (original[key] === undefined) delete process.env[key]; else process.env[key] = original[key] })
  }
})
