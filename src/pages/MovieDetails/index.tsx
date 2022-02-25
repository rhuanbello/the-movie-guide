import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import { MovieBanner } from '../../components/Movies/MovieBanner';
import { MovieCredits } from '../../components/Movies/MovieCredits';
import { MoviesList } from "../../components/Movies/MoviesList";
import { movieApi } from "../../services/requests/api";
import { handleMovieCast, handleMovieDetails, handleMovieRecommendations, handleMovieTrailer } from "../../services/store/modules/Home/actions";

export default function MovieDetails() {
  const { movieRecommendations } = useSelector((state) => state)
  const dispatch = useDispatch();
  const { VITE_API_KEY } = import.meta.env;
  const { id } = useParams();
  const [detailsLoading, setDetailsLoading] = useState(false);
  const [isRecommendation] = useState<boolean | undefined>(Boolean(movieRecommendations));

  const getMovieDetails = (id: string | undefined) => {
    const appendItems = 'credits,videos,release_dates';

    movieApi
      .get(`${id}?api_key=${VITE_API_KEY}&append_to_response=${appendItems}&language=pt-BR`)
      .then(({ data }) => {

        dispatch(handleMovieDetails(data));
        dispatch(handleMovieTrailer(data.videos.results));
        dispatch(handleMovieCast(data.credits.cast));

        // setTimeout(() => {
        //   setDetailsLoading(false);
        // }, 700)
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

  useEffect(() => {
    getMovieDetails(id);
    getMovieRecommendations(id);
    scrollToTop();
    // setDetailsLoading(true);
  }, [id]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const [addedMoviesObj, setAddedMoviesObj] = useState({
    watchedMovies: [],
    favoriteMovies: [],
    ratedMovies: []
  })

  const handleAddedMoviesObj = (movie, type: string, rate: number) => {

    const tempAddedMoviesObj = { ...addedMoviesObj };

    const {
      favoriteMovies,
      watchedMovies,
      ratedMovies
    } = tempAddedMoviesObj;

    const indexFavorite = favoriteMovies.findIndex(m => m.id === movie.id);
    const indexWatched = watchedMovies.findIndex(m => m.id === movie.id);
    const indexRated = ratedMovies.findIndex(m => m.id === movie.id);

    if (type === 'favorited') {

      if (indexFavorite === -1) {
        favoriteMovies.push(movie);
      } else {
        favoriteMovies.splice(indexFavorite, 1);
      }

    }

    if (type === 'watched') {

      if (indexWatched === -1) {
        watchedMovies.push({
          ...movie,
          createdAt: new Date()
        });
      } else {
        watchedMovies.splice(indexWatched, 1);
        ratedMovies.splice(indexRated, 1);

      }

    }

    if (type === 'rated') {
      const tempRatedMovies = [...addedMoviesObj.ratedMovies];
      const indexRated = tempRatedMovies.findIndex(m => m.id === movie.id);

      const tempWatchedMovies = [...addedMoviesObj.watchedMovies];
      const indexWatched = tempWatchedMovies.findIndex(m => m.id === movie.id);

      if (indexRated === -1) {
        tempRatedMovies.push({
          id: movie.id,
          title: movie.title,
          rate: rate
        });
      } else if (!rate) {
        tempRatedMovies.splice(indexRated, 1);
      } else {
        tempRatedMovies[indexRated].rate = rate;
      }

      tempAddedMoviesObj.ratedMovies = [...tempRatedMovies];

      if (!rate) {
        tempWatchedMovies.splice(indexWatched, 1);
      } else if (indexWatched === -1) {
        tempWatchedMovies.push({
          ...movie,
          createdAt: new Date()
        });
      } else {
        tempRatedMovies.splice(indexRated, 1);

      }

      tempAddedMoviesObj.watchedMovies = [...tempWatchedMovies];

    }

    localStorage.setItem('MoviesList', JSON.stringify(tempAddedMoviesObj))
    setAddedMoviesObj(tempAddedMoviesObj);
    // setMoviesList(tempAddedMoviesObj);

  }

  const handleMoviesListFromLocalStorage = () => {
    const moviesFromLocalStorage = localStorage.getItem('MoviesList');
    if (moviesFromLocalStorage) {
      setAddedMoviesObj(JSON.parse(moviesFromLocalStorage));
    }
  }

  useEffect(() => {
    handleMoviesListFromLocalStorage();
  }, [localStorage.getItem('MoviesList')]);

  return (
    <>
      <MovieBanner
        addedMoviesObj={addedMoviesObj}
        handleAddedMoviesObj={handleAddedMoviesObj}
        detailsLoading={detailsLoading}
        setDetailsLoading={setDetailsLoading}
      />
      <MovieCredits />
      <MoviesList
        moviesToRender={movieRecommendations}
        isRecommendation={isRecommendation}
      />
    </>
  );
}

