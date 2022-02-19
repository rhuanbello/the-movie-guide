import { MovieCard } from '../MovieCard'

import { useNavigate, useLocation } from "react-router-dom";

import { MoviesListProps } from './interfaces';

import { Container, Content, SectionTitle } from "./styles";

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export const MoviesList = ({ 
  moviesToRender, 
  isRecommendation,
  isHomepage
}: MoviesListProps ) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [addedMoviesObj, setAddedMoviesObj] = useState({
    watchedMovies: [],
    favoriteMovies: []
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

  const handleAddedMoviesObj = (movie, type) => {
    console.log('óia ele', movie, type)

    const tempAddedMoviesObj = {...addedMoviesObj};

    if (type === 1) {
      const tempFavoriteMovies = [...addedMoviesObj.favoriteMovies];
      const index = tempFavoriteMovies.findIndex(m => m.id === movie.id);

      if (index === -1) {
        tempFavoriteMovies.push(movie);
      } else {
        tempFavoriteMovies.splice(index, 1);
      }

      tempAddedMoviesObj.favoriteMovies = [...tempFavoriteMovies];

    } else {

      const tempWatchedMovies = [...addedMoviesObj.watchedMovies];
      const index = tempWatchedMovies.findIndex(m => m.id === movie.id);

      if (index === -1) {
        tempWatchedMovies.push(movie);
      } else {
        tempWatchedMovies.splice(index, 1);
      }

      tempAddedMoviesObj.watchedMovies = [...tempWatchedMovies];

    }

    localStorage.setItem('MoviesList', JSON.stringify(tempAddedMoviesObj))
    setAddedMoviesObj(tempAddedMoviesObj);
   
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

