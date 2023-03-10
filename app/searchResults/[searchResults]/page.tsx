import Movie from "../../components/movie";
import BackLink from "../../components/backButton";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Show from "../../components/show";
import Actor from "../../components/actor";
import { Search } from "../../components/search";
interface Props {
  params: any;
}

export default async function SearchResults({ params }: Props) {
  const data = await fetch(
    `https://api.themoviedb.org/3/search/multi?api_key=${process.env.API_KEY}&language=en-US&query=${params.searchResults}&page=1&include_adult=false`
  );
  const res = await data.json();

  return (
    <div>
      <Navbar />
      <BackLink />
      <Search />
      <div
        className={"grid container mx-auto gap-16 grid-cols-fluid mt-6 mb-6"}
      >
        {res.results
          .filter((data: any) => data.poster_path !== null)
          .map((data: any, index: number) => {
            const loadingType = index < 4 ? "eager" : "lazy";

            return (
              <>
                <div
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
                        loadingType={loadingType}
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
                        // loadingType={loadingType}
                      />
                    )}
                    {data.media_type === "person" && (
                      <Actor
                        media_type={data.media_type}
                        key={index}
                        id={data.id}
                        name={data.name}
                        profile_path={data.profile_path}
                        // loadingType={loadingType}
                      />
                    )}
                  </div>{" "}
                </div>
              </>
            );
          })}{" "}
      </div>
      <Footer />
    </div>
  );
}
