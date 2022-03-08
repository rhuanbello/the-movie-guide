import { 
  addedMoviesObjProps,
  searchedMoviesProps,
  moviesToRenderProps
} from '../modules/Global/interfaces';

export interface DefaultRootState {
  addedMoviesObj: addedMoviesObjProps;
  searchedMovies: searchedMoviesProps;
  moviesToRender: Array<moviesToRenderProps>;


}