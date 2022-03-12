import { personDetailsActionProps, personDetailsProps } from "./interfaces";

export function personDetails(state: personDetailsProps = {} as personDetailsProps, action: personDetailsActionProps) {
  const { type, response, setDetailsLoading } = action;

  switch (type) {
    case 'setPersonDetails': {
      const data = response;

      const personBanner = {
        biography: data.biography,
        homepage: data.homepage,
        name: data.name,
        profile_path: data.profile_path,

      }

      const personFilmography = [...data.movie_credits.cast].map(
        ({ title, release_date, poster_path, id, popularity }) => ({
          title,
          release_date,
          poster_path,
          id,
          popularity
        })
      ).filter(movie => movie.poster_path !== null)
        .sort((a, b) => b.popularity - a.popularity);

      const personMovieDetails = {
        also_known_as: data.also_known_as,
        birthday: data.birthday,
        place_of_birth: data.place_of_birth,
        gender: data.gender,
        moviesCount: personFilmography.length
      }

      const personDetailsObj = {
        personBanner,
        personFilmography,
        personMovieDetails
      }

      setTimeout(() => {
        setDetailsLoading(false);
      }, 800);

      return personDetailsObj;
    }
    default:
      return state;
  }
}
