import { MovieCard } from '../MovieCard'

import { useNavigate } from "react-router-dom";

import { MoviesListProps } from './interfaces';

import { Container } from "./styles";

export const MoviesList = ({ 
  moviesToRender, 
  isRecommendation
}: MoviesListProps ) => {
  const navigate = useNavigate();

  return (
    <>
      <Container isRecommendation={isRecommendation}>
        {moviesToRender?.map(movie => (
          <MovieCard 
            key={movie.id}
            movie={movie}
            onClick={(id: number) => {
              navigate(`/movie/${id}`)
            }}
          />
        ))}
      </Container>
    </>
  );
}

