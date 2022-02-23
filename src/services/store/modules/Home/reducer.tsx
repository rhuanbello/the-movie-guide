interface moviesListObj {
  id: string,
  title: string,
  release_date: string,
  poster_path: string,
}

export function moviesToRender(state: Array<moviesListObj> = [], action: any) {
  switch (action.type) {
    case 'filtering_movies_list': {
      const { response } = action;

      const moviesListFiltered = [...response].map(
        ({ title, release_date, poster_path, id }) => ({
          title,
          release_date,
          poster_path,
          id,
        })
      );

      console.log('Filtrou no redux', moviesListFiltered)

      return moviesListFiltered;
    }
    default:
      return state;
  }
}

export function moviesGenres(state = [], action: any) {
  switch (action.type) {
    case 'setGenres': {
      console.log('Chegou genres', action.response)
      return action.response;
    }
    default:
      return state;
  }
}
