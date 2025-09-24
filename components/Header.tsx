'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!menuRef.current) return;
      if (!menuRef.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener('click', onDocClick);
    return () => document.removeEventListener('click', onDocClick);
  }, []);

  const link = (href: string, label: string) => (
    <Link
      href={href}
      className={`px-3 py-2 rounded-xl ${
        path === href
          ? 'bg-white border border-[color:var(--line)]'
          : 'hover:text-[color:var(--brand)]'
      }`}
      onClick={() => setOpen(false)}
    >
      {label}
    </Link>
  );

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-[color:var(--line)] overflow-visible">
      {/* stack on mobile so logo has its own row */}
      <div className="container py-2 flex flex-col items-center gap-2 md:flex-row md:items-center md:justify-between">
        {/* LOGO — large on mobile */}
        <Link href="/" className="relative block -mb-2 md:mb-0" onClick={() => setOpen(false)}>
          <Image
            src="/logo.png"
            alt="DM Advisory Group"
            width={360}
            height={120}
            priority
            className="relative z-10 md:scale-[0.9] lg:scale-100"
          />
        </Link>

        {/* NAV */}
        <nav className="flex items-center justify-center md:justify-end gap-3 sm:gap-4 relative flex-wrap">
          {/* Services dropdown */}
          <div
            ref={menuRef}
            className="relative z-60"
          >
            <button
              type="button"
              className="px-3 py-2 rounded-xl font-medium inline-flex items-center gap-1 hover:text-[color:var(--brand)]"
              aria-haspopup="menu"
              aria-expanded={open}
              aria-controls="services-menu"
              onClick={() => setOpen(v => !v)}   // tap/click support for all devices
            >
              Services
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
              />
            </button>

            {/* Backdrop (mobile) to make tapping outside easy */}
            <button
              aria-hidden
              className={`fixed inset-0 md:hidden ${open ? 'block' : 'hidden'}`}
              onClick={() => setOpen(false)}
            />

            {/* DROPDOWN PANEL */}
            <div
              id="services-menu"
              role="menu"
              className={`
                z-[80]

                /* --- Mobile: viewport-anchored sheet --- */
                fixed inset-x-2 top-[72px]         /* ~header height; tweak if needed */
                md:static md:absolute md:inset-auto
                md:left-0 md:top-full md:mt-1

                w-auto md:w-72
                max-h-[70vh] overflow-auto
                rounded-xl border border-[color:var(--line)] bg-white shadow-lg p-2

                /* Show/Hide animation */
                transition opacity-0 translate-y-1 pointer-events-none
                ${open ? 'opacity-100 translate-y-0 pointer-events-auto' : ''}
              `}
            >
              <Link href="/services/it-consulting" className="block px-3 py-2 rounded-lg hover:bg-[color:var(--surface)]" onClick={() => setOpen(false)}>IT Consulting</Link>
              <Link href="/services/enterprise-applications" className="block px-3 py-2 rounded-lg hover:bg-[color:var(--surface)]" onClick={() => setOpen(false)}>Enterprise Applications</Link>
              <Link href="/services/fractional-cio" className="block px-3 py-2 rounded-lg hover:bg-[color:var(--surface)]" onClick={() => setOpen(false)}>Fractional CIO</Link>
              <Link href="/services/automation" className="block px-3 py-2 rounded-lg hover:bg-[color:var(--surface)]" onClick={() => setOpen(false)}>Automation</Link>
              <Link href="/services/artificial-intelligence" className="block px-3 py-2 rounded-lg hover:bg-[color:var(--surface)]" onClick={() => setOpen(false)}>Artificial Intelligence</Link>
              <Link href="/services/cyber-security" className="block px-3 py-2 rounded-lg hover:bg-[color:var(--surface)]" onClick={() => setOpen(false)}>Cyber Security</Link>
            </div>
          </div>

          {link('/results', 'Results')}
          {link('/about', 'About')}
          {link('/faq', 'FAQ')}

          <Link href="/contact" className="btn btn-primary hidden sm:inline-flex" onClick={() => setOpen(false)}>
            Book a Discovery Call
          </Link>
        </nav>
      </div>
    </header>
  );
}
