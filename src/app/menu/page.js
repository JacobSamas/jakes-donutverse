"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import MenuGrid from "@/components/MenuGrid";

export default function Menu() {
  const [cart, setCart] = useState([]);

  const addToCart = (donut) => {
    setCart([...cart, donut]);
  };

  return (
    <main className="min-h-screen bg-gray-900 text-white">
      <Navbar cartCount={cart.length} />
      <div className="max-w-6xl mx-auto py-16 px-6 text-center">
        <h1 className="text-5xl font-bold text-pink-500 mb-8">🍩 Donut Menu</h1>
        <p className="text-lg text-gray-300">
          Browse our delicious selection of handcrafted donuts!
        </p>
      </div>
      <MenuGrid addToCart={addToCart} />
    </main>
  );
}
