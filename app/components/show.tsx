import Link from "next/link";
import Image from "next/image";

interface ShowProps {
  id: number;
  name: string;
  key: number;
  poster_path: string;
  media_type: string;
  first_air_date: string;
  // loadingType: "eager" | "lazy";
}

const imagePath = "https://image.tmdb.org/t/p/original";

export default function Show({
  id,
  name,
  poster_path,
  media_type,
  first_air_date,
}: // loadingType,
ShowProps) {
  return (
    <div
      className="text-center mx-4 sm:text-2xl xs:text-2xl container"
      key={id}
    >
      <h1 className="truncate mb-3">{name}</h1>
      <h2 className="mb-5">{first_air_date}</h2>
      <Link href={`/show/${id}`}>
        <div
          style={{
            borderRadius: "10%",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <Image
            src={imagePath + poster_path}
            alt={name}
            loading="lazy"
            width={500}
            height={500}
          />
        </div>
      </Link>
    </div>
  );
}
