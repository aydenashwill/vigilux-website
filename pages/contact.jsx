// pages/contact.jsx
import Head from "next/head";

const EMAIL_PRESIDENT = "aydenashwill@vigilux.co";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact | Vigilux</title>
        <meta
          name="description"
          content="Contact Vigilux for technical evaluation, demo coordination, partnerships, and procurement inquiries."
        />
      </Head>

      <main className="bg-black text-white">
        {/* HERO (match About system) */}
        <section className="relative isolate overflow-hidden">
          <div className="absolute inset-0 -z-10">
            {/* Optional hero image. If you add /public/images/contact-hero.png, it will display. */}
            <div
              className="h-full w-full bg-cover bg-center"
              style={{ backgroundImage: "url('/images/contact-hero.png')" }}
            />
            {/* If the image doesn't exist, the background will just be blank; the overlays still look clean. */}
            <div className="absolute inset-0 bg-black/60" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/15 to-black/70" />

            {/* Fallback gradient base (keeps it looking good even without an image) */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black via-black/90 to-black" />
          </div>

          <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
            <p className="text-sm tracking-[0.2em] uppercase text-white/80">
              Contact
            </p>

            <h1 className="mt-4 max-w-5xl text-4xl font-semibold tracking-tight sm:text-5xl [text-wrap:balance]">
              Contact Vigilux
            </h1>

            <p className="mt-5 max-w-3xl lg:max-w-4xl text-base leading-relaxed text-white/85 sm:text-lg [text-wrap:pretty]">
              For engineering and technical evaluation discussions, contact the President directly.
              For demo coordination, partnerships, and procurement-related inquiries, use the
              general contact route below.
            </p>
          </div>
        </section>

        {/* CONTACT ROUTING */}
        <section className="vx-container py-16 sm:py-20">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* TECH DISCUSSION */}
            <article className="vx-card p-6">
              <div className="text-sm uppercase tracking-[0.18em] text-white/70">
                Technical Evaluation
              </div>

              <p className="mt-3 text-white/80 leading-relaxed">
                System architecture, integration constraints, validation approach, and technical alignment.
              </p>

              <a
                className="mt-4 inline-block text-lg text-white hover:underline"
                href={`mailto:${EMAIL_PRESIDENT}?subject=${encodeURIComponent(
                  "Vigilux — Technical Evaluation"
                )}`}
              >
                {EMAIL_PRESIDENT}
              </a>
            </article>

            {/* DEMO / PROCUREMENT */}
            <article className="vx-card p-6">
              <div className="text-sm uppercase tracking-[0.18em] text-white/70">
                Demos, Partnerships &amp; Procurement
              </div>

              <p className="mt-3 text-white/80 leading-relaxed">
                Demo scheduling, partnerships, procurement inquiries, and general contact.
              </p>

              <a
                className="mt-4 inline-block text-lg text-white hover:underline"
                href={`mailto:${EMAIL_PRESIDENT}?subject=${encodeURIComponent(
                  "Vigilux — Demos / Partnerships / Procurement"
                )}`}
              >
                {EMAIL_PRESIDENT}
              </a>
            </article>
          </div>

          {/* OPTIONAL: guidance block (no extra CTAs) */}
          <div className="mt-10 vx-card p-6">
            <div className="text-sm uppercase tracking-[0.18em] text-white/70">
              What to include
            </div>
            <ul className="mt-4 space-y-3 text-white/80">
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/70" />
                <span>Your organization and intended use case</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/70" />
                <span>Platform details (UAS type, mounting constraints, power)</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/70" />
                <span>Desired video path (CVBS baseline vs IP)</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/70" />
                <span>Timeline and evaluation goals</span>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}
