"use client";

import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppDialog() {
  const phoneNumber = "9990364233";
  const message = encodeURIComponent(
    "Namaste! I would like to know more about Vishwa Hindu Rashtra."
  );

  return (
    <Link
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <div className="relative">
        {/* Pulse Ring */}
        <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-50 xl:opacity-25"></span>

        {/* Button */}
        <div className="relative flex h-12 w-12 xl:h-16 xl:w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-green-500/40">
          <FaWhatsapp className="text-3xl xl:text-4xl" />
        </div>
      </div>
    </Link>
  );
}