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

export function handleMovieDetails(response: any, setDetailsLoading) {
  return {
    type: 'setMovieDetails',
    response,
    setDetailsLoading
  };
}

export function cleaningPreviousState() {
  return {
    type: 'cleaningPreviousState',
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

export function handleSearchedTerm(response, setSearchLoading) {
  return {
    type: 'setSearchedTerm',
    response,
    setSearchLoading
  };
}

export function handlePersonDetails(response, setDetailsLoading) {
  return {
    type: 'setPersonDetails',
    response,
    setDetailsLoading
  };
}
