export function handlePopularPerson(response) {
  return {
    type: 'setPopularPerson',
    response
  };
}