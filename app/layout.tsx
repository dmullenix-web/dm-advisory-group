
import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CookieBanner from '../components/CookieBanner'

export const metadata = {
  title: 'DM Advisory Group — Fractional CIO Services',
  description: 'Fractional CIO services: strategy, governance, security, operations, data.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
