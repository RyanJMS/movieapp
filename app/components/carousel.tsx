"use client";

import React, { useState } from "react";
import { Data, MoviePosterCarouselProps } from "../interface/interface";
import Movie from "./movie";

import { Carousel } from "@trendyol-js/react-carousel";

const MoviePosterCarousel: React.FC<MoviePosterCarouselProps> = ({
  movies,
}) => {
  return (
    <>
      <h2 className="text-3xl text-center mx-auto my-5 text-white">
        Similar Movies
      </h2>
      <Carousel show={3} swiping={true} slide={3}>
        {movies
          ?.filter((data: Data) => {
            if (
              data.poster_path !== null &&
              data.poster_path !== "" &&
              data.media_type === "movie"
            ) {
              return true;
            }
            return false;
          })
          .sort((a: Data, b: Data) => b.vote_average - a.vote_average)
          ?.map((movie: Data, index: number) => (
            <Movie
              key={index}
              id={movie.id}
              title={movie.title}
              poster_path={movie.poster_path}
              release_date={movie.release_date}
              media_type={movie.media_type}
              vote_average={movie.vote_average}
              index={index}
              status={movie.status}
              name={movie.name}
            />
          ))}
      </Carousel>
    </>
  );
};

export default MoviePosterCarousel;
