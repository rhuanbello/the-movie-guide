import { MovieCard } from '../MovieCard'

import { useNavigate, useLocation } from "react-router-dom";

import { MoviesListProps } from './interfaces';

import { Container, Content, SectionTitle } from "./styles";

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export const MoviesList = ({ 
  moviesToRender, 
  isRecommendation,
  isHomepage,
  setMoviesList
}: MoviesListProps ) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [addedMoviesObj, setAddedMoviesObj] = useState({
    watchedMovies: [],
    favoriteMovies: [],
    ratedMovies: []
  })

  useEffect(() => {
    console.log('path', pathname)
    handleSectionTitle()

  }, [pathname])

  const handleSectionTitle = () => {
    let title = 'Filmes mais Populares';

    if (pathname.includes('upcoming')) {
      title = 'Próximos Lançamentos'
    } else if (pathname.includes('top-rated')) {
      title = 'Melhores Filmes'
    } else if (pathname.includes('now-playing')) {
      title = 'Filmes em Cartaz'
    }

    return title;
  }

  const handleAddedMoviesObj = (movie, type: string, rate: number) => {

    const tempAddedMoviesObj = {...addedMoviesObj};

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
      const tempRatedMovies = [...addedMoviesObj.ratedMovies];
      const indexRated = tempRatedMovies.findIndex(m => m.id === movie.id);

      const tempWatchedMovies = [...addedMoviesObj.watchedMovies];
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

    localStorage.setItem('MoviesList', JSON.stringify(tempAddedMoviesObj))
    setAddedMoviesObj(tempAddedMoviesObj);
    setMoviesList(tempAddedMoviesObj);
   
  }

  useEffect(() => {
    console.log('lista', addedMoviesObj)
  }, [addedMoviesObj])

  const handleMoviesListFromLocalStorage = () => {
    const moviesFromLocalStorage = localStorage.getItem('MoviesList');
    if (moviesFromLocalStorage) {
      setAddedMoviesObj(JSON.parse(moviesFromLocalStorage));
    }
  }

  useEffect(() => {
    handleMoviesListFromLocalStorage();
  }, [localStorage.getItem('MoviesList')]);

  return (
    <>
      <Container>
        {
          isHomepage && 
          <SectionTitle>{handleSectionTitle()}</SectionTitle>
        }
        <Content 
          as={motion.ul}
          layout
          isRecommendation={isRecommendation}
          isHomepage={isHomepage}
        >
          {moviesToRender?.map((movie) => (
            <MovieCard 
              handleAddedMoviesObj={handleAddedMoviesObj}
              addedMoviesObj={addedMoviesObj}
              key={movie.id}
              movie={movie}
              onClick={(id: number) => {
                navigate(`/movie/${id}`)
              }}
            />
          ))}
        </Content>
      </Container>
    </>
  );
}

