import React from "react";

const cards = [
  {
    title: "पावन पाठ (कथा)",
    items: [
      "श्री रामायण पाठ",
      "सुन्दरकाण्ड पाठ",
      "श्रीमद्भागवत कथा",
      "शिव पुराण कथा",
      "दुर्गा सप्तशती पाठ",
      "हनुमान चालीसा पाठ",
      "विष्णु सहस्रनाम",
      "अन्य वैदिक पाठ",
    ],
  },
  {
    title: "प्रवचन विषय",
    items: [
      "श्रीमद्भगवद्गीता",
      "रामायण",
      "महाभारत",
      "पुराण एवं उपनिषद",
      "हिन्दू दर्शन",
      "धर्म एवं नैतिकता",
      "आध्यात्मिक जीवनशैली",
      "पारिवारिक संस्कार",
    ],
  },
  {
    title: "धार्मिक यात्राएँ",
    items: [
      "काशी विश्वनाथ",
      "अयोध्या धाम",
      "मथुरा एवं वृन्दावन",
      "हरिद्वार",
      "ऋषिकेश",
      "केदारनाथ",
      "बद्रीनाथ",
      "सोमनाथ",
      "महाकालेश्वर",
      "वैष्णो देवी",
      "जगन्नाथ पुरी",
      "रामेश्वरम्",
    ],
  },
  {
    title: "मनाए जाने वाले पर्व",
    items: [
      "राम नवमी",
      "श्रीकृष्ण जन्माष्टमी",
      "नवरात्रि",
      "दीपावली",
      "होली",
      "हनुमान जयंती",
      "महाशिवरात्रि",
      "गणेश चतुर्थी",
      "मकर संक्रांति",
      "गुरु पूर्णिमा",
    ],
  },
];

const programs = [
  "धार्मिक सभाएँ",
  "श्रीमद्भागवत कथा",
  "हनुमान चालीसा पाठ",
  "धार्मिक उत्सव",
  "युवा जागरूकता कार्यक्रम",
  "आध्यात्मिक प्रवचन",
  "सुन्दरकाण्ड पाठ",
  "भजन संध्या",
  "आध्यात्मिक कार्यशालाएँ",
  "सांस्कृतिक कार्यक्रम",
  "श्री रामायण पाठ",
  "शिव पुराण कथा",
  "मंदिर आयोजन",
  "धार्मिक यात्राएँ",
  "सामुदायिक सेवा",
];

const Card = ({ title, items, className = "" }) => (
  <div
    className={`relative bg-white border border-[#ecd8b0] p-6 ${className}`}
  >
    <span className="absolute top-3 right-4 text-5xl text-[#f3e7c8]">
      ॐ
    </span>

    <h3 className="font-serif text-lg font-semibold text-[#3d2400] mb-4">
      {title}
    </h3>

    <ul className="space-y-2 text-[14px] text-[#8a5b14]">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2">
          <span>•</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

const WhatWeDo = () => {
  return (
    <section className="bg-[#fff8e8] py-20 min-h-[40vh]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <div className="flex justify-center items-center gap-4 mb-3">
            <div className="w-16 h-px bg-[#d8a33d]" />
            <span className="uppercase tracking-[4px] text-[11px] text-[#b98b35]">
              Programs and Services
            </span>
            <div className="w-16 h-px bg-[#d8a33d]" />
          </div>

          <h2 className="font-serif text-5xl text-[#2b1600]">
            हम क्या करते हैं
          </h2>

          <p className="italic text-[#8d6525] max-w-xl mx-auto mt-4">
            सनातन धर्म की परंपराओं पर आधारित आध्यात्मिक, सांस्कृतिक एवं
            सामाजिक कार्यक्रमों की विस्तृत श्रृंखला।
          </p>
        </div>

        {/* Top Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {cards.slice(0, 3).map((card) => (
            <Card key={card.title} {...card} />
          ))}
        </div>

        {/* Bottom */}
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <Card {...cards[3]} />

          <div className="relative md:col-span-2 bg-white border border-[#ecd8b0] p-6">
            <span className="absolute top-3 right-4 text-5xl text-[#f3e7c8]">
              ॐ
            </span>

            <h3 className="font-serif text-lg font-semibold text-[#3d2400] mb-4">
              हमारे सभी कार्यक्रम
            </h3>

            <div className="grid md:grid-cols-3 gap-x-10 gap-y-2 text-[14px] text-[#8a5b14]">
              {programs.map((item) => (
                <div key={item} className="flex gap-2">
                  <span>•</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;