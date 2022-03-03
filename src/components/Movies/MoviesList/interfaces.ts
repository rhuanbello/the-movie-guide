export interface MoviesListProps {
  isRecommendation?: boolean | undefined;
  moviesToRender: Array<MoviesToRenderTypes>;

}

interface MoviesToRenderTypes {
  title: string;
  id: number;
  poster_path: string;
  release_date: string;

}

export interface DefaultRootState {
  moviesToRender: Array<MoviesToRenderTypes>;

}