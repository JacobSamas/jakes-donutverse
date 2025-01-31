"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = ({ cartCount }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detects if the user has scrolled down
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Click outside to close menu
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (isOpen && !e.target.closest(".menu-container")) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [isOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-black bg-opacity-80 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl md:text-3xl font-bold text-pink-500">
          🍩 DonutVerse
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="text-lg text-white hover:text-pink-400 transition">Home</Link>
          <Link href="/menu" className="text-lg text-white hover:text-pink-400 transition">Menu</Link>
          <Link href="/cart" className="relative text-lg text-white hover:text-pink-400 transition flex items-center">
            Cart
            <FaShoppingCart className="ml-2 text-pink-400" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-3 bg-pink-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </Link>
        </div>

        {/* Hamburger Button for Mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col justify-between w-8 h-6 relative menu-container"
        >
          <motion.div
            className="w-8 h-[3px] bg-white rounded"
            animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            className="w-8 h-[3px] bg-white rounded"
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            className="w-8 h-[3px] bg-white rounded"
            animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          />
        </button>
      </div>

      {/* Mobile Menu (Only visible when isOpen) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: "0%", opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="md:hidden fixed top-0 right-0 h-full w-2/3 bg-black bg-opacity-95 p-10 flex flex-col items-start space-y-6 shadow-lg"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-6 text-white text-2xl"
            >
              ✖
            </button>
            <Link href="/" className="text-xl text-white hover:text-pink-400 transition" onClick={() => setIsOpen(false)}>Home</Link>
            <Link href="/menu" className="text-xl text-white hover:text-pink-400 transition" onClick={() => setIsOpen(false)}>Menu</Link>
            <Link href="/cart" className="text-xl text-white hover:text-pink-400 transition flex items-center" onClick={() => setIsOpen(false)}>
              Cart
              <FaShoppingCart className="ml-2 text-pink-400" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-3 bg-pink-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
