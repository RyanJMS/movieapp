"use client";

import Movie from "./movie";
import Show from "./show";
import Cast from "./cast";
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
        `https://api.themoviedb.org/3/search/multi?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
      );
      const res = await data.json();

      setSearchResults(res);
      console.log(res);
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
          {searchResults?.results
            .filter((data: any) => data.poster_path !== null)
            .map((data: any) => {
              return (
                <>
                  <div
                    className={
                      searchResults?.total_results === 1
                        ? "flex flex-center justify-center"
                        : ""
                    }
                  >
                    <div>
                      {data.media_type === "movie" && (
                        <Movie
                          media_type={data.media_type}
                          key={data.id}
                          id={data.id}
                          title={data.title}
                          poster_path={data.poster_path}
                          release_date={data.release_date}
                        />
                      )}
                      {data.media_type === "tv" && (
                        <Show
                          media_type={data.media_type}
                          key={data.id}
                          id={data.id}
                          name={data.name}
                          poster_path={data.poster_path}
                          first_air_date={data.first_air_date}
                        />
                      )}
                      {data.media_type === "person" && (
                        <Cast
                          media_type={data.media_type}
                          key={data.id}
                          id={data.id}
                          name={data.name}
                          profile_path={data.profile_path}
                        />
                      )}
                    </div>{" "}
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
