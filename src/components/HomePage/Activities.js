import Image from "next/image";

const activities = [
    {
        image: "/images/activities/sabha.avif",
        title: "धार्मिक सभा",
        description:
            "भक्त आध्यात्मिक चर्चाओं, भजनों, भक्ति-गीतों और धार्मिक मार्गदर्शन के लिए इकट्ठा होते हैं, जिससे समुदाय के आपसी संबंध मजबूत होते हैं।",
    },
    {
        image: "/images/activities/katha.avif",
        title: "पवित्र मार्ग (कथा)",
        description:
            "श्री रामायण, सुंदरकांड, भागवत, शिव पुराण, दुर्गा सप्तशती, हनुमान चालीसा और विष्णु सहस्रनाम का पवित्र पाठ।",
    },
    {
        image: "/images/activities/pravachan.jfif",
        title: "प्रवचन",
        description:
            "सम्मानित संतों और विद्वानों द्वारा भगवद्गीता, रामायण, उपनिषदों, धर्म और हिंदू दर्शन पर आध्यात्मिक प्रवचन।",
    },
    {
        image: "/images/activities/yatra.avif",
        title: "धार्मिक यात्रा",
        description:
            "काशी विश्वनाथ, अयोध्या, मथुरा, वृंदावन, केदारनाथ, बद्रीनाथ और अन्य पवित्र स्थलों की तीर्थयात्रा।",
    },
    {
        image: "/images/activities/bhajan.avif",
        title: "भजन संध्या",
        description:
            "भक्ति संगीत, भजनों और कीर्तनों से भरी शामें, जो आस्था और आध्यात्मिक जुड़ाव को प्रेरित करती हैं।",
    },
    {
        image: "/images/activities/seva.avif",
        title: "त्योहार और सेवा",
        description:
            "हिंदू त्योहारों को ऐसे सामुदायिक सेवा कार्यों के साथ मनाना जो करुणा और सांस्कृतिक एकता को बढ़ावा देते हैं।",
    },
];


export default function Activities() {
    return (
        <section className="py-28 bg-[#fffdf8]">
            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}


  <div className="text-center max-w-3xl mx-auto">

          <div className="flex justify-center items-center gap-4 uppercase tracking-[0.35em] text-xs text-[#c58a2b]">
            <span className="w-10 h-px bg-[#c58a2b]" />
            What We Do
            <span className="w-10 h-px bg-[#c58a2b]" />
          </div>

          <h2 className="mt-5 text-5xl font-extrabold font-serif text-[#24160f]">
            हमारी गतिविधियां
          </h2>

          <p className="mt-5 italic text-[#9b6d39]">
            अलग-अलग कार्यक्रमों और आयोजनों के ज़रिए, हम आध्यात्मिक विकास, सांस्कृतिक संरक्षण और सामुदायिक एकता के रास्ते बनाते हैं।
          </p>

        </div>


                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
                    {activities.map((activity) => (
                        <div
                            key={activity.title}
                            className="bg-[#fffdf8] border border-[#ead9b8] overflow-hidden hover:shadow-xl transition"
                        >
                            <div className="relative h-44">
                                <Image
                                    src={activity.image}
                                    alt={activity.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <div className="p-5">
                                <h3 className="font-serif text-xl text-[#2b1b12] mb-3">
                                    ✦ {activity.title}
                                </h3>

                                <p className="text-[#7b5b37] leading-7 text-sm">
                                    {activity.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}