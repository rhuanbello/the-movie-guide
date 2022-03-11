import { combineReducers } from 'redux';

import { 
  moviesToRender, 
  addedMoviesObj,
  searchedMovies
} from './Global/reducer';

import { 
  usersProfileImagesObj,
  profileEditedInfos
} from './MyProfile/reducer';

import { 
  moviesGenres, 
  selectedGenres
} from './Home/reducer';

import { 
  movieDetails,
  movieTrailer,
  movieCredits,
  movieRecommendations,
} from './MovieDetails/reducer';

import { personDetails } from './PersonDetails/reducer';
import { popularPerson } from './PopularPerson/reducer';

export default combineReducers({
  moviesToRender,
  moviesGenres,
  movieDetails,
  movieTrailer,
  movieCredits,
  movieRecommendations,
  addedMoviesObj,
  selectedGenres,
  popularPerson,
  searchedMovies,
  personDetails,
  usersProfileImagesObj,
  profileEditedInfos
});
