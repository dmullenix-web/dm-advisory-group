import Image from 'next/image'
import Hero from '@/components/Hero'
import { ShieldCheck, Gauge, Layers, Users2, BadgeDollarSign, ClipboardCheck } from 'lucide-react'

export default function Page() {
  return (
    <>
      {/* HERO (subtle blended background) */}
      <section className="relative overflow-hidden py-12 md:py-16">
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
          <span className="pill">Services</span>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mt-3">Fractional CIO</h1>
          <p className="text-lg text-[color:var(--muted)] mt-2 max-w-3xl">
            Executive-level technology leadership without the full-time overhead. I align IT with
            strategy, raise reliability and security, and deliver measurable value per dollar.
          </p>
        </div>
      </section>

      {/* WHO IT'S FOR (plain white, softened cards) */}
      <section className="py-14">
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

      {/* ==== SEPARATOR (hairline gradient) ==== */}
      <div className="container">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[color:var(--line)]/60 to-transparent" />
      </div>

      {/* OUTCOMES — soft gradient + faint dot grid */}
      <section className="relative py-16">
        {/* background wash */}
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,transparent,rgba(30,183,217,0.07),transparent)]" />
        {/* super faint dot grid */}
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
          <div className="text-xs tracking-widest uppercase text-[color:var(--brand)] mb-2">Outcomes</div>
          <h2 className="text-2xl font-bold mb-2">How a Fractional CIO Drives Outcomes</h2>
          <p className="text-[color:var(--muted)] mb-6">Four pillars that compound value over time.</p>

          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-white/90 backdrop-blur border border-[color:var(--line)]/50 rounded-2xl p-5 shadow-sm">
              <div className="mb-3"><Layers className="text-[color:var(--brand)]" /></div>
              <h3 className="font-semibold mb-1">Strategy & Standards</h3>
              <p className="text-[color:var(--muted)]">Multi-year roadmap, architecture principles, and governance rhythms.</p>
            </div>
            <div className="bg-white/90 backdrop-blur border border-[color:var(--line)]/50 rounded-2xl p-5 shadow-sm">
              <div className="mb-3"><ShieldCheck className="text-[color:var(--brand)]" /></div>
              <h3 className="font-semibold mb-1">Security & Resilience</h3>
              <p className="text-[color:var(--muted)]">Identity, email, endpoint, vuln mgmt; BCP/DR and incident readiness.</p>
            </div>
            <div className="bg-white/90 backdrop-blur border border-[color:var(--line)]/50 rounded-2xl p-5 shadow-sm">
              <div className="mb-3"><Gauge className="text-[color:var(--brand)]" /></div>
              <h3 className="font-semibold mb-1">Performance & Cost</h3>
              <p className="text-[color:var(--muted)]">SLA-driven ops, vendor leverage, license right-sizing, TCO visibility.</p>
            </div>
            <div className="bg-white/90 backdrop-blur border border-[color:var(--line)]/50 rounded-2xl p-5 shadow-sm">
              <div className="mb-3"><Users2 className="text-[color:var(--brand)]" /></div>
              <h3 className="font-semibold mb-1">Change & Adoption</h3>
              <p className="text-[color:var(--muted)]">Ownership, enablement, and communications that make changes stick.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ==== SEPARATOR (angled mini band) ==== */}
      <div className="relative h-8">
        <div className="absolute inset-0 bg-[conic-gradient(at_0%_0%,transparent_0deg,rgba(30,183,217,0.08)_40deg,transparent_80deg)]" />
      </div>

      {/* ENGAGEMENT MODELS — angled wash + hairline borders */}
      <section className="relative py-16">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom_right,rgba(30,183,217,0.045),transparent_60%)]" />
        <div className="container">
          <div className="text-xs tracking-widest uppercase text-[color:var(--brand)] mb-2">Models</div>
          <h2 className="text-2xl font-bold mb-2">Engagement Models</h2>
          <p className="text-[color:var(--muted)] mb-6">Pick the cadence that fits your goals and timeline.</p>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="rounded-2xl p-5 shadow-sm bg-white/90 backdrop-blur border border-[color:var(--line)]/60">
              <h3 className="font-semibold text-lg mb-1">Ongoing Leadership</h3>
              <p className="text-[color:var(--muted)] mb-3">1–3 days/week to run the program and deliver the roadmap.</p>
              <ul className="list">
                <li>Weekly leadership cadence & scorecard</li>
                <li>Quarterly planning & budget alignment</li>
                <li>Vendor & risk oversight</li>
              </ul>
            </div>

            <div className="rounded-2xl p-5 shadow-sm bg-white/90 backdrop-blur border border-[color:var(--line)]/60">
              <h3 className="font-semibold text-lg mb-1">Interim Coverage</h3>
              <p className="text-[color:var(--muted)] mb-3">Stabilize operations while you hire a permanent leader.</p>
              <ul className="list">
                <li>Runbooks and standards in place</li>
                <li>Team structure & accountability</li>
                <li>Candidate evaluation support</li>
              </ul>
            </div>

            <div className="rounded-2xl p-5 shadow-sm bg-white/90 backdrop-blur border border-[color:var(--line)]/60">
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

      {/* ==== SEPARATOR (hairline gradient) ==== */}
      <div className="container">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[color:var(--line)]/60 to-transparent" />
      </div>

      {/* FIRST 90 DAYS — clean 3-step plan */}
