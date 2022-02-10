export interface movieListTypes {
  id: number;
  poster_path: string;
  release_date: string;
  title: string;

}

export interface genresTypes {
  id: number;
  name: string;

}

export interface searchedMovies extends movieListTypes {
  backdrop_path: string;
  vote_average: number;
  popularity: number;  

}

export interface resultsTypes extends searchedMovies {
  adult: boolean;
  genre_ids: Array<number>;
  original_language: string;
  overview: string;
  video: boolean;
  vote_count: number;
  original_title: string;
  
}