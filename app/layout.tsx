// app/layout.tsx
import './globals.css'
import type { Metadata } from 'next'
import Header from '../components/Header'
import Footer from '../components/Footer'
import dynamic from 'next/dynamic'

// Load client-only components in the browser (avoid prerender errors)
const CookieConsent = dynamic(() => import('./components/CookieConsent'), { ssr: false })
const GA4 = dynamic(() => import('./components/GA4'), { ssr: false })
// ⬇️ use the new RouteTracker from app/lib/track
const RouteTracker = dynamic(() => import('./lib/track'), { ssr: false })

export const metadata: Metadata = {
  title: 'DM Advisory Group LLC',
  description: 'Fractional CIO · Strategy · Security · Operations · Data',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon_180x180.png',
    other: [{ rel: 'icon', url: '/favicon.svg', type: 'image/svg+xml' }],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />

        {/* GA loads after consent (browser-only) */}
        <GA4 />
        {/* Track SPA route changes (browser-only) */}
        <RouteTracker />

        <main>{children}</main>
        <Footer />

        {/* Consent banner (browser-only) */}
        <CookieConsent />
      </body>
    </html>
  )
}
