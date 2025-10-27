// app/components/GA4.tsx
'use client'

import Script from 'next/script'
import { useEffect, useState } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { getConsent } from '../lib/consent'

declare global {
  interface Window {
    dataLayer: any[]
    gtag: (...args: any[]) => void
  }
}

const GA_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-B005XV9TRC' // or set in Vercel env

export default function GA4() {
  const [enabled, setEnabled] = useState(false)
  const pathname = usePathname()
  const searchParams = useSearchParams()

  // Init + consent handling
  useEffect(() => {
    const apply = () => {
      const c = getConsent()

      if (!window.dataLayer) window.dataLayer = []
      const gtag = (...args: any[]) => window.dataLayer.push(args)
      window.gtag = gtag

      // Consent Mode v2 defaults: non-essential denied
      gtag('consent', 'default', {
        ad_storage: 'denied',
        ad_user_data: 'denied',
        ad_personalization: 'denied',
        analytics_storage: 'denied',
        functionality_storage: 'granted',
        security_storage: 'granted',
      })

      if (c?.analytics) {
        gtag('consent', 'update', { analytics_storage: 'granted' })
      }
      if (c?.marketing) {
        gtag('consent', 'update', {
          ad_storage: 'granted',
          ad_user_data: 'granted',
          ad_personalization: 'granted',
        })
      }

      // Only enable GA when analytics consent is granted
      setEnabled(Boolean(c?.analytics))
    }

    apply()
    window.addEventListener('dm-consent-updated', apply as EventListener)
    return () => window.removeEventListener('dm-consent-updated', apply as EventListener)
  }, [])

  // Track SPA route changes as page views
  useEffect(() => {
    if (!enabled || !window.gtag) return
    const url = pathname + (searchParams?.toString() ? `?${searchParams}` : '')
    window.gtag('event', 'page_view', {
      page_location: window.location.origin + url,
      page_path: pathname,
      page_title: document?.title || undefined,
    })
  }, [pathname, searchParams, enabled])

  // Do NOT block on your real ID; just ensure it looks like a GA ID
  if (!enabled || !GA_ID || !GA_ID.startsWith('G-')) return null

  return (
    <>
      {/* Load GA library */}
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />

      {/* Configure GA (disable auto page_view; we send it manually above) */}
      <Script id="gtag-config" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', { anonymize_ip: true, send_page_view: false });
        `}
      </Script>
    </>
  )
}
