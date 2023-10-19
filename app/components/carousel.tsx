"use client";

import React, { useState } from "react";
import Show from "./show";
import Movie from "./movie";
import Actor from "./actor";
import { Data } from "../interface/interface";

const Carousel = ({ items }: any) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % items.length);
  };

  const previousSlide = () => {
    setCurrentIndex((currentIndex - 1 + items.length) % items.length);
  };

  return (
    <div className="relative overflow-hidden">
      <div className="flex">
        {items?.results
          ?.filter((data: Data) => {
            if (
              data.poster_path !== null &&
              data.poster_path !== "" &&
              data.media_type === "movie"
            ) {
              return true;
            }
            if (
              data.poster_path !== null &&
              data.poster_path !== "" &&
              data.media_type === "tv"
            ) {
              return true;
            }

            if (
              data.profile_path !== null &&
              data.profile_path !== "" &&
              data.media_type === "person"
            ) {
              return true;
            }
            return false;
          })
          .sort((a: Data, b: Data) => b.vote_average - a.vote_average)
          .map((data: Data, index: number) => {
            return (
              <>
                <div className="flex">
                  <div
                    className={`transform transition-transform ${
                      index === currentIndex
                        ? "translate-x-0"
                        : "translate-x-full"
                    }`}
                  >
                    {data.poster_path && (
                      <Movie
                        media_type={data.media_type}
                        key={index}
                        id={data.id}
                        title={data.title}
                        poster_path={data.poster_path}
                        release_date={data.release_date}
                        vote_average={data.vote_average}
                        index={index}
                        status={data.status}
                        name={data.name}
                      />
                    )}
                    {data.first_air_date && (
                      <Show
                        media_type={data.media_type}
                        key={index}
                        id={data.id}
                        name={data.name}
                        poster_path={data.poster_path}
                        first_air_date={data.first_air_date}
                        vote_average={data.vote_average}
                        index={index}
                      />
                    )}
                    {data.profile_path && (
                      <Actor
                        media_type={data.media_type}
                        key={index}
                        id={data.id}
                        name={data.name}
                        profile_path={data.profile_path}
                        date_of_birth={data.date_of_birth}
                        index={index}
                      />
                    )}
                  </div>{" "}
                </div>
              </>
            );
          })}{" "}
      </div>
      <button
        onClick={previousSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2"
      >
        Previous
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2"
      >
        Next
      </button>
    </div>
  );
};

export default Carousel;
