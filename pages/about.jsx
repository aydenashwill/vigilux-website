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
                leads company strategy, product direction, and system-level
                engineering. He brings a background in mechanical engineering
                with direct exposure to aircraft engineering, combined with
                hands-on experience across unmanned systems, sensing payloads,
                and embedded platforms. His work centers on translating rigorous
                engineering principles into practical, mission-ready
                technologies built for real operational use.
              </p>

              <p className="mt-4 text-white/85 leading-relaxed">
                A former collegiate football and baseball athlete, Ayden
                approaches leadership and engineering with discipline,
                resilience, and a competitive, execution-driven mindset. He
                founded Vigilux with a clear mission: <strong>to increase
                operator safety, reduce cognitive and operational burden, and
                provide operators with a decisive tactical advantage</strong>{" "}
                through reliable, easy-to-use sensing systems. He oversees
                end-to-end execution—from system architecture and prototyping to
                supplier engagement and customer alignment—ensuring Vigilux
                products are engineered for deployment rather than
                demonstration.
              </p>

              <p className="mt-4 text-white/85 leading-relaxed">
                Ayden’s leadership emphasizes technical rigor, design-to-cost
                discipline, and production credibility, positioning Vigilux to
                deliver sensing solutions that simplify the operator’s job while
                meeting the evolving demands of small-UAS operators, defense
                partners, and national security stakeholders.
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

            {/* AUSTIN */}
            <article className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur md:col-span-2">
              <h3 className="text-xl font-semibold">Austin Russell</h3>
              <p className="mt-1 text-sm text-white/70">
                Chief Executive Officer (CEO)
              </p>

              <p className="mt-4 text-white/85 leading-relaxed">
                Austin Russell is the Chief Executive Officer of Vigilux, leading
                the company with a clear vision for innovation, disciplined
                growth, and long-term value creation. He holds a Master’s degree
                in Business and brings a rare combination of strategic insight,
                financial acumen, and real-world operating experience to the
                role.
              </p>

              <p className="mt-4 text-white/85 leading-relaxed">
                A former collegiate athlete, Austin approaches leadership with
                focus, resilience, and a competitive drive to win in the
                marketplace. As CEO, he is responsible for defining Vigilux’s
                strategic direction, building high-performing teams, and
                executing scalable growth initiatives. He works closely with
                investors and leadership to align capital strategy, operational
                execution, and market expansion, ensuring Vigilux is positioned
                to grow efficiently while maintaining strong fundamentals.
              </p>

              <p className="mt-4 text-white/85 leading-relaxed">
                Austin’s hands-on leadership style and data-driven approach
                enable Vigilux to identify opportunity, manage risk, and execute
                decisively—laying the foundation for sustainable growth and
                enduring shareholder value.
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
