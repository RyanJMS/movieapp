import Link from "next/link";
import Image from "next/image";

interface Cast {
  id: number;
  key: number;
  name: string;
  profile_path: string;
  media_type: string;
  character?: string;
  loadingType: "eager" | "lazy";
}

const imagePath = "https://image.tmdb.org/t/p/original";

export default function Cast({
  id,
  name,
  profile_path,
  character,
  loadingType,
}: Cast) {
  return (
    <div className="text-center container sm:text-2xl xs:text-2xl" key={id}>
      <h1 className="truncate mb-3">{name}</h1>
      {character && <h2 className="mb-5">{character}</h2>}
      <Link href={`/actor/${name}`}>
        <div
          style={{
            borderRadius: "10%",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <Image
            src={imagePath + profile_path}
            alt={name}
            loading={loadingType}
            width={400}
            height={450}
          />
        </div>
      </Link>
    </div>
  );
}
