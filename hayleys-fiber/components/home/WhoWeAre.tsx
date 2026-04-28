"use client";

import Image from "next/image";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function WhoWeAre() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section className="w-full bg-[#f5f5f5]">
      
      {/* TOP SECTION */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 py-16 md:py-24 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        
        {/* LEFT CONTENT */}
        <div className="text-center md:text-left">
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-black mb-6 md:mb-8">
            Who We Are?
          </h2>

          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-8 md:mb-10 max-w-full md:max-w-xl mx-auto md:mx-0">
            “Hayleys Fibre is a global leader in sustainable coconut fibre
            solutions, delivering innovative products and end-to-end services
            across bio-engineering, horticulture, and industrial applications to
            a diverse customer base spanning over 40 countries.”
          </p>

          <button className="bg-[#c5a46d] text-black px-8 sm:px-10 py-3 sm:py-4 text-sm sm:text-base font-medium hover:opacity-90 transition">
            Read More
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center md:justify-end">
          
          {/* GREEN BACKGROUND */}
          <div className="absolute right-[-15px] sm:right-[-25px] md:right-[-40px] top-[20px] md:top-[40px] w-[55%] md:w-[35%] h-[80%] md:h-[85%] bg-green-700 z-0"></div>

          {/* IMAGE */}
          <div className="relative z-10 w-[280px] sm:w-[340px] md:w-[420px] h-[360px] sm:h-[440px] md:h-[520px]">
            <Image
              src="/worker.png"
              alt="Worker handling coconut fibre"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* BOTTOM BLACK SECTION */}
      <div className="bg-black text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          
          {/* HEADER */}
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-12 md:mb-16 gap-6 md:gap-8 text-center md:text-left">
            
            <h3 className="text-2xl sm:text-3xl md:text-5xl font-light leading-tight">
              Built on <span className="font-semibold">Legacy.</span><br />
              Driven by <span className="font-semibold">Scale.</span>
            </h3>

            <button className="bg-green-700 px-6 sm:px-8 py-3 sm:py-4 text-sm font-medium hover:bg-green-800 transition whitespace-nowrap">
              Make an inquiry
            </button>
          </div>

          {/* STATS */}
          <div
            ref={ref}
            className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-12 justify-items-center text-center"
          >
            
            {/* ITEM */}
            <div className="flex flex-col items-center">
              <h4 className="text-4xl sm:text-5xl md:text-6xl font-bold">
                {inView && <CountUp end={140} duration={2} />}
                <span className="text-[#c5a46d]">+</span>
              </h4>
              <p className="text-gray-400 text-xs sm:text-sm mt-2 md:mt-3">
                Worldwide Excellence
              </p>
            </div>

            <div className="flex flex-col items-center">
              <h4 className="text-4xl sm:text-5xl md:text-6xl font-bold">
                {inView && <CountUp end={300} duration={2} />}
                <span className="text-[#c5a46d]">+</span>
              </h4>
              <p className="text-gray-400 text-xs sm:text-sm mt-2 md:mt-3">
                Global Customers
              </p>
            </div>

            <div className="flex flex-col items-center">
              <h4 className="text-4xl sm:text-5xl md:text-6xl font-bold">
                {inView && <CountUp end={10} duration={2} />}
                <span className="text-[#c5a46d]">+</span>
              </h4>
              <p className="text-gray-400 text-xs sm:text-sm mt-2 md:mt-3">
                Production Facilities
              </p>
            </div>

            <div className="flex flex-col items-center">
              <h4 className="text-4xl sm:text-5xl md:text-6xl font-bold">
                {inView && <CountUp end={400} duration={2.5} />}
                <span className="text-[#c5a46d]">+</span>
              </h4>
              <p className="text-gray-400 text-xs sm:text-sm mt-2 md:mt-3">
                Product Variants
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}