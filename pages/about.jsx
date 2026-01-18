// pages/about.jsx

import Head from "next/head";

export default function About() {
  return (
    <>
      <Head>
        <title>About | Vigilux</title>
        <meta
          name="description"
          content="The founding story of Vigilux — built by an engineer focused on clarity, discipline, and real-world performance."
        />
      </Head>

      <main className="bg-black text-white">
        {/* HERO */}
        <section className="relative overflow-hidden">
          <img
            src="/images/vigilux-clarity.png"
            alt="Vigilux — Clarity When It Matters"
            className="absolute inset-0 w-full h-full object-cover brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/55 to-black/95" />

          <div className="relative z-10 container mx-auto px-6 pt-24 pb-20">
            <img
              src="/images/vigilux-logo-gray.png"
              alt="Vigilux Logo"
              className="w-44 md:w-56 opacity-95"
            />

            <h1 className="mt-10 text-5xl md:text-6xl font-heading uppercase tracking-[0.18em]">
              About Vigilux
            </h1>

            <p className="mt-6 max-w-3xl text-lg md:text-xl text-gray-200">
              Vigilux was founded with a simple principle: clarity matters most when conditions are worst.
            </p>
          </div>
        </section>

        {/* STORY */}
        <section className="container mx-auto px-6 py-20">
          <div className="max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-semibold">Founder & Origin</h2>

            <p className="mt-6 text-gray-200 leading-relaxed">
              Vigilux was founded by Ayden Ashwill at age 23 while completing his final semester toward a
              Bachelor of Science in Mechanical Engineering. The company began as a response to a real gap:
              small teams and small UAS platforms needed thermal and ISR capability that was practical to
              integrate, credible to demonstrate, and engineered for repeatable field performance.
            </p>

            <p className="mt-6 text-gray-200 leading-relaxed">
              With a hands-on background spanning mechanical design, embedded hardware, and rapid prototyping,
              Ayden approached Vigilux as an engineering-first effort: build the platform correctly, validate
              it with disciplined testing, and earn credibility through measurable performance rather than
              marketing claims.
            </p>

            <p className="mt-6 text-gray-200 leading-relaxed">
              Prior to founding Vigilux, Ayden competed in college athletics, including football and baseball.
              Those experiences shaped the standards that define Vigilux today: discipline, resilience, and
              execution under pressure.
            </p>

            <div className="mt-10 border border-white/10 bg-white/5 p-6">
              <div className="text-sm tracking-widest text-gray-300 uppercase">Vigilux Approach</div>
              <ul className="mt-4 space-y-2 text-gray-200">
                <li>• Measured performance and validation-first development</li>
                <li>• Controlled interfaces and integration discipline</li>
                <li>• Production-credible design and documentation</li>
                <li>• Clear, operator-controlled workflows</li>
              </ul>
            </div>

            <p className="mt-10 text-gray-300 leading-relaxed max-w-4xl">
              Vigilux exists to deliver clarity when it matters — the light that never sleeps.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
