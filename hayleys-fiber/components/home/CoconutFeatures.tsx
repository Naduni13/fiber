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
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT IMAGE */}
        <div className="flex justify-center md:justify-start">
          <Image
            src="/coco.jpg" // <-- your coconut image
            alt="Coconut Fibre"
            width={420}
            height={420}
            className="object-contain"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div>
          {/* HEADING */}
          <h2 className="text-4xl text-black md:text-5xl font-bold leading-tight">
            Unique Features of <br />
            <span className="text-green-700">Coconut</span> Fibre
          </h2>

          {/* LIST */}
          <ul className="mt-10 space-y-6">
            {features.map((item, i) => (
              <li key={i} className="flex items-center gap-4">
                
                {/* BULLET */}
                <span className="w-4 h-4 bg-[#b89b5e] rounded-full flex-shrink-0"></span>

                {/* TEXT */}
                <span className="text-lg text-gray-800">
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