// pages/index.jsx
import Head from "next/head";
import Link from "next/link";

export default function Home() {
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
        {/* HERO */}
        <section className="relative overflow-hidden">
          <img
            src="/images/hero/hero-operator-drone-dusk.png"
            alt="Vigilux operator and drone"
            className="absolute inset-0 w-full h-full object-cover object-center brightness-[0.85]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/20 to-black/70" />

          <div className="relative z-10 vx-container pt-20 pb-16 md:pt-28 md:pb-24">
            <p className="text-white/70 uppercase tracking-[0.22em] text-xs md:text-sm flex items-center gap-3">
              <span className="inline-block h-[1px] w-10 bg-white/30" />
              The light that never sleeps
            </p>

            <h1 className="mt-5 font-heading text-4xl md:text-6xl lg:text-7xl uppercase tracking-[0.18em]">
              Clarity When It
              <br />
              Matters.
            </h1>

            <p className="mt-6 max-w-2xl text-white/80 text-base md:text-xl leading-relaxed">
              Rugged ISR & thermal relay systems designed for rapid integration,
              reliable video paths, and operator-controlled workflows.
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

            <p className="mt-6 text-white/55 text-sm">
              Engineering-first. Validation-driven. No hype.
            </p>
          </div>
        </section>

        {/* BRAND PANEL */}
        <section className="vx-container py-14 md:py-18">
          <div className="vx-card overflow-hidden">
            <img
              src="/images/vigilux-clarity.png"
              alt="Vigilux branding"
              className="w-full h-auto"
            />
          </div>
        </section>

        {/* WHY VIGILUX */}
        <section className="vx-container pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="vx-card p-6">
              <div className="text-sm uppercase tracking-[0.18em] text-white/80">
                Tested Architecture
              </div>
              <p className="mt-3 text-white/70">
                Measured validation plan with repeatable demos and documented results.
              </p>
            </div>

            <div className="vx-card p-6">
              <div className="text-sm uppercase tracking-[0.18em] text-white/80">
                Rapid Integration
              </div>
              <p className="mt-3 text-white/70">
                Designed for low-friction installs with standardized interfaces.
              </p>
            </div>

            <div className="vx-card p-6">
              <div className="text-sm uppercase tracking-[0.18em] text-white/80">
                Practical Video Paths
              </div>
              <p className="mt-3 text-white/70">
                CVBS baseline for broad compatibility. IP path as an option where needed.
              </p>
            </div>

            <div className="vx-card p-6">
              <div className="text-sm uppercase tracking-[0.18em] text-white/80">
                Production Credibility
              </div>
              <p className="mt-3 text-white/70">
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
              <img
                src="/images/ai-preview.png"
                alt="AI preview"
                className="w-full h-auto"
              />
              <div className="p-6">
                <div className="text-sm uppercase tracking-[0.18em] text-white/80">
                  Preview Module
                </div>
                <p className="mt-3 text-white/70">
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
                <p className="mt-3 text-white/70">
                  Viewing + recording workflow designed for repeatable demo readiness.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* REQUEST DEMO — CLEAN BACKGROUND (NO GHOST TEXT) */}
        <section className="vx-container pb-24">
          <div className="vx-card p-10 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-black via-black/90 to-black" />

            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-heading uppercase tracking-[0.14em]">
                Request a Demo
              </h2>
              <p className="mt-3 text-white/75 max-w-2xl">
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
