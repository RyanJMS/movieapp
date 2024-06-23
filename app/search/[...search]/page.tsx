import Movie from "../../components/movie";
import Show from "../../components/show";
import Actor from "../../components/actor";
import Paginate from "../../components/paginate";
import { getResults } from "@/app/actions/search-route";
import { Props, Data } from "@/app/interface";

export default async function Search({ params }: Props) {
  const res = await getResults(
    params.search[0],
    params.search[1],
    params.search[2]
  );

  return (
    <div>
      {res[0].length === 0 && (
        <p className="text-2xl flex justify-center mt-20  items-center text-white">
          No Results Found...
        </p>
      )}
      <div
        className={
          res[0].length >= 4
            ? "grid container sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  mx-auto  mt-6 mb-6"
            : `flex justify-center`
        }
      >
        {res[0]
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

      <Paginate params={params} total_pages={res[1]} />
    </div>
  );
}
