// pages/brief.jsx
import Head from "next/head";

export default function Brief() {
  return (
    <>
      <Head>
        <title>Capability Brief | Vigilux</title>
        <meta
          name="description"
          content="Download the Vigilux Phoenix Overwatch capability brief PDF."
        />
      </Head>

      <main className="bg-black text-white">
        <section className="vx-container py-16">
          <h1 className="font-heading text-4xl md:text-5xl uppercase tracking-[0.18em]">
            Capability Brief
          </h1>

          <p className="mt-4 vx-muted max-w-3xl">
            Download the current Phoenix Overwatch capability brief (PDF). This document is generated live
            from your website (always up to date with the codebase).
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a className="vx-btn vx-btn-primary" href="/api/brief" target="_blank" rel="noopener noreferrer">
              Download PDF
            </a>
            <a className="vx-btn" href="/api/brief" target="_blank" rel="noopener noreferrer">
              Open in New Tab
            </a>
          </div>

          <div className="mt-10 vx-card overflow-hidden">
            <iframe
              title="Vigilux Capability Brief"
              src="/api/brief"
              className="w-full"
              style={{ height: "80vh", border: "0" }}
            />
          </div>

          <p className="mt-6 text-xs text-white/55">
            Developmental system. Specifications and capabilities may change as validation progresses.
          </p>
        </section>
      </main>
    </>
  );
}
