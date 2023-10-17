export interface MovieDetails {
  status: string;
  name: string;
  id: number;
  poster_path: string;
  release_date: string;
  media_type: string;
  title: string;
  vote_average: number;
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
    searchResults: string;
    page: number;
  };
}
