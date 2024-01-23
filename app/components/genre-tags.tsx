"use client";

import { Genres, Genre } from "../interface/interface";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function GenreTags({ genres }: Genres) {
  const [page, setPage] = useState(1);
  const router = useRouter();

  const handleClick = (event: React.MouseEvent, genre: Genre) => {
    event.preventDefault();

    router.push(`/genre/${genre.name.replace(" ", "-")}/${genre.id}/${page}`);
  };

  return (
    <div className="flex justify-center max-w-500 mx-auto">
      {genres !== undefined &&
        genres.map((genre: Genre, index: number) => (
          <button
            className="hover:text-slate-400 p-2"
            key={index}
            onClick={(event) => handleClick(event, genre)}
          >
            {genre?.name}
          </button>
        ))}
    </div>
  );
}
