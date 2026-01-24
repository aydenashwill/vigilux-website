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
        {/* HERO */}
        <section className="relative overflow-hidden min-h-[85vh]">
          <img
            src="/images/hero/phoenix-hero-operator-uas.png"
            alt="Phoenix Overwatch operator and UAS payload"
            className="absolute inset-0 w-full h-full object-cover object-center brightness-[0.85]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/25 to-black/85" />

          <div className="relative z-10 vx-container pt-24 pb-20 md:pt-32 md:pb-28">
            <p className="text-white/70 uppercase tracking-[0.22em] text-xs md:text-sm flex items-center gap-3">
              <span className="inline-block h-[1px] w-10 bg-white/30" />
              Phoenix Overwatch
            </p>

            <h1 className="mt-5 font-heading text-4xl md:text-6xl lg:text-7xl uppercase tracking-[0.18em]">
              Low-SWaP Thermal ISR
              <br />
              Built for Reality.
            </h1>

            <p className="mt-6 max-w-2xl text-white/85 text-base md:text-xl leading-relaxed">
              A rugged, under-slung thermal relay payload engineered for rapid UAS integration,
              repeatable demos, and operator-controlled workflows — without unnecessary complexity.
            </p>

            <div className="mt-10 flex gap-4 flex-wrap">
              <Link href="/contact" className="vx-btn vx-btn-primary">
                Request a Demo
              </Link>
              <Link href="/brief" className="vx-btn">
                Capability Brief
              </Link>
            </div>

            <p className="mt-6 text-white/55 text-sm">
              Design-to-cost. Validation-driven. Mission-focused.
            </p>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="vx-container py-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="vx-card p-6">
              <div className="text-sm uppercase tracking-[0.18em] text-white/80">
                Payload-First Design
              </div>
              <p className="mt-3 text-white/70">
                Optimized for under-slung mounting on small UAS platforms with minimal integration friction.
              </p>
            </div>

            <div className="vx-card p-6">
              <div className="text-sm uppercase tracking-[0.18em] text-white/80">
                Practical Video Paths
              </div>
              <p className="mt-3 text-white/70">
                CVBS baseline for immediate compatibility, with optional IP workflows where required.
              </p>
            </div>

            <div className="vx-card p-6">
              <div className="text-sm uppercase tracking-[0.18em] text-white/80">
                Operator-Controlled
              </div>
              <p className="mt-3 text-white/70">
                No black boxes. Clear controls, repeatable results, and documented performance.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="vx-container pb-28">
          <div className="vx-card p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-black via-black/90 to-black" />

            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-heading uppercase tracking-[0.14em]">
                See Phoenix Overwatch in Action
              </h2>
              <p className="mt-3 text-white/80 max-w-2xl">
                Schedule a technical discussion and review integration details, validation approach,
                and measured performance targets.
              </p>

              <div className="mt-7 flex gap-4 flex-wrap">
                <Link href="/contact" className="vx-btn vx-btn-primary">
                  Request a Demo
                </Link>
                <Link href="/brief" className="vx-btn">
                  Open Capability Brief
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
