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

export function selectedGenres(state = [], action: any) {
  switch (action.type) {
    case 'setSelectedGenres': {
      const { response } = action;
      const id = response;
      const filteredSelectedGenres = [...state];
      const genreIndex = state.findIndex(x => x === id);

      if (genreIndex === -1) {
        filteredSelectedGenres.push(id);

      } else {
        filteredSelectedGenres.splice(genreIndex, 1);

      }

      return filteredSelectedGenres

    }
    default:
      return state;
  }
}