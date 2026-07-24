import React from "react";

const values = [
  {
    symbol: "ध",
    title: "धर्म",
    description:
      "जीवन के प्रत्येक कार्य में धर्म, सत्य और सदाचार का पालन करना।",
  },
  {
    symbol: "से",
    title: "सेवा",
    description:
      "करुणा, विनम्रता और समर्पण के साथ मानवता की निस्वार्थ सेवा करना।",
  },
  {
    symbol: "सं",
    title: "संस्कार",
    description:
      "पीढ़ियों से प्राप्त नैतिक, सांस्कृतिक और आध्यात्मिक मूल्यों का संरक्षण एवं संवर्धन करना।",
  },
  {
    symbol: "एक",
    title: "एकता",
    description:
      "आस्था, सद्भाव और पारस्परिक सम्मान के माध्यम से समाज को एक सूत्र में बाँधना।",
  },
  {
    symbol: "रा",
    title: "आध्यात्मिक उन्नति",
    description:
      "आत्मचिंतन, सतत अध्ययन और ईश्वर भक्ति के माध्यम से आध्यात्मिक विकास को प्रेरित करना।",
  },
];

export default function CoreValues() {
  return (
    <section className="bg-[#FFF8E8] py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-10 h-px bg-[#C89B3C]" />
            <span className="uppercase tracking-[6px] text-[12px] text-[#C89B3C]">
              WHAT WE STAND FOR
            </span>
            <div className="w-10 h-px bg-[#C89B3C]" />
          </div>

          <h2 className="font-serif text-5xl md:text-6xl text-[#241000]">
            हमारे मूल मूल्य
          </h2>

          <div className="w-56 h-px bg-[#E4D1A5] mx-auto mt-8"></div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 border border-[#ECD8B0] bg-white">
          {values.map((value, index) => (
            <div
              key={index}
              className={`flex flex-col items-center text-center px-8 py-12 transition-all duration-300 hover:bg-[#FFF9EE]
              ${
                index !== values.length - 1
                  ? "border-b lg:border-b-0 lg:border-r border-[#ECD8B0]"
                  : ""
              }`}
            >
              {/* Sanskrit Box */}
              <div className="w-16 h-16 border border-[#D8A33D] flex items-center justify-center mb-8">
                <span className="text-3xl font-semibold text-[#C98A00]">
                  {value.symbol}
                </span>
              </div>

              <h3 className="font-serif text-2xl text-[#241000] mb-6">
                {value.title}
              </h3>

              <p className="text-[#8B5E1A] leading-9 text-lg">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}