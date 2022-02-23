export interface DefaultRootState {
  moviesToRender?: Array<MoviesToRenderTypes>;
  moviesGenres?: Array<genresTypes>;

}

interface MoviesToRenderTypes {
  title: string;
  id: number;
  poster_path: string;
  release_date: string;

}
export interface genresTypes {
  id: number;
  name: string;

}
