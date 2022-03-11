
export interface DefaultRootState {
  moviesToRender?: Array<MoviesToRenderTypes>;
  moviesGenres?: Array<genresTypes>;

}

export interface movieDetailsProps {
  backdrop_path: string;
  genres: Array<genresTypes>;
  homepage: string;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  runtime: number;
  vote_average: number | string;

}

export interface movieDetailsResponseProps {
  adult: false;
  backdrop_path: string;
  belongs_to_collection: belongsToCollectionType;
  budget: number;
  credits: creditsTypes;
  genres: Array<genresTypes>;
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: Array<productionCompaniesTypes>;
  production_countries: Array<productionCountriesTypes>;
  release_date: string;
  release_dates: releaseDatesTypes;
  revenue: number;
  runtime: number;
  spoken_languages: any;
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  videos: any;
  vote_average: any;
  vote_count: number;

}

type belongsToCollectionType = {
  backdrop_path: string;
  id: number;
  name: string;
  poster_path: string;

}

type creditsTypes = {
  cast: Array<castTypes>;
  crew: Array<crewTypes>;

}

type castTypes = {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;

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

type productionCompaniesTypes = {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;

}

type productionCountriesTypes = {
  name: string;
  iso_3166_1: string;

}

type releaseDatesTypes = {
  results: Array<releaseDatesResultType>
}

type releaseDatesResultType = {
  iso_3166_1: string;
  release_dates: Array<releaseDatesResultTypeTwo>
}

type releaseDatesResultTypeTwo = {
  certification: string;
  iso_639_1: string;
  note: string;
  release_date: string;
  type: number;
}

export interface movieDetailsActionsProps {
  response: movieDetailsResponseProps;
  setDetailsLoading: Function;
  type: string;

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

export interface movieTrailerActionsProps {
  response: Array<movieTrailerResponseProps>;
  type: string;
}

export interface movieTrailerResponseProps {
  id: string;
  iso_639_1: string;
  iso_3166_1: string;
  key: string;
  name: string;
  official: boolean;
  published_at: string;
  site: string;
  size: number;
  type: string;

}

export interface movieRecommendationsActionsProps {
  response: Array<movieRecommendationsResponseProps>;
  type: string;

}

export interface movieRecommendationsResponseProps {
  adult: false;
  backdrop_path: string;
  genres: Array<genresTypes>;
  id: number;
  media_type: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number | string;
  vote_count: number;

}

export interface movieRecommendationsProps {
  id: number;
  poster_path: string;
  release_date: string;
  title: string;

}

export interface movieCreditsActionProps {
  response: Array<movieCreditsResponseProps>;
  type: string;

}

export interface movieCreditsResponseProps {
  adult: boolean;
  gender: number;
  id: number;
  known_for_departament: string;
  name: string;
  order: number;
  original_name: string;
  popularity: number;
  profile_path: string;
  character: string;


}

export interface movieCreditsProps {
  id: number;
  character: string;
  original_name: string;
  profile_path: string;

}
