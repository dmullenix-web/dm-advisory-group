import Hero from '@/components/Hero'
export default function Page() {
  return (
    <>
      <Hero
        eyebrow="Services"
        title="Artificial Intelligence"
        lead="Enable teams with safe, outcomes-focused AI."
      />

      <section className="section">
        <div className="container">
          <h3 className="text-lg font-semibold mb-2">Approach</h3>
          <ul className="list">
            <li>Use-case discovery and prioritization</li>
            <li>Pilot design with clear success metrics</li>
            <li>Governance, data readiness, and security considerations</li>
          </ul>

          <h3 className="text-lg font-semibold mt-6 mb-2">Examples</h3>
          <ul className="list">
            <li>Agent-assisted workflows and knowledge retrieval</li>
            <li>Summarization and reporting accelerators</li>
            <li>Responsible use guidelines and training</li>
          </ul>
        </div>
      </section>
    </>
  )
}
