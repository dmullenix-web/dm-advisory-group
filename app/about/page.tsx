import Image from 'next/image'
import { Award, Layers, ShieldCheck, Gauge, Target, Workflow, Users2, CheckCircle2, Sparkles, Rocket } from 'lucide-react'

export default function Page() {
  return (
    <>
      {/* HERO — bold, high-contrast, blended background */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <Image
          src="/hero.jpg" // swap to /about_bg.jpg if you add a custom image
          alt=""
          fill
          priority
          sizes="100vw"
          className="
            absolute inset-0 -z-10 object-cover opacity-70
            [mask-image:linear-gradient(to_bottom,transparent,black_12%,black_88%,transparent)]
            [mask-repeat:no-repeat]
          "
        />
        {/* premium wash + brand tint */}
        <div className="absolute inset-0 -z-10 bg-white/55" />
        <div className="absolute inset-0 -z-10 bg-[rgba(24,145,172,0.10)]" />
        <div className="container">
          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[color:var(--brand)] bg-white/80 border border-[color:var(--line)] rounded-full px-3 py-1">
              <Sparkles className="w-4 h-4" /> About
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mt-4">
              Nearly two decades of building technology that moves the business.
            </h1>
            <p className="text-lg text-[color:var(--muted)] mt-3">
              From platform strategy and IT operations to cybersecurity and automation—experience converting objectives into
              reliable, secure, and measurable outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* soft carryover glow */}
      <div className="relative">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(1000px_360px_at_50%_-120px,rgba(30,183,217,0.08),transparent)]" />
      </div>

      {/* MARQUEE STATS — quick credibility pop */}
      <section className="py-10">
        <div className="container grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: <Award />, t: '~20 Years', d: 'Technology leadership & delivery' },
            { icon: <Layers />, t: 'Enterprise Stacks', d: 'Cloud, identity, apps, data' },
            { icon: <ShieldCheck />, t: 'Security & Resilience', d: 'Identity-first controls & DR' },
            { icon: <Gauge />, t: 'Operations', d: 'SLA-driven cadence & KPIs' },
          ].map(({ icon, t, d }) => (
            <div key={t} className="bg-white/95 backdrop-blur border border-[color:var(--line)]/60 rounded-2xl p-5 shadow-sm flex items-start gap-3">
              <div className="text-[color:var(--brand)]">{icon}</div>
              <div>
                <div className="font-semibold">{t}</div>
                <div className="text-[color:var(--muted)] text-sm">{d}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* divider */}
      <div className="container"><div className="h-px w-full bg-gradient-to-r from-transparent via-[color:var(--line)]/70 to-transparent" /></div>

      {/* CREDO — crisp statement that stands out */}
      <section className="py-12">
        <div className="container">
          <div className="rounded-2xl bg-white/95 backdrop-blur border border-[color:var(--line)]/70 p-6 md:p-8 shadow-sm">
            <div className="flex items-start gap-3">
              <Target className="text-[color:var(--brand)] shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold mb-2">Principle</h2>
                <p className="text-[color:var(--muted)] text-lg">
                  Technology should clarify, not complicate. The work emphasizes clear roadmaps, accountable execution,
                  and durable results—so gains compound long after delivery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* faint angled wash */}
      <div className="relative h-8">
        <div className="absolute inset-0 bg-[conic-gradient(at_0%_0%,transparent_0deg,rgba(30,183,217,0.07)_40deg,transparent_80deg)]" />
      </div>

      {/* WHAT THAT MEANS IN PRACTICE — punchy, minimal cards */}
      <section className="py-12 relative">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom_right,rgba(30,183,217,0.045),transparent_60%)]" />
        <div className="container">
          <h2 className="text-2xl font-bold mb-2">What that looks like in practice</h2>
          <p className="text-[color:var(--muted)] mb-6">A practical operating model that ties effort to impact.</p>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                i: <Workflow className="text-[color:var(--brand)]" />,
                t: 'Clarity over noise',
                d: 'Business-aligned roadmaps, decision frameworks, and visible tradeoffs.',
              },
              {
                i: <ShieldCheck className="text-[color:var(--brand)]" />,
                t: 'Security built-in',
                d: 'Identity-first controls, recovery readiness, and change discipline.',
              },
              {
                i: <Gauge className="text-[color:var(--brand)]" />,
                t: 'Measured delivery',
                d: 'Runbooks, SLAs, KPIs, and vendor leverage to maximize value.',
              },
            ].map(({ i, t, d }) => (
              <div key={t} className="bg-white/95 backdrop-blur border border-[color:var(--line)]/60 rounded-2xl p-6 shadow-sm">
                <div className="flex items-start gap-3">
                  {i}
                  <div>
                    <div className="font-semibold">{t}</div>
                    <p className="text-[color:var(--muted)] text-sm mt-1">{d}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* divider */}
      <div className="container"><div className="h-px w-full bg-gradient-to-r from-transparent via-[color:var(--line)]/60 to-transparent" /></div>

      {/* HOW ENGAGEMENTS RUN — compact, high signal */}
      <section className="py-12">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                i: <Users2 className="text-[color:var(--brand)]" />,
                t: 'Assess & align',
                d: 'Rapid review across people, process, and tech; goals, risks, and quick wins clarified.',
              },
              {
                i: <Workflow className="text-[color:var(--brand)]" />,
                t: 'Standards & plan',
                d: 'Roadmap and operating rhythms—security and recovery included.',
              },
              {
                i: <CheckCircle2 className="text-[color:var(--brand)]" />,
                t: 'Deliver & measure',
                d: 'Execution with KPIs and savings tracked; changes made sustainable for the team.',
              },
            ].map(({ i, t, d }) => (
              <div key={t} className="rounded-2xl p-6 bg-white/95 backdrop-blur border border-[color:var(--line)]/60 shadow-sm flex items-start gap-3">
                {i}
                <div>
                  <div className="font-semibold">{t}</div>
                  <p className="text-[color:var(--muted)] text-sm mt-1">{d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STRIP — quick reassurance chips */}
      <section className="py-8">
        <div className="container">
          <div className="flex flex-wrap gap-2">
            {[
              'Platform strategy',
              'IT operations',
              'Cybersecurity & recovery',
              'Enterprise applications',
              'Automation & process',
              'Data & KPIs',
            ].map((x) => (
              <span key={x} className="px-3 py-2 text-sm rounded-xl bg-white border border-[color:var(--line)]">
                {x}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — compact, sharp */}
      <section className="py-12 relative">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,transparent,rgba(30,183,217,0.07),transparent)]" />
        <div className="container">
          <div className="rounded-2xl border border-[color:var(--line)]/60 bg-white/95 backdrop-blur p-6 md:p-8 shadow-sm grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-2">Bring experienced leadership to your roadmap</h2>
              <p className="text-[color:var(--muted)]">Start with a focused discussion and a pragmatic 90-day plan.</p>
            </div>
            <div className="flex md:justify-end">
              <a className="btn btn-primary inline-flex items-center gap-2" href="/contact">
                <Rocket className="w-4 h-4" /> Request Discovery Call
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
