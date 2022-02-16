import { useEffect, useState } from 'react';
import {
  Container,
  PersonInfo
} from './styles';

export const PersonCredits = () => {

  return (
    <Container>
      <h2>Informações Pessoais</h2>
      <PersonInfo>
        <h3>Gênero</h3>
        <p>Masculino</p>
      </PersonInfo>
      <PersonInfo>
        <h3>Data de Nascimento</h3>
        <p>18 de Dezembro de 1963 (60 anos de idade)</p>
      </PersonInfo>
      <PersonInfo>
        <h3>Local de Nascimento</h3>
        <p>San Diego, Cafornia, USA</p>
      </PersonInfo>
      <PersonInfo>
        <h3>Aparece em</h3>
        <p>32 filmes</p>
      </PersonInfo>
      <PersonInfo>
        <h3>Também conhecido(a) como</h3>
        <p>Бред Питт</p>
        <p>Buratto Pitto</p>
        <p>Брэд Питт</p>
        <p>Б畢·彼特</p>
        <p>ブラッド・ピット</p>
      </PersonInfo>
    </Container>
  );
};


