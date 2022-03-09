import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import { MovieBanner } from '../../components/Movies/MovieBanner';
import { MovieCredits } from '../../components/Movies/MovieCredits';
import { MoviesList } from "../../components/Movies/MoviesList";
import { movieApi } from "../../services/requests/api";
import { DefaultRootState } from "../../services/store/interfaces";
import { cleaningPreviousState } from "../../services/store/modules/Global/actions";
import { handleMovieCast, handleMovieDetails, handleMovieRecommendations, handleMovieTrailer } from "../../services/store/modules/MovieDetails/actions";

export default function MovieDetails() {
  const { movieRecommendations } = useSelector((state): DefaultRootState => state);

  const dispatch = useDispatch();
  const { VITE_API_KEY } = import.meta.env;
  const { id } = useParams();
  const [detailsLoading, setDetailsLoading] = useState(true);
  const [isRecommendation] = useState<boolean | undefined>(Boolean(movieRecommendations));

  const getMovieDetails = (id: string | undefined) => {
    const appendItems = 'credits,videos,release_dates';

    movieApi
      .get(`${id}?api_key=${VITE_API_KEY}&append_to_response=${appendItems}&language=pt-BR`)
      .then(({ data }) => {

        dispatch(handleMovieDetails(data, setDetailsLoading));
        dispatch(handleMovieTrailer(data.videos.results));
        dispatch(handleMovieCast(data.credits.cast));
    
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
        dispatch(handleMovieRecommendations(results));
      })
      .catch((error) => {
        console.log(error);
      });

  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    getMovieDetails(id);
    getMovieRecommendations(id);
    scrollToTop();
    return () => {
      dispatch(cleaningPreviousState())
    };
  }, [id]);

  return (
    <>
      <MovieBanner detailsLoading={detailsLoading} setDetailsLoading={setDetailsLoading} />
      <MovieCredits />
      <MoviesList moviesToRender={movieRecommendations} isRecommendation={isRecommendation} />
    </>
  );
}

