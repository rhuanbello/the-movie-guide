import { Skeleton } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Container,
  PersonPoster,
  PersonBio
} from './styles';

export const PersonBanner = ({ 
  personBanner,
  detailsLoading
}) => {

  const { 
    biography,
    homepage,
    name,
    profile_path
  } = personBanner || {};

  const imageBaseURL = 'https://image.tmdb.org/t/p/'

  return (
    <Container>
      <AnimatePresence>
        {detailsLoading ? (
          <Skeleton variant="rectangular" width="300px" height="450px" animation="wave" sx={{
            borderRadius: '5px',
          }} />
        ) : (
          <a href={homepage} target="_blank">
            <PersonPoster
              as={motion.img}
              src={imageBaseURL + 'w300' + profile_path}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: .3 }}
            />
          </a>
        )}
      </AnimatePresence> 
      <PersonBio>

        {detailsLoading ? (
          <Skeleton variant="text" width="250px" height="50px" animation="wave" />
        ) : (
          <h2>{name}</h2>
        )}

        {detailsLoading ? (
          <Skeleton variant="text" width="100px" height="35px" animation="wave" />
        ) : (
          <h3>{biography && 'Biografia'}</h3>
        )}

        {detailsLoading ? (
          <>
            {biography ? (
              <>
                <Skeleton variant="text" width="600px" height="35px" animation="wave" />
                <Skeleton variant="text" width="500px" height="35px" animation="wave" />
                <Skeleton variant="text" width="450px" height="35px" animation="wave" />
              </>
            ) : (
              <Skeleton variant="text" width="400px" height="35px" animation="wave" />
            )}
          </>
        ) : (
          <p>{biography || `Ops! A Biografia de ${name} não foi encontrada.`}</p>
        )}
        
      </PersonBio>
    </Container>
  );
};

