import moment from 'moment';
import { useEffect, useState } from 'react';
import {
  Container,
  MovieInfos,
  Subtitle,
  MovieProducers,
  MoviePoster,
  MovieBannerActions
} from './styles';

import { PieChart } from 'react-minimal-pie-chart';

import { MovieBannerProps } from './interfaces';
import { AnimatePresence, motion } from 'framer-motion';
import { FavoriteIcon, WatchIcon, RateStars } from '../../Global/MovieIcons';
import { Skeleton } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { cleaningPreviousState, handleAddedMoviesObj } from '../../../services/store/modules/Home/actions';

export const MovieBanner = ({ detailsLoading }: MovieBannerProps) => {
  const { movieDetails, addedMoviesObj } = useSelector((state) => state);
  const [value, setValue] = useState(0);
  const dispatch = useDispatch();

  const {
    id, 
    crew,
    genres,
    homepage,
    original_language,
    original_title,
    overview,
    poster_path,
    release_date,
    runtime,
    vote_average,
    classification,
    backdrop_path
  } = movieDetails;

  const movie = {
    id, 
    release_date,
    poster_path,
    title: original_title,
  }
  
  const imageBaseURL = 'https://image.tmdb.org/t/p/'

  useEffect(() => {
    const finalRate = addedMoviesObj?.ratedMovies?.find(m => m.id === movieDetails.id)?.rate || 0
    setValue(finalRate)
  }, [addedMoviesObj, movieDetails])


  useEffect(() => {
    console.count('Renderizou')
  }, [movieDetails])

  return (
    <Container 
      backdrop={imageBaseURL + 'w500' + backdrop_path}
    >
      <div>
        <a href={homepage} target="_blank">
          <AnimatePresence>
            {detailsLoading ? (
              <Skeleton variant="rectangular" width="300px" height="400px" animation="wave" sx={{
                borderRadius: '5px',
              }} />
            ) : (
              <MoviePoster 
                as={motion.img}
                src={imageBaseURL + 'w400' + poster_path} 
                initial={{ y: -20, opacity: 0}}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: .3 }}
              />
            )}
          </AnimatePresence>  
        </a>
        <MovieInfos>

          {detailsLoading ? (
            <Skeleton variant="text" width="40%" height="50px" animation="wave" />
          ) : (
            <h2>{original_title}</h2>
          )}

          {detailsLoading ? (
            <Skeleton variant="text" width="30%" height="35px" animation="wave" />
          ) : (
            <Subtitle>
              {classification && (
                <span>{classification === 'L' ? 'Livre' : classification === 'R' ? '18 anos' : classification + ' anos'}</span>
              )}
              <span>{moment(release_date).format('DD/MM/YYYY')} ({original_language?.toUpperCase()})</span>
              <span>{genres?.map(genre => genre.name).join(', ')}</span>
              <span>{Math.floor(runtime / 60)}h {runtime % 60}m</span>
            </Subtitle>
          )}

          {detailsLoading ? (
            <Skeleton variant="text" width="45%" height="60px" animation="wave" />
          ) : (
            <MovieBannerActions>
              <PieChart
                data={[
                  {
                    value: vote_average,
                    color: vote_average >= 70 ? 'var(--primary)' : 'red' 
                  },
                ]}
                totalValue={100}
                lineWidth={20}
                label={({ dataEntry }) => `${dataEntry.value}%`}
                labelPosition={0}
                rounded
                startAngle={270}
                style={{ 
                  width: 50, 
                  backgroundColor: 'rgba(255, 255, 255, 0.1)', 
                  borderRadius: '50%' 
                }}
                labelStyle={{ 
                  fontSize: 28, 
                  fill: vote_average >= 70 ? 'var(--primary)' : 'red', 
                  fontWeight: 'bold',
                }}
              />
              <p>Avaliação dos usuários</p>
                <button
                  onClick={() => {
                    dispatch(handleAddedMoviesObj(movie, 'watched'))
                  }}
                >
                  <WatchIcon
                    size={20}
                    noText
                    isWatched={addedMoviesObj.watchedMovies.some(m => m.id === movie.id)}
                    defaultColor='var(--light)'
                  />
                </button>
              <button
                onClick={() => {
                  dispatch(handleAddedMoviesObj(movie, 'favorited'))
                }}
              >
                <FavoriteIcon 
                  size={20}
                  noText
                  isFavorite={addedMoviesObj.favoriteMovies.some(m => m.id === movie.id)}
                  defaultColor='var(--light)' onClick={undefined} actionColor={undefined}                
                />
              </button>
              <button>
                <RateStars onChange={(e, rate) => {
                  dispatch(handleAddedMoviesObj(movie, 'rated', rate))
                }}
                value={value}
                defaultColor='var(--light)'
                hoverX
                size={22}
              />
              </button>
            </MovieBannerActions>
          )}


          <article>
            {detailsLoading ? (
              <Skeleton variant="text" width="10%" height="35px" animation="wave" />
            ) : (
              <h3>Sinopse</h3>
            )}
            {detailsLoading ? (
              <Skeleton variant="text" width="80%" height="80px" animation="wave" />
            ) : (
              <p>{overview}</p>
            )}
          </article>

          {detailsLoading ? (
            <Skeleton variant="text" width="60%" height="80px" animation="wave" />
          ) : (
            <MovieProducers>
              {crew?.map(person => (
                <li>
                  <span>{person.name}</span>
                  <span>{person.known_for_department}</span>
                </li>
              ))}
            </MovieProducers>
          )}
        </MovieInfos>
      </div>
    </Container>
  );
};


