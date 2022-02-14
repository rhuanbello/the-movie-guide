import { 
  Movie, 
  PosterContainer, 
  MovieAction, 
  DetailsButton, 
  Dropdown 
} from "./styles";

import moment from 'moment';
import { RateStars } from '../GenericComponents/RateStars';
import { MovieCardProps } from './interfaces';
import { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';

export const MovieCard = ({ onClick, movie }: MovieCardProps) => {
  
  const { 
    title, 
    release_date, 
    poster_path,
    id
  } = movie;

  const moviePoster = `https://image.tmdb.org/t/p/w200/${poster_path}`;

  const WatchIcon = ({ onClick, color, size }) => {
    return (
      <button 
        onClick={onClick}
        className="noFilter"
        style={{ 
            border: 'none', 
            backgroundColor: 'transparent',
            display: 'flex',
            alignItems: 'center',
            gap: 20,
            fontSize: 14,
          }}
        >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size}>
          <path fill="none" d="M0 0h24v24H0z" />
          <path fill={isWatched ? 'var(--primary)' : 'var(--terciary)'}  d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-.997-6l7.07-7.071-1.414-1.414-5.656 5.657-2.829-2.829-1.414 1.414L11.003 16z" />
        </svg>
        <p>{isWatched ? 'Remove' : 'Watch'}</p>
      </button>
    )
  }
  
  const FavoriteIcon = ({ onClick, color, size }) => {
    return (
      <button 
        onClick={onClick}
        className="noFilter"
        style={{ 
            border: 'none', 
            backgroundColor: 'transparent',
            display: 'flex',
            alignItems: 'center',
            gap: 20,
            fontSize: 14
          }}
        >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
          <path fill="none" d="M0 0H24V24H0z" />
          <path fill={isFavorite ? 'var(--primary) ' : 'var(--terciary)'}  d="M16.5 3C19.538 3 22 5.5 22 9c0 7-7.5 11-10 12.5C9.5 20 2 16 2 9c0-3.5 2.5-6 5.5-6C9.36 3 11 4 12 5c1-1 2.64-2 4.5-2z" />
        </svg>
        <p>{isFavorite ? 'Unfavorite' : 'Favorite'}</p>
      </button>
    )
  }

  const DetailsIcon = () => {
    return (
      <>
        {dropDown ? (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
            <path fill="none" d="M0 0h24v24H0z"/>
            <path fill="var(--light)" d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"/>
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
          <path fill="none" d="M0 0h24v24H0z" />
          <path fill="var(--light)" d="M5 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm14 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-7 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" /></svg>
        )}
      </>
    )
  }

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
        transition={{ duration: 1 }}
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
            <DetailsIcon />
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
          />
        </MovieAction>
        <MovieAction
          onClick={() => { }}
        >
          <WatchIcon
            onClick={() => setIsWatched(!isWatched)}
            color="#FFF"
            size={24}
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
