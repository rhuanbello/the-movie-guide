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
import { useDispatch, useSelector } from 'react-redux';
import { handleMoviesGenres, handleMoviesToRender } from '../../services/store/modules/Home/actions';

export default function Home() {
  const { moviesToRender } = useSelector((state: DefaultRootState) => state);

  const { VITE_API_KEY } = import.meta.env;
  const { page } = useParams();
  const { pathname } = useLocation();

  const [moviesList, setMoviesList] = useState<movieListTypes[]>([]);
  const [selectedGenres, setSelectedGenres] = useState<number[]>([]);
  const [isHomepage] = useState<boolean | undefined>(Boolean(moviesList));
  const dispatch = useDispatch();

  const getMovies = (page: string | undefined, selectedGenres: Array<Number>, path: string) => {
    const genresToRender = selectedGenres?.join(',');
    console.log(`get de ${path}/${page || 1}`)

    movieApi
      .get(
        `${path}?api_key=${VITE_API_KEY}&with_genres=${genresToRender}&language=pt-BR&page=${page || 1}`
      )
      .then(({ data }) => {
        const { results } = data;
        dispatch(handleMoviesToRender(results))
      })
      .catch((error) => {
        console.log(error);
      });
      
  };

  const getGenres = () => {
    genreApi
      .get(`list?api_key=${VITE_API_KEY}&language=pt-BR`)
      .then(({ data }) => {
        const { genres } = data;
        dispatch(handleMoviesGenres(genres))
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
    getGenres();
  }, []);

  useEffect(() => {
    handlePathname(page, selectedGenres, pathname)
  }, [page, selectedGenres, pathname]);

  useEffect(() => {
    handleGenresLocalStorage();
  }, [localStorage.getItem('Genres')]);

  return (
    <>
      <GenresBanner 
        setSelectedGenres={setSelectedGenres}
        selectedGenres={selectedGenres}
      />
      <MoviesList 
        isHomepage={isHomepage} 
        moviesToRender={moviesToRender}/>
      <Pagination />
    </>
  );
}
