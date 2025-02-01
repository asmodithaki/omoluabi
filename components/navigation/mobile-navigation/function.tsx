"use client";

import { useState } from "react";
import Link from "next/link";
import ResponsiveDropdown from "@/components/ui/Dropdown";

export default function MobileNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const aboutUsItems = ["Our Story", "Team"];
  const initiativesItems = ["Initiative 1", "Initiative 2"];

  const handleSelectAction = (item: string) => {
    console.log(`Selected: ${item}`);
  };

  return (
    <nav className="md:hidden flex flex-col bg-white shadow-md relative z-10 w-full">
      {/* Top Bar */}
      <div className="flex justify-between items-center px-4 py-3 bg-gray-950">
        <Link href="/" className="text-yellow-600 font-bold text-lg">
        Yoruba Ronu
        </Link>
        <button
          className="text-white text-2xl focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Dropdown Menu */}
      {isMenuOpen && (
        <div className="flex flex-col space-y-3 px-4 py-4 bg-white text-gray-800">
          {/* Dropdowns */}
          <ResponsiveDropdown
            items={aboutUsItems}
            onItemSelectAction={handleSelectAction}
            buttonLabel="About Us"
          />
          <ResponsiveDropdown
            items={initiativesItems}
            onItemSelectAction={handleSelectAction}
            buttonLabel="Yoruba Initiatives"
          />

          {/* Static Links */}
          <Link href="#" className="text-gray-800 hover:underline">
            BLOG
          </Link>
          <Link href="#" className="text-gray-800 hover:underline">
            YORUBA E-LIBRARY
          </Link>
          <Link href="#" className="text-gray-800 hover:underline">
            SHOP
          </Link>
          <Link href="#" className="text-gray-800 hover:underline">
            DONATE
          </Link>
          <Link href="#" className="text-gray-800 hover:underline">
            JOIN US
          </Link>

          {/* Login and Utility Section */}
          <div className="flex flex-col space-y-3 mt-4">
            <Link
              href="#"
              className="px-4 py-2 bg-yellow-500 text-white text-center rounded-md hover:bg-yellow-600"
            >
              Login
            </Link>
            <div className="text-gray-800 text-center">$0.00</div>
            <div className="flex justify-center space-x-4">
              <button
                aria-label="Cart"
                className="text-gray-800 hover:text-gray-600"
              >
                🛒
              </button>
              <button
                aria-label="Search"
                className="text-gray-800 hover:text-gray-600"
              >
                🔍
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
