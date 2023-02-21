import Link from "next/link";
import Image from "next/image";

interface Movie {
  id: number;
  title: string;
  key: number;
  poster_path: string;
  release_date: string;
}

const imagePath = "https://image.tmdb.org/t/p/original";

export default function Movie({
  id,
  title,
  poster_path,
  key,
  release_date,
}: Movie) {
  return (
    <div key={id}>
      <h1>{title}</h1>
      <h2>{release_date}</h2>
      <Link href={`/asd`}>
        <Image
          src={imagePath + poster_path}
          alt={title}
          width={450}
          height={350}
        />
      </Link>
    </div>
  );
}
