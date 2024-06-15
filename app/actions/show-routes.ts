import { VideoDetails } from "../interface/interface";

export const getShowData = async (show: string) => {
  const data = await fetch(
    `https://api.themoviedb.org/3/tv/${show}?api_key=${process.env.API_KEY}`,
    { next: { revalidate: 0 } }
  );
  const res = await data.json();

  const castData = await fetch(
    `https://api.themoviedb.org/3/tv/${show}/credits?api_key=${process.env.API_KEY}&language=en-US`
  );
  const castRes = await castData.json();

  const videoData = await fetch(
    `https://api.themoviedb.org/3/tv/${show}/videos?api_key=${process.env.API_KEY}&language=en-US`
  );

  const similar = await fetch(
    `https://api.themoviedb.org/3/tv/${show}/recommendations?language=en-US&page=1&api_key=${process.env.API_KEY}`
  );

  const similarData = await similar.json();

  const videoRes = await videoData.json();

  const trailerList = videoRes?.results;

  const trailer = trailerList?.filter(
    (video: VideoDetails) =>
      video?.type === "Trailer" ||
      (video?.type === "Teaser" && video?.official === true)
  );
  return [res, castRes, similarData, trailer];
};
