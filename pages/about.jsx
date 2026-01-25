import Head from "next/head";

export default function About() {
  return (
    <>
      <Head>
        <title>About | Vigilux</title>
        <meta
          name="description"
          content="Learn about Vigilux Systems LLC, our mission, and the leadership team building mission-ready sensing systems."
        />
      </Head>

      <main className="bg-black text-white">
        {/* HERO */}
        <section className="relative isolate overflow-hidden">
          {/* Background image */}
          <div
            className="absolute inset-0 -z-10 bg-no-repeat bg-center"
            style={{
              backgroundImage: "url('/images/hero/hero-about-phoenix-logo.png')",
              backgroundSize: "90% auto", // zoom out slightly so text isn't cut off
            }}
          />
          {/* Dark overlay for readability */}
          <div className="absolute inset-0 -z-10 bg-black/60" />
          {/* Subtle gradient for depth */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/35 via-black/15 to-black/70" />

          <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
            <p className="text-sm tracking-[0.2em] uppercase text-white/80">
              About Vigilux
            </p>

            <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              The Light That Never Sleeps
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
              Vigilux builds mission-ready sensing systems engineered for
              reliability, scalability, and operational credibility.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs tracking-wide text-white/80">
                Defense &amp; Dual-Use
              </span>
              <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs tracking-wide text-white/80">
                Low-SWaP Payloads
              </span>
              <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs tracking-wide text-white/80">
                Scalable Manufacturing
              </span>
              <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs tracking-wide text-white/80">
                Operational Reliability
              </span>
            </div>
          </div>
        </section>

        {/* MISSION / ABOUT */}
        <section className="mx-auto max-w-6xl px-6 py-14 sm:py-18">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-7">
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                Built for real-world deployment.
              </h2>

              <p className="mt-5 text-white/80 leading-relaxed">
                Vigilux exists to close the gap between high-cost legacy ISR
                systems and what operators actually need: reliable sensing,
                practical integration, and scalable production that can support
                fielding—not just demonstrations.
              </p>

              <p className="mt-5 text-white/80 leading-relaxed">
                Our focus is disciplined engineering, design-to-cost execution,
                and measurable performance. We build systems that hold up under
                operational constraints and remain credible to defense buyers,
                partners, and national security stakeholders.
              </p>
            </div>

            <div className="md:col-span-5">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <h3 className="text-lg font-semibold">What we prioritize</h3>
                <ul className="mt-4 space-y-3 text-white/80">
                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/70" />
                    <span>Operational reliability and repeatable performance</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/70" />
                    <span>Low-friction integration for small UAS platforms</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/70" />
                    <span>Design-to-cost discipline with scalable manufacturing</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/70" />
                    <span>Security posture that can mature with customers</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* LEADERSHIP */}
        <section className="mx-auto max-w-6xl px-6 pb-16 sm:pb-20">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                Leadership
              </h2>
              <p className="mt-2 max-w-3xl text-white/75 leading-relaxed">
                Vigilux is led by a team focused on disciplined execution,
                technical rigor, and operational credibility.
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {/* AYDEN */}
            <article className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <h3 className="text-xl font-semibold">Ayden Ashwill</h3>
              <p className="mt-1 text-sm text-white/70">President &amp; Founder</p>

              <p className="mt-4 text-white/85 leading-relaxed">
                Ayden Ashwill is the President and Founder of Vigilux, where he
                leads overall company strategy, product direction, and
                system-level engineering. With a background in mechanical
                engineering and hands-on experience across unmanned systems,
                sensing payloads, and embedded platforms, Ayden focuses on
                building practical, mission-ready technologies designed for real
                operational use.
              </p>

              <p className="mt-4 text-white/85 leading-relaxed">
                Ayden founded Vigilux to address a persistent gap in the market:
                capable ISR and sensing systems that are reliable, scalable, and
                cost-disciplined—without the complexity and expense of legacy
                defense solutions. He oversees end-to-end execution, from system
                architecture and prototyping to supplier engagement and customer
                alignment, ensuring Vigilux products are engineered for
                deployment rather than demonstration.
              </p>

              <p className="mt-4 text-white/85 leading-relaxed">
                His approach emphasizes technical rigor, design-to-cost
                discipline, and production credibility, positioning Vigilux to
                deliver sensing solutions aligned with the evolving needs of
                small-UAS operators, defense partners, and national security
                stakeholders.
              </p>
            </article>

            {/* CONNER */}
            <article className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <h3 className="text-xl font-semibold">Conner Rucker</h3>
              <p className="mt-1 text-sm text-white/70">
                Executive of Business Operations
              </p>

              <p className="mt-4 text-white/85 leading-relaxed">
                Conner Rucker serves as Executive of Business Operations at
                Vigilux, where he leads strategy, partnerships, and
                organizational execution. A former collegiate athlete and MBA
                graduate of Millsaps College, Conner brings a disciplined,
                mission-focused approach to building high-performance ventures
                in complex industries.
              </p>

              <p className="mt-4 text-white/85 leading-relaxed">
                With professional experience spanning global and industrial
                markets, Conner’s background includes work across the maritime
                sector supporting aerospace, geospatial surveying, offshore
                energy, offshore wind, and defense operations. He is driven by a
                commitment to integrity, accountability, and operational
                excellence, with a clear focus on advancing technologies that
                enhance safety and national security.
              </p>
            </article>

            {/* NOAH */}
            <article className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur md:col-span-2">
              <h3 className="text-xl font-semibold">Noah Browning</h3>
              <p className="mt-1 text-sm text-white/70">
                Chief Technology Officer (CTO)
              </p>

              <p className="mt-4 text-white/85 leading-relaxed">
                Noah Browning serves as Chief Technology Officer at Vigilux,
                where he is responsible for technical strategy, system
                architecture, and the integration of software, hardware, and
                secure communications across the company’s platforms.
              </p>

              <p className="mt-4 text-white/85 leading-relaxed">
                With a foundation in Electrical and Computer Engineering, Noah
                brings professional experience from the aviation industry, where
                he worked in component reliability engineering and systems
                analysis. In this role, he evaluated failure modes, operational
                risk, and lifecycle performance of aircraft components,
                developing a disciplined approach to safety-critical systems,
                verification, and long-term reliability. This background
                directly informs his emphasis on robustness, traceability, and
                fault-tolerant design.
              </p>

              <p className="mt-4 text-white/85 leading-relaxed">
                In addition to his aviation work, Noah has extensive hands-on
                experience in robotics and autonomous systems, spanning sensors,
                actuators, embedded control, and real-time software. He competed
                and placed for the University of Memphis Robotics team in Spring
                2025.
              </p>

              <p className="mt-4 text-white/85 leading-relaxed">
                Noah’s work bridges rigorous engineering standards with
                practical execution, ensuring that complex technologies are not
                only innovative, but reliable, secure, and ready for real-world
                deployment.
              </p>
            </article>

            {/* AUSTIN (TBD) */}
            <article className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur md:col-span-2">
              <h3 className="text-xl font-semibold">Austin Russell</h3>
              <p className="mt-1 text-sm text-white/70">
                Chief Financial Officer (CFO)
              </p>
              <p className="mt-4 text-white/70 leading-relaxed italic">
                Bio coming soon.
              </p>
            </article>
          </div>
        </section>

        {/* FOOTER STRIP */}
        <section className="border-t border-white/10 bg-black">
          <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-white/60">
            © {new Date().getFullYear()} Vigilux Systems LLC. All rights reserved.
          </div>
        </section>
      </main>
    </>
  );
}

