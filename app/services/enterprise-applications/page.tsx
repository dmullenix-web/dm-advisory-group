import Hero from '@/components/Hero'
export default function Page() {
  return (
    <>
      <Hero
        eyebrow="Services"
        title="Enterprise Applications"
        lead="Select, implement, and scale core platforms with confidence."
      />

      <section className="section">
        <div className="container">
          <h3 className="text-lg font-semibold mb-2">Platforms</h3>
          <ul className="list">
            <li>ERP, CRM, HRIS, ITSM, Finance/Procurement</li>
            <li>Data pipelines and analytics layers</li>
          </ul>

          <h3 className="text-lg font-semibold mt-6 mb-2">How I Help</h3>
          <ul className="list">
            <li>Requirements, vendor shortlists, and TCO comparisons</li>
            <li>Contract negotiation and implementation oversight</li>
            <li>Platform standards, governance, and adoption</li>
          </ul>
        </div>
      </section>
    </>
  )
}
