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
    <div className="group text-center mx-4 mb-3  text-xl sm:text-2xl xs:text-2xl hover:translate-y-[-15px] transition-transform duration-300 ease-in-out">
      <div className="relative w-full h-auto">
        <div className="flex justify-center items-center h-full">
          <Link href={`/actor/${name}`}>
            <Image
              src={imagePath + profile_path}
              alt={name}
              width={400}
              height={500}
              style={{ width: "350px", height: "500px" }}
              priority
            />
          </Link>
        </div>
      </div>
      <Link href={`/actor/${name}`}>
        <h1 className="mt-3 text-xl sm:text-2xl xs:text-2xl">{name}</h1>
      </Link>

      {character && <h2>{character}</h2>}
    </div>
  );
}
