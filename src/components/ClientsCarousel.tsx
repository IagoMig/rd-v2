import React from "react";
import { motion } from "framer-motion";

// Apenas 5 logos direto da pasta /public
const logos = [
  "/1.png",
  "/2.png",
  "/3.png",
  "/4.png",
  "/5.png",
];

export function ClientsCarousel() {
  return (
    <div className="w-full bg-white py-10">
      {/* ===== TÍTULO ===== */}
      <h2 className="text-center text-3xl font-bold mb-8">
        <span className="text-black">Empresas que</span>{" "}
        <span className="text-orange-500">confiam em nós</span>
      </h2>

      {/* ===== GRID FIXO CLEAN ===== */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6 place-items-center">
        {logos.map((src, i) => (
          <motion.img
            key={i}
            src={src}
            alt={`Cliente ${i + 1}`}
            className="h-24 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
          />
        ))}
      </div>
    </div>
  );
}
