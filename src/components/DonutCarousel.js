"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

// Sample Donut Data
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
  const [selectedDonut, setSelectedDonut] = useState(null);
  const [cart, setCart] = useState([]);

  // Function to add donut to cart
  const addToCart = (donut) => {
    setCart([...cart, donut]);
    setSelectedDonut(null); // Close the modal after adding
  };

  return (
    <section className="w-full py-16 bg-gray-900 text-center text-white">
      <h2 className="text-4xl font-bold mb-10">🍩 Our Delicious Donuts</h2>

      {/* Donut Scrolling Carousel */}
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
            className="bg-gray-800 p-6 rounded-xl shadow-lg flex flex-col items-center cursor-pointer"
            onClick={() => setSelectedDonut(donut)}
          >
            <Donut color={donut.color} stroke={donut.stroke} />
            <h3 className="mt-4 text-xl font-semibold text-pink-400">{donut.name}</h3>
            <p className="text-sm text-gray-300 mt-2 w-40">{donut.description}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Pop-up Modal for Donut Details */}
      <AnimatePresence>
        {selectedDonut && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-60 p-4"
          >
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center max-w-sm">
              <Donut color={selectedDonut.color} stroke={selectedDonut.stroke} />
              <h3 className="text-2xl font-bold text-pink-400 mt-4">{selectedDonut.name}</h3>
              <p className="text-gray-300 mt-2">{selectedDonut.description}</p>
              <div className="mt-4 flex justify-center space-x-4">
                <button
                  onClick={() => addToCart(selectedDonut)}
                  className="px-4 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-400 transition"
                >
                  Add to Cart
                </button>
                <button
                  onClick={() => setSelectedDonut(null)}
                  className="px-4 py-2 bg-gray-500 text-white rounded-full hover:bg-gray-400 transition"
                >
                  Cancel
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Shopping Cart Section */}
      {cart.length > 0 && (
        <div className="mt-12 p-6 bg-gray-800 rounded-lg shadow-lg text-center">
          <h3 className="text-2xl font-bold text-pink-400">🛒 Cart</h3>
          <ul className="mt-4 space-y-2">
            {cart.map((item, index) => (
              <li key={index} className="text-white">
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};

export default DonutCarousel;
