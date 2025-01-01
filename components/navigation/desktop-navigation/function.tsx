"use client";

export default function DesktopNavbar() {
  return (
    <nav className="hidden md:flex justify-between items-center px-8 py-4 bg-white shadow-md">
      <div className="flex space-x-8 items-center">
        <a href="#" className="text-yellow-600 font-bold hover:underline">
          HOME
        </a>
        <div className="group relative">
          <a href="#" className="text-gray-800 hover:underline">
            ABOUT US
          </a>
          <div className="absolute hidden group-hover:block bg-white shadow-md rounded-md p-4">
            <a href="#" className="block text-sm text-gray-700 hover:text-yellow-600">
              Our Story
            </a>
            <a href="#" className="block text-sm text-gray-700 hover:text-yellow-600">
              Team
            </a>
          </div>
        </div>
        <div className="group relative">
          <a href="#" className="text-gray-800 hover:underline">
            INITIATIVES
          </a>
          <div className="absolute hidden group-hover:block bg-white shadow-md rounded-md p-4">
            <a href="#" className="block text-sm text-gray-700 hover:text-yellow-600">
              Initiative 1
            </a>
            <a href="#" className="block text-sm text-gray-700 hover:text-yellow-600">
              Initiative 2
            </a>
          </div>
        </div>
        <a href="#" className="text-gray-800 hover:underline">
          BLOG
        </a>
        <a href="#" className="text-gray-800 hover:underline">
          YORUBA E-LIBRARY
        </a>
        <a href="#" className="text-gray-800 hover:underline">
          SHOP
        </a>
        <a href="#" className="text-gray-800 hover:underline">
          DONATE
        </a>
        <a href="#" className="text-gray-800 hover:underline">
          JOIN US
        </a>
      </div>
      <div className="flex space-x-4 items-center">
        <a
          href="#"
          className="px-4 py-2 bg-yellow-500 text-white font-medium rounded-md hover:bg-yellow-600"
        >
          Login
        </a>
        <div className="text-gray-800">$0.00</div>
        <div className="flex space-x-2">
          <button className="text-gray-800">
            🛒
          </button>
          <button className="text-gray-800">
            🔍
          </button>
        </div>
      </div>
    </nav>
  );
}
