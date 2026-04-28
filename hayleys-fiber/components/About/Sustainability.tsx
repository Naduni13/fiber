"use client";

import Image from "next/image";

export default function Sustainability() {
  return (
    <section className="w-full h-[380px] sm:h-[420px] md:h-[460px] lg:h-[480px] flex">
      
      {/* LEFT SIDE */}
      <div className="w-full lg:w-1/2 bg-black text-white flex items-center px-6 sm:px-10 md:px-16 lg:px-20">
        <div className="max-w-md">
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight">
            Our Sustainability <br />
            Approach
          </h2>

          <p className="mt-4 text-white/80 text-xs sm:text-sm md:text-base leading-relaxed">
            Hayleys Fibre puts people, planet and profit first — delivering
            sustainable, tailor-made coir solutions while reducing waste,
            protecting communities, and shrinking our carbon footprint.
          </p>

          <button className="mt-6 bg-[#c5a46d] text-black px-6 py-3 text-sm font-medium hover:opacity-90 transition">
            Read More
          </button>

        </div>
      </div>

      {/* RIGHT SIDE IMAGE */}
      <div className="hidden lg:block lg:w-1/2 relative">
        <Image
          src="/sustainability-about.jpg" // <-- replace with your image
          alt="Sustainability"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

    </section>
  );
}