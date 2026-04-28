"use client";

export default function AboutSection() {
  return (
    <section className="w-full bg-[#f5f5f3] py-16 sm:py-20 md:py-24 px-6 sm:px-10 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        
        {/* LEFT CONTENT */}
        <div>
          <p className="text-sm text-gray-500 mb-3">
            Hayleys Fibre
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight text-black">
            Global Leaders in <br />
            Sustainable Coir{" "}
            <span className="text-[#3f6f45]">Solutions</span>
          </h2>

          <p className="mt-6 text-gray-600 text-sm sm:text-base leading-relaxed max-w-xl">
            Hayleys Fibre is a subsidiary of Sri Lanka’s award-winning blue-chip
            conglomerate Hayleys PLC, operating under the Eco Solutions sector.
            We are a leading global manufacturer and exporter of 100%
            biodegradable coir-based products, delivering over 400 innovative
            and tailor-made solutions to diverse customers across the world
            through accessible global channels.
          </p>
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex flex-col gap-6">
          
          {/* Vision Card */}
          <div className="bg-[#3f6f45] text-white p-6 sm:p-8 md:p-10">
            <h3 className="font-semibold text-lg sm:text-xl mb-3">
              Vision
            </h3>
            <p className="text-sm sm:text-base leading-relaxed text-white/90">
              To be the leading provider of innovative, sustainable and
              environmentally-friendly products and solutions.
            </p>
          </div>

          {/* Mission Card */}
          <div className="bg-[#3f6f45] text-white p-6 sm:p-8 md:p-10">
            <h3 className="font-semibold text-lg sm:text-xl mb-3">
              Mission
            </h3>
            <p className="text-sm sm:text-base leading-relaxed text-white/90">
              To be the globally preferred choice by delivering value to all
              stakeholders through a range of sustainable and
              environmentally-friendly products and solutions.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}