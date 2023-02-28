import Navbar from "../components/navbar";
import Movie from "../components/movie";
import Footer from "../components/footer";

export default async function Upcoming() {
  const data = await fetch(
    ` https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.API_KEY}&language=en-US&page=1`
  );
  const res = await data.json();

  return (
    <>
      <Navbar />
      <div className="grid gap-16 grid-cols-fluid mt-6 mb-6">
        {res.results.map((movie: any) => {
          if (res.poster_path !== null) {
            return (
              <Movie
                media_type={movie.media_type}
                key={movie.id}
                id={movie.id}
                title={movie.title}
                poster_path={movie.poster_path}
                release_date={movie.release_date}
              />
            );
          }
        })}
      </div>
      <Footer />
    </>
  );
}
