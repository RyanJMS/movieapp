"use client";

import { useState } from "react";
import Link from "next/link";
import { SearchBar } from "./search-bar";

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav
      onMouseLeave={() => setIsDropdownOpen(false)}
      className="bg-gray-900 pt-3 mb-20"
    >
      <div className="justify-between container group  flex items-center">
        <Link
          onMouseEnter={() => setIsDropdownOpen(false)}
          className=" ml-10 text-white hover:text-slate-300 text-2xl font-semibold"
          href="/"
        >
          Movie App
        </Link>

        <button
          onClick={toggleDropdown}
          className="text-white hover:text-slate-300 pl-6 text-2xl font-semibold"
        >
          ⬇️ Menu
        </button>
        <div className="relative group inline-block">
          {isDropdownOpen && (
            <div className="absolute z-10 mt-8 transform -translate-x-1/2 left-1/2 w-48 p-2 bg-white text-gray-700 border border-gray-300 rounded-lg shadow-lg">
              <Link className="block p-2 hover:bg-blue-100" href="/">
                Home
              </Link>
              <Link className="block p-2 hover:bg-blue-100" href="/top-rated">
                Top Rated
              </Link>
              <Link className="block p-2 hover:bg-blue-100" href="/trending">
                Trending
              </Link>
            </div>
          )}
        </div>
        <div className="flex  justify-center flex-grow">
          <SearchBar />
        </div>
      </div>
    </nav>
  );
}
