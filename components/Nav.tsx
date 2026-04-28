"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";

export default function Navbar() {
  const [show, setShow] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastScroll = useRef(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScroll.current && currentScroll > 80) {
        setShow(false);
      } else {
        setShow(true);
      }

      lastScroll.current = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => pathname === path;

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
          <Link
            href="/"
            className={`transition-all duration-200 ${
              isActive("/")
                ? "font-bold text-green-700 pl-2"
                : "hover:pl-2 hover:text-green-700"
            }`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`transition-all duration-200 ${
              isActive("/about")
                ? "font-bold text-green-700 pl-2"
                : "hover:pl-2 hover:text-green-700"
            }`}
          >
            About Us
          </Link>
          <Link
            href="/"
            className="transition-all duration-200 hover:pl-2 hover:text-green-700"
          >
            Products
          </Link>
          <Link
            href="/"
            className="transition-all duration-200 hover:pl-2 hover:text-green-700"
          >
            Production Facilities
          </Link>
          <Link
            href="/"
            className="transition-all duration-200 hover:pl-2 hover:text-green-700"
          >
            R&D
          </Link>
          <Link
            href="/"
            className="transition-all duration-200 hover:pl-2 hover:text-green-700"
          >
            Contact
          </Link>
          <Link
            href="/"
            className="transition-all duration-200 hover:pl-2 hover:text-green-700"
          >
            Blogs
          </Link>
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
          <Link
            href="/contact"
            className={`relative transition-all duration-200 ${
              isActive("/contact")
                ? "font-bold after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-white after:rounded-full after:scale-x-100 after:transition-transform after:duration-300"
                : "after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-white after:rounded-full after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
            }`}
          >
            Contact Us
          </Link>
          <Link
            href="/blogs"
            className={`relative transition-all duration-200 ${
              isActive("/blogs")
                ? "font-bold after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-white after:rounded-full after:scale-x-100 after:transition-transform after:duration-300"
                : "after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-white after:rounded-full after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
            }`}
          >
            Blogs
          </Link>
        </div>

        <div className="flex items-center h-[80px] bg-[#d9d9d9]">
          <div className="w-[300px]" />

          <nav className="flex-1 flex justify-center gap-10 text-black">
            <Link
              href="/"
              className={`relative transition-all duration-200 ${
                isActive("/")
                  ? "font-bold text-green-700 after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-green-700 after:rounded-full after:scale-x-100 after:transition-transform after:duration-300"
                  : "after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-green-700 after:rounded-full after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 hover:scale-105"
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`relative transition-all duration-200 ${
                isActive("/about")
                  ? "font-bold text-green-700 after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-green-700 after:rounded-full after:scale-x-100 after:transition-transform after:duration-300"
                  : "after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-green-700 after:rounded-full after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 hover:scale-105"
              }`}
            >
              About Us
            </Link>
            <Link
              href="/"
              className="relative transition-all duration-200 after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-green-700 after:rounded-full after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 hover:scale-105"
            >
              Products
            </Link>
            <Link
              href="/"
              className="relative transition-all duration-200 after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-green-700 after:rounded-full after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 hover:scale-105"
            >
              Production Facilities
            </Link>
            <Link
              href="/"
              className="relative transition-all duration-200 after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-green-700 after:rounded-full after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 hover:scale-105"
            >
              Research & Development
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}