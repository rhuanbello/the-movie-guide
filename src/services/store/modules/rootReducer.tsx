import { combineReducers } from 'redux';
import { 
  moviesToRender, 
  moviesGenres, 
  movieDetails,
  movieTrailer,
  movieCredits,
  movieRecommendations,
  addedMoviesObj,
  selectedGenres
} from './Home/reducer';

export default combineReducers({
  moviesToRender,
  moviesGenres,
  movieDetails,
  movieTrailer,
  movieCredits,
  movieRecommendations,
  addedMoviesObj,
  selectedGenres
});
