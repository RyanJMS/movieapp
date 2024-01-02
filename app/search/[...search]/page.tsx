import Movie from "../../components/movie";
import Show from "../../components/show";
import Actor from "../../components/actor";
import { Data, Props } from "../../interface/interface";
import Paginate from "../../components/paginate";

export default async function Search({ params }: Props) {
  const data = await fetch(
    params.search[0] !== "movie" &&
      params.search[0] !== "tv" &&
      params.search[0] !== "person"
      ? `https://api.themoviedb.org/3/discover/movie/?api_key=${
          process.env.API_KEY
        }&with_genres=${params.search[1]}&page=${params.search[2] ?? 1}`
      : `https://api.themoviedb.org/3/search/${params.search[0]}?api_key=${
          process.env.API_KEY
        }&language=en-US&query=${params.search[1]}&page=${
          params.search[2] ?? 1
        }`
  );

  const res = await data.json();

  return (
    <div>
      {res?.total_results === 0 && (
        <p className="text-2xl flex justify-center mt-20  items-center text-white">
          No Results Found...
        </p>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-8 mx-auto mt-6 mb-6">
        {res?.results
          ?.filter((data: Data) => {
            if (Number(params.search[1]) >= 0) {
              return true;
            }
            if (
              data.poster_path !== null &&
              data.poster_path !== "" &&
              data.poster_path !== undefined &&
              params.search[0] === "movie" &&
              data.release_date !== "" &&
              data.original_language === "en"
            ) {
              return true;
            }
            if (
              data.poster_path !== null &&
              data.poster_path !== "" &&
              data.poster_path !== undefined &&
              params.search[0] === "tv"
            ) {
              return true;
            }

            if (
              data.profile_path !== null &&
              data.profile_path !== "" &&
              params.search[0] === "person"
            ) {
              return true;
            }
            return false;
          })
          .sort((a: Data, b: Data) => b.popularity - a.popularity)
          .map((data: Data, index: number) => {
            return (
              <>
                <div
                  key={index}
                  className={
                    res.total_results === 1
                      ? "flex flex-center justify-center"
                      : ""
                  }
                >
                  <div>
                    {data.release_date && (
                      <Movie
                        media_type={data.media_type}
                        key={index}
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
                        key={index}
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
                        key={index}
                        id={data.id}
                        name={data.name}
                        profile_path={data.profile_path}
                        date_of_birth={data.date_of_birth}
                      />
                    )}
                  </div>{" "}
                </div>
              </>
            );
          })}{" "}
      </div>

      <Paginate params={params} total_pages={res.total_pages} />
    </div>
  );
}
