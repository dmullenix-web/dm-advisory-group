'use client'
import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

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
