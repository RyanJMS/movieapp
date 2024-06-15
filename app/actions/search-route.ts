import { Props, Data } from "../interface/interface";

export const getResults = async (type: string, query: string, page: string) => {
  const data = await fetch(
    `https://api.themoviedb.org/3/search/${type}?api_key=${process.env.API_KEY}&query=${query}&include_adult=false&page=${page}&sort_by=popularity.desc`
  );

  const res = await data.json();

  let filteredResults = res?.results?.filter((data: Data) => {
    if (
      (data.media_type === "movie" || data.media_type === undefined) &&
      data.popularity > 1 &&
      data.poster_path !== null &&
      data.release_date !== ""
    )
      return true;
    if (
      (data.media_type === "tv" || data.media_type === undefined) &&
      data.popularity > 1 &&
      data.poster_path !== null &&
      data.first_air_date !== ""
    )
      return true;
    if (data.name && data.profile_path !== null) return true;
  });

  if (filteredResults === undefined) {
    filteredResults = [];
  }

  return [filteredResults, res.total_pages];
};
