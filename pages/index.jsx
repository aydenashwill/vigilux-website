// pages/index.jsx
export default function Home() {
  return (
    <section className="relative h-screen bg-black overflow-hidden">
      {/* Brighter hero image */}
      <img
        src="/images/hero.png"
        alt="Operator with Night Vision"
        className="object-cover w-full h-full brightness-90"
      />

      {/* Softer gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60" />

      {/* Centered copy */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        {/* Greyscale background behind heading */}
        <h1 className="relative font-heading text-7xl md:text-8xl text-brand uppercase">
          <span className="relative z-10">Vigilux</span>
          <span className="absolute inset-0 bg-gray-700 opacity-50 -z-10"></span>
        </h1>
        <p className="mt-4 font-body text-xl md:text-2xl text-gray-200">
          Built for Those Who Endure.
        </p>
        <a
          href="/preorders"
          className="mt-8 inline-block px-10 py-4 border-2 border-white text-white font-semibold uppercase tracking-wider hover:bg-white hover:text-black transition"
        >
          Preorder Now
        </a>
      </div>
    </section>
  );
}
