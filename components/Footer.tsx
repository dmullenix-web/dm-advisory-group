// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="border-t border-[color:var(--line)] bg-white/60 backdrop-blur-sm text-sm text-[color:var(--muted)]">
      <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-2 md:gap-4">
        {/* Left */}
        <div className="text-center md:text-left">
          <span className="font-semibold text-[color:var(--text)]">
            DM Advisory Group, LLC
          </span>
          <span className="hidden md:inline"> &nbsp;·&nbsp; Fractional CIO · Strategy · Security · Operations · Data</span>
        </div>

        {/* Right */}
        <div className="text-center md:text-right">
          © {new Date().getFullYear()} DM Advisory Group. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
