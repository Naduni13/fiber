"use client";

import Image from "next/image";
import AnimatedText from "../AnimatedText";

const cards = [
  { img: "/1.png" },
  { img: "/2.png" },
  { img: "/3.png" },
  { img: "/4.png" },
];

export default function HomeHero() {
  return (
    <section className="relative w-full pt-[90px] bg-white">
      
      {/* HERO */}
      <div className="relative h-[650px] w-full overflow-hidden">
        
        {/* Background Image */}
        <Image
          src="/homehero.png"
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />

        {/* ❌ Removed overlay */}

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center">
          <AnimatedText>
            <h1 className="text-white text-6xl md:text-7xl lg:text-8xl leading-[1.1] max-w-2xl">
  Global Eco <br /> Solutions
</h1>
          </AnimatedText>

          <AnimatedText>
            <p className="text-white/80 mt-4 text-lg">
              Powered by Coconut Fiber
            </p>
          </AnimatedText>

          <button className="mt-6 bg-[#c7a26a] text-black px-6 py-3 w-fit font-medium hover:opacity-90 transition">
            Explore Products
          </button>
        </div>
      </div>

      {/* OVERLAPPING CARDS */}
      <div className="relative z-20 w-full px-4 lg:px-8">
        <div className="-mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          
          {cards.map((card, i) => (
            <div
              key={i}
              className="relative h-[380px] lg:h-[420px] overflow-hidden shadow-xl group"
            >
              <Image
                src={card.img}
                alt={`card-${i}`}
                fill
                className="object-cover group-hover:scale-105 transition duration-500"
              />

              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition" />
            </div>
          ))}

        </div>
      </div>

    </section>
  );
}