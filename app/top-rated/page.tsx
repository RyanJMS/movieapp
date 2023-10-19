import Navbar from "../components/navbar";
import Movie from "../components/movie";
import Footer from "../components/footer";
import BackLink from "../components/back-button";
import { MovieDetails } from "../interface/interface";
export default async function TopRated() {
  const data = await fetch(
    ` https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.API_KEY}&language=en-US&page=1`
  );
  const res = await data.json();

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-8 mx-auto mt-6 mb-6">
        {res?.results?.map((movie: MovieDetails, index: number) => {
          // const loadingType = index < 5 ? "eager" : "lazy";

          if (res.poster_path !== null) {
            return (
              <Movie
                media_type={movie.media_type}
                key={index}
                id={movie.id}
                title={movie.title}
                poster_path={movie.poster_path}
                release_date={movie.release_date}
                index={index}
                vote_average={movie.vote_average}
                status={movie.status}
                name={movie.name}
                // loadingType={loadingType}
              />
            );
          }
        })}
      </div>
    </>
  );
}
