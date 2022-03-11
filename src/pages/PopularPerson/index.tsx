import { useEffect, useLayoutEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { personApi } from "../../services/requests/api";
import { ScrollBack } from '../../components/Global/MovieIcons';

import { 
  Container, 
  Cards,
  PersonCard
} from './styles';

import { AnimatePresence, motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { handlePopularPerson } from '../../services/store/modules/PopularPerson/actions'
import { DefaultRootState } from "../../services/store/interfaces";
import { popularPersonProps } from "../../services/store/modules/PopularPerson/interfaces";

export default function PopularPerson() {
  //@ts-ignore
  const { VITE_API_KEY } = import.meta.env;

  const navigate = useNavigate();
  const [pageCount, setPageCount] = useState(1);
  const [scrollY, setScrollY] = useState<number | undefined>(0);
  const { popularPerson } = useSelector((state): DefaultRootState => state);
  const dispatch = useDispatch();

  const getPopularPerson = (page: string | number | undefined) => {
    personApi
      .get(`popular?api_key=${VITE_API_KEY}&language=pt-BR&page=${page}`)
      .then(({ data }) => {
        dispatch(handlePopularPerson(data))
      }).catch((error) => {
        console.log(error)
      })
  }

  useEffect(() => {
    getPopularPerson(pageCount)
  }, [pageCount])

  useLayoutEffect(() => {
    const updatePosition = () => {
      const maxHeight = document.body.offsetHeight - 10;
      const scrollYCalc = window.innerHeight + window.scrollY;
      setScrollY(scrollYCalc);

      if (scrollYCalc >= maxHeight) {
        setPageCount(pageCount => pageCount + 1);
    
      }
    }
    window.addEventListener('scroll', updatePosition);
    return () => window.removeEventListener('scroll', updatePosition);
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const profile_baseURL = 'https://image.tmdb.org/t/p/';
 
  return (
    <Container>
      <h2>Pessoas Populares</h2>
      <Cards>
        {popularPerson?.map(({ profile_path, id, name, movies }: any, i: number) => (
          <AnimatePresence>
            <PersonCard
              as={motion.li}
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ duration: .3 }}
              onClick={() => {
                navigate(`/person/${id}`)
              }}
            >
              <img src={profile_baseURL + 'w200' + profile_path} alt="" />
              <p>{name}</p>
              <p>{movies.length >= 65 ? movies.substring(0, 65) + '...' : movies}</p>
          </PersonCard>      
          </AnimatePresence>
        ))}
      </Cards>
      <ScrollBack 
        scrollY={scrollY}
        onClick={() => scrollToTop()}
      />
    </Container>
  );
}

