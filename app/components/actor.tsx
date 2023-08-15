import Link from "next/link";
import Image from "next/image";

interface Cast {
  id: number;
  key: number;
  name: string;
  profile_path: string;
  media_type: string;
  character?: string;
  // loadingType: "eager" | "lazy";
}

const imagePath = "https://image.tmdb.org/t/p/original";

export default function Cast({
  id,
  name,
  profile_path,
  character,
}: // loadingType,
Cast) {
  return (
    <div
      className="group text-center mx-4 text-xl sm:text-2xl xs:text-2xl pb-12"
      key={id}
    >
      <h1 className="h-12 mb-3">{name}</h1>
      {character && <h2 className="h-20">{character}</h2>}
      <Link href={`/actor/${name}`}>
        <div className="relative w-full h-auto">
          <div className="flex justify-center items-center h-full">
            <Image
              src={imagePath + profile_path}
              alt={name}
              loading={"lazy"}
              width={400}
              height={600}
            />
          </div>
        </div>
      </Link>
    </div>
  );
}
