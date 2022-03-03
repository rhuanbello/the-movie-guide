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
  const { type, setDetailsLoading, response } = action;

  switch (type) {
    case 'setMovieDetails': {
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

      setTimeout(() => {
        setDetailsLoading(false);
      }, 700);

      return movieDetailsFiltered;
    }
    case 'cleaningPreviousState': {
      return state = [];
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
      const trailersFiltered = [...response]
        .map(({ key }) => ({ key }))
      [0]?.key;

      return trailersFiltered;

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
        const tempRatedMovies = [...state.ratedMovies];
        const indexRated = tempRatedMovies.findIndex(m => m.id === movie.id);

        const tempWatchedMovies = [...state.watchedMovies];
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

export function popularPerson(state = [], action: any) {
  const { type, response } = action;

  switch (type) {
    case 'setPopularPerson': {
      const { results } = response;

      const popularPersonFiltered = [...results].map(
        ({ name, profile_path, known_for, id }) => ({
          id,
          name,
          profile_path,
          movies: known_for
            .map(({ original_title }) => ({ original_title }))
            .filter(x => x.original_title !== undefined)
            .map((x) => x.original_title)
            .join(', ')
        })
      ).filter(x => x.movies.length &&
        x.profile_path.length)

      const popularPersonList = [...state, ...popularPersonFiltered]

      return popularPersonList;
    }
    default:
      return state;
  }
}

export function searchedMovies(state = [], action: any) {
  const { type, response, setSearchLoading } = action;

  switch (type) {
    case 'setSearchedTerm': {

      const moviesAndPeople = [...response].filter(content => content.media_type !== 'tv'
        && content.backdrop_path !== null
        && content.profile_path !== null)

      const peopleList = [...moviesAndPeople].filter(content => content.media_type === 'person')
        .map(({ id, name, popularity, profile_path, media_type }) =>
          ({ poster_path: profile_path, title: name, id, popularity, media_type }));

      const moviesList = [...moviesAndPeople].filter(content => content.media_type === 'movie')
        .map(({ popularity, poster_path, release_date, title, vote_average, id, media_type }) =>
          ({ popularity, poster_path, release_date, title, vote_average, id, media_type }))

      const filteredResults = [...moviesList, ...peopleList];

      setTimeout(() => {
        setSearchLoading(false);
      }, 800)

      return filteredResults;
    }
    default:
      return state;
  }
}

export function personDetails(state = {}, action: any) {
  const { type, response, setDetailsLoading } = action;

  switch (type) {
    case 'setPersonDetails': {
      const data = response;

      const personBanner = {
        biography: data.biography,
        homepage: data.homepage,
        name: data.name,
        profile_path: data.profile_path,

      }

      const personFilmography = [...data.movie_credits.cast].map(
        ({ title, release_date, poster_path, id, popularity }) => ({
          title,
          release_date,
          poster_path,
          id,
          popularity
        })
      ).filter(movie => movie.poster_path !== null)
        .sort((a, b) => b.popularity - a.popularity);

      const personMovieDetails = {
        also_known_as: data.also_known_as,
        birthday: data.birthday,
        place_of_birth: data.place_of_birth,
        gender: data.gender,
        moviesCount: personFilmography.length
      }

      const personDetailsObj = {
        personBanner,
        personFilmography,
        personMovieDetails
      }

      setTimeout(() => {
        setDetailsLoading(false);
      }, 800);

      return personDetailsObj;
    }
    default:
      return state;
  }
}
