import Link from "next/link";

export default function HeroAbout() {
  return (
    <section
      className="relative h-[420px] bg-cover bg-center mt-12"
      style={{
        backgroundImage: "url('/images/shoot/about1.jpeg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#2d1b12]/75" />

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#b8860b]" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">

        {/* Om */}
        <div className="text-6xl text-[#d89b1d] mb-5">
          ॐ
        </div>

        {/* Heading */}
        <h1 className="font-serif text-5xl md:text-7xl font-semibold text-white">
          About Us
        </h1>

        {/* Breadcrumb */}
        <div className="mt-6 flex items-center gap-3 text-[#d89b1d] text-lg font-medium">

          <Link
            href="/"
            className="hover:text-white transition"
          >
            Home
          </Link>

          <span>•</span>

          <span className="text-white">
            About Us
          </span>

        </div>

      </div>
    </section>
  );
}