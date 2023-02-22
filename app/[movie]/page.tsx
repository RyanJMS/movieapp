import Image from "next/image";

interface Params {
  params?: any;
  movie: string;
}

export default async function MovieDetail({ params }: Params) {
  const { movie } = params;
  const imagePath = "https://image.tmdb.org/t/p/original";
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`
  );
  const res = await data.json();
  console.log(res);
  return (
    <div className="leading-10 mt-10 mb-10 text-center w-full">
      <h2 className="text-2xl mb-4">{res.title}</h2>
      <h2 className="text-lg">Release Date: {res.release_date}</h2>
      <h2>Runtime: {res.runtime} minutes</h2>
      <h2
        className={
          res.status === "Released"
            ? `text-sm bg-green-600 inline-block my-2 px-2 rounded-md`
            : `text-sm bg-red-600 inline-block my-2 px-2 rounded-md`
        }
      >
        {res.status}
      </h2>
      <div className="flex justify-center max-w-500 mx-auto">
        {res.genres.map((genre: any) => {
          return (
            <h2 className=" p-2" key={genre.id}>
              {genre.name}
            </h2>
          );
        })}
      </div>
      <Image
        src={imagePath + res.backdrop_path}
        className="my-12 mx-auto p-2"
        width={1000}
        height={1000}
        alt={res.title}
      />
      <div className="container mx-auto p-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4">
            <h2 className="text-xl mb-4 text-left">Overview:</h2>
            <p className="text-lg text-left">{res.overview}</p>
          </div>
          <div className="p-4">
            <div className="grid grid-cols-1 fluid sm:grid-cols-1">
              <div>
                <h2 className="text-xl font-bold">Heading 1</h2>
              </div>
              <div>
                <h2 className="text-xl font-bold">Heading 2</h2>
              </div>
              <div>
                <h2 className="text-xl font-bold">Heading 3</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
