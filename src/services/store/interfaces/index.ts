import { movieCreditsProps } from './../../../components/Movies/MovieCredits/interfaces';

import { 
  addedMoviesObjProps,
  searchedMoviesProps,
  moviesToRenderProps
} from '../modules/Global/interfaces';

import { moviesGenresProps } from '../modules/Home/interfaces';

import { movieDetailsProps, 
  movieRecommendationsProps 
} from '../modules/MovieDetails/interfaces';
export interface DefaultRootState {
  addedMoviesObj: addedMoviesObjProps;
  searchedMovies: searchedMoviesProps;
  moviesToRender: Array<moviesToRenderProps>;
  moviesGenres: Array<moviesGenresProps>;
  selectedGenres: Array<Number>;
  movieDetails: movieDetailsProps;
  movieTrailer: string;
  movieRecommendations: Array<movieRecommendationsProps>;
  movieCredits: Array<movieCreditsProps>;

}

