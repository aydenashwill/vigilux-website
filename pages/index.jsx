export default function Home() {
  return (
    <section className="relative h-screen bg-black">
      <img
        src="/images/hero.jpg"
        alt="Hero"
        className="object-cover w-full h-full opacity-30"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <h1 className="text-6xl font-bold text-white">VIGILUX</h1>
        <p className="mt-4 text-xl">BUILT FOR THOSE WHO ENDURE.</p>
        <a
          href="/preorders"
          className="mt-8 px-6 py-3 border-2 border-white text-white hover:bg-white hover:text-black transition"
        >
          Preorder Now
        </a>
      </div>
    </section>
  );
}
