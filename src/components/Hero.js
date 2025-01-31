"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Hero = () => {
  const floatingDonut1 = useRef(null);
  const floatingDonut2 = useRef(null);

  useEffect(() => {
    // Floating Animation for Donuts
    gsap.to(floatingDonut1.current, {
      y: -15,
      repeat: -1,
      yoyo: true,
      duration: 2,
      ease: "power1.inOut",
    });

    gsap.to(floatingDonut2.current, {
      y: 15,
      repeat: -1,
      yoyo: true,
      duration: 2.5,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <section className="relative w-full h-screen flex flex-col justify-center items-center text-center text-white overflow-hidden">
      {/* Background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"
      />

      {/* Floating Donuts (SVGs with GSAP Animation) */}
      <div ref={floatingDonut1} className="absolute top-24 left-10">
        <svg width="80" height="80" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" fill="#FFC0CB" stroke="#FF69B4" strokeWidth="2" />
          <circle cx="12" cy="12" r="4" fill="black" />
        </svg>
      </div>

      <div ref={floatingDonut2} className="absolute bottom-24 right-10">
        <svg width="100" height="100" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" fill="#FFD700" stroke="#FF8C00" strokeWidth="2" />
          <circle cx="12" cy="12" r="4" fill="black" />
        </svg>
      </div>

      {/* Hero Content */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10"
      >
        <h1 className="text-5xl md:text-7xl font-bold">
          Welcome to <span className="text-pink-500">DonutVerse</span>
        </h1>
        <p className="mt-4 text-lg text-gray-300">The most delicious donuts in the galaxy! 🚀🍩</p>

        {/* Glowing Order Now Button */}
        <Link href="/menu">
          <motion.button
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 0px 20px rgba(255, 105, 180, 0.8)",
            }}
            transition={{ duration: 0.3 }}
            className="mt-6 px-6 py-3 bg-pink-500 text-white text-lg font-bold rounded-full hover:bg-pink-400 transition"
          >
            Order Now
          </motion.button>
        </Link>
      </motion.div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-black opacity-30"></div>
    </section>
  );
};

export default Hero;
