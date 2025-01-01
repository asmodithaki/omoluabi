"use client";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
      <div className="container mx-auto px-8">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-8 md:space-y-0">
          {/* Logo and Description */}
          <div>
            <h3 className="text-xl font-bold text-white">Yoruba Ronu</h3>
            <p className="mt-2 text-sm text-gray-400">
              Empowering communities through education, culture, and initiatives
              that drive positive change.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-8">
            <div>
              <h4 className="font-semibold text-white">Explore</h4>
              <ul className="space-y-2 mt-2">
                <li>
                  <a href="#" className="hover:underline">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Initiatives
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white">Quick Links</h4>
              <ul className="space-y-2 mt-2">
                <li>
                  <a href="#" className="hover:underline">
                    Yoruba E-Library
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Shop
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Donate
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Join Us
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Social Media Links */}
          <div>
            <h4 className="font-semibold text-white">Follow Us</h4>
            <div className="flex space-x-4 mt-2">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-300"
                aria-label="Facebook"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M22 12C22 6.477 17.523 2 12 2S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987H8.078v-2.89h2.36V9.828c0-2.338 1.393-3.637 3.523-3.637.996 0 2.037.176 2.037.176v2.235h-1.147c-1.131 0-1.482.703-1.482 1.423v1.708h2.52l-.403 2.889h-2.116v6.988C18.343 21.129 22 16.991 22 12z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-300"
                aria-label="Twitter"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.155 11.675-11.496 0-.175 0-.349-.012-.522A8.315 8.315 0 0 0 22 5.92a8.19 8.19 0 0 1-2.357.641 4.107 4.107 0 0 0 1.804-2.252 8.273 8.273 0 0 1-2.606.981 4.104 4.104 0 0 0-6.993 3.743A11.65 11.65 0 0 1 3.22 4.868a4.102 4.102 0 0 0 1.27 5.469 4.073 4.073 0 0 1-1.858-.507v.05a4.108 4.108 0 0 0 3.292 4.022 4.098 4.098 0 0 1-1.852.07 4.107 4.107 0 0 0 3.833 2.847A8.23 8.23 0 0 1 2 18.408a11.616 11.616 0 0 0 6.29 1.825" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-300"
                aria-label="Instagram"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7.75 2A5.75 5.75 0 0 0 2 7.75v8.5A5.75 5.75 0 0 0 7.75 22h8.5A5.75 5.75 0 0 0 22 16.25v-8.5A5.75 5.75 0 0 0 16.25 2h-8.5zM12 7.5a4.5 4.5 0 1 1-4.5 4.5A4.5 4.5 0 0 1 12 7.5zm0 1.5a3 3 0 1 0 3 3 3 3 0 0 0-3-3zm5-1.25a1 1 0 1 1-1-1 1 1 0 0 1 1 1z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Yoruba Ronu. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
