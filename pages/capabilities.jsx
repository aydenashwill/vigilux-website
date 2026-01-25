// pages/capabilities.jsx
import Head from "next/head";
import Link from "next/link";

export default function Capabilities() {
  return (
    <>
      <Head>
        <title>Capabilities | Vigilux</title>
        <meta
          name="description"
          content="Vigilux capabilities: rugged ISR workflows, thermal relay, operator-controlled video paths, and validation-first integration."
        />
      </Head>

      <main className="bg-black text-white">
        {/* HERO (match About system) */}
        <section className="relative isolate overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <img
              src="/images/hero/hero-groundstation-field.png"
              alt="Vigilux rugged ground station"
              className="h-full w-full object-cover object-center brightness-[0.9]"
            />
            <div className="absolute inset-0 bg-black/60" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/15 to-black/70" />
          </div>

          <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
            <p className="text-sm tracking-[0.2em] uppercase text-white/80">
              Capabilities
            </p>

            <h1 className="mt-4 max-w-5xl text-4xl font-semibold tracking-tight sm:text-5xl [text-wrap:balance]">
              Operator-Controlled Thermal Workflows
            </h1>

            <p className="mt-5 max-w-3xl lg:max-w-4xl text-base leading-relaxed text-white/85 sm:text-lg [text-wrap:pretty]">
              Built for field usability: rugged viewing and recording, practical video paths,
              and validation-first integration — designed to demonstrate measurable performance,
              not just claim it.
            </p>

            {/* Single CTA set (no duplicates) */}
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
                Field-ready workflow
              </span>
              <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs tracking-wide text-white/80">
                Practical video paths
              </span>
              <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs tracking-wide text-white/80">
                Validation-first
              </span>
            </div>
          </div>
        </section>

        {/* CAPABILITY GRID (kept your content, tightened style consistency) */}
        <section className="vx-container py-16 sm:py-20">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="vx-card p-6">
              <div className="text-sm uppercase tracking-[0.18em] text-white/80">
                Rugged Ground Workflow
              </div>
              <p className="mt-3 text-white/75 leading-relaxed">
                Viewing and recording optimized for repeatable field demos and operator confidence.
              </p>
            </div>

            <div className="vx-card p-6">
              <div className="text-sm uppercase tracking-[0.18em] text-white/80">
                Practical Video Paths
              </div>
              <p className="mt-3 text-white/75 leading-relaxed">
                CVBS baseline for broad compatibility, with optional IP workflows where required.
              </p>
            </div>

            <div className="vx-card p-6">
              <div className="text-sm uppercase tracking-[0.18em] text-white/80">
                Operator-Assisted Overlays
              </div>
              <p className="mt-3 text-white/75 leading-relaxed">
                Clean UI with REC/LINK/BAT/GPS/MODE plus optional supervised tracking overlays.
              </p>
            </div>

            <div className="vx-card p-6">
              <div className="text-sm uppercase tracking-[0.18em] text-white/80">
                Integration-First Design
              </div>
              <p className="mt-3 text-white/75 leading-relaxed">
                Standardized interfaces and a repeatable installation approach for small UAS platforms.
              </p>
            </div>

            <div className="vx-card p-6">
              <div className="text-sm uppercase tracking-[0.18em] text-white/80">
                Validation Plan
              </div>
              <p className="mt-3 text-white/75 leading-relaxed">
                Measured targets for dropout rate, reacquisition time, bitrate stability, and usability.
              </p>
            </div>

            <div className="vx-card p-6">
              <div className="text-sm uppercase tracking-[0.18em] text-white/80">
                Production Credibility
              </div>
              <p className="mt-3 text-white/75 leading-relaxed">
                Controlled BOM, traveler, per-unit acceptance checklist, and traceability posture.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
