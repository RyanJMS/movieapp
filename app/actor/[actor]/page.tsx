import Movie from "../../components/movie";
import Show from "../../components/show";
import { Props, Data } from "@/app/interface/interface";
import { getActorData } from "@/app/actions/actor-routes";

export default async function Actor({ params }: Props) {
  const res = await getActorData(params.actor);
  const [actorRes, sorted] = res;
  return (
    <div>
      <h1 className="text-2xl sm:text-2xl xs:text-2xl mt-4 mb-4 text-center">
        {actorRes?.results[0].name}
      </h1>
      <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 container mx-auto  mt-6 mb-6">
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
                      character={data.character}
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
                      character={data.character}
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
