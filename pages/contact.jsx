/// pages/contact.jsx
import Head from "next/head";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact | Vigilux</title>
        <meta name="description" content="Contact Vigilux" />
      </Head>

      <main className="vx-container py-20">
        <h1 className="text-3xl md:text-4xl font-heading uppercase tracking-[0.14em]">
          Contact
        </h1>

        <p className="mt-6 text-white/80 max-w-2xl">
          For demos, technical discussions, partnerships, or procurement inquiries:
        </p>

        <div className="mt-6 vx-card p-6 max-w-2xl">
          <div className="text-sm uppercase tracking-[0.18em] text-white/70">Primary Email</div>
          <a
            className="mt-2 block text-lg text-white hover:underline"
            href="mailto:vigiluxsystems@gmail.com"
          >
            vigiluxsystems@gmail.com
          </a>
        </div>

        <div className="mt-8 vx-card p-6 max-w-2xl">
          <div className="text-sm uppercase tracking-[0.18em] text-white/70">
            Request Form
          </div>
          <p className="mt-3 text-white/80">
            If your current Google Form is tied to an old Workspace account, replace it with a new form
            owned by a Gmail account you control (recommended: the address above).
          </p>

          <p className="mt-4 text-white/70 text-sm">
            Update the form link on this page once your new form is created.
          </p>
        </div>
      </main>
    </>
  );
}

