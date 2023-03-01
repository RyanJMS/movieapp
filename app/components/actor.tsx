import Link from "next/link";
import Image from "next/image";

interface Cast {
  id: number;
  key: number;
  name: string;
  profile_path: string;
  media_type: string;
  character?: string;
}

const imagePath = "https://image.tmdb.org/t/p/original";

export default function Cast({ id, name, profile_path, character }: Cast) {
  return (
    <div className="text-center container" key={id}>
      <h1 className="truncate mb-3">{name}</h1>
      {character && <h2 className="mb-5">{character}</h2>}
      <Link href={`/actor/${name}`}>
        <Image
          src={imagePath + profile_path}
          alt={name}
          width={400}
          height={450}
          style={{
            width: 350,
            height: 450,
            borderRadius: "10%",
            overflow: "hidden",
          }}
          loading="eager"
          placeholder="blur"
          blurDataURL={`https://image.tmdb.org/t/p/w92/${profile_path}`}
        />
      </Link>
    </div>
  );
}
