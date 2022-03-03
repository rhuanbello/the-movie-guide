export function handleMoviesGenres(response: any) {
  return {
    type: 'setGenres',
    response,
  };
}

export function handleSelectedGenres(response: number) {
  return {
    type: 'setSelectedGenres',
    response
  };
}

