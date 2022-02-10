import moment from 'moment';
import { useEffect } from 'react';
import {
  Container,
  MovieInfos,
  Subtitle,
  CircularPercentage,
  MovieProducers,
  MoviePoster
} from './styles';

import { PieChart } from 'react-minimal-pie-chart';

import { MovieBannerProps } from './interfaces';

export const MovieBanner = ({ movieDetails }: MovieBannerProps) => {

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
    classification
  } = movieDetails;

  console.log('MOvie', movieDetails)
  
  const moviePoster = `https://image.tmdb.org/t/p/w400${poster_path}`;
  const voteAverage = +vote_average.toString().replace('.', '');
  useEffect(() => console.log(movieDetails), [movieDetails])

  return (
    <Container>
      <div>
        <a href={homepage} target="_blank">
          <MoviePoster src={moviePoster} alt={original_title}/>
        </a>
        <MovieInfos>
          <h2>{original_title}</h2>

          <Subtitle>
            <span>{classification === 'L' ? 'Livre' : classification + ' anos'}</span>
            <span>{moment(release_date).format('DD/MM/YYYY')} ({original_language.toUpperCase()})</span>
            <span>{genres.map(genre => genre.name).join(', ')}</span>
            <span>{Math.floor(runtime / 60)}h {runtime % 60}m</span>
          </Subtitle>

          <div>
            <PieChart
              data={[
                {
                  value: voteAverage,
                  color: voteAverage > 70 ? '#14FF00' : 'red' 
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
                backgroundColor: 'var(--transparent-default)', 
                borderRadius: '50%' 
              }}
              labelStyle={{ 
                fontSize: 32, 
                fill: voteAverage > 70 ? '#14FF00' : 'red', 
                fontWeight: 'bold' 
              }}
            />
            <p>Avaliação dos usuários</p>
          </div>

          <article>
            <h3>Sinopse</h3>
            <p>{overview}</p>
          </article>
          <MovieProducers>
            {crew.map(person => (
              <li>
                <span>{person.name}</span>
                <span>{person.known_for_department}</span>
              </li>
            ))}
          </MovieProducers>
        </MovieInfos>
      </div>
    </Container>
  );
};


