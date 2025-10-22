// app/privacy-policy/page.tsx
import Head from 'next/head'

export default function PrivacyPolicyPage() {
  return (
    <>
      <Head>
        <title>Privacy Policy | DM Advisory Group LLC</title>
        <meta
          name="description"
          content="Learn how DM Advisory Group LLC collects, protects, and uses personal information in accordance with U.S. and international privacy laws."
        />
        <link rel="canonical" href="https://www.dmadvisorygroup.com/privacy-policy" />
      </Head>

      <main className="max-w-3xl mx-auto px-6 py-16">
        <header className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-1">Privacy Policy</h1>
          <p className="text-sm text-[color:var(--muted)]">Effective Date: October 2025</p>
        </header>

        <section className="space-y-7 text-[color:var(--text)] leading-relaxed">
          <p>
            <strong>DM Advisory Group LLC</strong> (“DM Advisory,” “we,” “us,” or “our”) respects
            your privacy and is committed to handling your information responsibly. This Privacy
            Policy explains how we collect, use, disclose, and protect personal information through
            our website and related services. We are based in Texas, United States, and act as the
            data controller for personal data we process.
          </p>

          {/* 1. Scope */}
          <div>
            <h2 className="text-xl font-semibold mb-2">1. Scope</h2>
            <p>
              This policy applies to all visitors, clients, and contacts interacting with our website
              (<strong>dmadvisorygroup.com</strong>), scheduling platforms (such as Calendly), and
              communication channels. By using our site, you consent to the practices described
              herein.
            </p>
          </div>

          {/* 2. Information We Collect */}
          <div>
            <h2 className="text-xl font-semibold mb-2">2. Information We Collect</h2>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>
                <strong>Contact Information:</strong> name, email address, phone number, company name,
                and message content provided through forms or booking links.
              </li>
              <li>
                <strong>Communications:</strong> records of correspondence, inquiries, or scheduling
                details.
              </li>
              <li>
                <strong>Technical Data:</strong> IP address, browser type, device information, and
                analytics data collected via cookies or log files.
              </li>
            </ul>
            <p className="mt-2">
              We do not knowingly collect sensitive information such as financial, health, or
              biometric data.
            </p>
          </div>

          {/* 3. How We Use Information */}
          <div>
            <h2 className="text-xl font-semibold mb-2">3. How We Use Your Information</h2>
            <p>
              We process personal information to:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Respond to inquiries and provide requested services</li>
              <li>Schedule and confirm consultations</li>
              <li>Send relevant updates, resources, or insights</li>
              <li>Comply with legal and regulatory obligations</li>
              <li>Improve website performance and client experience</li>
            </ul>
          </div>

          {/* 4. Standard Communications */}
          <div>
            <h2 className="text-xl font-semibold mb-2">4. Standard Communications</h2>
            <p>
              By submitting a form or booking with DM Advisory, you agree to receive standard
              communications related to your inquiry or engagement. These may include:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Responses to inquiries and confirmations</li>
              <li>Follow-ups regarding scheduling or services</li>
              <li>Occasional professional insights or company updates</li>
            </ul>
            <p className="mt-2">
              You may opt out at any time by replying “unsubscribe” or contacting us at{' '}
              <a
                href="mailto:privacy@dmadvisorygroup.com"
                className="text-[color:var(--brand)] underline hover:text-[color:var(--brand-hover)]"
              >
                privacy@dmadvisorygroup.com
              </a>.
            </p>
          </div>

          {/* 5. Legal Basis */}
          <div>
            <h2 className="text-xl font-semibold mb-2">5. Legal Basis for Processing</h2>
            <p>
              For users subject to GDPR or similar laws, our legal bases include:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Consent (you voluntarily provide information)</li>
              <li>Contractual necessity (to fulfill your request or engagement)</li>
              <li>Legitimate interest (to operate and improve our business responsibly)</li>
              <li>Legal obligation (to comply with applicable laws)</li>
            </ul>
          </div>

          {/* 6. Data Sharing */}
          <div>
            <h2 className="text-xl font-semibold mb-2">6. Data Sharing and Service Providers</h2>
            <p>
              We do not sell, rent, or trade personal data. We may share limited information with
              trusted service providers who perform functions on our behalf, including:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Calendly (meeting scheduling)</li>
              <li>Vercel (secure hosting and deployment)</li>
              <li>Google Workspace (email and file management)</li>
              <li>Analytics tools (non-identifiable traffic insights)</li>
            </ul>
            <p className="mt-2">
              These providers are contractually bound to protect your data and process it only as
              instructed.
            </p>
          </div>

          {/* 7. Data Retention */}
          <div>
            <h2 className="text-xl font-semibold mb-2">7. Data Retention</h2>
            <p>
              We retain personal data only as long as necessary to fulfill the purposes for which it
              was collected or as required by law. When information is no longer needed, it is
              securely deleted or anonymized.
            </p>
          </div>

          {/* 8. Cookies */}
          <div>
            <h2 className="text-xl font-semibold mb-2">8. Cookies and Analytics</h2>
            <p>
              We use cookies and similar technologies to understand website performance. Cookies do
              not personally identify you and can be disabled in your browser settings.
            </p>
          </div>

          {/* 9. Consumer Rights */}
          <div>
            <h2 className="text-xl font-semibold mb-2">9. Your Privacy Rights</h2>
            <p>
              Depending on your jurisdiction (e.g., California, Virginia, the EEA), you may have the
              following rights:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Access – request a copy of personal data we hold</li>
              <li>Correction – update or rectify inaccurate data</li>
              <li>Deletion – request that we delete your personal information</li>
              <li>Restriction – limit processing in certain circumstances</li>
              <li>Opt-out – object to communications or data sharing</li>
            </ul>
            <p className="mt-2">
              To exercise any of these rights, email{' '}
              <a
                href="mailto:privacy@dmadvisorygroup.com"
                className="text-[color:var(--brand)] underline hover:text-[color:var(--brand-hover)]"
              >
                privacy@dmadvisorygroup.com
              </a>. We may verify your identity before processing requests.
            </p>
          </div>

          {/* 10. Security */}
          <div>
            <h2 className="text-xl font-semibold mb-2">10. Security</h2>
            <p>
              We maintain administrative, technical, and physical safeguards to protect your data.
              While we strive to use commercially reasonable means, no system is completely secure,
              and we cannot guarantee absolute protection.
            </p>
          </div>

          {/* 11. International Transfers */}
          <div>
            <h2 className="text-xl font-semibold mb-2">11. International Data Transfers</h2>
            <p>
              As a U.S. company, your data may be stored and processed in the United States. By
              providing information, you consent to this transfer under applicable law.
            </p>
          </div>

          {/* 12. Children */}
          <div>
            <h2 className="text-xl font-semibold mb-2">12. Children’s Privacy</h2>
            <p>
              Our services are not directed to individuals under 16. We do not knowingly collect data
              from minors. If you believe a child has provided us personal information, contact us to
              remove it.
            </p>
          </div>

          {/* 13. Limitation of Liability */}
          <div>
            <h2 className="text-xl font-semibold mb-2">13. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, DM Advisory Group LLC shall not be liable for
              any damages (including negligence, indirect, consequential, or incidental losses)
              arising from or related to unauthorized access, use, or disclosure of personal
              information, except to the extent directly caused by our willful misconduct. Any
              liability shall be limited to the amount paid (if any) by you for services rendered.
            </p>
          </div>

          {/* 14. Governing Law */}
          <div>
            <h2 className="text-xl font-semibold mb-2">14. Governing Law</h2>
            <p>
              This Privacy Policy is governed by the laws of the State of Texas, United States,
              without regard to conflict-of-law principles. Any disputes shall be resolved in the
              courts located in Tarrant County, Texas.
            </p>
          </div>

          {/* 15. Updates */}
          <div>
            <h2 className="text-xl font-semibold mb-2">15. Updates to This Policy</h2>
            <p>
              We may update this Privacy Policy periodically. Updates take effect upon posting. The
              “Effective Date” above reflects the most recent revision.
            </p>
          </div>

          {/* 16. Contact */}
          <div>
            <h2 className="text-xl font-semibold mb-2">16. Contact Us</h2>
            <p>
              For privacy inquiries or rights requests, contact:<br />
              <strong>DM Advisory Group LLC</strong><br />
              Email:{' '}
              <a
                href="mailto:privacy@dmadvisorygroup.com"
                className="text-[color:var(--brand)] underline hover:text-[color:var(--brand-hover)]"
              >
                privacy@dmadvisorygroup.com
              </a><br />
              Mailing Address: 5005 W Royal Ln, Suite 100, Irving, TX 75063, USA
            </p>
          </div>

          <hr className="my-8 border-[color:var(--line)]" />
          <p className="text-sm text-[color:var(--muted)] italic">
            Reviewed and approved by DM Advisory Group LLC • Effective October 2025 • This Privacy
            Policy is provided for informational purposes only and does not create a contractual
            relationship. Continued use of this website constitutes acceptance of this policy.
          </p>
        </section>
      </main>
    </>
  )
}
