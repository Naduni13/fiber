"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";

export default function Navbar() {
  const [show, setShow] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastScroll = useRef(0); // ✅ FIX

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScroll.current && currentScroll > 80) {
        setShow(false); // hide
      } else {
        setShow(true); // show
      }

      lastScroll.current = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full fixed top-0 left-0 transition-transform duration-300 z-50 ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* MOBILE NAV */}
      <div className="lg:hidden bg-black text-white flex items-center justify-between px-4 py-3">
        <Image src="/logo2.png" alt="Logo" width={140} height={40} />

        <button onClick={() => setMenuOpen(!menuOpen)}>
          <div className="space-y-1">
            <span className="block w-6 h-[2px] bg-white"></span>
            <span className="block w-6 h-[2px] bg-white"></span>
            <span className="block w-6 h-[2px] bg-white"></span>
          </div>
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="lg:hidden bg-white text-black flex flex-col gap-4 px-6 py-4 shadow-md">
          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>
          <Link href="/products">Products</Link>
          <Link href="/facilities">Production Facilities</Link>
          <Link href="/research">R&D</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/blogs">Blogs</Link>
        </div>
      )}

      {/* DESKTOP NAV */}
      <div className="hidden lg:block">
        <div
          className="absolute top-0 bottom-0 left-0 w-[320px] xl:w-[380px] bg-[#1f7a3a] z-10 flex items-center px-6"
          style={{
            clipPath: "polygon(0 0, 78% 0, 100% 100%, 0% 100%)",
          }}
        >
          <Image src="/logo2.png" alt="Logo" width={180} height={60} />
        </div>

        <div className="bg-black text-white text-sm py-2 px-8 flex justify-end gap-6">
          <Link href="/contact">Contact Us</Link>
          <Link href="/blogs">Blogs</Link>
        </div>

        <div className="flex items-center h-[80px] bg-[#d9d9d9]">
          <div className="w-[300px]" />

          <nav className="flex-1 flex justify-center gap-10 text-black">
            <Link href="/">Home</Link>
            <Link href="/about">About Us</Link>
            <Link href="/products">Products</Link>
            <Link href="/facilities">Production Facilities</Link>
            <Link href="/research">Research & Development</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}