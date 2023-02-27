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

export default function Movie({ id, title, poster_path, release_date }: Movie) {
  return (
    <div className="text-center mx-4 container" key={id}>
      <h1 className="truncate mb-3">{title}</h1>
      <h2 className="mb-5">{release_date}</h2>
      <Link href={`/${id}`}>
        <Image
          src={imagePath + poster_path}
          alt={title}
          width={350}
          height={450}
          style={{ width: 400, height: 450 }}
        />
      </Link>
    </div>
  );
}
