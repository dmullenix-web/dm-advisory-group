// app/results/page.tsx
import Image from 'next/image'
import { BadgeDollarSign, ShieldCheck, ClipboardCheck } from 'lucide-react'

export default function Page() {
  return (
    <>
      {/* ===== HERO (blended background with your results.jpg) ===== */}
      <section className="relative overflow-hidden py-16 md:py-20">
        <Image
          src="/results-2.jpg"   // <-- your added image in /public
          alt=""
          fill
          priority
          aria-hidden="true"
          className="
            absolute inset-0 -z-10 object-cover
            opacity-55
            [mask-image:linear-gradient(to_bottom,transparent,black_12%,black_88%,transparent)]
            [mask-size:100%_100%] [mask-repeat:no-repeat]
          "
        />
        {/* soft wash + subtle brand tint */}
        <div className="absolute inset-0 -z-10 bg-white/55" />
        <div className="absolute inset-0 -z-10 bg-[rgba(24,145,172,0.08)]" />

        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Outcomes that stick
            </h1>
            <p className="text-lg text-[color:var(--muted)] mt-3">
              Success is measured by lasting improvements in reliability, security, and efficiency—
              not just deliverables.
            </p>
          </div>
        </div>
      </section>

      {/* ===== OUTCOMES CARDS ===== */}
      <section className="section">
        <div className="container grid md:grid-cols-3 gap-6">
          <div className="card p-6 flex flex-col items-start gap-3">
            <BadgeDollarSign className="text-[color:var(--brand)]" size={28} />
            <h3 className="font-semibold text-lg">Lower Run Costs</h3>
            <p className="text-[color:var(--muted)]">
              Streamlined vendor management, license right-sizing, and automation deliver measurable cost savings.
            </p>
          </div>

          <div className="card p-6 flex flex-col items-start gap-3">
            <ShieldCheck className="text-[color:var(--brand)]" size={28} />
            <h3 className="font-semibold text-lg">Improved Security Posture</h3>
            <p className="text-[color:var(--muted)]">
              Identity-first controls, endpoint protection, and BCP/DR readiness reduce risk and build resilience.
            </p>
          </div>

          <div className="card p-6 flex flex-col items-start gap-3">
            <ClipboardCheck className="text-[color:var(--brand)]" size={28} />
            <h3 className="font-semibold text-lg">Predictable Delivery</h3>
            <p className="text-[color:var(--muted)]">
              Scorecards, SLAs, and quarterly planning bring accountability and transparency to every initiative.
            </p>
          </div>
        </div>
      </section>

      {/* ===== RESULTS METRICS BAND ===== */}
      <section className="section-alt">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-4">
            <div className="card p-6 text-center">
              <div className="text-3xl font-extrabold">20–30%</div>
              <div className="text-[color:var(--muted)] mt-1">
                run-cost reduction via license & vendor optimization
              </div>
            </div>
            <div className="card p-6 text-center">
              <div className="text-3xl font-extrabold">99.9%</div>
              <div className="text-[color:var(--muted)] mt-1">
                availability targets through standards & operations rhythm
              </div>
            </div>
            <div className="card p-6 text-center">
              <div className="text-3xl font-extrabold">↑ Security</div>
              <div className="text-[color:var(--muted)] mt-1">
                identity-first controls, email/endpoint protection, BCP/DR
              </div>
            </div>
            <div className="card p-6 text-center">
              <div className="text-3xl font-extrabold">2×</div>
              <div className="text-[color:var(--muted)] mt-1">
                delivery predictability with scorecards & governance cadence
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== NARRATIVE + CTA ===== */}
      <section className="section">
        <div className="container grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-2">What this means for you</h2>
            <p className="text-[color:var(--muted)]">
              Whether scaling, integrating acquisitions, or tightening budgets, engagements are designed to make improvements
              durable. The goal isn’t short-term fixes—it’s structures and practices that continue to pay off quarter after quarter.
            </p>
          </div>
          <div className="card p-6">
            <h3 className="font-semibold text-lg mb-2">Real-world impact</h3>
            <p className="text-[color:var(--muted)] mb-4">
              Clients have achieved 20–30% cost savings, doubled uptime reliability, and reached compliance milestones faster
              than internal timelines projected.
            </p>
            <a className="btn btn-primary w-full md:w-auto" href="/contact">See How We Can Help</a>
          </div>
        </div>
      </section>

      {/* ===== DISCLAIMER (fine print) ===== */}
      <section className="pt-0 pb-8">
        <div className="container">
          <p className="text-xs leading-relaxed text-[color:var(--muted)]">
            *Results shown are illustrative of prior engagements and are not guarantees of future outcomes. Actual results
            depend on each organization’s environment, objectives, scope, and execution factors.
          </p>
        </div>
      </section>
    </>
  )
}
