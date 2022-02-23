export interface DefaultRootState {
  moviesToRender: Array<MoviesToRenderTypes>;

}

interface MoviesToRenderTypes {
  title: string;
  id: number;
  poster_path: string;
  release_date: string;

}
