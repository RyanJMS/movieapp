import Movie from "../components/movie";
import { MovieDetails } from "../interface";
export default async function Upcoming() {
  const data = await fetch(
    ` https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.API_KEY}&language=en-US&page=1`
  );
  const res = await data.json();

  return (
    <>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-8 mx-auto mt-6 mb-6">
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
                vote_average={movie.vote_average}
                original_language={movie.original_language}
                backdrop_path={movie.backdrop_path}
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
