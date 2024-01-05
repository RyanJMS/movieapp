"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export function SearchBar() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [type, setType] = useState("movie");
  const router = useRouter();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (query !== "") {
      router.push(`/search/${type}/${query.trim()}/${page ?? 1}`);
    }
  };
  return (
    <>
      <form
        id="search-form"
        name="search-form"
        className="relative inline-block"
        onSubmit={handleSubmit}
      >
        <label htmlFor="search-bar" className="sr-only">
          Search for movies, shows, or actors
        </label>
        <input
          id="search-bar"
          type="search"
          placeholder="Search for movies, shows, or actors..."
          aria-label="Search for movies, shows, or actors"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="text-black text-center w-80 h-10 p-2 rounded-md"
        />
        <label htmlFor="media-type" className="sr-only">
          Select media type
        </label>
        <select
          id="media-type"
          className="text-black text-left w-30 h-10 p-2 ml-2 rounded-md"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="movie">Movie</option>
          <option value="tv">TV</option>
          <option value="person">Person</option>
        </select>
      </form>
    </>
  );
}
