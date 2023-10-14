import Movie from "../../components/movie";
import BackLink from "../../components/backButton";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Show from "../../components/show";

interface Props {
  params: {
    actor: string;
  };
}

interface MovieData {
  id: number;
  media_type: string;
  title: string;
  poster_path: string;
  release_date: string;
  first_air_date: string;
  vote_average: number;
  index: number;
  name: string;
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

  const sortByDate = (a: MovieData, b: MovieData): number => {
    const dateA = a.release_date || a.first_air_date || "";
    const dateB = b.release_date || b.first_air_date || "";
    return new Date(dateB).getTime() - new Date(dateA).getTime();
  };

  filmRes.cast.sort(sortByDate);

  return (
    <div>
      <Navbar />
      <h1 className="text-2xl sm:text-2xl xs:text-2xl mt-4 mb-4 text-center">
        {actorRes?.results[0].name}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-8 mx-auto mt-6 mb-6">
        {filmRes.cast.map((data: MovieData, index: number) => {
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
                      index={index}
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
                      index={index}
                      // loadingType={loadingType}
                    />
                  );
                }
              }
            }
          }
        })}
      </div>
      <Footer />
    </div>
  );
}
