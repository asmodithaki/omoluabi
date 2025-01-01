"use client";

import React from "react";
import Link from "next/link";

const Topbar = () => {
  return (
    <div className="bg-gray-900 text-white py-2 px-4 md:px-8 lg:px-16 xl:px-24 flex justify-between items-center text-sm">
      {/* Left Section */}
      <div className="flex items-center space-x-4">
        <span className="font-medium">
          <Link href="/" aria-label="Go to Home">
            Yoruba Ronu
          </Link>
        </span>
        <span className="hidden md:inline">Empowering Minds, Inspiring Change</span>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-4">
        <Link
          href="/faq"
          className="hover:text-purple-400 transition-colors duration-200"
        >
          FAQ
        </Link>
        <Link
          href="/support"
          className="hover:text-purple-400 transition-colors duration-200"
        >
          Support
        </Link>
        <span>
          <Link
            href="/contact"
            className="hover:text-purple-400 transition-colors duration-200"
          >
            Contact Us
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Topbar;
