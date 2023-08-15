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
    <Link href={`/show/${id}`}>
      <div
        className="group text-center mx-4 text-xl sm:text-2xl xs:text-2xl pb-12"
        key={id}
      >
        <h1 className="h-20">{name}</h1>
        <h2 className="mb-5">{first_air_date}</h2>

        <div className="relative w-full h-auto">
          <div className="flex justify-center items-center h-full">
            <Image
              src={imagePath + poster_path}
              alt={name}
              loading="lazy"
              width={400}
              height={600}
            />
          </div>
        </div>
      </div>
    </Link>
  );
}
