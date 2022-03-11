export interface DefaultRootState {
  moviesToRender?: Array<MoviesToRenderTypes>;
  moviesGenres?: Array<genresTypes>;

}

interface MoviesToRenderTypes {
  title: string;
  id: number;
  poster_path: string;
  release_date: string;

}
export interface genresTypes {
  id: number;
  name: string;

}

export interface personDetailsProps {
  personBanner: personBannerTypes;
  personFilmography: personFilmographyTypes;
  personMovieDetails: personMovieDetailsTypes;

}

export interface personDetailsActionProps {
  type: string;
  setDetailsLoading: Function;
  response: personDetailsResponseProps;
}

export type personBannerTypes = {
  biography: string;
  homepage: null | string | any;
  name: string;
  profile_path: string;

}

export type personFilmographyTypes = {
  id: number;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;

}

type personMovieDetailsTypes = {
  also_known_as: Array<string>;
  birthday: string;
  gender: number;
  moviesCount: number;
  place_of_birth: string;

}

export interface personDetailsResponseProps {
  adult: false;
  also_known_as: Array<string>;
  biography: string;
  birthday: string;
  deathday: null | string;
  gender: number;
  homepage: string | null;
  id: number;
  imdb_id: string;
  know_for_department: string;
  movie_credits: MovieCreditsTypes;
  name: string;
  place_of_birth: string;
  popularity: number;
  profile_path: string;

}

type MovieCreditsTypes = {
  cast: Array<castTypes>;
  crew: Array<crewTypes>;
}

type castTypes = {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  title: string;
  release_date: string;
  poster_path: string;
  popularity: number;

}

type crewTypes = {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string | null;

}
