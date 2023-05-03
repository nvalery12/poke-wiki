import { useParams } from 'react-router-dom';
import Header from '../components/header';
import { useEffect, useState } from 'react';
import { apiService } from '../components/api/apiService';

export default function Character() {
  const { characterid } = useParams();
  const [character, updateCharacter] = useState(false as any);

  useEffect(() => {
    (async () => {
      const data = await apiService(0, characterid);
      updateCharacter(data);
    })();
  }, []);

  if (!character) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <Header />
      <div>
        <div className='inline-block'>
          <img src={character.sprites.front_default} alt='Front' className='inline'/>
          <img src={character.sprites.back_default} alt='Front' className='inline'/>
        </div>
        <h1 className='capitalize text-center font-black'>{character.species.name}</h1>
      </div>
    </>
  );
}
