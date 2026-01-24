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
        {/* HERO */}
        <section className="relative overflow-hidden min-h-[75vh]">
          <img
            src="/images/hero/hero-groundstation-field.png"
            alt="Vigilux rugged ground station"
            className="absolute inset-0 w-full h-full object-cover object-center brightness-[0.9]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/25 to-black/85" />

          <div className="relative z-10 vx-container pt-24 pb-16 md:pt-32 md:pb-24">
            <p className="vx-hero-kicker">
              <span className="inline-block h-[1px] w-10 bg-white/30" />
              Capabilities
            </p>

            <h1 className="vx-hero-title">
              Operator-Controlled
              <br />
              Thermal Workflows.
            </h1>

            <p className="vx-hero-lead">
              Designed for field usability: rugged viewing + recording, practical video paths,
              and validation-first integration — built to demonstrate, not just claim.
            </p>

            <div className="mt-10 flex gap-4 flex-wrap">
              <Link href="/phoenix" className="vx-btn">
                Phoenix Overwatch
              </Link>
              <Link href="/contact" className="vx-btn vx-btn-primary">
                Request a Demo
              </Link>
              <Link href="/brief" className="vx-btn">
                Capability Brief
              </Link>
            </div>
          </div>
        </section>

        {/* CAPABILITY GRID */}
        <section className="vx-container py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="vx-card p-6">
              <div className="text-sm uppercase tracking-[0.18em] text-white/80">
                Rugged Ground Workflow
              </div>
              <p className="mt-3 text-white/70">
                Viewing + recording optimized for repeatable field demos and operator confidence.
              </p>
            </div>

            <div className="vx-card p-6">
              <div className="text-sm uppercase tracking-[0.18em] text-white/80">
                Practical Video Paths
              </div>
              <p className="mt-3 text-white/70">
                CVBS baseline for broad compatibility. Optional IP workflows as required.
              </p>
            </div>

            <div className="vx-card p-6">
              <div className="text-sm uppercase tracking-[0.18em] text-white/80">
                Operator-Assisted Overlays
              </div>
              <p className="mt-3 text-white/70">
                Clean UI with REC/LINK/BAT/GPS/MODE plus optional supervised tracking overlays.
              </p>
            </div>

            <div className="vx-card p-6">
              <div className="text-sm uppercase tracking-[0.18em] text-white/80">
                Integration-First Design
              </div>
              <p className="mt-3 text-white/70">
                Standardized interfaces and repeatable installation approach for small UAS platforms.
              </p>
            </div>

            <div className="vx-card p-6">
              <div className="text-sm uppercase tracking-[0.18em] text-white/80">
                Validation Plan
              </div>
              <p className="mt-3 text-white/70">
                Measured targets for dropout rate, reacquisition time, bitrate stability, and usability.
              </p>
            </div>

            <div className="vx-card p-6">
              <div className="text-sm uppercase tracking-[0.18em] text-white/80">
                Production Credibility
              </div>
              <p className="mt-3 text-white/70">
                Controlled BOM, traveler, per-unit acceptance checklist, and traceability posture.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
