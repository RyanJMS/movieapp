import Movie from "../../components/movie";
import Back from "../../components/backButton";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Show from "../../components/show";
import Actor from "../../components/actor";
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
      <Back />
      <div className="grid container mx-auto gap-16 grid-cols-fluid mt-6 mb-6">
        {res.results.map((data: any) => {
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
          {
            data.media_type === "person" && (
              <Actor
                media_type={data.media_type}
                key={data.id}
                id={data.id}
                name={data.name}
                profile_path={data.profile_path}
              />
            );
          }
        })}
      </div>
      <Footer />
    </div>
  );
}
