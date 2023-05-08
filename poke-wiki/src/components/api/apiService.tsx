export const apiService = async (offset: number, id?: string) => {
  const api = 'https://pokeapi.co/api/v2/pokemon/';
  const endPoint = id ? (api + id) : (api + '?limit=20&offset=' + offset);
  try {
    const response = await fetch(endPoint, {
      method: 'GET',
    });
    const json = response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
  return;

};
