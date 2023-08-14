import Navbar from "../components/navbar";
import Movie from "../components/movie";
import Footer from "../components/footer";
import BackLink from "../components/backButton";
export default async function Upcoming() {
  const data = await fetch(
    ` https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.API_KEY}&language=en-US&page=1`
  );
  const res = await data.json();

  return (
    <>
      <Navbar />
      <BackLink />
      <div className="grid px-8 mx-auto gap-4 lg:grid-cols-4 md:grid-cols-2 mt-6 mb-6">
        {res?.results?.map((movie: any, index: number) => {
          // const loadingType = index < 5 ? "eager" : "lazy";

          if (res.poster_path !== null) {
            return (
              <Movie
                media_type={movie.media_type}
                key={index}
                id={movie.id}
                title={movie.title}
                poster_path={movie.poster_path}
                release_date={movie.release_date}
                // loadingType={loadingType}
              />
            );
          }
        })}
      </div>
      <Footer />
    </>
  );
}
