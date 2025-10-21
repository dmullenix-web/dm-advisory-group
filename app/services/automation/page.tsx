import Image from 'next/image'
import {
  Workflow,
  Zap,
  Cpu,
  ShieldCheck,
  Gauge,
  CheckCircle2,
  Boxes,
  Rocket,
  Settings2,
} from 'lucide-react'

export default function Page() {
  return (
    <>
      {/* HERO — blended background, premium wash */}
      <section className="relative overflow-hidden py-14 md:py-18">
        <Image
          src="https://images.unsplash.com/photo-1525182008055-f88b95ff7980?q=80&w=1600&auto=format&fit=crop"
          alt=""
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
            Automation & iPaaS
          </h1>
          <p className="text-lg text-[color:var(--muted)] mt-3 max-w-3xl">
            Remove busywork, connect systems, and scale operations with reliable
            automations—designed with governance, security, and measurable value.
          </p>
        </div>
      </section>

      {/* soft carryover wash */}
      <div className="relative">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(900px_320px_at_50%_-80px,rgba(30,183,217,0.06),transparent)]" />
      </div>

      {/* CONTEXT */}
      <section className="py-8">
        <div className="container max-w-3xl">
          <p className="text-lg text-[color:var(--muted)] leading-relaxed">
            High-leverage teams standardize the way work moves between apps.
            With modern iPaaS, organizations automate handoffs, enforce
            validation, and make data visible—without adding headcount or
            fragile, one-off scripts.
          </p>
        </div>
      </section>

      {/* divider */}
      <div className="container">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[color:var(--line)]/70 to-transparent" />
      </div>

      {/* WHAT WE DELIVER */}
      <section className="py-12">
        <div className="container">
          <h2 className="text-2xl font-bold mb-2">What we deliver</h2>
          <p className="text-[color:var(--muted)] mb-6">
            Pragmatic automation that sticks—built on secure patterns and
            supported by a clear operating model.
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white/90 backdrop-blur border border-[color:var(--line)]/60 rounded-2xl p-5 shadow-sm flex items-start gap-3">
              <Workflow className="mt-1 text-[color:var(--brand)]" />
              <div>
                <h3 className="font-semibold mb-1">Process discovery & design</h3>
                <p className="text-[color:var(--muted)]">
                  Map the flow, define rules, and prioritize automations by
                  business impact and effort.
                </p>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur border border-[color:var(--line)]/60 rounded-2xl p-5 shadow-sm flex items-start gap-3">
              <Zap className="mt-1 text-[color:var(--brand)]" />
              <div>
                <h3 className="font-semibold mb-1">iPaaS builds & integrations</h3>
                <p className="text-[color:var(--muted)]">
                  Reliable connectors and orchestrations across ERP/CRM/HCM,
                  finance, ITSM, data, and messaging.
                </p>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur border border-[color:var(--line)]/60 rounded-2xl p-5 shadow-sm flex items-start gap-3">
              <ShieldCheck className="mt-1 text-[color:var(--brand)]" />
              <div>
                <h3 className="font-semibold mb-1">Governance & reliability</h3>
                <p className="text-[color:var(--muted)]">
                  Standards, versioning, error handling, SLAs, and observability
                  so automations run predictably.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* angled wash */}
      <div className="relative h-8">
        <div className="absolute inset-0 bg-[conic-gradient(at_0%_0%,transparent_0deg,rgba(30,183,217,0.06)_40deg,transparent_80deg)]" />
      </div>

      {/* IPAAS STACK */}
      <section className="py-12 relative">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom_right,rgba(30,183,217,0.045),transparent_60%)]" />
        <div className="container">
          <h2 className="text-2xl font-bold mb-2">Platforms we support</h2>
          <p className="text-[color:var(--muted)] mb-6">
            We work with the major iPaaS and automation ecosystems—selecting the
            right fit for scale, connectors, and governance.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              'Microsoft Power Automate / Logic Apps',
              'Zapier & Make (Integromat)',
              'Workato',
              'Boomi',
              'MuleSoft',
              'Azure Functions / AWS Lambda (extensibility)',
            ].map((x) => (
              <div
                key={x}
                className="bg-white/90 backdrop-blur border border-[color:var(--line)]/60 rounded-2xl p-5 shadow-sm flex items-start gap-3"
              >
                <Boxes className="mt-1 text-[color:var(--brand)]" />
                <div className="font-medium">{x}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* divider */}
      <div className="container">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[color:var(--line)]/60 to-transparent" />
      </div>

      {/* COMMON USE CASES */}
      <section className="py-12">
        <div className="container">
          <h2 className="text-2xl font-bold mb-2">Proven use cases</h2>
          <p className="text-[color:var(--muted)] mb-6">
            High-impact automations that reduce manual effort and create
            visibility across teams.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                t: 'Lead → Opportunity → Project handoff',
                d: 'Automate CRM routing, enrichment, and project kickoff with tasks, folders, and notifications.',
              },
              {
                t: 'Order-to-cash',
                d: 'Sync orders, invoices, and payments across ERP/Finance with exception handling and alerts.',
              },
              {
                t: 'Employee lifecycle',
                d: 'Joiner/Mover/Leaver workflows across HRIS, M365/SSO, devices, and app access.',
              },
              {
                t: 'ITSM + Monitoring',
                d: 'Create tickets from alerts, enrich with context, and auto-close with validation checks.',
              },
              {
                t: 'Data sync & enrichment',
                d: 'Reliable, scheduled syncs to data warehouse; validation and dedupe built-in.',
              },
              {
                t: 'Approvals & compliance',
                d: 'Policy-driven approvals (spend, vendors, access) with audit trail and escalations.',
              },
            ].map(({ t, d }) => (
              <div
                key={t}
                className="bg-white/90 backdrop-blur border border-[color:var(--line)]/60 rounded-2xl p-5 shadow-sm"
              >
                <div className="font-semibold">{t}</div>
                <p className="text-[color:var(--muted)] mt-1">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* angled wash */}
      <div className="relative h-8">
        <div className="absolute inset-0 bg-[conic-gradient(at_0%_0%,transparent_0deg,rgba(30,183,217,0.06)_40deg,transparent_80deg)]" />
      </div>

      {/* OPERATING MODEL & MEASUREMENT */}
      <section className="py-12 relative">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,transparent,rgba(30,183,217,0.06),transparent)]" />
        <div className="container">
          <div className="grid md:grid-cols-3 gap-4 items-stretch">
            <div className="bg-white/90 backdrop-blur border border-[color:var(--line)]/60 rounded-2xl p-6 shadow-sm flex flex-col">
              <div className="flex items-start gap-3">
                <Settings2 className="mt-1 text-[color:var(--brand)]" />
                <div>
                  <h3 className="font-semibold mb-1">Operating model</h3>
                  <p className="text-[color:var(--muted)]">
                    Intake, prioritization, versioning, and change control.
                    Clear owners and SLAs so automations are a product, not a project.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur border border-[color:var(--line)]/60 rounded-2xl p-6 shadow-sm flex flex-col">
              <div className="flex items-start gap-3">
                <Gauge className="mt-1 text-[color:var(--brand)]" />
                <div>
                  <h3 className="font-semibold mb-1">Measurement</h3>
                  <p className="text-[color:var(--muted)]">
                    Dashboards for runs, success rate, time saved, and avoided cost—so value is visible and continuous.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur border border-[color:var(--line)]/60 rounded-2xl p-6 shadow-sm flex flex-col">
              <div className="flex items-start gap-3">
                <Cpu className="mt-1 text-[color:var(--brand)]" />
                <div>
                  <h3 className="font-semibold mb-1">Extensibility</h3>
                  <p className="text-[color:var(--muted)]">
                    When needed, extend iPaaS with serverless functions, secure secrets, and reusable modules.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* inline reassurance */}
          <div className="mt-6 rounded-2xl border border-[color:var(--line)]/60 bg-white/90 backdrop-blur p-5 shadow-sm flex items-start gap-3">
            <CheckCircle2 className="mt-1 text-[color:var(--brand)]" />
            <p className="text-[color:var(--muted)]">
              We prioritize controls by design: least-privilege connections, scoped API keys, confidential logging,
              alerting on failure, and runbooks for recovery.
            </p>
          </div>
        </div>
      </section>

      {/* CTA — compact and consistent with other pages */}
      <section className="py-12 relative">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,transparent,rgba(30,183,217,0.06),transparent)]" />
        <div className="container">
          <div className="rounded-2xl border border-[color:var(--line)]/60 bg-white/90 backdrop-blur p-6 md:p-8 shadow-sm grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-2">Ready to remove busywork and increase reliability?</h2>
              <p className="text-[color:var(--muted)]">
                Start with a focused assessment and a short list of high-ROI automations.
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
