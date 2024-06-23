import Link from "next/link";
import Image from "next/image";
import { ShowDetails } from "../interface";

const imagePath = "https://image.tmdb.org/t/p/w500";

export default function Show({
  id,
  name,
  poster_path,
  media_type,
  first_air_date,
  vote_average,
  character,
}: // loadingType,
ShowDetails) {
  return (
    <div
      className="group text-center  my-10 hover:translate-y-[-15px] transition-transform duration-300 ease-in-out"
      style={{ width: "300px", height: "500px" }}
    >
      <div className="relative pb-12">
        <div className="relative flex justify-center items-center">
          <Link href={`/show/${id}`}>
            <div
              style={{
                width: "250px",
                height: "350px",
              }}
            >
              <Image
                src={imagePath + poster_path}
                alt={name}
                width="0"
                height="0"
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
                // style={{ width: "350px", height: "550px" }}
                priority
              />
            </div>
          </Link>
        </div>
      </div>
      <Link href={`/show/${id}`}>
        <div className="flex items-center justify-center mt-3">
          <h2 className="mr-5">
            {vote_average
              ? `⭐ ${Math.round(vote_average * 10) / 10}`
              : `0 Ratings Yet`}
          </h2>
          <h2>{first_air_date ? first_air_date : <br />}</h2>
        </div>
        <h1 className="text-xl sm:text-2xl xs:text-2xl">{name}</h1>
      </Link>
      {character && <p>({character})</p>}
    </div>
  );
}
