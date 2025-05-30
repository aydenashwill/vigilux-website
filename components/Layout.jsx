// components/Layout.jsx
import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <>
      <header className="bg-muted py-4">
        <nav className="container mx-auto flex items-center space-x-8 font-body text-white">
          {/* Full-color gear-shield logo with blend mode to remove white background */}
          <Link href="/">
            <img
              src="/images/logo-fullcolor.png"
              alt="Vigilux Logo"
              className="h-10 w-auto mix-blend-multiply"
            />
          </Link>
          {/* Navigation tabs in white, red on hover */}
          <Link href="/"         className="hover:text-brand transition">Home</Link>
          <Link href="/about"    className="hover:text-brand transition">About</Link>
          <Link href="/products" className="hover:text-brand transition">Products</Link>
          <Link href="/preorders"className="hover:text-brand transition">Preorders</Link>
          <Link href="/contact"  className="hover:text-brand transition">Contact</Link>
        </nav>
      </header>

      <main>{children}</main>

      <footer className="bg-muted p-4 text-center font-body text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Vigilux. All rights reserved.
      </footer>
    </>
  );
}
