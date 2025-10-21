import Image from 'next/image'
import { CheckCircle2, Layers, Gauge, ShieldCheck, Handshake, LineChart } from 'lucide-react'

export default function Page() {
  return (
    <>
      {/* HERO — background image with soft fade */}
      <section className="relative overflow-hidden py-16 md:py-20">
        <Image
  src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop"
  alt=""
  fill
  priority
  aria-hidden="true"
  className="
    absolute inset-0 -z-10 object-cover opacity-65
    [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]
    [mask-size:100%_100%] [mask-repeat:no-repeat]
  "
/>

        {/* soft tint */}
        <div className="absolute inset-0 -z-10 bg-white/55" />
        <div className="absolute inset-0 -z-10 bg-[rgba(24,145,172,0.08)]" />

        <div className="container">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            IT Consulting
          </h1>
          <p className="text-lg text-[color:var(--muted)] mt-3 max-w-3xl">
            Clarity and expertise to guide technology decisions with confidence. Align systems and processes with business objectives to reduce risk, optimize spend, and enable growth.
          </p>
        </div>
      </section>

      {/* WHO BENEFITS */}
      <section className="py-10">
        <div className="container">
          <h2 className="text-xl font-bold mb-3">Who benefits</h2>
          <div className="flex flex-wrap gap-2">
            {[
              'CEOs & COOs seeking clarity',
              'CFOs focused on value per dollar',
              'Teams scaling operations',
              'Orgs without in-house IT leadership',
              'M&A / integration programs',
            ].map((t) => (
              <span key={t} className="pill">{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT CONSULTING DELIVERS */}
      <section className="section-alt">
        <div className="container">
          <h2 className="text-2xl font-bold mb-2">What consulting delivers</h2>
          <p className="text-[color:var(--muted)] mb-6">
            Practical outcomes that move the business forward.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Column A */}
            <ul className="grid gap-3">
              {[
                { icon: Layers, text: 'Decision-ready roadmaps aligned to business goals' },
                { icon: Gauge, text: 'Efficiency gains through automation and process design' },
                { icon: Handshake, text: 'Vendor strategy, negotiations, and license optimization' },
              ].map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-3 bg-white rounded-xl border border-[color:var(--line)] p-4">
                  <Icon className="mt-0.5 text-[color:var(--brand)]" />
                  <span className="text-[color:var(--muted)]">{text}</span>
                </li>
              ))}
            </ul>

            {/* Column B */}
            <ul className="grid gap-3">
              {[
                { icon: ShieldCheck, text: 'Risk and security posture improvements with clear ownership' },
                { icon: LineChart, text: 'KPIs and visibility that make results measurable' },
                { icon: CheckCircle2, text: 'Change management so improvements actually stick' },
              ].map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-3 bg-white rounded-xl border border-[color:var(--line)] p-4">
                  <Icon className="mt-0.5 text-[color:var(--brand)]" />
                  <span className="text-[color:var(--muted)]">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ENGAGEMENT APPROACH — vertical step timeline */}
      <section className="py-12">
        <div className="container">
          <h2 className="text-2xl font-bold mb-6">Engagement approach</h2>

          <ol className="relative border-l border-[color:var(--line)]/80 ml-3 space-y-6">
            {[
              {
                title: 'Discovery & assessment',
                body:
                  'Rapid review of people, process, and technology to identify constraints, risks, and opportunities. Clear priorities and quick wins established.',
              },
              {
                title: 'Plan & alignment',
                body:
                  'Decision-ready roadmap with owners, timelines, and KPIs. Budget and vendor implications are transparent before execution starts.',
              },
              {
                title: 'Execute & enable',
                body:
                  'Deliver initiatives with a light but consistent governance rhythm. Build runbooks, standards, and reporting so value is sustained.',
              },
            ].map((s) => (
              <li key={s.title} className="ml-4">
                <div className="absolute -left-2.5 mt-1 size-4 rounded-full border bg-white border-[color:var(--line)]" />
                <h3 className="font-semibold">{s.title}</h3>
                <p className="text-[color:var(--muted)] mt-1">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* RESULTS — inline stats */}
      <section className="section-alt">
        <div className="container">
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { k: 'Clarity', v: 'Roadmaps & KPIs that drive decisions' },
              { k: 'Efficiency', v: 'Process improvements & automation' },
              { k: 'Confidence', v: 'Standards, governance, and visibility' },
            ].map(({ k, v }) => (
              <div key={k} className="bg-white rounded-xl border border-[color:var(--line)] p-5 text-center">
                <div className="text-xl font-extrabold">{k}</div>
                <div className="text-[color:var(--muted)] mt-1">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — minimal */}
      <section className="py-12">
        <div className="container">
          <div className="rounded-2xl border border-[color:var(--line)] bg-white p-6 md:p-8 grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-2">See how IT consulting can accelerate results</h2>
              <p className="text-[color:var(--muted)]">
                Get a pragmatic plan to align technology with your objectives—and a clear view of value, risk, and next steps.
              </p>
            </div>
            <div className="flex justify-end">
              <a className="btn btn-primary" href="/contact">Request Discovery Call</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
