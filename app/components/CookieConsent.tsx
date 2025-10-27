'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { getConsent, setConsent } from '../lib/consent'

export default function CookieConsent() {
  const [show, setShow] = useState(false)
  const [prefsOpen, setPrefsOpen] = useState(false)
  const [analytics, setAnalytics] = useState(true)
  const [marketing, setMarketing] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    if (!getConsent()) setShow(true)
    const open = () => setShow(true)
    window.addEventListener('dm-open-consent', open)
    return () => window.removeEventListener('dm-open-consent', open)
  }, [])

  useEffect(() => {
    if (!show) return
    const c = getConsent()
    const alreadyImplied = sessionStorage.getItem('dm_implied_once') === '1'
    if (!c && !alreadyImplied) {
      setConsent({ analytics: false, marketing: false, timestamp: Date.now(), explicit: false })
      sessionStorage.setItem('dm_implied_once', '1')
      setShow(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  useEffect(() => {
    const c = getConsent()
    const isHome =
      pathname === '/' ||
      pathname === '' ||
      pathname === process.env.NEXT_PUBLIC_BASE_PATH ||
      pathname === '/en'
    if (isHome && c && c.explicit !== true) setShow(true)
  }, [pathname])

  function confirmAll() {
    setConsent({ analytics: true, marketing: true, timestamp: Date.now(), explicit: true })
    setShow(false)
  }
  function rejectAll() {
    setConsent({ analytics: false, marketing: false, timestamp: Date.now(), explicit: true })
    setShow(false)
  }
  function savePrefs() {
    setConsent({ analytics, marketing, timestamp: Date.now(), explicit: true })
    setShow(false)
  }

  if (!show) return null

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 border-t border-[color:var(--line)] bg-white/95 backdrop-blur-xl shadow-[0_-8px_20px_rgba(0,0,0,0.08)] transition-all">
      <div className="container px-5 py-4 md:py-4 pb-[calc(1rem+env(safe-area-inset-bottom))]">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          {/* Copy */}
          <div className="flex items-start gap-3 md:pr-4">
            <svg
              aria-hidden="true"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              className="shrink-0 text-[color:var(--brand)] mt-0.5"
            >
              <path
                fill="currentColor"
                d="M12 2a9.93 9.93 0 0 0-7.07 2.93A10 10 0 1 0 22 12a1 1 0 0 0-1.18-1 2.5 2.5 0 0 1-2.38-3.28A1 1 0 0 0 17.5 6a2.5 2.5 0 0 1-2.24-3.57A10 10 0 0 0 12 2Zm-3 6a1 1 0 1 1-1 1 1 1 0 0 1 1-1Zm6 3a1 1 0 1 1-1 1 1 1 0 0 1 1-1ZM9 14.5A1.5 1.5 0 1 1 7.5 16 1.5 1.5 0 0 1 9 14.5Zm6.5 2a1 1 0 1 1-1 1 1 1 0 0 1 1-1Z"
              />
            </svg>
            <div>
              <div className="font-semibold text-[color:var(--text)]">We use cookies</div>
              <p className="text-sm text-[color:var(--muted)] leading-relaxed">
                We use cookies to improve your experience, analyze site traffic, and support
                marketing. Read our{' '}
                <a href="/privacy-policy" className="underline text-[color:var(--brand)]">
                  Privacy Policy
                </a>
                .
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="w-full md:w-auto">
            <div className="flex flex-col sm:flex-row sm:justify-end gap-2 sm:gap-3">
              <button
                onClick={rejectAll}
                className="h-9 text-xs md:text-sm rounded-md border border-[color:var(--line)] px-4 font-medium hover:bg-[color:var(--surface)] transition"
              >
                Reject All
              </button>
              <button
                onClick={() => setPrefsOpen(v => !v)}
                className="h-9 text-xs md:text-sm rounded-md border border-[color:var(--line)] px-4 font-medium hover:bg-[color:var(--surface)] transition"
              >
                Settings
              </button>
              <button
                onClick={confirmAll}
                className="h-9 text-xs md:text-sm rounded-md px-4 font-semibold text-white shadow-sm transition"
                style={{ backgroundColor: 'var(--brand)' }}
              >
                Accept All
              </button>
            </div>
          </div>
        </div>

        {/* Preferences */}
        {prefsOpen && (
          <div className="mt-4 border-t border-[color:var(--line)] pt-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div className="flex flex-col sm:flex-row gap-4">
                <label className="flex items-center gap-2 text-sm">
                  <input type="checkbox" disabled checked />{' '}
                  <span className="font-medium">Essential</span>
                </label>
                <label className="flex items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    checked={analytics}
                    onChange={e => setAnalytics(e.target.checked)}
                  />{' '}
                  <span className="font-medium">Analytics</span>
                </label>
                <label className="flex items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    checked={marketing}
                    onChange={e => setMarketing(e.target.checked)}
                  />{' '}
                  <span className="font-medium">Marketing</span>
                </label>
              </div>

              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                <button
                  onClick={() => setPrefsOpen(false)}
                  className="h-9 text-xs md:text-sm rounded-md border border-[color:var(--line)] px-4 font-medium hover:bg-[color:var(--surface)]"
                >
                  Back
                </button>
                <button
                  onClick={savePrefs}
                  className="h-9 text-xs md:text-sm rounded-md px-4 font-semibold text-white shadow-sm"
                  style={{ backgroundColor: 'var(--brand)' }}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
