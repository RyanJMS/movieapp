import Movie from "../../components/movie";
import Show from "@/app/components/show";
import { Data, Props } from "../../interface";
import Paginate from "../../components/paginate";
import { getGenreData } from "@/app/actions/genre-routes";

export default async function Genre({ params }: Props) {
  const res = await getGenreData(params.genre[1], params.genre[2]);

  return (
    <div>
      {res?.total_results === 0 && (
        <p className="text-2xl flex justify-center mt-20  items-center text-white">
          No Results Found...
        </p>
      )}
      <>
        <h1 className="text-4xl text-center my-6">{params.genre[0].replaceAll("-", " ")}</h1>
        <div className="grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 container mx-auto  mt-6 mb-6">
          {res?.results
            ?.filter((data: Data) => {
              if (Number(params.genre[1]) >= 0) {
                return true;
              }
              if (
                data.poster_path !== null &&
                data.poster_path !== "" &&
                data.poster_path !== undefined &&
                data.release_date !== "" &&
                data.original_language === "en"
              ) {
                return true;
              }
              if (
                data.poster_path !== null &&
                data.poster_path !== "" &&
                data.poster_path !== undefined
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
                      res.total_results <= 4
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
                    </div>{" "}
                  </div>
                </>
              );
            })}{" "}
        </div>

        <Paginate params={params} total_pages={res.total_pages} />
      </>
    </div>
  );
}
