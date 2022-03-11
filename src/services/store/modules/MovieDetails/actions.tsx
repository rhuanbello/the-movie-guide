import { movieCreditsResponseProps, movieDetailsResponseProps, movieRecommendationsResponseProps, movieTrailerResponseProps } from "./interfaces";

export function handleMovieDetails(response: movieDetailsResponseProps, setDetailsLoading: Function) {
  return {
    type: 'setMovieDetails',
    response,
    setDetailsLoading
  };
}

export function handleMovieTrailer(response: Array<movieTrailerResponseProps>) {
  return {
    type: 'setMovieTrailer',
    response,
  };
}

export function handleMovieCast(response: Array<movieCreditsResponseProps>) {
  return {
    type: 'setMovieCredits',
    response,
  };
}

export function handleMovieRecommendations(response: Array<movieRecommendationsResponseProps>) {
  return {
    type: 'setMovieRecommendations',
    response,
  };
}