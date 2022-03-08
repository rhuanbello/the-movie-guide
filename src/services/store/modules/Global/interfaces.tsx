export interface MoviesToRenderTypes {
  title: string;
  id: number;
  poster_path: string;
  release_date: string;

}

interface genresTypes {
  id: number;
  name: string;

}

export interface addedMoviesObjProps {
  favoriteMovies: Array<favoriteMoviesTypes>;
  ratedMovies: Array<ratedMoviesTypes>;
  watchedMovies: Array<favoriteMoviesTypes>;

}
export interface actionTypes {
  typeState: string;
  movie: MoviesToRenderTypes;
  type: string;
  rate: number;

}
interface favoriteMoviesTypes extends MoviesToRenderTypes {
  createdAt: Date;

}
interface ratedMoviesTypes {
  id: number;
  title: string;
  rate: number;

}