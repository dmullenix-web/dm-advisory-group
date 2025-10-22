'use client'

export default function Footer() {
  function handleManageCookies() {
    localStorage.removeItem('cookieConsent')
    alert('Cookie preferences have been reset. Reload the page to see the banner again.')
  }

  return (
    <footer className="border-t border-[color:var(--line)] bg-white/60 backdrop-blur-sm text-sm text-[color:var(--muted)]">
      <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-2 md:gap-4">
        {/* Left */}
        <div className="text-center md:text-left">
          <span className="font-semibold text-[color:var(--text)]">
            DM Advisory Group, LLC
          </span>
          <span className="hidden md:inline">
            {' '}
            &nbsp;·&nbsp; Fractional CIO · Strategy · Security · Operations · Data
          </span>
        </div>

        {/* Right */}
        <div className="text-center md:text-right">
          © {new Date().getFullYear()} DM Advisory Group. All rights reserved.
        </div>
      </div>

      {/* Right-justified legal links */}
      <div className="container pb-4 text-xs flex justify-end">
        <div className="space-x-3">
          <a
            href="/privacy-policy"
            className="text-[color:var(--muted)] hover:text-[color:var(--brand)] underline"
          >
            Privacy Policy
          </a>
          <a
            href="/terms-of-use"
            className="text-[color:var(--muted)] hover:text-[color:var(--brand)] underline"
          >
            Terms of Use
          </a>
          <button
            onClick={handleManageCookies}
            className="text-[color:var(--muted)] hover:text-[color:var(--brand)] underline"
          >
            Manage Cookies
          </button>
        </div>
      </div>
    </footer>
  )
}
