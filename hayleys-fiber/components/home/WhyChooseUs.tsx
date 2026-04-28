"use client";

import Image from "next/image";

const features = [
  {
    icon: "/icon (1).png",
    title: "An environmentally-friendly product portfolio",
  },
  {
    icon: "/icon (2).png",
    title: "Expertise as a pioneer in the marketplace",
  },
  {
    icon: "/icon (3).png",
    title: "Professional in-house team",
  },
  {
    icon: "/icon (4).png",
    title: "Innovation for emerging markets",
  },
];

const certifications = [
  { img: "/certi (1).png", alt: "ISO Certification" },
  { img: "/certi (2).png", alt: "GMP Certification" },
  { img: "/certi (5).png", alt: "GOLS Certification" },
  { img: "/certi (4).png", alt: "BSCI Certification" },
  { img: "/certi (3).png", alt: "TAGS Awards" },
];

export default function WhyChooseUs() {
  return (
    <section className="w-full">

      {/* TOP SECTION */}
      <div className="bg-[#f5f5f5] py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          
          <h2 className="text-3xl md:text-4xl font-bold text-green-700">
            WHY CHOOSE US
          </h2>

          <p className="mt-6 text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Rileys manufactures and supply the ultimate collection of floor mats in Sri Lanka to keep muddy footprints off your floors. Our portfolio offers coir product options for all applications in the home to keep dust away and floors cleaner for longer. We offer floor mats for both indoors and outdoors to stop dirt at the door. Our in house creative team is constantly looking at new trends to offer the very latest designs and functionality in our floor mats and other coir products.
          </p>

          {/* FEATURES */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mt-16">
            {features.map((item, i) => (
              <div key={i} className="flex flex-col items-center">
                
                <div className="mb-5">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={70}
                    height={70}
                    className="object-contain"
                  />
                </div>

                <p className="text-sm text-gray-700 font-medium max-w-[200px] leading-snug">
                  {item.title}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* CERTIFICATION SECTION WITH GRAY BG */}
      <div className="bg-[#eeeeee] py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          
          <h3 className="text-2xl md:text-3xl font-semibold text-black leading-snug">
            Global <span className="text-green-700">Certifications</span> Reflecting Our Commitment to
            <br />
            Quality, Sustainability, and Ethical Standards
          </h3>

          {/* CERT LOGOS */}
          <div className="flex flex-wrap justify-center items-center gap-16 mt-14">
            {certifications.map((cert, i) => (
              <div key={i} className="relative w-36 h-36 md:w-44 md:h-44">
                <Image
                  src={cert.img}
                  alt={cert.alt}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>

        </div>
      </div>

    </section>
  );
}