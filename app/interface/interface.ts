export interface MovieDetails {
  status: string;
  name: string;
  id: number;
  poster_path: string;
  release_date: string;
  media_type: string;
  title: string;
  vote_average: number;
  index: number;
}

export interface ShowDetails extends MovieDetails {
  first_air_date: string;
}

export interface ActorDetails {
  profile_path: string;
  id: number;
  name: string;
  character: string;
  date_of_birth: string;
  media_type: string;
}

export interface Data {
  status: string;
  name: string;
  id: number;
  poster_path: string;
  release_date: string;
  media_type: string;
  title: string;
  vote_average: number;
  first_air_date: string;
  profile_path: string;
  character: string;
  date_of_birth: string;
  popularity: number;
  results: [];
}

export interface VideoDetails {
  type: string;
  official: boolean;
}

export interface VideoProps {
  url: {
    url: string;
    key: string;
  };
  imagePath: string;
}

export interface Props {
  params: {
    search: string;
    page: number;
    movie: string;
    show: string;
    actor: string;
    genre: Genre;
  };
}

export interface TotalPages {
  total_pages: number;
}

export type PaginateProps = Props & TotalPages;

export interface Movie {
  id: number;
  title: string;
  image: string;
}

export interface MoviePosterCarouselProps {
  movies: [];
}

export interface Genre {
  id: number;
  name: string;
}

export interface Genres {
  genres: Genre[];
}
