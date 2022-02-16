import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

import { PersonBanner } from "../../components/PersonBanner";
import { PersonCredits } from "../../components/PersonCredits";
import { MoviesList } from "../../components/MoviesList";

import { movieApi } from "../../services/api";

import { Container } from './styles'

export default function MovieDetails() {
  const { VITE_API_KEY } = import.meta.env;
  const { id } = useParams();
  const { page } = useParams();
  const [popularMovies, setPopularMovies] = useState([]);
  const [isFilmography, setIsFilmography] = useState(false);

  const getMovies = () => {

    movieApi
      .get(
        `popular?api_key=${VITE_API_KEY}&language=pt-BR&page=1`
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

  useEffect(() => {
    getMovies();
    setIsFilmography(true);
  }, []);

  return (
    <>
      <PersonBanner />
      <Container>
        <PersonCredits />
        <section>
          <h2>Filmografia</h2>
          <p>Você já viu 2 dos 32 filmes deste ator</p>
          <MoviesList moviesToRender={popularMovies} isFilmography={isFilmography}/>
        </section>
      </Container>
    </>
  );
}

