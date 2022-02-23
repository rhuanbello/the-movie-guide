interface moviesListObj {
  id: string,
  title: string,
  release_date: string,
  poster_path: string,
}

export function moviesList(state = [], action: any) {
  switch (action.type) {
    case 'filtering_movies_list': {
      const { response } = action;

      console.log('CHEGOU', response)

      const moviesListFiltered = [...response].map(
        ({ title, release_date, poster_path, id }) => ({
          title,
          release_date,
          poster_path,
          id,
        })
      );

      return moviesListFiltered;
    }
    default:
      return state;
  }
}
