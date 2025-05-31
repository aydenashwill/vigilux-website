// File: pages/index.jsx

import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Vigilux – Coming Soon</title>
        <meta name="description" content="Vigilux is launching soon. Join the waitlist." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
        <div className="text-center px-4">
          {/* Logo (your “hero image”) */}
          <img
            src="/logo.png"
            alt="Vigilux Logo"
            className="mx-auto mb-6 w-32 h-32"
          />

          {/* Headline */}
          <h1 className="text-4xl font-bold mb-4">
            Vigilux is coming soon.
          </h1>
          <p className="mb-8 text-lg">
            Sign up below and we’ll let you know as soon as we launch.
          </p>

          {/* Embedded Google Form */}
          <div className="mx-auto max-w-lg">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLScW3KdR_kCXQRL5WrjGQ5woDmJv1jFmVgNLRAoycApPAOEYEA/viewform?embedded=true"
              width="100%"
              height="800"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
            >
              Loading…
            </iframe>
          </div>
        </div>
      </main>
    </>
  );
}
