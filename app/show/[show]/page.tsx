import Image from "next/image";
import Cast from "../../components/actor";
import Video from "../../components/video";
import GenreTags from "@/app/components/genre-tags";
import { ActorDetails, Props } from "@/app/interface/interface";
import { PosterCarousel } from "@/app/components/carousel";
import { getShowData } from "@/app/actions/show-routes";

export default async function ShowDetail({ params }: Props) {
  const imagePath = "https://image.tmdb.org/t/p/original";

  const showData = await getShowData(params.show);

  const [res, castRes, similarData, trailer] = showData;

  return (
    <div className=" container sm:text-2xl xs:text-2xl mx-auto leading-10 mt-10 mb-10 w-full">
      <div className="text-center sm:text-2xl xs:text-2xl">
        <h2 className="text-2xl mb-4">{res.name}</h2>
        <h2>
          Seasons: {res.number_of_seasons} Episodes: {res.number_of_episodes}
        </h2>
        <h2
          className={
            res?.status === "Returning Series"
              ? `text-sm bg-green-600 inline-block my-2 mx-2 px-2 rounded-md`
              : `text-sm bg-red-600 inline-block my-2 mx-2 px-2 rounded-md`
          }
        >
          {res.status}
        </h2>
        <div className="flex justify-center max-w-500 mx-auto">
          <GenreTags genres={res?.genres} />
        </div>
        <div
          className="my-10"
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
              loading="lazy"
              placeholder="blur"
              blurDataURL={`https://image.tmdb.org/t/p/w92/${res?.backdrop_path}`}
            />
          )}
        </div>

        <div className="container text-left mx-auto p-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4">
              <div className="grid grid-cols-1 fluid sm:grid-cols-1 ">
                <div>
                  <h2 className="text-lg">Debut: {res.first_air_date}</h2>
                </div>
                <div>
                  <h2 className="text-lg">
                    Most Recent Episode: {res.last_air_date}
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
                const loadingType = index < 6 ? "eager" : "lazy";

                if (actor.profile_path !== null) {
                  return (
                    <Cast
                      media_type={actor.media_type}
                      key={index}
                      id={actor.id}
                      name={actor.name}
                      profile_path={actor.profile_path}
                      character={actor.character}
                      // loadingType={loadingType}
                    />
                  );
                }
              })
              .slice(0, 12)}
          </div>
        </div>
      </div>

      {similarData?.results && <PosterCarousel data={similarData.results} />}
    </div>
  );
}
