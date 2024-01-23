export interface MovieDetails {
  status: string;
  name: string;
  id: number;
  poster_path: string;
  backdrop_path: string;
  release_date: string;
  media_type: string;
  title: string;
  vote_average: number;
  original_language: string;
}

export interface ShowDetails {
  name: string;
  id: number;
  poster_path: string;
  first_air_date: string;
  media_type: string;
  vote_average: number;
}

export interface ActorDetails {
  profile_path: string;
  id: number;
  name: string;
  character: string;
  date_of_birth: string;
  media_type: string;
}

export interface CastDetails {
  id: number;
  key: number;
  name: string;
  profile_path: string;
  media_type: string;
  character?: string;
  date_of_birth?: string;
  // loadingType: "eager" | "lazy";
}

export interface VideoDetails {
  type: string;
  official: boolean;
}

export interface Data {
  status: string;
  name: string;
  id: number;
  poster_path: string;
  backdrop_path: string;
  release_date: string;
  media_type: string;
  title: string;
  vote_average: number;
  first_air_date: string;
  profile_path: string;
  character: string;
  date_of_birth: string;
  popularity: number;
  original_language: string;
  results: [];
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
    genre: string;
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

export interface CarouselProps {
  data: Data[];
}

export interface Genre {
  id: number;
  name: string;
}

export interface Genres {
  genres: Genre[];
}
