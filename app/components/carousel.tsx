import * as React from "react";
import Movie from "./movie";
import Show from "./show";
import { Card, CardContent } from "@/components/ui/card";
import { Data, CarouselProps } from "../interface/interface";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const PosterCarousel: React.FC<CarouselProps> = ({ data }) => {
  if (!data || data.length === 0) {
    return (
      <div className="text-center text-white">
        No similar {data && data[0]?.release_date ? "Movies" : "Shows"}{" "}
        available.
      </div>
    );
  }
  return (
    <Carousel className="xl:w-3/4 lg:w-full mx-auto ">
      <CarouselContent>
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
          ?.map((item: Data, index: number) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              {item.release_date ? (
                <Movie
                  key={index}
                  id={item.id}
                  title={item.title}
                  poster_path={item.poster_path}
                  release_date={item.release_date}
                  media_type={item.media_type}
                  vote_average={item.vote_average}
                  backdrop_path={item.backdrop_path}
                  original_language={item.original_language}
                  status={item.status}
                  name={item.name}
                />
              ) : (
                <Show
                  media_type={item.media_type}
                  key={index}
                  id={item.id}
                  name={item.name}
                  poster_path={item.poster_path}
                  first_air_date={item.first_air_date}
                  vote_average={item.vote_average}
                />
              )}
            </CarouselItem>
          ))}
      </CarouselContent>
    </Carousel>
  );
};
