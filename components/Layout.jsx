import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <>
      <header className="bg-black p-4">
        <nav className="container mx-auto flex space-x-6">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/products">Products</Link>
          <Link href="/preorders">Preorders</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </header>
      <main>{children}</main>
      <footer className="bg-gray-900 p-4 text-center text-sm">
        &copy; {new Date().getFullYear()} Vigilux. All rights reserved.
      </footer>
    </>
  );
}
