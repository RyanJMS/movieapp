import Link from "next/link";
import Image from "next/image";
import { ShowDetails } from "../interface/interface";

const imagePath = "https://image.tmdb.org/t/p/original";

export default function Show({
  id,
  name,
  poster_path,
  media_type,
  first_air_date,
  vote_average,
  index,
}: // loadingType,
ShowDetails) {
  return (
    <div className="group text-center mx-4 mb-4 text-xl sm:text-2xl xs:text-2xl hover:translate-y-[-15px] transition-transform duration-300 ease-in-out">
      <div className="relative">
        <div className="relative flex justify-center items-center">
          <Link href={`/show/${id}`}>
            <Image
              src={imagePath + poster_path}
              alt={name}
              width={400}
              height={500}
              style={{ width: "350px", height: "550px" }}
              priority
            />
          </Link>
        </div>
      </div>
      <Link href={`/show/${id}`}>
        <div className="flex items-center justify-center mt-3">
          <h2 className="mr-5">
            {vote_average
              ? `⭐ ${Math.round(vote_average * 10) / 10}`
              : `Rate this ${name}`}
          </h2>
          <h2>{first_air_date ? first_air_date : <br />}</h2>
        </div>
        <h1 className="text-xl sm:text-2xl xs:text-2xl">{name}</h1>
      </Link>
    </div>
  );
}
