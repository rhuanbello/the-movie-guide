import { popularPersonResponseProps } from "./interfaces";

export function handlePopularPerson(response: popularPersonResponseProps) {
  return {
    type: 'setPopularPerson',
    response
  };
}