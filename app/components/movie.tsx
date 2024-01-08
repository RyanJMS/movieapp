import Link from "next/link";
import Image from "next/image";
import { MovieDetails } from "../interface/interface";

const imagePath = "https://image.tmdb.org/t/p/original";
const base64 = "https://image.tmdb.org/t/p/w500";

export default function Movie({
  id,
  title,
  poster_path,
  release_date,
  vote_average,
  backdrop_path,
}: MovieDetails) {
  return (
    <div
      className="group text-center mx-4 my-10 hover:translate-y-[-15px] transition-transform duration-300 ease-in-out"
      style={{ width: "300px", height: "500px" }}
    >
      <div className="relative pb-12">
        <div className="flex justify-center items-center ">
          <Link href={`/movie/${id}`}>
            <div
              style={{
                width: "300px",
                height: "400px",
              }}
            >
              <Image
                src={
                  poster_path !== null &&
                  poster_path !== undefined &&
                  poster_path !== ""
                    ? imagePath + poster_path
                    : imagePath + backdrop_path
                }
                alt={title}
                width="0"
                height="0"
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
                // style={{ width: "350px", height: "550px" }}
                priority
                // placeholder="blur"
                // blurDataURL={base64 + poster_path}
              />
            </div>
          </Link>
        </div>
      </div>
      <Link href={`/movie/${id}`}>
        <div className="flex items-center justify-center mt-3">
          <h2 className="mr-5">
            {vote_average
              ? `⭐ ${Math.round(vote_average * 10) / 10}`
              : `Rate ${title}`}
          </h2>
          <h2>{release_date ? `(${release_date.split("-")[0]})` : <br />}</h2>
        </div>
        <h1 className=" text-xl sm:text-2xl xs:text-2xl">{title}</h1>
      </Link>
    </div>
  );
}
