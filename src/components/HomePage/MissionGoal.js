import Image from "next/image";

const cards = [
  {
    image: "/images/shoot/mission1.jpeg",
    label: "हमारा विशेष कार्य",
    title: "धर्म की शाश्वत ज्योति को अक्षुण्ण रखना",
    description:
      "हमारा मकसद सनातन धर्म को बचाना और उसे बढ़ावा देना है, साथ ही लोगों को सच्चाई, दया, अनुशासन और भक्ति से भरा जीवन जीने के लिए प्रेरित करना है। धार्मिक शिक्षा, आध्यात्मिक मार्गदर्शन, सांस्कृतिक संरक्षण और समाज सेवा के ज़रिए हम उन मूल्यों को मज़बूत करते हैं जिन्होंने हज़ारों सालों से भारतीय सभ्यता को आकार दिया है।",
  },
  {
    image: "/images/shoot/mission2.jpeg",
    label: "हमारा नज़रिया",
    title: "आध्यात्मिक रूप से जागृत, सामंजस्यपूर्ण समाज",
    description:
      "हमारा विज़न एक ऐसे आध्यात्मिक रूप से जागृत समाज का निर्माण करना है, जहाँ सनातन धर्म के शाश्वत सिद्धांत लोगों को शांति, सद्भाव और निस्वार्थ सेवा की ओर प्रेरित करें। हम ऐसे समुदायों की कल्पना करते हैं जो आस्था, परंपराओं के प्रति सम्मान और समाज कल्याण के प्रति समर्पण से एकजुट हों—ताकि भारत की सांस्कृतिक और आध्यात्मिक विरासत पीढ़ियों तक फलती-फूलती रहे।",
  },
];

export default function MissionGoal() {
  return (
    <section className="bg-[#fdf7eb] py-28">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-4 text-[#c58a2b] uppercase tracking-[0.35em] text-xs">
            <span className="w-10 h-px bg-[#c58a2b]" />
            Our Purpose
            <span className="w-10 h-px bg-[#c58a2b]" />
          </div>

          <h2 className="mt-5 text-5xl font-serif text-[#24160f]">
           मिशन और विज़न
          </h2>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-2 gap-8">
          {cards.map((card) => (
            <div
              key={card.label}
              className="bg-white border border-[#e7d6b0] overflow-hidden hover:shadow-xl transition duration-300"
            >
              <div className="relative h-64">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-8">
                <p className="uppercase tracking-[0.35em] text-xs text-[#d77a21] mb-4">
                  {card.label}
                </p>

                <h3 className="font-serif text-3xl text-[#24160f] mb-6">
                  {card.title}
                </h3>

                <p className="text-[#6b5138] leading-8">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}