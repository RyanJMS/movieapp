"use client";

import { FormEvent, useState, SyntheticEvent } from "react";
import { useRouter } from "next/navigation";

export function Search() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState("1");
  const router = useRouter();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (query.length > 3) {
      router.push(`/searchResults/${query}`);
    }
  };

  return (
    <>
      <form className="relative inline-block" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for movies, shows, or actors..."
          aria-label="Search for movies, shows, or actors..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="text-black text-center w-80 p-2 rounded-md"
        />
        <span className="absolute right-0 my-auto">🔍</span>
      </form>
    </>
  );
}
