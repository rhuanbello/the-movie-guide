export function handleMovieDetails(response: any, setDetailsLoading) {
  return {
    type: 'setMovieDetails',
    response,
    setDetailsLoading
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