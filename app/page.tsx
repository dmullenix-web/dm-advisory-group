import Image from 'next/image'

export default function Page() {
  return (
    <>
      {/* HERO with blended background image */}
      <section className="relative overflow-hidden py-16 md:py-20">
        {/* Background image fills the section */}
        <Image
          src="/hero.jpg"
          alt=""
          fill
          priority
          aria-hidden="true"
          className="
            absolute inset-0 -z-10 object-cover
            opacity-70
            [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]
            [mask-size:100%_100%]
            [mask-repeat:no-repeat]
          "
        />
        {/* soft wash + subtle brand tint for premium feel */}
        <div className="absolute inset-0 -z-10 bg-white/55" />
        <div className="absolute inset-0 -z-10 bg-[rgba(24,145,172,0.08)]" />

        <div className="container">
          <span className="pill">Fractional CIO Services</span>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mt-3">
            Experienced technology leadership—on your budget and timeline.
          </h1>
          <p className="text-lg text-[color:var(--muted)] mt-2 max-w-3xl">
            Align technology with strategy, increase reliability, reduce risk, and get more value from every IT dollar.
          </p>
        </div>
      </section>

      {/* OUTCOMES (unchanged) */}
      <section className="section-alt">
        <div className="container grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-2xl font-bold mb-2">Fractional CIO Outcomes</h2>
            <ul className="list">
              <li>Standardize core platforms for 99.9% availability</li>
              <li>Lower run costs via vendor & license optimization</li>
              <li>Reduce cyber risk with MFA, email protection, governance</li>
              <li>Turn operations data into KPIs & executive dashboards</li>
            </ul>
          </div>
          <div className="card p-5">
            <h3 className="text-xl font-bold">Start with a 30-minute discovery</h3>
            <p className="text-[color:var(--muted)] mb-3">
              We’ll align goals, identify quick wins, and outline a pragmatic 90-day plan.
            </p>
            <a className="btn btn-primary" href="/contact">Request Discovery Call</a>
          </div>
        </div>
      </section>
    </>
  )
}
