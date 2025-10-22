// app/contact/page.tsx
'use client'
import { useState } from 'react'
import Script from 'next/script'

type Status = { state: 'idle' | 'loading' | 'success' | 'error'; message?: string }

export default function ContactPage() {
  const [status, setStatus] = useState<Status>({ state: 'idle' })

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus({ state: 'loading' })
    const form = e.currentTarget
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value.trim(),
      email: (form.elements.namedItem('email') as HTMLInputElement).value.trim(),
      company: (form.elements.namedItem('company') as HTMLInputElement).value.trim(),
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value.trim(),
      website: (form.elements.namedItem('website') as HTMLInputElement).value.trim(),
    }
    if (!data.name || !data.email || !data.message) {
      setStatus({ state: 'error', message: 'Please fill in name, email, and a short message.' })
      return
    }
    if (data.website) {
      setStatus({ state: 'success', message: 'Thanks! We’ll be in touch shortly.' })
      form.reset()
      return
    }
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) {
        const err = await res.json().catch(() => ({}))
        throw new Error(err?.error || 'Failed to send. Please try again.')
      }
      setStatus({ state: 'success', message: 'Thanks! We’ll be in touch shortly.' })
      form.reset()
    } catch (err: any) {
      setStatus({ state: 'error', message: err?.message || 'Something went wrong.' })
    }
  }

  return (
    <main>
      {/* Calendly assets (only once) */}
      <link rel="stylesheet" href="https://assets.calendly.com/assets/external/widget.css" />
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
        // (optional) tag to help you ensure it's not duplicated elsewhere
        onLoad={() => console.log('Calendly script loaded')}
      />

      <section className="relative overflow-hidden py-12 md:py-16">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(900px_300px_at_50%_-60px,rgba(30,183,217,0.08),transparent)]" />
        <div className="container">
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-1">Contact</h1>
          <p className="text-[color:var(--muted)] max-w-2xl">
            Book time directly or send a message—whichever you prefer.
          </p>

          <div className="mt-6 grid md:grid-cols-2 gap-6">
            {/* Calendly (compact) */}
            <div className="card p-4">
              <h2 className="font-semibold mb-2">Book Time With Me</h2>
              <div
                className="calendly-inline-widget rounded-xl border border-[color:var(--line)]"
                data-url="https://calendly.com/david-dmadvisorygroup/30min?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=1891ac"
                style={{ minWidth: '300px', height: '520px' }}
              />
              <noscript>
                <div className="mt-2 text-sm">
                  Calendly requires JavaScript. Book at{' '}
                  <a className="text-[color:var(--brand)]" href="https://calendly.com/david-dmadvisorygroup/30min">
                    this link
                  </a>.
                </div>
              </noscript>
            </div>

            {/* Contact form */}
            <div className="card p-5">
              <h2 className="font-semibold mb-2">Send a Message</h2>
              <form onSubmit={onSubmit} className="grid gap-3">
                {/* ...unchanged form fields... */}
                <button type="submit" disabled={status.state === 'loading'} className="btn btn-primary">
                  {status.state === 'loading' ? 'Sending…' : 'Send Message'}
                </button>
                {status.state === 'error' && <p className="text-sm text-red-600">{status.message}</p>}
                {status.state === 'success' && <p className="text-sm text-green-600">{status.message}</p>}
              </form>
            </div>
          </div>

          <p className="text-xs text-[color:var(--muted)] mt-4">
            By contacting us you agree to our standard communications. We never sell your data.
          </p>
        </div>
      </section>
    </main>
  )
}
