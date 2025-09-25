// app/services/fractional-cio/page.tsx
import Image from 'next/image'
import { ShieldCheck, Gauge, Layers, Users2, BadgeDollarSign, ClipboardCheck } from 'lucide-react'

export default function Page() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden py-10 md:py-12">
        <Image
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop"
          alt=""
          fill
          priority
          aria-hidden="true"
          className="
            absolute inset-0 -z-10 object-cover opacity-60
            [mask-image:linear-gradient(to_bottom,transparent,black_12%,black_88%,transparent)]
            [mask-size:100%_100%] [mask-repeat:no-repeat]
          "
        />
        <div className="absolute inset-0 -z-10 bg-white/55" />
        <div className="absolute inset-0 -z-10 bg-[rgba(24,145,172,0.06)]" />

        <div className="container">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Fractional CIO</h1>
          <p className="text-lg text-[color:var(--muted)] mt-3 max-w-3xl">
            Executive-level technology leadership without the full-time overhead. Align IT with
            strategy, raise reliability and security, and deliver measurable value per dollar.
          </p>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="py-10">
        <div className="container grid md:grid-cols-3 gap-4">
          {[
            { t: 'Growing orgs', d: 'Scaling fast and need standards, a roadmap, and clarity.' },
            { t: 'PE-backed & rollups', d: 'Need integration discipline, KPIs, and predictable execution.' },
            { t: 'Nonprofits & services', d: 'Enterprise rigor with pragmatic, budget-aware delivery.' },
          ].map((x) => (
            <div key={x.t} className="bg-white/90 backdrop-blur border border-[color:var(--line)]/50 rounded-2xl p-5 shadow-sm">
              <h3 className="font-semibold text-lg mb-1">{x.t}</h3>
              <p className="text-[color:var(--muted)]">{x.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ==== SEPARATOR ==== */}
      <div className="container mb-6">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[color:var(--line)]/60 to-transparent" />
      </div>

      {/* OUTCOMES */}
      <section className="relative py-12 md:py-14">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,transparent,rgba(30,183,217,0.07),transparent)]" />
        <div
          className="absolute inset-0 -z-10 opacity-40"
          style={{
            backgroundImage: 'radial-gradient(currentColor 1px, transparent 1px)',
            backgroundSize: '20px 20px',
            color: 'var(--line)',
            maskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',
            WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',
          }}
        />
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
              <p className="text-[color:var(--muted)]">Ownership, enablement, and communications that make changes stick.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ENGAGEMENT MODELS */}
      <section className="relative py-12 md:py-14">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom_right,rgba(30,183,217,0.045),transparent_60%)]" />
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
      <section className="relative py-12 md:py-14">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(700px_300px_at_50%_0%,rgba(30,183,217,0.06),transparent)]" />
        <div className="container">
          <h2 className="text-2xl font-bold mb-8">The First 90 Days</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="card p-6">
              <h3 className="font-semibold text-lg mb-1">Days 0–30 · Assess</h3>
              <p className="text-[color:var(--muted)] mb-3">Get clarity fast and stabilize what matters.</p>
              <ul className="list">
                <li>Rapid assessment across people, process, tech</li>
                <li>Risk heatmap & KPI baseline</li>
                <li>Critical issues contained</li>
              </ul>
            </div>

            <div className="card p-6">
              <h3 className="font-semibold text-lg mb-1">Days 31–60 · Secure & Govern</h3>
              <p className="text-[color:var(--muted)] mb-3">Lock in standards and a transparent cadence.</p>
              <ul className="list">
                <li>Identity & email protections live</li>
                <li>Platform standards & runbooks</li>
                <li>Quarterly plan agreed with owners</li>
              </ul>
            </div>

            <div className="card p-6">
              <h3 className="font-semibold text-lg mb-1">Days 61–90 · Execute & Measure</h3>
              <p className="text-[color:var(--muted)] mb-3">Deliver outcomes and make value visible.</p>
              <ul className="list">
                <li>Weekly delivery cadence & scorecard</li>
                <li>Dashboard for KPIs in production</li>
                <li>Savings & risk deltas captured</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section className="py-12">
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
      <section className="relative overflow-hidden py-12 md:py-14">
        <Image
          src="/results-2.jpg"
          alt=""
          fill
          priority
          aria-hidden="true"
          className="
            absolute inset-0 -z-10 object-cover
            opacity-60 blur-[1px]
            [mask-image:linear-gradient(to_bottom,transparent,black_12%,black_88%,transparent)]
            [mask-size:100%_100%] [mask-repeat:no-repeat]
          "
        />
        <div className="absolute inset-0 -z-10 bg-white/55" />
        <div className="absolute inset-0 -z-10 bg-[rgba(24,145,172,0.06)]" />

        <div className="container grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-2">See if Fractional CIO is the right fit</h2>
            <p className="text-[color:var(--muted)]">
              Align goals, identify quick wins, and map a pragmatic 90-day plan.
            </p>
          </div>
          <div className="card p-5">
            <a className="btn btn-primary w-full text-center" href="/contact">Request Discovery Call</a>
          </div>
        </div>
      </section>
    </>
  )
}
