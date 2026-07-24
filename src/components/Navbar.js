"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  useEffect(() => {
    const Menuopen = () =>{
      setMenuOpen(false);
    }
    void Menuopen();
  }, [pathname]);

  const navLink = (href) =>
    `uppercase tracking-widest text-sm font-medium transition duration-300 ${
      pathname === href
        ? "text-orange-600"
        : "text-gray-700 hover:text-orange-600"
    }`;

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between h-24 px-5 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/images/logo.webp"
            alt="Vishwa Hindu Rashtra"
            width={70}
            height={70}
            priority
            className="w-auto h-16"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          <Link href="/" className={navLink("/")}>
            Home
          </Link>

          <Link href="/about" className={navLink("/about")}>
            About Us
          </Link>

          <Link href="/contact" className={navLink("/contact")}>
            Contact Us
          </Link>

          <Link
            href="/contact"
            className="bg-orange-600 text-white uppercase tracking-widest px-7 py-3 rounded hover:bg-orange-700 transition"
          >
            Join Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-800"
          aria-label="Toggle Menu"
        >
          {menuOpen ? (
            <HiX className="w-9 h-9" />
          ) : (
            <HiOutlineMenuAlt3 className="w-9 h-9" />
          )}
        </button>
      </nav>

      {/* Mobile & Tablet Menu */}
      <div
        className={`fixed top-24 left-0 w-full bg-white shadow-xl transition-all duration-300 ease-in-out md:hidden ${
          menuOpen
            ? "translate-y-0 opacity-100 visible"
            : "-translate-y-5 opacity-0 invisible"
        }`}
      >
        <div className="flex flex-col px-6 py-8 space-y-6">
          <Link
            href="/"
            className={navLink("/")}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>

          <Link
            href="/about"
            className={navLink("/about")}
            onClick={() => setMenuOpen(false)}
          >
            About Us
          </Link>

          <Link
            href="/contact"
            className={navLink("/contact")}
            onClick={() => setMenuOpen(false)}
          >
            Contact Us
          </Link>

          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="bg-orange-600 text-white text-center uppercase tracking-widest py-3 rounded hover:bg-orange-700 transition"
          >
            Join Us
          </Link>
        </div>
      </div>
    </header>
  );
}