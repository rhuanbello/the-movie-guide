import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

import { PersonBanner } from "../../components/Person/PersonBanner";
import { PersonCredits } from "../../components/Person/PersonCredits";
import { MoviesList } from "../../components/Movies/MoviesList";

import { personApi } from "../../services/requests/api";

import { Container } from './styles'
import { useDispatch, useSelector } from "react-redux";
import { handlePersonDetails } from "../../services/store/modules/Home/actions";

export default function MovieDetails() {
  const { VITE_API_KEY } = import.meta.env;
  const { id } = useParams();
  const { page } = useParams();
  const [detailsLoading, setDetailsLoading] = useState(true);
  const dispatch = useDispatch();
  const { personDetails } = useSelector((state) => state);

  useEffect(() => {
    console.log('personDetails', personDetails)
  }, [personDetails])

  const {
    personBanner,
    personFilmography,
    personMovieDetails
  } = personDetails;

  const getPersonDetails = (id) => {
    personApi
      .get(`${id}?api_key=${VITE_API_KEY}&&append_to_response=movie_credits&language=pt-BR`)
      .then(({ data }) => {
        dispatch(handlePersonDetails(data, setDetailsLoading))
      }).catch((error) => {
        console.log(error);
      })

  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    getPersonDetails(id);
    console.log()
    scrollToTop()
  }, [id])

  return (
    <>
      <PersonBanner personBanner={personBanner} setDetailsLoading={setDetailsLoading} detailsLoading={detailsLoading}/>
      <Container>
        <PersonCredits personDetails={personMovieDetails}/>
        <section>
          <h2>Filmografia</h2>
          <p>Você já viu 0 dos {personDetails.moviesCount} filmes deste ator</p>
          <MoviesList moviesToRender={personFilmography} />
        </section>
      </Container>
    </>
  );
}

