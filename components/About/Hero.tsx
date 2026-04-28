"use client";

import Image from "next/image";
import AnimatedText from "../AnimatedText";

export default function Hero() {
  return (
    <section className="relative w-full h-[80vh] md:h-screen overflow-hidden">
      {/* Background Image */}
      <Image
        src="/hero-about.jpg"
        alt="Coconut Forest"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 md:bg-black/30" />

      {/* Content - pushed down even more buhahaha */}
      <div className="relative z-10 flex items-center h-full px-6 sm:px-10 md:px-16 lg:px-24">
        <div className="max-w-xl mt-32 md:mt-40">
          <AnimatedText>
            <h1 className="text-white font-medium leading-tight 
                           text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              Fibre from Nature.
              <br />
              Value for Life.
            </h1>
          </AnimatedText>

          <AnimatedText>
            <p className="mt-4 text-white/90 
                          text-sm sm:text-base md:text-lg 
                          leading-relaxed max-w-md">
              Sustainable coir solutions built on people, planet, and profit –
              serving businesses across five continents.
            </p>
          </AnimatedText>
        </div>
      </div>
    </section>
  );
}