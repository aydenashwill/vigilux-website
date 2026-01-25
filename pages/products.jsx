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
        {/* Match hero H1 style exactly */}
        <h1 className="mt-4 max-w-5xl text-4xl font-semibold tracking-tight sm:text-5xl [text-wrap:balance] mb-10">
          Product Portfolio
        </h1>

        {/* CENTER THE WHOLE BLOCK + NUDGE RIGHT ON DESKTOP */}
        <div className="flex justify-center">
          <div className="lg:pl-10">
            <div className="flex flex-col lg:flex-row gap-12 items-start">
              {/* LEFT: PRODUCT CARD */}
              <div className="border border-white/10 bg-white/5 w-[360px]">
                <div className="h-[360px] sm:h-[420px] lg:h-[480px] flex items-center justify-center">
                  <img
                    src="/images/products/phoenix-overwatch.png"
                    alt="Phoenix Overwatch payload"
                    className="h-full w-auto object-contain"
                  />
                </div>

                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2">Phoenix Overwatch</h2>

                  <p className="text-sm text-gray-200 mb-4 leading-relaxed">
                    Low-SWaP thermal relay payload for small UAS. Analog CVBS baseline with optional
                    IP output.
                  </p>

                  <div className="flex gap-3">
                    <a
                      href="/phoenix"
                      className="px-3 py-1.5 text-sm border border-white/25 hover:border-white/60 transition"
                    >
                      View Phoenix
                    </a>
                    <a
                      href="/contact"
                      className="px-3 py-1.5 text-sm bg-orange-500 text-black font-semibold hover:bg-orange-400 transition"
                    >
                      Request Demo
                    </a>
                  </div>
                </div>
              </div>

              {/* RIGHT: IMAGE ROW */}
              <div className="flex gap-6 h-[480px] sm:h-[560px] lg:h-[640px] items-center">
                <img
                  src="/images/visuals/vigilux-graphic.png"
                  alt="Vigilux system graphic"
                  className="h-full w-auto object-contain"
                />

                <img
                  src="/images/visuals/phoenix-products-hero.png"
                  alt="Phoenix product hero"
                  className="h-full w-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

