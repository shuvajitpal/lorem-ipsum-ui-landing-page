"use client";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Logo from "@/Buttons/Logo";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true); // Start visible at top
  const [isScrolled, setIsScrolled] = useState(false);
  const navLinks = Array.from({ length: 3 }, () => ({ text: 'Lorem ipsum' }));

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);
      // Hide navbar when scrolled down, show when at top
      setIsVisible(!scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = () => {
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    if (isScrolled) {
      setIsVisible(false);
    }
  };

  return (
    <>
      {isScrolled && (
        <div
          className="fixed top-0 left-0 w-full h-12 z-40 bg-transparent"
          onMouseEnter={handleMouseEnter}
        />
      )}
      <AnimatePresence>
        {isVisible && (
          <motion.nav
            className={`fixed w-full h-[60px] left-0 top-0 z-50 ${!isScrolled ? 'bg-transparent' : 'bg-white/25 backdrop-blur-md'} shadow-sm`}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <motion.div
              className="w-full h-full flex justify-between items-center px-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <Logo />
              <div className="flex items-center gap-8 font-medium">
                {navLinks.map((item, index) => (
                  <div
                    key={index}
                    className="link-primary flex items-center gap-0.5 hover:text-blue-600 transition-colors cursor-pointer"
                  >
                    {item.text}
                    <ChevronDown className="h-3 w-3 mt-1" />
                  </div>
                ))}
              </div>

              <motion.button
                className="px-5 py-1 bg-white text-gray-900 text-xs font-bold rounded-sm shadow-md hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Sign In
              </motion.button>
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}