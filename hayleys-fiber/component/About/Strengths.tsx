import React from "react";
import Image from "next/image";

const strengths = [
  {
    icon: "/client.png",
    alt: "Diverse Clients Icon",
    title: "Diverse Clients",
    description:
      "Hayleys Fibre puts people, planet and profit first — delivering sustainable, tailor-made coir solutions while reducing waste, protecting communities, and shrinking our carbon footprint.",
  },
  {
    icon: "/staff.png",
    alt: "Well-Trained Staff Icon",
    title: "Well-Trained Staff",
    description:
      "A qualified and professional in-house team of employees deliver an exceptionally professional services in manufacturing and supply chains to deliver quality products to our customers.",
  },
  {
    icon: "/solution.png",
    alt: "Customized Solutions Icon",
    title: "Customized Solutions",
    description:
      "We are committed to providing a reliable and excellent customer service and prompt delivery through tailor-made solutions.",
  },
  {
    icon: "/marketing.png",
    alt: "Innovative Marketing Strategies Icon",
    title: "Innovative Marketing Strategies",
    description:
      "Catering to both international and domestic markets, we are at the forefront of developing and producing quality, innovative, and eco-friendly products.",
  },
];

export default function Strengths() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-center text-4xl font-bold text-gray-900 mb-14">
          Our Key <span className="text-green-600">Strengths</span>
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {strengths.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center px-2"
            >
              {/* Icon Image */}
              <div className="mb-4">
                <Image
                  src={item.icon}
                  alt={item.alt}
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="text-base font-bold text-gray-900 mb-3 leading-snug">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}