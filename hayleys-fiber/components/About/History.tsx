"use client";

import React, { useRef } from "react";
import Image from "next/image";
import AnimatedText from "../AnimatedText";

const historyImages = [
  { src: "/history_1.png", alt: "1" },
  { src: "/history_2.png", alt: "2" },
  { src: "/history_1.png", alt: "3" },
  { src: "/history_2.png", alt: "4" },
  { src: "/history_1.png", alt: "5" },
  { src: "/history_2.png", alt: "6" },
];

export default function History() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;

    const card = scrollRef.current.querySelector("div");
    if (!card) return;

    const gap = 24; // gap-6
    const amount = card.clientWidth + gap;

    scrollRef.current.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-[#f5f5f5] py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-start">
        
        {/* LEFT SIDE */}
        <div className="w-full lg:w-1/2">
          <AnimatedText>
            <h2 className="font-bold text-[#0f172a] leading-tight text-[42px] sm:text-[42px]">
              Our Journey Since <br />
              <span className="text-green-700">1878</span>
            </h2>
          </AnimatedText>

          <AnimatedText>
            <p className="mt-6 text-gray-600 text-[15px] leading-relaxed max-w-lg">
              Hayleys PLC stands as one of Sri Lanka’s most prominent and diversified blue-chip conglomerates, with a legacy that dates back to 1878 when it began operations as Chas P. Hayley & Company. Over nearly a century and a half, the organization has evolved from a modest trading enterprise into a global business powerhouse, playing a pivotal role in the economic and industrial development of the nation. 
            </p>
          </AnimatedText>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative w-full lg:w-1/2">
          
          {/* LEFT ARROW */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-6 top-1/2 -translate-y-1/2 z-20 bg-white w-11 h-11 rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100"
          >
            <svg
              className="w-5 h-5 text-gray-700"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* SCROLL AREA */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth px-16 snap-x snap-mandatory no-scrollbar"
          >
            {historyImages.map((img, i) => (
              <div
                key={i}
                className="relative shrink-0 w-[340px] h-[480px] snap-start"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          {/* RIGHT ARROW */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-6 top-1/2 -translate-y-1/2 z-20 bg-white w-11 h-11 rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100"
          >
            <svg
              className="w-5 h-5 text-gray-700"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* HIDE SCROLLBAR */}
      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}