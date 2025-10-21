import Image from 'next/image'
import {
  Bot,
  Brain,
  Database,
  ShieldCheck,
  Gauge,
  Sparkles,
  Boxes,
  Settings2,
  CheckCircle2,
  BarChart3,
} from 'lucide-react'

export default function Page() {
  return (
    <>
      {/* HERO — blended background, premium wash */}
      <section className="relative overflow-hidden py-14 md:py-18">
        <Image
          src="/ai_bg.jpeg"
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
            Artificial Intelligence
          </h1>
          <p className="text-lg text-[color:var(--muted)] mt-3 max-w-3xl">
            Pragmatic AI to augment teams, improve decisions, and automate work—grounded in data,
            governance, and measurable results.
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
            AI is most valuable when it’s applied to real processes with real data. The goal isn’t
            novelty—it’s throughput, quality, and better decisions. We focus on scoped pilots that
            earn trust quickly, then scale with an operating model that’s safe and sustainable.
          </p>
        </div>
      </section>

      {/* hairline divider */}
      <div className="container">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[color:var(--line)]/70 to-transparent" />
      </div>

      {/* WHAT WE DELIVER */}
      <section className="py-12">
        <div className="container">
          <h2 className="text-2xl font-bold mb-2">What we deliver</h2>
          <p className="text-[color:var(--muted)] mb-6">
            Outcomes-first AI: from opportunity mapping to secure deployment and ongoing value tracking.
          </p>

          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-white/90 backdrop-blur border border-[color:var(--line)]/60 rounded-2xl p-5 shadow-sm flex items-start gap-3">
              <Brain className="mt-1 text-[color:var(--brand)]" />
              <div>
                <h3 className="font-semibold mb-1">Opportunity & Roadmap</h3>
                <p className="text-[color:var(--muted)]">
                  Identify high-ROI use cases, success metrics, and a staged plan to de-risk adoption.
                </p>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur border border-[color:var(--line)]/60 rounded-2xl p-5 shadow-sm flex items-start gap-3">
              <Database className="mt-1 text-[color:var(--brand)]" />
              <div>
                <h3 className="font-semibold mb-1">Data & Integration</h3>
                <p className="text-[color:var(--muted)]">
                  Connect systems and establish secure data access, retrieval-augmented generation (RAG),
                  and observability.
                </p>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur border border-[color:var(--line)]/60 rounded-2xl p-5 shadow-sm flex items-start gap-3">
              <Bot className="mt-1 text-[color:var(--brand)]" />
              <div>
                <h3 className="font-semibold mb-1">Assistive tools & Copilots</h3>
                <p className="text-[color:var(--muted)]">
                  Task-level copilots, chat over knowledge bases, content drafting, and decision support.
                </p>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur border border-[color:var(--line)]/60 rounded-2xl p-5 shadow-sm flex items-start gap-3">
              <ShieldCheck className="mt-1 text-[color:var(--brand)]" />
              <div>
                <h3 className="font-semibold mb-1">Responsible AI & Governance</h3>
                <p className="text-[color:var(--muted)]">
                  Policies, privacy, security, human-in-the-loop, evaluation, and change management.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* subtle angled wash */}
      <div className="relative h-8">
        <div className="absolute inset-0 bg-[conic-gradient(at_0%_0%,transparent_0deg,rgba(30,183,217,0.06)_40deg,transparent_80deg)]" />
      </div>

      {/* PLATFORMS */}
      <section className="py-12 relative">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom_right,rgba(30,183,217,0.045),transparent_60%)]" />
        <div className="container">
          <h2 className="text-2xl font-bold mb-2">Platforms we support</h2>
          <p className="text-[color:var(--muted)] mb-6">
            Select the right stack for your security model, integrations, and scale.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              'Azure OpenAI / Microsoft Copilot Studio',
              'OpenAI API (GPT-4 class) with enterprise controls',
              'AWS Bedrock (Anthropic, Cohere, etc.)',
              'Google Vertex AI',
              'LangChain / LlamaIndex for orchestration',
              'Vector search: pgvector, Pinecone, Azure AI Search',
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

      {/* USE CASES */}
      <section className="py-12">
        <div className="container">
          <h2 className="text-2xl font-bold mb-2">Pragmatic use cases</h2>
          <p className="text-[color:var(--muted)] mb-6">
            Targeted improvements that compound value over time.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                t: 'Sales & service copilots',
                d: 'Draft emails, summarize cases, next-best-action with CRM context.',
                i: <Sparkles className="mt-1 text-[color:var(--brand)]" />,
              },
              {
                t: 'Knowledge assistant',
                d: 'Chat over policies, SOPs, and contracts with citations and guardrails.',
                i: <Bot className="mt-1 text-[color:var(--brand)]" />,
              },
              {
                t: 'Back-office acceleration',
                d: 'AP/AR document extraction, reconciliation, and exception routing.',
                i: <Settings2 className="mt-1 text-[color:var(--brand)]" />,
              },
              {
                t: 'Analytics & insights',
                d: 'Natural-language questions over trusted data with governed access.',
                i: <BarChart3 className="mt-1 text-[color:var(--brand)]" />,
              },
              {
                t: 'Risk & compliance',
                d: 'PII detection/redaction, policy checks, and audit-ready trails.',
                i: <ShieldCheck className="mt-1 text-[color:var(--brand)]" />,
              },
              {
                t: 'IT & operations',
                d: 'Ticket summarization, runbook copilots, and incident postmortems.',
                i: <Gauge className="mt-1 text-[color:var(--brand)]" />,
              },
            ].map(({ t, d, i }) => (
              <div
                key={t}
                className="bg-white/90 backdrop-blur border border-[color:var(--line)]/60 rounded-2xl p-5 shadow-sm flex items-start gap-3"
              >
                {i}
                <div>
                  <div className="font-semibold">{t}</div>
                  <p className="text-[color:var(--muted)] mt-1">{d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* subtle angled wash */}
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
                    Intake, evaluation, human-in-the-loop, change control, and model lifecycle
                    management—so AI becomes a product, not a project.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur border border-[color:var(--line)]/60 rounded-2xl p-6 shadow-sm flex flex-col">
              <div className="flex items-start gap-3">
                <Gauge className="mt-1 text-[color:var(--brand)]" />
                <div>
                  <h3 className="font-semibold mb-1">Evaluation & value tracking</h3>
                  <p className="text-[color:var(--muted)]">
                    Quality metrics (accuracy, grounding), risk checks, and business KPIs
                    (time saved, cycle time, CSAT) visible on a dashboard.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur border border-[color:var(--line)]/60 rounded-2xl p-6 shadow-sm flex flex-col">
              <div className="flex items-start gap-3">
                <ShieldCheck className="mt-1 text-[color:var(--brand)]" />
                <div>
                  <h3 className="font-semibold mb-1">Security & responsibility</h3>
                  <p className="text-[color:var(--muted)]">
                    Privacy, consent, data boundaries, prompt injection defense, logging, and safe fallbacks.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* compact reassurance */}
          <div className="mt-6 rounded-2xl border border-[color:var(--line)]/60 bg-white/90 backdrop-blur p-5 shadow-sm flex items-start gap-3">
            <CheckCircle2 className="mt-1 text-[color:var(--brand)]" />
            <p className="text-[color:var(--muted)]">
              We start small, measure, and scale deliberately—so results are explainable, secure, and maintainable.
            </p>
          </div>
        </div>
      </section>

      {/* CTA — consistent with other pages */}
      <section className="py-12 relative">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,transparent,rgba(30,183,217,0.06),transparent)]" />
        <div className="container">
          <p className="text-[color:var(--muted)]">
            Pair practical experimentation with measurable business outcomes. We help teams
            safely adopt AI copilots, automate knowledge work, and align governance with your
            compliance requirements.
          </p>

          <h3 className="text-lg font-semibold mb-2">Approach</h3>
          <ul className="list">
            <li>Use-case discovery and prioritization</li>
            <li>Pilot design with clear success metrics</li>
            <li>Governance, data readiness, and security considerations</li>
          </ul>

          <h3 className="text-lg font-semibold mt-6 mb-2">Examples</h3>
          <ul className="list">
            <li>Agent-assisted workflows and knowledge retrieval</li>
            <li>Summarization and reporting accelerators</li>
            <li>Responsible use guidelines and training</li>
          </ul>

          <h3 className="text-lg font-semibold mt-6 mb-2">Typical Work</h3>
          <ul className="list">
            <li>LLM platform selection, integration, and rollout planning</li>
            <li>Custom copilot and chatbot builds with human-in-the-loop review</li>
            <li>Data quality, prompt engineering, and model evaluation support</li>
          </ul>
        </div>
      </section>
    </>
  )
}