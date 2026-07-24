import Link from "next/link";

export default function Join() {
  return (
    <section
      className="relative py-32 bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/join-bg.avif')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#2d1b12]/75"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">

        {/* Om */}
        <div className="text-6xl text-[#d89b1d] mb-6">
          ॐ
        </div>

        {/* Heading */}
        <h2 className="font-serif text-5xl md:text-6xl text-white">
          हमारे आध्यात्मिक समुदाय से जुड़ें
        </h2>

        {/* Description */}
        <p className="mt-6 text-[#e4c189] text-lg leading-8 max-w-3xl mx-auto">
          चाहे आप हमारे धार्मिक कार्यक्रमों में शामिल होना चाहें, समाज सेवा के लिए स्वयंसेवा करना चाहें या आध्यात्मिक मार्गदर्शन पाना चाहें — हम खुले दिल से आपका स्वागत करते हैं।
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-5">

          <Link
            href="/contact"
            className="bg-[#ef6c00] text-white uppercase tracking-[0.2em] font-semibold px-10 py-4 hover:bg-[#d95f00] transition"
          >
            Join Us
          </Link>

          <Link
            href="/contact"
            className="border border-[#b57a25] text-[#d89b1d] uppercase tracking-[0.2em] font-semibold px-10 py-4 hover:bg-[#b57a25] hover:text-white transition"
          >
            Contact Us
          </Link>

        </div>

      </div>
    </section>
  );
}