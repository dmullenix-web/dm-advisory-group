// app/terms-of-use/page.tsx
import Head from 'next/head'

export default function TermsOfUsePage() {
  return (
    <>
      <Head>
        <title>Terms of Use | DM Advisory Group LLC</title>
        <meta
          name="description"
          content="Read the Terms of Use for DM Advisory Group LLC’s website. Understand your rights and obligations when using our services and content."
        />
        <link rel="canonical" href="https://www.dmadvisorygroup.com/terms-of-use" />
      </Head>

      <main className="max-w-3xl mx-auto px-6 py-16">
        <header className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-1">Terms of Use</h1>
          <p className="text-sm text-[color:var(--muted)]">Effective Date: October 2025</p>
        </header>

        <section className="space-y-7 text-[color:var(--text)] leading-relaxed">
          <p>
            Welcome to <strong>DM Advisory Group LLC</strong> (“DM Advisory,” “we,” “us,” or “our”).
            By accessing or using our website (<strong>dmadvisorygroup.com</strong>), you agree to
            the following Terms of Use (“Terms”). If you do not agree, please discontinue use of
            this website.
          </p>

          <div>
            <h2 className="text-xl font-semibold mb-2">1. Use of Site</h2>
            <p>
              The content on this site is provided for general informational purposes only. You may
              use the site solely for lawful purposes and in a manner consistent with these Terms.
              You agree not to attempt to gain unauthorized access to any part of the site or its
              systems.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">2. Intellectual Property</h2>
            <p>
              All content, design elements, logos, graphics, and text appearing on this site are the
              property of DM Advisory Group LLC or its licensors and are protected by U.S. and
              international copyright and trademark laws. You may not reproduce, distribute, or
              create derivative works from this material without prior written permission.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">3. No Professional Advice</h2>
            <p>
              Information on this website does not constitute legal, financial, or technology advice
              and should not be relied upon as such. For specific guidance, please engage DM Advisory
              Group LLC under a formal written agreement.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">4. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, DM Advisory Group LLC is not liable for any
              direct, indirect, incidental, consequential, or punitive damages arising from your use
              or inability to use this site or its content. We do not warrant that the site will be
              error-free, secure, or uninterrupted.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">5. Third-Party Links</h2>
            <p>
              This site may include links to external websites for convenience. DM Advisory Group LLC
              does not control and is not responsible for the content or privacy practices of those
              third-party sites.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">6. Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless DM Advisory Group LLC, its affiliates,
              officers, and employees from any claims, damages, or liabilities arising from your use
              of this site or violation of these Terms.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">7. Governing Law</h2>
            <p>
              These Terms are governed by and construed in accordance with the laws of the State of
              Texas, United States. Any disputes shall be resolved exclusively in the state or
              federal courts located in Tarrant County, Texas.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">8. Modifications</h2>
            <p>
              We may revise these Terms at any time by posting the updated version here. Continued
              use of the site after such updates constitutes your acceptance of the new Terms.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">9. Contact</h2>
            <p>
              For questions regarding these Terms, contact:<br />
              <strong>DM Advisory Group LLC</strong><br />
              Email:{' '}
              <a
                href="mailto:privacy@dmadvisorygroup.com"
                className="text-[color:var(--brand)] underline hover:text-[color:var(--brand-hover)]"
              >
                privacy@dmadvisorygroup.com
              </a>
            </p>
          </div>

          <hr className="my-8 border-[color:var(--line)]" />
          <p className="text-sm text-[color:var(--muted)] italic">
            Reviewed and approved by DM Advisory Group LLC • Effective October 2025 • Use of this
            website constitutes acceptance of these Terms of Use.
          </p>
        </section>
      </main>
    </>
  )
}
