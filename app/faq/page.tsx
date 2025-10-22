'use client'

import { useState, useMemo } from 'react'
import Script from 'next/script'
import { ChevronDown, Search } from 'lucide-react'

const FAQS = [
  {
    q: 'What does an IT consulting engagement typically include?',
    a: 'A current-state assessment, prioritized roadmap, governance model, and execution cadence. Depending on needs, this may include platform modernization, cybersecurity improvements, automation, or vendor alignment.'
  },
  {
    q: 'How is a Fractional CIO different from IT support?',
    a: 'A Fractional CIO focuses on strategic direction and business alignment, while IT support focuses on day-to-day technical issues. The CIO defines where technology is going—support ensures it runs smoothly.'
  },
  {
    q: 'What size organizations do you work with?',
    a: 'Typically 50–1,500 employees, including private equity-backed, mid-market, and nonprofit organizations. The model flexes to provide strategic leadership without full-time overhead.'
  },
  {
    q: 'Do you replace existing vendors or teams?',
    a: 'Not unless needed. The goal is to strengthen what exists—clarify roles, align vendors, and improve accountability. Transitions only happen when it’s clear they’ll improve outcomes.'
  },
  {
    q: 'How quickly can you start?',
    a: 'Discovery typically begins within days. Most clients have an actionable 90-day plan in hand within 2–3 weeks.'
  },
  {
    q: 'What does success look like?',
    a: 'Aligned technology and business goals, measurable cost efficiency, reduced risk, improved uptime, and a clear operating rhythm for continued progress.'
  },
  {
    q: 'Do you help with enterprise applications like ERP or CRM?',
    a: 'Yes—services include requirements definition, vendor selection, implementation governance, and value realization, ensuring systems fit your business model and deliver ROI.'
  },
  {
    q: 'How do you approach cybersecurity?',
    a: 'Identity-first security, strong email/endpoint protection, vulnerability management, and incident readiness. The goal: a proactive, auditable security posture aligned to business risk.'
  },
  {
    q: 'How do you price your services?',
    a: 'Fixed-fee assessments and projects; monthly retainer for fractional leadership. Pricing is transparent, scoped around defined outcomes, and tied to measurable value.'
  },
  {
    q: 'When do clients typically see results?',
    a: 'Early wins usually appear within 30–60 days through improved visibility, reduced downtime, or vendor savings. Larger initiatives unfold through a structured roadmap.'
  }
]

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return FAQS
    return FAQS.filter(
      item =>
        item.q.toLowerCase().includes(q) ||
        item.a.toLowerCase().includes(q)
    )
  }, [query])

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a }
    }))
  }

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden py-14 md:py-20">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(900px_320px_at_50%_-80px,rgba(30,183,217,0.08),transparent)]" />
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Frequently Asked Questions</h1>
          <p className="text-lg text-[color:var(--muted)] mt-3 max-w-3xl">
            Straightforward answers to common questions about IT consulting, technology leadership, and digital transformation.
          </p>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-12">
        <div className="container max-w-3xl">
          {/* Search */}
          <div className="relative mb-10">
            <input
              type="text"
              placeholder="Search FAQs..."
              value={query}
              onChange={e => setQuery(e.target.value)}
              className="w-full rounded-lg border border-[color:var(--line)] bg-white/90 px-4 py-3 pr-10 shadow-sm"
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-[color:var(--muted)] w-5 h-5" />
          </div>

          {/* Questions */}
          <div className="divide-y divide-[color:var(--line)]/60">
            {filtered.map((item, idx) => {
              const isOpen = openIndex === idx
              return (
                <div key={idx} className="py-4">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between text-left font-semibold text-lg hover:text-[color:var(--brand)] transition"
                  >
                    <span>{item.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180 text-[color:var(--brand)]' : ''}`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isOpen ? 'max-h-60 mt-2' : 'max-h-0'
                    }`}
                  >
                    <p className="text-[color:var(--muted)] leading-relaxed text-base">
                      {item.a}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* CTA */}
          <div className="mt-12 rounded-2xl border border-[color:var(--line)]/60 bg-white/90 backdrop-blur p-6 shadow-sm flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <div>
              <div className="font-bold">Still have questions?</div>
              <div className="text-[color:var(--muted)]">Let’s talk about your specific goals and challenges.</div>
            </div>
            <a href="/contact" className="btn btn-primary self-start md:self-auto">
              Request Discovery Call
            </a>
          </div>
        </div>
      </section>

      <Script
        id="faq-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  )
}
