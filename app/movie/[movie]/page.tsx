import Image from "next/image";
import Cast from "../../components/actor";
import Video from "../../components/video";
import {
  VideoDetails,
  Props,
  MovieDetails,
  ActorDetails,
} from "@/app/interface/interface";
import GenreTags from "@/app/components/genre-tags";
import MoviePosterCarousel from "../../components/carousel";

export default async function MovieDetail({ params }: Props) {
  const imagePath = "https://image.tmdb.org/t/p/original";

  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${params.movie}?api_key=${process.env.API_KEY}`,
    { next: { revalidate: 0 } }
  );
  const res = await data.json();

  const castData = await fetch(
    `https://api.themoviedb.org/3/movie/${params.movie}/credits?api_key=${process.env.API_KEY}&language=en-US`
  );
  const castRes = await castData.json();

  const videoData = await fetch(
    `https://api.themoviedb.org/3/movie/${params.movie}/videos?api_key=${process.env.API_KEY}&language=en-US`
  );

  const videoRes = await videoData.json();

  const trailerList = videoRes?.results;

  const trailer = trailerList?.filter(
    (video: VideoDetails) =>
      video.type === "Trailer" ||
      (video.type === "Teaser" && video.official === true)
  );

  const similar = await fetch(
    `https://api.themoviedb.org/3/movie/${params.movie}/similar?api_key=${process.env.API_KEY}&language=en-US&page=1`
  );
  const similarData = await similar.json();

  return (
    <div className=" container sm:text-2xl xs:text-2xl mx-auto leading-10 mt-10 mb-10 w-full">
      <div className="text-center">
        <h2 className="text-2xl mb-4">{res?.title}</h2>
        <h2 className="text-lg">Release Date: {res?.release_date}</h2>
        <h2>Runtime: {res?.runtime} minutes</h2>
        <h2
          className={
            res?.status === "Released"
              ? `text-sm text-white bg-green-600 inline-block my-2 mx-2 px-2 rounded-md`
              : `text-sm text-white bg-red-600 inline-block my-2 mx-2 px-2 rounded-md`
          }
        >
          {res.status}
        </h2>
        <div className="flex justify-center max-w-500 mx-auto">
          <GenreTags genres={res?.genres} />
        </div>
        <div
          style={{
            overflow: "hidden",
          }}
        >
          {trailer?.length > 0 ? (
            <Video
              url={trailer[0]}
              imagePath={`https://image.tmdb.org/t/p/w92${
                res?.backdrop_path !== null
                  ? imagePath + res?.backdrop_path
                  : imagePath + res?.poster_path
              }`}
            />
          ) : (
            <Image
              src={
                res?.backdrop_path !== null
                  ? imagePath + res?.backdrop_path
                  : imagePath + res?.poster_path
              }
              className="my-6 mx-auto p-2"
              width={500}
              height={500}
              alt={res?.title}
              loading="eager"
              placeholder="blur"
              blurDataURL={`https://image.tmdb.org/t/p/w92/${res?.backdrop_path}`}
              priority
            />
          )}
        </div>

        <div className="container text-left mx-auto p-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4">
              <div className="grid grid-cols-1 fluid sm:grid-cols-1 ">
                <div>
                  <h2 className="text-xl  leading-10">
                    Budget: ${res?.budget?.toLocaleString()}
                  </h2>
                </div>
                <div>
                  <h2 className="text-xl  leading-10">
                    Revenue: ${res?.revenue?.toLocaleString()}
                  </h2>
                </div>
                <div>
                  <h2 className={"text-xl font-bold leading-10"}>
                    Score:{" "}
                    <span
                      className={
                        res?.vote_average > 5
                          ? " text-green-600"
                          : " text-red-600"
                      }
                    >
                      {res?.vote_average?.toFixed(1)} / 10
                    </span>
                  </h2>
                </div>
              </div>
            </div>
            <div className="p-4">
              <h2 className="text-xl font-bold mb-4 text-left">Overview:</h2>
              <p className="text-lg text-left">{res?.overview}</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-8 mx-auto mt-6 mb-6">
            {castRes?.cast
              ?.map((actor: ActorDetails, index: number) => {
                {
                  if (actor.profile_path !== null) {
                    return (
                      <Cast
                        key={index}
                        id={actor.id}
                        name={actor.name}
                        profile_path={actor.profile_path}
                        character={actor.character}
                        media_type={actor.media_type}
                        index={index}
                      />
                    );
                  }
                }
              })
              .slice(0, 12)}
          </div>
        </div>
      </div>

      <MoviePosterCarousel movies={similarData?.results} />
    </div>
  );
}
