"use client";

import Movie from "../components/movie";

import { useState, useEffect } from "react";

type SearchResult = {
  results: [
    id: number,
    title: string,
    poster_path: string,
    release_date: string
  ];
  total_results: number;
  total_pages?: number;

  page?: number;
};

export function Search({ results }: any) {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResult>();
  const [popular, setPopular] = useState<SearchResult>();
  const handleSearch = async () => {
    if (query !== null || query !== undefined || query !== "") {
      const data = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
      );
      const res = await data.json();
      setSearchResults(res);
    }
  };

  useEffect(() => {
    if (results !== undefined) {
      setPopular(results);
    }
  }, []);

  return (
    <>
      <input
        aria-label="Search for movies"
        id="search"
        type="text"
        value={query}
        placeholder="Search for a movie"
        onChange={(e) => {
          setQuery(e.target.value);
        }}
        className="mt-4 rounded-md mx-auto flex text-center justify-center text-black"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            handleSearch();
          }
        }}
      />
      {searchResults ? (
        <div className="grid container mx-auto gap-16 grid-cols-fluid mt-6">
          {searchResults?.results.map((movie: any) => {
            return (
              <>
                <div>
                  <Movie
                    media_type={movie.media_type}
                    key={movie.id}
                    id={movie.id}
                    title={movie.title}
                    poster_path={movie.poster_path}
                    release_date={movie.release_date}
                  />
                </div>
              </>
            );
          })}
        </div>
      ) : (
        <div className="grid gap-16 container mx-auto grid-cols-fluid mt-6 mb-6">
          {popular?.results.map((movie: any) => {
            if (movie.poster_path !== null) {
              return (
                <Movie
                  media_type={movie.media_type}
                  key={movie.id}
                  id={movie.id}
                  title={movie.title}
                  poster_path={movie.poster_path}
                  release_date={movie.release_date}
                />
              );
            }
          })}
        </div>
      )}
    </>
  );
}
