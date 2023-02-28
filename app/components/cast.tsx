import Link from "next/link";
import Image from "next/image";

interface Cast {
  id: number;
  key: number;
  name: string;
  profile_path: string;
  character: string;
}

const imagePath = "https://image.tmdb.org/t/p/original";

export default function Cast({ id, name, profile_path, character }: Cast) {
  return (
    <div className="text-center mx-4 container" key={id}>
      <Link href={`/actor/${name}`}>
        <div
          style={{
            borderRadius: "10%",
            overflow: "hidden",
          }}
        >
          <Image
            src={imagePath + profile_path}
            alt={name}
            width={350}
            height={450}
            style={{ width: 400, height: 450 }}
            loading="lazy"
            placeholder="blur"
            blurDataURL={`https://image.tmdb.org/t/p/w92/${profile_path}`}
          />
        </div>
      </Link>
      <h1 className="truncate mb-3">{name}</h1>
      <h2 className="mb-5">{character}</h2>
    </div>
  );
}
