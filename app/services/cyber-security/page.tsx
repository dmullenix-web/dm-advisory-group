import Hero from '@/components/Hero'
export default function Page() {
  return (
    <>
      <Hero
        eyebrow="Services"
        title="Cyber Security"
        lead="Practical defense-in-depth for mid-market teams."
      />

      <section className="section">
        <div className="container">
          <h3 className="text-lg font-semibold mb-2">Focus Areas</h3>
          <ul className="list">
            <li>Identity security (MFA, conditional access, SSO)</li>
            <li>Email threat protection; endpoint hardening and patching</li>
            <li>Vulnerability management and incident response</li>
            <li>BCP/DR planning and exercises</li>
          </ul>

          <h3 className="text-lg font-semibold mt-6 mb-2">Compliance & Readiness</h3>
          <ul className="list">
            <li>NIST-aligned controls and policies</li>
            <li>Security awareness and runbooks</li>
            <li>Cyber-insurance posture improvements</li>
          </ul>
        </div>
      </section>
    </>
  )
}
