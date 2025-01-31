"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaInstagram, FaTwitter, FaFacebook, FaArrowUp } from "react-icons/fa";
import { useEffect, useState } from "react";

const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);

  // Show "Back to Top" button on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.footer
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="bg-black text-white text-center py-8"
    >
      {/* Footer Content */}
      <div className="max-w-6xl mx-auto px-6">
        {/* Navigation Links */}
        <div className="flex justify-center space-x-6 mb-4 text-pink-400">
          <Link href="/" className="hover:text-pink-300 transition">Home</Link>
          <Link href="/menu" className="hover:text-pink-300 transition">Menu</Link>
          <Link href="/cart" className="hover:text-pink-300 transition">Cart</Link>
          <Link href="/contact" className="hover:text-pink-300 transition">Contact</Link>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6 text-2xl text-white mb-4">
          <a href="#" className="hover:text-pink-400 transition"><FaInstagram /></a>
          <a href="#" className="hover:text-pink-400 transition"><FaTwitter /></a>
          <a href="#" className="hover:text-pink-400 transition"><FaFacebook /></a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} DonutVerse. Made with ❤️ and 🍩.
        </p>
      </div>

      {/* Back to Top Button */}
      {showScroll && (
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="fixed bottom-6 right-6 bg-pink-500 text-white p-3 rounded-full shadow-lg hover:bg-pink-400 transition"
        >
          <FaArrowUp />
        </motion.button>
      )}
    </motion.footer>
  );
};

export default Footer;
