// pages/products.jsx

import Head from "next/head";

export default function Products() {
  return (
    <>
      <Head>
        <title>Products | Vigilux</title>
        <meta
          name="description"
          content="Vigilux product portfolio including Phoenix Overwatch thermal relay payload."
        />
      </Head>

      <main className="container mx-auto py-16 px-6 text-white">
        <h1 className="text-4xl font-bold mb-6">Product Portfolio</h1>

        <div className="border border-white/10 bg-white/5 p-6 max-w-3xl">
          <h2 className="text-2xl font-semibold">Phoenix Overwatch</h2>
          <p className="mt-3 text-gray-200">
            Low-SWaP thermal relay payload designed for rapid integration with small UAS platforms.
            Baseline analog CVBS with an evolving digital IP path.
          </p>
          <div className="mt-6 flex gap-4">
            <a
              href="/phoenix"
              className="px-5 py-2 border border-white/25 hover:border-white/60 transition"
            >
              View Phoenix
            </a>
            <a
              href="/contact"
              className="px-5 py-2 bg-orange-500 text-black font-semibold hover:bg-orange-400 transition"
            >
              Request a Demo
            </a>
          </div>
        </div>

        <p className="mt-8 text-sm text-gray-400 max-w-3xl">
          Note: Some capabilities are developmental and subject to change as validation and testing progress.
        </p>
      </main>
    </>
  );
}
