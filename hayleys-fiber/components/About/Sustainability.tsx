"use client";

import Image from "next/image";
import AnimatedText from "../AnimatedText";

export default function Sustainability() {
  return (
    <section className="w-full bg-black relative overflow-hidden">
      
      {/* CONTENT CONTAINER */}
      <div className="max-w-7xl mx-auto flex h-[420px] md:h-[480px] lg:h-[520px]">
        
        {/* LEFT SIDE */}
        <div className="w-full lg:w-1/2 flex items-center z-10">
          <div className="pl-6 sm:pl-10 md:pl-16 lg:pl-2 max-w-lg text-white">
            
            <AnimatedText>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
                Our Sustainability <br />
                Approach
              </h2>
            </AnimatedText>

            <AnimatedText>
              <p className="mt-5 text-white/80 text-sm md:text-base leading-relaxed">
                Hayleys Fibre puts people, planet and profit first — delivering
                sustainable, tailor-made coir solutions while reducing waste,
                protecting communities, and shrinking our carbon footprint.
              </p>
            </AnimatedText>

            <button className="mt-8 bg-[#c5a46d] text-black px-8 py-3 text-sm font-medium hover:opacity-90 transition">
              Read More
            </button>
          </div>
        </div>

      </div>

      {/* RIGHT IMAGE FULL EDGE */}
      <div className="hidden lg:block absolute top-0 right-0 h-full w-[35%]">
        <Image
          src="/sustainability-about.jpg"
          alt="Sustainability"
          fill
          className="object-cover"
          priority
        />
      </div>

    </section>
  );
}