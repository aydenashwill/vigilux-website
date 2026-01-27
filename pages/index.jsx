// pages/index.jsx
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    // Respect "Reduce Motion" accessibility settings and avoid autoplay video for those users.
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReduceMotion(mq.matches);
    apply();
    mq.addEventListener?.("change", apply);
    return () => mq.removeEventListener?.("change", apply);
  }, []);

  return (
    <>
      <Head>
        <title>Vigilux</title>
        <meta
          name="description"
          content="Vigilux builds rugged ISR and thermal relay systems designed for rapid integration, reliable video paths, and operator-controlled workflows."
        />
      </Head>

      <main className="bg-black text-white">
        {/* HERO (extended to replace removed BRAND PANEL) */}
        <section className="relative isolate overflow-hidden">
          {/* Background media */}
          <div className="absolute inset-0 -z-10">
            {!reduceMotion ? (
              <video
                className="h-full w-full object-cover object-center brightness-[0.95]"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster="/video/hero-poster.jpg"
              >
                {/* Prefer WebM first for size/quality, MP4 fallback for Safari */}
                <source src="/video/hero.webm" type="video/webm" />
                <source src="/video/hero.mp4" type="video/mp4" />
              </video>
            ) : (
              // Fallback for reduce-motion users (and as a safe baseline)
              <img
                src="/video/hero-poster.jpg"
                alt="Vigilux hero background"
                className="h-full w-full object-cover object-center brightness-[0.95]"
              />
            )}

            {/* Overlays for legibility + cinematic look */}
            <div className="absolute inset-0 bg-black/60" />
            {/* Slightly stronger bottom gradient since hero is taller */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/15 to-black/80" />
            {/* Subtle spotlight bloom (keeps it looking premium, not flat) */}
            <div className="absolute inset-0 [background:radial-gradient(60%_45%_at_50%_25%,rgba(255,255,255,0.08),transparent_60%)]" />
          </div>

          {/* Increased bottom padding to extend hero down the page */}
          <div className="mx-auto max-w-6xl px-6 pt-20 pb-32 sm:pt-28 sm:pb-44">
            <p className="text-sm tracking-[0.2em] uppercase text-white/80">
              The Light That Never Sleeps
            </p>

            <h1 className="mt-4 max-w-5xl text-4xl font-semibold tracking-tight sm:text-5xl [text-wrap:balance]">
              Clarity When it Matters
            </h1>

            <p className="mt-5 max-w-3xl lg:max-w-4xl text-base leading-relaxed text-white/85 sm:text-lg [text-wrap:pretty]">
              Rugged ISR & thermal relay systems designed for rapid integration, reliable video
              paths, and operator-controlled workflows.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
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

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs tracking-wide text-white/80">
                Engineering-first
              </span>
              <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs tracking-wide text-white/80">
                Validation-driven
              </span>
              <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs tracking-wide text-white/80">
                No hype
              </span>
            </div>
          </div>
        </section>

        {/* WHY VIGILUX */}
        <section className="vx-container pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="vx-card p-6">
              <div className="text-sm uppercase tracking-[0.18em] text-white/80">
                Tested Architecture
              </div>
              <p className="mt-3 text-white/75 leading-relaxed">
                Measured validation plan with repeatable demos and documented results.
              </p>
            </div>

            <div className="vx-card p-6">
              <div className="text-sm uppercase tracking-[0.18em] text-white/80">
                Rapid Integration
              </div>
              <p className="mt-3 text-white/75 leading-relaxed">
                Designed for low-friction installs with standardized interfaces.
              </p>
            </div>

            <div className="vx-card p-6">
              <div className="text-sm uppercase tracking-[0.18em] text-white/80">
                Practical Video Paths
              </div>
              <p className="mt-3 text-white/75 leading-relaxed">
                CVBS baseline for broad compatibility. IP path as an option where needed.
              </p>
            </div>

            <div className="vx-card p-6">
              <div className="text-sm uppercase tracking-[0.18em] text-white/80">
                Production Credibility
              </div>
              <p className="mt-3 text-white/75 leading-relaxed">
                Controlled BOM, traveler, acceptance checklist, and traceability focus.
              </p>
            </div>
          </div>
        </section>

        {/* AI PREVIEW */}
        <section className="vx-container pb-24">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div>
              <h2 className="text-2xl md:text-3xl font-heading uppercase tracking-[0.14em]">
                AI-Enhanced Capabilities
              </h2>
              <p className="mt-3 vx-muted max-w-3xl">
                Optional operator-assisted analytics under development. Release gated by
                validation and measured performance targets.
              </p>
            </div>

            <Link href="/capabilities" className="vx-btn">
              View Capabilities
            </Link>
          </div>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="vx-card overflow-hidden">
              <img src="/images/ai-preview.png" alt="AI preview" className="w-full h-auto" />
              <div className="p-6">
                <div className="text-sm uppercase tracking-[0.18em] text-white/80">
                  Preview Module
                </div>
                <p className="mt-3 text-white/75 leading-relaxed">
                  Supervised tracking support and controlled overlays—only after validation.
                </p>
              </div>
            </div>

            <div className="vx-card overflow-hidden">
              <img
                src="/images/thermal-preview.png"
                alt="Thermal workflow"
                className="w-full h-auto"
              />
              <div className="p-6">
                <div className="text-sm uppercase tracking-[0.18em] text-white/80">
                  Thermal Workflow
                </div>
                <p className="mt-3 text-white/75 leading-relaxed">
                  Viewing + recording workflow designed for repeatable demo readiness.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* REQUEST DEMO */}
        <section className="vx-container pb-24">
          <div className="vx-card p-10 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-black via-black/90 to-black" />

            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-heading uppercase tracking-[0.14em]">
                Request a Demo
              </h2>
              <p className="mt-3 text-white/75 leading-relaxed max-w-2xl">
                Schedule a technical discussion and receive the latest capability brief and validation approach.
              </p>

              <div className="mt-7 flex gap-4 flex-wrap">
                <Link href="/contact" className="vx-btn vx-btn-primary">
                  Contact
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
