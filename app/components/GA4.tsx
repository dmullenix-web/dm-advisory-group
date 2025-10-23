// app/components/GA4.tsx
'use client'

import Script from 'next/script'
import { useEffect, useState } from 'react'
import { getConsent } from '../lib/consent' // relative to /app/components

const GA_ID = 'G-XXXXXXXXXX' // <- put your GA4 measurement ID here

export default function GA4() {
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const apply = () => {
      const c = getConsent()

      // Ensure dataLayer/gtag exist
      // @ts-ignore
      window.dataLayer = window.dataLayer || []
      function gtag(){ window.dataLayer!.push(arguments as any) }
      // @ts-ignore
      window.gtag = gtag

      // Consent Mode v2: default deny
      gtag('consent', 'default', {
        ad_storage: 'denied',
        ad_user_data: 'denied',
        ad_personalization: 'denied',
        analytics_storage: 'denied',
        functionality_storage: 'granted',
        security_storage: 'granted',
      })

      // Grant based on stored consent
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

      // Only load GA script when analytics is allowed
      setEnabled(Boolean(c?.analytics))
    }

    apply()
    window.addEventListener('dm-consent-updated', apply as EventListener)
    return () => window.removeEventListener('dm-consent-updated', apply as EventListener)
  }, [])

  if (!enabled || GA_ID === 'G-XXXXXXXXXX') return null

  return (
    <>
      <Script id="gtag-base" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', { anonymize_ip: true });
        `}
      </Script>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
    </>
  )
}
