import { genresTypes, searchedMovies } from '../../../pages/Home/interfaces';

export interface genresBannerProps {
  genres: Array<genresTypes>;
  selectedGenres: Array<number> | undefined;
  setSelectedGenres: React.Dispatch<React.SetStateAction<Number[]> | undefined>; 
  setSearchedTerm: React.Dispatch<React.SetStateAction<string>>;
  searchedMovies: Array<searchedMovies>;

}


