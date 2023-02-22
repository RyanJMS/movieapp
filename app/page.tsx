import Image from "next/image";
import { Inter } from "@next/font/google";
import Movie from "./components/movie";
import "./globals.css";
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
      <div className="grid gap-16 grid-cols-fluid mt-6">
        {res.results.map((movie: Props) => (
          <Movie
            key={movie.id}
            id={movie.id}
            title={movie.title}
            poster_path={movie.poster_path}
            release_date={movie.release_date}
          />
        ))}
      </div>
    </main>
  );
}
