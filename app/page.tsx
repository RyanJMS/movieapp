import Movie from "./components/movie";
import "./globals.css";
import Script from "next/script";
import { MovieDetails } from "./interface";
import { MainCarousel } from "./components/main-carousel";

export default async function Home() {
  const data = await fetch(
    `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.API_KEY}&sort_by=popularity.desc`
  );
  const res = await data.json();

  return (
    <>
      <div className="grid container sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  mx-auto  mt-6 mb-6">
        {res?.results?.map((movie: MovieDetails, index: number) => {
          if (movie.poster_path !== null) {
            return (
              <Movie
                media_type={movie.media_type}
                key={index}
                id={movie.id}
                title={movie.title}
                poster_path={movie.poster_path}
                release_date={movie.release_date}
                vote_average={movie.vote_average}
                original_language={movie.original_language}
                backdrop_path={movie.backdrop_path}
                status={movie.status}
                name={movie.name}
              />
            );
          }
        })}
      </div>
      {/* <MainCarousel data={res} /> */}
      <Script src="https://www.youtube.com/iframe_api" />
    </>
  );
}
