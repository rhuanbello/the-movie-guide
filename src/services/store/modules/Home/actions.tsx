import { moviesGenresProps } from "./interfaces";

export function handleMoviesGenres(response: Array<moviesGenresProps>) {
  return {
    type: 'setGenres',
    response,
  };
}

export function handleSelectedGenres(response: Array<Number>) {
  return {
    type: 'setSelectedGenres',
    response
  };
}

