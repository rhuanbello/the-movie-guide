import {
  Container,
  Content,
  Cards,
  PersonCard,
  Subtitle
} from './styles';

import { movieCreditsProps } from './interfaces';

export const MovieCredits = ({ movieCredits, movieTrailer }: movieCreditsProps) => {
  const profile_baseURL = 'https://image.tmdb.org/t/p/w200';
  const youtube_baseURL = `https://www.youtube.com/embed/${movieTrailer}?controls=0?autoplay=1`;

  return (
    <Container>
      <Content>
        <div>
          <Subtitle>Elenco Original</Subtitle>
          <Cards>
            {movieCredits?.map(person => (
              person.profile_path && (
                <PersonCard>
                  <img src={profile_baseURL + person.profile_path} alt="" />
                  <p>{person?.original_name}</p>
                  <p>{person?.character}</p>
                </PersonCard>
              )
            ))}
          </Cards>
        </div>
        <div>
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
        </div>
        <Subtitle>Recomendações</Subtitle>
      </Content>
    </Container>
  );
};


