export interface MovieDetailsTypes {
  genres: Array<MovieDetailsGenresTypes>;
  crew: Array<MovieDetailsCrewTypes>;
  original_title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  original_language: string;
  runtime: number;
  vote_average: number;
  homepage: string;
  classification: string;
  backdrop_path: string;


}

export interface MovieRecommendationsResponseTypes {
  adult: boolean;
  backdrop_path: string;
  genres_ids: Array<number>;
  id: number;
  media_type: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number
  poster_path: string;
  release_date: string;
  title: string;
  video: false
  vote_average: number
  vote_count: number

}

export interface MovieRecommendationsTypes {
  title: string;
  id: number;
  poster_path: string;
  release_date: string;

}

export interface MovieDetailsGenresTypes {
  name: string

}

export interface MovieDetailsCrewTypes {
  known_for_department: string;
  name: string;
  profile_path: string | null;

}
export interface MovieCreditsCastTypes {
  original_name: string;
  character: string;
  profile_path: string | null;

}

export interface dataResponseTypes {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: null;
  budget: number;
  credits: creditsTypes;
  genres: Array<MovieDetailsGenresTypes>;
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string
  production_companies: any;
  production_countries: any;
  release_date: string;
  release_dates: release_datesTypes;
  revenue: number;
  runtime: number;
  spoken_languages: any;
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  videos: any;
  vote_average: number;
  vote_count: number;

}

export interface creditsTypes {
  cast: Array<castTypes> | any;
  crew: Array<crewTypes>;

}

export interface castTypes {
  adult: boolean;
  cast_id: number;
  character: string
  credit_id: string;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  order: number;
  original_name: string;
  popularity: number;
  profile_path: string | null;

}

export interface crewTypes {
  adult: boolean;
  credit_id: string;
  department: string;
  gender: number;
  id: number;
  job: string;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string | null;

}

export interface release_datesTypes {
  results: Array<resultsTypes>

}

export interface resultsTypes {
  iso_3166_1: string;
  release_dates: Array<certificationsTypes>;

}

export interface certificationsTypes {
  certification: string;
  iso_639_1: string;
  note: string;
  release_date: string;
  type: number;

}