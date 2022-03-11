export interface addedMoviesObjProps {
  favoriteMovies: Array<favoriteMoviesTypes>;
  ratedMovies: Array<ratedMoviesTypes>;
  watchedMovies: Array<favoriteMoviesTypes>;

}
export interface addedMoviesObjActionTypes {
  typeState: string;
  movie: movieTypes;
  type: string;
  rate: number;

}

export interface movieTypes {
  title: string;
  id: number;
  poster_path: string;
  release_date: string;
  createdAt?: Date;

}
interface favoriteMoviesTypes {
  title: string;
  createdAt?: Date | undefined;
  id: number;
  poster_path: string;
  release_date: string;

}
interface ratedMoviesTypes {
  id: number;
  title: string;
  rate: number;

}

export interface searchedMoviesProps {
  poster_path: string;
  title: string;
  id: number;
  popularity: number;
  media_type: string;
}

export interface searchedMoviesPropsActionTypes {
  response: Array<searchedMoviesResponse>;
  setSearchLoading: Function;
  type?: string;

}

export interface searchedMoviesResponse {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: Number[];
  id: number;
  media_type: string;
  original_language: string;
  original_title: string;
  overview: string;
  profile_path: string;
  name: string;
  popularity: number;
  poster_path: string | null;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;

}

export interface moviesToRenderProps {
  title: string;
  id: number;
  poster_path: string;
  release_date: string;

}

export interface moviesToRenderPropsActions {
  response: Array<moviesToRenderResponse>;
  type: string;

}

export interface moviesToRenderResponse {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: Number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;

}