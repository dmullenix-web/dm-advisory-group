'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

/**
 * Generic event tracking helper (usable anywhere)
 * Example: track('cta_click', { label: 'Get Started', page: '/services' })
 */
export function track(event: string, params: Record<string, any> = {}) {
  if (typeof window === 'undefined' || !window.gtag) return
  window.gtag('event', event, params)
}

/**
 * Automatically tracks page views when routes change
 * Use this in your layout.tsx so each page navigation sends a page_view
 */
export default function RouteTracker() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (typeof window === 'undefined' || !window.gtag) return

    const url = pathname + (searchParams?.toString() ? `?${searchParams}` : '')
    window.gtag('event', 'page_view', {
      page_location: window.location.origin + url,
      page_path: pathname,
      page_title: document.title || undefined,
    })
  }, [pathname, searchParams])

  return null
}

/**
 * (Optional) Convenience hooks for specific event types
 * You can import these where needed
 */
export const AnalyticsEvents = {
  ctaClick: (cta: string, page?: string) =>
    track('cta_click', { cta, page: page || window.location.pathname }),
  contactSubmit: (status: 'success' | 'error') =>
    track(`contact_submit_${status}`, { page: window.location.pathname }),
  calendlyBooked: (eventUri: string) =>
    track('calendly_event_scheduled', { event_uri: eventUri }),
  outboundClick: (href: string) =>
    track('outbound_click', { href, page: window.location.pathname }),
  fileDownload: (file: string) =>
    track('file_download', { file, page: window.location.pathname }),
  scrollDepth: (percent: number) =>
    track('scroll_depth', { percent, page: window.location.pathname }),
}
