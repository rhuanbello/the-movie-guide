import { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';

import { GenresBanner } from '../../components/GenresBanner';
import { MoviesList } from '../../components/MoviesList';
import { Pagination } from '../../components/Pagination';

import { collectionApi, genreApi, movieApi, searchApi } from '../../services/api';

import {
  movieListTypes,
  genresTypes,
  searchedMovies,
  resultsTypes
} from './interfaces';

export default function Home() {
  const { VITE_API_KEY } = import.meta.env;
  const { page } = useParams();
  const { pathname } = useLocation();
  const [popularMovies, setPopularMovies] = useState<movieListTypes[]>([]);
  const [genres, setGenres] = useState<genresTypes[]>([]);
  const [selectedGenres, setSelectedGenres] = useState<number[]>([]);
  const [backDrop, setBackdrop] = useState('')

  const getMovies = (page: string | undefined, selectedGenres: Array<Number>, path: string) => {
    const genresToRender = selectedGenres?.join(',');

    movieApi
      .get(
        `${path}?api_key=${VITE_API_KEY}&with_genres=${genresToRender}&language=pt-BR&page=${page}`
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

  const handleGenresLocalStorage = () => {
    const genresFromLocalStorage = localStorage.getItem('Genres');
    if (genresFromLocalStorage) {
      setSelectedGenres(JSON.parse(genresFromLocalStorage));
    }
  }

  const getCollectionPosters = (id) => {
    collectionApi
      .get((`${id}/images?api_key=${VITE_API_KEY}`))
      .then(({ data }) => {
        handleCollectionPosters(data)
      }).catch((error) => {
        console.log(error)
      })
  }

  const handleCollectionPosters = (data) => {
    const { backdrops } = data;

    const backdropsFiltered = backdrops.map(({ file_path }) => ({ file_path }))

    const maxRange = backdrops.length;
    const randomRange = Math.floor(Math.random() * (maxRange - 0) + 0);
    const randomMoviePoster = 'https://image.tmdb.org/t/p/original'
      + backdropsFiltered[randomRange].file_path;

    setBackdrop(randomMoviePoster)

  }

  useEffect(() => {
    getGenres();
    getCollectionPosters(422837);
  }, []);

  const handlePathname = (page, selectedGenres, pathname) => {
    let path = '';

    switch (pathname) {
      case '/':
        path = 'popular'
        break;
      case '/top-rated':
        path = 'top_rated'
        break;
      case '/now-playing':
        path = 'now_playing'

    }

    getMovies(page, selectedGenres, path)
  }
  
  useEffect(() => {
    handlePathname(page, selectedGenres, pathname)
  }, [page, selectedGenres, pathname]);

  useEffect(() => {
    handleGenresLocalStorage();
  }, [localStorage.getItem('Genres')]);

  return (
    <>
      <GenresBanner 
        genres={genres}
        setSelectedGenres={setSelectedGenres}
        selectedGenres={selectedGenres}
        backDrop={backDrop}
      />
      <MoviesList 
        moviesToRender={popularMovies}
      />
      <Pagination />
    </>
  );
}
