// pages/products.jsx

import Head from 'next/head';

export default function Products() {
  return (
    <>
      <Head>
        <title>Products | Vigilux</title>
        <meta name="description" content="Vigilux products—The Phoenix is coming soon." />
      </Head>

      <main className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-4">Our Upcoming Product</h1>
        <p className="text-lg mb-6">
          The <strong>Phoenix</strong> is coming soon. Stay tuned for our tactical drone thermal relay—no wires, no hacks, just pure thermal streaming to your chest rig.
        </p>
        <p className="text-gray-600">
          We’re hard at work finalizing everything. If you’d like to be among the first to know when the Phoenix drops, visit our <a href="/" className="text-brand hover:underline">Home</a> page and join the waitlist.
        </p>
      </main>
    </>
  );
}
