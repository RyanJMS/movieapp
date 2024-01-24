import Link from "next/link";
import Image from "next/image";
import { CastDetails } from "../interface/interface";

const imagePath = "https://image.tmdb.org/t/p/w500";

export default function Cast({
  id,
  name,
  profile_path,
  character,
  date_of_birth,
}: // loadingType,
CastDetails) {
  return (
    <div className="group text-center mx-2 my-4   text-xl sm:text-2xl xs:text-2xl hover:translate-y-[-15px] transition-transform duration-300 ease-in-out">
      <div className="relative w-full h-auto">
        <div className="flex justify-center items-center h-full">
          <Link href={`/actor/${name}`}>
            <div
              style={{
                width: "250px",
                height: "350px",
              }}
            >
              <Image
                src={imagePath + profile_path}
                alt={name}
                width="0"
                height="0"
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
                priority
              />
            </div>
          </Link>
        </div>
      </div>
      <Link href={`/actor/${name}`}>
        <h1 className="mt-10 text-xl sm:text-2xl xs:text-2xl">{name}</h1>
      </Link>

      {character && <h2>{character}</h2>}
    </div>
  );
}
