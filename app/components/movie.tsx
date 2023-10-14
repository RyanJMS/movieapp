import Link from "next/link";
import Image from "next/image";
interface Movie {
  id: number;
  title: string;
  key: number;
  poster_path: string;
  release_date: string;
  media_type: string;
  vote_average: number;
  index: number;
  loadingType?: "eager" | "lazy";
}

const imagePath = "https://image.tmdb.org/t/p/original";

export default function Movie({
  id,
  title,
  poster_path,
  release_date,
  media_type,
  loadingType,
  vote_average,
  index,
}: Movie) {
  return (
    <div
      className="group text-center mx-4 hover:translate-y-[-15px] transition-transform duration-300 ease-in-out"
      key={index}
    >
      <div className="relative ">
        <div className="flex justify-center items-center ">
          <Link href={`/movie/${id}`}>
            <Image
              src={imagePath + poster_path}
              alt={title}
              width={400}
              height={500}
              style={{ width: "350px", height: "550px" }}
              priority
            />
          </Link>
        </div>
      </div>
      <Link href={`/movie/${id}`}>
        <div className="flex items-center justify-center mt-3">
          <h2 className="mr-5">
            {vote_average
              ? `⭐ ${Math.round(vote_average * 10) / 10}`
              : `Rate this ${media_type}`}
          </h2>
          <h2>{release_date ? `(${release_date.split("-")[0]})` : <br />}</h2>
        </div>
        <h1 className=" text-xl sm:text-2xl xs:text-2xl">{title}</h1>
      </Link>
    </div>
  );
}
