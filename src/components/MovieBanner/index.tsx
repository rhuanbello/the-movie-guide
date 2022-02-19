import moment from 'moment';
import { useEffect, useState } from 'react';
import {
  Container,
  MovieInfos,
  Subtitle,
  CircularPercentage,
  MovieProducers,
  MoviePoster,
  MovieBannerActions
} from './styles';

import { PieChart } from 'react-minimal-pie-chart';

import { MovieBannerProps } from './interfaces';
import { AnimatePresence, motion } from 'framer-motion';
import { RateStars } from '../GenericComponents/RateStars';
import { FavoriteIcon, WatchIcon } from '../GenericComponents/GenericIcons';
import { Skeleton } from '@mui/material';

export const MovieBanner = ({ movieDetails, detailsLoading, setDetailsLoading }: MovieBannerProps) => {
  const [isWatched, setIsWatched] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const { 
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

  console.log('MOvie', movieDetails)
  
  const imageBaseURL = 'https://image.tmdb.org/t/p/'

  const voteAverage = +vote_average.toString().replace('.', '');
  useEffect(() => {
    console.log(movieDetails)
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
            <Skeleton variant="text" width="30%" height="50px" animation="wave" />
          ) : (
            <h2>{original_title}</h2>
          )}

          {detailsLoading ? (
            <Skeleton variant="text" width="50%" height="35px" animation="wave" />
          ) : (
            <Subtitle>
              {classification && (
                <span>{classification === 'L' ? 'Livre' : classification === 'R' ? '18 anos' : classification + ' anos'}</span>
              )}
              <span>{moment(release_date).format('DD/MM/YYYY')} ({original_language.toUpperCase()})</span>
              <span>{genres.map(genre => genre.name).join(', ')}</span>
              <span>{Math.floor(runtime / 60)}h {runtime % 60}m</span>
            </Subtitle>
          )}

          {detailsLoading ? (
            <Skeleton variant="text" width="60%" height="80px" animation="wave" />
          ) : (
            <MovieBannerActions>
              <PieChart
                data={[
                  {
                    value: voteAverage,
                    color: voteAverage > 70 ? 'var(--primary)' : 'red' 
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
                  fill: voteAverage > 70 ? 'var(--primary)' : 'red', 
                  fontWeight: 'bold',
                }}
              />
              <p>Avaliação dos usuários</p>
              <button
                onClick={() => {
                  setIsFavorite(!isFavorite)
                }}
              >
                <FavoriteIcon 
                    size={20}
                    noText
                    isFavorite={isFavorite}
                    defaultColor='var(--light)' onClick={undefined} actionColor={undefined}                />
              </button>
              <button
                onClick={() => {
                  setIsWatched(!isWatched)
                }}
              >
                <WatchIcon 
                  size={20}
                  noText
                  isWatched={isWatched}
                  defaultColor='var(--light)'
                />
              </button>
              <button>
                <RateStars 
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
              <Skeleton variant="text" width="100%" height="80px" animation="wave" />
            ) : (
              <p>{overview}</p>
            )}
          </article>

          {detailsLoading ? (
            <Skeleton variant="text" width="70%" height="80px" animation="wave" />
          ) : (
            <MovieProducers>
              {crew.map(person => (
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


