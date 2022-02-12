import { MovieCard } from '../MovieCard'

import { useNavigate } from "react-router-dom";

import { MoviesListProps } from './interfaces';

import { Container, Content, SectionTitle } from "./styles";

import { motion } from 'framer-motion';

export const MoviesList = ({ 
  moviesToRender, 
  isRecommendation
}: MoviesListProps ) => {
  const navigate = useNavigate();

  return (
    <>
      <Container>
        <SectionTitle>Popular Films This Week</SectionTitle>
        <Content 
          as={motion.ul}
          layout
          isRecommendation={isRecommendation}>
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

