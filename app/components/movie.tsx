import Link from "next/link";
import Image from "next/image";
interface Movie {
  id: number;
  title: string;
  key: number;
  poster_path: string;
  release_date: string;
  media_type: string;
}

const imagePath = "https://image.tmdb.org/t/p/original";

export default function Movie({
  id,
  title,
  poster_path,
  release_date,
  media_type,
}: Movie) {
  return (
    <div className="text-center mx-4 text-xl sm:text-2xl xs:text-2xl" key={id}>
      <h1 className="truncate mb-3 ">{title}</h1>
      <h2 className="mb-5">{release_date}</h2>
      <Link href={`/movie/${id}`}>
        <div
          style={{
            borderRadius: "10%",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <Image
            src={imagePath + poster_path}
            alt={title}
            quality={100}
            loading="lazy"
            width={400}
            height={450}
          />
        </div>
      </Link>
    </div>
  );
}
