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
    <div className="leading-10 mt-10 mb-10 mx-10 text-center">
      <h2 className="text-2xl">{res.title}</h2>
      <h2 className="text-lg">{res.release_date}</h2>
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
      <Image
        src={imagePath + res.backdrop_path}
        className="my-12 w-full"
        width={1000}
        height={1000}
        alt={res.title}
      />
      <p className="text-center">{res.overview}</p>
    </div>
  );
}
