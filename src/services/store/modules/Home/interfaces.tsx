
interface MoviesToRenderTypes {
  title: string;
  id: number;
  poster_path: string;
  release_date: string;

}
export interface moviesGenresProps {
  id: number;
  name: string;

}

export interface moviesGenresActionsProps {
  response: Array<moviesGenresProps>;
  type: string;

}


export interface selectedGenresActionsProps {
  response: number;
  type: string;

}
