"use client";

import Image from "next/image";

const features = [
  "Renewable & Sustainable",
  "Excellent Water Retention",
  "Thermal Protection for Plants",
  "Improves Soil Health",
  "Fully Biodegradable",
  "Naturally Resistant to Decay",
];

export default function CoconutFeatures() {
  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADING */}
        <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight text-center md:text-left mb-16">
          Unique Features of{" "}<br />
          <span className="text-green-700">Coconut</span> Fibre
        </h2>

        {/* CONTENT */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          
          {/* IMAGE */}
          <div className="flex justify-center md:justify-start">
            <Image
              src="/coco.jpg"
              alt="Coconut Fibre"
              width={420}
              height={420}
              className="object-contain"
            />
          </div>

          {/* LIST */}
          <ul className="space-y-8 pt-10">
            {features.map((item, i) => (
              <li key={i} className="flex items-center gap-5">
                
                {/* BIG BULLET */}
                <span className="w-6 h-6 bg-[#b89b5e] rounded-full flex-shrink-0"></span>

                {/* BIG TEXT */}
                <span className="text-xl md:text-2xl text-gray-900">
                  {item}
                </span>

              </li>
            ))}
          </ul>

        </div>
      </div>
    </section>
  );
}