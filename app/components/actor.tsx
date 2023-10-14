import Link from "next/link";
import Image from "next/image";

interface Cast {
  id: number;
  key: number;
  name: string;
  profile_path: string;
  media_type: string;
  character?: string;
  date_of_birth?: string;
  index: number;
  // loadingType: "eager" | "lazy";
}

const imagePath = "https://image.tmdb.org/t/p/original";

export default function Cast({
  id,
  name,
  profile_path,
  character,
  date_of_birth,
  index,
}: // loadingType,
Cast) {
  return (
    <div
      className="group text-center mx-4 mb-3  text-xl sm:text-2xl xs:text-2xl hover:translate-y-[-15px] transition-transform duration-300 ease-in-out"
      key={index}
    >
      <div className="relative w-full h-auto">
        <div className="flex justify-center items-center h-full">
          <Link href={`/actor/${name}`}>
            <Image
              src={imagePath + profile_path}
              alt={name}
              width={400}
              height={500}
              style={{ width: "350px", height: "550px" }}
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
