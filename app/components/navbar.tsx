// import Link from "next/link";
// import Image from "next/image";

// export default function Navbar() {
//   return (
//     <header>
//       <nav className="mt-4 mb-6 text-xl sm:text-2xl xs:text-2xl container flex flex-wrap items-center justify-between mx-auto">
//         <Link
//           className="item-center hover:bg-slate-500 rounded-md px-2"
//           href={"/"}
//         >
//           Home
//         </Link>
//         <Link
//           className="item-center  hover:bg-slate-500 rounded-md px-2"
//           href={"/top-rated"}
//         >
//           Top Rated
//         </Link>
//         <Link
//           className="item-center  hover:bg-slate-500 rounded-md px-2"
//           href={"/upcoming"}
//         >
//           Upcoming
//         </Link>
//       </nav>
//     </header>
//   );
// }
"use client";

import { useState } from "react";
import Link from "next/link";
import { Search } from "./search";

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <nav className="bg-gray-900 py-3">
      <div className="justify-start  group ml-20 flex items-center">
        <Link
          className="text-white hover:text-slate-300 text-2xl font-semibold"
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
              <Link className="block p-2 hover:bg-blue-100" href="/top_rated">
                Top Rated
              </Link>
              <Link className="block p-2 hover:bg-blue-100" href="/upcoming">
                Upcoming
              </Link>
            </div>
          )}
        </div>
        <div className="flex justify-center ml-8">
          <Search />
        </div>
      </div>
    </nav>
  );
}
