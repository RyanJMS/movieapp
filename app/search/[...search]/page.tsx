import Movie from "../../components/movie";
import Show from "../../components/show";
import Actor from "../../components/actor";
import { Data, Props } from "../../interface/interface";
import Paginate from "../../components/paginate";

export default async function Search({ params }: Props) {
  const data = await fetch(
    `https://api.themoviedb.org/3/search/multi?api_key=${
      process.env.API_KEY
    }&query=${params.search[1]}&include_adult=false&language=en-US&page=${
      params.search[2] ?? 1
    }`
  );

  const res = await data.json();

  let filteredResults = res?.results?.filter((data: Data) => {
    if (Number(params.search[1]) >= 0) {
      return true;
    }
    if (data.popularity > 30) {
      return true;
    }
    return false;
  });

  return (
    <div>
      {res?.total_results === 0 && (
        <p className="text-2xl flex justify-center mt-20  items-center text-white">
          No Results Found...
        </p>
      )}
      <div
        className={
          filteredResults.length >= 4
            ? "grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 container mx-auto  mt-6 mb-6"
            : `flex justify-center`
        }
      >
        {filteredResults
          .sort((a: Data, b: Data) => b.popularity - a.popularity)
          .map((data: Data, index: number) => {
            return (
              <div key={index}>
                {data.release_date && (
                  <Movie
                    media_type={data.media_type}
                    id={data.id}
                    title={data.title}
                    poster_path={data.poster_path}
                    release_date={data.release_date}
                    vote_average={data.vote_average}
                    original_language={data.original_language}
                    backdrop_path={data.backdrop_path}
                    status={data.status}
                    name={data.name}
                  />
                )}
                {data.first_air_date && (
                  <Show
                    media_type={data.media_type}
                    id={data.id}
                    name={data.name}
                    poster_path={data.poster_path}
                    first_air_date={data.first_air_date}
                    vote_average={data.vote_average}
                  />
                )}
                {data.profile_path && (
                  <Actor
                    media_type={data.media_type}
                    id={data.id}
                    name={data.name}
                    profile_path={data.profile_path}
                    date_of_birth={data.date_of_birth}
                  />
                )}
              </div>
            );
          })}{" "}
      </div>

      <Paginate params={params} total_pages={res.total_pages} />
    </div>
  );
}
