export function handleAddedMoviesObj(movie: any, type: string, rate?: number) {
  return {
    typeState: 'setAddedMoviesObj',
    movie,
    type,
    rate
  };
}

export function handleSearchedTerm(response, setSearchLoading) {
  return {
    type: 'setSearchedTerm',
    response,
    setSearchLoading
  };
}

export function handleMoviesToRender(response: any) {
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
