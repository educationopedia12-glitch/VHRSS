import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative h-screen flex items-center mt-16 overflow-hidden"
      style={{
        backgroundImage:
          "url('/images/Firefly.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Stronger dark overlay for much better text visibility */}
      {/* <div className="absolute inset-0 bg-black/10"></div> */}

      {/* Additional gradient overlay for depth and focus on center */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/60"></div> */}

      {/* Subtle warm spiritual glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-transparent to-amber-500/10"></div>

      {/* Decorative subtle pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#f59e0b_0.8px,transparent_1px)] bg-[length:40px_40px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full">
        <div className="max-w-4xl">
          {/* Bilingual top tag */}
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-orange-600 to-orange-600"></div>
            <p className="uppercase tracking-[6px] text-orange-600 text-xl font-bold drop-shadow-lg">
              सनातन धर्म • Sanatan Dharma
            </p>
            <div className="h-px w-12 bg-gradient-to-r from-orange-600 to-transparent"></div>
          </div>

          {/* Main Heading - Enhanced visibility with text shadow */}
          <h1
            className="text-6xl lg:text-[5.5rem] xl:text-[80px] font-serif font-bold leading-[1.05] text-orange-600 tracking-tighter mb-6"
            style={{
              textShadow: `
      1px 1px 0 #000,
      2px 2px 0 #000,
      3px 3px 0 #000,
      4px 4px 8px rgba(0,0,0,0.7)
    `,
            }}
          >
            विश्व हिन्दू राष्ट्र सेवा संगठन
            <br />
          </h1>

          {/* Bilingual Subheadline - Stronger contrast */}
          <div className="max-w-2xl space-y-4">
            <p className="text-xl lg:text-4xl leading-relaxed text-white font-semibold drop-shadow-xl">
              सनातन धर्म की अमर ज्योति को विश्व भर में प्रज्वलित करना
            </p>
            <p className="text-lg leading-8 text-gray-100 font-bold drop-shadow-lg">
              Dedicated to preserving the eternal wisdom of Sanatan Dharma,
              protecting our civilizational heritage, and fostering unity,
              spirituality, and service across the world.
            </p>
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="mt-12 flex flex-wrap gap-5">
            <Link
              href="/contact"
              className="group relative bg-orange-600 hover:bg-orange-700 active:scale-[0.97] transition-all duration-300 px-10 py-5 text-white font-semibold text-lg rounded-xl overflow-hidden shadow-2xl shadow-orange-600/50"
            >
              <span className="relative z-10 flex items-center gap-3">
                Join the Movement
                <span className="text-xl group-hover:rotate-12 transition">→</span>
              </span>
            </Link>

            <Link
              href="/about"
              className="group border-2 border-white/90 hover:border-white text-white hover:bg-white hover:text-black transition-all duration-300 px-10 py-5 text-lg font-semibold rounded-xl backdrop-blur-md shadow-xl"
            >
              Explore Our Vision
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
}