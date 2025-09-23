import Image from 'next/image'
import Hero from '@/components/Hero'
import { ShieldCheck, Gauge, Layers, Users2, BadgeDollarSign, ClipboardCheck } from 'lucide-react'

export default function Page() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden py-12 md:py-16">
        {/* soft blended background */}
        <Image
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop"
          alt=""
          fill
          priority
          aria-hidden="true"
          className="
            absolute inset-0 -z-10 object-cover opacity-60
            [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]
            [mask-size:100%_100%] [mask-repeat:no-repeat]
          "
        />
        <div className="absolute inset-0 -z-10 bg-white/50" />
        <div className="absolute inset-0 -z-10 bg-[rgba(24,145,172,0.08)]" />

        <div className="container">
          <span className="pill">Services</span>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mt-3">
            Fractional CIO
          </h1>
          <p className="text-lg text-[color:var(--muted)] mt-2 max-w-3xl">
            Executive-level technology leadership without the full-time overhead. I align IT with
            strategy, raise reliability and security, and deliver measurable value per dollar.
          </p>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="section">
        <div className="container grid md:grid-cols-3 gap-4">
          <div className="card p-5">
            <h3 className="font-semibold text-lg mb-1">Growing orgs</h3>
            <p className="text-[color:var(--muted)]">Scaling fast and need standards, a roadmap, and clarity.</p>
          </div>
          <div className="card p-5">
            <h3 className="font-semibold text-lg mb-1">PE-backed & rollups</h3>
            <p className="text-[color:var(--muted)]">Need integration discipline, KPIs, and predictable execution.</p>
          </div>
          <div className="card p-5">
            <h3 className="font-semibold text-lg mb-1">Nonprofits & services</h3>
            <p className="text-[color:var(--muted)]">Want enterprise rigor with pragmatic, budget-aware delivery.</p>
          </div>
        </div>
      </section>

      {/* VALUE PILLARS */}
      <section className="section-alt">
        <div className="container">
          <h2 className="text-2xl font-bold mb-2">How a Fractional CIO Drives Outcomes</h2>
          <p className="text-[color:var(--muted)] mb-6">Four pillars that compound value over time.</p>

          <div className="grid md:grid-cols-4 gap-4">
            <div className="card p-5">
              <div className="mb-3"><Layers className="text-[color:var(--brand)]" /></div>
              <h3 className="font-semibold mb-1">Strategy & Standards</h3>
              <p className="text-[color:var(--muted)]">Multi-year roadmap, architecture principles, and governance rhythms.</p>
            </div>

            <div className="card p-5">
              <div className="mb-3"><ShieldCheck className="text-[color:var(--brand)]" /></div>
              <h3 className="font-semibold mb-1">Security & Resilience</h3>
              <p className="text-[color:var(--muted)]">Identity, email, endpoint, vuln mgmt; BCP/DR and incident readiness.</p>
            </div>

            <div className="card p-5">
              <div className="mb-3"><Gauge className="text-[color:var(--brand)]" /></div>
              <h3 className="font-semibold mb-1">Performance & Cost</h3>
              <p className="text-[color:var(--muted)]">SLA-driven ops, vendor leverage, license right-sizing, TCO visibility.</p>
            </div>

            <div className="card p-5">
              <div className="mb-3"><Users2 className="text-[color:var(--brand)]" /></div>
              <h3 className="font-semibold mb-1">Change & Adoption</h3>
              <p className="text-[color:var(--muted)]">Clear ownership, enablement, and communications that make changes stick.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ENGAGEMENT MODELS */}
      <section className="section">
        <div className="container">
          <h2 className="text-2xl font-bold mb-2">Engagement Models</h2>
          <p className="text-[color:var(--muted)] mb-6">Pick the cadence that fits your goals and timeline.</p>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="card p-5">
              <h3 className="font-semibold text-lg mb-1">Ongoing Leadership</h3>
              <p className="text-[color:var(--muted)] mb-3">1–3 days/week to run the program and deliver the roadmap.</p>
              <ul className="list">
                <li>Weekly leadership cadence & scorecard</li>
                <li>Quarterly planning & budget alignment</li>
                <li>Vendor & risk oversight</li>
              </ul>
            </div>

            <div className="card p-5">
              <h3 className="font-semibold text-lg mb-1">Interim Coverage</h3>
              <p className="text-[color:var(--muted)] mb-3">Stabilize operations while you hire a permanent leader.</p>
              <ul className="list">
                <li>Runbooks and standards in place</li>
                <li>Team structure & accountability</li>
                <li>Candidate evaluation support</li>
              </ul>
            </div>

            <div className="card p-5">
              <h3 className="font-semibold text-lg mb-1">Project-Based</h3>
              <p className="text-[color:var(--muted)] mb-3">Specific outcomes (ERP, CRM, cloud, M&A) with milestones.</p>
              <ul className="list">
                <li>Requirements & vendor shortlist</li>
                <li>TCO comparison & contract support</li>
                <li>Implementation governance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FIRST 90 DAYS */}
      <section className="section-alt">
        <div className="container">
          <h2 className="text-2xl font-bold mb-2">The First 90 Days</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="card p-5">
              <h3 className="font-semibold">0–30 days</h3>
              <p className="text-[color:var(--muted)]">Rapid assessment across people, process, tech. Identify quick wins.</p>
              <ul className="list mt-2">
                <li>Risk heatmap & KPI baseline</li>
                <li>Stabilize critical issues</li>
                <li>Draft roadmap v1</li>
              </ul>
            </div>
            <div className="card p-5">
              <h3 className="font-semibold">31–60 days</h3>
              <p className="text-[color:var(--muted)]">Launch governance and secure the core; lock budget & vendor plan.</p>
              <ul className="list mt-2">
                <li>Identity & email protections</li>
                <li>Platform standards & runbooks</li>
                <li>Quarterly plan & owners</li>
              </ul>
            </div>
            <div className="card p-5">
              <h3 className="font-semibold">61–90 days</h3>
              <p className="text-[color:var(--muted)]">Execute priorities, publish scorecard, and iterate roadmap v2.</p>
              <ul className="list mt-2">
                <li>Weekly delivery cadence</li>
                <li>Dashboard live for KPIs</li>
                <li>Savings & risk deltas captured</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* RESULTS STRIP */}
      <section className="section">
        <div className="container grid md:grid-cols-3 gap-4">
          <div className="card p-5 flex items-start gap-3">
            <BadgeDollarSign className="shrink-0 text-[color:var(--brand)]" />
            <div>
              <h4 className="font-semibold">Lower Run Costs</h4>
              <p className="text-[color:var(--muted)]">License right-sizing & vendor leverage; focus spend where it matters.</p>
            </div>
          </div>
          <div className="card p-5 flex items-start gap-3">
            <ClipboardCheck className="shrink-0 text-[color:var(--brand)]" />
            <div>
              <h4 className="font-semibold">Predictable Delivery</h4>
              <p className="text-[color:var(--muted)]">Scorecards, SLAs, and a quarterly plan everyone can see.</p>
            </div>
          </div>
          <div className="card p-5 flex items-start gap-3">
            <ShieldCheck className="shrink-0 text-[color:var(--brand)]" />
            <div>
              <h4 className="font-semibold">Improved Security Posture</h4>
              <p className="text-[color:var(--muted)]">Identity-first controls, email/endpoint protection, BCP/DR readiness.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-alt">
        <div className="container grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-2">See if Fractional CIO is the right fit</h2>
            <p className="text-[color:var(--muted)]">We’ll align on goals, identify quick wins, and map a pragmatic 90-day plan.</p>
          </div>
          <div className="card p-5">
            <a className="btn btn-primary w-full text-center" href="/contact">Request Discovery Call</a>
            <div className="text-sm text-[color:var(--muted)] mt-2">Prefer email? <a href="mailto:hello@dmaidvisory.com">hello@dmaidvisory.com</a></div>
          </div>
        </div>
      </section>
    </>
  )
}
