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

export const MovieCard = ({ onClick, movie }: MovieCardProps) => {
  
  const { 
    title, 
    release_date, 
    poster_path,
    id
  } = movie;

  const moviePoster = `https://image.tmdb.org/t/p/w200/${poster_path}`;
  
  const [isWatched, setIsWatched] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [dropDown, setDropDown] = useState<boolean>(null);
  const onClose = () => setDropDown(null);

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
          onClick={() => { }}
        >
          <FavoriteIcon
            onClick={() => setIsFavorite(!isFavorite)}
            color="#FFF"
            size={24}
            isFavorite={isFavorite}
          />
        </MovieAction>
        <MovieAction
          onClick={() => { }}
        >
          <WatchIcon
            onClick={() => setIsWatched(!isWatched)}
            color="#FFF"
            size={24}
            isWatched={isWatched}
          />
        </MovieAction>
        <MovieAction
          onClick={() => {}}
        >
          <RateStars />
        </MovieAction>

      </Dropdown>

    </AnimatePresence>
  );
}
