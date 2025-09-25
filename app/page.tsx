// app/page.tsx
import Image from 'next/image'
import Link from 'next/link'
import { Layers, Building2, ShieldCheck, Gauge, Bot, Workflow, ArrowRight } from 'lucide-react'

function SpotCard({
  href,
  icon,
  title,
  blurb,
}: {
  href: string
  icon: React.ReactNode
  title: string
  blurb: string
}) {
  return (
    <Link
      href={href}
      className="
        group rounded-2xl border border-[color:var(--line)]
        bg-white/90 backdrop-blur p-4 shadow-sm
        hover:shadow-md transition
      "
    >
      <div className="flex items-start gap-3">
        <div className="shrink-0 grid place-items-center w-9 h-9 rounded-xl bg-[color:var(--surface)] border border-[color:var(--line)]">
          {icon}
        </div>
        <div className="min-w-0">
          <div className="font-semibold">{title}</div>
          <p className="text-sm text-[color:var(--muted)] mt-1">{blurb}</p>
          <div className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-[color:var(--brand)]">
            Explore <ArrowRight className="w-4 h-4 translate-x-0 group-hover:translate-x-0.5 transition" />
          </div>
        </div>
      </div>
    </Link>
  )
}

export default function Page() {
  return (
    <>
                  {/* HERO */}
      <section className="relative overflow-hidden py-16 md:py-20">
        <Image
          src="/hero.jpg"
          alt=""
          fill
          priority
          aria-hidden="true"
          className="
            absolute inset-0 -z-10 object-cover
            opacity-70 scale-90 md:scale-95
            [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]
            [mask-size:100%_100%]
            [mask-repeat:no-repeat]
            transition-transform
          "
        />
        <div className="absolute inset-0 -z-10 bg-white/55" />
        <div className="absolute inset-0 -z-10 bg-[rgba(24,145,172,0.08)]" />

        <div className="container">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mt-3">
            Experienced technology leadership—on your budget and timeline.
          </h1>
          <p className="text-lg text-[color:var(--muted)] mt-2 max-w-3xl">
            Align technology with strategy, increase reliability, reduce risk, and get more value from every IT dollar.
          </p>
        </div>
      </section>



            {/* SERVICES SPOTLIGHT */}
      <section className="relative py-12 md:py-16">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(900px_300px_at_50%_-60px,rgba(30,183,217,0.08),transparent)]" />
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 mb-6">
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
              Practical expertise, <span className="text-[color:var(--brand)]">real outcomes</span>.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <SpotCard
              href="/services/it-consulting"
              icon={<Layers className="w-5 h-5 text-[color:var(--brand)]" />}
              title="IT Consulting"
              blurb="Roadmaps, standards, vendor leverage, and delivery rhythms that stick."
            />
            <SpotCard
              href="/services/enterprise-applications"
              icon={<Building2 className="w-5 h-5 text-[color:var(--brand)]" />}
              title="Enterprise Applications"
              blurb="ERP/CRM selection, implementation governance, and measurable ROI."
            />
            <SpotCard
              href="/services/fractional-cio"
              icon={<Gauge className="w-5 h-5 text-[color:var(--brand)]" />}
              title="Fractional CIO"
              blurb="Executive technology leadership aligned to your goals—without the FTE."
            />
            <SpotCard
              href="/services/automation"
              icon={<Workflow className="w-5 h-5 text-[color:var(--brand)]" />}
              title="Automation"
              blurb="Remove busywork with integrations and workflows that cut cycle time."
            />
            <SpotCard
              href="/services/artificial-intelligence"
              icon={<Bot className="w-5 h-5 text-[color:var(--brand)]" />}
              title="Artificial Intelligence"
              blurb="Pragmatic pilots, assistive tools, and data foundations—no hype."
            />
            <SpotCard
              href="/services/cyber-security"
              icon={<ShieldCheck className="w-5 h-5 text-[color:var(--brand)]" />}
              title="Cyber Security"
              blurb="Identity-first controls, email/endpoint protection, and BCP/DR readiness."
            />
          </div>
        </div>
      </section>


            {/* IT CONSULTING OUTCOMES */}
      <section className="section-alt">
        <div className="container grid md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold mb-2">IT Consulting Outcomes</h2>
            <p className="text-[color:var(--muted)] max-w-xl mx-auto md:mx-0">
              IT consulting brings clarity and direction to your technology investments—ensuring
              that your platforms, vendors, and processes are optimized for efficiency and growth.
            </p>
          </div>
          <div className="card p-5">
            <h3 className="text-xl font-bold">Partner with confidence</h3>
            <p className="text-[color:var(--muted)] mb-3">
              We deliver pragmatic recommendations and proven frameworks—always with an eye on ROI.
            </p>
            <a className="btn btn-primary" href="/contact">Request Discovery Call</a>
          </div>
        </div>
      </section>

    </>
  )
}
