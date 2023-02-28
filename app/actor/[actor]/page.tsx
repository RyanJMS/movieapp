import Movie from "../../components/movie";
import Back from "../../components/back";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Show from "../../components/show";
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
      <Navbar />
      <h1 className="text-2xl mt-4 mb-4 text-center">
        {actorRes?.results[0].name}
      </h1>
      <Back />
      <div className="grid container mx-auto gap-16 grid-cols-fluid mt-6 mb-6">
        {filmRes.cast.map((data: any) => {
          if (data.poster_path && data.name !== null) {
            {
              if (data.media_type === "movie") {
                return (
                  <Movie
                    media_type={data.media_type}
                    key={data.id}
                    id={data.id}
                    title={data.title}
                    poster_path={data.poster_path}
                    release_date={data.release_date}
                  />
                );
              }
            }
            {
              if (data.media_type === "tv") {
                return (
                  <Show
                    media_type={data.media_type}
                    key={data.id}
                    id={data.id}
                    name={data.name}
                    poster_path={data.poster_path}
                    first_air_date={data.first_air_date}
                  />
                );
              }
            }
          }
        })}
      </div>
      <Footer />
    </div>
  );
}
