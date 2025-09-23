'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react'; // run: npm install lucide-react

export default function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);

  const link = (href: string, label: string) => (
    <Link
      href={href}
      className={`px-3 py-2 rounded-xl ${
        path === href
          ? 'bg-white border border-[color:var(--line)]'
          : 'hover:text-[color:var(--brand)]'
      }`}
    >
      {label}
    </Link>
  );

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-[color:var(--line)]">
      <div className="container py-3 flex items-center justify-between">
        {/* Logo (bleeds further down below header) */}
        <Link href="/" className="flex items-center gap-3 relative">
          <Image
            src="/logo.png"
            alt="DM Advisory Group"
            width={300}       // even bigger logo
            height={100}
            priority
            className="relative -mb-0 z-10" // pulls logo down more
          />
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-4 relative">
          {/* Services dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <button
              className="px-3 py-2 rounded-xl font-medium flex items-center gap-1 hover:text-[color:var(--brand)]"
              onClick={() => setOpen((v) => !v)}
              aria-haspopup="true"
              aria-expanded={open}
            >
              Services
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${
                  open ? 'rotate-180' : ''
                }`}
              />
            </button>

            {open && (
              <div
                className="
                  absolute left-0 top-full
                  w-64 rounded-xl border border-[color:var(--line)]
                  bg-white shadow-lg p-3 flex flex-col space-y-2
                "
              >
                <Link href="/services/it-consulting" className="block px-3 py-2 rounded hover:bg-[color:var(--surface)]">
                  IT Consulting
                </Link>
                <Link href="/services/enterprise-applications" className="block px-3 py-2 rounded hover:bg-[color:var(--surface)]">
                  Enterprise Applications
                </Link>
                <Link href="/services/fractional-cio" className="block px-3 py-2 rounded hover:bg-[color:var(--surface)]">
                  Fractional CIO
                </Link>
                <Link href="/services/automation" className="block px-3 py-2 rounded hover:bg-[color:var(--surface)]">
                  Automation
                </Link>
                <Link href="/services/artificial-intelligence" className="block px-3 py-2 rounded hover:bg-[color:var(--surface)]">
                  Artificial Intelligence
                </Link>
                <Link href="/services/cyber-security" className="block px-3 py-2 rounded hover:bg-[color:var(--surface)]">
                  Cyber Security
                </Link>
              </div>
            )}
          </div>

          {link('/results', 'Results')}
          {link('/about', 'About')}
          {link('/faq', 'FAQ')}

          <Link href="/contact" className="btn btn-primary">
            Book a Discovery Call
          </Link>
        </nav>
      </div>
    </header>
  );
}
