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
        "text-sm uppercase tracking-[0.18em] transition",
        active ? "text-white" : "text-white/70 hover:text-white"
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
        <div className="vx-container py-4 flex items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-3">
            <img
              src="/images/vigilux-logo-gray.png"
              alt="Vigilux"
              className="h-8 w-auto"
            />
            <span className="font-heading text-sm tracking-tactical uppercase text-white/80 hidden sm:inline">
              The Light That Never Sleeps
            </span>
          </Link>

          <nav className="flex items-center gap-5">
            <NavLink href="/phoenix">Phoenix</NavLink>
            <NavLink href="/capabilities">Capabilities</NavLink>
            <NavLink href="/products">Products</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/contact">Contact</NavLink>
            <Link href="/brief" className="vx-btn vx-btn-primary text-sm">
              Capability Brief
            </Link>
          </nav>
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
                className="h-10 w-auto opacity-90"
              />
              <p className="mt-4 vx-muted max-w-sm">
                Rugged ISR & thermal relay systems engineered for clarity when it matters.
              </p>
            </div>

            <div>
              <div className="text-sm uppercase tracking-[0.18em] text-white/80">
                Navigation
              </div>
              <div className="mt-4 flex flex-col gap-3 text-white/70">
                <Link href="/phoenix" className="hover:text-white">Phoenix Overwatch</Link>
                <Link href="/capabilities" className="hover:text-white">Capabilities</Link>
                <Link href="/brief" className="hover:text-white">Capability Brief</Link>
                <Link href="/contact" className="hover:text-white">Contact</Link>
              </div>
            </div>

            <div>
              <div className="text-sm uppercase tracking-[0.18em] text-white/80">
                Contact
              </div>
              <p className="mt-4 text-white/70">
                Email:{" "}
                <a className="text-brand hover:underline" href="mailto:ayden.ashwill@vigilux.co">
                  ayden.ashwill@vigilux.co
                </a>
              </p>
              <p className="mt-2 text-white/70">
                Demo Requests: <Link className="text-brand hover:underline" href="/contact">Request Access</Link>
              </p>
            </div>
          </div>

          <hr className="vx-hr mt-10 mb-6" />

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-xs text-white/55">
            <div>© {new Date().getFullYear()} Vigilux. All rights reserved.</div>
            <div>
              Developmental information only. Specifications subject to change. Unclassified marketing content.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
