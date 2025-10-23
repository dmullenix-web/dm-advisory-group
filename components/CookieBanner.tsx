'use client'

import { useEffect, useState } from 'react'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent')
    if (!consent) setVisible(true)
  }, [])

  function acceptCookies() {
    localStorage.setItem('cookieConsent', 'true')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 bg-white border-t border-[color:var(--line)] shadow-md">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 px-5 py-4 text-sm">
        <p className="text-[color:var(--muted)] leading-snug">
          We use basic cookies to enhance your browsing experience and analyze site traffic. By
          continuing to use this site, you agree to our{' '}
          <a
            href="/privacy-policy"
            className="text-[color:var(--brand)] underline hover:text-[color:var(--brand-hover)]"
          >
            Privacy Policy
          </a>.
        </p>
        <button
          onClick={acceptCookies}
          className="bg-[color:var(--brand)] text-white rounded-lg px-4 py-1.5 font-medium hover:opacity-90 transition"
        >
          Accept
        </button>
      </div>
    </div>
  )
}
