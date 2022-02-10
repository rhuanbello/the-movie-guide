import { Movie } from "./styles";
import moment from 'moment';

import { MovieCardProps } from './interfaces';

export const MovieCard = ({ onClick, movie }: MovieCardProps) => {
  
  const { 
    title, 
    release_date, 
    poster_path,
    id
  } = movie;

  const moviePoster = `https://image.tmdb.org/t/p/w200/${poster_path}`;

  return (
    <Movie onClick={() => onClick(id)}>
      <img src={moviePoster} alt="" />
      <p>{title}</p>
      <p>{moment(release_date).format('DD MMM YYYY').toUpperCase()}</p>
    </Movie>
  );
}
