import Image from 'next/image'
import { Layers, Gauge, CheckCircle2 } from 'lucide-react'

export default function Page() {
  return (
    <>
      {/* HERO — blended image, soft brand tint */}
      <section className="relative overflow-hidden py-14 md:py-18">
        <Image
          src="https://images.unsplash.com/photo-1525182008055-f88b95ff7980?q=80&w=1600&auto=format&fit=crop"
          alt="Enterprise application strategy discussion"
          fill
          priority
          sizes="100vw"
          className="
            absolute inset-0 -z-10 object-cover opacity-65
            [mask-image:linear-gradient(to_bottom,transparent,black_12%,black_88%,transparent)]
            [mask-repeat:no-repeat]
          "
        />
        <div className="absolute inset-0 -z-10 bg-white/55" />
        <div className="absolute inset-0 -z-10 bg-[rgba(24,145,172,0.08)]" />

        <div className="container">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Enterprise Applications
          </h1>
          <p className="text-lg text-[color:var(--muted)] mt-3 max-w-3xl">
            Streamline core business systems and unlock performance, visibility, and value from enterprise software investments.
          </p>
        </div>
      </section>

      {/* soft radial wash to carry flow from hero */}
      <div className="relative">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(900px_320px_at_50%_-80px,rgba(30,183,217,0.06),transparent)]" />
      </div>

      {/* NEW: Context paragraph (replaces “Who benefits”) */}
      <section className="py-8">
        <div className="container max-w-3xl">
          <p className="text-lg text-[color:var(--muted)] leading-relaxed">
            Enterprise systems should enable scale, not complexity. Whether you’re consolidating
            platforms, migrating to the cloud, or modernizing legacy apps, the goal is a connected
            ecosystem—one where information flows, teams align, and decisions happen faster.
          </p>
        </div>
      </section>

      {/* hairline divider (no hard color block) */}
      <div className="container">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[color:var(--line)]/70 to-transparent" />
      </div>

      {/* WHAT WE DELIVER — cards on clean backdrop */}
      <section className="py-12">
        <div className="container">
          <h2 className="text-2xl font-bold mb-2">What we deliver</h2>
          <p className="text-[color:var(--muted)] mb-6">
            Core application services tailored to support growth, efficiency, and reliability.
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white/90 backdrop-blur border border-[color:var(--line)]/60 rounded-2xl p-5 shadow-sm flex items-start gap-3">
              <Layers className="mt-1 text-[color:var(--brand)]" />
              <div>
                <h3 className="font-semibold mb-1">Strategy & Roadmap</h3>
                <p className="text-[color:var(--muted)]">
                  Clear plan for your ERP/CRM/HCM ecosystem aligned with business goals.
                </p>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur border border-[color:var(--line)]/60 rounded-2xl p-5 shadow-sm flex items-start gap-3">
              <Gauge className="mt-1 text-[color:var(--brand)]" />
              <div>
                <h3 className="font-semibold mb-1">Implementation & Integration</h3>
                <p className="text-[color:var(--muted)]">
                  Reliable deployment and seamless integration of enterprise systems.
                </p>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur border border-[color:var(--line)]/60 rounded-2xl p-5 shadow-sm flex items-start gap-3">
              <CheckCircle2 className="mt-1 text-[color:var(--brand)]" />
              <div>
                <h3 className="font-semibold mb-1">Optimization & Value-Maximization</h3>
                <p className="text-[color:var(--muted)]">
                  Reduce cost, improve performance, and increase ROI of your applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* soft angled wash between sections for continuity */}
      <div className="relative h-8">
        <div className="absolute inset-0 bg-[conic-gradient(at_0%_0%,transparent_0deg,rgba(30,183,217,0.06)_40deg,transparent_80deg)]" />
      </div>

      {/* ENGAGEMENT MODELS */}
      <section className="py-12 relative">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom_right,rgba(30,183,217,0.045),transparent_60%)]" />
        <div className="container">
          <h2 className="text-2xl font-bold mb-2">Engagement models</h2>
          <p className="text-[color:var(--muted)] mb-6">
            Flexible options that meet your needs and budget.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white/90 backdrop-blur border border-[color:var(--line)]/60 rounded-2xl p-6 shadow-sm">
              <h3 className="font-semibold text-lg mb-1">Advisory & Evaluation</h3>
              <p className="text-[color:var(--muted)]">
                Assess existing applications, identify gaps, and build a business-aligned roadmap.
              </p>
            </div>
            <div className="bg-white/90 backdrop-blur border border-[color:var(--line)]/60 rounded-2xl p-6 shadow-sm">
              <h3 className="font-semibold text-lg mb-1">Full-Lifecycle Delivery</h3>
              <p className="text-[color:var(--muted)]">
                Hands-on implementation, integration, and ongoing governance to sustain results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* subtle divider */}
      <div className="container">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[color:var(--line)]/60 to-transparent" />
      </div>

      {/* OUTCOMES */}
      <section className="py-12">
        <div className="container">
          <h2 className="text-2xl font-bold mb-2">Outcomes you can expect</h2>
          <p className="text-[color:var(--muted)] mb-6">
            Streamlined operations, unified systems, improved visibility, and control.
          </p>

        <div className="grid sm:grid-cols-3 gap-4">
            {[
              { t: 'Unified systems', d: 'Break down data and process silos across the organization.' },
              { t: 'Improved visibility', d: 'Real-time insights and dashboards for critical decisions.' },
              { t: 'Lower TCO', d: 'Optimize application spend and increase value per IT dollar.' },
            ].map((x) => (
              <div key={x.t} className="bg-white/90 backdrop-blur border border-[color:var(--line)]/60 rounded-2xl p-5 shadow-sm text-center">
                <div className="text-xl font-extrabold">{x.t}</div>
                <p className="text-[color:var(--muted)] mt-1">{x.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — light, compact, flowing */}
      <section className="py-12 relative">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,transparent,rgba(30,183,217,0.06),transparent)]" />
        <div className="container">
          <div className="rounded-2xl border border-[color:var(--line)]/60 bg-white/90 backdrop-blur p-6 md:p-8 shadow-sm grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-2">Ready to elevate your enterprise applications?</h2>
              <p className="text-[color:var(--muted)]">
                Partner to integrate, align, and maximize your business systems with confidence.
              </p>
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
