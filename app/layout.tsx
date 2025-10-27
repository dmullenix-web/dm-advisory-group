// app/layout.tsx
import './globals.css'
import type { Metadata } from 'next'
import Header from '../components/Header'
import Footer from '../components/Footer'

// 🔹 Consent banner
import CookieConsent from './components/CookieConsent'
// 🔹 GA4 loader (respects consent)
import GA4 from './components/GA4'
// 🔹 NEW: SPA page-view tracker for GA4
import RouteTracker from './components/RouteTracker'

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

        {/* GA4 loads only after Analytics consent is granted */}
        <GA4 />
        {/* Track SPA route changes as page views */}
        <RouteTracker />

        <main>{children}</main>
        <Footer />

        {/* Consent modal (appears if no prior choice, or via “Manage Cookies”) */}
        <CookieConsent />
      </body>
    </html>
  )
}
