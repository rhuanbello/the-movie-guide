import { personDetailsResponseProps } from "./interfaces";

export function handlePersonDetails(
  response: personDetailsResponseProps, 
  setDetailsLoading: Function
) {
  return {
    type: 'setPersonDetails',
    response,
    setDetailsLoading
  };
}