<section className="relative py-16">
  {/* gentle radial wash */}
  <div className="absolute inset-0 -z-10 bg-[radial-gradient(700px_300px_at_50%_0%,rgba(30,183,217,0.06),transparent)]" />
  <div className="container">
    <div className="text-xs tracking-widest uppercase text-[color:var(--brand)] mb-2">Plan</div>
    <h2 className="text-2xl font-bold mb-10">The First 90 Days</h2>

    {/* connector line (desktop) */}
    <div className="hidden md:block relative mb-8">
      <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px bg-[color:var(--line)]/70"></div>
      <div className="grid grid-cols-3">
        {[1,2,3].map((i) => (
          <div key={i} className="flex justify-center">
            <div className="w-10 h-10 rounded-full bg-white border border-[color:var(--line)] shadow-sm grid place-items-center">
              <span className="font-bold text-[color:var(--brand)]">{i}</span>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* steps */}
    <div className="grid md:grid-cols-3 gap-4">
      <div className="bg-white/90 backdrop-blur border border-[color:var(--line)]/60 rounded-2xl p-6 shadow-sm">
        <h3 className="font-semibold text-lg mb-1">Days 0–30 · Assess</h3>
        <p className="text-[color:var(--muted)] mb-3">Get clarity fast and stabilize what matters.</p>
        <ul className="list">
          <li>Rapid assessment across people, process, tech</li>
          <li>Risk heatmap & KPI baseline</li>
          <li>Critical issues contained</li>
        </ul>
      </div>

      <div className="bg-white/90 backdrop-blur border border-[color:var(--line)]/60 rounded-2xl p-6 shadow-sm">
        <h3 className="font-semibold text-lg mb-1">Days 31–60 · Secure & Govern</h3>
        <p className="text-[color:var(--muted)] mb-3">Lock in standards and a transparent cadence.</p>
        <ul className="list">
          <li>Identity & email protections live</li>
          <li>Platform standards & runbooks</li>
          <li>Quarterly plan agreed with owners</li>
        </ul>
      </div>

      <div className="bg-white/90 backdrop-blur border border-[color:var(--line)]/60 rounded-2xl p-6 shadow-sm">
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
      <section className="py-14">
        <div className="container grid md:grid-cols-3 gap-4">
          <div className="bg-white/90 backdrop-blur border border-[color:var(--line)]/50 rounded-2xl p-5 shadow-sm flex items-start gap-3">
            <BadgeDollarSign className="shrink-0 text-[color:var(--brand)]" />
            <div>
              <h4 className="font-semibold">Lower Run Costs</h4>
              <p className="text-[color:var(--muted)]">License right-sizing & vendor leverage; focus spend where it matters.</p>
            </div>
          </div>
          <div className="bg-white/90 backdrop-blur border border-[color:var(--line)]/50 rounded-2xl p-5 shadow-sm flex items-start gap-3">
            <ClipboardCheck className="shrink-0 text-[color:var(--brand)]" />
            <div>
              <h4 className="font-semibold">Predictable Delivery</h4>
              <p className="text-[color:var(--muted)]">Scorecards, SLAs, and a quarterly plan everyone can see.</p>
            </div>
          </div>
          <div className="bg-white/90 backdrop-blur border border-[color:var(--line)]/50 rounded-2xl p-5 shadow-sm flex items-start gap-3">
            <ShieldCheck className="shrink-0 text-[color:var(--brand)]" />
            <div>
              <h4 className="font-semibold">Improved Security Posture</h4>
              <p className="text-[color:var(--muted)]">Identity-first controls, email/endpoint protection, BCP/DR readiness.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-14">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,transparent,rgba(30,183,217,0.06),transparent)]" />
        <div className="container grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-2">See if Fractional CIO is the right fit</h2>
            <p className="text-[color:var(--muted)]">We’ll align on goals, identify quick wins, and map a pragmatic 90-day plan.</p>
          </div>
          <div className="bg-white/90 backdrop-blur border border-[color:var(--line)]/50 rounded-2xl p-5 shadow-sm">
            <a className="btn btn-primary w-full text-center" href="/contact">Request Discovery Call</a>
            <div className="text-sm text-[color:var(--muted)] mt-2">
              Prefer email? <a href="mailto:hello@dmadvisorygroup.com">hello@dmadvisorygroup.com</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
