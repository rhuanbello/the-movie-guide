import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

import { PersonBanner } from "../../components/Person/PersonBanner";
import { PersonCredits } from "../../components/Person/PersonCredits";
import { MoviesList } from "../../components/Movies/MoviesList";

import { personApi } from "../../services/requests/api";

import { Container } from './styles'

export default function MovieDetails() {
  const { VITE_API_KEY } = import.meta.env;
  const { id } = useParams();
  const { page } = useParams();
  const [personDetails, setPersonDetails] = useState([]);
  const [personFilmography, setPersonFilmography] = useState([]);
  const [personBanner, setPersonBanner] = useState([]);
  const [detailsLoading, setDetailsLoading] = useState(true);

  const getPersonDetails = (id) => {
    personApi
      .get(`${id}?api_key=${VITE_API_KEY}&&append_to_response=movie_credits&language=pt-BR`)
      .then(({ data }) => {

        handlePersonDetails(data)
      }).catch((error) => {
        console.log(error)
      })

  }

  const handlePersonDetails = (data) => {

    const personBannerFiltered = {
      biography: data.biography,
      homepage: data.homepage,
      name: data.name,
      profile_path: data.profile_path,

    }

    const personFilmographyFiltered = [...data.movie_credits.cast].map(
      ({ title, release_date, poster_path, id, popularity }) => ({
        title,
        release_date,
        poster_path,
        id,
        popularity
      })
    ).filter(movie => movie.poster_path !== null)
    .sort((a, b) => b.popularity - a.popularity);

    const personDetailsFiltered = {
      also_known_as: data.also_known_as,
      birthday: data.birthday,
      place_of_birth: data.place_of_birth,
      gender: data.gender,
      moviesCount: personFilmographyFiltered.length
    }
  
    setPersonBanner(personBannerFiltered);
    setPersonDetails(personDetailsFiltered);
    setPersonFilmography(personFilmographyFiltered);
    setTimeout(() => {
      setDetailsLoading(false);
    }, 800)
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
        <PersonCredits personDetails={personDetails}/>
        <section>
          <h2>Filmografia</h2>
          <p>Você já viu 0 dos {personDetails.moviesCount} filmes deste ator</p>
          <MoviesList moviesToRender={personFilmography} />
        </section>
      </Container>
    </>
  );
}

