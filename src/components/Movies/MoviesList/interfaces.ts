export interface MoviesListProps {
  isRecommendation?: boolean | undefined;
  isHomepage?: boolean;
  isProfile?: boolean;
  isPersonDetails?: boolean;
  moviesToRender: Array<MoviesToRenderTypes> | any;

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