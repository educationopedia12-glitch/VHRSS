"use client";

import { useState } from "react";
import Image from "next/image";

export default function Connect() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");

        setForm({
          name: "",
          phone: "",
          email: "",
          message: "",
        });
      } else {
        setStatus(data.message);
      }
    } catch (error) {
      setStatus("Something went wrong.");
    }

    setLoading(false);
  };


  return (
    <section className="bg-[#FFF8E8] min-h-screen mt-16 flex items-center py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        {/* Heading */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-3">
            <div className="w-10 h-px bg-[#C89B3C]" />
            <span className="uppercase tracking-[6px] text-[11px] text-[#C89B3C]">
              Get In Touch
            </span>
            <div className="w-10 h-px bg-[#C89B3C]" />
          </div>

          <h2 className="font-serif text-4xl md:text-6xl text-[#1F1205] mb-4">
            हमारे साथ जुड़ें
          </h2>

          <p className="max-w-2xl mx-auto italic text-[#A56B1E] text-lg">
            हम हमारी आध्यात्मिक यात्रा का हिस्सा बनने के लिए भक्तों, स्वयंसेवकों, दानदाताओं और शुभचिंतकों का हार्दिक स्वागत करते हैं।
          </p>

          <div className="w-32 h-px bg-[#E5CFA3] mx-auto mt-4"></div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-14">
          {/* LEFT SIDE */}
          <div>
            {/* Image */}
            <div className="relative w-full h-[280px] overflow-hidden">
              <Image
                src="/images/shoot/contact.jpeg"
                alt="Temple"
                fill
                className="object-cover"
              />
            </div>

            {/* Contact */}
            <div className="mt-8">
              <h3 className="font-serif text-3xl text-[#1F1205] mb-8">
                संपर्क जानकारी
              </h3>

              <div className="space-y-7">
                <div>
                  <p className="uppercase tracking-[3px] text-[11px] text-[#C89B3C] mb-1">
                    पता
                  </p>
                  <p className="text-[#7A5520]">
                    CS - 17, 3RD Floor, Ansal Plaza Vaishali Ghaziabad UP-201010
                  </p>
                </div>

                <div>
                  <p className="uppercase tracking-[3px] text-[11px] text-[#C89B3C] mb-1">
                    फ़ोन
                  </p>
                  <p className="text-[#7A5520]">
                    +91 99903 64233
                    <br></br>
                    +91 93039 29303
                    <br></br>
                    +91 94577 44439
                  </p>
                </div>

                <div>
                  <p className="uppercase tracking-[3px] text-[11px] text-[#C89B3C] mb-1">
                    ईमेल
                  </p>
                  <p className="text-[#7A5520]">
                    vhrss2026@gmail.com
                  </p>
                </div>

                <div>
                  <p className="uppercase tracking-[3px] text-[11px] text-[#C89B3C] mb-1">
                    वेबसाइट
                  </p>
                  <p className="text-[#7A5520]">
                    www.vishvahindurashtrasevasangathan.in
                  </p>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div className="mt-10 border border-[#ECD8B0] bg-[#FFF5DF]">
              <div className="p-6">
                <h4 className="font-serif text-xl text-[#1F1205] mb-5">
                  कार्यालय अवधि
                </h4>

                <div className="flex justify-between border-b border-[#ECD8B0] pb-3 text-[#8A5E1A]">
                  <span>Monday – Saturday</span>
                  <span>9:00 AM – 6:00 PM</span>
                </div>

                <div className="flex justify-between pt-3 text-[#8A5E1A]">
                  <span>Sunday</span>
                  <span>नियोजन द्वारा</span>
                </div>
              </div>
            </div>

            {/* Quote */}
            <div className="mt-8 border-l-2 border-[#D69A2D] pl-5">
              <p className="italic text-[#C98A00] text-lg">
                &quot;वसुधैव कुटुंबकम&quot;
              </p>

              <p className="text-[#8A5E1A] mt-2">
                पूरी दुनिया एक परिवार है।
              </p>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="border border-[#ECD8B0] bg-[#FFF6E5]">
            <div className="border-b border-[#ECD8B0] p-7">
              <h3 className="font-serif text-3xl text-[#1F1205]">
                Send a Message
              </h3>

              <p className="text-[#A56B1E] mt-2">
                हम 1-2 कामकाजी दिनों में जवाब देंगे।
              </p>
            </div>

            <form onSubmit={handleSubmit} className="p-7 space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block uppercase tracking-[3px] text-[10px] text-[#C89B3C] mb-2">
                    Full Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                    className="w-full border border-[#E3C88D] bg-transparent px-4 py-3 outline-none focus:border-[#D69A2D]"
                  />
                </div>

                <div>
                  <label className="block uppercase tracking-[3px] text-[10px] text-[#C89B3C] mb-2">
                    Mobile Number
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    placeholder="Your mobile number"
                    className="w-full border border-[#E3C88D] bg-transparent px-4 py-3 outline-none focus:border-[#D69A2D]"
                  />
                </div>
              </div>

              <div>
                <label className="block uppercase tracking-[3px] text-[10px] text-[#C89B3C] mb-2">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  className="w-full border border-[#E3C88D] bg-transparent px-4 py-3 outline-none focus:border-[#D69A2D]"
                />
              </div>

              <div>
                <label className="block uppercase tracking-[3px] text-[10px] text-[#C89B3C] mb-2">
                  Message
                </label>

                <textarea
                  rows={6}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  placeholder="Share your message, query, or intention..."
                  className="w-full border border-[#E3C88D] bg-transparent px-4 py-3 resize-none outline-none focus:border-[#D69A2D]"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#F36A00] hover:bg-[#DB5F00] disabled:opacity-60 disabled:cursor-not-allowed text-white uppercase tracking-[3px] py-4 transition duration-300"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

              {status && (
                <p
                  className={`text-center text-sm ${status === "success" ? "text-green-600" : "text-red-600"
                    }`}
                >
                  {status === "success"
                    ? "✅ Your message has been sent successfully."
                    : status}
                </p>
              )}
            </form>

            {/* Donation QR Section */}
            <div className="mt-12 border border-[#E3C88D] bg-[#FFF8EC] p-8 text-center">
              <span className="inline-block uppercase tracking-[4px] text-[11px] text-[#C89B3C] mb-3">
                Support Our Mission
              </span>

              <h3 className="text-3xl md:text-4xl font-serif text-[#4B2E1A] mb-4">
                Donate to Vishwa Hindu Rashtra
              </h3>

              <p className="text-gray-700 max-w-xl mx-auto leading-7 mb-8">
                Your generous contribution helps us organize cultural programs,
                social service initiatives, awareness campaigns, and activities
                dedicated to preserving and promoting Sanatan Dharma.
              </p>

              <div className="flex justify-center">
                <div className="bg-white border border-[#E3C88D] p-4 shadow-lg">
                  <Image
                    src="/images/QRCODE.jpeg"
                    alt="Donate via QR Code"
                    width={256}
                    height={256}
                    className="object-contain"
                  />
                </div>
              </div>

              <p className="mt-6 text-sm text-gray-600">
                Scan the QR code using any UPI-enabled application to make your
                contribution.
              </p>

              <div className="mt-4 flex justify-center items-center gap-2 text-[#F36A00] font-semibold uppercase tracking-[3px] text-xs">
                <span>🕉</span>
                <span>Every Contribution Strengthens the Nation</span>
                <span>🕉</span>
              </div>


            </div>
          </div>
        </div>
      </div>
    </section>
  );
}