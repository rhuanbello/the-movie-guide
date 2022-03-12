import { 
  addedMoviesObjProps, 
  addedMoviesObjActionTypes, 
  searchedMoviesPropsActionTypes, 
  searchedMoviesProps, 
  moviesToRenderProps,
  moviesToRenderPropsActions
} from './interfaces';

export function addedMoviesObj(
  state: addedMoviesObjProps = {
    favoriteMovies: [],
    watchedMovies: [],
    ratedMovies: [],
  },
  action: addedMoviesObjActionTypes
) {
  const { typeState, movie, type, rate } = action;

  switch (typeState) {
    case 'setAddedMoviesObj': {
      const tempAddedMoviesObj = { ...state };

      const { favoriteMovies, watchedMovies, ratedMovies } = tempAddedMoviesObj;

      const indexFavorite = favoriteMovies.findIndex((m) => m.id === movie.id);
      const indexWatched = watchedMovies.findIndex((m) => m.id === movie.id);
      const indexRated = ratedMovies.findIndex((m) => m.id === movie.id);

      if (type === 'favorited') {
        if (indexFavorite === -1) {
          favoriteMovies.unshift(movie);
        } else {
          favoriteMovies.splice(indexFavorite, 1);
        }
      }

      if (type === 'watched') {
        if (indexWatched === -1) {
          watchedMovies.unshift({
            ...movie,
            createdAt: new Date(),
          });
        } else {
          watchedMovies.splice(indexWatched, 1);
          ratedMovies.splice(indexRated, 1);
        }
      }

      if (type === 'rated') {
        const tempRatedMovies = [...state.ratedMovies];
        const indexRated = tempRatedMovies.findIndex((m) => m.id === movie.id);

        const tempWatchedMovies = [...state.watchedMovies];
        const indexWatched = tempWatchedMovies.findIndex(
          (m) => m.id === movie.id
        );

        if (indexRated === -1) {
          tempRatedMovies.unshift({
            id: movie.id,
            title: movie.title,
            rate: rate,
          });
        } else if (!rate) {
          tempRatedMovies.splice(indexRated, 1);
        } else {
          tempRatedMovies[indexRated].rate = rate;
        }

        tempAddedMoviesObj.ratedMovies = [...tempRatedMovies];

        if (!rate) {
          tempWatchedMovies.splice(indexWatched, 1);
        } else if (indexWatched === -1) {
          tempWatchedMovies.unshift({
            ...movie,
            createdAt: new Date(),
          });
        } else {
          tempRatedMovies.splice(indexRated, 1);
        }

        tempAddedMoviesObj.watchedMovies = [...tempWatchedMovies];
      }

      return tempAddedMoviesObj;
    }
    default:
      return state;
  }
}

export function searchedMovies(
  state: searchedMoviesProps[] = [], 
  action: searchedMoviesPropsActionTypes
) {
  const { type, response, setSearchLoading } = action;

  switch (type) {
    case 'setSearchedTerm': {
      const moviesAndPeople = [...response].filter(
        (content) =>
          content.media_type !== 'tv' &&
          content.backdrop_path !== null &&
          content.profile_path !== null
      );;

      const peopleList = [...moviesAndPeople]
        .filter((content) => content.media_type === 'person')
        .map(({ id, name, popularity, profile_path, media_type }) => ({
          poster_path: profile_path,
          title: name,
          id,
          popularity,
          media_type,
        }));

      const moviesList = [...moviesAndPeople]
        .filter((content) => content.media_type === 'movie')
        .map(
          ({
            popularity,
            poster_path,
            release_date,
            title,
            vote_average,
            id,
            media_type,
          }) => ({
            popularity,
            poster_path,
            release_date,
            title,
            vote_average,
            id,
            media_type,
          })
        );

      const filteredResults = [...moviesList, ...peopleList];

      setTimeout(() => {
        setSearchLoading(false);
      }, 800);

      return filteredResults;
    }
    default:
      return state;
  }
}

export function moviesToRender(
  state: Array<moviesToRenderProps> = [], 
  action: moviesToRenderPropsActions
) {
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

      return moviesListFiltered;
    }
    default:
      return state;
  }
}
