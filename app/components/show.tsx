import Link from "next/link";
import Image from "next/image";

interface ShowProps {
  id: number;
  name: string;
  key: number;
  poster_path: string;
  release_date: string;
  media_type: string;
}

const imagePath = "https://image.tmdb.org/t/p/original";

export default function Show({
  id,
  name,
  poster_path,
  release_date,
  media_type,
}: ShowProps) {
  return (
    <div className="text-center mx-4 container" key={id}>
      <h1 className="truncate mb-3">{name}</h1>
      <h2 className="mb-5">{release_date}</h2>
      <Link href={`/show/${id}`}>
        <div
          style={{
            borderRadius: "10%",
            overflow: "hidden",
          }}
        >
          <Image
            src={imagePath + poster_path}
            alt={name}
            width={350}
            height={450}
            style={{ width: 400, height: 450 }}
            loading="lazy"
            placeholder="blur"
            blurDataURL={`https://image.tmdb.org/t/p/w92/${poster_path}`}
          />
        </div>
      </Link>
    </div>
  );
}
