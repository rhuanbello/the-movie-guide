import { 
  Movie, 
  PosterContainer, 
  MovieAction, 
  DetailsButton, 
  Dropdown 
} from "./styles";

import moment from 'moment';

import { 
  DetailsIcon, 
  FavoriteIcon, 
  WatchIcon 
} from '../../Global/MovieIcons';

import { RateStars } from "../../Global/MovieIcons";

import { MovieCardProps } from './interfaces';
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';

export const  MovieCard = ({ onClick, movie, handleAddedMoviesObj, addedMoviesObj}: MovieCardProps) => {
  
  const { 
    title, 
    release_date, 
    poster_path,
    id
  } = movie;

  const moviePoster = `https://image.tmdb.org/t/p/w200/${poster_path}`;
  const [value, setValue] = useState(0)
  const [dropDown, setDropDown] = useState<boolean>(null);
  const onClose = () => setDropDown(null);

  useEffect(() => {
    const finalRate = addedMoviesObj?.ratedMovies?.find(m => m.id === movie.id)?.rate || 0
    setValue(finalRate)
  }, [addedMoviesObj])

  return (
    <AnimatePresence>
      <Movie 
        as={motion.li} 
        layout
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 2 }}
        exit={{ opacity: 0 }}
      >
        <PosterContainer>
          <img src={moviePoster} alt={title} onClick={() => onClick(id)}/>

          <DetailsButton
            style={{
              opacity: dropDown && '1',
            }}
            onClick={(e) => {
              setDropDown(e.currentTarget);
            }}
          >
            <DetailsIcon 
              dropDown={dropDown}
            />
          </DetailsButton>
         
        </PosterContainer>

        <p>{title}</p>
        <p>{moment(release_date).format('YYYY').toUpperCase()}</p>

      </Movie>

      <Dropdown
        anchorEl={dropDown}
        open={dropDown}
        onClose={onClose}
      >
        <MovieAction
          onClick={() => {
            handleAddedMoviesObj(movie, 'watched');
          }}
        >
          <WatchIcon
            color="#FFF"
            size={24}
            isWatched={addedMoviesObj.watchedMovies.some(m => m.id === movie.id)}
          />
        </MovieAction>
        <MovieAction
          onClick={() => { 
            handleAddedMoviesObj(movie, 'favorited');
          }}
        >
          <FavoriteIcon
            color="#FFF"
            size={24}
            isFavorite={addedMoviesObj.favoriteMovies.some(m => m.id === movie.id)}
          />
        </MovieAction>
        <MovieAction>
          <RateStars onChange={(e, rate) => {
            handleAddedMoviesObj(movie, 'rated', rate)
          }}
            value={value}
          />
        </MovieAction>

      </Dropdown>

    </AnimatePresence>
  );
}
