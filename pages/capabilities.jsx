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
          content="Investor and government-facing capability overview for Vigilux Phoenix Overwatch."
        />
      </Head>

      <main className="bg-black text-white">
        {/* HERO */}
        <section className="relative overflow-hidden">
          <img
            src="/images/hero.jpg"
            alt="Capabilities"
            className="absolute inset-0 w-full h-full object-cover brightness-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/88 via-black/60 to-black/95" />

          <div className="relative z-10 vx-container pt-20 pb-16">
            <h1 className="font-heading text-4xl md:text-6xl uppercase tracking-[0.18em]">
              Capabilities
            </h1>
            <p className="mt-5 max-w-3xl text-white/80 text-lg md:text-xl">
              A disciplined, validation-driven approach to thermal relay payloads for small UAS.
              Built for integration, repeatable demo performance, and production credibility.
            </p>

            <div className="mt-10 flex gap-4 flex-wrap">
              <Link href="/brief" className="vx-btn vx-btn-primary">Capability Brief</Link>
              <Link href="/phoenix" className="vx-btn">Phoenix Page</Link>
              <Link href="/contact" className="vx-btn">Contact</Link>
            </div>
          </div>
        </section>

        {/* BODY */}
        <section className="vx-container py-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <h2 className="text-2xl md:text-3xl font-heading uppercase tracking-[0.14em]">
                System Overview
              </h2>
              <p className="mt-4 vx-muted">
                Phoenix Overwatch is a low-SWaP thermal relay payload intended for small UAS integration with
                an operator-centered ground workflow. The design emphasizes reliability, measured performance,
                and a clear documentation trail (BOM control, acceptance testing, traceability).
              </p>

              <h3 className="mt-10 text-xl font-heading uppercase tracking-[0.14em]">
                Video Paths
              </h3>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="vx-card p-6">
                  <div className="text-sm uppercase tracking-[0.18em] text-white/80">Baseline</div>
                  <p className="mt-3 text-white/80">
                    Analog CVBS for broad compatibility with FPV receivers, monitors, goggles, and DVRs.
                  </p>
                </div>
                <div className="vx-card p-6">
                  <div className="text-sm uppercase tracking-[0.18em] text-white/80">Optional</div>
                  <p className="mt-3 text-white/80">
                    Digital IP path (H.264/H.265) intended for RTSP/WebRTC workflows where appropriate.
                  </p>
                </div>
              </div>

              <h3 className="mt-10 text-xl font-heading uppercase tracking-[0.14em]">
                Validation Plan (Measured)
              </h3>
              <div className="mt-4 vx-card p-6">
                <ul className="space-y-2 text-white/80">
                  <li>• Range testing with repeatable route + environmental notes</li>
                  <li>• Dropout rate and reacquisition time measurement</li>
                  <li>• Latency and bitrate characterization (per video path)</li>
                  <li>• Power stability testing (brownout, transient, reverse polarity protection)</li>
                  <li>• Acceptance checklist per unit (functional, video, thermal check, link check)</li>
                </ul>
              </div>

              <h3 className="mt-10 text-xl font-heading uppercase tracking-[0.14em]">
                Security Posture (Phased)
              </h3>
              <div className="mt-4 vx-card p-6">
                <p className="text-white/80">
                  v1 baseline hardening with transport-layer encryption options for IP paths (when used).
                  v2 Secure/Enterprise integrates validated/customer radios and documented key handling workflows.
                </p>
              </div>

              <h3 className="mt-10 text-xl font-heading uppercase tracking-[0.14em]">
                AI-Enhanced Capabilities (Preview)
              </h3>
              <p className="mt-4 vx-muted">
                Optional operator-assisted analytics under development. Released only after validation.
              </p>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="vx-card overflow-hidden">
                  <img src="/images/ai-preview.png" alt="AI preview" className="w-full h-auto" />
                  <div className="p-6">
                    <div className="text-sm uppercase tracking-[0.18em] text-white/80">Supervised Tracking</div>
                    <p className="mt-3 text-white/80">
                      Operator-assisted stabilization and tracking support for supervised workflows.
                    </p>
                  </div>
                </div>
                <div className="vx-card overflow-hidden">
                  <img src="/images/thermal-preview.png" alt="Thermal preview" className="w-full h-auto" />
                  <div className="p-6">
                    <div className="text-sm uppercase tracking-[0.18em] text-white/80">Thermal Workflow</div>
                    <p className="mt-3 text-white/80">
                      Viewing + recording pipeline designed for repeatable demo readiness.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <aside className="lg:col-span-1">
              <div className="vx-card p-6">
                <div className="text-sm uppercase tracking-[0.18em] text-white/80">Quick Facts</div>
                <ul className="mt-4 space-y-2 text-white/80">
                  <li>• Low-SWaP payload concept for small UAS</li>
                  <li>• CVBS baseline for broad compatibility</li>
                  <li>• Optional IP path for modern workflows</li>
                  <li>• Documentation and acceptance testing focus</li>
                </ul>
              </div>

              <div className="vx-card p-6 mt-6">
                <div className="text-sm uppercase tracking-[0.18em] text-white/80">Next Step</div>
                <p className="mt-4 text-white/80">
                  Request the capability brief and schedule a technical demo discussion.
                </p>
                <div className="mt-6 flex flex-col gap-3">
                  <Link href="/brief" className="vx-btn vx-btn-primary">Capability Brief</Link>
                  <Link href="/contact" className="vx-btn">Contact</Link>
                </div>
              </div>
            </aside>
          </div>
        </section>
      </main>
    </>
  );
}
