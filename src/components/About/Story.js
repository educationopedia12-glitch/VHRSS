import Image from "next/image";
import Link from "next/link";

export default function Story() {
    return (
        <section className="bg-[#fdf7eb] py-24">
            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <div className="flex items-center justify-center gap-4 text-[#c58a2b] uppercase tracking-[0.35em] text-xs">
                        <span className="w-10 h-px bg-[#c58a2b]" />
                        About Us
                        <span className="w-10 h-px bg-[#c58a2b]" />
                    </div>

                    <h2 className="mt-4 text-5xl font-extrabold font-serif text-[#2b1b12]">
                        हमारी कहानी
                    </h2>

                    <p className="mt-5 italic text-lg text-[#8a5a20]">
                        हिंदू दर्शन के शाश्वत ज्ञान के माध्यम से भारत की आध्यात्मिक और सांस्कृतिक विरासत को संरक्षित करने के लिए प्रतिबद्ध।
                    </p>

                    <div className="w-44 h-px bg-[#d8b06b] mx-auto mt-5"></div>
                </div>

                {/* Content */}
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Text */}
                    <div>

                        <div className="space-y-8 text-lg leading-10 text-[#4d3424]">

                            <p>
                                विश्व हिंदू राष्ट्र की स्थापना लोगों को
                                <span className="font-extrabold">
                                    {" "} सनातन
                                    धर्म
                                </span>
                                {" "} की शाश्वत शिक्षाओं के करीब लाने और भारत की समृद्ध आध्यात्मिक विरासत को संरक्षित करने के उद्देश्य से की गई थी। आज की तेज़ी से बदलती दुनिया में, कई पारंपरिक मूल्य और प्रथाएँ धीरे-धीरे लुप्त होती जा रही हैं।
                            </p>

                            <p>
                                हमारा संगठन सार्थक धार्मिक कार्यक्रमों, शैक्षिक पहलों और सामुदायिक आयोजनों के ज़रिए लोगों को उनकी जड़ों से फिर से जोड़ने का काम करता है, जो हिंदू संस्कृति और दर्शन का जश्न मनाते हैं।
                            </p>

                            <p>
                                धार्मिक सभाओं, आध्यात्मिक प्रवचनों, धर्मग्रंथों के पाठ, भक्तिपूर्ण आयोजनों, तीर्थयात्राओं और सामुदायिक सेवा के माध्यम से हम लोगों को हिंदू सभ्यता की समृद्ध विरासत से जोड़ते हैं।
                            </p>

                        </div>

                        {/* Divider */}
                        <div className="border-t border-[#dcc8a0] my-10"></div>

                    </div>

                    {/* Images */}
                    <div className="grid grid-cols-2 gap-4">

                        <div className="relative h-[520px] hover:scale-[1.05] transition-all duration-300">
                            <Image
                                src="/images/shoot/about2.jpeg"
                                alt="Diyas"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div className="flex flex-col gap-4">

                            <div className="relative h-[250px] hover:scale-[1.05] transition-all duration-300">
                                <Image
                                    src="/images/shoot/about3.jpeg"
                                    alt="Diya Photo"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <div className="relative h-[250px] hover:scale-[1.05] transition-all duration-300">
                                <Image
                                    src="/images/who3.avif"
                                    alt="Mala"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                        </div>

                    </div>



                </div>

            </div>
        </section>
    );
}