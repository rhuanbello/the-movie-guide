export function handleMoviesToRender(response: any) {
  return {
    type: 'filtering_movies_list',
    response,
  };
}


