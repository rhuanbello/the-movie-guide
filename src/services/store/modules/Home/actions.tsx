export function handleMoviesToRender(response: any) {
  return {
    type: 'filtering_movies_list',
    response,
  };
}

export function handleMoviesGenres(response: any) {
  return {
    type: 'setGenres',
    response,
  };
}


