import Image from "next/image";

const images = [
  "/images/shoot/about4.jpeg",
  "/images/shoot/about5.jpeg",
  "/images/shoot/about6.jpeg",
  "/images/shoot/about7.jpeg",
];

export default function ImagesGallery() {
  return (
    <section className="bg-[#fff8e8] py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-3">
            <div className="w-14 h-px bg-[#d8a33d]" />
            <span className="uppercase tracking-[4px] text-[11px] text-[#b98b35]">
              Gallery
            </span>
            <div className="w-14 h-px bg-[#d8a33d]" />
          </div>

          <h2 className="font-serif text-5xl text-[#2b1600] mb-4">
            पवित्र पल
          </h2>

          <p className="max-w-xl mx-auto italic text-[#8d6525]">
            हमारी आध्यात्मिक यात्राओं, मंदिरों की यात्राओं और भक्तिपूर्ण सभाओं की झलकियाँ।
          </p>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative h-[420px] overflow-hidden rounded-sm cursor-pointer"
            >
              <Image
                src={image}
                alt={`Gallery ${index + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw,
                       (max-width: 1024px) 50vw,
                       25vw"
                priority={index < 2}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/10 transition-all duration-500 group-hover:bg-black/30" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}