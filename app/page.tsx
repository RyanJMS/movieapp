import { Inter } from "@next/font/google";
import Movie from "./components/movie";
import "./globals.css";
import { Search } from "./components/search";
const inter = Inter({ subsets: ["latin"] });

interface Props {
  title: string;
  id: number;
  poster_path: string;
  release_date: string;
}

export default async function Home() {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
  );
  const res = await data.json();

  return (
    <main className="main">
      <Search results={res} />
    </main>
  );
}
