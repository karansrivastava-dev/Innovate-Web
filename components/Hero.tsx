"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-cover bg-center pt-[80px]"
      style={{
        backgroundImage: "url('/images/hero.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0b1736]/80 via-black/40 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-10 md:px-8 min-h-[calc(100vh-80px)] flex items-center pt-16">

        <div className="max-w-[800px]">

          <motion.h1
  // initial={{ opacity: 0, y: 50 }}
  // animate={{ opacity: 1, y: 0 }}
  // transition={{ duration: 0.8 }}
  className="
    text-white
    font-bold
    
    max-w-[800px]
    text-[28px]
    md:text-[42px]
    lg:text-[52px]

    hero-h1
  "
>
Empowering Builders. Connecting Innovators.
</motion.h1>
          <p className="mt-8 text-gray-200 text-sm md:text-base max-w-2xl leading-relaxed">
            Empowering businesses and communities through
            innovation, collaboration and meaningful
            digital experiences.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <button className="bg-cyan-500 hover:bg-cyan-600 transition px-6 py-3 rounded-xl text-white font-medium">
              Join Community
            </button>

            <button className="border border-white hover:bg-white hover:text-black transition px-8 py-4 rounded-xl text-white font-medium">
              Explore Events
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}