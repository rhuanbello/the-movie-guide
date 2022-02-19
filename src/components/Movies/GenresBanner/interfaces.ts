import { genresTypes, searchedMovies } from './../../pages/Home/interfaces';

export interface genresBannerProps {
  genres: Array<genresTypes>;
  selectedGenres: Array<number>;
  setSelectedGenres: React.Dispatch<React.SetStateAction<number[]>>; 
  setSearchedTerm: React.Dispatch<React.SetStateAction<string>>;
  searchedMovies: Array<searchedMovies>;

}


