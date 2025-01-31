"use client";
import { motion } from "framer-motion";
import { useState } from "react";

// Sample Donut Data (Now Includes Names & Descriptions)
const donuts = [
  { id: 1, name: "Strawberry Bliss", color: "#FFC0CB", stroke: "#FF69B4", description: "A soft, fluffy donut dipped in creamy strawberry glaze." },
  { id: 2, name: "Golden Delight", color: "#FFD700", stroke: "#FF8C00", description: "Rich honey-glazed donut with a hint of caramel." },
  { id: 3, name: "Berry Burst", color: "#8A2BE2", stroke: "#4B0082", description: "A blueberry-infused treat with a delightful purple glaze." },
  { id: 4, name: "Mint Magic", color: "#00FA9A", stroke: "#008000", description: "A refreshing mint donut drizzled with vanilla icing." },
  { id: 5, name: "Ocean Breeze", color: "#1E90FF", stroke: "#00008B", description: "A light and airy donut with a smooth blue frosting." },
];

// Donut SVG Component
const Donut = ({ color, stroke }) => (
  <svg width="120" height="120" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" fill={color} stroke={stroke} strokeWidth="2" />
    <circle cx="12" cy="12" r="4" fill="black" />
  </svg>
);

const DonutCarousel = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <section className="w-full py-16 bg-gray-900 text-center text-white">
      <h2 className="text-4xl font-bold mb-10">🍩 Our Delicious Donuts</h2>

      <motion.div
        className="flex space-x-12 w-max px-8"
        animate={{ x: hovered ? 0 : ["0%", "-100%"] }}
        transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {donuts.concat(donuts).map((donut, index) => (
          <motion.div
            key={`${donut.id}-${index}`} // ✅ Unique Key Fix
            whileHover={{ scale: 1.2, rotate: 8 }}
            transition={{ type: "spring", stiffness: 150 }}
            className="bg-gray-800 p-6 rounded-xl shadow-lg flex flex-col items-center"
          >
            <Donut color={donut.color} stroke={donut.stroke} />
            <h3 className="mt-4 text-xl font-semibold text-pink-400">{donut.name}</h3>
            <p className="text-sm text-gray-300 mt-2 w-40">{donut.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default DonutCarousel;
