export const apiService = async (offset: number, id?: string) => {
  const api = 'https://pokeapi.co/api/v2/pokemon/';
  const endPoint = id ? (api + id) : (api + '?limit=20&offset=' + offset);
  const data = await fetch(endPoint, {
    method: 'GET',
  }).then((res) => res.json()).catch((err) => console.log(err));
  return data;

};
