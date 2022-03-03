export function handlePersonDetails(response, setDetailsLoading) {
  return {
    type: 'setPersonDetails',
    response,
    setDetailsLoading
  };
}
