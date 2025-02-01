"use client";

import Link from "next/link";
import ResponsiveDropdown from "@/components/ui/Dropdown";

export default function DesktopNavbar() {
  const aboutUsItems = ["Our Story", "Team"];
  const initiativesItems = ["Initiative 1", "Initiative 2"];

  const handleSelectAction = (item: string) => {
    console.log(`Selected: ${item}`);
  };

  return (
    <nav className="hidden md:flex justify-between items-center px-4 lg:px-8 py-3 bg-gray-950 shadow-md relative z-10">
      {/* Left Navigation Links */}
      <div className="flex space-x-6 lg:space-x-8 items-center">
        <Link href="/" className="text-yellow-600 font-bold hover:underline">
         Yoruba Ronu
        </Link>

        {/* Dropdowns */}
        <ResponsiveDropdown
          items={aboutUsItems}
          onItemSelectAction={handleSelectAction}
          buttonLabel="about"
        />
        <ResponsiveDropdown
          items={initiativesItems}
          onItemSelectAction={handleSelectAction}
          buttonLabel="initiatives"
        />

        {/* Shortened Static Links */}
        <Link href="#" className="text-gray-300 hover:underline">
          blog
        </Link>
        <Link href="#" className="text-gray-300 hover:underline">
          e-library
        </Link>
        <Link href="#" className="text-gray-300 hover:underline">
          donate
        </Link>
        <Link href="#" className="text-gray-300 hover:underline">
          shop
        </Link>
        <Link href="#" className="text-gray-300 hover:underline">
          join
        </Link>
      </div>

      {/* Right Navigation Links */}
      <div className="flex space-x-4 items-center">
        {/* Login Button */}
        <Link
          href="#"
          className="px-4 py-2 bg-yellow-500 text-white font-medium rounded-md hover:bg-yellow-600"
        >
          login
        </Link>
        <div className="flex space-x-2">
          <button className="text-gray-300 hover:text-gray-400">
            🛒
          </button>
         
        </div>
      </div>
    </nav>
  );
}
