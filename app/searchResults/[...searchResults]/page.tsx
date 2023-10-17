import Movie from "../../components/movie";
import Footer from "../../components/footer";
import Show from "../../components/show";
import Actor from "../../components/actor";
import { Data, Props } from "@/app/interface/interface";
import Paginate from "@/app/components/paginate";

export default async function SearchResults({ params }: Props) {
  const data = await fetch(
    `https://api.themoviedb.org/3/search/multi?api_key=${
      process.env.API_KEY
    }&language=en-US&query=${
      params.searchResults[0] ?? params.searchResults
    }&page=${params.searchResults[2] ?? 1}`
  );
  console.log(
    `https://api.themoviedb.org/3/search/multi?api_key=${
      process.env.API_KEY
    }&language=en-US&query=${
      params.searchResults[0] ?? params.searchResults
    }&page=${params.searchResults[2] ?? 1}`
  );
  const res = await data.json();

  console.log({ params });

  console.log({ res });

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-8 mx-auto mt-6 mb-6">
        {res?.results
          .filter(
            (data: Data) =>
              data.poster_path !== null && data.profile_path !== null
          )
          .map((data: Data, index: number) => {
            const loadingType = index < 4 ? "eager" : "lazy";

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
                    {data.media_type === "movie" && (
                      <Movie
                        media_type={data.media_type}
                        key={index}
                        id={data.id}
                        title={data.title}
                        poster_path={data.poster_path}
                        release_date={data.release_date}
                        vote_average={data.vote_average}
                        index={index}
                      />
                    )}
                    {data.media_type === "tv" && (
                      <Show
                        media_type={data.media_type}
                        key={index}
                        id={data.id}
                        name={data.name}
                        poster_path={data.poster_path}
                        first_air_date={data.first_air_date}
                        vote_average={data.vote_average}
                        index={index}
                      />
                    )}
                    {data.media_type === "person" && (
                      <Actor
                        media_type={data.media_type}
                        key={index}
                        id={data.id}
                        name={data.name}
                        profile_path={data.profile_path}
                        date_of_birth={data.date_of_birth}
                        index={index}
                      />
                    )}
                  </div>{" "}
                </div>
              </>
            );
          })}{" "}
      </div>
      <Paginate params={params} />
      <Footer />
    </div>
  );
}
