import Hero from '@/components/Hero'
export default function Page() {
  return (
    <>
      <Hero
        eyebrow="Services"
        title="IT Consulting"
        lead="Assessments, roadmaps, and pragmatic execution support."
      />

      <section className="section">
        <div className="container">
          <p className="text-[color:var(--muted)]">
            Rapid current-state insight and a realistic plan to stabilize, scale, and reduce risk.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-2">Typical Work</h3>
          <ul className="list">
            <li>Current-state assessments across people, process, and technology</li>
            <li>Multi-year roadmaps with ROI and risk impact</li>
            <li>Program governance, project rescue, and change management</li>
          </ul>
        </div>
      </section>
    </>
  )
}
