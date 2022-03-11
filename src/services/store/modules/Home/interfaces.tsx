
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
