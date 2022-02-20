import { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { GenresBanner } from '../../components/Movies/GenresBanner';
import { MoviesList } from '../../components/Movies/MoviesList';
import { Pagination } from '../../components/Global/Pagination';

import { collectionApi, genreApi, movieApi } from '../../services/requests/api';

import {
  movieListTypes,
  genresTypes,
} from './interfaces';

export default function Home() {
  const { VITE_API_KEY } = import.meta.env;
  const { page } = useParams();
  const { pathname } = useLocation();

  const [moviesList, setMoviesList] = useState<movieListTypes[]>([]);
  const [genres, setGenres] = useState<genresTypes[]>([]);
  const [selectedGenres, setSelectedGenres] = useState<number[]>([]);
  const [backDrop, setBackdrop] = useState('')
  const [isHomepage] = useState<boolean | undefined>(Boolean(moviesList));

  const getMovies = (page: string | undefined, selectedGenres: Array<Number>, path: string) => {
    const genresToRender = selectedGenres?.join(',');

    console.log(`get de ${path}/${page || 1}`)

    movieApi
      .get(
        `${path}?api_key=${VITE_API_KEY}&with_genres=${genresToRender}&language=pt-BR&page=${page || 1}`
      )
      .then(({ data }) => {
        const { results } = data;
        handleMoviesList(results);
      })
      .catch((error) => {
        console.log(error);
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

    console.log(moviesListFiltered)

    setMoviesList(moviesListFiltered);

  };

  const getGenres = () => {
    genreApi
      .get(`list?api_key=${VITE_API_KEY}&language=pt-BR`)
      .then(({ data }) => {
        const { genres } = data;
        setGenres(genres);
        console.log('Genres', genres)
      })
      .catch(error => {
        console.log(error)
      });

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

    // setBackdrop(randomMoviePoster)
    setBackdrop('https://www.themoviedb.org/t/p/original/tNE9HGcFOH8EpCmzO7XCYwqguI0.jpg')

  }

  useEffect(() => {
    getGenres();
    getCollectionPosters(422837);
  }, []);

  const handlePathname = (page, selectedGenres, pathname) => {
    let path = '';

    console.log(pathname)

    if (pathname.includes('top-rated')) {
      path = 'top_rated'
    } else if (pathname.includes('now-playing')) {
      path = 'now_playing'
    } else if (pathname.includes('upcoming')) {
      path = 'upcoming'
    } else {
      path = 'popular'
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
        isHomepage={isHomepage}
        moviesToRender={moviesList}
      />
      <Pagination />
    </>
  );
}
