"use client";

import { Genres, Genre } from "../interface";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function GenreTags({ genres }: Genres) {
  const [page, setPage] = useState(1);
  const router = useRouter();

  const handleClick = (event: React.MouseEvent, genre: Genre) => {
    event.preventDefault();

    router.push(`/genre/${genre.name.replace(" ", "-")}/${genre.id}/${page}`);
  };

  const handleMulti = (event: React.MouseEvent) => {
    event.preventDefault();

    let genreNames: string[] = []

    let genreID: string[] = []

    genres.forEach((genre) => genreNames.push(genre.name.replace(" ", "-")))

    genres.forEach((genre) => genreID.push(genre.id))

    let genreNameQuery = genreNames.join("-")

    let genreIDQuery = genreID.join("|")

    router.push(`/genre/${genreNameQuery}/${genreIDQuery.replaceAll('%7C', '|')}/${page}`);
  };

  return (
    <>
    <div className="flex justify-center max-w-500 mx-auto">
      <div>
        {genres.length > 1 && <button onClick={(event) => handleMulti(event)} className="hover:text-slate-400 p-2">All</button>}
      </div>
      <div>
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
    </div>
        </>
  );
}
