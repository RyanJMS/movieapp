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
      <form onSubmit={handleSubmit} className="mb-20">
        <input
          type="text submit"
          placeholder="Search for a movies, shows, or actors..."
          aria-label="Search for a movies, shows, or actors..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="text-black text-center mx-auto w-80 p-2  rounded-md flex flex-center"
        />
      </form>
    </>
  );
}
