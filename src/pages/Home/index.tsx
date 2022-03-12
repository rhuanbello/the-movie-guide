import { useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { genreApi, movieApi } from '../../services/requests/api';
import { handleMoviesGenres } from '../../services/store/modules/Home/actions';
import { handleMoviesToRender } from '../../services/store/modules/Global/actions';
import { DefaultRootState } from '../../services/store/interfaces';

import { GenresBanner } from '../../components/Movies/GenresBanner';
import { MoviesList } from '../../components/Movies/MoviesList';
import { Pagination } from '../../components/Global/Pagination';

export default function Home() {
  //@ts-ignore
  const { VITE_API_KEY } = import.meta.env;
  
  const { moviesToRender, selectedGenres } = useSelector((state: DefaultRootState) => state);
  const { page } = useParams();
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  const getMovies = (
    page: string | undefined, 
    selectedGenres: Array<Number> | undefined, 
    path: string
  ) => {
    const genresToRender = selectedGenres?.join(',');

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

  const handlePathname = (
    page: string | undefined, 
    selectedGenres: Array<Number> | undefined, 
    pathname: string
  ) => {
    let path = '';

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

  return (
    <>
      <GenresBanner />
      <MoviesList isHomepage={true} moviesToRender={moviesToRender} />
      <Pagination />
    </>
  );
}
