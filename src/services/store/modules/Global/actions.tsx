import { moviesToRenderResponse, movieTypes, searchedMoviesResponse } from "./interfaces";

export function handleAddedMoviesObj(
  movie: movieTypes, 
  type: string, 
  rate?: number | null
) {
  return {
    typeState: 'setAddedMoviesObj',
    movie,
    type,
    rate
  };
}

export function handleSearchedTerm(
  response: searchedMoviesResponse, 
  setSearchLoading: Function
) {
  return {
    type: 'setSearchedTerm',
    response,
    setSearchLoading
  };
}

export function handleMoviesToRender(response: moviesToRenderResponse) {
  return {
    type: 'filtering_movies_list',
    response,
  };
}

export function cleaningPreviousState() {
  return {
    type: 'cleaningPreviousState',
  };
}