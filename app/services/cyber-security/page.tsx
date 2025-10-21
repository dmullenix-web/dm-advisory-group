import Image from 'next/image'
import {
  ShieldCheck,
  LockKeyhole,
  MailWarning,
  MonitorSmartphone,
  Bug,
  ActivitySquare,
  ClipboardCheck,
  ServerCrash,
  Gauge,
  Boxes,
  UsersRound,
  CircuitBoard,
  SearchCheck,
  AlertTriangle,
  FileCheck,
  LineChart
} from 'lucide-react'

export default function Page() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden py-14 md:py-18">
        <Image
          src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1600&auto=format&fit=crop"
          alt="Cyber security operations center"
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
            Cyber Security
          </h1>
          <p className="text-lg text-[color:var(--muted)] mt-3 max-w-3xl">
            Protect your organization with a layered security model that minimizes risk while
            maintaining productivity. A practical approach to prevention, detection, and response.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-10">
        <div className="container max-w-3xl">
          <p className="text-lg text-[color:var(--muted)] leading-relaxed">
            Every business depends on data and trust. Cybersecurity isn’t about tools — it’s about
            reducing uncertainty, ensuring continuity, and keeping focus on the mission. A mature
            security program builds resilience into daily operations, helping leaders make confident,
            informed decisions.
          </p>
        </div>
      </section>

      {/* divider */}
      <div className="container">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[color:var(--line)]/70 to-transparent" />
      </div>

      {/* CORE SECURITY CAPABILITIES */}
      <section className="py-12">
        <div className="container">
          <h2 className="text-2xl font-bold mb-2">Core Security Capabilities</h2>
          <p className="text-[color:var(--muted)] mb-6">
            Integrated protection across identity, data, devices, and systems — built for scale and sustainability.
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              { icon: <LockKeyhole />, title: 'Identity & Access Management', desc: 'MFA, conditional access, least-privilege, and access reviews.' },
              { icon: <MailWarning />, title: 'Email & Communication Security', desc: 'Prevent phishing and data leaks through secure gateways and awareness.' },
              { icon: <MonitorSmartphone />, title: 'Endpoint Protection', desc: 'Device visibility, isolation, and policy enforcement across the workforce.' },
              { icon: <Bug />, title: 'Vulnerability Management', desc: 'Continuous scanning, prioritization, and remediation tracking.' },
              { icon: <ServerCrash />, title: 'Business Continuity & Recovery', desc: 'Data protection, immutable backups, and tested recovery workflows.' },
              { icon: <ActivitySquare />, title: 'Detection & Response', desc: 'Real-time monitoring, alerting, and tested incident playbooks.' },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="bg-white/90 backdrop-blur border border-[color:var(--line)]/60 rounded-2xl p-5 shadow-sm flex items-start gap-3">
                <div className="mt-1 text-[color:var(--brand)]">{icon}</div>
                <div>
                  <h3 className="font-semibold mb-1">{title}</h3>
                  <p className="text-[color:var(--muted)]">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* divider */}
      <div className="container">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[color:var(--line)]/60 to-transparent" />
      </div>

      {/* ENGAGEMENT MODELS */}
      <section className="py-12 relative">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom_right,rgba(30,183,217,0.045),transparent_60%)]" />
        <div className="container">
          <h2 className="text-2xl font-bold mb-2">Engagement Options</h2>
          <p className="text-[color:var(--muted)] mb-6">
            Start small with an assessment or go deeper with testing and governance support — tailored to your maturity and risk profile.
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="rounded-2xl p-5 shadow-sm bg-white/90 backdrop-blur border border-[color:var(--line)]/60">
              <div className="flex items-start gap-3 mb-2">
                <SearchCheck className="text-[color:var(--brand)] mt-1" />
                <h3 className="font-semibold text-lg">Security Assessment</h3>
              </div>
              <p className="text-[color:var(--muted)] mb-3">
                Evaluate people, process, and technology maturity across the security lifecycle — with a clear roadmap of priorities and quick wins.
              </p>
              <ul className="list">
                <li>Risk heatmap & scorecard</li>
                <li>Policy and control gap analysis</li>
                <li>Remediation roadmap</li>
              </ul>
            </div>

            <div className="rounded-2xl p-5 shadow-sm bg-white/90 backdrop-blur border border-[color:var(--line)]/60">
              <div className="flex items-start gap-3 mb-2">
                <AlertTriangle className="text-[color:var(--brand)] mt-1" />
                <h3 className="font-semibold text-lg">Penetration Testing</h3>
              </div>
              <p className="text-[color:var(--muted)] mb-3">
                Validate security posture through external, internal, and application-based testing with actionable recommendations.
              </p>
              <ul className="list">
                <li>Network and web app testing</li>
                <li>Credential reuse and lateral movement</li>
                <li>Executive summary and debrief</li>
              </ul>
            </div>

            <div className="rounded-2xl p-5 shadow-sm bg-white/90 backdrop-blur border border-[color:var(--line)]/60">
              <div className="flex items-start gap-3 mb-2">
                <FileCheck className="text-[color:var(--brand)] mt-1" />
                <h3 className="font-semibold text-lg">Business Continuity Review</h3>
              </div>
              <p className="text-[color:var(--muted)] mb-3">
                Assess recovery readiness across systems and data — ensuring operations can resume within acceptable recovery objectives.
              </p>
              <ul className="list">
                <li>BCP/DR plan validation</li>
                <li>Critical dependency mapping</li>
                <li>Recovery exercises and documentation</li>
              </ul>
            </div>

            <div className="rounded-2xl p-5 shadow-sm bg-white/90 backdrop-blur border border-[color:var(--line)]/60">
              <div className="flex items-start gap-3 mb-2">
                <LineChart className="text-[color:var(--brand)] mt-1" />
                <h3 className="font-semibold text-lg">Ongoing Program Oversight</h3>
              </div>
              <p className="text-[color:var(--muted)] mb-3">
                Quarterly security governance and risk management cadence — keeping leadership informed and the roadmap active.
              </p>
              <ul className="list">
                <li>Quarterly review sessions</li>
                <li>Policy refresh and metrics</li>
                <li>Audit prep and tracking</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* divider */}
      <div className="container">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[color:var(--line)]/60 to-transparent" />
      </div>

      {/* CTA */}
      <section className="py-12 relative">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,transparent,rgba(30,183,217,0.06),transparent)]" />
        <div className="container">
          <div className="rounded-2xl border border-[color:var(--line)]/60 bg-white/90 backdrop-blur p-6 md:p-8 shadow-sm grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-2">Build Security That Enables, Not Restricts</h2>
              <p className="text-[color:var(--muted)]">
                Start with an assessment or tabletop exercise and build toward continuous improvement.
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
