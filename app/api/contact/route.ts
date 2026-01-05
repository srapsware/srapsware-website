import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    
    // Extract form fields
    const firstName = formData.get('firstName') as string
    const lastName = formData.get('lastName') as string
    const email = formData.get('email') as string
    const phone = formData.get('phone') as string
    const inquiryType = formData.get('inquiryType') as string
    const serviceType = formData.get('serviceType') as string
    const message = formData.get('message') as string
    const company = formData.get('company') as string
    const budget = formData.get('budget') as string
    const preferredDate = formData.get('preferredDate') as string
    const preferredTime = formData.get('preferredTime') as string

    // Validation
    if (!firstName || !lastName || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'Please fill in all required fields' },
        { status: 400 }
      )
    }

    if (!email.includes('@')) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      )
    }

    // Get files
    const files = formData.getAll('files') as File[]
    
    // Process attachments
    const attachments = await Promise.all(
      files.map(async (file) => {
        const buffer = Buffer.from(await file.arrayBuffer())
        return {
          filename: file.name,
          content: buffer,
        }
      })
    )

    // Determine email subject and formatting based on inquiry type
    let subject = 'New Contact Form Submission'
    let inquiryLabel = 'General Inquiry'
    
    switch (inquiryType) {
      case 'quote':
        subject = 'New Quote Request'
        inquiryLabel = 'Quote Request'
        break
      case 'schedule':
        subject = 'New Call Scheduling Request'
        inquiryLabel = 'Schedule Call'
        break
      case 'support':
        subject = 'New Support Request'
        inquiryLabel = 'Support Request'
        break
    }

    // SMTP Configuration
    const SMTP_HOST = process.env.SMTP_HOST || 'smtp.gmail.com'
    const SMTP_PORT = parseInt(process.env.SMTP_PORT || '587')
    const SMTP_USER = process.env.SMTP_USER
    const SMTP_PASSWORD = process.env.SMTP_PASSWORD

    if (!SMTP_USER || !SMTP_PASSWORD) {
      console.error('SMTP credentials not configured')
      return NextResponse.json(
        { error: 'Email service not configured. Please contact us directly.' },
        { status: 500 }
      )
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: SMTP_PORT === 465, // true for 465, false for other ports
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASSWORD,
      },
    })

    // Email content with dynamic fields
    const emailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; }
          .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
          .content { background: #f9fafb; padding: 30px; border: 1px solid #e5e7eb; border-top: none; }
          .section { margin-bottom: 30px; }
          .section-title { color: #1f2937; font-size: 18px; font-weight: bold; border-bottom: 2px solid #667eea; padding-bottom: 10px; margin-bottom: 15px; }
          .field { margin-bottom: 15px; }
          .label { font-weight: bold; color: #6b7280; margin-bottom: 5px; }
          .value { color: #1f2937; padding: 10px; background: white; border-radius: 4px; border-left: 4px solid #667eea; }
          .message-box { background: white; padding: 20px; border-radius: 8px; border-left: 4px solid #667eea; white-space: pre-wrap; }
          .files-list { list-style: none; padding: 0; }
          .files-list li { background: white; padding: 10px 15px; margin: 5px 0; border-radius: 4px; border-left: 3px solid #667eea; }
          .footer { text-align: center; padding: 20px; background: #1f2937; color: #9ca3af; font-size: 12px; border-radius: 0 0 8px 8px; }
          .badge { display: inline-block; background: #667eea; color: white; padding: 5px 15px; border-radius: 20px; font-size: 14px; margin-bottom: 15px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1 style="margin: 0; font-size: 28px;">New Contact: ${inquiryLabel}</h1>
            <div class="badge">${inquiryType.toUpperCase()}</div>
          </div>
          <div class="content">
            <div class="section">
              <div class="section-title">Contact Information</div>
              <div class="field">
                <div class="label">Name</div>
                <div class="value">${firstName} ${lastName}</div>
              </div>
              <div class="field">
                <div class="label">Email</div>
                <div class="value"><a href="mailto:${email}" style="color: #667eea; text-decoration: none;">${email}</a></div>
              </div>
              <div class="field">
                <div class="label">Phone</div>
                <div class="value"><a href="tel:${phone}" style="color: #667eea; text-decoration: none;">${phone}</a></div>
              </div>
              ${company ? `
              <div class="field">
                <div class="label">Company</div>
                <div class="value">${company}</div>
              </div>` : ''}
              ${serviceType ? `
              <div class="field">
                <div class="label">${inquiryType === 'support' ? 'Issue Type' : 'Service Type'}</div>
                <div class="value">${serviceType}</div>
              </div>` : ''}
              ${budget ? `
              <div class="field">
                <div class="label">Budget Range</div>
                <div class="value">${budget}</div>
              </div>` : ''}
              ${preferredDate ? `
              <div class="field">
                <div class="label">Preferred Date</div>
                <div class="value">${preferredDate}</div>
              </div>` : ''}
              ${preferredTime ? `
              <div class="field">
                <div class="label">Preferred Time</div>
                <div class="value">${preferredTime}</div>
              </div>` : ''}
            </div>

            <div class="section">
              <div class="section-title">Message</div>
              <div class="message-box">${message}</div>
            </div>

            ${files.length > 0 ? `
            <div class="section">
              <div class="section-title">Attachments (${files.length})</div>
              <ul class="files-list">
                ${files.map(file => `
                  <li>
                    <strong>${file.name}</strong>
                    <span style="color: #6b7280; margin-left: 10px;">(${(file.size / 1024).toFixed(2)} KB)</span>
                  </li>
                `).join('')}
              </ul>
            </div>` : ''}
          </div>
          <div class="footer">
            <p style="margin: 0;">This email was sent from Srapsware contact form</p>
            <p style="margin: 5px 0;">Date: ${new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' })} IST</p>
          </div>
        </div>
      </body>
      </html>
    `

    // Send email
    await transporter.sendMail({
      from: '"Srapsware Website" <shiv@srapsware.com>',
      to: 'contact@srapsware.com',
      replyTo: email,
      subject: `${subject} - ${firstName} ${lastName}`,
      html: emailHtml,
      attachments: attachments.length > 0 ? attachments : undefined,
    })

    return NextResponse.json(
      { message: 'Message sent successfully!' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    )
  }
}
