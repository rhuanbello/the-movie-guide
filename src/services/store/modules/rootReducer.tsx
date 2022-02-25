import { combineReducers } from 'redux';
import { 
  moviesToRender, 
  moviesGenres, 
  movieDetails,
  movieTrailer,
  movieCredits,
  movieRecommendations,
  addedMoviesObj
} from './Home/reducer';

export default combineReducers({
  moviesToRender,
  moviesGenres,
  movieDetails,
  movieTrailer,
  movieCredits,
  movieRecommendations,
  addedMoviesObj
});
