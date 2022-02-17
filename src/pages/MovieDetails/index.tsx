import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

import { MovieBanner } from '../../components/MovieBanner';
import { MovieCredits } from '../../components/MovieCredits';
import { MoviesList } from "../../components/MoviesList";

import { collectionApi, movieApi } from "../../services/api";

import {
  MovieDetailsTypes,
  MovieRecommendationsResponseTypes,
  MovieRecommendationsTypes,
  MovieCreditsCastTypes,
  dataResponseTypes,
  castTypes,
} from './interfaces';

export default function MovieDetails() {
  const { VITE_API_KEY } = import.meta.env;
  const { id } = useParams();
  const [movieCredits, setMovieCredits] = useState<MovieCreditsCastTypes[]>([])
  const [movieRecommendations, setMovieRecommendations] = useState<MovieRecommendationsTypes[]>([]);
  const [isRecommendation, setIsRecommendation] = useState<boolean | undefined>(Boolean(movieRecommendations));
  const [movieTrailer, setMovieTrailer] = useState<string>('');
  const [movieDetails, setMovieDetails] = useState<MovieDetailsTypes>({
    genres: [],
    original_title: '',
    overview: '',
    poster_path: '',
    release_date: '',
    original_language: '',
    runtime: 0,
    vote_average: 0,
    homepage: '',
    crew: [],
    classification: ''
  })

  useEffect(() => {
    console.log('movieRecommendations', movieRecommendations)
  }, [movieRecommendations])

  const getMovieDetails = (id: string | undefined) => {
    movieApi
      .get(`${id}?api_key=${VITE_API_KEY}&append_to_response=credits,videos,release_dates&language=pt-BR`)
      .then(({ data }) => {
        console.log('Movie Details', data)
        handleMovieDetails(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getMovieRecommendations = (id: string | undefined) => {
    movieApi
      .get(`${id}/recommendations?api_key=${VITE_API_KEY}&language=pt-BR&page=1`)
      .then(({ data }) => {
        const { results } = data;
        handleMovieRecommendations(results);
      })
      .catch((error) => {
        console.log(error);
      });

  }

  
  const handleMovieDetails = (data: dataResponseTypes) => {   
    console.log('handleMovieDetails', data)

    const { cast, crew } = data.credits;
    const { results } = data.videos;

    if (results.length) {
      const trailersFiltered = [...results]
        .map(({ key }) => ({ key }))
      [0]?.key

      setMovieTrailer(trailersFiltered);
    }
    
    const crewArrayFilteredAndLimited = [...crew]
    .map(({ known_for_department, name, profile_path }) => ({
      known_for_department,
      name,
      profile_path,
    }))
    .slice(0, 5);

    console.log('Iso', data?.release_dates?.results)

    const classification = data?.release_dates?.results
      ?.filter(({ iso_3166_1 }) => iso_3166_1 === 'BR' || iso_3166_1 === 'US')
      ?.sort((a, b) => a.iso_3166_1.localeCompare(b.iso_3166_1))[0]?.release_dates
      ?.filter(({ certification }) => certification !== '')[0]?.certification;     

    const movieDetailsFiltered = {
      backdrop_path: data.backdrop_path,
      genres: data.genres,
      original_title: data.original_title,
      overview: data.overview,
      poster_path: data.poster_path,
      release_date: data.release_date,
      original_language: data.original_language,
      runtime: data.runtime,
      vote_average: data.vote_average,
      homepage: data.homepage,
      crew: crewArrayFilteredAndLimited,
      classification: classification || ''
    }
    
    setMovieDetails(movieDetailsFiltered);
    handleMovieCredits(cast);
  }

  const handleMovieCredits = (cast: castTypes | any) => {
    const castArrayFiltered = [...cast]
      .map(({ original_name, profile_path, character, id }) => ({
        original_name,
        profile_path,
        character,
        id
      }))

    setMovieCredits(castArrayFiltered);
  };

  const handleMovieRecommendations = (results: MovieRecommendationsResponseTypes | any) => {
    console.log('results', results)

    const movieRecommendationsFiltered = [...results].map(({ poster_path, id, release_date, title }) => ({ poster_path, id, release_date, title }))
    setMovieRecommendations(movieRecommendationsFiltered);
  } 

  useEffect(() => {
    getMovieDetails(id);
    getMovieRecommendations(id);
    scrollToTop();
  }, [id]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <>
      <MovieBanner
        movieDetails={movieDetails}
      />
      <MovieCredits
        movieCredits={movieCredits}
        movieTrailer={movieTrailer}
      />
      <MoviesList
        moviesToRender={movieRecommendations}
        isRecommendation={isRecommendation}
      />
    </>
  );
}

