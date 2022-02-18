import { useEffect, useState } from 'react';
import {
  Container,
  PersonPoster,
  PersonBio
} from './styles';

import personPoster from '../../assets/personPoster.png'

export const PersonBanner = ({ 
  personBanner
}) => {

  const { biography,
    homepage,
    name,
    profile_path} = personBanner;

  const imageBaseURL = 'https://image.tmdb.org/t/p/'

  return (
    <Container>
      <a href={homepage} target="_blank">
        <PersonPoster 
          src={imageBaseURL + 'w500' + profile_path}
        />
      </a>
      <PersonBio>
        <h2>{name}</h2>
        <h3>{biography && 'Biografia'}</h3>
        <p>{biography || `Ops! A Biografia de ${name} não foi encontrada.`}</p>
      </PersonBio>
    </Container>
  );
};


