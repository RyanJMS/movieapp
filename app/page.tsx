import { Inter } from "@next/font/google";
import Movie from "./components/movie";
import "./globals.css";
import { Search } from "./components/search";
import Navbar from "./components/navbar";
const inter = Inter({ subsets: ["latin"] });

export default async function Home() {
  const data = await fetch(
    `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.API_KEY}`
  );
  const res = await data.json();

  return (
    <main className="main">
      <Navbar />
      <Search results={res} />
    </main>
  );
}
