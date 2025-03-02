"use client";

import { useState, useEffect } from "react";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-[url('/images/background.webp')] bg-cover bg-center"
        style={{
          transform: `translateY(${scrollY * 0.2}px)`,
          filter: "brightness(0.3)",
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-t from-gray-950 to-transparent"></div>

      <div className="container mx-auto px-4 z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-edo mb-6 text-white">
          <span className="neon-text-red flicker-slow">FEEL</span> THE{" "}
          <span className="neon-text-purple">THRILL</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Uncover the most terrifying horror content—if you dare.
        </p>
      </div>
    </section>
  );
};

export default Hero;
