import { combineReducers } from 'redux';
import { moviesToRender, moviesGenres } from './Home/reducer';

export default combineReducers({
  moviesToRender,
  moviesGenres
});
