// components/Layout.jsx
import Link from "next/link";
import { useRouter } from "next/router";

function NavLink({ href, children }) {
  const router = useRouter();
  const active = router.pathname === href;

  return (
    <Link
      href={href}
      className={[
        "uppercase tracking-[0.18em] transition",
        "text-sm md:text-base",
        active ? "text-white" : "text-white/70 hover:text-white",
      ].join(" ")}
    >
      {children}
    </Link>
  );
}

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* NAV */}
      <header className="sticky top-0 z-50 bg-black/85 backdrop-blur border-b border-white/10">
        <div className="vx-container">
          <div className="flex h-16 md:h-20 items-center justify-between gap-6">
            {/* LEFT: logo + tagline */}
            <Link href="/" className="flex items-center gap-8 shrink-0">
              {/* LOGO ONLY: scaled + nudged left */}
              <img
                src="/images/vigilux-logo-gray.png"
                alt="Vigilux"
                className={[
                  "h-9 md:h-11 w-auto",
                  "origin-left",
                  "scale-[1.75] md:scale-[2.05]",
                  "transform -translate-x-4",
                ].join(" ")}
              />

              {/* Tagline unchanged */}
              <span className="font-heading text-sm md:text-base tracking-tactical uppercase text-white/80 hidden lg:inline pl-2">
                The Light That Never Sleeps
              </span>
            </Link>

            {/* RIGHT: links + CTA */}
            <nav className="flex items-center gap-5 md:gap-7">
              <NavLink href="/phoenix">Phoenix</NavLink>
              <NavLink href="/capabilities">Capabilities</NavLink>
              <NavLink href="/about">About</NavLink>
              <NavLink href="/contact">Contact</NavLink>

              <Link
                href="/brief"
                className="vx-btn vx-btn-primary text-sm md:text-base px-4 md:px-5 py-2.5 md:py-3 whitespace-nowrap"
              >
                Capability Brief
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* CONTENT */}
      <div className="flex-1">{children}</div>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-black">
        <div className="vx-container py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div>
              <img
                src="/images/vigilux-logo-gray.png"
                alt="Vigilux"
                className="h-10 md:h-12 w-auto opacity-90"
              />

              <p className="mt-4 vx-muted max-w-xl lg:max-w-2xl [text-wrap:pretty]">
                Rugged ISR &amp; thermal relay systems engineered for clarity
                when it matters.
              </p>
            </div>

            <div>
              <div className="text-sm uppercase tracking-[0.18em] text-white/80">
                Navigation
              </div>
              <div className="mt-4 flex flex-col gap-3 text-white/70">
                <Link href="/phoenix" className="hover:text-white">
                  Phoenix Overwatch
                </Link>
                <Link href="/capabilities" className="hover:text-white">
                  Capabilities
                </Link>
                <Link href="/brief" className="hover:text-white">
                  Capability Brief
                </Link>
                <Link href="/contact" className="hover:text-white">
                  Contact
                </Link>
              </div>
            </div>

            <div>
              <div className="text-sm uppercase tracking-[0.18em] text-white/80">
                Contact
              </div>
              <p className="mt-4 text-white/70">
                Email:{" "}
                <a
                  className="text-brand hover:underline"
                  href="mailto:aydenashwill@vigilux.co"
                >
                  aydenashwill@vigilux.co
                </a>
              </p>
              <p className="mt-2 text-white/70">
                Demo Requests:{" "}
                <Link className="text-brand hover:underline" href="/contact">
                  Request Access
                </Link>
              </p>
            </div>
          </div>

          <hr className="vx-hr mt-10 mb-6" />

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-xs text-white/55">
            <div>© {new Date().getFullYear()} Vigilux. All rights reserved.</div>
            <div>
              Developmental information only. Specifications subject to change.
              Unclassified marketing content.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
