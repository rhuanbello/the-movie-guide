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

import { profileEditedInfosObjProps, 
  usersProfileImagesObjProps 
} from '../modules/MyProfile/interfaces';
import { personDetailsProps } from '../modules/PersonDetails/interfaces';
import { popularPersonProps } from '../modules/PopularPerson/interfaces';
export interface DefaultRootState {
  addedMoviesObj?: addedMoviesObjProps | any;
  searchedMovies?: searchedMoviesProps | searchedMoviesProps[] | any;
  moviesToRender?: Array<moviesToRenderProps> | any;
  moviesGenres?: Array<moviesGenresProps> | any;
  selectedGenres?: Array<Number> | undefined;
  movieDetails?: movieDetailsProps | any;
  movieTrailer?: string | any;
  movieRecommendations?: Array<movieRecommendationsProps> | any;
  movieCredits?: Array<movieCreditsProps> | any;
  usersProfileImagesObj?: usersProfileImagesObjProps | any;
  profileEditedInfos?: profileEditedInfosObjProps | any;
  personDetails?: personDetailsProps | any;
  popularPerson?: Array<popularPersonProps> | popularPersonProps | any;
}

