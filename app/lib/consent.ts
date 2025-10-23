// app/lib/consent.ts
export type Consent = {
  analytics: boolean
  marketing: boolean
  timestamp: number
  explicit?: boolean // true = user clicked; false/undefined = implied or unknown
}

const KEY = 'dm_consent_v1'
const COOKIE = 'dm_consent'

export function getConsent(): Consent | null {
  if (typeof window === 'undefined') return null
  const raw = localStorage.getItem(KEY)
  if (!raw) return null
  try {
    return JSON.parse(raw) as Consent
  } catch {
    return null
  }
}

export function setConsent(c: Consent) {
  if (typeof window === 'undefined') return
  localStorage.setItem(KEY, JSON.stringify(c))
  document.cookie = `${COOKIE}=${encodeURIComponent(JSON.stringify(c))};path=/;max-age=${60*60*24*365}`
  window.dispatchEvent(new CustomEvent('dm-consent-updated', { detail: c }))
}
