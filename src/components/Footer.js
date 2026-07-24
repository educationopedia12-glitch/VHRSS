import Image from "next/image";
import Link from "next/link";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "/contact" },
];

const activities = [
  "Sabha",
  "Ramayan Path",
  "Pravachan",
  "Religious Yatra",
  "Bhajan Sandhya",
  "Festivals",
];

export default function Footer() {
  return (
    <footer className="bg-[#2a0f05] text-[#c8942f] pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top */}
        <div className="grid lg:grid-cols-3 gap-16">

          {/* Logo & Description */}
          <div>
            <Image
              src="/images/logo.webp"
              alt="Vishwa Hindu Rashtra"
              width={80}
              height={60}
            />

            <p className="mt-8 text-lg leading-10 text-[#c89b4b]">
              Dedicated to preserving Sanatan Dharma, promoting
              spiritual awareness, organizing religious programs,
              and serving society through faith, culture, and
              community service.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="uppercase tracking-[0.35em] text-xs mb-8">
              Quick Links
            </h3>

            <ul className="space-y-5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition"
                  >
                    ✦ {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Activities */}
          <div>
            <h3 className="uppercase tracking-[0.35em] text-xs mb-8">
              Activities
            </h3>

            <ul className="space-y-5">
              {activities.map((activity) => (
                <li key={activity}>
                  ✦ {activity}
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-[#6b4315] mt-20 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">

          <p className="text-[#c89b4b]">
            © {new Date().getFullYear()} Vishwa Hindu Rashtra. All rights reserved.
          </p>

          <p className="italic text-[#d3a63d] text-center">
            &quot;धर्मो रक्षति रक्षितः&quot; — Dharma protects those who protect Dharma.
          </p>

        </div>

      </div>
    </footer>
  );
}