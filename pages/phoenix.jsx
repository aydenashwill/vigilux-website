// pages/phoenix.jsx
export default function Phoenix() {
  return (
    <div className="min-h-screen relative">
      {/* === BLURRED BACKGROUND === */}
      <div
        className="absolute inset-0 bg-cover bg-center filter blur-sm"
        style={{ backgroundImage: "url('/images/hero.png')" }}
      />
      {/* === OVERLAY === */}
      <div className="relative z-10 flex flex-col justify-center items-center min-h-screen bg-black bg-opacity-75 px-6 text-white">
        
        {/* Logo */}
        <img
          src="/images/logo-fullcolor.png"
          alt="Vigilux Logo"
          className="w-32 mb-6"
        />

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl font-bold text-center">
          THE PHOENIX IS COMING
        </h1>
        <p className="text-lg md:text-xl mt-4 text-center max-w-xl">
          Tactical drone thermal relay. No wires. No hacks. Just thermal—streamed
          to your chest rig.
        </p>
        <p className="mt-8 text-sm text-gray-400 text-center">
          Classified field hardware under stealth development.
        </p>

        {/* Waitlist Form */}
        <form
          action="https://formspree.io/f/YOUR_FORM_ID"   {/* ← Replace with your actual Formspree URL */}
          method="POST"
          className="mt-10 w-full max-w-md"
        >
          <input
            type="email"
            name="email"
            required
            placeholder="Enter your secure email"
            className="w-full px-4 py-2 rounded bg-gray-800 text-white focus:outline-none"
          />
          <button
            type="submit"
            className="mt-4 w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 rounded"
          >
            Join Waitlist
          </button>
        </form>

        {/* Footer Notice */}
        <p className="mt-4 text-xs text-gray-500 text-center">
          Law enforcement, contractors, and field teams only.
        </p>

      </div>
    </div>
  );
}
