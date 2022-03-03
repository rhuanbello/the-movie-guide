import { MovieCard } from '../MovieCard'

import { useNavigate, useLocation } from "react-router-dom";

import { MoviesListProps } from './interfaces';

import { Container, Content, SectionTitle } from "./styles";

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

import { DefaultRootState } from '../../../services/store/modules/Home/interfaces';

export const MoviesList = ({ 
  isRecommendation,
  isHomepage,
  moviesToRender
}: MoviesListProps ) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    handleSectionTitle();
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

