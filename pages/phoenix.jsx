// pages/phoenix.jsx
import Head from "next/head";
import Link from "next/link";

export default function Phoenix() {
  return (
    <>
      <Head>
        <title>Phoenix Overwatch | Vigilux</title>
        <meta
          name="description"
          content="Phoenix Overwatch is a low-SWaP thermal ISR payload designed for rapid integration, operator-controlled workflows, and validated performance."
        />
      </Head>

      <main className="bg-black text-white">
        {/* HERO (match About typography + layout) */}
        <section className="relative isolate overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <img
              src="/images/hero/phoenix-hero-operator-uas.png"
              alt="Phoenix Overwatch operator and UAS payload"
              className="h-full w-full object-cover object-center brightness-[0.85]"
            />
            <div className="absolute inset-0 bg-black/60" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/15 to-black/70" />
          </div>

          <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
            <p className="text-sm tracking-[0.2em] uppercase text-white/80">
              Phoenix Overwatch
            </p>

            <h1 className="mt-4 max-w-5xl text-4xl font-semibold tracking-tight sm:text-5xl [text-wrap:balance]">
              Low-SWaP Thermal ISR, Built for Reality
            </h1>

            <p className="mt-5 max-w-3xl lg:max-w-4xl text-base leading-relaxed text-white/85 sm:text-lg [text-wrap:pretty]">
              A rugged, under-slung thermal relay payload engineered for rapid UAS
              integration, repeatable demos, and operator-controlled workflows — without
              unnecessary complexity.
            </p>

            {/* Single CTA set (no repeats elsewhere on the page) */}
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/contact" className="vx-btn vx-btn-primary">
                Request a Demo
              </Link>
              <Link href="/brief" className="vx-btn">
                Capability Brief
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs tracking-wide text-white/80">
                Design-to-cost
              </span>
              <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs tracking-wide text-white/80">
                Validation-driven
              </span>
              <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs tracking-wide text-white/80">
                Operator-controlled
              </span>
            </div>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="vx-container py-16 sm:py-20">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="vx-card p-6">
              <div className="text-sm uppercase tracking-[0.18em] text-white/80">
                Payload-First Design
              </div>
              <p className="mt-3 text-white/75 leading-relaxed">
                Optimized for under-slung mounting on small UAS platforms with minimal
                integration friction.
              </p>
            </div>

            <div className="vx-card p-6">
              <div className="text-sm uppercase tracking-[0.18em] text-white/80">
                Practical Video Paths
              </div>
              <p className="mt-3 text-white/75 leading-relaxed">
                CVBS baseline for immediate compatibility, with optional IP workflows
                where required.
              </p>
            </div>

            <div className="vx-card p-6">
              <div className="text-sm uppercase tracking-[0.18em] text-white/80">
                Operator-Controlled
              </div>
              <p className="mt-3 text-white/75 leading-relaxed">
                No black boxes. Clear controls, repeatable results, and documented
                performance.
              </p>
            </div>
          </div>
        </section>

        {/* SUPPORTING CTA (no buttons, no duplicates) */}
        <section className="vx-container pb-16 sm:pb-20">
          <div className="vx-card p-8 sm:p-12 relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur">
            <div className="absolute inset-0 bg-gradient-to-br from-black via-black/90 to-black" />

            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight [text-wrap:balance]">
                Ready to evaluate Phoenix Overwatch?
              </h2>
              <p className="mt-3 text-white/80 max-w-3xl lg:max-w-4xl leading-relaxed [text-wrap:pretty]">
                Review integration details, validation approach, and measured performance
                targets through the demo request or capability brief above.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
