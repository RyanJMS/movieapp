import Movie from "../../components/movie";

import Show from "../../components/show";
import { ActorDetails, Data } from "@/app/interface/interface";

interface Props {
  params: {
    actor: string;
  };
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

  const sorted = filmRes?.cast?.sort(
    (a: Data, b: Data) => b.popularity - a.popularity
  );

  return (
    <div>
      <h1 className="text-2xl sm:text-2xl xs:text-2xl mt-4 mb-4 text-center">
        {actorRes?.results[0].name}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-8 mx-auto mt-6 mb-6">
        {sorted?.map((data: Data, index: number) => {
          // const loadingType = index < 6 ? "eager" : "lazy";
          {
            if (data.poster_path && data.name !== null) {
              {
                if (data.media_type === "movie") {
                  return (
                    <Movie
                      media_type={data.media_type}
                      key={index}
                      id={data.id}
                      title={data.title}
                      poster_path={data.poster_path}
                      release_date={data.release_date}
                      vote_average={data.vote_average}
                      backdrop_path={data.backdrop_path}
                      original_language={data.original_language}
                      status={data.status}
                      name={data.name}
                      // loadingType={loadingType}
                    />
                  );
                }
              }
              {
                if (data.media_type === "tv") {
                  return (
                    <Show
                      media_type={data.media_type}
                      key={index}
                      id={data.id}
                      name={data.name}
                      poster_path={data.poster_path}
                      first_air_date={data.first_air_date}
                      vote_average={data.vote_average}
                      // loadingType={loadingType}
                    />
                  );
                }
              }
            }
          }
        })}
      </div>
    </div>
  );
}
