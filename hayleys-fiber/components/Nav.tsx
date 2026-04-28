"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [show, setShow] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScroll && currentScroll > 80) {
        setShow(false); // scrolling down → hide
      } else {
        setShow(true); // scrolling up → show
      }

      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <header
      className={`w-full fixed top-0 left-0 transition-transform duration-300 z-50 ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* GREEN ANGLED BACKGROUND */}
      <div
        className="absolute top-0 bottom-0 left-0 w-[380px] bg-[#1f7a3a] z-10 flex items-center px-8"
        style={{
          clipPath: "polygon(0 0, 78% 0, 100% 100%, 0% 100%)",
        }}
      >
        <Image
          src="/logo2.png"
          alt="Hayleys Fibre"
          width={200}
          height={60}
          className="object-contain"
          priority
        />
      </div>

      {/* TOP BLACK BAR */}
      <div className="bg-black text-white text-sm py-2 px-8 flex justify-end gap-8 relative z-0">
        <Link href="/contact" className="hover:underline">
          Contact Us
        </Link>
        <Link href="/blogs" className="hover:underline">
          Blogs
        </Link>
      </div>

      {/* MAIN NAV */}
      <div className="flex items-center h-[90px] bg-[#d9d9d9] relative z-0">
        {/* Spacer */}
        <div className="w-[360px]" />

        {/* NAV LINKS */}
        <nav className="flex-1 flex justify-center gap-14 text-black font-medium text-[15px]">
          <Link href="/" className="hover:text-green-700 transition">
            Home
          </Link>

          <Link href="/about" className="hover:text-green-700 transition">
            About Us
          </Link>

          <Link href="/products" className="hover:text-green-700 transition">
            Products
          </Link>

          <Link href="/facilities" className="hover:text-green-700 transition">
            Production Facilities
          </Link>

          <Link href="/research" className="hover:text-green-700 transition">
            Research & Development
          </Link>
        </nav>
      </div>
    </header>
  );
}