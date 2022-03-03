import { useEffect, useLayoutEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { personApi } from "../../services/requests/api";

import { 
  Container, 
  Cover,
  MoviesSection
} from './styles';

import { MoviesList } from "../../components/Movies/MoviesList";
import { useSelector } from "react-redux";
import { DropZone } from '../../components/Global/DropZone'

export default function MyProfile() {
  const { addedMoviesObj } = useSelector((state) => state);
  const { watchedMovies, favoriteMovies } = addedMoviesObj;

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
            <DropZone />
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

      {favoriteMovies.length > 0 && (
        <MoviesSection>
          <h3>Filmes favoritos</h3>

          <MoviesList 
            moviesToRender={favoriteMovies}
            isRecommendation={true}
          />

        </MoviesSection>
      )}

      {watchedMovies.length > 0 && (
        <MoviesSection>
          <h3>Assisti Recentemente</h3>

          <MoviesList moviesToRender={watchedMovies} />

        </MoviesSection>
      )}

      {favoriteMovies.length <= 0 && watchedMovies.length <= 0 && (
        <MoviesSection>
          <h3>Ops... não há nada por aqui.</h3>
        </MoviesSection>
      )}
  
    </Container>
  );
}

