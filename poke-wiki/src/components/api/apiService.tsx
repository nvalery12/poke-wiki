export const apiService = async (offset: number, id?: string) => {
  const api = 'https://pokeapi.co/api/v2/pokemon/';
  const endPoint = id ? (api + id) : (api + '?limit=28&offset=' + offset);
  const data = await fetch(endPoint, {
    method: 'GET',
  });

  return data.json();
};
