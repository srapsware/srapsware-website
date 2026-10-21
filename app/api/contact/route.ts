import { site } from '@/config/site'
import { parseContact,uploadLimits } from '@/lib/contact-schema'
import { escapeHTML,protectRequest,readBoundedBody,RequestError,verifyHuman } from '@/lib/request-security'
import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export const runtime = 'nodejs'
export async function POST(request: Request) {
  try {
    await protectRequest(request, 'contact')
    const body = await readBoundedBody(request, uploadLimits.totalBytes)
    const form = await new Response(body, { headers: { 'Content-Type': request.headers.get('content-type') || '' } }).formData().catch(() => { throw new RequestError('Use a valid contact form.') })
    const { values, errors } = parseContact(form)
    if (Object.keys(errors).length) return NextResponse.json({ error: 'Please check your details.', errors }, { status: 400 })
    const files = form.getAll('files').filter(value => typeof value !== 'string' && value.size > 0) as File[]
    if (files.length > uploadLimits.count || files.some(file => file.size > uploadLimits.fileBytes)) throw new RequestError('Attach up to three files, each under 3 MB.', 413)
    const attachments = await Promise.all(files.map(async file => {
      const data = Buffer.from(await file.arrayBuffer())
      const ext = file.name.split('.').pop()?.toLowerCase()
      const valid = (ext === 'pdf' && data.subarray(0, 5).toString() === '%PDF-') ||
        (ext === 'png' && data.subarray(0, 8).equals(Buffer.from([137,80,78,71,13,10,26,10]))) ||
        ((ext === 'jpg' || ext === 'jpeg') && data[0] === 255 && data[1] === 216 && data[2] === 255)
      if (!valid) throw new RequestError('Attachments must be valid PDF, PNG or JPEG files.')
      return { filename: file.name.replace(/[^a-zA-Z0-9._-]/g, '_').slice(-120), content: data }
    }))
    if (!values.turnstileToken) throw new RequestError('Complete the verification before sending.')
    if (!process.env.TURNSTILE_SECRET_KEY || !process.env.SMTP_USER || !process.env.SMTP_PASSWORD) throw new RequestError('Contact service is temporarily unavailable. Please email us directly.', 503)
    await verifyHuman(values.turnstileToken)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com', port: Number(process.env.SMTP_PORT || 587),
      secure: process.env.SMTP_PORT === '465', auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASSWORD },
      connectionTimeout: 10_000, greetingTimeout: 10_000, socketTimeout: 20_000,
    })
    const entries = Object.entries(values).filter(([key, value]) => value && key !== 'turnstileToken')
    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.CONTACT_TO || site.email, replyTo: values.email,
      subject: `Website ${values.inquiryType} inquiry - ${values.firstName}`,
      text: entries.map(([key, value]) => `${key}: ${value}`).join('\n\n'),
      html: `<h1>Website inquiry</h1>${entries.map(([key, value]) => `<p><strong>${escapeHTML(key)}</strong></p><p style="white-space:pre-wrap">${escapeHTML(value)}</p>`).join('')}`,
      attachments,
    })
    return NextResponse.json({ message: 'Thank you. Your inquiry has been sent to our team.' })
  } catch (error) {
    if (!(error instanceof RequestError)) console.error('Contact delivery failed', { type: error instanceof Error ? error.name : 'unknown' })
    return NextResponse.json({ error: error instanceof RequestError ? error.message : 'We could not send your inquiry. Please email us directly or try again.' }, { status: error instanceof RequestError ? error.status : 502 })
  }
}
