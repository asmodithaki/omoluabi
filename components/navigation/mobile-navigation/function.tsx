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
    <nav className="md:hidden flex flex-col bg-white shadow-md relative z-10">
      {/* Top Bar */}
      <div className="flex justify-between items-center px-4 py-2 bg-gray-950">
        <Link href="/" className="text-yellow-600 font-bold text-lg">
          HOME
        </Link>
        <button
          className="text-white text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Dropdown Menu */}
      {isMenuOpen && (
        <div className="flex flex-col space-y-2 px-4 py-4 bg-white text-gray-800">
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

          {/* Login and Utility */}
          <div className="flex flex-col space-y-2 mt-4">
            <Link
              href="#"
              className="px-4 py-2 bg-yellow-500 text-white text-center rounded-md hover:bg-yellow-600"
            >
              Login
            </Link>
            <div className="text-gray-800">$0.00</div>
            <div className="flex justify-center space-x-4">
              <button className="text-gray-800">🛒</button>
              <button className="text-gray-800">🔍</button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
