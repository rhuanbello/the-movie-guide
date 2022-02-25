import produce from 'immer';
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

export function movieDetails(state = [], action: any) {
  switch (action.type) {
    case 'setMovieDetails': {
      console.log('Chegou setMovieDetails', action.response)
      const { response } = action;
      const { crew } = response.credits;

      const crewArrayFilteredAndLimited = [...crew]
        .map(({ known_for_department, name, profile_path }) => ({
          known_for_department,
          name,
          profile_path,
        }))
        .slice(0, 5);

      const classification = response?.release_dates?.results
        ?.filter(({ iso_3166_1 }) => iso_3166_1 === 'BR' || iso_3166_1 === 'US')
        ?.sort((a, b) => a.iso_3166_1.localeCompare(b.iso_3166_1))[0]?.release_dates
        ?.filter(({ certification }) => certification !== '')[0]?.certification;

      const movieDetailsFiltered = {
        id: response.id,
        backdrop_path: response.backdrop_path,
        genres: response.genres,
        original_title: response.original_title,
        overview: response.overview,
        poster_path: response.poster_path,
        release_date: response.release_date,
        original_language: response.original_language,
        runtime: response.runtime,
        vote_average: response.vote_average.toString()?.replace('.', '').padEnd(2, 0),
        homepage: response.homepage,
        crew: crewArrayFilteredAndLimited,
        classification: classification || ''
      }

      console.log('movieDetailsFiltered', movieDetailsFiltered)

      return movieDetailsFiltered;
    }
    default:
      return state;
  }
}

export function movieCredits(state = [], action: any) {
  switch (action.type) {
    case 'setMovieCredits': {
      const { response } = action;

      const castArrayFiltered = [...response]
        .map(({ original_name, profile_path, character, id }) => ({
          original_name,
          profile_path,
          character,
          id
        }))

      console.log('castArrayFiltered', castArrayFiltered)

      return castArrayFiltered;

    }
    default:
      return state;
  }
}

export function movieTrailer(state = '', action: any) {
  switch (action.type) {
    case 'setMovieTrailer': {
      const { response } = action;

      // if (response.length) {
        const trailersFiltered = [...response]
          .map(({ key }) => ({ key }))
        [0]?.key

      console.log('trailersFiltered', trailersFiltered)


        return trailersFiltered;
      // }

      // return undefined;

    }
    default:
      return state;
  }
}

export function movieRecommendations(state = [], action: any) {
  switch (action.type) {
    case 'setMovieRecommendations': {
      const { response } = action;

      const movieRecommendationsFiltered = [...response].map(({ poster_path, id, release_date, title }) => ({ poster_path, id, release_date, title }))
      return movieRecommendationsFiltered;

    }
    default:
      return state;
  }
}

export function addedMoviesObj(state = {
  favoriteMovies: [],
  watchedMovies: [],
  ratedMovies: []
}, action: any) {
  const { typeState, movie, type, rate } = action;

  switch (typeState) {
    case 'setAddedMoviesObj': {
      const tempAddedMoviesObj = { ...state };

      const {
        favoriteMovies,
        watchedMovies,
        ratedMovies
      } = tempAddedMoviesObj;

      const indexFavorite = favoriteMovies.findIndex(m => m.id === movie.id);
      const indexWatched = watchedMovies.findIndex(m => m.id === movie.id);
      const indexRated = ratedMovies.findIndex(m => m.id === movie.id);

      if (type === 'favorited') {

        if (indexFavorite === -1) {
          favoriteMovies.push(movie);
        } else {
          favoriteMovies.splice(indexFavorite, 1);
        }

      }

      if (type === 'watched') {

        if (indexWatched === -1) {
          watchedMovies.push({
            ...movie,
            createdAt: new Date()
          });
        } else {
          watchedMovies.splice(indexWatched, 1);
          ratedMovies.splice(indexRated, 1);

        }

      }

      if (type === 'rated') {
        const tempRatedMovies = [...addedMoviesObj.ratedMovies];
        const indexRated = tempRatedMovies.findIndex(m => m.id === movie.id);

        const tempWatchedMovies = [...addedMoviesObj.watchedMovies];
        const indexWatched = tempWatchedMovies.findIndex(m => m.id === movie.id);

        if (indexRated === -1) {
          tempRatedMovies.push({
            id: movie.id,
            title: movie.title,
            rate: rate
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
          tempWatchedMovies.push({
            ...movie,
            createdAt: new Date()
          });
        } else {
          tempRatedMovies.splice(indexRated, 1);

        }

        tempAddedMoviesObj.watchedMovies = [...tempWatchedMovies];

      }

      // localStorage.setItem('MoviesList', JSON.stringify(tempAddedMoviesObj))
      
      console.log('FEZ TUDO REDUX', tempAddedMoviesObj)
      return tempAddedMoviesObj;

    }
    default:
      return state;
  }
}