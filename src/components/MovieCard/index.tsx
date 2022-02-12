import { ModalRateStars, Movie, MovieOptions, PosterContainer } from "./styles";
import moment from 'moment';
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
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

  const ratingChanged = (newRating) => {
    console.log(newRating)
  }

  const WatchIcon = ({ onClick, color, size }) => {
    return (
        <button 
          onClick={onClick}
          className="noFilter"
          style={{ 
              border: 'none', 
              backgroundColor: 'transparent',
            }}
          >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size}><path fill="none" d="M0 0h24v24H0z" /><path d="M1.181 12C2.121 6.88 6.608 3 12 3c5.392 0 9.878 3.88 10.819 9-.94 5.12-5.427 9-10.819 9-5.392 0-9.878-3.88-10.819-9zM12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm0-2a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" fill={isWatched ? 'white' : 'var(--secondary)'} /></svg>
        </button>
    )
  }

  const DetailsIcon = () => {
    return (
      <button>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M4.5 10.5c-.825 0-1.5.675-1.5 1.5s.675 1.5 1.5 1.5S6 12.825 6 12s-.675-1.5-1.5-1.5zm15 0c-.825 0-1.5.675-1.5 1.5s.675 1.5 1.5 1.5S21 12.825 21 12s-.675-1.5-1.5-1.5zm-7.5 0c-.825 0-1.5.675-1.5 1.5s.675 1.5 1.5 1.5 1.5-.675 1.5-1.5-.675-1.5-1.5-1.5z" /></svg>
      </button>
    )

  }

  const [isWatched, setIsWatched] = useState(false)

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
          <img src={moviePoster} alt="" onClick={() => onClick(id)}/>
          {/* <MovieOptions>
            <WatchIcon 
              onClick={() => setIsWatched(!isWatched)} 
              color="#FFF"
              size={28}
            />
            <DetailsIcon />

            <ModalRateStars>
              <RateStars
                activeColor="yellow"
                size={24}
                onChange={ratingChanged}
              />

            </ModalRateStars>
          </MovieOptions> */}
        </PosterContainer>
        <p>{title}</p>
        <p>{moment(release_date).format('DD MMM YYYY').toUpperCase()}
        
        </p>
      </Movie>
    </AnimatePresence>
  );
}
