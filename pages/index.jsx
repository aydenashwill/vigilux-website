// pages/index.jsx

export default function Home() {
  return (
    <section className="relative h-screen bg-black overflow-hidden">
      {/* Hero image */}
      <img
        src="/images/hero.png"
        alt="Operator with Night Vision"
        className="object-cover w-full h-full brightness-50"
      />

      {/* Gradient overlay for contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80" />

      {/* Centered headline */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h1 className="font-heading text-7xl md:text-8xl text-brand uppercase">
          Vigilux
        </h1>
        <p className="mt-4 font-body text-xl md:text-2xl text-gray-200">
          Built for Those Who Endure.
        </p>
        {/* Preorder Now button removed */}
      </div>
    </section>
  );
}

