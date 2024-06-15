export const getGenreData = async (genre: string, page: string) => {
  const data = await fetch(
    `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${
      page ?? 1
    }&sort_by=popularity.desc&with_genres=${genre}&api_key=${
      process.env.API_KEY
    }`
  );

  const res = await data.json();
  return res;
};
