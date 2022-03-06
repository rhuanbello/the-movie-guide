interface moviesListObj {
  id: string,
  title: string,
  release_date: string,
  poster_path: string,
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

export function movieTrailer(state = '', action: any) {
  switch (action.type) {
    case 'setMovieTrailer': {
      
      const { response } = action;
      console.log('setMovieTrailer', response);

      let trailersFiltered = '';

      if (response.length > 0) {
        trailersFiltered = [...response]
          .map(({ key }) => ({ key }))
        [0]?.key;

      }

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