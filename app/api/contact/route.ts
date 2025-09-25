import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)
const TO_EMAIL = process.env.CONTACT_TO || 'hello@dmadvisorygroup.com'
const FROM_EMAIL =
  process.env.CONTACT_FROM || 'DM Advisory <no-reply@dmadvisory.com>'

export async function POST(req: NextRequest) {
  try {
    const { name, email, company, message, website } = await req.json()

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 })
    }
    // Honeypot — silently succeed if filled
    if (website) return NextResponse.json({ ok: true })

    const subject = `New inquiry from ${name}${company ? ` @ ${company}` : ''}`
    const html = `
      <div style="font-family:Inter,system-ui,Arial,sans-serif;line-height:1.6">
        <h2 style="margin:0 0 8px">New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        ${company ? `<p><strong>Company:</strong> ${escapeHtml(company)}</p>` : ''}
        <p><strong>Message:</strong></p>
        <pre style="white-space:pre-wrap;background:#f6fafd;padding:12px;border-radius:10px;border:1px solid #a5d9f3">${escapeHtml(message)}</pre>
      </div>
    `

    const { error } = await resend.emails.send({
      to: TO_EMAIL,
      from: FROM_EMAIL,  // verify this sender/domain in Resend
      replyTo: email,    // <-- fixed
      subject,
      html,
    })

    if (error) {
      console.error(error)
      return NextResponse.json({ error: 'Email failed to send.' }, { status: 500 })
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Unexpected error.' }, { status: 500 })
  }
}

function escapeHtml(s: string) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}
