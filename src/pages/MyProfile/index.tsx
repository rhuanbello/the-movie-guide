import { useEffect, useLayoutEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { personApi } from "../../services/requests/api";

import { ScrollBack } from '../../components/Global/MovieIcons'

import { 
  Container, 
  Cover,
  MoviesSection
} from './styles';

import { AnimatePresence, motion } from "framer-motion";
import { MoviesList } from "../../components/Movies/MoviesList";

export default function MyProfile() {
  const [moviesList, setMoviesList] = useState({
    watchedMovies: [],
    favoriteMovies: [],
    ratedMovies: []
  })

  useEffect(() => {
    const moviesFromLocalStorage = localStorage.getItem('MoviesList')

    if (moviesFromLocalStorage) {
      const moviesList = JSON.parse(moviesFromLocalStorage);
      console.log('atualizou')
      setMoviesList(moviesList)
    }

    console.log('att')

  }, [localStorage.getItem('MoviesList')]);

  const {
    watchedMovies,
    favoriteMovies,
    ratedMovies
  } = moviesList;

  const handleThisYearMoviesWatched = (watchedMovies) => {
    const thisYearCount = [...watchedMovies]?.filter(
      (movie) =>
        new Date(movie.createdAt).getFullYear() === new Date().getFullYear()
    ).length;

    return thisYearCount;

  }

  return (
    <Container>

      <Cover
        backdrop={'https://www.themoviedb.org/t/p/original/3GppgdtQeVKfN6JhvGIGWYVsItn.jpg'}
      >

        <div>
          <div>
            <img src="https://github.com/rhuanbello.png" />
            <div>
              <h2>Rhuan Bello</h2>
              <p>Front-End Developer | INFJ-T não tenho nada à oferecer</p>
            </div>
          </div>
          <ul>
            <li>
              <p>{watchedMovies?.length}</p>
              <span>Já vi</span>
            </li>
            <li>
              <p>{handleThisYearMoviesWatched(watchedMovies)}</p>
              <span>Neste ano</span>
            </li>
            <li>
              <p>{favoriteMovies?.length}</p>
              <span>Favoritos</span>
            </li>
          </ul>

        </div>

       
      </Cover>

      <MoviesSection>
        <h3>Filmes favoritos</h3>

        <MoviesList 
          moviesToRender={favoriteMovies}
          isRecommendation={true}
          setMoviesList={setMoviesList}
        />

      </MoviesSection>

      <MoviesSection>
        <h3>Assisti Recentemente</h3>

        <MoviesList 
          moviesToRender={watchedMovies}
          setMoviesList={setMoviesList}
        />

      </MoviesSection>
    
    </Container>
  );
}

