// app/components/ScrollSection.tsx
'use client'

import { ReactNode } from 'react'
import clsx from 'clsx'

type ScrollSectionProps = {
  children: ReactNode
  variant?:
    | 'default'
    | 'bright'
    | 'structured'
    | 'dynamic'
    | 'dark'
    | 'secure'
    | 'clean'
}

/**
 * ScrollSection
 * A reusable wrapper that applies the blurred, scroll-fixed background
 * similar to Apple.com with subtle tonal variations.
 *
 * Usage:
 *   <ScrollSection variant="secure"> ...content... </ScrollSection>
 */
export default function ScrollSection({ children, variant = 'default' }: ScrollSectionProps) {
  // background filter intensity & tint by variant
  const variantStyles = {
    default: { blur: '6px', brightness: '0.95', white: '55', tint: '0.05' },
    bright: { blur: '4px', brightness: '1.05', white: '50', tint: '0.06' },
    structured: { blur: '8px', brightness: '0.9', white: '70', tint: '0.05' },
    dynamic: { blur: '4px', brightness: '1.05', white: '50', tint: '0.07' },
    dark: { blur: '8px', brightness: '0.85', white: '50', tint: '0.08' },
    secure: { blur: '7px', brightness: '0.92', white: '55', tint: '0.07' },
    clean: { blur: '6px', brightness: '1', white: '65', tint: '0.04' },
  }[variant]

  return (
    <section className="relative overflow-hidden py-12 md:py-16">
      {/* Scroll background */}
      <div
        className={clsx(
          'absolute inset-0 -z-10 bg-fixed bg-cover bg-center scale-110 transform-gpu will-change-transform'
        )}
        style={{
          backgroundImage: "url('/scroll-bg.svg')",
          filter: `blur(${variantStyles.blur}) brightness(${variantStyles.brightness})`,
        }}
        aria-hidden
      />
      {/* White + brand tint overlays */}
      <div className={`absolute inset-0 -z-10 bg-white/${variantStyles.white}`} aria-hidden />
      <div
        className={`absolute inset-0 -z-10`}
        style={{ backgroundColor: `rgba(24,145,172,${variantStyles.tint})` }}
        aria-hidden
      />

      {/* Content */}
      <div className="container relative z-10">{children}</div>
    </section>
  )
}
