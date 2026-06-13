"use client";

import Image from "next/image";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 px-2 md:px-4 pt-5">
      <div className="max-w-[1280px] mx-auto">

        <div className="bg-[#f3f3f5] rounded-[35px] px-6 md:px-10 h-[60px] flex items-center justify-between shadow-sm">

          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Innovate Web"
              width={170}
              height={45}
              priority
            />
          </div>

          {/* Center Menu */}
          <nav className="hidden md:flex items-center gap-10">

            <a
              href="#"
              className="text-[18px] font-medium text-teal-600 relative"
            >
              Home

              <span className="absolute left-0 -bottom-2 h-[3px] w-full bg-teal-500 rounded-full"></span>
            </a>

            <a
              href="#"
              className="text-[18px] text-gray-600 hover:text-black transition"
            >
              About
            </a>

            <a
              href="#"
              className="text-[18px] text-gray-600 hover:text-black transition"
            >
              Gallery
            </a>

            <a
              href="#"
              className="text-[18px] text-gray-600 hover:text-black transition"
            >
              Events
            </a>

          </nav>

          {/* Button */}
          <button className="bg-[#001845] text-white px-10 py-3 rounded-full font-medium shadow-lg">
            Join the Community
          </button>

        </div>

      </div>
    </header>
  );
}