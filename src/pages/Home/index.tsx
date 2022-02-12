import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { GenresBanner } from '../../components/GenresBanner';
import { MoviesList } from '../../components/MoviesList';
import { Pagination } from '../../components/Pagination';

import { genreApi, movieApi, searchApi } from '../../services/api';

import {
  movieListTypes,
  genresTypes,
  searchedMovies,
  resultsTypes
} from './interfaces';

export default function Home() {
  const { VITE_API_KEY } = import.meta.env;
  const { page } = useParams();
  const [popularMovies, setPopularMovies] = useState<movieListTypes[]>([]);
  const [genres, setGenres] = useState<genresTypes[]>([]);
  const [selectedGenres, setSelectedGenres] = useState<number[]>([]);
  const [searchedTerm, setSearchedTerm] = useState<string>('avengers');
  const [searchedMovies, setSearchedMovies] = useState<searchedMovies[]>([]);

  useEffect(() => {
    console.log('searchedMovies', searchedMovies)
  }, [searchedMovies])

  const getMovies = (page: string | undefined, selectedGenres: Array<Number>) => {
    const genresToRender = selectedGenres.join(',');

    movieApi
      .get(
        `popular?api_key=${VITE_API_KEY}&with_genres=${genresToRender}&language=pt-BR&page=${page}`
      )
      .then(({ data }) => {
        const { results } = data;
        console.log('popular ->', results)
        handleMoviesList(results);
      })
      .catch((error) => {
        console.log(error);
      });
      
  };

  const getGenres = () => {
    genreApi
      .get(`list?api_key=${VITE_API_KEY}`)
      .then(({ data }) => {
        const { genres } = data;
        setGenres(genres);
        console.log('Genres', genres)
      })
      .catch(error => {
        console.log(error)
      });

  };

  const handleMoviesList = (results: any) => {
   
    const moviesListFiltered = [...results].map(
      ({ title, release_date, poster_path, id }) => ({
        title,
        release_date,
        poster_path,
        id,
      })
    );

    setPopularMovies(moviesListFiltered);

  };

  const getSearchedMovies = (searchedTerm: string) => {
    searchApi
      .get(`movie?api_key=${VITE_API_KEY}&language=pt-BR&page=1&query=${searchedTerm}`)
      .then(({data}) => {
        const { results } = data;
        handleSearchedMovies(results)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const handleGenresLocalStorage = () => {
    const genresFromLocalStorage = localStorage.getItem('Genres');
    if (genresFromLocalStorage) {
      setSelectedGenres(JSON.parse(genresFromLocalStorage));
    }
  }

  const handleSearchedMovies = (results: Array<resultsTypes>) => {
    console.log('Results', results)
    const propertiesFilter = [...results].map(({ backdrop_path, popularity, poster_path, release_date, title, vote_average, id }) => ({ backdrop_path, popularity, poster_path, release_date, title, vote_average, id}))
    const filteredResults = [...propertiesFilter]?.filter(x => x.backdrop_path !== null);
    setSearchedMovies(filteredResults);
  }

  useEffect(() => {
    getGenres();
  }, []);

  useEffect(() => {
    getMovies(page, selectedGenres);
  }, [page, selectedGenres]);

  useEffect(() => {
    handleGenresLocalStorage();
  }, [localStorage.getItem('Genres')]);

  useEffect(() => {
    getSearchedMovies(searchedTerm)
  }, [searchedTerm])

  return (
    <>
      <GenresBanner 
        genres={genres}
        setSelectedGenres={setSelectedGenres}
        selectedGenres={selectedGenres}
        setSearchedTerm={setSearchedTerm}
        searchedMovies={searchedMovies}
      />
      <MoviesList 
        moviesToRender={popularMovies}
      />
      <Pagination />
    </>
  );
}
