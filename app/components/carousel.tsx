"use client";

import React, { useState } from "react";
import { Data, CarouselProps } from "../interface/interface";
import Movie from "./movie";
import Show from "./show";

import { Carousel } from "@trendyol-js/react-carousel";

const PosterCarousel: React.FC<CarouselProps> = ({ data }) => {
  if (!data || data.length === 0) {
    return (
      <div className="text-center text-white">
        No similar {data && data[0]?.release_date ? "Movies" : "Shows"}{" "}
        available.
      </div>
    );
  }
  return (
    <>
      <h2 className="text-3xl text-center mx-auto my-5 text-white">
        Similar {data !== null && data[0].release_date ? "Movies" : "Shows"}
      </h2>
      {data[0].release_date ? (
        <Carousel show={3} swiping={true} slide={3}>
          {data
            ?.filter((data: Data) => {
              if (
                data.poster_path !== null &&
                data.poster_path !== "" &&
                data.poster_path !== undefined &&
                data.original_language === "en"
              ) {
                return true;
              }
              return false;
            })
            ?.sort((a: Data, b: Data) => b.popularity - a.popularity)
            ?.map((movie: Data, index: number) => (
              <Movie
                key={index}
                id={movie.id}
                title={movie.title}
                poster_path={movie.poster_path}
                release_date={movie.release_date}
                media_type={movie.media_type}
                vote_average={movie.vote_average}
                backdrop_path={movie.backdrop_path}
                original_language={movie.original_language}
                status={movie.status}
                name={movie.name}
              />
            ))}
        </Carousel>
      ) : (
        <Carousel show={3} swiping={true} slide={3}>
          {data
            ?.filter((data: Data) => {
              if (
                data.poster_path !== null &&
                data.poster_path !== "" &&
                data.poster_path !== undefined
              ) {
                return true;
              }
              return false;
            })
            ?.sort((a: Data, b: Data) => b.popularity - a.popularity)
            ?.map((show: Data, index: number) => (
              <Show
                media_type={show.media_type}
                key={index}
                id={show.id}
                name={show.name}
                poster_path={show.poster_path}
                first_air_date={show.first_air_date}
                vote_average={show.vote_average}
              />
            ))}
        </Carousel>
      )}
    </>
  );
};

export default PosterCarousel;
