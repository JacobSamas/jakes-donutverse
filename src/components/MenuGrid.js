"use client";
import { useState } from "react";
import { motion } from "framer-motion";

// Sample Donut Data
const donuts = [
  { id: 1, name: "Strawberry Bliss", flavor: "Strawberry", color: "#FFC0CB", stroke: "#FF69B4" },
  { id: 2, name: "Golden Delight", flavor: "Honey", color: "#FFD700", stroke: "#FF8C00" },
  { id: 3, name: "Berry Burst", flavor: "Blueberry", color: "#8A2BE2", stroke: "#4B0082" },
  { id: 4, name: "Mint Magic", flavor: "Mint", color: "#00FA9A", stroke: "#008000" },
  { id: 5, name: "Chocolate Dream", flavor: "Chocolate", color: "#8B4513", stroke: "#5C3317" },
  { id: 6, name: "Vanilla Frost", flavor: "Vanilla", color: "#F5DEB3", stroke: "#D2B48C" },
];

// Donut SVG Component
const Donut = ({ color, stroke }) => (
  <svg width="90" height="90" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" fill={color} stroke={stroke} strokeWidth="2" />
    <circle cx="12" cy="12" r="4" fill="black" />
  </svg>
);

const MenuGrid = ({ addToCart }) => {
  const [filter, setFilter] = useState("All");

  // Filter Donuts Based on Selection
  const filteredDonuts = filter === "All" ? donuts : donuts.filter((d) => d.flavor === filter);

  return (
    <section className="max-w-6xl mx-auto px-6 pb-16">
      {/* Filters */}
      <div className="flex flex-wrap justify-center space-x-4 mb-8">
        {["All", "Chocolate", "Strawberry", "Honey", "Mint", "Blueberry", "Vanilla"].map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-4 py-2 rounded-full text-white ${
              filter === category ? "bg-pink-500" : "bg-gray-700 hover:bg-gray-600"
            } transition`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Donut Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
      >
        {filteredDonuts.length > 0 ? (
          filteredDonuts.map((donut) => (
            <motion.div
              key={donut.id}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-gray-800 p-6 rounded-xl shadow-lg flex flex-col items-center text-center"
            >
              <Donut color={donut.color} stroke={donut.stroke} />
              <h3 className="mt-4 text-xl font-semibold text-pink-400">{donut.name}</h3>
              <p className="text-sm text-gray-300 mt-2">{donut.flavor} Flavor</p>
              <button
                onClick={() => addToCart(donut)}
                className="mt-4 px-4 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-400 transition"
              >
                Add to Cart
              </button>
            </motion.div>
          ))
        ) : (
          <p className="text-gray-400 text-center col-span-3">No donuts available.</p>
        )}
      </motion.div>
    </section>
  );
};

export default MenuGrid;
