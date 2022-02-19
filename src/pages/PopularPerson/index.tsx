import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { personApi } from "../../services/requests/api";

import { 
  Container, 
  Cards,
  PersonCard
} from './styles';

import { Pagination } from '../../components/Global/Pagination'
import { AnimatePresence, motion } from "framer-motion";

export default function PopularPerson() {
  const { VITE_API_KEY } = import.meta.env;
  const { id } = useParams();
  const { page } = useParams();
  const navigate = useNavigate();
  const [popularPerson, setPopularPerson] = useState([]);

  const getPopularPerson = (page) => {
    personApi
      .get(`popular?api_key=${VITE_API_KEY}&language=pt-BR&page=${page}`)
      .then(({ data }) => {
        handlePopularPerson(data)
      }).catch((error) => {
        console.log(error)
      })
  }

  const handlePopularPerson = (data) => {
    const popularPersonFiltered = [...data.results].map(
      ({ name, profile_path, known_for, id }) => ({
        id,
        name,
        profile_path,
        movies: known_for
          .map(({ original_title }) => ({ original_title }))
          .map((x) => x.original_title)
          .join(', '),
      })
    );

    setPopularPerson(popularPersonFiltered);
  };

  useEffect(() => {
    getPopularPerson(page);
  }, [page])

  const profile_baseURL = 'https://image.tmdb.org/t/p/w200';
 
  return (
    <Container>
      <h2>Pessoas Populares</h2>
      <Cards>
        {popularPerson.map(({ profile_path, id, name, movies }, i) => (
          <AnimatePresence>
            <PersonCard
              as={motion.li}
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ duration: .3, delay: i * 0.1 }}
              onClick={() => {
                navigate(`/person/${id}`)
              }}
            >
              <img src={profile_baseURL + profile_path} alt="" />
              <p>{name}</p>
              <p>{movies.trim()[movies.length - 1] === ',' ? movies.slice(-1) : movies}</p>
            </PersonCard>       
          </AnimatePresence>
        ))}
      </Cards>
      <Pagination />
    </Container>
  );
}

