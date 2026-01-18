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
          content="Phoenix Overwatch — low-SWaP thermal relay payload for small UAS. Built for rapid integration and operator-controlled workflows."
        />
      </Head>

      <main className="bg-black text-white">
        {/* HERO */}
        <section className="relative overflow-hidden min-h-[80vh]">
          {/* Phoenix-specific hero image (NOT reused site-wide) */}
          <img
            src="/images/phoenix-hero.png"
            alt="Phoenix Overwatch"
            className="absolute inset-0 w-full h-full object-cover object-center brightness-60"
          />

          {/* Clean overlays (no random logos) */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/55 to-black/92" />

          <div className="relative z-10 vx-container pt-24 pb-16">
            <h1 className="font-heading text-4xl md:text-6xl uppercase tracking-[0.18em]">
              Phoenix Overwatch
            </h1>

            <p className="mt-5 max-w-3xl text-white/80 text-lg md:text-xl">
              A low-SWaP thermal relay payload for small UAS platforms—engineered for reliable
              video paths, rapid integration, and operator-controlled workflows.
            </p>

            <div className="mt-10 flex gap-4 flex-wrap">
              <Link href="/contact" className="vx-btn vx-btn-primary">
                Request Demo Access
              </Link>
              <a href="/api/brief" target="_blank" rel="noreferrer" className="vx-btn">
                Capability Brief (PDF)
              </a>
            </div>

            <p className="mt-6 text-xs uppercase tracking-[0.25em] text-white/50">
              Development system — specifications and capabilities evolve as validation progresses
            </p>
          </div>
        </section>

        {/* CORE CAPABILITIES */}
        <section className="vx-container py-20">
          <h2 className="text-2xl md:text-3xl font-heading uppercase tracking-[0.14em]">
            Core Capabilities
          </h2>
          <p className="mt-4 vx-muted max-w-3xl">
            Phoenix is engineered for disciplined integration and repeatable field performance.
            This page stays high-confidence and verifiable—no “marketing magic.”
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="vx-card p-6">
              <div className="text-sm uppercase tracking-[0.18em] text-white/80">Video Paths</div>
              <p className="mt-3 text-white/80">
                Baseline analog CVBS for compatibility with FPV receivers/monitors/DVR. Optional digital IP
                path for RTSP/WebRTC workflows where appropriate.
              </p>
            </div>

            <div className="vx-card p-6">
              <div className="text-sm uppercase tracking-[0.18em] text-white/80">Integration</div>
              <p className="mt-3 text-white/80">
                Standardized mounting and a single harness approach to reduce custom work and shorten install time.
              </p>
            </div>

            <div className="vx-card p-6">
              <div className="text-sm uppercase tracking-[0.18em] text-white/80">Production Credibility</div>
              <p className="mt-3 text-white/80">
                Controlled BOM with alternates, traveler, traceability, and per-unit acceptance testing
                (video, power stability, thermal check, link check).
              </p>
            </div>

            <div className="vx-card p-6">
              <div className="text-sm uppercase tracking-[0.18em] text-white/80">Security (Phased)</div>
              <p className="mt-3 text-white/80">
                Baseline hardening first; Secure/Enterprise follows with validated radios and documented key handling.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
