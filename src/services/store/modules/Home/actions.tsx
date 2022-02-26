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

export function handleMovieDetails(response: any) {
  return {
    type: 'setMovieDetails',
    response,
  };
}

export function handleMovieTrailer(response: any) {
  return {
    type: 'setMovieTrailer',
    response,
  };
}

export function handleMovieCast(response: any) {
  return {
    type: 'setMovieCredits',
    response,
  };
}

export function handleMovieRecommendations(response: any) {
  return {
    type: 'setMovieRecommendations',
    response,
  };
}

export function handleAddedMoviesObj(movie: any, type: string, rate?: number) {
  return {
    typeState: 'setAddedMoviesObj',
    movie,
    type,
    rate
  };
}

export function handleSelectedGenres(response: number) {
  return {
    type: 'setSelectedGenres',
    response
  };
}

export function handlePopularPerson(response) {
  return {
    type: 'setPopularPerson',
    response
  };
}
