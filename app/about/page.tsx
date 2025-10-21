import Image from 'next/image'
import { Award, Layers, ShieldCheck, Gauge, Users2, Target, Workflow, CheckCircle2 } from 'lucide-react'

export default function Page() {
  return (
    <>
      {/* HERO — subtle, premium wash */}
      <section className="relative overflow-hidden py-14 md:py-18">
        {/* Optional background image: replace with /public/about_bg.jpg if you add one */}
        <Image
          src="/hero.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="
            absolute inset-0 -z-10 object-cover opacity-55
            [mask-image:linear-gradient(to_bottom,transparent,black_12%,black_88%,transparent)]
            [mask-repeat:no-repeat]
          "
        />
        <div className="absolute inset-0 -z-10 bg-white/55" />
        <div className="absolute inset-0 -z-10 bg-[rgba(24,145,172,0.08)]" />
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">About DM Advisory Group</h1>
          <p className="text-lg text-[color:var(--muted)] mt-3 max-w-3xl">
            Nearly two decades building and operating technology for growth—spanning strategy, platforms, operations,
            and cybersecurity.
          </p>
        </div>
      </section>

      {/* soft carryover wash */}
      <div className="relative">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(900px_320px_at_50%_-80px,rgba(30,183,217,0.06),transparent)]" />
      </div>

      {/* SNAPSHOT */}
      <section className="py-10">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { icon: <Award />, t: '~20 Years', d: 'Technology leadership & delivery' },
              { icon: <Layers />, t: 'Enterprise Stacks', d: 'Cloud, identity, apps, data' },
              { icon: <ShieldCheck />, t: 'Cyber & Resilience', d: 'Identity-first controls & recovery' },
              { icon: <Gauge />, t: 'Operations', d: 'SLA-driven runbooks & cadence' },
            ].map(({ icon, t, d }) => (
              <div key={t} className="bg-white/90 backdrop-blur border border-[color:var(--line)]/60 rounded-2xl p-5 shadow-sm flex items-start gap-3">
                <div className="text-[color:var(--brand)]">{icon}</div>
                <div>
                  <div className="font-semibold">{t}</div>
                  <div className="text-[color:var(--muted)] text-sm">{d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* divider */}
      <div className="container"><div className="h-px w-full bg-gradient-to-r from-transparent via-[color:var(--line)]/70 to-transparent" /></div>

      {/* PHILOSOPHY */}
      <section className="py-12">
        <div className="container grid md:grid-cols-2 gap-6 items-start">
          <div>
            <h2 className="text-2xl font-bold mb-2">Consulting philosophy</h2>
            <p className="text-[color:var(--muted)]">
              Technology should advance the mission. The work emphasizes clarity, accountable execution,
              and measurable value—so improvements endure beyond the engagement.
            </p>
            <ul className="list mt-4">
              <li>Business-aligned roadmaps over tool-first projects</li>
              <li>Standards, runbooks, and visible KPIs</li>
              <li>Security and recovery built in, not bolted on</li>
              <li>Change management that teams can sustain</li>
            </ul>
          </div>

          <div className="rounded-2xl bg-white/90 backdrop-blur border border-[color:var(--line)]/60 p-6 shadow-sm">
            <h3 className="font-semibold mb-2">Focus areas</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { i: <Layers className="text-[color:var(--brand)]" />, t: 'Platform strategy' },
                { i: <Workflow className="text-[color:var(--brand)]" />, t: 'Automation & process' },
                { i: <ShieldCheck className="text-[color:var(--brand)]" />, t: 'Cyber risk & recovery' },
                { i: <Target className="text-[color:var(--brand)]" />, t: 'Outcome tracking' },
              ].map(({ i, t }) => (
                <div key={t} className="flex items-center gap-2 border border-[color:var(--line)]/60 rounded-xl px-3 py-2 bg-white">
                  {i}<span className="text-sm">{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* faint angled wash */}
      <div className="relative h-8">
        <div className="absolute inset-0 bg-[conic-gradient(at_0%_0%,transparent_0deg,rgba(30,183,217,0.06)_40deg,transparent_80deg)]" />
      </div>

      {/* APPROACH */}
      <section className="py-12 relative">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom_right,rgba(30,183,217,0.045),transparent_60%)]" />
        <div className="container">
          <h2 className="text-2xl font-bold mb-2">How engagements run</h2>
          <p className="text-[color:var(--muted)] mb-6">Clear stages, visible outcomes, and cadence that keeps momentum.</p>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                icon: <Users2 />,
                title: 'Assess & align',
                desc: 'Rapid review across people, process, and tech; goals, risks, and quick wins clarified.',
              },
              {
                icon: <Workflow />,
                title: 'Standards & plan',
                desc: 'Roadmap, operating rhythms, and runbooks—security and recovery included.',
              },
              {
                icon: <CheckCircle2 />,
                title: 'Deliver & measure',
                desc: 'Execution with KPIs and savings tracked; changes made sustainable for the team.',
              },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="bg-white/90 backdrop-blur border border-[color:var(--line)]/60 rounded-2xl p-6 shadow-sm flex items-start gap-3">
                <div className="text-[color:var(--brand)]">{icon}</div>
                <div>
                  <div className="font-semibold">{title}</div>
                  <p className="text-[color:var(--muted)] text-sm mt-1">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* divider */}
      <div className="container"><div className="h-px w-full bg-gradient-to-r from-transparent via-[color:var(--line)]/60 to-transparent" /></div>

      {/* CTA (compact, no email block) */}
      <section className="py-12 relative">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,transparent,rgba(30,183,217,0.06),transparent)]" />
        <div className="container">
          <div className="rounded-2xl border border-[color:var(--line)]/60 bg-white/90 backdrop-blur p-6 md:p-8 shadow-sm grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-2">Bring experienced leadership to your roadmap</h2>
              <p className="text-[color:var(--muted)]">Start with a focused discussion and a pragmatic 90-day plan.</p>
            </div>
            <div className="flex md:justify-end">
              <a className="btn btn-primary" href="/contact">Request Discovery Call</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
