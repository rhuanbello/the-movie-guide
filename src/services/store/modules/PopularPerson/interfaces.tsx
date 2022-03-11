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

export interface popularPersonActionProps {
  response: popularPersonResponseProps;
  type: string;

}

export interface popularPersonResponseProps {
  page: number;
  results: Array<popularPersonResultsProps>;
  totla_pages: number;
  total_results: number;
}

type popularPersonResultsProps = {
  adult: boolean;
  gender: number;
  id: number;
  known_for: knownForTypes[];
  known_for_departament: string;
  name: string;
  popularity: number;
  profile_path: string;

}

type knownForTypes = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: Array<Number>;
  id: number;
  media_type: string;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;

}

export interface popularPersonProps {
  id?: number;
  movies?: string;
  name?: string;
  profile_path?: string;  

}