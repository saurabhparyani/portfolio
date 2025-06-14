"use client";

import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa6";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    setMounted(true);

    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Prevent hydration mismatch
  if (!mounted || !isVisible) {
    return null;
  }

  return (
    <button
      className="fixed bottom-20 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-slate-400 border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950 z-50"
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <FaArrowUp />
    </button>
  );
}
