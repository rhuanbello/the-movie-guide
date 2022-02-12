import {
  Container,
  Content,
  Cards,
  PersonCard,
  Subtitle
} from './styles';

import { movieCreditsProps } from './interfaces';
import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

export const MovieCredits = ({ movieCredits, movieTrailer }: movieCreditsProps) => {
  const profile_baseURL = 'https://image.tmdb.org/t/p/w200';
  const youtube_baseURL = `https://www.youtube.com/embed/${movieTrailer}?controls=0?autoplay=1`;
  const { ref, inView } = useInView();

  return (
    <Container>
      <Content>
        <motion.div
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 2 }}
        >
          <Subtitle>Elenco Original</Subtitle>
          <Cards>
            {movieCredits?.map((person, i) => (
              person.profile_path && (
                <AnimatePresence>
                  <PersonCard
                    as={motion.li}
                    animate={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    transition={{ duration: .3, delay: i * 0.3 }}
                  >
                    <img src={profile_baseURL + person.profile_path} alt="" />
                    <p>{person?.original_name}</p>
                    <p>{person?.character}</p>
                  </PersonCard>
                </AnimatePresence>
              )
            ))}
          </Cards>
        </motion.div>
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          ref={ref}
          variants={{
            hidden: {
              opacity: 0,
              x: -200
            },
            visible: {
              opacity: 1,
              x: 0,
              transition: {
                duration: .7,
              },
            }
          }}
        >

          <Subtitle>Trailer</Subtitle>
          <iframe 
            src={youtube_baseURL} 
            width="853"
            height="480"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          ></iframe>
        </motion.div>
        <Subtitle>Recomendações</Subtitle>
      </Content>
    </Container>
  );
};


