import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header>
      <nav className="mt-4 mb-6 text-xl sm:text-2xl xs:text-2xl container flex flex-wrap items-center justify-between mx-auto">
        <Link
          className="item-center hover:bg-slate-500 rounded-md px-2"
          href={"/"}
        >
          Home
        </Link>
        <Link
          className="item-center  hover:bg-slate-500 rounded-md px-2"
          href={"/top-rated"}
        >
          Top Rated
        </Link>
        <Link
          className="item-center  hover:bg-slate-500 rounded-md px-2"
          href={"/upcoming"}
        >
          Upcoming
        </Link>
      </nav>
    </header>
  );
}
