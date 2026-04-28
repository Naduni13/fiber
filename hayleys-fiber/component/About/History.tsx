"use client";

import React, { useRef } from "react";
import Image from "next/image";

const historyImages = [
  { src: "/history_1.png", alt: "Hayleys historical photo 1" },
  { src: "/history_2.png", alt: "Hayleys historical photo 2" },
  { src: "/history_1.png", alt: "Hayleys historical photo 3" },
  { src: "/history_2.png", alt: "Hayleys historical photo 4" },
  { src: "/history_1.png", alt: "Hayleys historical photo 5" },
];

export default function History() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 320, behavior: "smooth" });
    }
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -320, behavior: "smooth" });
    }
  };

  return (
    <section className="bg-white py-16 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
        
        {/* Left: Text content */}
        <div className="w-full lg:w-[320px] shrink-0">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-6">
            Our Journey Since 1878
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed text-justify">
            Hayleys PLC Sri Lanka is a multiple award-winning blue-chip
            conglomerate which commenced operations in 1878 as Chas P. Hayley
            &amp; Company. Today, we encompass 16 diversified business sectors.
          </p>
        </div>

        {/* Right: Horizontally scrollable images */}
        <div className="relative w-full flex-1 overflow-hidden">
          {/* Scroll Left Button */}
          <button
            onClick={scrollLeft}
            aria-label="Scroll left"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow-md w-9 h-9 flex items-center justify-center hover:bg-gray-100 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Scrollable Image Strip */}
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide px-10"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {historyImages.map((image, index) => (
              <div
                key={index}
                className="relative shrink-0 w-[260px] sm:w-[300px] h-[260px] sm:h-[300px] overflow-hidden rounded-sm"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 260px, 300px"
                />
              </div>
            ))}
          </div>

          {/* Scroll Right Button */}
          <button
            onClick={scrollRight}
            aria-label="Scroll right"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow-md w-9 h-9 flex items-center justify-center hover:bg-gray-100 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}