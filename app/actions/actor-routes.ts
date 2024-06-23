import { Props, Data } from "../interface";

export const getActorData = async (actor: string) => {
  const actorData = await fetch(
    `http://api.tmdb.org/3/search/person?api_key=${process.env.API_KEY}&query=${actor}`
  );

  const actorRes = await actorData.json();

  const filmData = await fetch(
    `https://api.themoviedb.org/3/person/${actorRes.results[0].id}/combined_credits?api_key=${process.env.API_KEY}
        `
  );
  const filmRes = await filmData.json();

  const sorted = filmRes?.cast?.sort(
    (a: Data, b: Data) => b.vote_average - a.vote_average
  );
  return [actorRes, sorted];
};
