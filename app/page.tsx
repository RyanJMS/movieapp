import { Inter } from "@next/font/google";
import Movie from "./components/movie";
import "./globals.css";
import { Search } from "./components/search";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Script from "next/script";
const inter = Inter({ subsets: ["latin"] });

export default async function Home() {
  const data = await fetch(
    `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.API_KEY}`
  );
  const res = await data.json();

  return (
    <main className="main">
      <Navbar />
      <Search />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4 mx-auto mt-6 mb-6">
        {res?.results?.map((movie: any, index: number) => {
          const loadingType = index < 4 ? "eager" : "lazy";

          if (movie.poster_path !== null) {
            return (
              <Movie
                media_type={movie.media_type}
                key={movie.id}
                id={movie.id}
                title={movie.title}
                poster_path={movie.poster_path}
                release_date={movie.release_date}
                loadingType={loadingType}
                vote_average={movie.vote_average}
                index={index}
              />
            );
          }
        })}
      </div>
      <Script src="https://www.youtube.com/iframe_api" />
      <Footer />
    </main>
  );
}
