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
    <nav className="hidden md:flex justify-between items-center px-8 py-4 bg-gray-950 shadow-md relative z-10">
      <div className="flex space-x-8 items-center">
        <Link href="/" className="text-yellow-600 font-bold hover:underline">
          home
        </Link>

        <ResponsiveDropdown
          items={aboutUsItems}
          onItemSelectAction={handleSelectAction} 
          buttonLabel="About us"
        />
        <ResponsiveDropdown
          items={initiativesItems}
          onItemSelectAction={handleSelectAction}
          buttonLabel="Initiatives"
        />

        <Link href="#" className="text-gray-800 dark:text-white hover:underline">
          blog
        </Link>
        <Link href="#" className="text-gray-800 dark:text-white hover:underline">
          yoruba e-library
        </Link>
        <Link href="#" className="text-gray-800 dark:text-white hover:underline">
          shop
        </Link>
        <Link href="#" className="text-gray-800 dark:text-white hover:underline">
          donate
        </Link>
        <Link href="#" className="text-gray-800 dark:text-white hover:underline">
          join us
        </Link>
      </div>

      <div className="flex space-x-4 items-center">
        <Link
          href="#"
          className="px-4 py-2 bg-yellow-500 text-white font-medium rounded-md hover:bg-yellow-600"
        >
          login
        </Link>
        <div className="text-gray-800 dark:text-white">$0.00</div>
        <div className="flex space-x-2">
          <button className="text-gray-800 dark:text-white">
            🛒
          </button>
          <button className="text-gray-800 dark:text-white">
            🔍
          </button>
        </div>
      </div>
    </nav>
  );
}
