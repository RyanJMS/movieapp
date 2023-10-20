"use client";

import React, { useState } from "react";
import { MovieDetails, MoviePosterCarouselProps } from "../interface/interface";
import Movie from "./movie";

const MoviePosterCarousel: React.FC<MoviePosterCarouselProps> = ({
  movies,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % movies.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + movies.length) % movies.length);
  };

  return (
    <div>
      {movies?.map((movie: MovieDetails, index: number) => (
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
    </div>
  );
};

export default MoviePosterCarousel;
