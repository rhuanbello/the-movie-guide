export function reduxHandleMoviesList(response: any) {
  return {
    type: 'filtering_movies_list',
    response,
  };
}


