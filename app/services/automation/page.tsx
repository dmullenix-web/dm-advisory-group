import Hero from '@/components/Hero'
export default function Page() {
  return (
    <>
      <Hero
        eyebrow="Services"
        title="Automation"
        lead="Remove busywork and increase reliability with workflow automation."
      />

      <section className="section">
        <div className="container">
          <p className="text-[color:var(--muted)]">
            Streamline provisioning, approvals, and repeatable processes — safely and measurably.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-2">Typical Work</h3>
          <ul className="list">
            <li>Power Automate and service integrations</li>
            <li>Employee onboarding/offboarding automation</li>
            <li>AP/invoice approvals and finance workflow optimization</li>
          </ul>
        </div>
      </section>
    </>
  )
}
