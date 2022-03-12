import { popularPersonActionProps, popularPersonProps } from "./interfaces";

export function popularPerson(
  state: popularPersonProps[] = [], 
  action: popularPersonActionProps
) {
  const { type, response } = action;

  switch (type) {
    case 'setPopularPerson': {
      const { results } = response;

      const popularPersonFiltered = [...results].map(
        ({ name, profile_path, known_for, id }) => ({
          id,
          name,
          profile_path,
          movies: known_for
            .map(({ original_title }) => ({ original_title }))
            .filter(x => x.original_title !== undefined)
            .map((x) => x.original_title)
            .join(', ')
        })
      ).filter(x => x.movies.length &&
        x.profile_path.length)

      const popularPersonList = [...state, ...popularPersonFiltered]
      return popularPersonList;
    }
    default:
      return state;
  }
}