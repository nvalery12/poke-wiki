import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { apiService } from '../components/api/apiService';
import Card from '../components/cards/card';
import Header from '../components/header';

export default function Home() {
  const [characters, updateCharacters] = useState([]);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    (async () => {
      const data = await apiService(offset);
      updateCharacters(data.results);
    })();
  }, [offset]);

  if (characters.length === 0) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <Header />
      <div className='grid grid-cols-4 gap-4 w-3/4 mx-auto pt-6'>
        {characters.map((character: any) => {
          return <Card key={character.name} data={character} />;
        })}
      </div>
    </>
  );
}
