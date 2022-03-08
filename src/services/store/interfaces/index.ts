import { 
  MoviesToRenderTypes, 
  genresTypes, 
  addedMoviesObjProps
} from '../modules/Global/interfaces';

export interface DefaultRootState {
  moviesToRender?: Array<MoviesToRenderTypes>;
  moviesGenres?: Array<genresTypes>;
  addedMoviesObj: addedMoviesObjProps;

}