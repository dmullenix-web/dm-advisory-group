// app/layout.tsx
import './globals.css'
import type { Metadata } from 'next'
import Header from '../components/Header'
import Footer from '../components/Footer'

// 🔹 New consent modal (replaces old CookieBanner)
import CookieConsent from './components/CookieConsent'
// 🔹 Optional: GA4 loader that respects consent (safe to remove if not used)
import GA4 from './components/GA4'

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
        <main>{children}</main>
        <Footer />
        {/* Consent modal (appears if no prior choice, or via “Manage Cookies”) */}
        <CookieConsent />
        {/* GA4 loads only after Analytics consent is granted */}
        <GA4 />
      </body>
    </html>
  )
}
