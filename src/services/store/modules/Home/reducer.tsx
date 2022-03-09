import { moviesGenresActionsProps, moviesGenresProps, selectedGenresActionsProps } from "./interfaces";

export function moviesGenres(
  state: Array<moviesGenresProps> = [], 
  action: moviesGenresActionsProps
) {
  const { type, response } = action;

  switch (type) {
    case 'setGenres': {
      return response;
    }
    default:
      return state;
  }
}

export function selectedGenres(
  state: Array<Number> = [], 
  action: selectedGenresActionsProps
) {
  const { type, response } = action;

  switch (type) {
    case 'setSelectedGenres': {

      const id = response;
      const filteredSelectedGenres = [...state];
      const genreIndex = state.findIndex(x => x === id);

      if (genreIndex === -1) {
        filteredSelectedGenres.push(id);

      } else {
        filteredSelectedGenres.splice(genreIndex, 1);

      }

      return filteredSelectedGenres;

    }
    default:
      return state;
  }
}