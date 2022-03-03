import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

import { personApi } from "../../services/requests/api";
import { handlePersonDetails } from "../../services/store/modules/Home/actions";

import { PersonBanner } from "../../components/Person/PersonBanner";
import { PersonCredits } from "../../components/Person/PersonCredits";
import { MoviesList } from "../../components/Movies/MoviesList";

import { Container } from './styles';

export default function PersonDetails() {
  const { VITE_API_KEY } = import.meta.env;
  const { id } = useParams();
  const [detailsLoading, setDetailsLoading] = useState(true);
  const dispatch = useDispatch();
  const { personDetails, addedMoviesObj } = useSelector((state) => state);

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
    scrollToTop()
  }, [id])

  const handlePersonMoviesWatched = () => {
    const personMoviesIDs = personFilmography?.map(x => x.id);
    const personWatchedMoviesCount = addedMoviesObj.watchedMovies?.filter(({ id }) => personMoviesIDs?.includes(id))?.length
    return personWatchedMoviesCount;
  }

  return (
    <>
      <PersonBanner
        personBanner={personBanner}
        setDetailsLoading={setDetailsLoading}
        detailsLoading={detailsLoading}
      />
      <Container>
        <PersonCredits personDetails={personMovieDetails} />
        <section>
          <h2>Filmografia</h2>
          <p>Você já viu {handlePersonMoviesWatched()} de {personMovieDetails?.moviesCount} filmes deste ator</p>
          <MoviesList moviesToRender={personFilmography} />
        </section>
      </Container>
    </>
  );
}

