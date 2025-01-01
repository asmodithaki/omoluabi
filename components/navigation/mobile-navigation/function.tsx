"use client";

import { useState } from "react";

export default function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="md:hidden bg-white shadow-md">
      <div className="flex justify-between items-center px-4 py-2">
        <a href="#" className="text-yellow-600 font-bold">
          HOME
        </a>
        <button
          onClick={toggleMenu}
          className="text-gray-800 focus:outline-none"
        >
          ☰
        </button>
      </div>
      {isOpen && (
        <div className="bg-white shadow-md">
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
          >
            ABOUT US
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
          >
            INITIATIVES
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
          >
            BLOG
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
          >
            YORUBA E-LIBRARY
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
          >
            SHOP
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
          >
            DONATE
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
          >
            JOIN US
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-yellow-500 bg-gray-100 rounded-md text-center mx-4 my-2"
          >
            Login
          </a>
        </div>
      )}
    </nav>
  );
}
