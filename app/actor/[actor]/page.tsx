import Link from "next/link";
import Cast from "../../components/cast";
import Movie from "../../components/movie";
import Back from "../../components/back";

interface Props {
  params: any;
}

export default async function Actor({ params }: Props) {
  const actorData = await fetch(
    `http://api.tmdb.org/3/search/person?api_key=${process.env.API_KEY}&query=${params.actor}`
  );

  const actorRes = await actorData.json();

  const filmData = await fetch(
    `https://api.themoviedb.org/3/person/${actorRes.results[0].id}/combined_credits?api_key=${process.env.API_KEY}
    `
  );
  const filmRes = await filmData.json();

  return (
    <div>
      <h1 className="text-2xl mt-4 mb-4 text-center">
        {actorRes?.results[0].name}
      </h1>
      <Back />
      <div className="grid gap-16 grid-cols-fluid mt-6">
        {filmRes.cast.map((movie: any) => {
          if (movie.poster_path !== null) {
            return (
              <Movie
                key={movie.id}
                id={movie.id}
                title={movie.title}
                poster_path={movie.poster_path}
                release_date={movie.release_date}
              />
            );
          }
        })}
      </div>
    </div>
  );
}
